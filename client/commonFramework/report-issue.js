window.common = (function({ common = { init: [] } }) {
  common.init.push(function($) {
    $('#report-issue').on('click', function() {
      var textMessage = [
        'Challenge [',
        (common.challengeName || window.location.pathname),
        '](',
        window.location.href,
        ') has an issue.\n',
        'User Agent is: <code>',
        navigator.userAgent,
        '</code>.\n',
        'Please describe how to reproduce this issue, and include ',
        'links to screenshots if possible.\n\n'
      ].join('');

      if (
        common.editor &&
        typeof common.editor.getValue === 'function' &&
        common.editor.getValue().trim()
      ) {
        var type;
        switch (common.challengeType) {
          case common.challengeTypes.HTML:
            type = 'html';
            break;
          case common.challengeTypes.JS:
          case common.challengeTypes.BONFIRE:
            type = 'javascript';
            break;
          default:
            type = '';
        }

        textMessage += [
          'My code:\n```',
          type,
          '\n',
          common.editor.getValue(),
          '\n```\n\n'
        ].join('');
      }

      textMessage = encodeURIComponent(textMessage);

      $('#issue-modal').modal('hide');
      window.open(
        'https://github.com/freecodecamp/freecodecamp/issues/new?&body=' +
          textMessage,
        '_blank'
      );
    });
  });

  return common;
}(window));
