$(".navbar-right .to-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top - 50
    }, 1000);
});

$(".navbar-right .to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 50
    }, 1000);
});

$(".navbar-right .to-knowledge").click(function() {
    $('html, body').animate({
        scrollTop: $("#knowledge").offset().top - 50
    }, 1000);
});

$(".navbar-right .to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
    }, 1000);
});
