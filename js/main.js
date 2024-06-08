let currentScrollPosition = 0;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const cardWidth = document.querySelector('.card_conten').offsetWidth + 30; // card width + margin
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    const maxScrollPosition = carousel.scrollWidth - (visibleCards * cardWidth);

    currentScrollPosition += direction * cardWidth;

    if (currentScrollPosition < 0) {
        currentScrollPosition = 0;
    } else if (currentScrollPosition > maxScrollPosition) {
        currentScrollPosition = maxScrollPosition;
    }

    carousel.style.transform = `translateX(-${currentScrollPosition}px)`;
}
