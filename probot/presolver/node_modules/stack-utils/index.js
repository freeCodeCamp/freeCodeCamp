module.exports = StackUtils;

function StackUtils(opts) {
  if (!(this instanceof StackUtils)) {
    throw new Error('StackUtils constructor must be called with new');
  }
  opts = opts || {};
  this._cwd = (opts.cwd || process.cwd()).replace(/\\/g, '/');
  this._internals = opts.internals || [];
  this._wrapCallSite = opts.wrapCallSite || false;
}

module.exports.nodeInternals = nodeInternals;

function nodeInternals() {
  if (!module.exports.natives) {
    module.exports.natives = Object.keys(process.binding('natives'));
    module.exports.natives.push('bootstrap_node', 'node');
  }

  return module.exports.natives.map(function (n) {
    return new RegExp('\\(' + n + '\\.js:\\d+:\\d+\\)$');
  }).concat([
    /\s*at (bootstrap_)?node\.js:\d+:\d+?$/,
    /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?$/
  ]);
}

StackUtils.prototype.clean = function (stack) {
  if (!Array.isArray(stack)) {
    stack = stack.split('\n');
  }

  if (!(/^\s*at /.test(stack[0])) &&
    (/^\s*at /.test(stack[1]))) {
    stack = stack.slice(1);
  }

  var outdent = false;
  var lastNonAtLine = null;
  var result = [];

  stack.forEach(function (st) {
    st = st.replace(/\\/g, '/');
    var isInternal = this._internals.some(function (internal) {
      return internal.test(st);
    });

    if (isInternal) {
      return null;
    }

    var isAtLine = /^\s*at /.test(st);

    if (outdent) {
      st = st.replace(/\s+$/, '').replace(/^(\s+)at /, '$1');
    } else {
      st = st.trim();
      if (isAtLine) {
        st = st.substring(3);
      }
    }

    st = st.replace(this._cwd + '/', '');

    if (st) {
      if (isAtLine) {
        if (lastNonAtLine) {
          result.push(lastNonAtLine);
          lastNonAtLine = null;
        }
        result.push(st);
      } else {
        outdent = true;
        lastNonAtLine = st;
      }
    }
  }, this);

  stack = result.join('\n').trim();

  if (stack) {
    return stack + '\n';
  }
  return '';
};

StackUtils.prototype.captureString = function (limit, fn) {
  if (typeof limit === 'function') {
    fn = limit;
    limit = Infinity;
  }
  if (!fn) {
    fn = this.captureString;
  }

  var limitBefore = Error.stackTraceLimit;
  if (limit) {
    Error.stackTraceLimit = limit;
  }

  var obj = {};

  Error.captureStackTrace(obj, fn);
  var stack = obj.stack;
  Error.stackTraceLimit = limitBefore;

  return this.clean(stack);
};

StackUtils.prototype.capture = function (limit, fn) {
  if (typeof limit === 'function') {
    fn = limit;
    limit = Infinity;
  }
  if (!fn) {
    fn = this.capture;
  }
  var prepBefore = Error.prepareStackTrace;
  var limitBefore = Error.stackTraceLimit;
  var wrapCallSite = this._wrapCallSite;

  Error.prepareStackTrace = function (obj, site) {
    if (wrapCallSite) {
      return site.map(wrapCallSite);
    }
    return site;
  };

  if (limit) {
    Error.stackTraceLimit = limit;
  }

  var obj = {};
  Error.captureStackTrace(obj, fn);
  var stack = obj.stack;
  Error.prepareStackTrace = prepBefore;
  Error.stackTraceLimit = limitBefore;

  return stack;
};

StackUtils.prototype.at = function at(fn) {
  if (!fn) {
    fn = at;
  }

  var site = this.capture(1, fn)[0];

  if (!site) {
    return {};
  }

  var res = {
    line: site.getLineNumber(),
    column: site.getColumnNumber()
  };

  this._setFile(res, site.getFileName());

  if (site.isConstructor()) {
    res.constructor = true;
  }

  if (site.isEval()) {
    res.evalOrigin = site.getEvalOrigin();
  }

  if (site.isNative()) {
    res.native = true;
  }

  var typename = null;
  try {
    typename = site.getTypeName();
  } catch (er) {}

  if (typename &&
    typename !== 'Object' &&
    typename !== '[object Object]') {
    res.type = typename;
  }

  var fname = site.getFunctionName();
  if (fname) {
    res.function = fname;
  }

  var meth = site.getMethodName();
  if (meth && fname !== meth) {
    res.method = meth;
  }

  return res;
};

StackUtils.prototype._setFile = function (result, filename) {
  if (filename) {
    filename = filename.replace(/\\/g, '/');
    if ((filename.indexOf(this._cwd + '/') === 0)) {
      filename = filename.substr(this._cwd.length + 1);
    }
    result.file = filename;
  }
};

var re = new RegExp(
  '^' +
    // Sometimes we strip out the '    at' because it's noisy
  '(?:\\s*at )?' +
    // $1 = ctor if 'new'
  '(?:(new) )?' +
    // $2 = function name (can be literally anything)
    // May contain method at the end as [as xyz]
  '(?:(.*?) \\()?' +
    // (eval at <anonymous> (file.js:1:1),
    // $3 = eval origin
    // $4:$5:$6 are eval file/line/col, but not normally reported
  '(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?' +
    // file:line:col
    // $7:$8:$9
    // $10 = 'native' if native
  '(?:(.+?):(\\d+):(\\d+)|(native))' +
    // maybe close the paren, then end
    // if $11 is ), then we only allow balanced parens in the filename
    // any imbalance is placed on the fname.  This is a heuristic, and
    // bound to be incorrect in some edge cases.  The bet is that
    // having weird characters in method names is more common than
    // having weird characters in filenames, which seems reasonable.
  '(\\)?)$'
);

var methodRe = /^(.*?) \[as (.*?)\]$/;

StackUtils.prototype.parseLine = function parseLine(line) {
  var match = line && line.match(re);
  if (!match) {
    return null;
  }

  var ctor = match[1] === 'new';
  var fname = match[2];
  var evalOrigin = match[3];
  var evalFile = match[4];
  var evalLine = Number(match[5]);
  var evalCol = Number(match[6]);
  var file = match[7];
  var lnum = match[8];
  var col = match[9];
  var native = match[10] === 'native';
  var closeParen = match[11] === ')';

  var res = {};

  if (lnum) {
    res.line = Number(lnum);
  }

  if (col) {
    res.column = Number(col);
  }

  if (closeParen && file) {
    // make sure parens are balanced
    // if we have a file like "asdf) [as foo] (xyz.js", then odds are
    // that the fname should be += " (asdf) [as foo]" and the file
    // should be just "xyz.js"
    // walk backwards from the end to find the last unbalanced (
    var closes = 0;
    for (var i = file.length - 1; i > 0; i--) {
      if (file.charAt(i) === ')') {
        closes ++;
      } else if (file.charAt(i) === '(' && file.charAt(i - 1) === ' ') {
        closes --;
        if (closes === -1 && file.charAt(i - 1) === ' ') {
          var before = file.substr(0, i - 1);
          var after = file.substr(i + 1);
          file = after;
          fname += ' (' + before;
          break;
        }
      }
    }
  }

  if (fname) {
    var methodMatch = fname.match(methodRe);
    if (methodMatch) {
      fname = methodMatch[1];
      var meth = methodMatch[2];
    }
  }

  this._setFile(res, file);

  if (ctor) {
    res.constructor = true;
  }

  if (evalOrigin) {
    res.evalOrigin = evalOrigin;
    res.evalLine = evalLine;
    res.evalColumn = evalCol;
    res.evalFile = evalFile && evalFile.replace(/\\/g, '/');
  }

  if (native) {
    res.native = true;
  }

  if (fname) {
    res.function = fname;
  }

  if (meth && fname !== meth) {
    res.method = meth;
  }

  return res;
};

var bound = new StackUtils();

Object.keys(StackUtils.prototype).forEach(function (key) {
  StackUtils[key] = bound[key].bind(bound);
});
