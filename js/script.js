// ===========================
// Education Details
// ===========================

function openEducation() {
    document.getElementById("educationModal").style.display = "flex";
}

function closeEducation() {
    document.getElementById("educationModal").style.display = "none";
}


// ===========================
// Certificate Popup
// ===========================

function openCertificate(imagePath) {

    const certificateModal =
        document.getElementById("certificateModal");

    const certificateImage =
        document.getElementById("certificateImage");

    certificateImage.src = imagePath;

    certificateModal.style.display = "flex";

}

function closeCertificate() {

    document.getElementById("certificateModal").style.display = "none";

}

// ===========================
// Marksheet Popup
// ===========================

function openMarksheet(image) {
    document.getElementById("marksheetImage").src = image;
    document.getElementById("marksheetModal").style.display = "flex";
}

function closeMarksheet() {
    document.getElementById("marksheetModal").style.display = "none";
}

/* ==========================
   MOBILE NAVBAR
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close menu after clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});