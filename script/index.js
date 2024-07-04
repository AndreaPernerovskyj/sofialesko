/* Active - InActive logic for menu bar in Header*/

const menuHeader = [
    document.getElementById("link-home"),
    document.getElementById("link-about"),
    document.getElementById("link-contact")
];

const sections = [
    document.getElementById("home"),
    document.getElementById("about"),
    document.getElementById("contact")
];

// Function to handle menu item activation based on scroll position
const activateMenuItemOnScroll = () => {
    let currentIndex = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentIndex = index;
        }
    });

    menuHeader.forEach((element, index) => {
        if (index === currentIndex) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
};

// Add scroll event listener
window.addEventListener("scroll", activateMenuItemOnScroll);

// Add click event listeners to menu items
menuHeader.forEach(element => {
    element.addEventListener("click", (e) => {
        if (!element.classList.contains("active")) {
            menuHeader.forEach(el => {
                el.classList.remove("active");
            });
            element.classList.add("active");
        }
    });
});

// Rotating the contact img

const contactImage = document.getElementById("contact-img");
const contactBackCard = document.getElementById("backcard");

let isFlipped = false; // Track if the card is flipped

contactImage.addEventListener("click", () => {
    if (!isFlipped) {
        contactImage.style.transform = "rotateY(180deg)";
        contactBackCard.style.transform = "rotateY(0deg)";
        contactBackCard.style.display = "flex";

        // Set a timeout to flip back after 3 seconds
        setTimeout(() => {
            contactImage.style.transform = "rotateY(0deg)";
            contactBackCard.style.transform = "rotateY(180deg)";
            isFlipped = false;
        }, 2000);

        isFlipped = true;
    } else {
        // Flip the card back to the front side immediately
        contactImage.style.transform = "rotateY(0deg)";
        contactBackCard.style.transform = "rotateY(180deg)";

        isFlipped = false;
    }
});

// Menu Burger

const menuBurger = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.header-menu a');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBurger.classList.remove('active');
        headerMenu.classList.remove('active');
    });
});