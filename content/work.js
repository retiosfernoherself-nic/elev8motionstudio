/* =====================================================================
   ELEV8 MOTION STUDIO · YOUR WORK
   ---------------------------------------------------------------------
   To add a new piece:
     1. Put the image or video in the "media" folder.
     2. Copy one { ... } block below, paste it at the TOP of the list,
        and change the details. Keep the comma after the closing }.
     3. Upload the Website folder to Netlify again (see the guide).

   The first two pieces show at the top of the site. Everything below
   them moves to "Our work" by itself, so the newest always goes first.

   file    : the file name in the media folder (.jpg .png .mp4 .webm)
   poster  : for videos, a still image shown while the video loads
   sound   : true if the video has sound worth hearing (adds a button)
   tags    : the little labels under the piece
   kicker  : small line above the title (used when it is the only
             piece in "Our work")
   ===================================================================== */

window.WORK = [
  {
    id: "drink-your-fill",
    title: "Drink your fill",
    file: "juice.mp4",
    poster: "juice.jpg",
    text: "A glass pours endlessly over the post, straight into the character's mouth.",
    tags: ["Animated post", "4:5 · 10 s"],
    alt: "Juice pouring over a post into a character's mouth"
  },
  {
    title: "Trick or Sweet!",
    file: "trick-or-sweet.mp4",
    poster: "trick-or-sweet.jpg",
    sound: true,
    text: "A cauldron erupts with sweets to a magic sparkle sound, then the offer pops in.",
    tags: ["Motion graphic", "4:5 · 9 s · sound"],
    alt: "Trick or Sweet cauldron animation"
  },
  {
    title: "Something's lurking in the cookie jar",
    file: "cookie-flyer.jpg",
    kicker: "Halloween flyer · bakery",
    text: "Glowing eyes peer out of a jar of cookies, surrounded by the full Halloween range: ghost, bat, pumpkin and spider-web cookies. A price burst and a pre-order deadline do the selling.",
    tags: ["Flyer", "Instagram 4:5", "A5 print with tear-off tabs"],
    alt: "Halloween cookie flyer: Something's lurking in the cookie jar, with glowing eyes in a jar of cookies, ghost, bat, pumpkin and spider cookies, and a box of 6 for £12"
  },
];

/* =====================================================================
   BEHIND THE DESIGN · screen recordings of you drawing
   Same idea: add a block at the top. "steps" is a list of
   ["Short title.", "What happens in this step."] pairs.
   "seeIn" is the id of the finished piece above (optional).
   ===================================================================== */

window.PROCESS = [
  {
    title: 'Drawing the girl from "Drink your fill"',
    file: "process-girl.mp4",
    poster: "process-girl.jpg",
    sound: true,
    kicker: "Screen recording · 45 s · with music",
    steps: [
      ["Outline.", "Her curly hair and face, sketched in line first."],
      ["Features.", "Closed eyes, soft brows and the wide-open mouth that catches the pour."],
      ["Colour.", "Flat fills for her hair, skin and mouth."],
      ["Details.", "Lashes and clean edges, finished zoomed right in."]
    ],
    seeIn: "drink-your-fill",
    alt: "Screen recording of the character being drawn"
  },
];
