// Randomize starting slide
var slides = document.getElementsByClassName("mySlides");
var slideIndex = Math.floor(Math.random() * (slides.length || 1)) + 1;

// Auto-advance timing (ms) — change this to adjust how long each slide stays
var SLIDE_INTERVAL_MS = 12000;
var autoTimer = null;

// Initialize first slide
showDivs(slideIndex);
startAutoPlay();

// Start (or restart) the auto-advance timer
function startAutoPlay() {
  if (autoTimer) clearInterval(autoTimer);
  autoTimer = setInterval(function() {
    // Auto-advance should NOT reset the timer again
    plusDivs(1, /*resetTimer=*/false);
  }, SLIDE_INTERVAL_MS);
}

// Move by n slides. If user initiated (default), restart the timer.
function plusDivs(n, resetTimer) {
  if (resetTimer === undefined) resetTimer = true;
  showDivs(slideIndex += n);
  if (resetTimer) startAutoPlay();
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (x.length === 0) return;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  x[slideIndex-1].classList.add("active");
}