
//NAVBAR
const nav = document.querySelector('header')

let lastScroll = window.scrollY

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
    nav.classList.add('inactive')
        
    }else{
        nav.classList.remove('inactive')
        
    }
    lastScroll = window.scrollY
})

// WELCOME 
window.addEventListener("scroll", () => {
    var welcome = document.getElementById("welcome");
    if (window.scrollY > 213) {
        welcome.style.opacity = '0';
    } else {
        welcome.style.opacity = '0.2';
    }
});


// RESUME
function DisplayResume() {
    var inresume = document.getElementById("inner-resume");
    var outresume = document.getElementById("outer-resume");
    
    if (window.innerWidth < 769) {
        inresume.style.display = "inline";
        outresume.style.display = "none";
    } else {
        inresume.style.display = "none";
        outresume.style.display = "inline";
    }
}

document.addEventListener("DOMContentLoaded", DisplayResume);
window.addEventListener("resize", DisplayResume);



