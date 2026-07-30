/**
 * screenshot.mjs — Puppeteer screenshot helper for Absyon Digital
 *
 * Usage:
 *   node screenshot.mjs <url> [label] [widthxheight]
 *
 * Screenshots are saved to "./temporary screenshots/screenshot-N.png"
 * or "screenshot-N-label.png". Files are never overwritten — N auto-increments.
 */

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const [vw, vh] = (process.argv[4] || "1440x900").split("x").map(Number);

const outDir = path.join(__dirname, "temporary screenshots");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function nextFilename() {
  const files = fs
    .readdirSync(outDir)
    .filter((f) => f.startsWith("screenshot-") && f.endsWith(".png"));
  let max = 0;
  for (const f of files) {
    const m = f.match(/^screenshot-(\d+)/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  const n = max + 1;
  const suffix = label ? `-${label.replace(/[^a-z0-9_-]/gi, "-")}` : "";
  return path.join(outDir, `screenshot-${n}${suffix}.png`);
}

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: vw, height: vh });
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

// Scroll through the full page first so scroll-triggered (whileInView)
// reveals have actually fired — and finished animating — before the
// full-page screenshot is taken.
await page.evaluate(async () => {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const step = Math.round(window.innerHeight * 0.85);
  let last = -1;
  while (document.scrollingElement.scrollTop !== last) {
    last = document.scrollingElement.scrollTop;
    window.scrollBy(0, step);
    await delay(350);
  }
  await delay(1200);
  window.scrollTo(0, 0);
  await delay(700);
});

// Chrome's full-page screenshot capture can duplicate `position: sticky`
// elements (rendered once in normal flow, once at their "stuck" spot).
// Real scrolling in a real browser is unaffected — this only neutralizes
// the artifact for the purposes of this screenshot.
await page.addStyleTag({ content: "[data-sticky-header] { position: static !important; }" });

const file = nextFilename();
await page.screenshot({ path: file, fullPage: true });
await browser.close();
console.log("Saved", file);
