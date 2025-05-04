document.addEventListener('DOMContentLoaded', function () {
    var glideNews = new Glide('.glideNews', {
        type: 'carousel',
        hoverpause: false,
        perView: 3,
        breakpoints: {
            1200: {
                perView: 2
            },
            992: {
                perView: 2
            },
            768: {
                perView: 2
            },
            576:{
                perView: 1
            }
        }
    });

    var input1 = document.querySelector('.glideNews');
    input1.addEventListener('input', function (event) {
        glideNews.update({
            autoplay: (event.target.value != 0) ? event.target.value : false
        });
    });

    glideNews.mount();
});
