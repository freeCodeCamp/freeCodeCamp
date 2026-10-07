var retry = require('../lib/retry');

function attemptAsyncOperation(someInput, cb) {
  var opts = {
    retries: 2,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: 2 * 1000,
    randomize: true
  };
  var operation = retry.operation(opts);

  operation.attempt(function(currentAttempt) {
    failingAsyncOperation(someInput, function(err, result) {

      if (err && err.message === 'A fatal error') {
        operation.stop();
        return cb(err);
      }

      if (operation.retry(err)) {
        return;
      }

      cb(operation.mainError(), operation.errors(), result);
    });
  });
}

attemptAsyncOperation('test input', function(err, errors, result) {
  console.warn('err:');
  console.log(err);

  console.warn('result:');
  console.log(result);
});

function failingAsyncOperation(input, cb) {
  return setImmediate(cb.bind(null, new Error('A fatal error')));
}
