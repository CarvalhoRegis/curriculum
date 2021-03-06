//Menu
function openNav(){
    document.getElementById("Menu").style.width = "100%";
}
//fechar menu
function closeNav(){
    document.getElementById("Menu").style.width = "0";
}

// Animação Menu
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["Study", "Focus", "a Journey", "Leaning"];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length){

        if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);

    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {

        if(!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);

    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;

        if(textArrayIndex >= textArray.length) 
        textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }

    document.addEventListener("DOMContentLoaded",
    function(){

        if(textArray.length) 
        setTimeout(type, newTextDelay + 250);
    });
}

// sobre
var i = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;

var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWrite() {

    if(i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0, i+1);
        i++;
        setTimeout(typewrite, speed);
    }
}
typeWrite();