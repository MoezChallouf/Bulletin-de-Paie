document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("download-pdf").addEventListener("click", generatePDF);
});

function generatePDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });

    const element = document.getElementById("bulletin");

    html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; // Largeur A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        doc.save("Bulletin_De_Paie.pdf");
    }).catch(error => {
        console.error("Erreur lors de la conversion en PDF :", error);
    });
}
