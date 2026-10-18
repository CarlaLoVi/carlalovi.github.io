/* Renders the home page and project pages from window.PORTFOLIO (content.js). */
(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const projects = data.projects.filter((p) => !p.hidden);
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    for (const c of [].concat(children)) if (c) node.append(c);
    return node;
  }

  // ------------------------------------------------------------ shared
  function fillArtist() {
    const a = data.artist;
    $$("[data-artist-name]").forEach((n) => (n.textContent = a.name));
    $$("[data-artist-role]").forEach((n) => (n.textContent = a.role));
    $$("[data-artist-intro]").forEach((n) => (n.textContent = a.intro));
    $$("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
    $$("[data-hero-image]").forEach((n) => {
      if (a.heroImage) n.src = a.heroImage;
      else n.closest(".hero").classList.add("no-art"), n.parentElement.remove();
    });
    $$("[data-artist-email]").forEach((n) => {
      n.href = "mailto:" + a.email;
      n.textContent = a.email;
    });
    $$("[data-artist-links]").forEach((ul) =>
      (a.links || []).forEach((l) => ul.append(el("li", {}, el("a", { href: l.url, target: "_blank", rel: "noopener", text: l.label }))))
    );
    $$("[data-nav]").forEach((nav) => {
      data.sections
        .filter((s) => projects.some((p) => p.section === s.id))
        .forEach((s) => nav.append(el("a", { href: "./#" + s.id, text: s.title })));
      nav.append(el("a", { href: "./#contact", text: "Contact" }));
    });
  }

  function card(p) {
    const img = el("img", { src: p.cover, alt: p.title, loading: "lazy", class: p.pixelCover ? "pixel" : null });
    return el("a", { class: "card", href: "project.html?id=" + encodeURIComponent(p.id) }, [
      el("div", { class: "card-media" }, img),
      el("div", { class: "card-body" }, [el("h3", { text: p.title }), el("p", { text: p.subtitle || "" })]),
    ]);
  }

  // --------------------------------------------------------------- home
  function renderHome(root) {
    data.sections.forEach((s) => {
      const items = projects.filter((p) => p.section === s.id);
      if (!items.length) return;
      root.append(
        el("section", { class: "work", id: s.id }, [
          el("div", { class: "section-head" }, [el("h2", { text: s.title }), el("p", { text: s.blurb || "" })]),
          el("div", { class: "grid" }, items.map(card)),
        ])
      );
    });
  }

  // ------------------------------------------------------------ project
  const blocks = {
    model(b) {
      const mv = el("model-viewer", {
        src: b.src,
        poster: b.poster,
        alt: "Interactive 3D model",
        "camera-controls": true,
        "touch-action": "pan-y",
        "auto-rotate": true,
        "auto-rotate-delay": "0",
        "rotation-per-second": "20deg",
        "interaction-prompt": "none",
        "shadow-intensity": "1",
        "environment-image": "neutral",
        exposure: "1",
        orientation: b.orientation,
        "field-of-view": b.fov,
        "min-field-of-view": b.fov ? "8deg" : null,
        autoplay: b.animated ? true : null,
        loading: "eager",
      });
      const wrap = el("figure", { class: "block block-model" }, [mv]);
      const hint = el("figcaption", { text: "Drag to rotate · scroll or pinch to zoom" });
      if (b.animated) {
        const bar = el("div", { class: "anim-bar" });
        mv.addEventListener("load", () => {
          const names = mv.availableAnimations || [];
          // Clip names come from the source files (Spanish): "Elvis_Armature|Elvis_Correr(0-25)" -> "Run".
          const labels = { Idle: "Idle", Alerta: "Alert", Andar: "Walk", Correr: "Run", CorrerMatar: "Run attack", Matar: "Kill", MatarFrames: "Kill" };
          const pretty = (n) => {
            const key = n.split("|").pop().replace(/^[A-Za-z]+_/, "").replace(/\(.*\)/, "");
            return labels[key] || key.replace(/([a-z])([A-Z])/g, "$1 $2");
          };
          const select = (name, btn) => {
            mv.animationName = name;
            mv.play();
            $$("button", bar).forEach((x) => x.classList.toggle("active", x === btn));
          };
          names.filter((n) => !/Pose[AT]/.test(n)).sort((x, y) => /Idle/.test(y) - /Idle/.test(x)).forEach((n) => {
            const btn = el("button", { type: "button", text: pretty(n) });
            btn.addEventListener("click", () => select(n, btn));
            bar.append(btn);
            if (/Idle/.test(n)) select(n, btn);
          });
        });
        wrap.append(bar);
      }
      wrap.append(hint);
      return wrap;
    },

    video(b) {
      return el("figure", { class: "block block-video" }, [
        el("video", { src: b.src, poster: b.poster, controls: true, playsinline: true, muted: true, loop: true, preload: "metadata" }),
        b.caption && el("figcaption", { text: b.caption }),
      ]);
    },

    images(b, pixel) {
      const grid = el("div", { class: "image-grid", style: `--cols:${b.columns || 2}` },
        b.items.map((src) => el("button", { class: "thumb", type: "button", "data-full": src },
          el("img", { src, alt: "", loading: "lazy", class: pixel ? "pixel" : null }))));
      return el("figure", { class: "block" + (pixel ? " block-pixel" : "") }, [grid, b.caption && el("figcaption", { text: b.caption })]);
    },

    pixel(b) {
      return blocks.images(b, true);
    },

    sprite(b) {
      const sprite = el("div", { class: "sprite", role: "img", "aria-label": b.caption || "Sprite animation" });
      const img = new Image();
      img.onload = () => {
        const fw = img.naturalWidth / b.frames;
        sprite.style.setProperty("--fw", fw);
        sprite.style.setProperty("--fh", img.naturalHeight);
        sprite.style.setProperty("--frames", b.frames);
        sprite.style.setProperty("--dur", b.frames / (b.fps || 10) + "s");
        sprite.style.backgroundImage = `url("${b.src}")`;
      };
      img.src = b.src;
      return el("figure", { class: "block block-sprite" }, [el("div", { class: "sprite-stage" }, sprite), b.caption && el("figcaption", { text: b.caption })]);
    },

    parallax(b) {
      const stage = el("div", { class: "parallax" },
        b.layers.map((src, i) => el("img", { src, alt: "", class: "pixel", style: `--depth:${i / (b.layers.length - 1)}` })));
      const move = (x, y) => {
        stage.style.setProperty("--x", x.toFixed(3));
        stage.style.setProperty("--y", y.toFixed(3));
      };
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        move((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
      });
      stage.addEventListener("pointerleave", () => move(0, 0));
      window.addEventListener("deviceorientation", (e) => {
        if (e.gamma != null) move(Math.max(-0.5, Math.min(0.5, e.gamma / 60)), 0);
      });
      return el("figure", { class: "block block-parallax" }, [stage, b.caption && el("figcaption", { text: b.caption })]);
    },

    text(b) {
      return el("div", { class: "block block-text" }, [b.title && el("h3", { text: b.title }), b.body && el("p", { text: b.body })]);
    },

    download(b) {
      return el("div", { class: "block block-download" }, [
        el("a", { class: "btn btn-primary", href: b.href, text: b.label || "Download" }),
        b.note && el("p", { text: b.note }),
      ]);
    },
  };

  function renderProject(root) {
    const id = new URLSearchParams(location.search).get("id");
    const i = projects.findIndex((p) => p.id === id);
    if (i < 0) {
      root.append(el("p", { class: "missing" }, ["Project not found. ", el("a", { href: "./", text: "Back to portfolio" })]));
      return;
    }
    const p = projects[i];
    const section = data.sections.find((s) => s.id === p.section);
    document.title = `${p.title} — ${data.artist.name}`;

    root.append(
      el("div", { class: "project-head" }, [
        el("a", { class: "back", href: "./#" + p.section, text: "← " + (section ? section.title : "Back") }),
        el("h1", { text: p.title }),
        p.subtitle && el("p", { class: "subtitle", text: p.subtitle }),
        p.description && el("p", { class: "description", text: p.description }),
        p.tools && p.tools.length ? el("ul", { class: "tags" }, p.tools.map((t) => el("li", { text: t }))) : null,
      ])
    );
    p.blocks.forEach((b) => {
      const render = blocks[b.type];
      if (render) root.append(render(b));
      else console.warn("Unknown block type", b.type);
    });

    // Previous / next inside the same section.
    const same = projects.filter((x) => x.section === p.section);
    const j = same.indexOf(p);
    const prev = same[(j - 1 + same.length) % same.length];
    const next = same[(j + 1) % same.length];
    if (same.length > 1) {
      root.append(el("nav", { class: "pager" }, [
        el("a", { href: "project.html?id=" + prev.id }, [el("span", { text: "Previous" }), el("strong", { text: prev.title })]),
        el("a", { href: "project.html?id=" + next.id, class: "next" }, [el("span", { text: "Next" }), el("strong", { text: next.title })]),
      ]));
    }
    setupLightbox();
  }

  // ----------------------------------------------------------- lightbox
  function setupLightbox() {
    const box = el("div", { class: "lightbox", hidden: true }, [el("img", { alt: "" })]);
    document.body.append(box);
    const img = $("img", box);
    document.addEventListener("click", (e) => {
      const t = e.target.closest(".thumb");
      if (t) {
        img.src = t.dataset.full;
        img.className = t.closest(".block-pixel") ? "pixel" : "";
        box.hidden = false;
      } else if (e.target.closest(".lightbox")) box.hidden = true;
    });
    document.addEventListener("keydown", (e) => e.key === "Escape" && (box.hidden = true));
  }

  fillArtist();
  const home = $("[data-sections]");
  if (home) renderHome(home);
  const proj = $("[data-project]");
  if (proj) renderProject(proj);
})();
