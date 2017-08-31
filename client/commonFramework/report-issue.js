window.common = (function({ common = { init: [] } }) {
  common.init.push(function($) {
    $('#report-issue').on('click', function() {
      var title = common.challengeName || window.location.pathname;

      var textMessage = [
        '#### Challenge Name\n',
        '[',
        title,
        '](',
        window.location.origin + window.location.pathname,
        ') has an issue.\n',
        '#### Issue Description\n',
        '<!-- Describe below when the issue happens and how to ',
        'reproduce it -->\n\n\n',
        '#### Browser Information\n',
        '<!-- Describe your workspace in which you are having issues-->\n',
        'User Agent is: <code>',
        navigator.userAgent,
        '</code>.\n\n',
        '#### Screenshot\n',
        '<!-- Add a screenshot of your issue -->\n\n\n',
        '#### Your Code'
        ].join('');

      textMessage = encodeURIComponent(textMessage);

      $('#issue-modal').modal('hide');
      window.open(
        'https://forum.freecodecamp.com/new-topic?category=General&title=' +
        window.encodeURIComponent(title) + '&body=' +
        textMessage,
        '_blank'
      );
    });
  });

  return common;
}(window));
