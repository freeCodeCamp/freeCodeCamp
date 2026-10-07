var common = require('../common');
var assert = common.assert;
var retry = require(common.dir.lib + '/retry');

(function testForeverUsesFirstTimeout() {
  var operation = retry.operation({
    retries: 0,
    minTimeout: 100,
    maxTimeout: 100,
    forever: true
  });

  operation.attempt(function(numAttempt) {
    console.log('>numAttempt', numAttempt);
    var err = new Error("foo");
    if (numAttempt == 10) {
      operation.stop();
    }

    if (operation.retry(err)) {
      return;
    }
  });
})();
