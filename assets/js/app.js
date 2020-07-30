$(document).ready(function() {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow : '.prev-btn',
        nextArrow : '.next-btn',
        responsive : [
            {
                breakpoint: 991.98,
                settings : {
                    slidesToShow: 2,
                }
            },            
            {
                breakpoint: 767.98,
                settings : {
                    slidesToShow: 1,
                }
            }
        ]
    });    

    $(window).scroll(function(){
        if ($(document).scrollTop() >= 300) {
            $(".back-to-top").css('right', '1.5rem');
        } else {
            $(".back-to-top").css('right', '-3rem');
        }
    })
})

// Raw JavaScript Nav menu trigger
const nav_trigger = document.querySelector('.nav-trigger');
const nav_background = document.querySelector('.nav-background');
const closee = document.querySelector('.close');

nav_trigger.addEventListener('click', () => {
    nav_background.style.transform = `translateX(0)`
})

closee.addEventListener('click', () => {
    nav_background.style.transform = `translateX(-100%)`
})