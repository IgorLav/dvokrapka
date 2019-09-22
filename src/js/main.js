/*
 * to include js file write: `//= include ./path-to-file`
 * */

//= include ../../node_modules/jquery/dist/jquery.js ;

$(document).ready(() => {
    const $brandScreen = $('#brand-screen');
    const animationTime = 1000;
    const scrollToContent = () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#content").offset().top
        }, animationTime);
    };

    if ($brandScreen) {
        $brandScreen.addClass('enter-animation');

        $('.logo-group').click(e => {
            e.preventDefault();
            scrollToContent();
            $brandScreen.addClass('leave-animation');

            setTimeout(() => {
                $('.header').addClass('header_fixed');
                // $brandScreen.hide();
            }, animationTime)
        });
    }
});
