document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        type: 'loop',
        gap: '1rem',
        perMove: 1,
        focus: 'center',
        breakpoints: {
            '640': {
                perPage: 2,
            },
            '480': {
                perPage: 1,
            },
        }
    }).mount();
});