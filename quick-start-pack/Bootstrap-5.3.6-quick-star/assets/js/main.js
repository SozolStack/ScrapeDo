(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        //------------ Offcanvas menu -------------

        $('.open__menu').on('click', function () {
            $('.mobile__menu, .overlay').addClass('active');
        })
        $('.close__menu, .overlay').on('click', function () {
            $('.mobile__menu, .overlay').removeClass('active');
        })




        // upcoming__inner__blk
        $('.upcoming__inner__blk').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<img src="assets/img/round_arrow_icon_1.svg" alt="">', '<img src="assets/img/round_arrow_icon_2.svg" alt="">'],
            dots: false,
            autoplay: false,
            smartSpeed: 1000,
            autoplayTimeout: 3500,
            items: 4,
            margin: 8,
            slideToScroll: 1,
            center: false,
            autoplayHoverPause: true,

            responsive: {
                0: {
                    stagePadding: 0,
                },
                320: {
                    items: 1,
                    stagePadding: 20,
                },
                450: {
                    items: 1,
                    stagePadding: 40,
                },
                575: {
                    items: 2,
                    stagePadding: 0,
                },
                768: {
                    items: 2,
                    stagePadding: 40,
                },
                992: {
                    items: 3,
                    stagePadding: 0,
                },
                1200: {
                    items: 4,
                    stagePadding: 0,
                },
                1360: {
                    stagePadding: 0,
                },
                1449: {
                    stagePadding: 0,
                },
                1500: {
                    stagePadding: 0,
                },
                1600: {
                    stagePadding: 0,
                },
                1700: {
                    stagePadding: 0,
                }
            }

        });



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });



        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });





    }); //---document-ready-----






    /*magnificPopup active*/
    $('.play__button').magnificPopup({
        type: 'iframe'

    });


    // COUNTER UP
    $('.counting').counterUp({
        delay: 10,
        time: 3000
    });


    // venobox 
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // Nice select
    $('select').niceSelect();


    // ---------siblings
    $(".boxs").click(function (event) {
        $(this).toggleClass('active').siblings().removeClass('active');
    });




}(jQuery));