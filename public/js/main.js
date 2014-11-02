$(document).ready(function() {
    $('.start-challenge').on("click", function() {
        $(this).addClass('animated zoomOut');
        $('.completed-challenge').removeClass('hidden-element').addClass('animated zoomIn delay-1');
        $('.skip-challenge').removeClass('hidden-element').addClass('animated zoomIn delay-1');
    });
    $('.completed-challenge').on("click", function() {
        $('#complete-dialog').modal('show');
    });
    $('.skip-challenge').on("click", function() {
        $('#skip-dialog').modal('show');
    });
});