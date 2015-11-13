window.common = (function({ $, common = { init: [] }}) {

  common.displayTestResults = function displayTestResults(data = []) {
    data.forEach(({ err = false, text = '' }) => {
      var iconClass = err ?
        '"ion-checkmark-circled big-success-icon"' :
        '"ion-close-circled big-error-icon"';

      $('#testSuite').children().remove();
      $('<div></div>').html(`
        <div class='row'>
          <div class='col-xs-2 text-center'>
            <i class=${iconClass}></i>
          </div>
          <div class='col-xs-10 test-output wrappable'>
            ${text.split('message: ').pop().replace(/\'\);/g, '')}
          </div>
          <div class='ten-pixel-break'/>
        </div>
      `)
        .appendTo($('#testSuite'));
    });

    return data;
  };

  return common;
}(window));
