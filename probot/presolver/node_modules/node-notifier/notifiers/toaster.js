/**
 * Wrapper for the toaster (https://github.com/nels-o/toaster)
 */
var path = require('path');
var notifier = path.resolve(__dirname, '../vendor/snoreToast/SnoreToast.exe');
var utils = require('../lib/utils');
var Balloon = require('./balloon');

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var fallback = void 0;

module.exports = WindowsToaster;

function WindowsToaster(options) {
  options = utils.clone(options || {});
  if (!(this instanceof WindowsToaster)) {
    return new WindowsToaster(options);
  }

  this.options = options;

  EventEmitter.call(this);
}
util.inherits(WindowsToaster, EventEmitter);

function noop() {}

var timeoutMessage = 'the toast has timed out';
var successMessage = 'user clicked on the toast';

function hasText(str, txt) {
  return str && str.indexOf(txt) !== -1;
}

WindowsToaster.prototype.notify = function(options, callback) {
  options = utils.clone(options || {});
  callback = callback || noop;

  if (typeof options === 'string') {
    options = { title: 'node-notifier', message: options };
  }

  if (typeof callback !== 'function') {
    throw new TypeError(
      'The second argument must be a function callback. You have passed ' +
        typeof fn
    );
  }

  var actionJackedCallback = utils.actionJackerDecorator(
    this,
    options,
    function cb(err, data) {
      // Needs to filter out timeout. Not an actual error.
      if (err && hasText(data, timeoutMessage)) {
        return callback(null, data);
      }
      callback(err, data);
    },
    function mapper(data) {
      if (hasText(data, successMessage)) {
        return 'click';
      }
      if (hasText(data, timeoutMessage)) {
        return 'timeout';
      }
      return false;
    }
  );

  options.title = options.title || 'Node Notification:';
  if (
    typeof options.message === 'undefined' &&
    typeof options.close === 'undefined'
  ) {
    callback(new Error('Message or ID to close is required.'));
    return this;
  }

  if (!utils.isWin8() && !!this.options.withFallback) {
    fallback = fallback || new Balloon(this.options);
    return fallback.notify(options, callback);
  }

  options = utils.mapToWin8(options);
  var argsList = utils.constructArgumentList(options, {
    explicitTrue: true,
    wrapper: '',
    keepNewlines: true,
    noEscape: true
  });
  utils.fileCommand(
    this.options.customPath || notifier,
    argsList,
    actionJackedCallback
  );
  return this;
};
