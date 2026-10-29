/* =====================================================================
   ELEV8 MOTION STUDIO · YOUR WORK
   ---------------------------------------------------------------------
   To add a new piece:
     1. Put the image or video in the "media" folder.
     2. Copy the example block below, paste it at the TOP of the list
        (straight after "window.WORK = ["), delete the comment marks
        around it and change the details. Keep the comma after the
        closing }.
     3. Commit the change on GitHub (see the guide).

   The first two pieces show at the top of the site. Everything below
   them moves to "Our work" by itself, so the newest always goes first.
   While the list is empty, the top of the site shows just the text.

   file    : the file name in the media folder (.jpg .png .mp4 .webm)
   poster  : for videos, a still image shown before it is tapped
   sound   : true if the video has sound worth hearing (adds a button)
   tags    : the little labels under the piece
   kicker  : small line above the title (used when it is the only
             piece in "Our work")
   ===================================================================== */

window.WORK = [
  /* EXAMPLE, copy this:
  {
    title: "Bakery products doodle",
    file: "bakery-doodle.jpg",
    text: "Every best-seller on one hand-drawn page.",
    tags: ["Products doodle", "Digital"],
    alt: "Hand-drawn doodle of a bakery's products"
  },
  */
];

/* =====================================================================
   BEHIND THE DESIGN · screen recordings of you drawing
   Same idea: add a block at the top. "steps" is a list of
   ["Short title.", "What happens in this step."] pairs.
   "seeIn" is the id of a finished piece above (optional; give that
   piece an id: "..." line). The section hides itself while empty.
   ===================================================================== */

window.PROCESS = [
  /* EXAMPLE, copy this:
  {
    title: "Drawing a cupcake character",
    file: "cupcake-process.mp4",
    poster: "cupcake-process.jpg",
    sound: true,
    kicker: "Screen recording · 40 s · with music",
    steps: [
      ["Outline.", "The shape and face, sketched in line first."],
      ["Colour.", "Flat fills for the frosting and case."],
      ["Details.", "Sprinkles, shine and clean edges."]
    ],
    alt: "Screen recording of a cupcake character being drawn"
  },
  */
];
