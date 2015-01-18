// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/* Just enough of CodeMirror to run runMode under node.js */

// declare global: StringStream

function splitLines(string){ return string.split(/\r?\n|\r/); };

function StringStream(string) {
  this.pos = this.start = 0;
  this.string = string;
  this.lineStart = 0;
}
StringStream.prototype = {
  eol: function() {return this.pos >= this.string.length;},
  sol: function() {return this.pos == 0;},
  peek: function() {return this.string.charAt(this.pos) || null;},
  next: function() {
    if (this.pos < this.string.length)
      return this.string.charAt(this.pos++);
  },
  eat: function(match) {
    var ch = this.string.charAt(this.pos);
    if (typeof match == "string") var ok = ch == match;
    else var ok = ch && (match.test ? match.test(ch) : match(ch));
    if (ok) {++this.pos; return ch;}
  },
  eatWhile: function(match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start;
  },
  eatSpace: function() {
    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
    return this.pos > start;
  },
  skipToEnd: function() {this.pos = this.string.length;},
  skipTo: function(ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true;}
  },
  backUp: function(n) {this.pos -= n;},
  column: function() {return this.start - this.lineStart;},
  indentation: function() {return 0;},
  match: function(pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function(str) {return caseInsensitive ? str.toLowerCase() : str;};
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) this.pos += pattern.length;
        return true;
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) return null;
      if (match && consume !== false) this.pos += match[0].length;
      return match;
    }
  },
  current: function(){return this.string.slice(this.start, this.pos);},
  hideFirstChars: function(n, inner) {
    this.lineStart += n;
    try { return inner(); }
    finally { this.lineStart -= n; }
  }
};
exports.StringStream = StringStream;

exports.startState = function(mode, a1, a2) {
  return mode.startState ? mode.startState(a1, a2) : true;
};

var modes = exports.modes = {}, mimeModes = exports.mimeModes = {};
exports.defineMode = function(name, mode) {
  if (arguments.length > 2)
    mode.dependencies = Array.prototype.slice.call(arguments, 2);
  modes[name] = mode;
};
exports.defineMIME = function(mime, spec) { mimeModes[mime] = spec; };

exports.defineMode("null", function() {
  return {token: function(stream) {stream.skipToEnd();}};
});
exports.defineMIME("text/plain", "null");

exports.resolveMode = function(spec) {
  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
    spec = mimeModes[spec];
  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
    spec = mimeModes[spec.name];
  }
  if (typeof spec == "string") return {name: spec};
  else return spec || {name: "null"};
};
exports.getMode = function(options, spec) {
  spec = exports.resolveMode(spec);
  var mfactory = modes[spec.name];
  if (!mfactory) throw new Error("Unknown mode: " + spec);
  return mfactory(options, spec);
};
exports.registerHelper = exports.registerGlobalHelper = Math.min;

exports.runMode = function(string, modespec, callback, options) {
  var mode = exports.getMode({indentUnit: 2}, modespec);
  var lines = splitLines(string), state = (options && options.state) || exports.startState(mode);
  for (var i = 0, e = lines.length; i < e; ++i) {
    if (i) callback("\n");
    var stream = new exports.StringStream(lines[i]);
    if (!stream.string && mode.blankLine) mode.blankLine(state);
    while (!stream.eol()) {
      var style = mode.token(stream, state);
      callback(stream.current(), style, i, stream.start, state);
      stream.start = stream.pos;
    }
  }
};

require.cache[require.resolve("../../lib/codemirror")] = require.cache[require.resolve("./runmode.node")];
