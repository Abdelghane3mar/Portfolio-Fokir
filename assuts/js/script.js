let listToggle = document.getElementById("listToggle");
let list = document.getElementById("list");

listToggle.addEventListener("click", function() {
    if (list.classList.contains("d-none")) {
        list.classList.add("d-block");
        list.classList.remove("d-none");
    }else{
        list.classList.add("d-none");
        list.classList.remove("d-block");
    }
});

//////////Start mixitup///////////
document.addEventListener("DOMContentLoaded" , function() {
    var mixer = mixitup('.porto_items');
})
//////////End mixitup///////////

//////////Start Typed///////////
var typed = new Typed('#element', {
    strings: ['Professional Web Developer.', 'Professional Mobile Developer.'],
    typeSpeed: 100, backSpeed: 100, loopCount: Infinity, loop: true, showCursor: false,

  });
//////////End Typed///////////


///////////////// Nav Fixed////////////////
window.addEventListener("scroll" , function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky"  , this.window.scrollY > 150);
});
///////////////// Nav Fixed////////////////



////////////// Scroll Top////////////////
let span = document.querySelector(".up");
window.onscroll = function(){
    if (this.scrollY >= 1000 ) {
        span.classList.add("show");
    }
    else{
        span.classList.remove("show");
    }
}
span.onclick = function(){
    window.scrollTo({
        top: 0 , behavior:"smooth" ,
    })
}
////////////// Scroll Top////////////////


let li = document.querySelectorAll(".links");
let sec = document.querySelectorAll("section");

function acitveMeun(){
    let len = sec.length;
    while(--len && window.scrollY + 50 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
acitveMeun()
window.addEventListener("scroll" ,acitveMeun)
