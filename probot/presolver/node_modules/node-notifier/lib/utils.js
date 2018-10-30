var shellwords = require('shellwords');
var cp = require('child_process');
var semver = require('semver');
var path = require('path');
var url = require('url');
var os = require('os');
var fs = require('fs');

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports.clone = clone;

var escapeQuotes = function(str) {
  if (typeof str === 'string') {
    return str.replace(/(["$`\\])/g, '\\$1');
  } else {
    return str;
  }
};

var inArray = function(arr, val) {
  return arr.indexOf(val) !== -1;
};

var notifySendFlags = {
  u: 'urgency',
  urgency: 'urgency',
  t: 'expire-time',
  time: 'expire-time',
  e: 'expire-time',
  expire: 'expire-time',
  'expire-time': 'expire-time',
  i: 'icon',
  icon: 'icon',
  c: 'category',
  category: 'category',
  subtitle: 'category',
  h: 'hint',
  hint: 'hint'
};

module.exports.command = function(notifier, options, cb) {
  notifier = shellwords.escape(notifier);
  if (process.env.DEBUG && process.env.DEBUG.indexOf('notifier') !== -1) {
    console.info('node-notifier debug info (command):');
    console.info('[notifier path]', notifier);
    console.info('[notifier options]', options.join(' '));
  }

  return cp.exec(notifier + ' ' + options.join(' '), function(
    error,
    stdout,
    stderr
  ) {
    if (error) return cb(error);
    cb(stderr, stdout);
  });
};

module.exports.fileCommand = function(notifier, options, cb) {
  if (process.env.DEBUG && process.env.DEBUG.indexOf('notifier') !== -1) {
    console.info('node-notifier debug info (fileCommand):');
    console.info('[notifier path]', notifier);
    console.info('[notifier options]', options.join(' '));
  }

  return cp.execFile(notifier, options, function(error, stdout, stderr) {
    if (error) return cb(error, stdout);
    cb(stderr, stdout);
  });
};

module.exports.fileCommandJson = function(notifier, options, cb) {
  if (process.env.DEBUG && process.env.DEBUG.indexOf('notifier') !== -1) {
    console.info('node-notifier debug info (fileCommandJson):');
    console.info('[notifier path]', notifier);
    console.info('[notifier options]', options.join(' '));
  }
  return cp.execFile(notifier, options, function(error, stdout, stderr) {
    if (error) return cb(error, stdout);
    if (!stdout) return cb(error, {});

    try {
      var data = JSON.parse(stdout);
      cb(stderr, data);
    } catch (e) {
      cb(e, stdout);
    }
  });
};

module.exports.immediateFileCommand = function(notifier, options, cb) {
  if (process.env.DEBUG && process.env.DEBUG.indexOf('notifier') !== -1) {
    console.info('node-notifier debug info (notifier):');
    console.info('[notifier path]', notifier);
  }

  notifierExists(notifier, function(_, exists) {
    if (!exists) {
      return cb(new Error('Notifier (' + notifier + ') not found on system.'));
    }
    cp.execFile(notifier, options);
    cb();
  });
};

function notifierExists(notifier, cb) {
  return fs.stat(notifier, function(err, stat) {
    if (!err) return cb(err, stat.isFile());

    // Check if Windows alias
    if (path.extname(notifier)) {
      // Has extentioon, no need to check more
      return cb(err, false);
    }

    // Check if there is an exe file in the directory
    return fs.stat(notifier + '.exe', function(err, stat) {
      if (err) return cb(err, false);
      cb(err, stat.isFile());
    });
  });
}

var mapAppIcon = function(options) {
  if (options.appIcon) {
    options.icon = options.appIcon;
    delete options.appIcon;
  }

  return options;
};

var mapText = function(options) {
  if (options.text) {
    options.message = options.text;
    delete options.text;
  }

  return options;
};

var mapIconShorthand = function(options) {
  if (options.i) {
    options.icon = options.i;
    delete options.i;
  }

  return options;
};

module.exports.mapToNotifySend = function(options) {
  options = mapAppIcon(options);
  options = mapText(options);

  for (var key in options) {
    if (key === 'message' || key === 'title') continue;
    if (options.hasOwnProperty(key) && notifySendFlags[key] !== key) {
      options[notifySendFlags[key]] = options[key];
      delete options[key];
    }
  }

  return options;
};

module.exports.mapToGrowl = function(options) {
  options = mapAppIcon(options);
  options = mapIconShorthand(options);
  options = mapText(options);

  if (options.icon && !Buffer.isBuffer(options.icon)) {
    try {
      options.icon = fs.readFileSync(options.icon);
    } catch (ex) {}
  }

  return options;
};

module.exports.mapToMac = function(options) {
  options = mapIconShorthand(options);
  options = mapText(options);

  if (options.icon) {
    options.appIcon = options.icon;
    delete options.icon;
  }

  if (options.sound === true) {
    options.sound = 'Bottle';
  }

  if (options.sound === false) {
    delete options.sound;
  }

  if (options.sound && options.sound.indexOf('Notification.') === 0) {
    options.sound = 'Bottle';
  }

  if (options.wait === true) {
    if (!options.timeout) {
      options.timeout = 5;
    }
    delete options.wait;
  }

  options.json = true;
  return options;
};

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function noop() {}
module.exports.actionJackerDecorator = function(emitter, options, fn, mapper) {
  options = clone(options);
  fn = fn || noop;

  if (typeof fn !== 'function') {
    throw new TypeError(
      'The second argument must be a function callback. You have passed ' +
        typeof fn
    );
  }

  return function(err, data) {
    var resultantData = data;
    var metadata = {};
    // Allow for extra data if resultantData is an object
    if (resultantData && typeof resultantData === 'object') {
      metadata = resultantData;
      resultantData = resultantData.activationType;
    }

    // Sanitize the data
    if (resultantData) {
      resultantData = resultantData.toLowerCase().trim();
      if (resultantData.match(/^activate|clicked$/)) {
        resultantData = 'activate';
      }
    }

    fn.apply(emitter, [err, resultantData, metadata]);
    if (!mapper || !resultantData) return;

    var key = mapper(resultantData);
    if (!key) return;
    emitter.emit(key, emitter, options, metadata);
  };
};

module.exports.constructArgumentList = function(options, extra) {
  var args = [];
  extra = extra || {};

  // Massive ugly setup. Default args
  var initial = extra.initial || [];
  var keyExtra = extra.keyExtra || '';
  var allowedArguments = extra.allowedArguments || [];
  var noEscape = extra.noEscape !== void 0;
  var checkForAllowed = extra.allowedArguments !== void 0;
  var explicitTrue = !!extra.explicitTrue;
  var keepNewlines = !!extra.keepNewlines;
  var wrapper = extra.wrapper === void 0 ? '"' : extra.wrapper;

  var escapeFn = function(arg) {
    if (isArray(arg)) {
      return removeNewLines(arg.join(','));
    }

    if (!noEscape) {
      arg = escapeQuotes(arg);
    }
    if (typeof arg === 'string' && !keepNewlines) {
      arg = removeNewLines(arg);
    }
    return wrapper + arg + wrapper;
  };

  initial.forEach(function(val) {
    args.push(escapeFn(val));
  });
  for (var key in options) {
    if (
      options.hasOwnProperty(key) &&
      (!checkForAllowed || inArray(allowedArguments, key))
    ) {
      if (explicitTrue && options[key] === true) {
        args.push('-' + keyExtra + key);
      } else if (explicitTrue && options[key] === false) continue;
      else args.push('-' + keyExtra + key, escapeFn(options[key]));
    }
  }
  return args;
};

function removeNewLines(str) {
  var excapedNewline = process.platform === 'win32' ? '\\r\\n' : '\\n';
  return str.replace(/\r?\n/g, excapedNewline);
}

/*
---- Options ----
[-t] <title string>     | Displayed on the first line of the toast.
[-m] <message string>   | Displayed on the remaining lines, wrapped.
[-p] <image URI>        | Display toast with an image, local files only.
[-w]                    | Wait for toast to expire or activate.
[-id] <id>              | sets the id for a notification to be able to close it later.
[-s] <sound URI>        | Sets the sound of the notifications, for possible values see http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx.
[-silent]               | Don't play a sound file when showing the notifications.
[-appID] <App.ID>       | Don't create a shortcut but use the provided app id.
-close <id>             | Closes a currently displayed notification, in order to be able to close a notification the parameter -w must be used to create the notification.
*/
var allowedToasterFlags = [
  't',
  'm',
  'p',
  'w',
  'id',
  's',
  'silent',
  'appID',
  'close',
  'install'
];
var toasterSoundPrefix = 'Notification.';
var toasterDefaultSound = 'Notification.Default';
module.exports.mapToWin8 = function(options) {
  options = mapAppIcon(options);
  options = mapText(options);

  if (options.icon) {
    if (/^file:\/+/.test(options.icon)) {
      // should parse file protocol URL to path
      options.p = url
        .parse(options.icon)
        .pathname.replace(/^\/(\w:\/)/, '$1')
        .replace(/\//g, '\\');
    } else {
      options.p = options.icon;
    }
    delete options.icon;
  }

  if (options.message) {
    // Remove escape char to debug "HRESULT : 0xC00CE508" exception
    options.m = options.message.replace(/\x1b/g, '');
    delete options.message;
  }

  if (options.title) {
    options.t = options.title;
    delete options.title;
  }

  if (options.appName) {
    options.appID = options.appName;
    delete options.appName;
  }

  if (typeof options.remove !== 'undefined') {
    options.close = options.remove;
    delete options.remove;
  }

  if (options.quiet || options.silent) {
    options.silent = options.quiet || options.silent;
    delete options.quiet;
  }

  if (typeof options.sound !== 'undefined') {
    options.s = options.sound;
    delete options.sound;
  }

  if (options.s === false) {
    options.silent = true;
    delete options.s;
  }

  // Silent takes precedence. Remove sound.
  if (options.s && options.silent) {
    delete options.s;
  }

  if (options.s === true) {
    options.s = toasterDefaultSound;
  }

  if (options.s && options.s.indexOf(toasterSoundPrefix) !== 0) {
    options.s = toasterDefaultSound;
  }

  if (options.wait) {
    options.w = options.wait;
    delete options.wait;
  }

  for (var key in options) {
    // Check if is allowed. If not, delete!
    if (
      options.hasOwnProperty(key) &&
      allowedToasterFlags.indexOf(key) === -1
    ) {
      delete options[key];
    }
  }

  return options;
};

module.exports.mapToNotifu = function(options) {
  options = mapAppIcon(options);
  options = mapText(options);

  if (options.icon) {
    options.i = options.icon;
    delete options.icon;
  }

  if (options.message) {
    options.m = options.message;
    delete options.message;
  }

  if (options.title) {
    options.p = options.title;
    delete options.title;
  }

  if (options.time) {
    options.d = options.time;
    delete options.time;
  }

  if (options.q !== false) {
    options.q = true;
  } else {
    delete options.q;
  }

  if (options.quiet === false) {
    delete options.q;
    delete options.quiet;
  }

  if (options.sound) {
    delete options.q;
    delete options.sound;
  }

  if (options.t) {
    options.d = options.t;
    delete options.t;
  }

  if (options.type) {
    options.t = sanitizeNotifuTypeArgument(options.type);
    delete options.type;
  }

  return options;
};

module.exports.isMac = function() {
  return os.type() === 'Darwin';
};

module.exports.isMountainLion = function() {
  return (
    os.type() === 'Darwin' &&
    semver.satisfies(garanteeSemverFormat(os.release()), '>=12.0.0')
  );
};

module.exports.isWin8 = function() {
  return (
    os.type() === 'Windows_NT' &&
    semver.satisfies(garanteeSemverFormat(os.release()), '>=6.2.9200')
  );
};

module.exports.isLessThanWin8 = function() {
  return (
    os.type() === 'Windows_NT' &&
    semver.satisfies(garanteeSemverFormat(os.release()), '<6.2.9200')
  );
};

function garanteeSemverFormat(version) {
  if (version.split('.').length === 2) {
    version += '.0';
  }
  return version;
}

function sanitizeNotifuTypeArgument(type) {
  if (typeof type === 'string' || type instanceof String) {
    if (type.toLowerCase() === 'info') return 'info';
    if (type.toLowerCase() === 'warn') return 'warn';
    if (type.toLowerCase() === 'error') return 'error';
  }

  return 'info';
}
