const scrollAmount = 300;  // Pixels to scroll with each button press
const photoContainer = document.getElementById('photoContainer');

function scrollLeft() {
    photoContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

function scrollRight() {
    photoContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
