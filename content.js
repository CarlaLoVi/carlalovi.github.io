/*
 * ============================================================
 *  PORTFOLIO CONTENT  —  this is the only file you need to edit
 * ============================================================
 *
 *  - To ADD a project: copy one { ... } block inside `projects`, change
 *    its id, texts and file paths, and put the files in media/<id>/.
 *  - To REMOVE a project: delete its block (or set  hidden: true ).
 *  - To REORDER: move the blocks. The site shows them in this order.
 *
 *  Each project page is a list of "blocks", shown top to bottom:
 *    { type: "model",   src: "x.glb", poster: "x.webp" }            interactive 3D (drag to rotate)
 *         optional: animated: true (animation buttons), fov: "20deg" (zoom in if the model looks small)
 *    { type: "video",   src: "x.mp4", poster: "x.jpg", caption: "" }
 *    { type: "images",  items: ["a.webp", "b.webp"], columns: 2, caption: "" }
 *    { type: "pixel",   items: ["a.png"], columns: 3, caption: "" }  pixel art, kept sharp
 *    { type: "sprite",  src: "sheet.png", frames: 9, fps: 10, caption: "" }  animated sprite sheet
 *    { type: "parallax", layers: ["back.png", ..., "front.png"], caption: "" }
 *    { type: "text",    title: "", body: "" }
 *    { type: "download", href: "x.zip", label: "", note: "" }
 *
 *  Sections: add  pixelFont: true  to show that section (home cards and project pages) in a pixel font.
 *  Paths are relative to the website folder.
 */
window.PORTFOLIO = {
  artist: {
    name: "Carla López Vila",
    role: "Video Game Design student · 3D & 2D Game Artist",
    intro:
      "I design and build characters, creatures and environments for games: from sculpt and texturing to rigging, animation and engine integration.",
    email: "carlalovi33@gmail.com",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/carlovi" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/carla-lopez-ing" },
      { label: "itch.io", url: "https://carlovi.itch.io" },
    ],
    education: "Bachelor's Degree in Video Game Design and Production (Grado en Diseño y Producción de Videojuegos) · Fundación Tecnocampus Mataró-Maresme",
    heroImage: "", // e.g. "media/will/threequarter.webp" — leave empty for a text-only header
  },

  sections: [
    { id: "characters", title: "3D Characters", blurb: "Game-ready characters: sculpt, retopology, texturing, rigging and animation." },
    { id: "environments", title: "Environments", blurb: "Levels built from scratch and lit in Unity." },
    { id: "2d", title: "2D Art", blurb: "Pixel-art characters, creatures, backgrounds and tilesets.", pixelFont: true },
    { id: "design", title: "Game Design", blurb: "Board and tabletop game design." },
  ],

  projects: [
    // ------------------------------------------------------------------ 3D
    // Newest to oldest (Carla, 2026-10-19).
    {
      id: "elvis",
      section: "characters",
      title: "Elvis",
      subtitle: "Creature · rigged and animated",
      cover: "media/elvis/threequarter.webp",
      tools: ["Blender"],
      description:
        "Monster from the same universe as Gus. Game-ready creature: high-poly sculpt baked down to a low-poly mesh, textured, rigged and animated with a full gameplay set (idle, alert, walk, run, run-attack and kill). Pick an animation below the viewer.",
      blocks: [
        { type: "model", src: "media/elvis/elvis.glb", poster: "media/elvis/front.webp", animated: true, fov: "15deg" },
        { type: "video", src: "media/elvis/turntable.mp4", poster: "media/elvis/front.webp", caption: "Turntable with idle animation" },
        { type: "images", columns: 4, items: ["media/elvis/front.webp", "media/elvis/threequarter.webp", "media/elvis/side.webp", "media/elvis/back.webp"], caption: "Textured low poly" },
        { type: "images", columns: 4, items: ["media/elvis/clay_front.webp", "media/elvis/clay_threequarter.webp", "media/elvis/clay_side.webp", "media/elvis/clay_back.webp"], caption: "High-poly sculpt" },
      ],
    
    },
    {
      id: "gus",
      section: "characters",
      title: "Gus",
      subtitle: "Creature · rigged and animated",
      cover: "media/gus/threequarter.webp",
      tools: ["Blender"],
      description:
        "A different kind of monster from the same universe as Elvis: heavy and brutish. High-poly sculpt baked to a game-ready mesh, textured, rigged and animated (idle, alert, walk, run and kill). Pick an animation below the viewer.",
      blocks: [
        { type: "model", src: "media/gus/gus.glb", poster: "media/gus/front.webp", animated: true, fov: "24deg" },
        { type: "video", src: "media/gus/turntable.mp4", poster: "media/gus/front.webp", caption: "Turntable with idle animation" },
        { type: "images", columns: 4, items: ["media/gus/front.webp", "media/gus/threequarter.webp", "media/gus/side.webp", "media/gus/back.webp"], caption: "Textured low poly" },
        { type: "images", columns: 4, items: ["media/gus/clay_front.webp", "media/gus/clay_threequarter.webp", "media/gus/clay_side.webp", "media/gus/clay_back.webp"], caption: "High-poly sculpt" },
      ],
    },
    {
      id: "sectarios",
      section: "characters",
      title: "Sectarios",
      subtitle: "Three cultists · rigged, posed as a group",
      cover: "media/sectarios/cover.webp",
      tools: ["Blender"],
      description:
        "Three hooded cultists in deer-skull masks, each built on its own rig, shown together in a single group pose: the leader invoking with raised arms, one pointing at the viewer and one bowing with open arms.",
      blocks: [
        { type: "model", src: "media/sectarios/sectarios.glb", poster: "media/sectarios/front.webp" },
        { type: "video", src: "media/sectarios/turntable.mp4", poster: "media/sectarios/front.webp", caption: "Turntable" },
        { type: "images", columns: 2, items: ["media/sectarios/front.webp", "media/sectarios/threequarter.webp", "media/sectarios/side.webp", "media/sectarios/back.webp"], caption: "Front · three-quarter · side · back" },
      ],
    },
    {
      id: "fighter",
      section: "characters",
      title: "Fighter",
      subtitle: "Combat animation set",
      cover: "media/fighter/cover.jpg",
      tools: [],
      description:
        "Combat animation set for a fighting character: fighting idles, idle breaks, walk, boxing punches and combos, MMA and armada kicks, hit reactions and death.",
      blocks: [
        { type: "video", src: "media/fighter/fighter_animations.mp4", poster: "media/fighter/cover.jpg", caption: "Animation reel" },
      ],
    },
    {
      id: "spacetrooper",
      section: "characters",
      title: "Space Trooper",
      subtitle: "Character animation · Unity",
      cover: "media/spacetrooper/cover.jpg",
      tools: ["Unity"],
      description:
        "Animation and integration of a sci-fi trooper in Unity: locomotion, jumping, peeking around cover, shooting and hit reactions, with and without weapon.",
      blocks: [
        { type: "video", src: "media/spacetrooper/cinematic.mp4", poster: "media/spacetrooper/cover.jpg", caption: "In-engine cinematic" },
        { type: "video", src: "media/spacetrooper/weapon_set.mp4", poster: "media/spacetrooper/weapon_poster.jpg", caption: "Animation set — armed" },
      ],
    },
    {
      id: "will",
      section: "characters",
      title: "Will Smith — Anatomy Study",
      subtitle: "Muscular anatomy · posed",
      cover: "media/will/threequarter.webp",
      tools: ["3ds Max", "Mudbox", "Substance Painter", "Unity"],
      description:
        "Anatomy study of the human muscular system with a likeness of Will Smith: high-poly sculpt, game-ready low poly and PBR textures (base colour, roughness, metalness, normal and height), shown in an action pose.",
      blocks: [
        { type: "model", src: "media/will/will.glb", poster: "media/will/front.webp" },
        { type: "video", src: "media/will/turntable.mp4", poster: "media/will/front.webp", caption: "Turntable" },
        { type: "images", columns: 4, items: ["media/will/front.webp", "media/will/threequarter.webp", "media/will/side.webp", "media/will/back.webp"], caption: "Textured low poly" },
        { type: "images", columns: 4, items: ["media/will/clay_front.webp", "media/will/clay_threequarter.webp", "media/will/clay_side.webp", "media/will/clay_back.webp"], caption: "High-poly sculpt" },
      ],
    },
    {
      id: "rihanna",
      section: "characters",
      title: "Rihanna",
      subtitle: "Posed warrior on a sculpted stage",
      cover: "media/rihanna/threequarter.webp",
      tools: ["3ds Max", "Mudbox", "Substance Painter", "Unity"],
      description:
        "Warrior character with a likeness of Rihanna, focused on the pose and the stage: an action pose with axe and shield, presented on a diorama base with tree stump, rocks and grass. Separate texture sets for skin, clothing, accessories and weapons.",
      blocks: [
        { type: "model", src: "media/rihanna/rihanna.glb", poster: "media/rihanna/front.webp" },
        { type: "video", src: "media/rihanna/turntable.mp4", poster: "media/rihanna/front.webp", caption: "Turntable" },
        { type: "images", columns: 4, items: ["media/rihanna/front.webp", "media/rihanna/threequarter.webp", "media/rihanna/side.webp", "media/rihanna/back.webp"], caption: "Front · three-quarter · side · back" },
      ],
    },

    // ------------------------------------------------------- Environments
    {
      id: "thedust",
      section: "environments",
      title: "The Dust II",
      subtitle: "Map remake built from scratch · Unity",
      cover: "media/thedust/cover.jpg",
      tools: ["Unity"],
      description:
        "A remake of the original Counter-Strike Dust II map, built from the ground up in Unity, playable with collisions throughout the level.",
      blocks: [
        { type: "video", src: "media/thedust/walkthrough.mp4", poster: "media/thedust/shot4.jpg", caption: "Walkthrough" },
        { type: "images", columns: 2, items: ["media/thedust/shot1.jpg", "media/thedust/shot2.jpg", "media/thedust/shot3.jpg", "media/thedust/shot4.jpg"], caption: "In-game screenshots" },
      ],
    },
    {
      id: "greentavern",
      section: "environments",
      title: "Green Tavern",
      subtitle: "Medieval tavern built from scratch · Unity",
      cover: "media/greentavern/cover.jpg",
      tools: ["Unity"],
      description: "A medieval tavern interior, modelled and set up from scratch and lit in Unity.",
      blocks: [
        { type: "images", columns: 1, items: ["media/greentavern/shot1.jpg"] },
        { type: "images", columns: 2, items: ["media/greentavern/shot2.jpg", "media/greentavern/shot3.jpg", "media/greentavern/shot4.jpg", "media/greentavern/shot5.jpg"], caption: "In-game screenshots" },
      ],
    },

    // ----------------------------------------------------------------- 2D
    {
      id: "thoughtjumper",
      section: "2d",
      title: "Thought Jumper",
      subtitle: "2D character design & animation",
      cover: "media/2d/cover.png",
      pixelCover: true,
      tools: [],
      description:
        "Pixel-art project for a 2D platformer: main character Naia with full sprite sheets, a cast of secondary characters with turnarounds and portraits, animated creatures and a layered forest background.",
      blocks: [
        { type: "parallax", caption: "Main background — move the cursor or tilt your phone", layers: [
          "media/2d/bg/Cel.png", "media/2d/bg/VerdFons.png", "media/2d/bg/Arbres6.png", "media/2d/bg/Arbres5.png",
          "media/2d/bg/Arbres4.png", "media/2d/bg/Arbres3.png", "media/2d/bg/Arbres2.png", "media/2d/bg/Arbres1.png",
          "media/2d/bg/TerraFons.png", "media/2d/bg/Herba02.png", "media/2d/bg/Arbust4.png", "media/2d/bg/Arbust3.png",
          "media/2d/bg/Arbust2.png", "media/2d/bg/Arbust1.png", "media/2d/bg/Herba01.png", "media/2d/bg/Herba.png",
        ] },
        { type: "text", title: "Naia — main character", body: "Turnaround, portraits and expressions." },
        { type: "pixel", columns: 1, items: ["media/2d/chars/turnaround_naia.png"] },
        { type: "pixel", columns: 2, items: ["media/2d/chars/naia_chat.png", "media/2d/chars/naia_crying.png"] },
        { type: "text", title: "Creatures", body: "Animated sprite sheets." },
        { type: "sprite", src: "media/2d/sprites/boar_run.png", frames: 5, fps: 10, caption: "Wild boar — run" },
        { type: "sprite", src: "media/2d/sprites/boar_charge.png", frames: 5, fps: 10, caption: "Wild boar — charge" },
        { type: "pixel", columns: 1, items: ["media/2d/sprites/boar_run.png", "media/2d/sprites/boar_charge.png"], caption: "Wild boar sprite sheets — run · charge" },
        { type: "sprite", src: "media/2d/sprites/owl_idle.png", frames: 4, fps: 6, caption: "Owl — idle" },
        { type: "sprite", src: "media/2d/sprites/owl_attack.png", frames: 9, fps: 12, caption: "Owl — attack" },
        { type: "pixel", columns: 1, items: ["media/2d/sprites/owl_idle.png", "media/2d/sprites/owl_attack.png"], caption: "Owl sprite sheets — idle · attack" },
        { type: "text", title: "Secondary characters", body: "Turnaround sheets and portraits." },
        { type: "pixel", columns: 1, items: ["media/2d/chars/turnaround_emil.png"] },
        { type: "pixel", columns: 1, items: ["media/2d/chars/turnaround_caffey.png"] },
        { type: "pixel", columns: 1, items: ["media/2d/chars/turnaround_isabel.png"] },
        { type: "pixel", columns: 1, items: ["media/2d/chars/turnaround_agusti.png"] },
        { type: "pixel", columns: 3, items: ["media/2d/chars/emil.png", "media/2d/chars/caffey.png", "media/2d/chars/isabel.png"] },
        { type: "pixel", columns: 2, items: ["media/2d/chars/agusti.png", "media/2d/chars/agusti_angry.png"] },
        { type: "video", src: "media/2d/mini_artbook.mp4", poster: "media/2d/artbook_poster.jpg", caption: "Mini artbook" },
      ],
    },
    {
      id: "yggdrasil",
      section: "2d",
      title: "Yggdrasil — Hex Tiles",
      subtitle: "Pixel-art tileset for a turn-based RPG",
      cover: "media/yggdrasil/cover.png",
      pixelCover: true,
      tools: [],
      description:
        "Hexagonal 64×64 pixel-art tiles for a turn-based fighting RPG based on Norse mythology: grass and sand variations, shallow coastal water, deep sea and lake water. The water tiles sit lower than the land, so the earth edge shows along every shore. Below, the tiles assembled into small island maps.",
      blocks: [
        { type: "pixel", columns: 1, items: ["media/yggdrasil/archipelago.png"], caption: "Archipelago" },
        { type: "pixel", columns: 2, items: ["media/yggdrasil/island.png", "media/yggdrasil/twinisles.png"], caption: "Lake island · twin isles" },
        { type: "pixel", columns: 3, items: ["media/yggdrasil/tilesheet.png"], caption: "Tile sheet" },
      ],
    },

    // ------------------------------------------------------------- Design
    {
      id: "relics",
      section: "design",
      title: "Relics",
      subtitle: "Board game · rulebook design",
      cover: "media/relics/cover.webp",
      tools: [],
      description:
        "Relics is a negotiation board game designed as a group project: collectors trade, buy and sell objects to be the first to complete seven collection goals. Shown here is the rulebook, a tri-fold leaflet printed on both sides (written in Spanish).",
      blocks: [
        { type: "images", columns: 1, items: ["media/relics/side1.webp"], caption: "Outside: cover, set-up, other rules and glossary" },
        { type: "images", columns: 1, items: ["media/relics/side2.webp"], caption: "Inside: overview, components, turn sequence and end of game" },
        { type: "download", href: "media/relics/relics_rulebook.pdf", label: "Open the rulebook (PDF)", note: "Spanish · 2 pages, folds into three panels" },
      ],
    },
  ],
};
