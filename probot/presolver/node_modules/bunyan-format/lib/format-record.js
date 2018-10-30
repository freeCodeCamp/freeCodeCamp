'use strict';

var util       =  require('util');
var format     =  util.format;
var http       =  require('http');
var xtend      =  require('xtend');
var ansicolors =  require('ansicolors');
var ansistyles =  require('ansistyles');

var styles = xtend(ansistyles, ansicolors);

// Most of this code is lifted directly from the bunyan ./bin file and should be cleaned up once there is more time
var OM_LONG = 1;
var OM_JSON = 2;
var OM_INSPECT = 3;
var OM_SIMPLE = 4;
var OM_SHORT = 5;
var OM_BUNYAN = 6;
var OM_FROM_NAME = {
  'long': OM_LONG,
  'json': OM_JSON,
  'inspect': OM_INSPECT,
  'simple': OM_SIMPLE,
  'short': OM_SHORT,
  'bunyan': OM_BUNYAN
};

// Levels
var TRACE = 10;
var DEBUG = 20;
var INFO = 30;
var WARN = 40;
var ERROR = 50;
var FATAL = 60;

var levelFromName = {
  'trace': TRACE,
  'debug': DEBUG,
  'info': INFO,
  'warn': WARN,
  'error': ERROR,
  'fatal': FATAL
};
var nameFromLevel = {};
var upperNameFromLevel = {};
var upperPaddedNameFromLevel = {};
Object.keys(levelFromName).forEach(function (name) {
  var lvl = levelFromName[name];
  nameFromLevel[lvl] = name;
  upperNameFromLevel[lvl] = name.toUpperCase();
  upperPaddedNameFromLevel[lvl] = (
    name.length === 4 ? ' ' : '') + name.toUpperCase();
});


/**
 * Is this a valid Bunyan log record.
 */
function isValidRecord(rec) {
  if (rec.v === null ||
      rec.level === null ||
      rec.name === null ||
      rec.hostname === null ||
      rec.pid === null ||
      rec.time === null ||
      rec.msg === null) {
    // Not valid Bunyan log.
    return false;
  } else {
    return true;
  }
}

function indent(s) {
  return '  ' + s.split(/\r?\n/).join('\n  ');
}

function stylizeWithColor(s, color) {
  if (!s) return '';
  var fn = styles[color];
  return fn ? fn(s) : s;
}

function stylizeWithoutColor(str, color) {
  return str;
}

/**
 * @param {int} level is the level of the record.
 * @return The level value to its String representation.
 * This is only used on json-related formats output and first suggested at 
 * https://github.com/trentm/node-bunyan/issues/194#issuecomment-64858117
 */
function mapLevelToName(level) {
  switch (level) {
    case TRACE:
      return 'TRACE';
    case DEBUG:
      return 'DEBUG';
    case INFO:
      return 'INFO';
    case WARN:
      return 'WARN';
    case ERROR:
      return 'ERROR';
    case FATAL:
      return 'FATAL';
  }
}

/**
 * Print out a single result, considering input options.
 */
module.exports = function formatRecord(rec, opts) {

  function _res(res) {
    var s = '';
    if (res.header) {
      s += res.header.trimRight();
    } else if (res.headers) {
      if (res.statusCode) {
        s += format('HTTP/1.1 %s %s\n', res.statusCode,
          http.STATUS_CODES[res.statusCode]);
      }
      var headers = res.headers;
      s += Object.keys(headers).map(
        function (h) { return h + ': ' + headers[h]; }).join('\n');
    }
    delete res.header;
    delete res.headers;
    delete res.statusCode;
    if (res.body) {
      s += '\n\n' + (typeof (res.body) === 'object'
        ? JSON.stringify(res.body, null, 2) : res.body);
      delete res.body;
    }
    if (res.trailer) {
      s += '\n' + res.trailer;
    }
    delete res.trailer;
    if (s) {
      details.push(indent(s));
    }
    // E.g. for extra 'foo' field on 'res', add 'res.foo' at
    // top-level. This *does* have the potential to stomp on a
    // literal 'res.foo' key.
    Object.keys(res).forEach(function (k) {
      rec['res.' + k] = res[k];
    });
  }

  var short = false;
  var time;
  var line = rec.line;
  var stylize = opts.color ? stylizeWithColor : stylizeWithoutColor;
  var outputMode = isNaN(opts.outputMode) ? OM_FROM_NAME[opts.outputMode] : opts.outputMode; 

  switch (outputMode) {
  case OM_SHORT:
    short = true;
    /* falls through */
  case OM_LONG:
    //  [time] LEVEL: name[/comp]/pid on hostname (src): msg* (extras...)
    //    msg*
    //    --
    //    long and multi-line extras
    //    ...
    // If 'msg' is single-line, then it goes in the top line.
    // If 'req', show the request.
    // If 'res', show the response.
    // If 'err' and 'err.stack' then show that.
    if (!isValidRecord(rec)) {
      return line + '\n';
    }

    delete rec.v;

    /*
     * We assume the Date is formatted according to ISO8601, in which
     * case we can safely chop off the date information.
     */
    if (short && rec.time[10] == 'T') {
      time = rec.time.substr(11);
      time = stylize(time, 'brightBlack');
    } else {
      time = stylize('[' + rec.time + ']', 'brightBlack');
    }

    delete rec.time;

    var nameStr = rec.name;
    delete rec.name;

    if (rec.component) {
      nameStr += '/' + rec.component;
    }
    delete rec.component;

    if (!short)
      nameStr += '/' + rec.pid;
    delete rec.pid;

    var level = (upperPaddedNameFromLevel[rec.level] || 'LVL' + rec.level);
    if (opts.color) {
      var colorFromLevel = opts.colorFromLevel || {
        10: 'brightBlack',   // TRACE
        20: 'brightBlack',   // DEBUG
        30: 'cyan',   // INFO
        40: 'magenta',  // WARN
        50: 'red',    // ERROR
        60: 'inverse',  // FATAL
      };
      level = stylize(level, colorFromLevel[rec.level]);
    }
    delete rec.level;

    var src = '';
    var s;
    var headers;
    var hostHeaderLine = '';
    if (rec.src && rec.src.file) {
      s = rec.src;
      if (s.func) {
        src = format(' (%s:%d in %s)', s.file, s.line, s.func);
      } else {
        src = format(' (%s:%d)', s.file, s.line);
      }
      src = stylize(src, 'green');
    }
    delete rec.src;

    var hostname = rec.hostname;
    delete rec.hostname;

    var extras = [];
    var details = [];

    if (rec.req_id) {
      extras.push('req_id=' + rec.req_id);
    }
    delete rec.req_id;

    var onelineMsg;
    if (rec.msg.indexOf('\n') !== -1) {
      onelineMsg = '';
      details.push(indent(stylize(rec.msg, 'cyan')));
    } else {
      onelineMsg = ' ' + stylize(rec.msg, 'cyan');
    }
    delete rec.msg;

    if (rec.req && typeof (rec.req) === 'object') {
      var req = rec.req;
      delete rec.req;
      headers = req.headers;
      s = format('%s %s HTTP/%s%s', req.method,
        req.url,
        req.httpVersion || '1.1',
        (headers ?
          '\n' + Object.keys(headers).map(function (h) {
            return h + ': ' + headers[h];
          }).join('\n') :
          '')
      );
      delete req.url;
      delete req.method;
      delete req.httpVersion;
      delete req.headers;
      if (req.body) {
        s += '\n\n' + (typeof (req.body) === 'object'
          ? JSON.stringify(req.body, null, 2) : req.body);
        delete req.body;
      }
      if (req.trailers && Object.keys(req.trailers) > 0) {
        s += '\n' + Object.keys(req.trailers).map(function (t) {
          return t + ': ' + req.trailers[t];
        }).join('\n');
      }
      delete req.trailers;
      details.push(indent(s));
      // E.g. for extra 'foo' field on 'req', add 'req.foo' at
      // top-level. This *does* have the potential to stomp on a
      // literal 'req.foo' key.
      Object.keys(req).forEach(function (k) {
        rec['req.' + k] = req[k];
      })
    }

    if (rec.client_req && typeof (rec.client_req) === 'object') {
      var client_req = rec.client_req;
      delete rec.client_req;
      headers = client_req.headers;
      s = '';
      if (client_req.address) {
        hostHeaderLine = 'Host: ' + client_req.address;
        if (client_req.port)
          hostHeaderLine += ':' + client_req.port;
        hostHeaderLine += '\n';
      }
      delete client_req.headers;
      delete client_req.address;
      delete client_req.port;
      s += format('%s %s HTTP/%s\n%s%s', client_req.method,
        client_req.url,
        client_req.httpVersion || '1.1',
        hostHeaderLine,
        (headers ?
          Object.keys(headers).map(
            function (h) {
              return h + ': ' + headers[h];
            }).join('\n') :
          ''));
      delete client_req.method;
      delete client_req.url;
      delete client_req.httpVersion;
      if (client_req.body) {
        s += '\n\n' + (typeof (client_req.body) === 'object' ?
          JSON.stringify(client_req.body, null, 2) :
          client_req.body);
        delete client_req.body;
      }
      // E.g. for extra 'foo' field on 'client_req', add
      // 'client_req.foo' at top-level. This *does* have the potential
      // to stomp on a literal 'client_req.foo' key.
      Object.keys(client_req).forEach(function (k) {
        rec['client_req.' + k] = client_req[k];
      })
      details.push(indent(s));
    }


    if (rec.res && typeof (rec.res) === 'object') {
      _res(rec.res);
      delete rec.res;
    }
    if (rec.client_res && typeof (rec.client_res) === 'object') {
      _res(rec.client_res);
      delete rec.res;
    }

    if (rec.err && rec.err.stack) {
      details.push(indent(rec.err.stack));
      delete rec.err;
    }

    var leftover = Object.keys(rec);
    for (var i = 0; i < leftover.length; i++) {
      var key = leftover[i];
      var value = rec[key];
      var stringified = false;
      if (typeof (value) !== 'string') {
        value = JSON.stringify(value, null, 2);
        stringified = true;
      }
      if (value.indexOf('\n') !== -1 || value.length > 50) {
        details.push(indent(key + ': ' + value));
      } else if (!stringified && (value.indexOf(' ') != -1 ||
        value.length === 0))
      {
        extras.push(key + '=' + JSON.stringify(value));
      } else {
        extras.push(key + '=' + value);
      }
    }

    extras = stylize(
      (extras.length ? ' (' + extras.join(', ') + ')' : ''), 'brightBlack');
    details = stylize(
      (details.length ? details.join('\n  --\n') + '\n' : ''), 'brightBlack');
    if (!short)
      return format('%s %s: %s on %s%s:%s%s\n%s',
        time,
        level,
        nameStr,
        hostname || '<no-hostname>',
        src,
        onelineMsg,
        extras,
        details);
    else
      return format('%s %s %s:%s%s\n%s',
        time,
        level,
        nameStr,
        onelineMsg,
        extras,
        details);
    break;

  case OM_INSPECT:
    return util.inspect(rec, false, Infinity, true) + '\n';

  case OM_BUNYAN:
    if (opts.levelInString) {
      rec.level = mapLevelToName(rec.level);
    }
    return JSON.stringify(rec, null, 0) + '\n';

  case OM_JSON:
    if (opts.levelInString) {
      rec.level = mapLevelToName(rec.level);
    }
    return JSON.stringify(rec, null, opts.jsonIndent) + '\n';

  case OM_SIMPLE:
    /* JSSTYLED */
    // <http://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/SimpleLayout.html>
    if (!isValidRecord(rec)) {
      return line + '\n';
    }
    return format('%s - %s\n',
      upperNameFromLevel[rec.level] || 'LVL' + rec.level,
      rec.msg);
  default:
    throw new Error('unknown output mode: '+opts.outputMode);
  }
}

