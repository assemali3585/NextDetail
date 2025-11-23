// loader.js is het bestand dat alle CSS en JS bestanden laadt
// Dit bestand wordt ingeladen in index.html

// lijst van css bestanden
const cssFiles = [
  "styles/footer.css",
  "styles/header.css",
  "styles/index.css",
  "styles/laser-effects.css",
  "styles/prices.css",
  "styles/about.css"
];

// lijst van js bestanden
const jsFiles = [
  "scripts/footer.js",
  "scripts/header.js",
  "scripts/slideshow.js",
  "scripts/pakketten.js",
  "scripts/prices.js",
];

//lijst van fonts
const fontFiles = [
  { href: "https://fonts.googleapis.com", crossorigin: false },
  { href: "https://fonts.gstatic.com", crossorigin: true }
];

const fontStylesheet = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";

// CSS toevoegen
cssFiles.forEach(file => {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = file;
  document.head.appendChild(link);
});

// JS toevoegen - load sequentially to prevent timing issues
document.addEventListener("DOMContentLoaded", function() {
  let currentScriptIndex = 0;
  
  function loadNextScript() {
    if (currentScriptIndex >= jsFiles.length) return;
    
    let script = document.createElement("script");
    script.src = jsFiles[currentScriptIndex];
    script.onload = function() {
      currentScriptIndex++;
      loadNextScript();
    };
    script.onerror = function() {
      console.error('Failed to load script:', jsFiles[currentScriptIndex]);
      currentScriptIndex++;
      loadNextScript();
    };
    document.head.appendChild(script);
  }
  
  loadNextScript();
});

// Fonts toevoegen
// Fonts toevoegen
fontFiles.forEach(file => {
  let link = document.createElement("link");
  link.rel = "preconnect";
  link.href = file.href;
  if (file.crossorigin) {
    link.crossOrigin = "anonymous";
  }
  document.head.appendChild(link);
});

// Font stylesheet toevoegen
let fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = fontStylesheet;
document.head.appendChild(fontLink);