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