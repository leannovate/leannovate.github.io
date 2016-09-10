$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('.change-now');
    var offset = startchange.offset();
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start <= offset.top) {
            $('.navbar').removeClass('scrolled-bar');
            $('.navbar .navbar-toggle').removeClass('toggle-on');
        } 
        else {
            $('.navbar').addClass('scrolled-bar');
            $('.navbar .navbar-toggle').addClass('toggle-on');
        }
    });

    function scrollToElement(button, element) {
        $(button).click(function() {
            $('html, body').animate({
                scrollTop : $(element).offset().top
            }, 800);
            return false;
        });
    }

    scrollToElement('.goAbout', '#player-fig');
    scrollToElement('.goMedia', '.video-cover');
    scrollToElement('.goNews', '.news-cover');
    scrollToElement('.goContact', '.contact-cover');

    $(".fancybox").fancybox();
    $(".fancybox")
        .attr('rel', 'gallery')
        .fancybox({
            padding : 0
        });
});