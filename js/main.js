$('#owl-one').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<img src='img/right-arrow.png'>", "<img src='img/left-arrow.png'>"],
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

$('#owl-two').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<img src='img/right-arrow.png'>", "<img src='img/left-arrow.png'>"],
    rtl: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$(".close-btn").click(function() {
    $('.full-menu').hide();
});

$(".menu-btn").click(function() {
    $('.full-menu').show();
});

$(".navbar .search-btn").click(function() {
    $('form.search').toggle();
});

$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar.sticky-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height(40));
    });
});