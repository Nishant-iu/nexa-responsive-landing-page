
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");

menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
});
const navLinks = primaryNav.querySelectorAll("a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});