let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const totalImages = images.length;

function updateGallery() {
    const offset = -currentImageIndex * 100;
    document.querySelector('.gallery').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateGallery();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateGallery();
}
