document.addEventListener("scroll", function(e) {
  const blackOverlay: HTMLElement = document.getElementById("blackOverlay");
  const overlayHeight: number = blackOverlay.scrollHeight;
  const scrollHeight = window.scrollY;
  const halfOverlayHeight: number = overlayHeight / 2;

  if (scrollHeight > 0) {
    blackOverlay.style.opacity = (
      scrollHeight /
      (overlayHeight / 1.2)
    ).toString();
  }
});
