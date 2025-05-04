document.addEventListener('DOMContentLoaded', function() {
    var glide1 = new Glide('.glideTab1', {
        type: 'carousel',
        hoverpause: false,
        perView: 4,
        breakpoints: {
            1200: {
                perView: 3
            },
            992: {
                perView: 3
            },
            768: {
                perView: 2
            },
            576:{
                perView: 1
            }
        }
    });

    var input1 = document.querySelector('.glideTab1');
    input1.addEventListener('input', function(event) {
        glide1.update({
            autoplay: (event.target.value != 0) ? event.target.value : false
        });
    });

    glide1.mount();
});
