// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/***
    |''Name''|tiddlywiki.js|
    |''Description''|Enables TiddlyWikiy syntax highlighting using CodeMirror|
    |''Author''|PMario|
    |''Version''|0.1.7|
    |''Status''|''stable''|
    |''Source''|[[GitHub|https://github.com/pmario/CodeMirror2/blob/tw-syntax/mode/tiddlywiki]]|
    |''Documentation''|http://codemirror.tiddlyspace.com/|
    |''License''|[[MIT License|http://www.opensource.org/licenses/mit-license.php]]|
    |''CoreVersion''|2.5.0|
    |''Requires''|codemirror.js|
    |''Keywords''|syntax highlighting color code mirror codemirror|
    ! Info
    CoreVersion parameter is needed for TiddlyWiki only!
***/
//{{{

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("tiddlywiki", function () {
  // Tokenizer
  var textwords = {};

  var keywords = function () {
    function kw(type) {
      return { type: type, style: "macro"};
    }
    return {
      "allTags": kw('allTags'), "closeAll": kw('closeAll'), "list": kw('list'),
      "newJournal": kw('newJournal'), "newTiddler": kw('newTiddler'),
      "permaview": kw('permaview'), "saveChanges": kw('saveChanges'),
      "search": kw('search'), "slider": kw('slider'),   "tabs": kw('tabs'),
      "tag": kw('tag'), "tagging": kw('tagging'),       "tags": kw('tags'),
      "tiddler": kw('tiddler'), "timeline": kw('timeline'),
      "today": kw('today'), "version": kw('version'),   "option": kw('option'),

      "with": kw('with'),
      "filter": kw('filter')
    };
  }();

  var isSpaceName = /[\w_\-]/i,
  reHR = /^\-\-\-\-+$/,                                 // <hr>
  reWikiCommentStart = /^\/\*\*\*$/,            // /***
  reWikiCommentStop = /^\*\*\*\/$/,             // ***/
  reBlockQuote = /^<<<$/,

  reJsCodeStart = /^\/\/\{\{\{$/,                       // //{{{ js block start
  reJsCodeStop = /^\/\/\}\}\}$/,                        // //}}} js stop
  reXmlCodeStart = /^<!--\{\{\{-->$/,           // xml block start
  reXmlCodeStop = /^<!--\}\}\}-->$/,            // xml stop

  reCodeBlockStart = /^\{\{\{$/,                        // {{{ TW text div block start
  reCodeBlockStop = /^\}\}\}$/,                 // }}} TW text stop

  reUntilCodeStop = /.*?\}\}\}/;

  function chain(stream, state, f) {
    state.tokenize = f;
    return f(stream, state);
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;

  function ret(tp, style, cont) {
    type = tp;
    content = cont;
    return style;
  }

  function jsTokenBase(stream, state) {
    var sol = stream.sol(), ch;

    state.block = false;        // indicates the start of a code block.

    ch = stream.peek();         // don't eat, to make matching simpler

    // check start of  blocks
    if (sol && /[<\/\*{}\-]/.test(ch)) {
      if (stream.match(reCodeBlockStart)) {
        state.block = true;
        return chain(stream, state, twTokenCode);
      }
      if (stream.match(reBlockQuote)) {
        return ret('quote', 'quote');
      }
      if (stream.match(reWikiCommentStart) || stream.match(reWikiCommentStop)) {
        return ret('code', 'comment');
      }
      if (stream.match(reJsCodeStart) || stream.match(reJsCodeStop) || stream.match(reXmlCodeStart) || stream.match(reXmlCodeStop)) {
        return ret('code', 'comment');
      }
      if (stream.match(reHR)) {
        return ret('hr', 'hr');
      }
    } // sol
    ch = stream.next();

    if (sol && /[\/\*!#;:>|]/.test(ch)) {
      if (ch == "!") { // tw header
        stream.skipToEnd();
        return ret("header", "header");
      }
      if (ch == "*") { // tw list
        stream.eatWhile('*');
        return ret("list", "comment");
      }
      if (ch == "#") { // tw numbered list
        stream.eatWhile('#');
        return ret("list", "comment");
      }
      if (ch == ";") { // definition list, term
        stream.eatWhile(';');
        return ret("list", "comment");
      }
      if (ch == ":") { // definition list, description
        stream.eatWhile(':');
        return ret("list", "comment");
      }
      if (ch == ">") { // single line quote
        stream.eatWhile(">");
        return ret("quote", "quote");
      }
      if (ch == '|') {
        return ret('table', 'header');
      }
    }

    if (ch == '{' && stream.match(/\{\{/)) {
      return chain(stream, state, twTokenCode);
    }

    // rudimentary html:// file:// link matching. TW knows much more ...
    if (/[hf]/i.test(ch)) {
      if (/[ti]/i.test(stream.peek()) && stream.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i)) {
        return ret("link", "link");
      }
    }
    // just a little string indicator, don't want to have the whole string covered
    if (ch == '"') {
      return ret('string', 'string');
    }
    if (ch == '~') {    // _no_ CamelCase indicator should be bold
      return ret('text', 'brace');
    }
    if (/[\[\]]/.test(ch)) { // check for [[..]]
      if (stream.peek() == ch) {
        stream.next();
        return ret('brace', 'brace');
      }
    }
    if (ch == "@") {    // check for space link. TODO fix @@...@@ highlighting
      stream.eatWhile(isSpaceName);
      return ret("link", "link");
    }
    if (/\d/.test(ch)) {        // numbers
      stream.eatWhile(/\d/);
      return ret("number", "number");
    }
    if (ch == "/") { // tw invisible comment
      if (stream.eat("%")) {
        return chain(stream, state, twTokenComment);
      }
      else if (stream.eat("/")) { //
        return chain(stream, state, twTokenEm);
      }
    }
    if (ch == "_") { // tw underline
      if (stream.eat("_")) {
        return chain(stream, state, twTokenUnderline);
      }
    }
    // strikethrough and mdash handling
    if (ch == "-") {
      if (stream.eat("-")) {
        // if strikethrough looks ugly, change CSS.
        if (stream.peek() != ' ')
          return chain(stream, state, twTokenStrike);
        // mdash
        if (stream.peek() == ' ')
          return ret('text', 'brace');
      }
    }
    if (ch == "'") { // tw bold
      if (stream.eat("'")) {
        return chain(stream, state, twTokenStrong);
      }
    }
    if (ch == "<") { // tw macro
      if (stream.eat("<")) {
        return chain(stream, state, twTokenMacro);
      }
    }
    else {
      return ret(ch);
    }

    // core macro handling
    stream.eatWhile(/[\w\$_]/);
    var word = stream.current(),
    known = textwords.propertyIsEnumerable(word) && textwords[word];

    return known ? ret(known.type, known.style, word) : ret("text", null, word);

  } // jsTokenBase()

  // tw invisible comment
  function twTokenComment(stream, state) {
    var maybeEnd = false,
    ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "%");
    }
    return ret("comment", "comment");
  }

  // tw strong / bold
  function twTokenStrong(stream, state) {
    var maybeEnd = false,
    ch;
    while (ch = stream.next()) {
      if (ch == "'" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "'");
    }
    return ret("text", "strong");
  }

  // tw code
  function twTokenCode(stream, state) {
    var ch, sb = state.block;

    if (sb && stream.current()) {
      return ret("code", "comment");
    }

    if (!sb && stream.match(reUntilCodeStop)) {
      state.tokenize = jsTokenBase;
      return ret("code", "comment");
    }

    if (sb && stream.sol() && stream.match(reCodeBlockStop)) {
      state.tokenize = jsTokenBase;
      return ret("code", "comment");
    }

    ch = stream.next();
    return (sb) ? ret("code", "comment") : ret("code", "comment");
  }

  // tw em / italic
  function twTokenEm(stream, state) {
    var maybeEnd = false,
    ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "/");
    }
    return ret("text", "em");
  }

  // tw underlined text
  function twTokenUnderline(stream, state) {
    var maybeEnd = false,
    ch;
    while (ch = stream.next()) {
      if (ch == "_" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "_");
    }
    return ret("text", "underlined");
  }

  // tw strike through text looks ugly
  // change CSS if needed
  function twTokenStrike(stream, state) {
    var maybeEnd = false, ch;

    while (ch = stream.next()) {
      if (ch == "-" && maybeEnd) {
        state.tokenize = jsTokenBase;
        break;
      }
      maybeEnd = (ch == "-");
    }
    return ret("text", "strikethrough");
  }

  // macro
  function twTokenMacro(stream, state) {
    var ch, word, known;

    if (stream.current() == '<<') {
      return ret('brace', 'macro');
    }

    ch = stream.next();
    if (!ch) {
      state.tokenize = jsTokenBase;
      return ret(ch);
    }
    if (ch == ">") {
      if (stream.peek() == '>') {
        stream.next();
        state.tokenize = jsTokenBase;
        return ret("brace", "macro");
      }
    }

    stream.eatWhile(/[\w\$_]/);
    word = stream.current();
    known = keywords.propertyIsEnumerable(word) && keywords[word];

    if (known) {
      return ret(known.type, known.style, word);
    }
    else {
      return ret("macro", null, word);
    }
  }

  // Interface
  return {
    startState: function () {
      return {
        tokenize: jsTokenBase,
        indented: 0,
        level: 0
      };
    },

    token: function (stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      return style;
    },

    electricChars: ""
  };
});

CodeMirror.defineMIME("text/x-tiddlywiki", "tiddlywiki");
});

//}}}
