document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-img');
    const fallbackImages = [
        'image1.jpg',
        'image2.webp',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.webp',
        'image10.jpg',
        'image11.jpg',
        'image12.jpg'

    ];
    
    // Check if images loaded successfully, otherwise use fallbacks
    images.forEach((img, index) => {
        img.onerror = function() {
            this.src = fallbackImages[index % fallbackImages.length];
        };
    });
    
    // Animate explore button on page load
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        setTimeout(() => {
            exploreBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                exploreBtn.style.transform = 'scale(1)';
            }, 300);
        }, 1000);
    }
});