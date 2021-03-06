//jshint esversion:6
const burger = document.querySelector(".icon-burger");
const nav = document.querySelector(".nav-link");
const navLinks = document.querySelectorAll(".nav-links");
const scrollButton = document.querySelector('.arrow-btn');
const main = document.querySelector("main");
const navtab =  document.getElementsByTagName("nav");
const inputs = document.querySelectorAll(".input");
const message = document.querySelector("#message")



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

// form animation
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
};
function blurFunc() {
    let parent = this.parentNode;
    if(this.value === ""){
        parent.classList.remove('focus');
    }
};

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

// contact message count
const handleMessageCount = () => {
    var msg = document.getElementById("message").value;
    var msgCount = document.getElementById("message-count")
    var msgLength = msg.length;
    const maxLength = 1000;
    var charLeft = maxLength - msgLength;
    msgCount.innerText = charLeft;
  };

message.addEventListener("input", handleMessageCount);

const contactMessage = document.querySelector('.success-message');
if (window.location.search.includes('success')) {
  contactMessage.innerHTML = "Thank you for your message, I'll get back to you as soon as I can &#128578;"
}
