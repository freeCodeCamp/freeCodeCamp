var colour = require('./colour');
var bus = require('./bus');
var required = false;
var useColours = true;

var coding = {
  log: 'black',
  info: 'yellow',
  status: 'green',
  detail: 'yellow',
  fail: 'red',
  error: 'red',
};

function log(type, text) {
  var msg = '[nodemon] ' + (text || '');

  if (useColours) {
    msg = colour(coding[type], msg);
  }

  // always push the message through our bus, using nextTick
  // to help testing and get _out of_ promises.
  process.nextTick(() => {
    bus.emit('log', { type: type, message: text, colour: msg });
  });

  // but if we're running on the command line, also echo out
  // question: should we actually just consume our own events?
  if (!required) {
    if (type === 'error') {
      console.error(msg);
    } else {
      console.log(msg || '');
    }
  }
}

var Logger = function (r) {
  if (!(this instanceof Logger)) {
    return new Logger(r);
  }
  this.required(r);
  return this;
};

Object.keys(coding).forEach(function (type) {
  Logger.prototype[type] = log.bind(null, type);
});

// detail is for messages that are turned on during debug
Logger.prototype.detail = function (msg) {
  if (this.debug) {
    log('detail', msg);
  }
};

Logger.prototype.required = function (val) {
  required = val;
};

Logger.prototype.debug = false;
Logger.prototype._log = function (type, msg) {
  if (required) {
    bus.emit('log', { type: type, message: msg || '', colour: msg || '' });
  } else if (type === 'error') {
    console.error(msg);
  } else {
    console.log(msg || '');
  }
};

Object.defineProperty(Logger.prototype, 'useColours', {
  set: function (val) {
    useColours = val;
  },
  get: function () {
    return useColours;
  },
});

module.exports = Logger;
