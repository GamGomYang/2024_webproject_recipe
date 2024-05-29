$(document).ready(function(){
    $('.cate_cont').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: $('.slick_event_prev'),
        nextArrow: $('.slick_event_next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
