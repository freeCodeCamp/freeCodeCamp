window.common = (function(global) {
  const {
    $,
    ga = (() => {}),
      common = { init: [] }
  } = global;

  common.showCompletion = function showCompletion() {
    var time = Math.floor(Date.now() - window.started);

    ga(
      'send',
      'event',
      'Challenge',
      'solved',
      common.challengeName + ', Time: ' + time + ', Attempts: ' + 0
    );

    var bonfireSolution = common.editor.getValue();
    var didCompleteWith = $('#completed-with').val() || null;

    $('#complete-courseware-dialog').modal('show');
    $('#complete-courseware-dialog .modal-header').click();

    $('#submit-challenge').click(function(e) {
      e.preventDefault();

      $('#submit-challenge')
        .attr('disabled', 'true')
        .removeClass('btn-primary')
        .addClass('btn-warning disabled');

      var $checkmarkContainer = $('#checkmark-container');
      $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

      $('#challenge-checkmark')
        .addClass('zoomOutUp')
        // .removeClass('zoomInDown')
        .delay(1000)
        .queue(function(next) {
          $(this).replaceWith(
            '<div id="challenge-spinner" ' +
            'class="animated zoomInUp inner-circles-loader">' +
            'submitting...</div>'
          );
          next();
        });

      $.post(
        '/completed-bonfire/', {
          challengeInfo: {
            challengeId: common.challengeId,
            challengeName: common.challengeName,
            completedWith: didCompleteWith,
            challengeType: common.challengeType,
            solution: bonfireSolution
          }
        },
        function(res) {
          if (res) {
            window.location =
              '/challenges/next-challenge?id=' + common.challengeId;
          }
        }
      );
    });
  };

  return common;
}(window));
