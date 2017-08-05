window.common = (function({ common = { init: [] } }) {
  common.init.push(function($) {
    $('#ask-for-help-button').on('click', function() {
      var helpTitle = common.challengeName;
      var helpMessage = [
        '**Whats happening**\n\n\n',
        '**My code so far**\n',
        '```' + common.editor.getValue() + '```\n',
        '**My browser information**\n\n',
        'User Agent is: ```',
        navigator.userAgent,
        '```.\n\n',
        '**Link to the challenge**\n\n',
        window.location.href + '\n'

      ].join('');

      helpTitle = encodeURIComponent(helpTitle);
      helpMessage = encodeURIComponent(helpMessage);

      $('#ask-for-help-modal').modal('hide');
      window.open(
        'http://forum.freecodecamp.org/new-topic?title='
        + helpTitle
        + '&body='
        + helpMessage
        + '&category=help',
        '_blank'
      );
    });
  });

  return common;
}(window));
