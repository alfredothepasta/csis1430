document.addEventListener("scroll", function (e) {
    var blackOverlay = document.getElementById("blackOverlay");
    var overlayHeight = blackOverlay.scrollHeight;
    var scrollHeight = window.scrollY;
    if (scrollHeight > 0) {
        blackOverlay.style.opacity = (scrollHeight /
            (overlayHeight / 1.2)).toString();
    }
});
