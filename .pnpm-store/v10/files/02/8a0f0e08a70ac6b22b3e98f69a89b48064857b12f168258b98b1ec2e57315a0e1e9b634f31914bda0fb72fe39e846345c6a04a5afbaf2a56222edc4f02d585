var common = require('../common');
var assert = common.assert;
var fake = common.fake.create();
var retry = require(common.dir.lib + '/retry');

(function testReset() {
  var error = new Error('some error');
  var operation = retry.operation([1, 2, 3]);
  var attempts = 0;

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var expectedFinishes = 1;
  var finishes         = 0;

  var fn = function() {
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);
      if (operation.retry(error)) {
        return;
      }

      finishes++
      assert.equal(expectedFinishes, finishes);
      assert.strictEqual(attempts, 4);
      assert.strictEqual(operation.attempts(), attempts);
      assert.strictEqual(operation.mainError(), error);

      if (finishes < 2) {
        attempts = 0;
        expectedFinishes++;
        operation.reset();
        fn()
      } else {
        finalCallback();
      }
    });
  };

  fn();
})();

(function testErrors() {
  var operation = retry.operation();

  var error = new Error('some error');
  var error2 = new Error('some other error');
  operation._errors.push(error);
  operation._errors.push(error2);

  assert.deepEqual(operation.errors(), [error, error2]);
})();

(function testMainErrorReturnsMostFrequentError() {
  var operation = retry.operation();
  var error = new Error('some error');
  var error2 = new Error('some other error');

  operation._errors.push(error);
  operation._errors.push(error2);
  operation._errors.push(error);

  assert.strictEqual(operation.mainError(), error);
})();

(function testMainErrorReturnsLastErrorOnEqualCount() {
  var operation = retry.operation();
  var error = new Error('some error');
  var error2 = new Error('some other error');

  operation._errors.push(error);
  operation._errors.push(error2);

  assert.strictEqual(operation.mainError(), error2);
})();

(function testAttempt() {
  var operation = retry.operation();
  var fn = new Function();

  var timeoutOpts = {
    timeout: 1,
    cb: function() {}
  };
  operation.attempt(fn, timeoutOpts);

  assert.strictEqual(fn, operation._fn);
  assert.strictEqual(timeoutOpts.timeout, operation._operationTimeout);
  assert.strictEqual(timeoutOpts.cb, operation._operationTimeoutCb);
})();

(function testRetry() {
  var error = new Error('some error');
  var operation = retry.operation([1, 2, 3]);
  var attempts = 0;

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var fn = function() {
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);
      if (operation.retry(error)) {
        return;
      }

      assert.strictEqual(attempts, 4);
      assert.strictEqual(operation.attempts(), attempts);
      assert.strictEqual(operation.mainError(), error);
      finalCallback();
    });
  };

  fn();
})();

(function testRetryForever() {
  var error = new Error('some error');
  var operation = retry.operation({ retries: 3, forever: true });
  var attempts = 0;

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var fn = function() {
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);
      if (attempts !== 6 && operation.retry(error)) {
        return;
      }

      assert.strictEqual(attempts, 6);
      assert.strictEqual(operation.attempts(), attempts);
      assert.strictEqual(operation.mainError(), error);
      finalCallback();
    });
  };

  fn();
})();

(function testRetryForeverNoRetries() {
  var error = new Error('some error');
  var delay = 50
  var operation = retry.operation({
    retries: null,
    forever: true,
    minTimeout: delay,
    maxTimeout: delay
  });

  var attempts = 0;
  var startTime = new Date().getTime();

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var fn = function() {
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);
      if (attempts !== 4 && operation.retry(error)) {
        return;
      }

      var endTime = new Date().getTime();
      var minTime = startTime + (delay * 3);
      var maxTime = minTime + 20 // add a little headroom for code execution time
      assert(endTime >= minTime)
      assert(endTime < maxTime)
      assert.strictEqual(attempts, 4);
      assert.strictEqual(operation.attempts(), attempts);
      assert.strictEqual(operation.mainError(), error);
      finalCallback();
    });
  };

  fn();
})();

(function testStop() {
  var error = new Error('some error');
  var operation = retry.operation([1, 2, 3]);
  var attempts = 0;

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var fn = function() {
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);

      if (attempts === 2) {
        operation.stop();

        assert.strictEqual(attempts, 2);
        assert.strictEqual(operation.attempts(), attempts);
        assert.strictEqual(operation.mainError(), error);
        finalCallback();
      }

      if (operation.retry(error)) {
        return;
      }
    });
  };

  fn();
})();

(function testMaxRetryTime() {
  var error = new Error('some error');
  var maxRetryTime = 30;
  var operation = retry.operation({
      minTimeout: 1,
      maxRetryTime: maxRetryTime
  });
  var attempts = 0;

  var finalCallback = fake.callback('finalCallback');
  fake.expectAnytime(finalCallback);

  var longAsyncFunction = function (wait, callback){
    setTimeout(callback, wait);
  };

  var fn = function() {
    var startTime = new Date().getTime();
    operation.attempt(function(currentAttempt) {
      attempts++;
      assert.equal(currentAttempt, attempts);

      if (attempts !== 2) {
        if (operation.retry(error)) {
            return;
        }
      } else {
        var curTime = new Date().getTime();
        longAsyncFunction(maxRetryTime - (curTime - startTime - 1), function(){
          if (operation.retry(error)) {
            assert.fail('timeout should be occurred');
            return;
          }

          assert.strictEqual(operation.mainError(), error);
          finalCallback();
        });
      }
    });
  };

  fn();
})();
