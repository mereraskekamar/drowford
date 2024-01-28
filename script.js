function scrollToBook(targetBookId) {
   // Scroll smoothly to the target book content
   var targetBook = document.getElementById(targetBookId);

   if (targetBook) {
       var targetBookContent = targetBook.querySelector('.ebook-store-content');
       
       if (targetBookContent) {
           targetBookContent.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
           });
       }
   }
}

/* Add this JavaScript inside your existing script */
// Additional JavaScript for PDF Viewer Modal
function openPdfViewerModal(pdfPath) {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.setAttribute('src', pdfPath);

    const modal = document.getElementById('pdfViewerModal');
    modal.style.display = 'block';
}

function closePdfViewerModal() {
    const modal = document.getElementById('pdfViewerModal');
    modal.style.display = 'none';

    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.setAttribute('src', ''); // Reset the PDF viewer source
}
function showFullDrawing(imagePath) {
    var fullDrawingModal = document.getElementById('full-drawing-modal');
    var fullDrawingImage = document.getElementById('full-drawing-image');

    fullDrawingImage.src = imagePath;
    fullDrawingModal.style.display = 'flex';
}

function closeFullDrawingModal() {
    var fullDrawingModal = document.getElementById('full-drawing-modal');
    fullDrawingModal.style.display = 'none';
}

