(function ($) {

    'use strict';

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });


    $('.open-menu-bar > a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-menu').slideToggle();
    })


    $('.step-accordion-head .view-item').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().children('.step-accordion-body').slideDown();
        $(this).parent().parent().parent().parent().siblings().children('.step-accordion-body').slideUp();
        $(this).parent().parent().parent().parent().siblings().children('.step-accordion-head').slideDown();
        $(this).parent().parent().parent().slideUp();
    });

    $('.step-accordion-body .close-item').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().parent().parent().children('.step-accordion-body').slideUp();
        $(this).parent().parent().parent().parent().children('.step-accordion-head').slideDown();
    });


})(jQuery);
