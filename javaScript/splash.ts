// was app.ts, but is specific to the homepage
document.addEventListener("scroll", function(e) {
  const blackOverlay: HTMLElement = document.getElementById("blackOverlay");
  const overlayHeight: number = blackOverlay.scrollHeight;
  const scrollHeight = window.scrollY;

  if (scrollHeight > 0) {
    blackOverlay.style.opacity = (
      scrollHeight /
      (overlayHeight / 1.2)
    ).toString();
  }
});
