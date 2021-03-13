var share = document.querySelector(".share");
var links = document.querySelector(".links");
var avatar = document.querySelector(".avatar");
var mediaquery = window.matchMedia("(min-width: 58.60em)");

function desktopShare() {
    if (links.style.display == "flex") {
        links.style.display = "none";
    }
    else {
        links.style.display = "flex"
    };
};

function moblieShare() {
    if (links.style.display == "none") {
        links.style.display = "flex"
        avatar.style.marginLeft = "-9999px";
    }
    else {
        links.style.display = "none";
        avatar.style.marginLeft = "0";
    };
};

function screenTest(event) {
    if (event.matches) {
        share.removeEventListener("click", moblieShare);
        share.addEventListener("click", desktopShare);
    }
    else {
        share.removeEventListener("click", desktopShare);
        share.addEventListener("click", moblieShare);
    }
};

screenTest(mediaquery);
mediaquery.addEventListener("change", screenTest);
