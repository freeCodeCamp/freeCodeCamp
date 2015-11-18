$(document).ready(function() {
  var common = window.common;

  common.init.forEach(function(init) {
    init($);
  });

  var $preview = $('#preview');
  if (typeof $preview.html() !== 'undefined') {
    $preview.load(function() {
      common.executeChallenge(true);
    });
  } else if (
    common.challengeType !== '2' &&
    common.challengeType !== '3' &&
    common.challengeType !== '4' &&
    common.challengeType !== '7'
  ) {
    common.executeChallenge(true);
  }
});
