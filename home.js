$(document).ready(() => {
    $('.carousel').carousel({
        interval: 4500,
        pause: false,
    });
    // FIXME: Remove this
    $('.carousel-caption').children().css('background-color', 'gold');
});