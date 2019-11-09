document.addEventListener("scroll", function (e) {
    const blackOverlay = document.getElementById("blackOverlay");
    const overlayHeight = blackOverlay.scrollHeight;
    const scrollHeight = window.scrollY;
    const halfOverlayHeight = overlayHeight / 2;
    if (scrollHeight > 0) {
        blackOverlay.style.opacity = (scrollHeight /
            (overlayHeight / 1.2)).toString();
    }
});
