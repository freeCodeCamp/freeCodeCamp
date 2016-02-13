window.common = (function(global) {
  const {
    $,
    moment,
    ga = (() => {}),
    common = { init: [] }
  } = global;

  function submitChallengeHandler(e) {
    e.preventDefault();

    var solution = common.editor.getValue();

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

    let timezone = 'UTC';
    try {
      timezone = moment.tz.guess();
    } catch (err) {
      err.message = `
          known bug, see: https://github.com/moment/moment-timezone/issues/294:
          ${err.message}
        `;
      console.error(err);
    }
    const data = JSON.stringify({
      id: common.challengeId,
      name: common.challengeName,
      challengeType: +common.challengeType,
      solution,
      timezone
    });

    $.ajax({
        url: '/completed-challenge/',
        type: 'POST',
        data,
        contentType: 'application/json',
        dataType: 'json'
      })
      .success(function(res) {
        if (res) {
          window.location =
            '/challenges/next-challenge?id=' + common.challengeId;
        }
      })
      .fail(function() {
        window.location.replace(window.location.href);
      });
  }

  common.showCompletion = function showCompletion() {

    ga(
      'send',
      'event',
      'Challenge',
      'solved',
      common.gaName,
      true
    );

    $('#complete-courseware-dialog').modal('show');
    $('#complete-courseware-dialog .modal-header').click();

    $('#submit-challenge').off('click');
    $('#submit-challenge').on('click', submitChallengeHandler);
  };

  return common;
}(window));
