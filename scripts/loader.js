// loader.js is het bestand dat alle CSS en JS bestanden laadt
// Dit bestand wordt ingeladen in index.html

// lijst van css bestanden
const cssFiles = [
  "styles/footer.css",
  "styles/header.css",
  "styles/index.css",
  "styles/laser-effects.css",
  "styles/prices.css"
];

// lijst van js bestanden
const jsFiles = [
  "scripts/footer.js",
  "scripts/header.js",
  "scripts/slideshow.js",
  "scripts/pakketten.js",
  "scripts/prices.js"
];

//lijst van fonts
const fontFiles = [
  "https://fonts.googleapis.com",
    "https://fonts.gstatic.com"
];

// CSS toevoegen
cssFiles.forEach(file => {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = file;
  document.head.appendChild(link);
});

// JS toevoegen
document.addEventListener("DOMContentLoaded", function() {
  jsFiles.forEach(file => {
    let script = document.createElement("script");
    script.src = file;
    script.defer = true;
    document.body.appendChild(script);
  });
});

// Fonts toevoegen
fontFiles.forEach(file => {
  let link = document.createElement("link");
  link.rel = "preconnect";
  link.href = file;
  document.head.appendChild(link);
});