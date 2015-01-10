// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b");
  }

  var wordOperators = wordRegexp(["and", "or", "not", "is"]);
  var commonKeywords = ["as", "assert", "break", "class", "continue",
                        "def", "del", "elif", "else", "except", "finally",
                        "for", "from", "global", "if", "import",
                        "lambda", "pass", "raise", "return",
                        "try", "while", "with", "yield", "in"];
  var commonBuiltins = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr",
                        "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod",
                        "enumerate", "eval", "filter", "float", "format", "frozenset",
                        "getattr", "globals", "hasattr", "hash", "help", "hex", "id",
                        "input", "int", "isinstance", "issubclass", "iter", "len",
                        "list", "locals", "map", "max", "memoryview", "min", "next",
                        "object", "oct", "open", "ord", "pow", "property", "range",
                        "repr", "reversed", "round", "set", "setattr", "slice",
                        "sorted", "staticmethod", "str", "sum", "super", "tuple",
                        "type", "vars", "zip", "__import__", "NotImplemented",
                        "Ellipsis", "__debug__"];
  var py2 = {builtins: ["apply", "basestring", "buffer", "cmp", "coerce", "execfile",
                        "file", "intern", "long", "raw_input", "reduce", "reload",
                        "unichr", "unicode", "xrange", "False", "True", "None"],
             keywords: ["exec", "print"]};
  var py3 = {builtins: ["ascii", "bytes", "exec", "print"],
             keywords: ["nonlocal", "False", "True", "None"]};

  CodeMirror.registerHelper("hintWords", "python", commonKeywords.concat(commonBuiltins));

  function top(state) {
    return state.scopes[state.scopes.length - 1];
  }

  CodeMirror.defineMode("python", function(conf, parserConf) {
    var ERRORCLASS = "error";

    var singleDelimiters = parserConf.singleDelimiters || new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");
    var doubleOperators = parserConf.doubleOperators || new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");
    var doubleDelimiters = parserConf.doubleDelimiters || new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
    var tripleDelimiters = parserConf.tripleDelimiters || new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");

    if (parserConf.version && parseInt(parserConf.version, 10) == 3){
        // since http://legacy.python.org/dev/peps/pep-0465/ @ is also an operator
        var singleOperators = parserConf.singleOperators || new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]");
        var identifiers = parserConf.identifiers|| new RegExp("^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*");
    } else {
        var singleOperators = parserConf.singleOperators || new RegExp("^[\\+\\-\\*/%&|\\^~<>!]");
        var identifiers = parserConf.identifiers|| new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
    }

    var hangingIndent = parserConf.hangingIndent || conf.indentUnit;

    var myKeywords = commonKeywords, myBuiltins = commonBuiltins;
    if(parserConf.extra_keywords != undefined){
      myKeywords = myKeywords.concat(parserConf.extra_keywords);
    }
    if(parserConf.extra_builtins != undefined){
      myBuiltins = myBuiltins.concat(parserConf.extra_builtins);
    }
    if (parserConf.version && parseInt(parserConf.version, 10) == 3) {
      myKeywords = myKeywords.concat(py3.keywords);
      myBuiltins = myBuiltins.concat(py3.builtins);
      var stringPrefixes = new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))", "i");
    } else {
      myKeywords = myKeywords.concat(py2.keywords);
      myBuiltins = myBuiltins.concat(py2.builtins);
      var stringPrefixes = new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))", "i");
    }
    var keywords = wordRegexp(myKeywords);
    var builtins = wordRegexp(myBuiltins);

    // tokenizers
    function tokenBase(stream, state) {
      // Handle scope changes
      if (stream.sol() && top(state).type == "py") {
        var scopeOffset = top(state).offset;
        if (stream.eatSpace()) {
          var lineOffset = stream.indentation();
          if (lineOffset > scopeOffset)
            pushScope(stream, state, "py");
          else if (lineOffset < scopeOffset && dedent(stream, state))
            state.errorToken = true;
          return null;
        } else {
          var style = tokenBaseInner(stream, state);
          if (scopeOffset > 0 && dedent(stream, state))
            style += " " + ERRORCLASS;
          return style;
        }
      }
      return tokenBaseInner(stream, state);
    }

    function tokenBaseInner(stream, state) {
      if (stream.eatSpace()) return null;

      var ch = stream.peek();

      // Handle Comments
      if (ch == "#") {
        stream.skipToEnd();
        return "comment";
      }

      // Handle Number Literals
      if (stream.match(/^[0-9\.]/, false)) {
        var floatLiteral = false;
        // Floats
        if (stream.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)) { floatLiteral = true; }
        if (stream.match(/^\d+\.\d*/)) { floatLiteral = true; }
        if (stream.match(/^\.\d+/)) { floatLiteral = true; }
        if (floatLiteral) {
          // Float literals may be "imaginary"
          stream.eat(/J/i);
          return "number";
        }
        // Integers
        var intLiteral = false;
        // Hex
        if (stream.match(/^0x[0-9a-f]+/i)) intLiteral = true;
        // Binary
        if (stream.match(/^0b[01]+/i)) intLiteral = true;
        // Octal
        if (stream.match(/^0o[0-7]+/i)) intLiteral = true;
        // Decimal
        if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) {
          // Decimal literals may be "imaginary"
          stream.eat(/J/i);
          // TODO - Can you have imaginary longs?
          intLiteral = true;
        }
        // Zero by itself with no other piece of number.
        if (stream.match(/^0(?![\dx])/i)) intLiteral = true;
        if (intLiteral) {
          // Integer literals may be "long"
          stream.eat(/L/i);
          return "number";
        }
      }

      // Handle Strings
      if (stream.match(stringPrefixes)) {
        state.tokenize = tokenStringFactory(stream.current());
        return state.tokenize(stream, state);
      }

      // Handle operators and Delimiters
      if (stream.match(tripleDelimiters) || stream.match(doubleDelimiters))
        return null;

      if (stream.match(doubleOperators)
          || stream.match(singleOperators)
          || stream.match(wordOperators))
        return "operator";

      if (stream.match(singleDelimiters))
        return null;

      if (stream.match(keywords))
        return "keyword";

      if (stream.match(builtins))
        return "builtin";

      if (stream.match(/^(self|cls)\b/))
        return "variable-2";

      if (stream.match(identifiers)) {
        if (state.lastToken == "def" || state.lastToken == "class")
          return "def";
        return "variable";
      }

      // Handle non-detected items
      stream.next();
      return ERRORCLASS;
    }

    function tokenStringFactory(delimiter) {
      while ("rub".indexOf(delimiter.charAt(0).toLowerCase()) >= 0)
        delimiter = delimiter.substr(1);

      var singleline = delimiter.length == 1;
      var OUTCLASS = "string";

      function tokenString(stream, state) {
        while (!stream.eol()) {
          stream.eatWhile(/[^'"\\]/);
          if (stream.eat("\\")) {
            stream.next();
            if (singleline && stream.eol())
              return OUTCLASS;
          } else if (stream.match(delimiter)) {
            state.tokenize = tokenBase;
            return OUTCLASS;
          } else {
            stream.eat(/['"]/);
          }
        }
        if (singleline) {
          if (parserConf.singleLineStringErrors)
            return ERRORCLASS;
          else
            state.tokenize = tokenBase;
        }
        return OUTCLASS;
      }
      tokenString.isString = true;
      return tokenString;
    }

    function pushScope(stream, state, type) {
      var offset = 0, align = null;
      if (type == "py") {
        while (top(state).type != "py")
          state.scopes.pop();
      }
      offset = top(state).offset + (type == "py" ? conf.indentUnit : hangingIndent);
      if (type != "py" && !stream.match(/^(\s|#.*)*$/, false))
        align = stream.column() + 1;
      state.scopes.push({offset: offset, type: type, align: align});
    }

    function dedent(stream, state) {
      var indented = stream.indentation();
      while (top(state).offset > indented) {
        if (top(state).type != "py") return true;
        state.scopes.pop();
      }
      return top(state).offset != indented;
    }

    function tokenLexer(stream, state) {
      var style = state.tokenize(stream, state);
      var current = stream.current();

      // Handle '.' connected identifiers
      if (current == ".") {
        style = stream.match(identifiers, false) ? null : ERRORCLASS;
        if (style == null && state.lastStyle == "meta") {
          // Apply 'meta' style to '.' connected identifiers when
          // appropriate.
          style = "meta";
        }
        return style;
      }

      // Handle decorators
      if (current == "@"){
        if(parserConf.version && parseInt(parserConf.version, 10) == 3){
            return stream.match(identifiers, false) ? "meta" : "operator";
        } else {
            return stream.match(identifiers, false) ? "meta" : ERRORCLASS;
        }
      }

      if ((style == "variable" || style == "builtin")
          && state.lastStyle == "meta")
        style = "meta";

      // Handle scope changes.
      if (current == "pass" || current == "return")
        state.dedent += 1;

      if (current == "lambda") state.lambda = true;
      if (current == ":" && !state.lambda && top(state).type == "py")
        pushScope(stream, state, "py");

      var delimiter_index = current.length == 1 ? "[({".indexOf(current) : -1;
      if (delimiter_index != -1)
        pushScope(stream, state, "])}".slice(delimiter_index, delimiter_index+1));

      delimiter_index = "])}".indexOf(current);
      if (delimiter_index != -1) {
        if (top(state).type == current) state.scopes.pop();
        else return ERRORCLASS;
      }
      if (state.dedent > 0 && stream.eol() && top(state).type == "py") {
        if (state.scopes.length > 1) state.scopes.pop();
        state.dedent -= 1;
      }

      return style;
    }

    var external = {
      startState: function(basecolumn) {
        return {
          tokenize: tokenBase,
          scopes: [{offset: basecolumn || 0, type: "py", align: null}],
          lastStyle: null,
          lastToken: null,
          lambda: false,
          dedent: 0
        };
      },

      token: function(stream, state) {
        var addErr = state.errorToken;
        if (addErr) state.errorToken = false;
        var style = tokenLexer(stream, state);

        state.lastStyle = style;

        var current = stream.current();
        if (current && style)
          state.lastToken = current;

        if (stream.eol() && state.lambda)
          state.lambda = false;
        return addErr ? style + " " + ERRORCLASS : style;
      },

      indent: function(state, textAfter) {
        if (state.tokenize != tokenBase)
          return state.tokenize.isString ? CodeMirror.Pass : 0;

        var scope = top(state);
        var closing = textAfter && textAfter.charAt(0) == scope.type;
        if (scope.align != null)
          return scope.align - (closing ? 1 : 0);
        else if (closing && state.scopes.length > 1)
          return state.scopes[state.scopes.length - 2].offset;
        else
          return scope.offset;
      },

      lineComment: "#",
      fold: "indent"
    };
    return external;
  });

  CodeMirror.defineMIME("text/x-python", "python");

  var words = function(str) { return str.split(" "); };

  CodeMirror.defineMIME("text/x-cython", {
    name: "python",
    extra_keywords: words("by cdef cimport cpdef ctypedef enum except"+
                          "extern gil include nogil property public"+
                          "readonly struct union DEF IF ELIF ELSE")
  });

});
