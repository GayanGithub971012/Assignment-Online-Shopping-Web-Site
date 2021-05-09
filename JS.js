var start = 1;
function setTime() {
    setInterval(imageShow, 3000);
}
function imageShow() {
    var imgscr;
    if (start == 1) {
        imgscr = "bestseller1.jpg";
    }
    else if (start == 2) {
        imgscr = "bestseller2.jpg";
    }
    else if (start == 3) {
        imgscr = "bestseller3.jpg";
    }
    else {
        start = 1;
        imgscr = "bestseller1.jpg";
    }

    document.getElementById("homeImage").src = "" + imgscr;
    start++;
}
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});