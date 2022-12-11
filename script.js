const navToggle = document.getElementById("nav-toggle"),
      navMenu   = document.getElementById("menu-list"),
      navClose   = document.getElementById("nav-close");

// Show Menu
if(navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

const navLinks = document.querySelectorAll(".menu_item");

function linkAction() {
    navMenu.classList.remove("show-menu");
}

navLinks.forEach(n => n.addEventListener("click", linkAction))