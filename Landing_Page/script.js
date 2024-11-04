const humberger = document.querySelector(".humberger");
const menu = document.querySelector(".menu");
const btnBTT = document.querySelector(".fa-circle-arrow-up");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("is-active");

    menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
    windowPosition = window.scrollY > 500;
    btnBTT.classList.toggle("btn-active", windowPosition);
});
