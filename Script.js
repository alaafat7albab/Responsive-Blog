$(document).ready(function () {
    $('.fa-bars').on('click', function () {
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
});