// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var Pos = CodeMirror.Pos;
  function posEq(a, b) { return a.line == b.line && a.ch == b.ch; }

  // Kill 'ring'

  var killRing = [];
  function addToRing(str) {
    killRing.push(str);
    if (killRing.length > 50) killRing.shift();
  }
  function growRingTop(str) {
    if (!killRing.length) return addToRing(str);
    killRing[killRing.length - 1] += str;
  }
  function getFromRing(n) { return killRing[killRing.length - (n ? Math.min(n, 1) : 1)] || ""; }
  function popFromRing() { if (killRing.length > 1) killRing.pop(); return getFromRing(); }

  var lastKill = null;

  function kill(cm, from, to, mayGrow, text) {
    if (text == null) text = cm.getRange(from, to);

    if (mayGrow && lastKill && lastKill.cm == cm && posEq(from, lastKill.pos) && cm.isClean(lastKill.gen))
      growRingTop(text);
    else
      addToRing(text);
    cm.replaceRange("", from, to, "+delete");

    if (mayGrow) lastKill = {cm: cm, pos: from, gen: cm.changeGeneration()};
    else lastKill = null;
  }

  // Boundaries of various units

  function byChar(cm, pos, dir) {
    return cm.findPosH(pos, dir, "char", true);
  }

  function byWord(cm, pos, dir) {
    return cm.findPosH(pos, dir, "word", true);
  }

  function byLine(cm, pos, dir) {
    return cm.findPosV(pos, dir, "line", cm.doc.sel.goalColumn);
  }

  function byPage(cm, pos, dir) {
    return cm.findPosV(pos, dir, "page", cm.doc.sel.goalColumn);
  }

  function byParagraph(cm, pos, dir) {
    var no = pos.line, line = cm.getLine(no);
    var sawText = /\S/.test(dir < 0 ? line.slice(0, pos.ch) : line.slice(pos.ch));
    var fst = cm.firstLine(), lst = cm.lastLine();
    for (;;) {
      no += dir;
      if (no < fst || no > lst)
        return cm.clipPos(Pos(no - dir, dir < 0 ? 0 : null));
      line = cm.getLine(no);
      var hasText = /\S/.test(line);
      if (hasText) sawText = true;
      else if (sawText) return Pos(no, 0);
    }
  }

  function bySentence(cm, pos, dir) {
    var line = pos.line, ch = pos.ch;
    var text = cm.getLine(pos.line), sawWord = false;
    for (;;) {
      var next = text.charAt(ch + (dir < 0 ? -1 : 0));
      if (!next) { // End/beginning of line reached
        if (line == (dir < 0 ? cm.firstLine() : cm.lastLine())) return Pos(line, ch);
        text = cm.getLine(line + dir);
        if (!/\S/.test(text)) return Pos(line, ch);
        line += dir;
        ch = dir < 0 ? text.length : 0;
        continue;
      }
      if (sawWord && /[!?.]/.test(next)) return Pos(line, ch + (dir > 0 ? 1 : 0));
      if (!sawWord) sawWord = /\w/.test(next);
      ch += dir;
    }
  }

  function byExpr(cm, pos, dir) {
    var wrap;
    if (cm.findMatchingBracket && (wrap = cm.findMatchingBracket(pos, true))
        && wrap.match && (wrap.forward ? 1 : -1) == dir)
      return dir > 0 ? Pos(wrap.to.line, wrap.to.ch + 1) : wrap.to;

    for (var first = true;; first = false) {
      var token = cm.getTokenAt(pos);
      var after = Pos(pos.line, dir < 0 ? token.start : token.end);
      if (first && dir > 0 && token.end == pos.ch || !/\w/.test(token.string)) {
        var newPos = cm.findPosH(after, dir, "char");
        if (posEq(after, newPos)) return pos;
        else pos = newPos;
      } else {
        return after;
      }
    }
  }

  // Prefixes (only crudely supported)

  function getPrefix(cm, precise) {
    var digits = cm.state.emacsPrefix;
    if (!digits) return precise ? null : 1;
    clearPrefix(cm);
    return digits == "-" ? -1 : Number(digits);
  }

  function repeated(cmd) {
    var f = typeof cmd == "string" ? function(cm) { cm.execCommand(cmd); } : cmd;
    return function(cm) {
      var prefix = getPrefix(cm);
      f(cm);
      for (var i = 1; i < prefix; ++i) f(cm);
    };
  }

  function findEnd(cm, pos, by, dir) {
    var prefix = getPrefix(cm);
    if (prefix < 0) { dir = -dir; prefix = -prefix; }
    for (var i = 0; i < prefix; ++i) {
      var newPos = by(cm, pos, dir);
      if (posEq(newPos, pos)) break;
      pos = newPos;
    }
    return pos;
  }

  function move(by, dir) {
    var f = function(cm) {
      cm.extendSelection(findEnd(cm, cm.getCursor(), by, dir));
    };
    f.motion = true;
    return f;
  }

  function killTo(cm, by, dir) {
    var selections = cm.listSelections(), cursor;
    var i = selections.length;
    while (i--) {
      cursor = selections[i].head;
      kill(cm, cursor, findEnd(cm, cursor, by, dir), true);
    }
  }

  function killRegion(cm) {
    if (cm.somethingSelected()) {
      var selections = cm.listSelections(), selection;
      var i = selections.length;
      while (i--) {
        selection = selections[i];
        kill(cm, selection.anchor, selection.head);
      }
      return true;
    }
  }

  function addPrefix(cm, digit) {
    if (cm.state.emacsPrefix) {
      if (digit != "-") cm.state.emacsPrefix += digit;
      return;
    }
    // Not active yet
    cm.state.emacsPrefix = digit;
    cm.on("keyHandled", maybeClearPrefix);
    cm.on("inputRead", maybeDuplicateInput);
  }

  var prefixPreservingKeys = {"Alt-G": true, "Ctrl-X": true, "Ctrl-Q": true, "Ctrl-U": true};

  function maybeClearPrefix(cm, arg) {
    if (!cm.state.emacsPrefixMap && !prefixPreservingKeys.hasOwnProperty(arg))
      clearPrefix(cm);
  }

  function clearPrefix(cm) {
    cm.state.emacsPrefix = null;
    cm.off("keyHandled", maybeClearPrefix);
    cm.off("inputRead", maybeDuplicateInput);
  }

  function maybeDuplicateInput(cm, event) {
    var dup = getPrefix(cm);
    if (dup > 1 && event.origin == "+input") {
      var one = event.text.join("\n"), txt = "";
      for (var i = 1; i < dup; ++i) txt += one;
      cm.replaceSelection(txt);
    }
  }

  function addPrefixMap(cm) {
    cm.state.emacsPrefixMap = true;
    cm.addKeyMap(prefixMap);
    cm.on("keyHandled", maybeRemovePrefixMap);
    cm.on("inputRead", maybeRemovePrefixMap);
  }

  function maybeRemovePrefixMap(cm, arg) {
    if (typeof arg == "string" && (/^\d$/.test(arg) || arg == "Ctrl-U")) return;
    cm.removeKeyMap(prefixMap);
    cm.state.emacsPrefixMap = false;
    cm.off("keyHandled", maybeRemovePrefixMap);
    cm.off("inputRead", maybeRemovePrefixMap);
  }

  // Utilities

  function setMark(cm) {
    cm.setCursor(cm.getCursor());
    cm.setExtending(!cm.getExtending());
    cm.on("change", function() { cm.setExtending(false); });
  }

  function clearMark(cm) {
    cm.setExtending(false);
    cm.setCursor(cm.getCursor());
  }

  function getInput(cm, msg, f) {
    if (cm.openDialog)
      cm.openDialog(msg + ": <input type=\"text\" style=\"width: 10em\"/>", f, {bottom: true});
    else
      f(prompt(msg, ""));
  }

  function operateOnWord(cm, op) {
    var start = cm.getCursor(), end = cm.findPosH(start, 1, "word");
    cm.replaceRange(op(cm.getRange(start, end)), start, end);
    cm.setCursor(end);
  }

  function toEnclosingExpr(cm) {
    var pos = cm.getCursor(), line = pos.line, ch = pos.ch;
    var stack = [];
    while (line >= cm.firstLine()) {
      var text = cm.getLine(line);
      for (var i = ch == null ? text.length : ch; i > 0;) {
        var ch = text.charAt(--i);
        if (ch == ")")
          stack.push("(");
        else if (ch == "]")
          stack.push("[");
        else if (ch == "}")
          stack.push("{");
        else if (/[\(\{\[]/.test(ch) && (!stack.length || stack.pop() != ch))
          return cm.extendSelection(Pos(line, i));
      }
      --line; ch = null;
    }
  }

  function quit(cm) {
    cm.execCommand("clearSearch");
    clearMark(cm);
  }

  // Actual keymap

  var keyMap = CodeMirror.keyMap.emacs = CodeMirror.normalizeKeyMap({
    "Ctrl-W": function(cm) {kill(cm, cm.getCursor("start"), cm.getCursor("end"));},
    "Ctrl-K": repeated(function(cm) {
      var start = cm.getCursor(), end = cm.clipPos(Pos(start.line));
      var text = cm.getRange(start, end);
      if (!/\S/.test(text)) {
        text += "\n";
        end = Pos(start.line + 1, 0);
      }
      kill(cm, start, end, true, text);
    }),
    "Alt-W": function(cm) {
      addToRing(cm.getSelection());
      clearMark(cm);
    },
    "Ctrl-Y": function(cm) {
      var start = cm.getCursor();
      cm.replaceRange(getFromRing(getPrefix(cm)), start, start, "paste");
      cm.setSelection(start, cm.getCursor());
    },
    "Alt-Y": function(cm) {cm.replaceSelection(popFromRing(), "around", "paste");},

    "Ctrl-Space": setMark, "Ctrl-Shift-2": setMark,

    "Ctrl-F": move(byChar, 1), "Ctrl-B": move(byChar, -1),
    "Right": move(byChar, 1), "Left": move(byChar, -1),
    "Ctrl-D": function(cm) { killTo(cm, byChar, 1); },
    "Delete": function(cm) { killRegion(cm) || killTo(cm, byChar, 1); },
    "Ctrl-H": function(cm) { killTo(cm, byChar, -1); },
    "Backspace": function(cm) { killRegion(cm) || killTo(cm, byChar, -1); },

    "Alt-F": move(byWord, 1), "Alt-B": move(byWord, -1),
    "Alt-D": function(cm) { killTo(cm, byWord, 1); },
    "Alt-Backspace": function(cm) { killTo(cm, byWord, -1); },

    "Ctrl-N": move(byLine, 1), "Ctrl-P": move(byLine, -1),
    "Down": move(byLine, 1), "Up": move(byLine, -1),
    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "End": "goLineEnd", "Home": "goLineStart",

    "Alt-V": move(byPage, -1), "Ctrl-V": move(byPage, 1),
    "PageUp": move(byPage, -1), "PageDown": move(byPage, 1),

    "Ctrl-Up": move(byParagraph, -1), "Ctrl-Down": move(byParagraph, 1),

    "Alt-A": move(bySentence, -1), "Alt-E": move(bySentence, 1),
    "Alt-K": function(cm) { killTo(cm, bySentence, 1); },

    "Ctrl-Alt-K": function(cm) { killTo(cm, byExpr, 1); },
    "Ctrl-Alt-Backspace": function(cm) { killTo(cm, byExpr, -1); },
    "Ctrl-Alt-F": move(byExpr, 1), "Ctrl-Alt-B": move(byExpr, -1),

    "Shift-Ctrl-Alt-2": function(cm) {
      var cursor = cm.getCursor();
      cm.setSelection(findEnd(cm, cursor, byExpr, 1), cursor);
    },
    "Ctrl-Alt-T": function(cm) {
      var leftStart = byExpr(cm, cm.getCursor(), -1), leftEnd = byExpr(cm, leftStart, 1);
      var rightEnd = byExpr(cm, leftEnd, 1), rightStart = byExpr(cm, rightEnd, -1);
      cm.replaceRange(cm.getRange(rightStart, rightEnd) + cm.getRange(leftEnd, rightStart) +
                      cm.getRange(leftStart, leftEnd), leftStart, rightEnd);
    },
    "Ctrl-Alt-U": repeated(toEnclosingExpr),

    "Alt-Space": function(cm) {
      var pos = cm.getCursor(), from = pos.ch, to = pos.ch, text = cm.getLine(pos.line);
      while (from && /\s/.test(text.charAt(from - 1))) --from;
      while (to < text.length && /\s/.test(text.charAt(to))) ++to;
      cm.replaceRange(" ", Pos(pos.line, from), Pos(pos.line, to));
    },
    "Ctrl-O": repeated(function(cm) { cm.replaceSelection("\n", "start"); }),
    "Ctrl-T": repeated(function(cm) {
      cm.execCommand("transposeChars");
    }),

    "Alt-C": repeated(function(cm) {
      operateOnWord(cm, function(w) {
        var letter = w.search(/\w/);
        if (letter == -1) return w;
        return w.slice(0, letter) + w.charAt(letter).toUpperCase() + w.slice(letter + 1).toLowerCase();
      });
    }),
    "Alt-U": repeated(function(cm) {
      operateOnWord(cm, function(w) { return w.toUpperCase(); });
    }),
    "Alt-L": repeated(function(cm) {
      operateOnWord(cm, function(w) { return w.toLowerCase(); });
    }),

    "Alt-;": "toggleComment",

    "Ctrl-/": repeated("undo"), "Shift-Ctrl--": repeated("undo"),
    "Ctrl-Z": repeated("undo"), "Cmd-Z": repeated("undo"),
    "Shift-Alt-,": "goDocStart", "Shift-Alt-.": "goDocEnd",
    "Ctrl-S": "findNext", "Ctrl-R": "findPrev", "Ctrl-G": quit, "Shift-Alt-5": "replace",
    "Alt-/": "autocomplete",
    "Ctrl-J": "newlineAndIndent", "Enter": false, "Tab": "indentAuto",

    "Alt-G G": function(cm) {
      var prefix = getPrefix(cm, true);
      if (prefix != null && prefix > 0) return cm.setCursor(prefix - 1);

      getInput(cm, "Goto line", function(str) {
        var num;
        if (str && !isNaN(num = Number(str)) && num == num|0 && num > 0)
          cm.setCursor(num - 1);
      });
    },

    "Ctrl-X Tab": function(cm) {
      cm.indentSelection(getPrefix(cm, true) || cm.getOption("indentUnit"));
    },
    "Ctrl-X Ctrl-X": function(cm) {
      cm.setSelection(cm.getCursor("head"), cm.getCursor("anchor"));
    },
    "Ctrl-X Ctrl-S": "save",
    "Ctrl-X Ctrl-W": "save",
    "Ctrl-X S": "saveAll",
    "Ctrl-X F": "open",
    "Ctrl-X U": repeated("undo"),
    "Ctrl-X K": "close",
    "Ctrl-X Delete": function(cm) { kill(cm, cm.getCursor(), bySentence(cm, cm.getCursor(), 1), true); },

    "Ctrl-Q Tab": repeated("insertTab"),
    "Ctrl-U": addPrefixMap
  });

  var prefixMap = {"Ctrl-G": clearPrefix};
  function regPrefix(d) {
    prefixMap[d] = function(cm) { addPrefix(cm, d); };
    keyMap["Ctrl-" + d] = function(cm) { addPrefix(cm, d); };
    prefixPreservingKeys["Ctrl-" + d] = true;
  }
  for (var i = 0; i < 10; ++i) regPrefix(String(i));
  regPrefix("-");
});
