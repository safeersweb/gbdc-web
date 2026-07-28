// ==========================================
// GBDC - Intermediate Admissions JavaScript
// ==========================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }

});

// ==========================================
// Sticky Navbar
// ==========================================

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.left = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "9999";
        navbar.style.boxShadow = "0 6px 18px rgba(0,0,0,.15)";

    } else {

        navbar.style.position = "relative";
        navbar.style.boxShadow = "none";

    }

});

// ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealItems = document.querySelectorAll(

".action-card, .programme-card, .document-card, .contact-card, .timeline-item"

);

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

revealItems.forEach(function(item){

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition="all .8s ease";

observer.observe(item);

});
// ==========================================
// Ripple Effect on Buttons
// ==========================================

document.querySelectorAll(".btn").forEach(function(button){

button.addEventListener("click", function(e){

const ripple = document.createElement("span");

const rect = button.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

ripple.style.width = size + "px";
ripple.style.height = size + "px";

ripple.style.left = (e.clientX - rect.left - size/2) + "px";
ripple.style.top = (e.clientY - rect.top - size/2) + "px";

ripple.style.position = "absolute";
ripple.style.borderRadius = "50%";
ripple.style.background = "rgba(255,255,255,.35)";
ripple.style.transform = "scale(0)";
ripple.style.animation = "ripple .6s linear";
ripple.style.pointerEvents = "none";

button.style.position = "relative";
button.style.overflow = "hidden";

button.appendChild(ripple);

setTimeout(function(){
ripple.remove();
},600);

});

});

// ==========================================
// Hero Title Animation
// ==========================================

const heroTitle = document.querySelector(".hero-title");

if(heroTitle){

heroTitle.animate([

{
opacity:0,
transform:"translateY(50px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:1000,
fill:"forwards"

});

}

// ==========================================
// Active Navigation Highlight
// ==========================================

document.querySelectorAll(".nav-links a").forEach(function(link){

link.addEventListener("click",function(){

document.querySelectorAll(".nav-links a").forEach(function(item){

item.classList.remove("active-link");

});

this.classList.add("active-link");

});

});

// ==========================================
// Mobile Menu Toggle
// ==========================================

function toggleMenu(){

const nav=document.getElementById("nav-links");

if(nav){

nav.classList.toggle("active");

}

}

// ==========================================
// Dropdown Toggle
// ==========================================

function toggleDropdown(event){

event.preventDefault();

const menu=document.getElementById("admission-dropdown");

if(menu){

menu.classList.toggle("show");

}

}

// ==========================================
// Close Mobile Menu on Link Click
// ==========================================

document.querySelectorAll(".nav-links a").forEach(function(link){

link.addEventListener("click",function(){

const nav=document.getElementById("nav-links");

if(nav){

nav.classList.remove("active");

}

});

});

// ==========================================
// Ripple Animation CSS
// ==========================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

.active-link{

color:#ffd54f !important;

font-weight:700;

}

`;

document.head.appendChild(style);

console.log("GBDC Intermediate Admissions Loaded Successfully");
