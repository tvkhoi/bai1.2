jQuery(document).ready(function($) {
    $('#dat-hang-header, #dat-hang-main').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#uu-dai').offset().top
        }, 800);
    });
});