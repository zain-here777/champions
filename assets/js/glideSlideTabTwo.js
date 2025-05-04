document.addEventListener('DOMContentLoaded', function() {
    // Wait for tab to be shown before initializing
    document.getElementById('pills-profile-tab').addEventListener('shown.bs.tab', function() {
        var glide2 = new Glide('.glideTab2', {
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

        var input2 = document.querySelector('.glideTab2');
        input2.addEventListener('input', function(event) {
            glide2.update({
                autoplay: (event.target.value != 0) ? event.target.value : false
            });
        });

        glide2.mount();
    });
});
