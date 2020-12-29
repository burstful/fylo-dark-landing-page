const select = el => document.querySelector(el);


const hamburger = select(".nav-toggle");
const navUL = select(".nav-links");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
})