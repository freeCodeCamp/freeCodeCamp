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
  var DEFAULT_BRACKETS = "()[]{}''\"\"";
  var DEFAULT_EXPLODE_ON_ENTER = "[]{}";
  var SPACE_CHAR_REGEX = /\s/;

  var Pos = CodeMirror.Pos;

  CodeMirror.defineOption("autoCloseBrackets", false, function(cm, val, old) {
    if (old != CodeMirror.Init && old)
      cm.removeKeyMap("autoCloseBrackets");
    if (!val) return;
    var pairs = DEFAULT_BRACKETS, explode = DEFAULT_EXPLODE_ON_ENTER;
    if (typeof val == "string") pairs = val;
    else if (typeof val == "object") {
      if (val.pairs != null) pairs = val.pairs;
      if (val.explode != null) explode = val.explode;
    }
    var map = buildKeymap(pairs);
    if (explode) map.Enter = buildExplodeHandler(explode);
    cm.addKeyMap(map);
  });

  function charsAround(cm, pos) {
    var str = cm.getRange(Pos(pos.line, pos.ch - 1),
                          Pos(pos.line, pos.ch + 1));
    return str.length == 2 ? str : null;
  }

  // Project the token type that will exists after the given char is
  // typed, and use it to determine whether it would cause the start
  // of a string token.
  function enteringString(cm, pos, ch) {
    var line = cm.getLine(pos.line);
    var token = cm.getTokenAt(pos);
    if (/\bstring2?\b/.test(token.type)) return false;
    var stream = new CodeMirror.StringStream(line.slice(0, pos.ch) + ch + line.slice(pos.ch), 4);
    stream.pos = stream.start = token.start;
    for (;;) {
      var type1 = cm.getMode().token(stream, token.state);
      if (stream.pos >= pos.ch + 1) return /\bstring2?\b/.test(type1);
      stream.start = stream.pos;
    }
  }

  function buildKeymap(pairs) {
    var map = {
      name : "autoCloseBrackets",
      Backspace: function(cm) {
        if (cm.getOption("disableInput")) return CodeMirror.Pass;
        var ranges = cm.listSelections();
        for (var i = 0; i < ranges.length; i++) {
          if (!ranges[i].empty()) return CodeMirror.Pass;
          var around = charsAround(cm, ranges[i].head);
          if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
        }
        for (var i = ranges.length - 1; i >= 0; i--) {
          var cur = ranges[i].head;
          cm.replaceRange("", Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
        }
      }
    };
    var closingBrackets = "";
    for (var i = 0; i < pairs.length; i += 2) (function(left, right) {
      closingBrackets += right;
      map["'" + left + "'"] = function(cm) {
        if (cm.getOption("disableInput")) return CodeMirror.Pass;
        var ranges = cm.listSelections(), type, next;
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i], cur = range.head, curType;
          var next = cm.getRange(cur, Pos(cur.line, cur.ch + 1));
          if (!range.empty()) {
            curType = "surround";
          } else if (left == right && next == right) {
            if (cm.getRange(cur, Pos(cur.line, cur.ch + 3)) == left + left + left)
              curType = "skipThree";
            else
              curType = "skip";
          } else if (left == right && cur.ch > 1 &&
                     cm.getRange(Pos(cur.line, cur.ch - 2), cur) == left + left &&
                     (cur.ch <= 2 || cm.getRange(Pos(cur.line, cur.ch - 3), Pos(cur.line, cur.ch - 2)) != left)) {
            curType = "addFour";
          } else if (left == '"' || left == "'") {
            if (!CodeMirror.isWordChar(next) && enteringString(cm, cur, left)) curType = "both";
            else return CodeMirror.Pass;
          } else if (cm.getLine(cur.line).length == cur.ch || closingBrackets.indexOf(next) >= 0 || SPACE_CHAR_REGEX.test(next)) {
            curType = "both";
          } else {
            return CodeMirror.Pass;
          }
          if (!type) type = curType;
          else if (type != curType) return CodeMirror.Pass;
        }

        cm.operation(function() {
          if (type == "skip") {
            cm.execCommand("goCharRight");
          } else if (type == "skipThree") {
            for (var i = 0; i < 3; i++)
              cm.execCommand("goCharRight");
          } else if (type == "surround") {
            var sels = cm.getSelections();
            for (var i = 0; i < sels.length; i++)
              sels[i] = left + sels[i] + right;
            cm.replaceSelections(sels, "around");
          } else if (type == "both") {
            cm.replaceSelection(left + right, null);
            cm.execCommand("goCharLeft");
          } else if (type == "addFour") {
            cm.replaceSelection(left + left + left + left, "before");
            cm.execCommand("goCharRight");
          }
        });
      };
      if (left != right) map["'" + right + "'"] = function(cm) {
        var ranges = cm.listSelections();
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (!range.empty() ||
              cm.getRange(range.head, Pos(range.head.line, range.head.ch + 1)) != right)
            return CodeMirror.Pass;
        }
        cm.execCommand("goCharRight");
      };
    })(pairs.charAt(i), pairs.charAt(i + 1));
    return map;
  }

  function buildExplodeHandler(pairs) {
    return function(cm) {
      if (cm.getOption("disableInput")) return CodeMirror.Pass;
      var ranges = cm.listSelections();
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) return CodeMirror.Pass;
        var around = charsAround(cm, ranges[i].head);
        if (!around || pairs.indexOf(around) % 2 != 0) return CodeMirror.Pass;
      }
      cm.operation(function() {
        cm.replaceSelection("\n\n", null);
        cm.execCommand("goCharLeft");
        ranges = cm.listSelections();
        for (var i = 0; i < ranges.length; i++) {
          var line = ranges[i].head.line;
          cm.indentLine(line, null, true);
          cm.indentLine(line + 1, null, true);
        }
      });
    };
  }
});
