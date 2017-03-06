// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Defines jumpToLine command. Uses dialog.js if present.

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../dialog/dialog"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../dialog/dialog"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function dialog(cm, text, shortText, deflt, f) {
    if (cm.openDialog) cm.openDialog(text, f, {value: deflt, selectValueOnOpen: true});
    else f(prompt(shortText, deflt));
  }

  var jumpDialog =
      'Jump to line: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use line:column or scroll% syntax)</span>';

  function interpretLine(cm, string) {
    var num = Number(string)
    if (/^[-+]/.test(string)) return cm.getCursor().line + num
    else return num - 1
  }

  CodeMirror.commands.jumpToLine = function(cm) {
    var cur = cm.getCursor();
    dialog(cm, jumpDialog, "Jump to line:", (cur.line + 1) + ":" + cur.ch, function(posStr) {
      if (!posStr) return;

      var match;
      if (match = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(posStr)) {
        cm.setCursor(interpretLine(cm, match[1]), Number(match[2]))
      } else if (match = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(posStr)) {
        var line = Math.round(cm.lineCount() * Number(match[1]) / 100);
        if (/^[-+]/.test(match[1])) line = cur.line + line + 1;
        cm.setCursor(line - 1, cur.ch);
      } else if (match = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(posStr)) {
        cm.setCursor(interpretLine(cm, match[1]), cur.ch);
      }
    });
  };

  CodeMirror.keyMap["default"]["Alt-G"] = "jumpToLine";
});
