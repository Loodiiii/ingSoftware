document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        type: 'loop',
        gap: '1rem',
        perMove: 1,
        focus: 'center',
        breakpoints: {
            '1280': {
                perPage: 3,
            },
            '1024': {
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