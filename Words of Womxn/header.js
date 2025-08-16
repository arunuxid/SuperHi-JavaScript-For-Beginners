const headerTag = document.querySelector("header");

// When we scroll 80px then add a class to header
document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset;

    if(pixels > 80) {
        headerTag.classList.add("scrolled");
    } else {
        headerTag.classList.remove("scrolled");
    }
});