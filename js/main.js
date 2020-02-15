
$(document).ready(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        asNavFor: '.slider__menu',

    });
    $('.slider__menu').slick({
        asNavFor: '.slider__inner',
        slidesToShow: 6,
        focusOnSelect: true,
        infinite: true
    });
});