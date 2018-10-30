'use strict';

var fs = require('fs');
var url = require('url');
var transports = require('./transports');
var path = require('path');
var lsmod = require('../vendor/node-lsmod');
var stacktrace = require('stack-trace');
var stringify = require('../vendor/json-stringify-safe');

var ravenVersion = require('../package.json').version;

var protocolMap = {
  http: 80,
  https: 443
};

var consoleAlerts = new Set();

// Default Node.js REPL depth
var MAX_SERIALIZE_EXCEPTION_DEPTH = 3;
// 50kB, as 100kB is max payload size, so half sounds reasonable
var MAX_SERIALIZE_EXCEPTION_SIZE = 50 * 1024;
var MAX_SERIALIZE_KEYS_LENGTH = 40;

function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}

function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

function isError(what) {
  return (
    Object.prototype.toString.call(what) === '[object Error]' || what instanceof Error
  );
}

module.exports.isError = isError;

function isPlainObject(what) {
  return Object.prototype.toString.call(what) === '[object Object]';
}

module.exports.isPlainObject = isPlainObject;

function serializeValue(value) {
  var maxLength = 40;

  if (typeof value === 'string') {
    return value.length <= maxLength ? value : value.substr(0, maxLength - 1) + '\u2026';
  } else if (
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined'
  ) {
    return value;
  }

  var type = Object.prototype.toString.call(value);

  // Node.js REPL notation
  if (type === '[object Object]') return '[Object]';
  if (type === '[object Array]') return '[Array]';
  if (type === '[object Function]')
    return value.name ? '[Function: ' + value.name + ']' : '[Function]';

  return value;
}

function serializeObject(value, depth) {
  if (depth === 0) return serializeValue(value);

  if (isPlainObject(value)) {
    return Object.keys(value).reduce(function(acc, key) {
      acc[key] = serializeObject(value[key], depth - 1);
      return acc;
    }, {});
  } else if (Array.isArray(value)) {
    return value.map(function(val) {
      return serializeObject(val, depth - 1);
    });
  }

  return serializeValue(value);
}

function serializeException(ex, depth, maxSize) {
  if (!isPlainObject(ex)) return ex;

  depth = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_DEPTH : depth;
  maxSize = typeof depth !== 'number' ? MAX_SERIALIZE_EXCEPTION_SIZE : maxSize;

  var serialized = serializeObject(ex, depth);

  if (jsonSize(stringify(serialized)) > maxSize) {
    return serializeException(ex, depth - 1);
  }

  return serialized;
}

module.exports.serializeException = serializeException;

function serializeKeysForMessage(keys, maxLength) {
  if (typeof keys === 'number' || typeof keys === 'string') return keys.toString();
  if (!Array.isArray(keys)) return '';

  keys = keys.filter(function(key) {
    return typeof key === 'string';
  });
  if (keys.length === 0) return '[object has no keys]';

  maxLength = typeof maxLength !== 'number' ? MAX_SERIALIZE_KEYS_LENGTH : maxLength;
  if (keys[0].length >= maxLength) return keys[0];

  for (var usedKeys = keys.length; usedKeys > 0; usedKeys--) {
    var serialized = keys.slice(0, usedKeys).join(', ');
    if (serialized.length > maxLength) continue;
    if (usedKeys === keys.length) return serialized;
    return serialized + '\u2026';
  }

  return '';
}

module.exports.serializeKeysForMessage = serializeKeysForMessage;

module.exports.disableConsoleAlerts = function disableConsoleAlerts() {
  consoleAlerts = false;
};

module.exports.enableConsoleAlerts = function enableConsoleAlerts() {
  consoleAlerts = new Set();
};

module.exports.consoleAlert = function consoleAlert(msg) {
  if (consoleAlerts) {
    console.warn('raven@' + ravenVersion + ' alert: ' + msg);
  }
};

module.exports.consoleAlertOnce = function consoleAlertOnce(msg) {
  if (consoleAlerts && !consoleAlerts.has(msg)) {
    consoleAlerts.add(msg);
    console.warn('raven@' + ravenVersion + ' alert: ' + msg);
  }
};

module.exports.extend =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

module.exports.getAuthHeader = function getAuthHeader(timestamp, apiKey, apiSecret) {
  var header = ['Sentry sentry_version=5'];
  header.push('sentry_timestamp=' + timestamp);
  header.push('sentry_client=raven-node/' + ravenVersion);
  header.push('sentry_key=' + apiKey);
  if (apiSecret) header.push('sentry_secret=' + apiSecret);
  return header.join(', ');
};

module.exports.parseDSN = function parseDSN(dsn) {
  if (!dsn) {
    // Let a falsey value return false explicitly
    return false;
  }
  try {
    var parsed = url.parse(dsn),
      response = {
        protocol: parsed.protocol.slice(0, -1),
        public_key: parsed.auth.split(':')[0],
        host: parsed.host.split(':')[0]
      };

    if (parsed.auth.split(':')[1]) {
      response.private_key = parsed.auth.split(':')[1];
    }

    if (~response.protocol.indexOf('+')) {
      response.protocol = response.protocol.split('+')[1];
    }

    if (!transports.hasOwnProperty(response.protocol)) {
      throw new Error('Invalid transport');
    }

    var index = parsed.pathname.lastIndexOf('/');
    response.path = parsed.pathname.substr(0, index + 1);
    response.project_id = parsed.pathname.substr(index + 1);
    response.port = ~~parsed.port || protocolMap[response.protocol] || 443;
    return response;
  } catch (e) {
    throw new Error('Invalid Sentry DSN: ' + dsn);
  }
};

module.exports.getTransaction = function getTransaction(frame) {
  if (frame.module || frame.function) {
    return (frame.module || '?') + ' at ' + (frame.function || '?');
  }
  return '<unknown>';
};

var moduleCache;
module.exports.getModules = function getModules() {
  if (!moduleCache) {
    moduleCache = lsmod();
  }
  return moduleCache;
};

module.exports.fill = function(obj, name, replacement, track) {
  var orig = obj[name];
  obj[name] = replacement(orig);
  if (track) {
    track.push([obj, name, orig]);
  }
};

var LINES_OF_CONTEXT = 7;

function getFunction(line) {
  try {
    return (
      line.getFunctionName() ||
      line.getTypeName() + '.' + (line.getMethodName() || '<anonymous>')
    );
  } catch (e) {
    // This seems to happen sometimes when using 'use strict',
    // stemming from `getTypeName`.
    // [TypeError: Cannot read property 'constructor' of undefined]
    return '<anonymous>';
  }
}

var mainModule =
  ((require.main && require.main.filename && path.dirname(require.main.filename)) ||
    global.process.cwd()) + '/';

function getModule(filename, base) {
  if (!base) base = mainModule;

  // It's specifically a module
  var file = path.basename(filename, '.js');
  filename = path.dirname(filename);
  var n = filename.lastIndexOf('/node_modules/');
  if (n > -1) {
    // /node_modules/ is 14 chars
    return filename.substr(n + 14).replace(/\//g, '.') + ':' + file;
  }
  // Let's see if it's a part of the main module
  // To be a part of main module, it has to share the same base
  n = (filename + '/').lastIndexOf(base, 0);
  if (n === 0) {
    var module = filename.substr(base.length).replace(/\//g, '.');
    if (module) module += ':';
    module += file;
    return module;
  }
  return file;
}

function readSourceFiles(filenames, cb) {
  // we're relying on filenames being de-duped already
  if (filenames.length === 0) return setTimeout(cb, 0, {});

  var sourceFiles = {};
  var numFilesToRead = filenames.length;
  return filenames.forEach(function(filename) {
    fs.readFile(filename, function(readErr, file) {
      if (!readErr) sourceFiles[filename] = file.toString().split('\n');
      if (--numFilesToRead === 0) cb(sourceFiles);
    });
  });
}

// This is basically just `trim_line` from https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
function snipLine(line, colno) {
  var ll = line.length;
  if (ll <= 150) return line;
  if (colno > ll) colno = ll;

  var start = Math.max(colno - 60, 0);
  if (start < 5) start = 0;

  var end = Math.min(start + 140, ll);
  if (end > ll - 5) end = ll;
  if (end === ll) start = Math.max(end - 140, 0);

  line = line.slice(start, end);
  if (start > 0) line = '{snip} ' + line;
  if (end < ll) line += ' {snip}';

  return line;
}

function snipLine0(line) {
  return snipLine(line, 0);
}

function parseStack(err, cb) {
  if (!err) return cb([]);

  var stack = stacktrace.parse(err);
  if (!stack || !Array.isArray(stack) || !stack.length || !stack[0].getFileName) {
    // the stack is not the useful thing we were expecting :/
    return cb([]);
  }

  // Sentry expects the stack trace to be oldest -> newest, v8 provides newest -> oldest
  stack.reverse();

  var frames = [];
  var filesToRead = {};
  stack.forEach(function(line) {
    var frame = {
      filename: line.getFileName() || '',
      lineno: line.getLineNumber(),
      colno: line.getColumnNumber(),
      function: getFunction(line)
    };

    var isInternal =
      line.isNative() ||
      (frame.filename[0] !== '/' &&
        frame.filename[0] !== '.' &&
        frame.filename.indexOf(':\\') !== 1);

    // in_app is all that's not an internal Node function or a module within node_modules
    // note that isNative appears to return true even for node core libraries
    // see https://github.com/getsentry/raven-node/issues/176
    frame.in_app = !isInternal && frame.filename.indexOf('node_modules/') === -1;

    // Extract a module name based on the filename
    if (frame.filename) {
      frame.module = getModule(frame.filename);
      if (!isInternal) filesToRead[frame.filename] = true;
    }

    frames.push(frame);
  });

  return readSourceFiles(Object.keys(filesToRead), function(sourceFiles) {
    frames.forEach(function(frame) {
      if (frame.filename && sourceFiles[frame.filename]) {
        var lines = sourceFiles[frame.filename];
        try {
          frame.pre_context = lines
            .slice(Math.max(0, frame.lineno - (LINES_OF_CONTEXT + 1)), frame.lineno - 1)
            .map(snipLine0);
          frame.context_line = snipLine(lines[frame.lineno - 1], frame.colno);
          frame.post_context = lines
            .slice(frame.lineno, frame.lineno + LINES_OF_CONTEXT)
            .map(snipLine0);
        } catch (e) {
          // anomaly, being defensive in case
          // unlikely to ever happen in practice but can definitely happen in theory
        }
      }
    });

    cb(frames);
  });
}

// expose basically for testing because I don't know what I'm doing
module.exports.parseStack = parseStack;
module.exports.getModule = getModule;
