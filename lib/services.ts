export type Service = {
  index: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    slug: "ai-automation",
    name: "AI automation solutions",
    summary: "Custom workflows that remove manual work from the day-to-day.",
    description:
      "We map the repetitive parts of your operation, order handling, admin, follow-ups, and replace them with automations that run without anyone watching them. Built on your existing tools, not a rip-and-replace.",
  },
  {
    index: "02",
    slug: "ai-chat-agents",
    name: "AI chat agents",
    summary: "Trained on your business, live on your site or WhatsApp.",
    description:
      "A chat agent that answers like someone who actually works there: your menu, your prices, your booking rules. Deployed on your site, WhatsApp, or Instagram, and handed off to a human the moment it should be.",
  },
  {
    index: "03",
    slug: "ai-voice-agents",
    name: "AI voice agents",
    summary: "Phone calls answered, orders taken, 24 hours a day.",
    description:
      "A voice agent that picks up the phone, takes the order or the booking, and logs it straight into your system. No hold music, no missed calls during your busiest hour.",
  },
  {
    index: "04",
    slug: "web-development",
    name: "Web design & development",
    summary: "Fast, custom-built sites that convert on mobile.",
    description:
      "Hand-built with Next.js, not a page-builder theme. Every site is designed around what your customers actually do, browse the menu, book a table, place an order, and built to load fast on the phone in their hand.",
  },
  {
    index: "05",
    slug: "app-development",
    name: "App / software development",
    summary: "Real software for problems a website can't solve.",
    description:
      "When the job needs more than a webpage, custom order printing, internal tools, hardware integration, we build the software. Park N Munch's kitchen printer app is a live example, not a pitch deck.",
  },
  {
    index: "06",
    slug: "branding",
    name: "Branding & graphic design",
    summary: "A visual identity built to hold up across every surface.",
    description:
      "Logo, colour system, type, and tone, designed together so your brand looks like one decision, not five. Applied consistently from your website down to your packaging and socials.",
  },
  {
    index: "07",
    slug: "menu-design",
    name: "Menu design",
    summary: "Menus that sell the dish before it reaches the table.",
    description:
      "Printed or digital, structured to guide attention to your highest-margin items, priced and laid out clearly, and designed to match the rest of your brand instead of sitting apart from it.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
