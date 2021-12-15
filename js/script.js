//jshint esversion:6
const burger = document.querySelector(".icon-burger");
const nav = document.querySelector(".nav-link");
const navLinks = document.querySelectorAll(".nav-links");
const scrollButton = document.querySelector('.arrow-btn');
const main = document.querySelector("main");
const navtab =  document.getElementsByTagName("nav");

burger.addEventListener("click",()=>{
    nav.classList.toggle("checked");

    // nav animation
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
});

const elementInViewport = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) / dividend));
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
};

const handleHeaderScroll = () => {
    const headerBottomOffset = header.getBoundingClientRect().bottom;
    if (headerBottomOffset <= fixedHeader.clientHeight) {
        fixedHeader.classList.add('scrolled');
    } else {
        fixedHeader.classList.remove('scrolled');
    }
};

// arrow scroll
const topOfMain = main.getBoundingClientRect().top;

scrollButton.addEventListener('click', function() {
    window.scroll({
        top: topOfMain,
        behavior: "smooth"
    });
});

gsap.from('.logo', {opacity: 0, duration: 1, delay: .5, y: -10 });
gsap.from('.burger', {opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from('.intro-top', {opacity: 0, duration: 1, delay: 1.5, x: 200 });
gsap.from('.arrow-btn', {opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from('.nav-link', {opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from('.head-content p', {opacity: 0, duration: 1, delay: 3, x: 10 });
gsap.from('.head-content a', {opacity: 0, duration: 1, delay: 3.5, y: 50 });