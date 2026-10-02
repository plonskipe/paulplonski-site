---
title: About this site
description: How paulplonski.com was made, including how AI was used and what the note at the bottom of each page means.
updated: 2026-10-01
ai:
  level: drafted
  tool: Claude Opus 5.5
  sources: "Paul's direction and his AI-use statements"
  reviewed:
---
{# Paul: this is the page where your own words matter most. Rewrite freely, then set `ai.level`
   to match what you did (paul, edited, or drafted) before setting `reviewed`. #}

# About this site

## How this site was made

I built this site with help from Claude, an AI model made by Anthropic. I used it the way I use it in research: as an assistant in programming, as a conversational partner in writing, and to transcribe information from my CV into the files that generate the publication list.

Every page ends with a short note on how it was written. Some pages I wrote myself. Others Claude drafted from my CV and from research and teaching statements I wrote without AI, and I reviewed and edited them. Nothing goes up until I've reviewed it, and I'm responsible for everything on the site. If you find an error, please [email me](mailto:{{ site.email.primary or site.email.institutional }}).

{% if site.repoUrl %}The site's source code and its full edit history are [public on GitHub]({{ site.repoUrl }}).{% endif %}

## What the page notes mean

<div class="table-wrap">
<table>
  <thead>
    <tr><th scope="col">Note</th><th scope="col">What it means</th></tr>
  </thead>
  <tbody>
    <tr><td>Written by Paul.</td><td>I wrote the text. AI didn't draft or edit the wording.</td></tr>
    <tr><td>Written by Paul and edited with AI assistance.</td><td>I wrote it. Claude suggested changes, and I accepted or rejected each one.</td></tr>
    <tr><td>Drafted with AI from …</td><td>Claude wrote a first draft from the sources named in the note. I reviewed and edited it.</td></tr>
    <tr><td>Compiled with AI from …</td><td>Claude transcribed lists, like the publication list, from my CV. I checked them.</td></tr>
  </tbody>
</table>
</div>

Each note also gives the date I reviewed and approved the page.

## What AI didn't do

Claude didn't decide what goes on the site or invent facts. Publications, dates, and titles come from my CV. Claude made the small "pp" site icon and cropped and resized my photos, but it didn't create or alter what's in them. It doesn't run the build or publish anything; I do.

## Tools

<div class="table-wrap">
<table>
  <thead>
    <tr><th scope="col">Since</th><th scope="col">Tool</th><th scope="col">Used for</th></tr>
  </thead>
  <tbody>
    <tr><td>October 2026</td><td>Claude Opus 5.5 (Anthropic), in the Claude desktop app</td><td>Site code and design, page drafts, the site icon, cropping and resizing my photos, transcribing my CV, checking drafts against my CV</td></tr>
  </tbody>
</table>
</div>

The site is built with [Eleventy](https://www.11ty.dev/), served by [Cloudflare Workers](https://developers.cloudflare.com/workers/), and set in [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), hosted on this site.{% if site.analyticsToken %} Visits are counted with Cloudflare Web Analytics, which doesn't use cookies.{% endif %}
