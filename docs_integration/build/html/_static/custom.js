$(function() {
   $('img').on('click', function() {
        window.location = $(this).attr('src');
    });
});
