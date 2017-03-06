// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../fold/xml-fold"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../fold/xml-fold"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineOption("matchTags", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.off("cursorActivity", doMatchTags);
      cm.off("viewportChange", maybeUpdateMatch);
      clear(cm);
    }
    if (val) {
      cm.state.matchBothTags = typeof val == "object" && val.bothTags;
      cm.on("cursorActivity", doMatchTags);
      cm.on("viewportChange", maybeUpdateMatch);
      doMatchTags(cm);
    }
  });

  function clear(cm) {
    if (cm.state.tagHit) cm.state.tagHit.clear();
    if (cm.state.tagOther) cm.state.tagOther.clear();
    cm.state.tagHit = cm.state.tagOther = null;
  }

  function doMatchTags(cm) {
    cm.state.failedTagMatch = false;
    cm.operation(function() {
      clear(cm);
      if (cm.somethingSelected()) return;
      var cur = cm.getCursor(), range = cm.getViewport();
      range.from = Math.min(range.from, cur.line); range.to = Math.max(cur.line + 1, range.to);
      var match = CodeMirror.findMatchingTag(cm, cur, range);
      if (!match) return;
      if (cm.state.matchBothTags) {
        var hit = match.at == "open" ? match.open : match.close;
        if (hit) cm.state.tagHit = cm.markText(hit.from, hit.to, {className: "CodeMirror-matchingtag"});
      }
      var other = match.at == "close" ? match.open : match.close;
      if (other)
        cm.state.tagOther = cm.markText(other.from, other.to, {className: "CodeMirror-matchingtag"});
      else
        cm.state.failedTagMatch = true;
    });
  }

  function maybeUpdateMatch(cm) {
    if (cm.state.failedTagMatch) doMatchTags(cm);
  }

  CodeMirror.commands.toMatchingTag = function(cm) {
    var found = CodeMirror.findMatchingTag(cm, cm.getCursor());
    if (found) {
      var other = found.at == "close" ? found.open : found.close;
      if (other) cm.extendSelection(other.to, other.from);
    }
  };
});
