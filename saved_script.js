var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
document.head.appendChild(link);
link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
document.head.appendChild(link);
link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap";
document.head.appendChild(link);
jQuery(document).ready(function ($) {
    $('#dat-hang-header, #dat-hang-main').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#uu-dai').offset().top
        }, 800);
    });
});