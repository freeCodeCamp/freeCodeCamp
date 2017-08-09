window.common = (function({ common = { init: [] } }) {
  common.init.push(function($) {
    $('#ask-for-help-button').on('click', function() {
      var helpTitle = common.challengeName;
      var helpMessage = [
        '**Tell us what\'s happening:**\n\n\n\n',
        '**Your code so far**\n',
        '```' + common.editor.getValue() + '```\n',
        '**Your browser information:**\n\n',
        'Your Browser User Agent is: ```',
        navigator.userAgent,
        '```.\n\n',
        '**Link to the challenge:**\n',
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
