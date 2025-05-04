document.addEventListener('DOMContentLoaded', function() {
    var glideTwitter = new Glide('.glideTwitter', {
        type: 'carousel',
        hoverpause: false,
        perView: 4,
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

    var input1 = document.querySelector('.glideTwitter');
    input1.addEventListener('input', function(event) {
        glideTwitter.update({
            autoplay: (event.target.value != 0) ? event.target.value : false
        });
    });

    glideTwitter.mount();
});
