$(document).ready(function() {
    $('.start-challenge').on("click", function() {
        $(this).parent().remove();
        $('.challenge-content').removeClass('hidden-element').addClass('animated fadeInDown');
    });
    $('.completed-challenge').on("click", function() {
//        user.completedChallenges.push()
        $('#complete-dialog').modal('show');
    });
    $('.skip-challenge').on("click", function() {
        $('#skip-dialog').modal('show');
    });
});