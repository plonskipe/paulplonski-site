// Site-wide data, available in templates as `site.*`.
// Values come from _working/SOURCES_AND_FACTS.md (CV, July 2026). Check before changing.

export default {
  name: "Paul E. Plonski",
  url: "https://paulplonski.com",
  description:
    "Paul E. Plonski studies emotion, emotion regulation, and psychophysiology, including how people respond to climate change information.",
  locale: "en_US",

  position: "Research Fellow and Part-time Visiting Assistant Professor",
  department: "Department of Psychology",
  institution: "Swarthmore College",
  location: "Swarthmore, PA",

  email: {
    // Domain address goes here once Cloudflare Email Routing (or other forwarding) delivers mail.
    // Templates show it first when it's set. Example: "paul@paulplonski.com"
    primary: null,
    institutional: "paul.plonski@swarthmore.edu",
  },

  links: {
    cv: "/assets/files/plonski_CV.pdf",
    scholar: "https://scholar.google.com/citations?user=BTRt_w0AAAAJ",
    orcid: "https://orcid.org/0000-0002-6748-6020",
    osf: "https://osf.io/c9pgz/",
    labManual:
      "https://docs.google.com/document/d/1j1slcWtSfs8310XW9uPjKjAVLSqT2R0FaTuyC45NxIs/edit?usp=sharing",
  },

  // Public GitHub repo URL, e.g. "https://github.com/<user>/paulplonski-site".
  // Footer links to it once set.
  repoUrl: "https://github.com/plonskipe/paulplonski-site",

  // Cloudflare Web Analytics token (dashboard > Analytics & Logs > Web Analytics).
  // Leave empty to load no analytics script.
  analyticsToken: "",

  nav: [
    { label: "Research", url: "/research/" },
    { label: "Publications", url: "/publications/" },
    { label: "Teaching", url: "/teaching/" },
    { label: "Resources", url: "/resources/" },
    { label: "CV", url: "/assets/files/plonski_CV.pdf" },
  ],

  year: new Date().getFullYear(),
};
