
$(document).ready(function () {

        // Our Auto Slider
    (function autoSlider() {  // Self invoke
        $('.slider .d-block').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('d-block').next().addClass('d-block').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('d-block');
                    $('.slider div').eq(0).addClass('d-block').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
});