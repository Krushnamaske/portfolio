const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});


const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

if (window.innerWidth > 650) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursorRing.style.left = e.clientX + "px";
        cursorRing.style.top = e.clientY + "px";
    });


    document.querySelectorAll("a, button").forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursorRing.style.width = "42px";
            cursorRing.style.height = "42px";
        });

        element.addEventListener("mouseleave", () => {
            cursorRing.style.width = "28px";
            cursorRing.style.height = "28px";
        });

    });
}


/* Scroll reveal */

const revealElements = document.querySelectorAll(
    ".section-label, .about-grid, .skill, .project, .education-item, .contact-bottom"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


/* Small parallax effect for hero card */

const heroCard = document.querySelector(".hero-card");

if (heroCard && window.innerWidth > 900) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 70;
        const y = (window.innerHeight / 2 - e.clientY) / 70;

        heroCard.style.transform =
            `rotateY(${-x}deg) rotateX(${y}deg)`;
    });

}