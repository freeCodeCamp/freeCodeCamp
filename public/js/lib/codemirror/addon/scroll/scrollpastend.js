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

  CodeMirror.defineOption("scrollPastEnd", false, function(cm, val, old) {
    if (old && old != CodeMirror.Init) {
      cm.off("change", onChange);
      cm.off("refresh", updateBottomMargin);
      cm.display.lineSpace.parentNode.style.paddingBottom = "";
      cm.state.scrollPastEndPadding = null;
    }
    if (val) {
      cm.on("change", onChange);
      cm.on("refresh", updateBottomMargin);
      updateBottomMargin(cm);
    }
  });

  function onChange(cm, change) {
    if (CodeMirror.changeEnd(change).line == cm.lastLine())
      updateBottomMargin(cm);
  }

  function updateBottomMargin(cm) {
    var padding = "";
    if (cm.lineCount() > 1) {
      var totalH = cm.display.scroller.clientHeight - 30,
          lastLineH = cm.getLineHandle(cm.lastLine()).height;
      padding = (totalH - lastLineH) + "px";
    }
    if (cm.state.scrollPastEndPadding != padding) {
      cm.state.scrollPastEndPadding = padding;
      cm.display.lineSpace.parentNode.style.paddingBottom = padding;
      cm.setSize();
    }
  }
});
