/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector("#header nav");
const toogle = document.querySelectorAll("nav .toogle");

for (const element of toogle) {
    element.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
}

/* mudar o header da página quando der scroll */
const header = document.querySelector("#header");

const navHeight = header.offsetHeight;

const changeHeaderWhenScroll = () => {
    if (window.scrollY >= navHeight) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
};

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    direction: "horizontal",
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

/* ScrollReveal: Mostrar elementos quando der Scroll na página */
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
});

scrollReveal.reveal(
    `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social
`,
    { interval: 100 }
);

/* Button back to top */

const backToTop = () => {
    const backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY >= 560) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

window.addEventListener("scroll", () => {
    changeHeaderWhenScroll();
    backToTop();
});
