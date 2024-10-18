let images = [
    { src: 'images/bild1.jpg', caption: 'Bild 1' },
    { src: 'images/bild2.jpg', caption: 'Bild 2' }
];
let currentIndex = 0;

// Zeigt das Bild und die Caption an
function showImage(index) {
    const imageElement = document.getElementById('galleryImage');
    const captionElement = document.getElementById('galleryCaption');
    imageElement.src = images[index].src;
    captionElement.textContent = images[index].caption;
}

// Vorheriges Bild
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

// Nächstes Bild
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}

// Beim Laden der Seite das erste Bild anzeigen
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});

// Lightbox öffnen
function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightbox.style.display = 'flex';
    lightboxImage.src = images[currentIndex].src;
    lightboxCaption.textContent = images[currentIndex].caption;
}

// Lightbox schließen
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
