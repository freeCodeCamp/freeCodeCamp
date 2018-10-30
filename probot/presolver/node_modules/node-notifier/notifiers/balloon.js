/**
 * Wrapper for the notifu 1.6 (http://www.paralint.com/projects/notifu/)

Usage
/t <value>      The type of message to display values are:
                    info      The message is an informational message
                    warn      The message is an warning message
                    error     The message is an error message
/d <value>      The number of milliseconds to display (omit or 0 for infinit)
/p <value>      The title (or prompt) of the ballon
/m <value>      The message text
/i <value>      Specify an icon to use ("parent" uses the icon of the parent process)
/e              Enable ballon tips in the registry (for this user only)
/q              Do not play a sound when the tooltip is displayed
/w              Show the tooltip even if the user is in the quiet period that follows his very first login (Windows 7 and up)
/xp             Use IUserNotification interface event when IUserNotification2 is available

// Kill codes:
  2 = Timeout
  3 = Clicked
  4 = Closed or faded out

 */
var path = require('path');
var notifier = path.resolve(__dirname, '../vendor/notifu/notifu');
var checkGrowl = require('../lib/checkGrowl');
var utils = require('../lib/utils');
var Toaster = require('./toaster');
var Growl = require('./growl');
var os = require('os');

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var hasGrowl = void 0;

module.exports = WindowsBalloon;

function WindowsBalloon(options) {
  options = utils.clone(options || {});
  if (!(this instanceof WindowsBalloon)) {
    return new WindowsBalloon(options);
  }

  this.options = options;

  EventEmitter.call(this);
}
util.inherits(WindowsBalloon, EventEmitter);

function noop() {}
WindowsBalloon.prototype.notify = function(options, callback) {
  var fallback;
  var notifierOptions = this.options;
  options = utils.clone(options || {});
  callback = callback || noop;

  if (typeof options === 'string') {
    options = { title: 'node-notifier', message: options };
  }

  var actionJackedCallback = utils.actionJackerDecorator(
    this,
    options,
    callback,
    function(data) {
      if (data === 'activate') {
        return 'click';
      }
      if (data === 'timeout') {
        return 'timeout';
      }
      return false;
    }
  );

  if (!!this.options.withFallback && utils.isWin8()) {
    fallback = fallback || new Toaster(notifierOptions);
    return fallback.notify(options, callback);
  }

  if (
    !!this.options.withFallback &&
    (!utils.isLessThanWin8() || hasGrowl === true)
  ) {
    fallback = fallback || new Growl(notifierOptions);
    return fallback.notify(options, callback);
  }

  if (!this.options.withFallback || hasGrowl === false) {
    doNotification(options, notifierOptions, actionJackedCallback);
    return this;
  }

  checkGrowl(notifierOptions, function(_, hasGrowlResult) {
    hasGrowl = hasGrowlResult;

    if (hasGrowl) {
      fallback = fallback || new Growl(notifierOptions);
      return fallback.notify(options, callback);
    }

    doNotification(options, notifierOptions, actionJackedCallback);
  });

  return this;
};

var allowedArguments = ['t', 'd', 'p', 'm', 'i', 'e', 'q', 'w', 'xp'];

function doNotification(options, notifierOptions, callback) {
  var is64Bit = os.arch() === 'x64';
  options = options || {};
  options = utils.mapToNotifu(options);
  options.p = options.p || 'Node Notification:';

  var fullNotifierPath = notifier + (is64Bit ? '64' : '') + '.exe';
  var localNotifier = notifierOptions.customPath || fullNotifierPath;

  if (!options.m) {
    callback(new Error('Message is required.'));
    return this;
  }

  var argsList = utils.constructArgumentList(options, {
    wrapper: '',
    noEscape: true,
    explicitTrue: true,
    allowedArguments: allowedArguments
  });

  if (options.wait) {
    return utils.fileCommand(localNotifier, argsList, function(error, data) {
      var action = fromErrorCodeToAction(error.code);
      if (action === 'error') return callback(error, data);

      return callback(null, action);
    });
  }
  utils.immediateFileCommand(localNotifier, argsList, callback);
}

function fromErrorCodeToAction(errorCode) {
  switch (errorCode) {
    case 2:
      return 'timeout';
    case 3:
    case 6:
    case 7:
      return 'activate';
    case 4:
      return 'close';
    default:
      return 'error';
  }
}
