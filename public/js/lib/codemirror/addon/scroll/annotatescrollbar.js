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

  CodeMirror.defineExtension("annotateScrollbar", function(className) {
    return new Annotation(this, className);
  });

  function Annotation(cm, className) {
    this.cm = cm;
    this.className = className;
    this.annotations = [];
    this.div = cm.getWrapperElement().appendChild(document.createElement("div"));
    this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none";
    this.computeScale();

    var self = this;
    cm.on("refresh", this.resizeHandler = function(){
      if (self.computeScale()) self.redraw();
    });
  }

  Annotation.prototype.computeScale = function() {
    var cm = this.cm;
    var hScale = (cm.getWrapperElement().clientHeight - cm.display.barHeight) /
      cm.heightAtLine(cm.lastLine() + 1, "local");
    if (hScale != this.hScale) {
      this.hScale = hScale;
      return true;
    }
  };

  Annotation.prototype.update = function(annotations) {
    this.annotations = annotations;
    this.redraw();
  };

  Annotation.prototype.redraw = function() {
    var cm = this.cm, hScale = this.hScale;
    if (!cm.display.barWidth) return;

    var frag = document.createDocumentFragment(), anns = this.annotations;
    for (var i = 0, nextTop; i < anns.length; i++) {
      var ann = anns[i];
      var top = nextTop || cm.charCoords(ann.from, "local").top * hScale;
      var bottom = cm.charCoords(ann.to, "local").bottom * hScale;
      while (i < anns.length - 1) {
        nextTop = cm.charCoords(anns[i + 1].from, "local").top * hScale;
        if (nextTop > bottom + .9) break;
        ann = anns[++i];
        bottom = cm.charCoords(ann.to, "local").bottom * hScale;
      }
      var height = Math.max(bottom - top, 3);

      var elt = frag.appendChild(document.createElement("div"));
      elt.style.cssText = "position: absolute; right: 0px; width: " + Math.max(cm.display.barWidth - 1, 2) + "px; top: " + top + "px; height: " + height + "px";
      elt.className = this.className;
    }
    this.div.textContent = "";
    this.div.appendChild(frag);
  };

  Annotation.prototype.clear = function() {
    this.cm.off("refresh", this.resizeHandler);
    this.div.parentNode.removeChild(this.div);
  };
});
