var RSVP = require('rsvp');

var exit;
var handlers = [];
var lastTime;
var isExiting = false;

process.on('beforeExit', function (code) {
  if (handlers.length === 0) { return; }

  var own = lastTime = module.exports._flush(lastTime, code)
    .finally(function () {
      // if an onExit handler has called process.exit, do not disturb
      // `lastTime`.
      //
      // Otherwise, clear `lastTime` so that we know to synchronously call the
      // real `process.exit` with the given exit code, when our captured
      // `process.exit` is called during a `process.on('exit')` handler
      //
      // This is impossible to reason about, don't feel bad.  Just look at
      // test-natural-exit-subprocess-error.js
      if (own === lastTime) {
        lastTime = undefined;
      }
    });
});

// This exists only for testing
module.exports._reset = function () {
  module.exports.releaseExit();
  handlers = [];
  lastTime = undefined;
  isExiting = false;
  firstExitCode = undefined;
}

/*
 * To allow cooperative async exit handlers, we unfortunately must hijack
 * process.exit.
 *
 * It allows a handler to ensure exit, without that exit handler impeding other
 * similar handlers
 *
 * for example, see: https://github.com/sindresorhus/ora/issues/27
 *
 */
module.exports.releaseExit = function() {
  if (exit) {
    process.exit = exit;
    exit = null;
  }
};

var firstExitCode;

module.exports.captureExit = function() {
  if (exit) {
    // already captured, no need to do more work
    return;
  }
  exit = process.exit;

  process.exit = function(code) {
    if (handlers.length === 0 && lastTime === undefined) {
      // synchronously exit.
      //
      // We do this brecause either
      //
      //  1.  The process exited due to a call to `process.exit` but we have no
      //      async work to do because no handlers had been attached.  It
      //      doesn't really matter whether we take this branch or not in this
      //      case.
      //
      //  2.  The process exited naturally.  We did our async work during
      //      `beforeExit` and are in this function because someone else has
      //      called `process.exit` during an `on('exit')` hook.  The only way
      //      for us to preserve the exit code in this case is to exit
      //      synchronously.
      //
      return exit.call(process, code);
    }

    if (firstExitCode === undefined) {
      firstExitCode = code;
    }
    var own = lastTime = module.exports._flush(lastTime, firstExitCode)
      .then(function() {
        // if another chain has started, let it exit
        if (own !== lastTime) { return; }
        exit.call(process, firstExitCode);
      })
      .catch(function(error) {
        // if another chain has started, let it exit
        if (own !== lastTime) {
          throw error;
        }
        console.error(error);
        exit.call(process, 1);
      });
  };
};

module.exports._handlers = handlers;
module.exports._flush = function(lastTime, code) {
  isExiting = true;
  var work = handlers.splice(0, handlers.length);

  return RSVP.Promise.resolve(lastTime).
    then(function() {
      var firstRejected;
      return RSVP.allSettled(work.map(function(handler) {
        return RSVP.resolve(handler.call(null, code)).catch(function(e) {
          if (!firstRejected) {
            firstRejected = e;
          }
          throw e;
        });
      })).then(function(results) {
        if (firstRejected) {
          throw firstRejected;
        }
      });
    });
};

module.exports.onExit = function(cb) {
  if (!exit) {
    throw new Error('Cannot install handler when exit is not captured.  Call `captureExit()` first');
  }
  if (isExiting) {
    throw new Error('Cannot install handler while `onExit` handlers are running.');
  }
  var index = handlers.indexOf(cb);

  if (index > -1) { return; }
  handlers.push(cb);
};

module.exports.offExit = function(cb) {
  var index = handlers.indexOf(cb);

  if (index < 0) { return; }

  handlers.splice(index, 1);
};

module.exports.exit  = function() {
  exit.apply(process, arguments);
};

module.exports.listenerCount = function() {
  return handlers.length;
};
