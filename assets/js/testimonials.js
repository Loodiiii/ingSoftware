document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        type: 'loop',
        gap: '1rem',
        perMove: 1,
        focus: 'center',
        breakpoints: {
            '1366': {
                perPage: 2,
            },
            '640': {
                perPage: 1,
            },
            '480': {
                perPage: 1,
            },
        }
    }).mount();
});