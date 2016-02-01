window.common = (function(global) {
  const {
    $,
    moment,
    ga = (() => {}),
      common = { init: [] }
  } = global;

  common.showCompletion = function showCompletion() {

    ga(
      'send',
      'event',
      'Challenge',
      'solved',
      common.gaName,
      true
    );

    var solution = common.editor.getValue();
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

      const data = {
        id: common.challengeId,
        name: common.challengeName,
        completedWith: didCompleteWith,
        challengeType: common.challengeType,
        solution,
        timezone: moment.tz.guess()
      };

      $.post('/completed-challenge/', data, function(res) {
        if (res) {
          window.location =
            '/challenges/next-challenge?id=' + common.challengeId;
        }
      });
    });
  };

  return common;
}(window));
