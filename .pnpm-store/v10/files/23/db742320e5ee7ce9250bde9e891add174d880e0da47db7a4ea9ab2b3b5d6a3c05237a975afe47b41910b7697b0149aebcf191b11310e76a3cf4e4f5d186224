var test = require('tape');
var functionsHaveNames = require('functions-have-names');
var hasSymbols = require('has-symbols');

require('./legacy-compat');
var common = require('./common');

// we do this to easily wrap each file in a mocha test
// and also have browserify be able to statically analyze this file
var orig_require = require;
var require = function(file) {
    test(file, function(t) {
        // Store the tape object so tests can access it.
        t.on('end', function () { delete common.test; });
        common.test = t;

        try {
          var exp = orig_require(file);
          if (exp && exp.then) {
            exp.then(function () { t.end(); }, t.fail);
            return;
          }
        } catch (err) {
          t.fail(err);
        }
        t.end();
    });
};

require('./add-listeners.js');
require('./check-listener-leaks.js');
require('./errors.js');
require('./events-list.js');
if (typeof Promise === 'function') {
  require('./events-once.js');
} else {
  // Promise support is not available.
  test('./events-once.js', { skip: true }, function () {});
}
require('./listener-count.js');
require('./listeners-side-effects.js');
require('./listeners.js');
require('./max-listeners.js');
if (functionsHaveNames()) {
  require('./method-names.js');
} else {
  // Function.name is not supported in IE
  test('./method-names.js', { skip: true }, function () {});
}
require('./modify-in-emit.js');
require('./num-args.js');
require('./once.js');
require('./prepend.js');
require('./set-max-listeners-side-effects.js');
require('./special-event-names.js');
require('./subclass.js');
if (hasSymbols()) {
  require('./symbols.js');
} else {
  // Symbol is not available.
  test('./symbols.js', { skip: true }, function () {});
}
require('./remove-all-listeners.js');
require('./remove-listeners.js');
