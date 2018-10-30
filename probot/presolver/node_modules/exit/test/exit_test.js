'use strict';

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var fs = require('fs');
var exec = require('child_process').exec;

var _which = require('which').sync;
function which(command) {
  try {
    _which(command);
    return command;
  } catch (err) {
    return false;
  }
}

// Look for grep first (any OS). If not found (but on Windows) look for find,
// which is Windows' horribly crippled grep alternative.
var grep = which('grep') || process.platform === 'win32' && which('find');

exports['exit'] = {
  setUp: function(done) {
    this.origCwd = process.cwd();
    process.chdir('test/fixtures');
    done();
  },
  tearDown: function(done) {
    process.chdir(this.origCwd);
    done();
  },
  'grep': function(test) {
    test.expect(1);
    // Many unit tests depend on this.
    test.ok(grep, 'A suitable "grep" or "find" program was not found in the PATH.');
    test.done();
  },
  // The rest of the tests are built dynamically, to keep things sane.
};

// A few helper functions.
function normalizeLineEndings(s) {
  return s.replace(/\r?\n/g, '\n');
}

// Capture command output, normalizing captured stdout to unix file endings.
function run(command, callback) {
  exec(command, function(error, stdout) {
    callback(error ? error.code : 0, normalizeLineEndings(stdout));
  });
}

// Read a fixture file, normalizing file contents to unix file endings.
function fixture(filename) {
  return normalizeLineEndings(String(fs.readFileSync(filename)));
}

function buildTests() {
  // Build individual unit tests for command output.
  var counts = [10, 100, 1000];
  var outputs = [' stdout stderr', ' stdout', ' stderr'];
  var pipes = ['', ' | ' + grep + ' "std"'];
  counts.forEach(function(count) {
    outputs.forEach(function(output) {
      pipes.forEach(function(pipe) {
        var command = 'node log.js 0 ' + count + output + ' 2>&1' + pipe;
        exports['exit']['output (' + command + ')'] = function(test) {
          test.expect(2);
          run(command, function(code, actual) {
            var expected = fixture(count + output.replace(/ /g, '-') + '.txt');
            // Sometimes, the actual file lines are out of order on Windows.
            // But since the point of this lib is to drain the buffer and not
            // guarantee output order, we only test the length.
            test.equal(actual.length, expected.length, 'should be the same length.');
            // The "fail" lines in log.js should NOT be output!
            test.ok(actual.indexOf('fail') === -1, 'should not output after exit is called.');
            test.done();
          });
        };
      });
    });
  });

  // Build individual unit tests for exit codes.
  var codes = [0, 1, 123];
  codes.forEach(function(code) {
    var command = 'node log.js ' + code + ' 10 stdout stderr';
    exports['exit']['exit code (' + command + ')'] = function(test) {
      test.expect(1);
      run(command, function(actual) {
        // The specified exit code should be passed through.
        test.equal(actual, code, 'should exit with ' + code + ' error code.');
        test.done();
      });
    };
  });
}

// Don't bother building tests if grep wasn't found, otherwise everything will
// fail and the error will get lost.
if (grep) {
  buildTests();
}
