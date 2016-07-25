window.common = (function({ $, common = { init: [] }}) {

  common.displayTestResults = function displayTestResults(data = [], down) {
    $('#testSuite').children().remove();
    data.forEach(({ err = false, text = '' }) => {
      var iconClass = err ?
        '"ion-close-circled big-error-icon"' :
        '"ion-checkmark-circled big-success-icon"';

      $('<div></div>').html(`
        <div class='row'>
          <div class='col-xs-2 text-center'>
            <i class=${iconClass}></i>
          </div>
          <div class='col-xs-10 test-output'>
            ${text.split('message: ').pop().replace(/\'\);/g, '')}
          </div>
          <div class='ten-pixel-break'/>
        </div>
      `)
        .appendTo($('#testSuite'));
    });
    if (down) {
        $('#scroll-locker').animate(
            { scrollTop: $(document).height() }, 'slow'
        );
    }
    return data;
  };

  return common;
}(window));
