/*
 * Lexical analysis and token construction.
 */

"use strict";

var _      = require("lodash");
var events = require("events");
var reg    = require("./reg.js");
var state  = require("./state.js").state;

var unicodeData = require("../data/ascii-identifier-data.js");
var asciiIdentifierStartTable = unicodeData.asciiIdentifierStartTable;
var asciiIdentifierPartTable = unicodeData.asciiIdentifierPartTable;
var nonAsciiIdentifierStartTable = require("../data/non-ascii-identifier-start.js");
var nonAsciiIdentifierPartTable = require("../data/non-ascii-identifier-part-only.js");

// Some of these token types are from JavaScript Parser API
// while others are specific to JSHint parser.
// JS Parser API: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

var Token = {
  Identifier: 1,
  Punctuator: 2,
  NumericLiteral: 3,
  StringLiteral: 4,
  Comment: 5,
  Keyword: 6,
  NullLiteral: 7,
  BooleanLiteral: 8,
  RegExp: 9,
  TemplateHead: 10,
  TemplateMiddle: 11,
  TemplateTail: 12,
  NoSubstTemplate: 13
};

var Context = {
  Block: 1,
  Template: 2
};

// Object that handles postponed lexing verifications that checks the parsed
// environment state.

function asyncTrigger() {
  var _checks = [];

  return {
    push: function(fn) {
      _checks.push(fn);
    },

    check: function() {
      for (var check = 0; check < _checks.length; ++check) {
        _checks[check]();
      }

      _checks.splice(0, _checks.length);
    }
  };
}

/*
 * Lexer for JSHint.
 *
 * This object does a char-by-char scan of the provided source code
 * and produces a sequence of tokens.
 *
 *   var lex = new Lexer("var i = 0;");
 *   lex.start();
 *   lex.token(); // returns the next token
 *
 * You have to use the token() method to move the lexer forward
 * but you don't have to use its return value to get tokens. In addition
 * to token() method returning the next token, the Lexer object also
 * emits events.
 *
 *   lex.on("Identifier", function(data) {
 *     if (data.name.indexOf("_") >= 0) {
 *       // Produce a warning.
 *     }
 *   });
 *
 * Note that the token() method returns tokens in a JSLint-compatible
 * format while the event emitter uses a slightly modified version of
 * Mozilla's JavaScript Parser API. Eventually, we will move away from
 * JSLint format.
 */
function Lexer(source) {
  var lines = source;

  if (typeof lines === "string") {
    lines = lines
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .split("\n");
  }

  // If the first line is a shebang (#!), make it a blank and move on.
  // Shebangs are used by Node scripts.

  if (lines[0] && lines[0].substr(0, 2) === "#!") {
    if (lines[0].indexOf("node") !== -1) {
      state.option.node = true;
    }
    lines[0] = "";
  }

  this.emitter = new events.EventEmitter();
  this.source = source;
  this.setLines(lines);
  this.prereg = true;

  this.line = 0;
  this.char = 1;
  this.from = 1;
  this.input = "";
  this.inComment = false;
  this.context = [];
  this.templateStarts = [];

  for (var i = 0; i < state.option.indent; i += 1) {
    state.tab += " ";
  }
}

Lexer.prototype = {
  _lines: [],

  inContext: function(ctxType) {
    return this.context.length > 0 && this.context[this.context.length - 1].type === ctxType;
  },

  pushContext: function(ctxType) {
    this.context.push({ type: ctxType });
  },

  popContext: function() {
    return this.context.pop();
  },

  isContext: function(context) {
    return this.context.length > 0 && this.context[this.context.length - 1] === context;
  },

  currentContext: function() {
    return this.context.length > 0 && this.context[this.context.length - 1];
  },

  getLines: function() {
    this._lines = state.lines;
    return this._lines;
  },

  setLines: function(val) {
    this._lines = val;
    state.lines = this._lines;
  },

  /*
   * Return the next i character without actually moving the
   * char pointer.
   */
  peek: function(i) {
    return this.input.charAt(i || 0);
  },

  /*
   * Move the char pointer forward i times.
   */
  skip: function(i) {
    i = i || 1;
    this.char += i;
    this.input = this.input.slice(i);
  },

  /*
   * Subscribe to a token event. The API for this method is similar
   * Underscore.js i.e. you can subscribe to multiple events with
   * one call:
   *
   *   lex.on("Identifier Number", function(data) {
   *     // ...
   *   });
   */
  on: function(names, listener) {
    names.split(" ").forEach(function(name) {
      this.emitter.on(name, listener);
    }.bind(this));
  },

  /*
   * Trigger a token event. All arguments will be passed to each
   * listener.
   */
  trigger: function() {
    this.emitter.emit.apply(this.emitter, Array.prototype.slice.call(arguments));
  },

  /*
   * Postpone a token event. the checking condition is set as
   * last parameter, and the trigger function is called in a
   * stored callback. To be later called using the check() function
   * by the parser. This avoids parser's peek() to give the lexer
   * a false context.
   */
  triggerAsync: function(type, args, checks, fn) {
    checks.push(function() {
      if (fn()) {
        this.trigger(type, args);
      }
    }.bind(this));
  },

  /*
   * Extract a punctuator out of the next sequence of characters
   * or return 'null' if its not possible.
   *
   * This method's implementation was heavily influenced by the
   * scanPunctuator function in the Esprima parser's source code.
   */
  scanPunctuator: function() {
    var ch1 = this.peek();
    var ch2, ch3, ch4;

    switch (ch1) {
    // Most common single-character punctuators
    case ".":
      if ((/^[0-9]$/).test(this.peek(1))) {
        return null;
      }
      if (this.peek(1) === "." && this.peek(2) === ".") {
        return {
          type: Token.Punctuator,
          value: "..."
        };
      }
      /* falls through */
    case "(":
    case ")":
    case ";":
    case ",":
    case "[":
    case "]":
    case ":":
    case "~":
    case "?":
      return {
        type: Token.Punctuator,
        value: ch1
      };

    // A block/object opener
    case "{":
      this.pushContext(Context.Block);
      return {
        type: Token.Punctuator,
        value: ch1
      };

    // A block/object closer
    case "}":
      if (this.inContext(Context.Block)) {
        this.popContext();
      }
      return {
        type: Token.Punctuator,
        value: ch1
      };

    // A pound sign (for Node shebangs)
    case "#":
      return {
        type: Token.Punctuator,
        value: ch1
      };

    // We're at the end of input
    case "":
      return null;
    }

    // Peek more characters

    ch2 = this.peek(1);
    ch3 = this.peek(2);
    ch4 = this.peek(3);

    // 4-character punctuator: >>>=

    if (ch1 === ">" && ch2 === ">" && ch3 === ">" && ch4 === "=") {
      return {
        type: Token.Punctuator,
        value: ">>>="
      };
    }

    // 3-character punctuators: === !== >>> <<= >>=

    if (ch1 === "=" && ch2 === "=" && ch3 === "=") {
      return {
        type: Token.Punctuator,
        value: "==="
      };
    }

    if (ch1 === "!" && ch2 === "=" && ch3 === "=") {
      return {
        type: Token.Punctuator,
        value: "!=="
      };
    }

    if (ch1 === ">" && ch2 === ">" && ch3 === ">") {
      return {
        type: Token.Punctuator,
        value: ">>>"
      };
    }

    if (ch1 === "<" && ch2 === "<" && ch3 === "=") {
      return {
        type: Token.Punctuator,
        value: "<<="
      };
    }

    if (ch1 === ">" && ch2 === ">" && ch3 === "=") {
      return {
        type: Token.Punctuator,
        value: ">>="
      };
    }

    // Fat arrow punctuator
    if (ch1 === "=" && ch2 === ">") {
      return {
        type: Token.Punctuator,
        value: ch1 + ch2
      };
    }

    // 2-character punctuators: <= >= == != ++ -- << >> && ||
    // += -= *= %= &= |= ^= /=
    if (ch1 === ch2 && ("+-<>&|".indexOf(ch1) >= 0)) {
      return {
        type: Token.Punctuator,
        value: ch1 + ch2
      };
    }

    if ("<>=!+-*%&|^/".indexOf(ch1) >= 0) {
      if (ch2 === "=") {
        return {
          type: Token.Punctuator,
          value: ch1 + ch2
        };
      }

      return {
        type: Token.Punctuator,
        value: ch1
      };
    }

    return null;
  },

  /*
   * Extract a comment out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since comments can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * In addition to normal JavaScript comments (// and /*) this method
   * also recognizes JSHint- and JSLint-specific comments such as
   * /*jshint, /*jslint, /*globals and so on.
   */
  scanComments: function(checks) {
    var ch1 = this.peek();
    var ch2 = this.peek(1);
    var rest = this.input.substr(2);
    var startLine = this.line;
    var startChar = this.char;
    var self = this;

    // Create a comment token object and make sure it
    // has all the data JSHint needs to work with special
    // comments.

    function commentToken(label, body, opt) {
      var special = ["jshint", "jslint", "members", "member", "globals", "global", "exported"];
      var isSpecial = false;
      var value = label + body;
      var commentType = "plain";
      opt = opt || {};

      if (opt.isMultiline) {
        value += "*/";
      }

      body = body.replace(/\n/g, " ");

      if (label === "/*" && reg.fallsThrough.test(body)) {
        isSpecial = true;
        commentType = "falls through";
      }

      special.forEach(function(str) {
        if (isSpecial) {
          return;
        }

        // Don't recognize any special comments other than jshint for single-line
        // comments. This introduced many problems with legit comments.
        if (label === "//" && str !== "jshint") {
          return;
        }

        if (body.charAt(str.length) === " " && body.substr(0, str.length) === str) {
          isSpecial = true;
          label = label + str;
          body = body.substr(str.length);
        }

        if (!isSpecial && body.charAt(0) === " " && body.charAt(str.length + 1) === " " &&
          body.substr(1, str.length) === str) {
          isSpecial = true;
          label = label + " " + str;
          body = body.substr(str.length + 1);
        }

        if (!isSpecial) {
          return;
        }

        switch (str) {
        case "member":
          commentType = "members";
          break;
        case "global":
          commentType = "globals";
          break;
        default:
          var options = body.split(":").map(function(v) {
            return v.replace(/^\s+/, "").replace(/\s+$/, "");
          });

          if (options.length === 2) {
            switch (options[0]) {
            case "ignore":
              switch (options[1]) {
              case "start":
                self.ignoringLinterErrors = true;
                isSpecial = false;
                break;
              case "end":
                self.ignoringLinterErrors = false;
                isSpecial = false;
                break;
              }
            }
          }

          commentType = str;
        }
      });

      return {
        type: Token.Comment,
        commentType: commentType,
        value: value,
        body: body,
        isSpecial: isSpecial,
        isMultiline: opt.isMultiline || false,
        isMalformed: opt.isMalformed || false
      };
    }

    // End of unbegun comment. Raise an error and skip that input.
    if (ch1 === "*" && ch2 === "/") {
      this.trigger("error", {
        code: "E018",
        line: startLine,
        character: startChar
      });

      this.skip(2);
      return null;
    }

    // Comments must start either with // or /*
    if (ch1 !== "/" || (ch2 !== "*" && ch2 !== "/")) {
      return null;
    }

    // One-line comment
    if (ch2 === "/") {
      this.skip(this.input.length); // Skip to the EOL.
      return commentToken("//", rest);
    }

    var body = "";

    /* Multi-line comment */
    if (ch2 === "*") {
      this.inComment = true;
      this.skip(2);

      while (this.peek() !== "*" || this.peek(1) !== "/") {
        if (this.peek() === "") { // End of Line
          body += "\n";

          // If we hit EOF and our comment is still unclosed,
          // trigger an error and end the comment implicitly.
          if (!this.nextLine(checks)) {
            this.trigger("error", {
              code: "E017",
              line: startLine,
              character: startChar
            });

            this.inComment = false;
            return commentToken("/*", body, {
              isMultiline: true,
              isMalformed: true
            });
          }
        } else {
          body += this.peek();
          this.skip();
        }
      }

      this.skip(2);
      this.inComment = false;
      return commentToken("/*", body, { isMultiline: true });
    }
  },

  /*
   * Extract a keyword out of the next sequence of characters or
   * return 'null' if its not possible.
   */
  scanKeyword: function() {
    var result = /^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input);
    var keywords = [
      "if", "in", "do", "var", "for", "new",
      "try", "let", "this", "else", "case",
      "void", "with", "enum", "while", "break",
      "catch", "throw", "const", "yield", "class",
      "super", "return", "typeof", "delete",
      "switch", "export", "import", "default",
      "finally", "extends", "function", "continue",
      "debugger", "instanceof"
    ];

    if (result && keywords.indexOf(result[0]) >= 0) {
      return {
        type: Token.Keyword,
        value: result[0]
      };
    }

    return null;
  },

  /*
   * Extract a JavaScript identifier out of the next sequence of
   * characters or return 'null' if its not possible. In addition,
   * to Identifier this method can also produce BooleanLiteral
   * (true/false) and NullLiteral (null).
   */
  scanIdentifier: function() {
    var id = "";
    var index = 0;
    var type, char;

    function isNonAsciiIdentifierStart(code) {
      return nonAsciiIdentifierStartTable.indexOf(code) > -1;
    }

    function isNonAsciiIdentifierPart(code) {
      return isNonAsciiIdentifierStart(code) || nonAsciiIdentifierPartTable.indexOf(code) > -1;
    }

    function isHexDigit(str) {
      return (/^[0-9a-fA-F]$/).test(str);
    }

    var readUnicodeEscapeSequence = function() {
      /*jshint validthis:true */
      index += 1;

      if (this.peek(index) !== "u") {
        return null;
      }

      var ch1 = this.peek(index + 1);
      var ch2 = this.peek(index + 2);
      var ch3 = this.peek(index + 3);
      var ch4 = this.peek(index + 4);
      var code;

      if (isHexDigit(ch1) && isHexDigit(ch2) && isHexDigit(ch3) && isHexDigit(ch4)) {
        code = parseInt(ch1 + ch2 + ch3 + ch4, 16);

        if (asciiIdentifierPartTable[code] || isNonAsciiIdentifierPart(code)) {
          index += 5;
          return "\\u" + ch1 + ch2 + ch3 + ch4;
        }

        return null;
      }

      return null;
    }.bind(this);

    var getIdentifierStart = function() {
      /*jshint validthis:true */
      var chr = this.peek(index);
      var code = chr.charCodeAt(0);

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (asciiIdentifierStartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isNonAsciiIdentifierStart(code)) {
        index += 1;
        return chr;
      }

      return null;
    }.bind(this);

    var getIdentifierPart = function() {
      /*jshint validthis:true */
      var chr = this.peek(index);
      var code = chr.charCodeAt(0);

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (asciiIdentifierPartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isNonAsciiIdentifierPart(code)) {
        index += 1;
        return chr;
      }

      return null;
    }.bind(this);

    function removeEscapeSequences(id) {
      return id.replace(/\\u([0-9a-fA-F]{4})/g, function(m0, codepoint) {
        return String.fromCharCode(parseInt(codepoint, 16));
      });
    }

    char = getIdentifierStart();
    if (char === null) {
      return null;
    }

    id = char;
    for (;;) {
      char = getIdentifierPart();

      if (char === null) {
        break;
      }

      id += char;
    }

    switch (id) {
    case "true":
    case "false":
      type = Token.BooleanLiteral;
      break;
    case "null":
      type = Token.NullLiteral;
      break;
    default:
      type = Token.Identifier;
    }

    return {
      type: type,
      value: removeEscapeSequences(id),
      text: id,
      tokenLength: id.length
    };
  },

  /*
   * Extract a numeric literal out of the next sequence of
   * characters or return 'null' if its not possible. This method
   * supports all numeric literals described in section 7.8.3
   * of the EcmaScript 5 specification.
   *
   * This method's implementation was heavily influenced by the
   * scanNumericLiteral function in the Esprima parser's source code.
   */
  scanNumericLiteral: function(checks) {
    var index = 0;
    var value = "";
    var length = this.input.length;
    var char = this.peek(index);
    var bad;
    var isAllowedDigit = isDecimalDigit;
    var base = 10;
    var isLegacy = false;

    function isDecimalDigit(str) {
      return (/^[0-9]$/).test(str);
    }

    function isOctalDigit(str) {
      return (/^[0-7]$/).test(str);
    }

    function isBinaryDigit(str) {
      return (/^[01]$/).test(str);
    }

    function isHexDigit(str) {
      return (/^[0-9a-fA-F]$/).test(str);
    }

    function isIdentifierStart(ch) {
      return (ch === "$") || (ch === "_") || (ch === "\\") ||
        (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
    }

    // Numbers must start either with a decimal digit or a point.

    if (char !== "." && !isDecimalDigit(char)) {
      return null;
    }

    if (char !== ".") {
      value = this.peek(index);
      index += 1;
      char = this.peek(index);

      if (value === "0") {
        // Base-16 numbers.
        if (char === "x" || char === "X") {
          isAllowedDigit = isHexDigit;
          base = 16;

          index += 1;
          value += char;
        }

        // Base-8 numbers.
        if (char === "o" || char === "O") {
          isAllowedDigit = isOctalDigit;
          base = 8;

          if (!state.inES6(true)) {
            this.triggerAsync(
              "warning",
              {
                code: "W119",
                line: this.line,
                character: this.char,
                data: [ "Octal integer literal", "6" ]
              },
              checks,
              function() { return true; }
            );
          }

          index += 1;
          value += char;
        }

        // Base-2 numbers.
        if (char === "b" || char === "B") {
          isAllowedDigit = isBinaryDigit;
          base = 2;

          if (!state.inES6(true)) {
            this.triggerAsync(
              "warning",
              {
                code: "W119",
                line: this.line,
                character: this.char,
                data: [ "Binary integer literal", "6" ]
              },
              checks,
              function() { return true; }
            );
          }

          index += 1;
          value += char;
        }

        // Legacy base-8 numbers.
        if (isOctalDigit(char)) {
          isAllowedDigit = isOctalDigit;
          base = 8;
          isLegacy = true;
          bad = false;

          index += 1;
          value += char;
        }

        // Decimal numbers that start with '0' such as '09' are illegal
        // but we still parse them and return as malformed.

        if (!isOctalDigit(char) && isDecimalDigit(char)) {
          index += 1;
          value += char;
        }
      }

      while (index < length) {
        char = this.peek(index);

        if (isLegacy && isDecimalDigit(char)) {
          // Numbers like '019' (note the 9) are not valid octals
          // but we still parse them and mark as malformed.
          bad = true;
        } else if (!isAllowedDigit(char)) {
          break;
        }
        value += char;
        index += 1;
      }

      if (isAllowedDigit !== isDecimalDigit) {
        if (!isLegacy && value.length <= 2) { // 0x
          return {
            type: Token.NumericLiteral,
            value: value,
            isMalformed: true
          };
        }

        if (index < length) {
          char = this.peek(index);
          if (isIdentifierStart(char)) {
            return null;
          }
        }

        return {
          type: Token.NumericLiteral,
          value: value,
          base: base,
          isLegacy: isLegacy,
          isMalformed: false
        };
      }
    }

    // Decimal digits.

    if (char === ".") {
      value += char;
      index += 1;

      while (index < length) {
        char = this.peek(index);
        if (!isDecimalDigit(char)) {
          break;
        }
        value += char;
        index += 1;
      }
    }

    // Exponent part.

    if (char === "e" || char === "E") {
      value += char;
      index += 1;
      char = this.peek(index);

      if (char === "+" || char === "-") {
        value += this.peek(index);
        index += 1;
      }

      char = this.peek(index);
      if (isDecimalDigit(char)) {
        value += char;
        index += 1;

        while (index < length) {
          char = this.peek(index);
          if (!isDecimalDigit(char)) {
            break;
          }
          value += char;
          index += 1;
        }
      } else {
        return null;
      }
    }

    if (index < length) {
      char = this.peek(index);
      if (isIdentifierStart(char)) {
        return null;
      }
    }

    return {
      type: Token.NumericLiteral,
      value: value,
      base: base,
      isMalformed: !isFinite(value)
    };
  },


  // Assumes previously parsed character was \ (=== '\\') and was not skipped.
  scanEscapeSequence: function(checks) {
    var allowNewLine = false;
    var jump = 1;
    this.skip();
    var char = this.peek();

    switch (char) {
    case "'":
      this.triggerAsync("warning", {
        code: "W114",
        line: this.line,
        character: this.char,
        data: [ "\\'" ]
      }, checks, function() {return state.jsonMode; });
      break;
    case "b":
      char = "\\b";
      break;
    case "f":
      char = "\\f";
      break;
    case "n":
      char = "\\n";
      break;
    case "r":
      char = "\\r";
      break;
    case "t":
      char = "\\t";
      break;
    case "0":
      char = "\\0";

      // Octal literals fail in strict mode.
      // Check if the number is between 00 and 07.
      var n = parseInt(this.peek(1), 10);
      this.triggerAsync("warning", {
        code: "W115",
        line: this.line,
        character: this.char
      }, checks,
      function() { return n >= 0 && n <= 7 && state.isStrict(); });
      break;
    case "u":
      var hexCode = this.input.substr(1, 4);
      var code = parseInt(hexCode, 16);
      if (isNaN(code)) {
        // This condition unequivocally describes a syntax error.
        // TODO: Re-factor as an "error" (not a "warning").
        this.trigger("warning", {
          code: "W052",
          line: this.line,
          character: this.char,
          data: [ "u" + hexCode ]
        });
      }
      char = String.fromCharCode(code);
      jump = 5;
      break;
    case "v":
      this.triggerAsync("warning", {
        code: "W114",
        line: this.line,
        character: this.char,
        data: [ "\\v" ]
      }, checks, function() { return state.jsonMode; });

      char = "\v";
      break;
    case "x":
      var  x = parseInt(this.input.substr(1, 2), 16);

      this.triggerAsync("warning", {
        code: "W114",
        line: this.line,
        character: this.char,
        data: [ "\\x-" ]
      }, checks, function() { return state.jsonMode; });

      char = String.fromCharCode(x);
      jump = 3;
      break;
    case "\\":
      char = "\\\\";
      break;
    case "\"":
      char = "\\\"";
      break;
    case "/":
      break;
    case "":
      allowNewLine = true;
      char = "";
      break;
    }

    return { char: char, jump: jump, allowNewLine: allowNewLine };
  },

  /*
   * Extract a template literal out of the next sequence of characters
   * and/or lines or return 'null' if its not possible. Since template
   * literals can span across multiple lines, this method has to move
   * the char pointer.
   */
  scanTemplateLiteral: function(checks) {
    var tokenType;
    var value = "";
    var ch;
    var startLine = this.line;
    var startChar = this.char;
    var depth = this.templateStarts.length;

    if (this.peek() === "`") {
      if (!state.inES6(true)) {
        this.triggerAsync(
          "warning",
          {
            code: "W119",
            line: this.line,
            character: this.char,
            data: ["template literal syntax", "6"]
          },
          checks,
          function() { return true; }
        );
      }
      // Template must start with a backtick.
      tokenType = Token.TemplateHead;
      this.templateStarts.push({ line: this.line, char: this.char });
      depth = this.templateStarts.length;
      this.skip(1);
      this.pushContext(Context.Template);
    } else if (this.inContext(Context.Template) && this.peek() === "}") {
      // If we're in a template context, and we have a '}', lex a TemplateMiddle.
      tokenType = Token.TemplateMiddle;
    } else {
      // Go lex something else.
      return null;
    }

    while (this.peek() !== "`") {
      while ((ch = this.peek()) === "") {
        value += "\n";
        if (!this.nextLine(checks)) {
          // Unclosed template literal --- point to the starting "`"
          var startPos = this.templateStarts.pop();
          this.trigger("error", {
            code: "E052",
            line: startPos.line,
            character: startPos.char
          });
          return {
            type: tokenType,
            value: value,
            startLine: startLine,
            startChar: startChar,
            isUnclosed: true,
            depth: depth,
            context: this.popContext()
          };
        }
      }

      if (ch === '$' && this.peek(1) === '{') {
        value += '${';
        this.skip(2);
        return {
          type: tokenType,
          value: value,
          startLine: startLine,
          startChar: startChar,
          isUnclosed: false,
          depth: depth,
          context: this.currentContext()
        };
      } else if (ch === '\\') {
        var escape = this.scanEscapeSequence(checks);
        value += escape.char;
        this.skip(escape.jump);
      } else if (ch !== '`') {
        // Otherwise, append the value and continue.
        value += ch;
        this.skip(1);
      }
    }

    // Final value is either NoSubstTemplate or TemplateTail
    tokenType = tokenType === Token.TemplateHead ? Token.NoSubstTemplate : Token.TemplateTail;
    this.skip(1);
    this.templateStarts.pop();

    return {
      type: tokenType,
      value: value,
      startLine: startLine,
      startChar: startChar,
      isUnclosed: false,
      depth: depth,
      context: this.popContext()
    };
  },

  /*
   * Extract a string out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since strings can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * This method recognizes pseudo-multiline JavaScript strings:
   *
   *   var str = "hello\
   *   world";
   */
  scanStringLiteral: function(checks) {
    /*jshint loopfunc:true */
    var quote = this.peek();

    // String must start with a quote.
    if (quote !== "\"" && quote !== "'") {
      return null;
    }

    // In JSON strings must always use double quotes.
    this.triggerAsync("warning", {
      code: "W108",
      line: this.line,
      character: this.char // +1?
    }, checks, function() { return state.jsonMode && quote !== "\""; });

    var value = "";
    var startLine = this.line;
    var startChar = this.char;
    var allowNewLine = false;

    this.skip();

    while (this.peek() !== quote) {
      if (this.peek() === "") { // End Of Line

        // If an EOL is not preceded by a backslash, show a warning
        // and proceed like it was a legit multi-line string where
        // author simply forgot to escape the newline symbol.
        //
        // Another approach is to implicitly close a string on EOL
        // but it generates too many false positives.

        if (!allowNewLine) {
          // This condition unequivocally describes a syntax error.
          // TODO: Re-factor as an "error" (not a "warning").
          this.trigger("warning", {
            code: "W112",
            line: this.line,
            character: this.char
          });
        } else {
          allowNewLine = false;

          // Otherwise show a warning if multistr option was not set.
          // For JSON, show warning no matter what.

          this.triggerAsync("warning", {
            code: "W043",
            line: this.line,
            character: this.char
          }, checks, function() { return !state.option.multistr; });

          this.triggerAsync("warning", {
            code: "W042",
            line: this.line,
            character: this.char
          }, checks, function() { return state.jsonMode && state.option.multistr; });
        }

        // If we get an EOF inside of an unclosed string, show an
        // error and implicitly close it at the EOF point.

        if (!this.nextLine(checks)) {
          this.trigger("error", {
            code: "E029",
            line: startLine,
            character: startChar
          });

          return {
            type: Token.StringLiteral,
            value: value,
            startLine: startLine,
            startChar: startChar,
            isUnclosed: true,
            quote: quote
          };
        }

      } else { // Any character other than End Of Line

        allowNewLine = false;
        var char = this.peek();
        var jump = 1; // A length of a jump, after we're done
                      // parsing this character.

        if (char < " ") {
          // Warn about a control character in a string.
          this.triggerAsync(
            "warning",
            {
              code: "W113",
              line: this.line,
              character: this.char,
              data: [ "<non-printable>" ]
            },
            checks,
            function() { return true; }
          );
        }

        // Special treatment for some escaped characters.
        if (char === "\\") {
          var parsed = this.scanEscapeSequence(checks);
          char = parsed.char;
          jump = parsed.jump;
          allowNewLine = parsed.allowNewLine;
        }

        value += char;
        this.skip(jump);
      }
    }

    this.skip();
    return {
      type: Token.StringLiteral,
      value: value,
      startLine: startLine,
      startChar: startChar,
      isUnclosed: false,
      quote: quote
    };
  },

  /*
   * Extract a regular expression out of the next sequence of
   * characters and/or lines or return 'null' if its not possible.
   *
   * This method is platform dependent: it accepts almost any
   * regular expression values but then tries to compile and run
   * them using system's RegExp object. This means that there are
   * rare edge cases where one JavaScript engine complains about
   * your regular expression while others don't.
   */
  scanRegExp: function(checks) {
    var index = 0;
    var length = this.input.length;
    var char = this.peek();
    var value = char;
    var body = "";
    var flags = [];
    var malformed = false;
    var isCharSet = false;
    var terminated, malformedDesc;

    var scanUnexpectedChars = function() {
      // Unexpected control character
      if (char < " ") {
        malformed = true;
        this.triggerAsync(
          "warning",
          {
            code: "W048",
            line: this.line,
            character: this.char
          },
          checks,
          function() { return true; }
        );
      }

      // Unexpected escaped character
      if (char === "<") {
        malformed = true;
        this.triggerAsync(
          "warning",
          {
            code: "W049",
            line: this.line,
            character: this.char,
            data: [ char ]
          },
          checks,
          function() { return true; }
        );
      }
    }.bind(this);

    // Regular expressions must start with '/'
    if (!this.prereg || char !== "/") {
      return null;
    }

    index += 1;
    terminated = false;

    // Try to get everything in between slashes. A couple of
    // cases aside (see scanUnexpectedChars) we don't really
    // care whether the resulting expression is valid or not.
    // We will check that later using the RegExp object.

    while (index < length) {
      char = this.peek(index);
      value += char;
      body += char;

      if (isCharSet) {
        if (char === "]") {
          if (this.peek(index - 1) !== "\\" || this.peek(index - 2) === "\\") {
            isCharSet = false;
          }
        }

        if (char === "\\") {
          index += 1;
          char = this.peek(index);
          body += char;
          value += char;

          scanUnexpectedChars();
        }

        index += 1;
        continue;
      }

      if (char === "\\") {
        index += 1;
        char = this.peek(index);
        body += char;
        value += char;

        scanUnexpectedChars();

        if (char === "/") {
          index += 1;
          continue;
        }

        if (char === "[") {
          index += 1;
          continue;
        }
      }

      if (char === "[") {
        isCharSet = true;
        index += 1;
        continue;
      }

      if (char === "/") {
        body = body.substr(0, body.length - 1);
        terminated = true;
        index += 1;
        break;
      }

      index += 1;
    }

    // A regular expression that was never closed is an
    // error from which we cannot recover.

    if (!terminated) {
      this.trigger("error", {
        code: "E015",
        line: this.line,
        character: this.from
      });

      return void this.trigger("fatal", {
        line: this.line,
        from: this.from
      });
    }

    // Parse flags (if any).

    while (index < length) {
      char = this.peek(index);
      if (!/[gimy]/.test(char)) {
        break;
      }
      if (char === "y") {
        if (!state.inES6(true)) {
          this.triggerAsync(
            "warning",
            {
              code: "W119",
              line: this.line,
              character: this.char,
              data: [ "Sticky RegExp flag", "6" ]
            },
            checks,
            function() { return true; }
          );
        }
        if (value.indexOf("y") > -1) {
          malformedDesc = "Duplicate RegExp flag";
        }
      } else {
        flags.push(char);
      }
      value += char;
      index += 1;
    }

    // Check regular expression for correctness.

    try {
      new RegExp(body, flags.join(""));
    } catch (err) {
      /**
       * Because JSHint relies on the current engine's RegExp parser to
       * validate RegExp literals, the description (exposed as the "data"
       * property on the error object) is platform dependent.
       */
      malformedDesc = err.message;
    }

    if (malformedDesc) {
      malformed = true;
      this.trigger("error", {
        code: "E016",
        line: this.line,
        character: this.char,
        data: [ malformedDesc ]
      });
    }

    return {
      type: Token.RegExp,
      value: value,
      flags: flags,
      isMalformed: malformed
    };
  },

  /*
   * Scan for any occurrence of non-breaking spaces. Non-breaking spaces
   * can be mistakenly typed on OS X with option-space. Non UTF-8 web
   * pages with non-breaking pages produce syntax errors.
   */
  scanNonBreakingSpaces: function() {
    return state.option.nonbsp ?
      this.input.search(/(\u00A0)/) : -1;
  },

  /*
   * Scan for characters that get silently deleted by one or more browsers.
   */
  scanUnsafeChars: function() {
    return this.input.search(reg.unsafeChars);
  },

  /*
   * Produce the next raw token or return 'null' if no tokens can be matched.
   * This method skips over all space characters.
   */
  next: function(checks) {
    this.from = this.char;

    // Move to the next non-space character.
    while (/\s/.test(this.peek())) {
      this.from += 1;
      this.skip();
    }

    // Methods that work with multi-line structures and move the
    // character pointer.

    var match = this.scanComments(checks) ||
      this.scanStringLiteral(checks) ||
      this.scanTemplateLiteral(checks);

    if (match) {
      return match;
    }

    // Methods that don't move the character pointer.

    match =
      this.scanRegExp(checks) ||
      this.scanPunctuator() ||
      this.scanKeyword() ||
      this.scanIdentifier() ||
      this.scanNumericLiteral(checks);

    if (match) {
      this.skip(match.tokenLength || match.value.length);
      return match;
    }

    // No token could be matched, give up.

    return null;
  },

  /*
   * Switch to the next line and reset all char pointers. Once
   * switched, this method also checks for other minor warnings.
   */
  nextLine: function(checks) {
    var char;

    if (this.line >= this.getLines().length) {
      return false;
    }

    this.input = this.getLines()[this.line];
    this.line += 1;
    this.char = 1;
    this.from = 1;

    var inputTrimmed = this.input.trim();

    var startsWith = function() {
      return _.some(arguments, function(prefix) {
        return inputTrimmed.indexOf(prefix) === 0;
      });
    };

    var endsWith = function() {
      return _.some(arguments, function(suffix) {
        return inputTrimmed.indexOf(suffix, inputTrimmed.length - suffix.length) !== -1;
      });
    };

    // If we are ignoring linter errors, replace the input with empty string
    // if it doesn't already at least start or end a multi-line comment
    if (this.ignoringLinterErrors === true) {
      if (!startsWith("/*", "//") && !(this.inComment && endsWith("*/"))) {
        this.input = "";
      }
    }

    char = this.scanNonBreakingSpaces();
    if (char >= 0) {
      this.triggerAsync(
        "warning",
        { code: "W125", line: this.line, character: char + 1 },
        checks,
        function() { return true; }
      );
    }

    this.input = this.input.replace(/\t/g, state.tab);
    char = this.scanUnsafeChars();

    if (char >= 0) {
      this.triggerAsync(
        "warning",
        { code: "W100", line: this.line, character: char },
        checks,
        function() { return true; }
      );
    }

    // If there is a limit on line length, warn when lines get too
    // long.

    if (!this.ignoringLinterErrors && state.option.maxlen &&
      state.option.maxlen < this.input.length) {
      var inComment = this.inComment ||
        startsWith.call(inputTrimmed, "//") ||
        startsWith.call(inputTrimmed, "/*");

      var shouldTriggerError = !inComment || !reg.maxlenException.test(inputTrimmed);

      if (shouldTriggerError) {
        this.triggerAsync(
          "warning",
          { code: "W101", line: this.line, character: this.input.length },
          checks,
          function() { return true; }
        );
      }
    }

    return true;
  },

  /*
   * Produce the next token. This function is called by advance() to get
   * the next token. It returns a token in a JSLint-compatible format.
   */
  token: function() {
    /*jshint loopfunc:true */
    var checks = asyncTrigger();
    var token;


    function isReserved(token, isProperty) {
      if (!token.reserved) {
        return false;
      }
      var meta = token.meta;

      if (meta && meta.isFutureReservedWord && state.inES5()) {
        // ES3 FutureReservedWord in an ES5 environment.
        if (!meta.es5) {
          return false;
        }

        // Some ES5 FutureReservedWord identifiers are active only
        // within a strict mode environment.
        if (meta.strictOnly) {
          if (!state.option.strict && !state.isStrict()) {
            return false;
          }
        }

        if (isProperty) {
          return false;
        }
      }

      return true;
    }

    // Produce a token object.
    var create = function(type, value, isProperty, token) {
      /*jshint validthis:true */
      var obj;

      if (type !== "(endline)" && type !== "(end)") {
        this.prereg = false;
      }

      if (type === "(punctuator)") {
        switch (value) {
        case ".":
        case ")":
        case "~":
        case "#":
        case "]":
        case "++":
        case "--":
          this.prereg = false;
          break;
        default:
          this.prereg = true;
        }

        obj = Object.create(state.syntax[value] || state.syntax["(error)"]);
      }

      if (type === "(identifier)") {
        if (value === "return" || value === "case" || value === "yield" ||
            value === "typeof" || value === "instanceof") {
          this.prereg = true;
        }

        if (_.has(state.syntax, value)) {
          obj = Object.create(state.syntax[value] || state.syntax["(error)"]);

          // If this can't be a reserved keyword, reset the object.
          if (!isReserved(obj, isProperty && type === "(identifier)")) {
            obj = null;
          }
        }
      }

      if (type === "(template)" || type === "(template middle)") {
        this.prereg = true;
      }

      if (!obj) {
        obj = Object.create(state.syntax[type]);
      }

      obj.identifier = (type === "(identifier)");
      obj.type = obj.type || type;
      obj.value = value;
      obj.line = this.line;
      obj.character = this.char;
      obj.from = this.from;
      if (obj.identifier && token) obj.raw_text = token.text || token.value;
      if (token && token.startLine && token.startLine !== this.line) {
        obj.startLine = token.startLine;
      }
      if (token && token.context) {
        // Context of current token
        obj.context = token.context;
      }
      if (token && token.depth) {
        // Nested template depth
        obj.depth = token.depth;
      }
      if (token && token.isUnclosed) {
        // Mark token as unclosed string / template literal
        obj.isUnclosed = token.isUnclosed;
      }

      if (isProperty && obj.identifier) {
        obj.isProperty = isProperty;
      }

      obj.check = checks.check;

      return obj;
    }.bind(this);

    for (;;) {
      if (!this.input.length) {
        if (this.nextLine(checks)) {
          return create("(endline)", "");
        }

        if (this.exhausted) {
          return null;
        }

        this.exhausted = true;
        return create("(end)", "");
      }

      token = this.next(checks);

      if (!token) {
        if (this.input.length) {
          // Unexpected character.
          this.trigger("error", {
            code: "E024",
            line: this.line,
            character: this.char,
            data: [ this.peek() ]
          });

          this.input = "";
        }

        continue;
      }

      switch (token.type) {
      case Token.StringLiteral:
        this.triggerAsync("String", {
          line: this.line,
          char: this.char,
          from: this.from,
          startLine: token.startLine,
          startChar: token.startChar,
          value: token.value,
          quote: token.quote
        }, checks, function() { return true; });

        return create("(string)", token.value, null, token);

      case Token.TemplateHead:
        this.trigger("TemplateHead", {
          line: this.line,
          char: this.char,
          from: this.from,
          startLine: token.startLine,
          startChar: token.startChar,
          value: token.value
        });
        return create("(template)", token.value, null, token);

      case Token.TemplateMiddle:
        this.trigger("TemplateMiddle", {
          line: this.line,
          char: this.char,
          from: this.from,
          startLine: token.startLine,
          startChar: token.startChar,
          value: token.value
        });
        return create("(template middle)", token.value, null, token);

      case Token.TemplateTail:
        this.trigger("TemplateTail", {
          line: this.line,
          char: this.char,
          from: this.from,
          startLine: token.startLine,
          startChar: token.startChar,
          value: token.value
        });
        return create("(template tail)", token.value, null, token);

      case Token.NoSubstTemplate:
        this.trigger("NoSubstTemplate", {
          line: this.line,
          char: this.char,
          from: this.from,
          startLine: token.startLine,
          startChar: token.startChar,
          value: token.value
        });
        return create("(no subst template)", token.value, null, token);

      case Token.Identifier:
        this.triggerAsync("Identifier", {
          line: this.line,
          char: this.char,
          from: this.from,
          name: token.value,
          raw_name: token.text,
          isProperty: state.tokens.curr.id === "."
        }, checks, function() { return true; });

        /* falls through */
      case Token.Keyword:
      case Token.NullLiteral:
      case Token.BooleanLiteral:
        return create("(identifier)", token.value, state.tokens.curr.id === ".", token);

      case Token.NumericLiteral:
        if (token.isMalformed) {
          // This condition unequivocally describes a syntax error.
          // TODO: Re-factor as an "error" (not a "warning").
          this.trigger("warning", {
            code: "W045",
            line: this.line,
            character: this.char,
            data: [ token.value ]
          });
        }

        this.triggerAsync("warning", {
          code: "W114",
          line: this.line,
          character: this.char,
          data: [ "0x-" ]
        }, checks, function() { return token.base === 16 && state.jsonMode; });

        this.triggerAsync("warning", {
          code: "W115",
          line: this.line,
          character: this.char
        }, checks, function() {
          return state.isStrict() && token.base === 8 && token.isLegacy;
        });

        this.trigger("Number", {
          line: this.line,
          char: this.char,
          from: this.from,
          value: token.value,
          base: token.base,
          isMalformed: token.malformed
        });

        return create("(number)", token.value);

      case Token.RegExp:
        return create("(regexp)", token.value);

      case Token.Comment:
        state.tokens.curr.comment = true;

        if (token.isSpecial) {
          return {
            id: '(comment)',
            value: token.value,
            body: token.body,
            type: token.commentType,
            isSpecial: token.isSpecial,
            line: this.line,
            character: this.char,
            from: this.from
          };
        }

        break;

      case "":
        break;

      default:
        return create("(punctuator)", token.value);
      }
    }
  }
};

exports.Lexer = Lexer;
exports.Context = Context;
