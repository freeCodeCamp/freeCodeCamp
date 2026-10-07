(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.InlineStyleParser = factory());
}(this, function () { 'use strict';

  // http://www.w3.org/TR/CSS21/grammar.html
  // https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
  var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

  var NEWLINE_REGEX = /\n/g;
  var WHITESPACE_REGEX = /^\s*/;

  // declaration
  var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var COLON_REGEX = /^:\s*/;
  var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var SEMICOLON_REGEX = /^[;\s]*/;

  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
  var TRIM_REGEX = /^\s+|\s+$/g;

  // strings
  var NEWLINE = '\n';
  var FORWARD_SLASH = '/';
  var ASTERISK = '*';
  var EMPTY_STRING = '';

  // types
  var TYPE_COMMENT = 'comment';
  var TYPE_DECLARATION = 'declaration';

  /**
   * @param {String} style
   * @param {Object} [options]
   * @return {Object[]}
   * @throws {TypeError}
   * @throws {Error}
   */
  var inlineStyleParser = function(style, options) {
    if (typeof style !== 'string') {
      throw new TypeError('First argument must be a string');
    }

    if (!style) return [];

    options = options || {};

    /**
     * Positional.
     */
    var lineno = 1;
    var column = 1;

    /**
     * Update lineno and column based on `str`.
     *
     * @param {String} str
     */
    function updatePosition(str) {
      var lines = str.match(NEWLINE_REGEX);
      if (lines) lineno += lines.length;
      var i = str.lastIndexOf(NEWLINE);
      column = ~i ? str.length - i : column + str.length;
    }

    /**
     * Mark position and patch `node.position`.
     *
     * @return {Function}
     */
    function position() {
      var start = { line: lineno, column: column };
      return function(node) {
        node.position = new Position(start);
        whitespace();
        return node;
      };
    }

    /**
     * Store position information for a node.
     *
     * @constructor
     * @property {Object} start
     * @property {Object} end
     * @property {undefined|String} source
     */
    function Position(start) {
      this.start = start;
      this.end = { line: lineno, column: column };
      this.source = options.source;
    }

    /**
     * Non-enumerable source string.
     */
    Position.prototype.content = style;

    /**
     * Error `msg`.
     *
     * @param {String} msg
     * @throws {Error}
     */
    function error(msg) {
      var err = new Error(
        options.source + ':' + lineno + ':' + column + ': ' + msg
      );
      err.reason = msg;
      err.filename = options.source;
      err.line = lineno;
      err.column = column;
      err.source = style;

      if (options.silent) ; else {
        throw err;
      }
    }

    /**
     * Match `re` and return captures.
     *
     * @param {RegExp} re
     * @return {undefined|Array}
     */
    function match(re) {
      var m = re.exec(style);
      if (!m) return;
      var str = m[0];
      updatePosition(str);
      style = style.slice(str.length);
      return m;
    }

    /**
     * Parse whitespace.
     */
    function whitespace() {
      match(WHITESPACE_REGEX);
    }

    /**
     * Parse comments.
     *
     * @param {Object[]} [rules]
     * @return {Object[]}
     */
    function comments(rules) {
      var c;
      rules = rules || [];
      while ((c = comment())) {
        if (c !== false) {
          rules.push(c);
        }
      }
      return rules;
    }

    /**
     * Parse comment.
     *
     * @return {Object}
     * @throws {Error}
     */
    function comment() {
      var pos = position();
      if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

      var i = 2;
      while (
        EMPTY_STRING != style.charAt(i) &&
        (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
      ) {
        ++i;
      }
      i += 2;

      if (EMPTY_STRING === style.charAt(i - 1)) {
        return error('End of comment missing');
      }

      var str = style.slice(2, i - 2);
      column += 2;
      updatePosition(str);
      style = style.slice(i);
      column += 2;

      return pos({
        type: TYPE_COMMENT,
        comment: str
      });
    }

    /**
     * Parse declaration.
     *
     * @return {Object}
     * @throws {Error}
     */
    function declaration() {
      var pos = position();

      // prop
      var prop = match(PROPERTY_REGEX);
      if (!prop) return;
      comment();

      // :
      if (!match(COLON_REGEX)) return error("property missing ':'");

      // val
      var val = match(VALUE_REGEX);

      var ret = pos({
        type: TYPE_DECLARATION,
        property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
        value: val
          ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
          : EMPTY_STRING
      });

      // ;
      match(SEMICOLON_REGEX);

      return ret;
    }

    /**
     * Parse declarations.
     *
     * @return {Object[]}
     */
    function declarations() {
      var decls = [];

      comments(decls);

      // declarations
      var decl;
      while ((decl = declaration())) {
        if (decl !== false) {
          decls.push(decl);
          comments(decls);
        }
      }

      return decls;
    }

    whitespace();
    return declarations();
  };

  /**
   * Trim `str`.
   *
   * @param {String} str
   * @return {String}
   */
  function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
  }

  return inlineStyleParser;

}));
