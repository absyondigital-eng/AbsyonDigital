export type Project = {
  index: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  location: string;
  services: string[];
  problem: string;
  build: string;
  result: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "ssn-artistic-calligraphy",
    name: "SSN Artistic Calligraphy",
    tagline: "Hand-painted Islamic calligraphy, sold and commissioned in one site.",
    category: "Bespoke Islamic & Arabic calligraphy",
    location: "United Kingdom",
    services: ["Web design & development", "Branding"],
    problem:
      "SSN's work spans a hand-drawn Ayatul Kursi clock bought off the shelf to a full ceiling mural painted on-site. One site had to sell the ready-made pieces and carry a proper commission enquiry, without either side feeling bolted on.",
    build:
      "A hybrid build: a shop for the Ayatul Kursi clocks and canvas pieces, plus a dedicated commission flow for murals, mihrabs, ceilings, and live wedding calligraphy, set against real installation photography throughout.",
    result:
      "Homes, masjids, and businesses can buy ready-made in a few taps, or start a bespoke commission, from the same site.",
  },
  {
    index: "02",
    slug: "adams-building-construction",
    name: "Adam's Building Construction",
    tagline: "One builder, the whole job, from footings to final coat.",
    category: "General building & home renovation",
    location: "Bradford, Leeds, Wakefield, Halifax & Huddersfield",
    services: ["Web design & development", "Branding"],
    problem:
      "Adam's covers nine trades under one roof, extensions, lofts, bathrooms, roofing, driveways, plastering, plumbing and electrics, with no prices published. Without a single specialism to hang a site on, it risked reading like a generic trades directory instead of one contractor worth trusting with the whole job.",
    build:
      "We built the brand identity from Adam's own logo mark, then a full multi-page site: a home page, five trade-grouped pages, and a gallery, all running the same warm, no-nonsense identity so every page reinforces \"one builder, the whole job\" instead of feeling bolted together.",
    result:
      "A site that reads as capable as the work itself, giving West Yorkshire homeowners one place to start any job, big or small.",
  },
  {
    index: "03",
    slug: "biskits",
    name: "Biskits",
    tagline: "Manchester's most Instagrammable brunch, built to match.",
    category: "Coffee, brunch & sizzlers diner",
    location: "Withington, Manchester",
    services: ["Web design & development", "Branding"],
    problem:
      "Biskits needed a site as photogenic as the food: one that could take reservations and sell the halal sizzler platters without looking like a generic menu page.",
    build:
      "We designed and built the full marketing site: a bold hero, a menu grid styled like the dishes themselves, a gallery section built for the Instagram crowd, and a straight line from browsing to reserving a table.",
    result:
      "A site that reads as premium as the brunch itself, and starts selling before anyone walks through the door.",
    featured: true,
  },
  {
    index: "04",
    slug: "cluckin-hot",
    name: "Cluckin' Hot",
    tagline: "Halal smash burgers with a menu that hits as hard as the heat.",
    category: "Halal chicken & smash burgers",
    location: "Eccles, Manchester",
    services: ["Web design & development", "Branding"],
    problem:
      "Cluckin' Hot needed a site that matched their spice-forward brand and made ordering effortless on mobile, where almost every customer actually orders from.",
    build:
      "A dark, high-contrast build around their red-and-cream identity, with a heat-driven menu section and a direct, uncluttered path to ordering.",
    result:
      "A mobile-first ordering experience that looks and feels as loud as the burgers taste.",
  },
  {
    index: "05",
    slug: "house-of-serenity",
    name: "House of Serenity Funeral Services",
    tagline: "A dignified digital front door for a 30-year family practice.",
    category: "Independent funeral directors",
    location: "Brockley & Camberwell, South East London",
    services: ["Web design & development", "Branding"],
    problem:
      "House of Serenity needed a site that respected the weight of what they do. No urgency tactics, no noise, just clarity for families making one of the hardest calls of their lives.",
    build:
      "A calm, editorial site with a plain-language service breakdown, a founder story centred on Marilyn Carty Dip.FD, and a step-by-step \"what happens next\" section so families always know where they stand.",
    result:
      "A site that reads as trustworthy on the first load, in a category where trust is the entire product.",
    featured: true,
  },
  {
    index: "06",
    slug: "mango-paradise",
    name: "Mango Paradise",
    tagline: "Fresh smoothies, Soho, sold on the strength of the fruit.",
    category: "Fresh juice & smoothie bar",
    location: "Soho, London",
    services: ["Web design & development"],
    problem:
      "Mango Paradise needed a site that let the fruit do the talking and made online ordering the obvious next tap.",
    build:
      "A warm, citrus-toned site built around large product photography, a clear menu, and a direct order flow.",
    result: "A page that sells the drink before anyone's tasted it.",
  },
  {
    index: "07",
    slug: "midnight-munch",
    name: "Midnight Munch",
    tagline: "Whitechapel's late-night order, live until 3am.",
    category: "Late-night takeaway",
    location: "Whitechapel, London",
    services: ["Web design & development"],
    problem:
      "Midnight Munch needed a site that worked as hard at 2am as it did at 8pm: fast to order from, on a phone, held by someone who is hungry right now.",
    build:
      "A dark, high-energy build with the menu organised for fast scanning across burgers, wings, and munch boxes, plus one-tap ordering and calling.",
    result:
      "Faster orders and fewer missed calls during the hours that matter most to the business.",
  },
  {
    index: "08",
    slug: "park-n-munch",
    name: "Park N Munch",
    tagline: "Order from your car, get fed before you're parked.",
    category: "Park & eat takeaway",
    location: "Unit 5-10 Choir St, Salford M7 1ZD",
    services: ["Web design & development", "App / software development"],
    problem:
      "Park N Munch's entire model runs on order-from-your-car speed. The website had to move just as fast, and the kitchen needed every order printed the second it landed, with no one stuck watching a screen.",
    build:
      "We built the ordering site, and alongside it a custom Android app, ParkNMunchPrinter, that receives incoming orders and prints them automatically in the kitchen. No POS subscription, no missed tickets.",
    result:
      "A site-to-kitchen pipeline that runs itself: proof Absyon builds working software, not just pages.",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
