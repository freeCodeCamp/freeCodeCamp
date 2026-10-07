'use strict';

var spawn = require('child_process').spawn;

/**
 * Spawn a binary and read its stdout.
 * @param  {String} cmd The name of the binary to spawn.
 * @param  {String[]} args The arguments for the binary.
 * @param  {Object} [options] Optional option for the spawn function.
 * @param  {Function} done(err, stdout)
 */
function run(cmd, args, options, done) {
  if (typeof options === 'function') {
    done = options;
    options = undefined;
  }

  var executed = false;
  var ch = spawn(cmd, args, options);
  var stdout = '';
  var stderr = '';

  ch.stdout.on('data', function(d) {
    stdout += d.toString();
  });

  ch.stderr.on('data', function(d) {
    stderr += d.toString();
  });

  ch.on('error', function(err) {
    if (executed) return;
    executed = true;
    done(new Error(err));
  });

  ch.on('close', function(code) {
    if (executed) return;
    executed = true;

    if (stderr) {
      return done(new Error(stderr));
    }

    done(null, stdout, code);
  });
}

module.exports = run;
