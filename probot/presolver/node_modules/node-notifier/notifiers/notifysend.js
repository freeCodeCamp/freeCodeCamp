/**
 * Node.js wrapper for "notify-send".
 */
var os = require('os');
var which = require('which');
var utils = require('../lib/utils');

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var notifier = 'notify-send';
var hasNotifier = void 0;

module.exports = NotifySend;

function NotifySend(options) {
  options = utils.clone(options || {});
  if (!(this instanceof NotifySend)) {
    return new NotifySend(options);
  }

  this.options = options;

  EventEmitter.call(this);
}
util.inherits(NotifySend, EventEmitter);

function noop() {}
NotifySend.prototype.notify = function(options, callback) {
  options = utils.clone(options || {});
  callback = callback || noop;

  if (typeof callback !== 'function') {
    throw new TypeError(
      'The second argument must be a function callback. You have passed ' +
        typeof callback
    );
  }

  if (typeof options === 'string') {
    options = { title: 'node-notifier', message: options };
  }

  if (!options.message) {
    callback(new Error('Message is required.'));
    return this;
  }

  if (os.type() !== 'Linux' && !os.type().match(/BSD$/)) {
    callback(new Error('Only supported on Linux and *BSD systems'));
    return this;
  }

  if (hasNotifier === false) {
    callback(new Error('notify-send must be installed on the system.'));
    return this;
  }

  if (hasNotifier || !!this.options.suppressOsdCheck) {
    doNotification(options, callback);
    return this;
  }

  try {
    hasNotifier = !!which.sync(notifier);
    doNotification(options, callback);
  } catch (err) {
    hasNotifier = false;
    return callback(err);
  }

  return this;
};

var allowedArguments = ['urgency', 'expire-time', 'icon', 'category', 'hint'];

function doNotification(options, callback) {
  var initial, argsList;

  options = utils.mapToNotifySend(options);
  options.title = options.title || 'Node Notification:';

  initial = [options.title, options.message];
  delete options.title;
  delete options.message;

  argsList = utils.constructArgumentList(options, {
    initial: initial,
    keyExtra: '-',
    allowedArguments: allowedArguments
  });

  utils.command(notifier, argsList, callback);
}
