// Eleventy config for paulplonski.com (Eleventy 3.x, ESM).
// Drafted by Claude (Opus 5.5), 2026-10-01. See TRANSPARENCY_GUIDE.md for the AI-label rules
// this file enforces.

import { load as loadYaml } from "js-yaml";

// Level text for the "How this page was made" note. Keep in sync with
// _working/TRANSPARENCY_GUIDE.md.
const AI_LEVELS = {
  paul: "Written by Paul.",
  edited: "Written by Paul and edited with AI assistance",
  drafted: "Drafted with AI",
  compiled: "Compiled with AI",
};

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// YAML dates in frontmatter arrive as Date objects; print them as YYYY-MM-DD.
const isoDate = (value) => {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value);
};

export default function (eleventyConfig) {
  // --- Data -----------------------------------------------------------------
  eleventyConfig.addDataExtension("yaml,yml", (contents) => loadYaml(contents));
  eleventyConfig.addGlobalData("layout", "layouts/base.njk");

  // --- Static files ---------------------------------------------------------
  eleventyConfig.addPassthroughCopy("src/assets");
  // Cloudflare reads _redirects and _headers from the root of the assets directory.
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });
  // Self-hosted Noto Sans (variable) from the Fontsource package.
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource-variable/noto-sans/files": "assets/fonts/noto-sans",
  });

  // --- AI labels: required on every page; unreviewed pages never ship -------
  // Runs before each template is rendered.
  //  - Missing or invalid `ai` block  -> the build stops with an error.
  //  - `ai.reviewed` blank during `npm run build` -> the page is left out.
  //    During `npm run dev` the page is kept and shows a draft banner.
  eleventyConfig.addPreprocessor("ai-labels", "md,njk", (data) => {
    if (data.aiExempt) return;
    const where = data.page?.inputPath ?? "(unknown file)";
    if (!data.ai || !AI_LEVELS[data.ai.level]) {
      throw new Error(
        `[ai-labels] ${where} needs an "ai" block with level: ${Object.keys(AI_LEVELS).join(" | ")}. ` +
          `See _working/TRANSPARENCY_GUIDE.md.`
      );
    }
    if (process.env.ELEVENTY_RUN_MODE === "build" && !data.ai.reviewed) {
      console.log(`[ai-labels] Left out of this build (not yet reviewed): ${where}`);
      return false;
    }
  });

  // --- Filters --------------------------------------------------------------
  eleventyConfig.addFilter("isoDate", isoDate);

  // One-sentence summary of how a page was made, for the page footer.
  eleventyConfig.addFilter("aiSummary", (ai) => {
    if (!ai || !AI_LEVELS[ai.level]) return "";
    const tool = ai.tool ? ` (${escapeHtml(ai.tool)})` : "";
    const sources = ai.sources ? ` from ${escapeHtml(ai.sources)}` : "";
    let text;
    if (ai.level === "paul") text = AI_LEVELS.paul;
    else if (ai.level === "edited") text = `${AI_LEVELS.edited}${tool}.`;
    else text = `${AI_LEVELS[ai.level]}${tool}${sources}.`;
    const review = ai.reviewed
      ? ` Reviewed and approved by Paul on <time datetime="${isoDate(ai.reviewed)}">${isoDate(ai.reviewed)}</time>.`
      : ` <strong>Not yet reviewed by Paul.</strong>`;
    const note = ai.note ? ` ${escapeHtml(ai.note)}` : "";
    return text + review + note;
  });

  // Bold Paul's name in author lists.
  eleventyConfig.addFilter("authors", (str) =>
    escapeHtml(str).replace(/Plonski, P\. ?E\./g, "<strong>$&</strong>")
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
