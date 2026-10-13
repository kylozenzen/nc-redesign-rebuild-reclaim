/* =====================================================================
   NOBODY CREATIVE — SITE CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit to change the site.

   • Change words:      edit the text between the quotes.
   • Hide a section:    set  show: false   (set it back to true to bring it back).
   • Reorder sections:  move a whole { ... } block up or down in SECTIONS.
   • Add a build:       copy one block in BUILDS, paste it, fill it in.
   • Hide a build:      set  show: false  on that build.

   Rules that keep it from breaking:
   • Keep the quotes around text. If your text has a " in it, use ’ or “ ” instead.
   • Every block ends with a comma:  },
   • Use <br> inside a headline to force a line break.
   ===================================================================== */

const SITE = {
  name: "Nobody Creative",
  location: "San Antonio, TX",
  version: "v2.0",
  portfolioUrl: "https://bencampbell.netlify.app/",
  newsletterUrl: "https://nobody-creative.beehiiv.com/",
  linkedinUrl: "https://www.linkedin.com/company/its-nobody-creative/",

  // The button on the right side of the header
  headerButton: { label: "Portfolio ↗", url: "https://bencampbell.netlify.app/" },

  // Small line in the footer
  footerSign: "nobody.build() / trust nobody",
};


/* ---------------------------------------------------------------------
   BUILDS — the cards in the Builds grid AND the dots orbiting the logo.
   name    : the build's name
   method  : the code-style verb shown after the name (see the brand rules)
   type    : "app" | "tool" | "game" | "experiment"   (drives the filter buttons)
   status  : "live" | "beta" | "waitlist" | "dev"
   color   : the build's own brand color (stripe, icon tile, orbit dot)
   icon    : optional path to its real icon, e.g. "assets/icons/postiq.png"
   desc    : one sentence, written for the person who'd use it
   stack   : what it runs on, short
   url     : the link. Leave "" if there isn't one yet (card shows "Link soon").
   linkLabel: optional button text (default "Open ↗")
   note    : optional highlight line (shows as a ★ badge)
   show    : true / false
   --------------------------------------------------------------------- */
const BUILDS = [
  {
    name: "PostIQ", method: ".plan()", type: "app", status: "live", color: "#5B74FF",
    desc: "A Buffer companion for planning content: post library, content pillars, and a calendar that spots the gaps.",
    stack: "JS · Netlify Functions · Buffer API",
    url: "https://postiq.netlify.app",
    note: "Featured in a Buffer case study",
    show: true,
  },
  {
    name: "Receipts", method: ".approve()", type: "tool", status: "waitlist", color: "#CAFD00",
    desc: "No-login approval rooms for creators doing client work. The client signs off, the receipt keeps the record.",
    stack: "JS · Supabase · Buffer API",
    url: "https://receipts-beta.netlify.app",
    linkLabel: "Join the waitlist ↗",
    show: true,
  },
  {
    name: "Uplink", method: ".goLive()", type: "tool", status: "live", color: "#74F6D4",
    desc: "Go-live announcements for streamers, sent to every social channel at once through Buffer.",
    stack: "PWA · Netlify Functions · Buffer API",
    url: "https://projectuplink.netlify.app",
    show: true,
  },
  {
    name: "Plot Twisted", method: ".play()", type: "game", status: "live", color: "#FFC65C",
    desc: "Movie trivia built on deliberately bad but technically accurate plot summaries. Name the film.",
    stack: "PWA · Netlify Functions · 468 clues",
    url: "https://plot-twisted.netlify.app",
    show: true,
  },
  {
    name: "Moved", method: ".log()", type: "app", status: "live", color: "#B98CFF",
    desc: "A workout log for people who want to write down the lift and get on with their day.",
    stack: "PWA · offline-first",
    url: "https://moved-app.netlify.app",
    show: true,
  },
  {
    name: "Steady", method: ".track()", type: "app", status: "live", color: "#FF7AB6",
    desc: "A nutrition tracker that keeps logging quick, so you actually keep doing it.",
    stack: "PWA · offline-first",
    url: "https://steady-app.netlify.app",
    show: true,
  },
  {
    // Parked for now. Flip show to true to bring it back.
    name: "Nobody Arcade", method: ".insertCoin()", type: "experiment", status: "dev", color: "#8B7BFF",
    desc: "A cabinet-style home for the small games, with gameplay previews and a back room you have to find.",
    stack: "JS · PWA · no build step",
    url: "",
    show: false,
  },
];


/* ---------------------------------------------------------------------
   VISUAL WORK — the spec-ad cards. Images live in assets/visual-work/.
   --------------------------------------------------------------------- */
const VISUALS = [
  { title: "Otherworldly Sleep", label: "Casper × NASA / spec",  image: "assets/visual-work/casper-nasa.svg",
    alt: "Casper and NASA spec ad: astronauts asleep in a spacecraft", show: true },
  { title: "Still Going",        label: "Duracell / spec",       image: "assets/visual-work/duracell-still-going.svg",
    alt: "Duracell spec ad: a glowing lantern beside a wilted plant", show: true },
  { title: "Drama. Infused.",    label: "Lipton / illustration", image: "assets/visual-work/lipton-spill-the-tea.svg",
    alt: "Illustrated Lipton spec ad: a tea bag gossiping to peppermint and sage", show: true },
];


/* ---------------------------------------------------------------------
   SECTIONS — the page, top to bottom. Reorder by moving blocks.
   nav: the label in the header menu ("" = not in the menu)
   --------------------------------------------------------------------- */
const SECTIONS = [
  {
    type: "hero", show: true,
    pills: ["Independent creative studio", "San Antonio, TX", "v2.0"],
    headline: "Build weird things. Ship the good ones.",   // the last period turns orange
    lede: "Apps, games, marketing tools and visual work from Ben Campbell, a social media and content marketer who codes just enough to be dangerous.",
    primary:   { label: "See the builds ↓", url: "#builds" },
    secondary: { label: "Marketing portfolio ↗", url: "https://bencampbell.netlify.app/" },
  },

  { type: "strip", show: true },   // the scrolling line of build.method() names

  {
    type: "builds", show: true, id: "builds", nav: "Builds",
    kicker: "// builds",
    headline: "Stuff I actually shipped.",
    lede: "Every build has its own brand. Here they all wear the same jacket: what it is, what state it's in, what it runs on, and a link to go poke it.",
  },

  {
    type: "visuals", show: true, id: "visuals", nav: "Visual work",
    kicker: "// visual work",
    headline: "No API required.",
    lede: "Spec campaigns, static ads and unsolicited brand ideas. Sometimes the thing only needs one frame to do its job.",
    footnote: "3 shown / 9 in the file / all unofficial spec work",
    button: { label: "All visual work →", url: "visuals.html" },
  },

  {
    type: "story", show: true, id: "why", nav: "About",
    kicker: "// why this exists",
    headline: "A marketer who ships.",
    headlineMuted: "Mostly on purpose.",
    changelog: ["- Nobody Studios", "- Nobody Builds", "+ Nobody Creative: one studio, every build"],
    paragraphs: [
      "Nobody Creative started during a job search, when a marketer with six years of brand work needed somewhere to put the ideas that didn't fit in a cover letter.",
      "So I built them. Tools for Buffer users, a workout log, a nutrition tracker, movie trivia. Some have real users. Some are prototypes with excellent intentions.",
      "All of it is practice at the same job: turning strategy into something people can click, play, use, or stop scrolling for. This site is the lab. The portfolio is the clean case file.",
    ],
    primary:   { label: "See the responsible work ↗", url: "https://bencampbell.netlify.app/" },
    secondary: { label: "LinkedIn ↗", url: "https://www.linkedin.com/company/its-nobody-creative/" },
  },

  {
    type: "rules", show: true, id: "rules",
    kicker: "// how it runs",
    headline: "Nobody asked for this. That's the point.",
    items: [
      { code: "01 .make()",   title: "Make the thing.",         text: "Ideas are cheap. A working URL somebody can use is more interesting." },
      { code: "02 .polish()", title: "Polish the joke.",        text: "Useful can have personality. Good UX and a dumb joke can sit at the same table." },
      { code: "03 .ship()",   title: "Ship before permission.", text: "Prototype, test, learn, improve. The approval committee can catch up." },
    ],
  },

  {
    type: "trust", show: true,
    kicker: "// house rule",
    headline: "TRUST NOBODY.",
    text: "Especially when nobody tells you to stop building the weird thing.",
  },

  {
    type: "brand", show: true, id: "brand", nav: "Brand",
    kicker: "// brand",
    headline: "One core. Everything orbits.",
    text: "The orange core is the studio. The dotted orbit is everything that ships from it. Each dot is a build, wearing its own color. Set in Geist and Geist Mono, on a grid, with one accent and no exceptions.",
  },

  {
    // HIDDEN while the newsletter is being reworked. Edit the words, then set show: true.
    // When it's back on, it also adds "The Feed ↗" to the footer.
    type: "newsletter", show: false, id: "feed",
    kicker: "// the feed / weekly on beehiiv",
    headline: "Ideas so good they probably won't get approved.",
    lede: "Ads, campaigns, platform changes, and the \"wait, why does that work?\" stories behind them. New issue Friday mornings.",
    finePrint: "*Your boss will never know. Unless they subscribe too. Then this gets awkward.",
    button: { label: "Read The Feed ↗", url: "https://nobody-creative.beehiiv.com/" },
  },
];
