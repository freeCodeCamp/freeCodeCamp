$(document).ready(function() {
    $('.start-challenge').on("click", function() {
        $(this).parent().remove();
        $('.challenge-content').removeClass('hidden-element').addClass('animated fadeInDown');
    });
    $('.completed-challenge').on("click", function() {
        $('#complete-dialog').modal('show');
    });
    $('.skip-challenge').on("click", function() {
        $('#skip-dialog').modal('show');
    });
    $('.complete-button').on("click", function() {
        l = location.pathname.split('/');
        $.ajax({
            type: 'POST',
            data: l,
            url: '/completed_challenge',
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
        window.location = "/challenge?=" + (parseInt(l[l.length-1]) + 1)
    });
    $('.skip-button').on("click", function() {
        l = location.pathname.split;
        window.location = "/challenges/" + (parseInt(l[l.length-1]) + 1)
    });
});

