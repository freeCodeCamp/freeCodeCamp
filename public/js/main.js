$(document).ready(function() {

    var CSRF_HEADER = 'X-CSRF-Token';

    var setCSRFToken = function(securityToken) {
        jQuery.ajaxPrefilter(function(options, _, xhr) {
            if ( !xhr.crossDomain )
                xhr.setRequestHeader(CSRF_HEADER, securityToken);
        });
    };

    setCSRFToken($('meta[name="csrf-token"]').attr('content'));

    $('.start-challenge').on("click", function() {
        $(this).parent().remove();
        $('.challenge-content').removeClass('hidden-element').addClass('animated fadeInDown');
    });

    $('.completed-challenge').on("click", function() {
        $('#complete-dialog').modal('show');
        l = location.pathname.split('/');
        cn = l[l.length - 1]
        $.ajax({
            type: 'POST',
            data: {cn: cn},
            url: '/completed_challenge/',
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });

    $('.skip-challenge').on("click", function() {
        $('#skip-dialog').modal('show');
    });

    $('.next-button').on("click", function() {
        l = location.pathname.split('/');
        window.location = "/challenges/" + (parseInt(l[l.length-1]) + 1)
    });
});

