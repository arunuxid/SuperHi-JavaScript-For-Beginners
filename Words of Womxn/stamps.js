let number = 0;
const stamps = [
    "circles.svg",
    "heart.svg",
    "moon.svg",
    "rainbow.svg",
    "shooting-star.svg",
    "waves.svg",
]

const stampsTag = document.querySelector("div.stamps");

const addStamp = function(x, y){
    const img = document.createElement("img");
    img.setAttribute("src", `assets/${stamps[number]}`);
    img.style.top = y + "px";
    img.style.left = x - (window.innerWidth / 2) + "px";

    stampsTag.appendChild(img);

    const audio = document.createElement("audio");
    audio.setAttribute("src", "assets/plop.mp3");
    audio.play();

    number++;
    if(number > stamps.length -1){
        number = 0;
    }
}

document.addEventListener("click", function(event){
    addStamp(event.pageX, event.pageY);
})