window.onscroll = function() { bar() };

var header = document.getElementById("mybar");
var fixed = header.offsetTop;

function bar() {
    if (window.pageYOffset > fixed) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}