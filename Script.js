$(document).ready(function () {
    $('.fa-bars').on('click',function () {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
    $('.post_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
});