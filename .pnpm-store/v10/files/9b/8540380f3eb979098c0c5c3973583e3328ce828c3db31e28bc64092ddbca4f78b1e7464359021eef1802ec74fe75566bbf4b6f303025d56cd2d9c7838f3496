var common = require('../common');
var assert = common.assert;
var retry = require(common.dir.lib + '/retry');

(function testDefaultValues() {
  var timeouts = retry.timeouts();

  assert.equal(timeouts.length, 10);
  assert.equal(timeouts[0], 1000);
  assert.equal(timeouts[1], 2000);
  assert.equal(timeouts[2], 4000);
})();

(function testDefaultValuesWithRandomize() {
  var minTimeout = 5000;
  var timeouts = retry.timeouts({
    minTimeout: minTimeout,
    randomize: true
  });

  assert.equal(timeouts.length, 10);
  assert.ok(timeouts[0] > minTimeout);
  assert.ok(timeouts[1] > timeouts[0]);
  assert.ok(timeouts[2] > timeouts[1]);
})();

(function testPassedTimeoutsAreUsed() {
  var timeoutsArray = [1000, 2000, 3000];
  var timeouts = retry.timeouts(timeoutsArray);
  assert.deepEqual(timeouts, timeoutsArray);
  assert.notStrictEqual(timeouts, timeoutsArray);
})();

(function testTimeoutsAreWithinBoundaries() {
  var minTimeout = 1000;
  var maxTimeout = 10000;
  var timeouts = retry.timeouts({
    minTimeout: minTimeout,
    maxTimeout: maxTimeout
  });
  for (var i = 0; i < timeouts; i++) {
    assert.ok(timeouts[i] >= minTimeout);
    assert.ok(timeouts[i] <= maxTimeout);
  }
})();

(function testTimeoutsAreIncremental() {
  var timeouts = retry.timeouts();
  var lastTimeout = timeouts[0];
  for (var i = 0; i < timeouts; i++) {
    assert.ok(timeouts[i] > lastTimeout);
    lastTimeout = timeouts[i];
  }
})();

(function testTimeoutsAreIncrementalForFactorsLessThanOne() {
  var timeouts = retry.timeouts({
    retries: 3,
    factor: 0.5
  });

  var expected = [250, 500, 1000];
  assert.deepEqual(expected, timeouts);
})();

(function testRetries() {
  var timeouts = retry.timeouts({retries: 2});
  assert.strictEqual(timeouts.length, 2);
})();
