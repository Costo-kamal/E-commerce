$(document).ready(function() {

    $('#search, .fa-search').mouseenter(function() {
        $('.logo').hide();
    });
    $('#search, .fa-search').mouseleave(function() {
        $('.logo').show();
    });

    $('.fa-bars').click(function() {
        $('.navbar').toggle();
        $('this').toggleClass('.fa-times')
    });
    $('.fa-times').click(function() {
        $('.navbar').toggle();

    });

    $(window).on('scroll load', function() {

        if ($(window).scrollTop() > 20) {
            $('#header').css({
                'background': 'rgb(116, 7, 28)',
                'box-shadow': '0 10px 30px #000'
            });
        } else {
            $('#header').css({
                'background': '#333',
                'box-shadow': 'none'
            });
        }


    });
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 1,
        autoplay: true

    });

    $('.product-slide').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        autoplay: true,
        center: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            550: {
                items: 2,

            },
            1000: {
                items: 3

            }
        }

    });


});