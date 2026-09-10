const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.openModal = function (imageSrc, captionText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("modalCaption");

    if (modal && modalImg && caption) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
        caption.innerHTML = captionText;
    }
};

document.addEventListener("click", function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target.classList.contains("close-modal") || event.target === modal) {
        if (modal) modal.style.display = "none";
    }
});

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});