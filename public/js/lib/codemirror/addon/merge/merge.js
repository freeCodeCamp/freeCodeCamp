// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// declare global: diff_match_patch, DIFF_INSERT, DIFF_DELETE, DIFF_EQUAL

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("diff_match_patch"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "diff_match_patch"], mod);
  else // Plain browser env
    mod(CodeMirror, diff_match_patch);
})(function(CodeMirror, diff_match_patch) {
  "use strict";
  var Pos = CodeMirror.Pos;
  var svgNS = "http://www.w3.org/2000/svg";

  function DiffView(mv, type) {
    this.mv = mv;
    this.type = type;
    this.classes = type == "left"
      ? {chunk: "CodeMirror-merge-l-chunk",
         start: "CodeMirror-merge-l-chunk-start",
         end: "CodeMirror-merge-l-chunk-end",
         insert: "CodeMirror-merge-l-inserted",
         del: "CodeMirror-merge-l-deleted",
         connect: "CodeMirror-merge-l-connect"}
      : {chunk: "CodeMirror-merge-r-chunk",
         start: "CodeMirror-merge-r-chunk-start",
         end: "CodeMirror-merge-r-chunk-end",
         insert: "CodeMirror-merge-r-inserted",
         del: "CodeMirror-merge-r-deleted",
         connect: "CodeMirror-merge-r-connect"};
    if (mv.options.connect == "align")
      this.aligners = [];
  }

  DiffView.prototype = {
    constructor: DiffView,
    init: function(pane, orig, options) {
      this.edit = this.mv.edit;
      this.orig = CodeMirror(pane, copyObj({value: orig, readOnly: !this.mv.options.allowEditingOriginals}, copyObj(options)));

      this.diff = getDiff(asString(orig), asString(options.value));
      this.diffOutOfDate = false;

      this.showDifferences = options.showDifferences !== false;
      this.forceUpdate = registerUpdate(this);
      setScrollLock(this, true, false);
      registerScroll(this);
    },
    setShowDifferences: function(val) {
      val = val !== false;
      if (val != this.showDifferences) {
        this.showDifferences = val;
        this.forceUpdate("full");
      }
    }
  };

  function ensureDiff(dv) {
    if (dv.diffOutOfDate) {
      dv.diff = getDiff(dv.orig.getValue(), dv.edit.getValue());
      dv.diffOutOfDate = false;
      CodeMirror.signal(dv.edit, "updateDiff", dv.diff);
    }
  }

  function registerUpdate(dv) {
    var edit = {from: 0, to: 0, marked: []};
    var orig = {from: 0, to: 0, marked: []};
    var debounceChange;
    function update(mode) {
      if (mode == "full") {
        if (dv.svg) clear(dv.svg);
        if (dv.copyButtons) clear(dv.copyButtons);
        clearMarks(dv.edit, edit.marked, dv.classes);
        clearMarks(dv.orig, orig.marked, dv.classes);
        edit.from = edit.to = orig.from = orig.to = 0;
      }
      ensureDiff(dv);
      if (dv.showDifferences) {
        updateMarks(dv.edit, dv.diff, edit, DIFF_INSERT, dv.classes);
        updateMarks(dv.orig, dv.diff, orig, DIFF_DELETE, dv.classes);
      }
      makeConnections(dv);
    }
    function set(slow) {
      clearTimeout(debounceChange);
      debounceChange = setTimeout(update, slow == true ? 250 : 100);
    }
    function change() {
      if (!dv.diffOutOfDate) {
        dv.diffOutOfDate = true;
        edit.from = edit.to = orig.from = orig.to = 0;
      }
      set(true);
    }
    dv.edit.on("change", change);
    dv.orig.on("change", change);
    dv.edit.on("markerAdded", set);
    dv.edit.on("markerCleared", set);
    dv.orig.on("markerAdded", set);
    dv.orig.on("markerCleared", set);
    dv.edit.on("viewportChange", set);
    dv.orig.on("viewportChange", set);
    update();
    return update;
  }

  function registerScroll(dv) {
    dv.edit.on("scroll", function() {
      syncScroll(dv, DIFF_INSERT) && makeConnections(dv);
    });
    dv.orig.on("scroll", function() {
      syncScroll(dv, DIFF_DELETE) && makeConnections(dv);
    });
  }

  function syncScroll(dv, type) {
    // Change handler will do a refresh after a timeout when diff is out of date
    if (dv.diffOutOfDate) return false;
    if (!dv.lockScroll) return true;
    var editor, other, now = +new Date;
    if (type == DIFF_INSERT) { editor = dv.edit; other = dv.orig; }
    else { editor = dv.orig; other = dv.edit; }
    // Don't take action if the position of this editor was recently set
    // (to prevent feedback loops)
    if (editor.state.scrollSetBy == dv && (editor.state.scrollSetAt || 0) + 50 > now) return false;

    var sInfo = editor.getScrollInfo();
    if (dv.mv.options.connect == "align") {
      targetPos = sInfo.top;
    } else {
      var halfScreen = .5 * sInfo.clientHeight, midY = sInfo.top + halfScreen;
      var mid = editor.lineAtHeight(midY, "local");
      var around = chunkBoundariesAround(dv.diff, mid, type == DIFF_INSERT);
      var off = getOffsets(editor, type == DIFF_INSERT ? around.edit : around.orig);
      var offOther = getOffsets(other, type == DIFF_INSERT ? around.orig : around.edit);
      var ratio = (midY - off.top) / (off.bot - off.top);
      var targetPos = (offOther.top - halfScreen) + ratio * (offOther.bot - offOther.top);

      var botDist, mix;
      // Some careful tweaking to make sure no space is left out of view
      // when scrolling to top or bottom.
      if (targetPos > sInfo.top && (mix = sInfo.top / halfScreen) < 1) {
        targetPos = targetPos * mix + sInfo.top * (1 - mix);
      } else if ((botDist = sInfo.height - sInfo.clientHeight - sInfo.top) < halfScreen) {
        var otherInfo = other.getScrollInfo();
        var botDistOther = otherInfo.height - otherInfo.clientHeight - targetPos;
        if (botDistOther > botDist && (mix = botDist / halfScreen) < 1)
          targetPos = targetPos * mix + (otherInfo.height - otherInfo.clientHeight - botDist) * (1 - mix);
      }
    }

    other.scrollTo(sInfo.left, targetPos);
    other.state.scrollSetAt = now;
    other.state.scrollSetBy = dv;
    return true;
  }

  function getOffsets(editor, around) {
    var bot = around.after;
    if (bot == null) bot = editor.lastLine() + 1;
    return {top: editor.heightAtLine(around.before || 0, "local"),
            bot: editor.heightAtLine(bot, "local")};
  }

  function setScrollLock(dv, val, action) {
    dv.lockScroll = val;
    if (val && action != false) syncScroll(dv, DIFF_INSERT) && makeConnections(dv);
    dv.lockButton.innerHTML = val ? "\u21db\u21da" : "\u21db&nbsp;&nbsp;\u21da";
  }

  // Updating the marks for editor content

  function clearMarks(editor, arr, classes) {
    for (var i = 0; i < arr.length; ++i) {
      var mark = arr[i];
      if (mark instanceof CodeMirror.TextMarker) {
        mark.clear();
      } else if (mark.parent) {
        editor.removeLineClass(mark, "background", classes.chunk);
        editor.removeLineClass(mark, "background", classes.start);
        editor.removeLineClass(mark, "background", classes.end);
      }
    }
    arr.length = 0;
  }

  // FIXME maybe add a margin around viewport to prevent too many updates
  function updateMarks(editor, diff, state, type, classes) {
    var vp = editor.getViewport();
    editor.operation(function() {
      if (state.from == state.to || vp.from - state.to > 20 || state.from - vp.to > 20) {
        clearMarks(editor, state.marked, classes);
        markChanges(editor, diff, type, state.marked, vp.from, vp.to, classes);
        state.from = vp.from; state.to = vp.to;
      } else {
        if (vp.from < state.from) {
          markChanges(editor, diff, type, state.marked, vp.from, state.from, classes);
          state.from = vp.from;
        }
        if (vp.to > state.to) {
          markChanges(editor, diff, type, state.marked, state.to, vp.to, classes);
          state.to = vp.to;
        }
      }
    });
  }

  function markChanges(editor, diff, type, marks, from, to, classes) {
    var pos = Pos(0, 0);
    var top = Pos(from, 0), bot = editor.clipPos(Pos(to - 1));
    var cls = type == DIFF_DELETE ? classes.del : classes.insert;
    function markChunk(start, end) {
      var bfrom = Math.max(from, start), bto = Math.min(to, end);
      for (var i = bfrom; i < bto; ++i) {
        var line = editor.addLineClass(i, "background", classes.chunk);
        if (i == start) editor.addLineClass(line, "background", classes.start);
        if (i == end - 1) editor.addLineClass(line, "background", classes.end);
        marks.push(line);
      }
      // When the chunk is empty, make sure a horizontal line shows up
      if (start == end && bfrom == end && bto == end) {
        if (bfrom)
          marks.push(editor.addLineClass(bfrom - 1, "background", classes.end));
        else
          marks.push(editor.addLineClass(bfrom, "background", classes.start));
      }
    }

    var chunkStart = 0;
    for (var i = 0; i < diff.length; ++i) {
      var part = diff[i], tp = part[0], str = part[1];
      if (tp == DIFF_EQUAL) {
        var cleanFrom = pos.line + (startOfLineClean(diff, i) ? 0 : 1);
        moveOver(pos, str);
        var cleanTo = pos.line + (endOfLineClean(diff, i) ? 1 : 0);
        if (cleanTo > cleanFrom) {
          if (i) markChunk(chunkStart, cleanFrom);
          chunkStart = cleanTo;
        }
      } else {
        if (tp == type) {
          var end = moveOver(pos, str, true);
          var a = posMax(top, pos), b = posMin(bot, end);
          if (!posEq(a, b))
            marks.push(editor.markText(a, b, {className: cls}));
          pos = end;
        }
      }
    }
    if (chunkStart <= pos.line) markChunk(chunkStart, pos.line + 1);
  }

  // Updating the gap between editor and original

  function makeConnections(dv) {
    if (!dv.showDifferences) return;

    var align = dv.mv.options.connect == "align";
    if (align) {
      if (!dv.orig.curOp) return dv.orig.operation(function() {
        makeConnections(dv);
      });
      for (var i = 0; i < dv.aligners.length; i++)
        dv.aligners[i].clear();
      dv.aligners.length = 0;
      var extraSpaceAbove = {edit: 0, orig: 0};
    }

    if (dv.svg) {
      clear(dv.svg);
      var w = dv.gap.offsetWidth;
      attrs(dv.svg, "width", w, "height", dv.gap.offsetHeight);
    }
    if (dv.copyButtons) clear(dv.copyButtons);

    var vpEdit = dv.edit.getViewport(), vpOrig = dv.orig.getViewport();
    var sTopEdit = dv.edit.getScrollInfo().top, sTopOrig = dv.orig.getScrollInfo().top;
    iterateChunks(dv.diff, function(topOrig, botOrig, topEdit, botEdit) {
      if (topEdit <= vpEdit.to && botEdit >= vpEdit.from &&
          topOrig <= vpOrig.to && botOrig >= vpOrig.from)
        drawConnectorsForChunk(dv, topOrig, botOrig, topEdit, botEdit, sTopOrig, sTopEdit, w);
      if (align && (topEdit <= vpEdit.to || topOrig <= vpOrig.to)) {
        var above = (botEdit < vpEdit.from && botOrig < vpOrig.from);
        alignChunks(dv, topOrig, botOrig, topEdit, botEdit, above && extraSpaceAbove);
      }
    });
    if (align) {
      if (extraSpaceAbove.edit)
        dv.aligners.push(padBelow(dv.edit, 0, extraSpaceAbove.edit));
      if (extraSpaceAbove.orig)
        dv.aligners.push(padBelow(dv.orig, 0, extraSpaceAbove.orig));
    }
  }

  function drawConnectorsForChunk(dv, topOrig, botOrig, topEdit, botEdit, sTopOrig, sTopEdit, w) {
    var flip = dv.type == "left";
    var top = dv.orig.heightAtLine(topOrig, "local") - sTopOrig;
    if (dv.svg) {
      var topLpx = top;
      var topRpx = dv.edit.heightAtLine(topEdit, "local") - sTopEdit;
      if (flip) { var tmp = topLpx; topLpx = topRpx; topRpx = tmp; }
      var botLpx = dv.orig.heightAtLine(botOrig, "local") - sTopOrig;
      var botRpx = dv.edit.heightAtLine(botEdit, "local") - sTopEdit;
      if (flip) { var tmp = botLpx; botLpx = botRpx; botRpx = tmp; }
      var curveTop = " C " + w/2 + " " + topRpx + " " + w/2 + " " + topLpx + " " + (w + 2) + " " + topLpx;
      var curveBot = " C " + w/2 + " " + botLpx + " " + w/2 + " " + botRpx + " -1 " + botRpx;
      attrs(dv.svg.appendChild(document.createElementNS(svgNS, "path")),
            "d", "M -1 " + topRpx + curveTop + " L " + (w + 2) + " " + botLpx + curveBot + " z",
            "class", dv.classes.connect);
    }
    if (dv.copyButtons) {
      var copy = dv.copyButtons.appendChild(elt("div", dv.type == "left" ? "\u21dd" : "\u21dc",
                                                "CodeMirror-merge-copy"));
      var editOriginals = dv.mv.options.allowEditingOriginals;
      copy.title = editOriginals ? "Push to left" : "Revert chunk";
      copy.chunk = {topEdit: topEdit, botEdit: botEdit, topOrig: topOrig, botOrig: botOrig};
      copy.style.top = top + "px";

      if (editOriginals) {
        var topReverse = dv.orig.heightAtLine(topEdit, "local") - sTopEdit;
        var copyReverse = dv.copyButtons.appendChild(elt("div", dv.type == "right" ? "\u21dd" : "\u21dc",
                                                         "CodeMirror-merge-copy-reverse"));
        copyReverse.title = "Push to right";
        copyReverse.chunk = {topEdit: topOrig, botEdit: botOrig, topOrig: topEdit, botOrig: botEdit};
        copyReverse.style.top = topReverse + "px";
        dv.type == "right" ? copyReverse.style.left = "2px" : copyReverse.style.right = "2px";
      }
    }
  }

  function alignChunks(dv, topOrig, botOrig, topEdit, botEdit, aboveViewport) {
    var topOrigPx = dv.orig.heightAtLine(topOrig, "local");
    var botOrigPx = dv.orig.heightAtLine(botOrig, "local");
    var topEditPx = dv.edit.heightAtLine(topEdit, "local");
    var botEditPx = dv.edit.heightAtLine(botEdit, "local");
    var origH = botOrigPx -topOrigPx, editH = botEditPx - topEditPx;
    var diff = editH - origH;
    if (diff > 1) {
      if (aboveViewport) aboveViewport.orig += diff;
      else dv.aligners.push(padBelow(dv.orig, botOrig - 1, diff));
    } else if (diff < -1) {
      if (aboveViewport) aboveViewport.edit -= diff;
      else dv.aligners.push(padBelow(dv.edit, botEdit - 1, -diff));
    }
    return 0;
  }

  function padBelow(cm, line, size) {
    var elt = document.createElement("div");
    elt.style.height = size + "px"; elt.style.minWidth = "1px";
    return cm.addLineWidget(line, elt, {height: size});
  }

  function copyChunk(dv, to, from, chunk) {
    if (dv.diffOutOfDate) return;
    to.replaceRange(from.getRange(Pos(chunk.topOrig, 0), Pos(chunk.botOrig, 0)),
                         Pos(chunk.topEdit, 0), Pos(chunk.botEdit, 0));
  }

  // Merge view, containing 0, 1, or 2 diff views.

  var MergeView = CodeMirror.MergeView = function(node, options) {
    if (!(this instanceof MergeView)) return new MergeView(node, options);

    this.options = options;
    var origLeft = options.origLeft, origRight = options.origRight == null ? options.orig : options.origRight;
    if (origLeft && origRight) {
      if (options.connect == "align")
        throw new Error("connect: \"align\" is not supported for three-way merge views");
      if (options.collapseIdentical)
        throw new Error("collapseIdentical option is not supported for three-way merge views");
    }

    var hasLeft = origLeft != null, hasRight = origRight != null;
    var panes = 1 + (hasLeft ? 1 : 0) + (hasRight ? 1 : 0);
    var wrap = [], left = this.left = null, right = this.right = null;

    if (hasLeft) {
      left = this.left = new DiffView(this, "left");
      var leftPane = elt("div", null, "CodeMirror-merge-pane");
      wrap.push(leftPane);
      wrap.push(buildGap(left));
    }

    var editPane = elt("div", null, "CodeMirror-merge-pane");
    wrap.push(editPane);

    if (hasRight) {
      right = this.right = new DiffView(this, "right");
      wrap.push(buildGap(right));
      var rightPane = elt("div", null, "CodeMirror-merge-pane");
      wrap.push(rightPane);
    }

    (hasRight ? rightPane : editPane).className += " CodeMirror-merge-pane-rightmost";

    wrap.push(elt("div", null, null, "height: 0; clear: both;"));

    var wrapElt = this.wrap = node.appendChild(elt("div", wrap, "CodeMirror-merge CodeMirror-merge-" + panes + "pane"));
    this.edit = CodeMirror(editPane, copyObj(options));

    if (left) left.init(leftPane, origLeft, options);
    if (right) right.init(rightPane, origRight, options);

    if (options.collapseIdentical)
      collapseIdenticalStretches(left || right, options.collapseIdentical);

    var onResize = function() {
      if (left) makeConnections(left);
      if (right) makeConnections(right);
    };
    CodeMirror.on(window, "resize", onResize);
    var resizeInterval = setInterval(function() {
      for (var p = wrapElt.parentNode; p && p != document.body; p = p.parentNode) {}
      if (!p) { clearInterval(resizeInterval); CodeMirror.off(window, "resize", onResize); }
    }, 5000);
  };

  function buildGap(dv) {
    var lock = dv.lockButton = elt("div", null, "CodeMirror-merge-scrolllock");
    lock.title = "Toggle locked scrolling";
    var lockWrap = elt("div", [lock], "CodeMirror-merge-scrolllock-wrap");
    CodeMirror.on(lock, "click", function() { setScrollLock(dv, !dv.lockScroll); });
    var gapElts = [lockWrap];
    if (dv.mv.options.revertButtons !== false) {
      dv.copyButtons = elt("div", null, "CodeMirror-merge-copybuttons-" + dv.type);
      CodeMirror.on(dv.copyButtons, "click", function(e) {
        var node = e.target || e.srcElement;
        if (!node.chunk) return;
        if (node.className == "CodeMirror-merge-copy-reverse") {
          copyChunk(dv, dv.orig, dv.edit, node.chunk);
          return;
        }
        copyChunk(dv, dv.edit, dv.orig, node.chunk);
      });
      gapElts.unshift(dv.copyButtons);
    }
    if (dv.mv.options.connect != "align") {
      var svg = document.createElementNS && document.createElementNS(svgNS, "svg");
      if (svg && !svg.createSVGRect) svg = null;
      dv.svg = svg;
      if (svg) gapElts.push(svg);
    }

    return dv.gap = elt("div", gapElts, "CodeMirror-merge-gap");
  }

  MergeView.prototype = {
    constuctor: MergeView,
    editor: function() { return this.edit; },
    rightOriginal: function() { return this.right && this.right.orig; },
    leftOriginal: function() { return this.left && this.left.orig; },
    setShowDifferences: function(val) {
      if (this.right) this.right.setShowDifferences(val);
      if (this.left) this.left.setShowDifferences(val);
    },
    rightChunks: function() {
      return this.right && getChunks(this.right);
    },
    leftChunks: function() {
      return this.left && getChunks(this.left);
    }
  };

  function asString(obj) {
    if (typeof obj == "string") return obj;
    else return obj.getValue();
  }

  // Operations on diffs

  var dmp = new diff_match_patch();
  function getDiff(a, b) {
    var diff = dmp.diff_main(a, b);
    dmp.diff_cleanupSemantic(diff);
    // The library sometimes leaves in empty parts, which confuse the algorithm
    for (var i = 0; i < diff.length; ++i) {
      var part = diff[i];
      if (!part[1]) {
        diff.splice(i--, 1);
      } else if (i && diff[i - 1][0] == part[0]) {
        diff.splice(i--, 1);
        diff[i][1] += part[1];
      }
    }
    return diff;
  }

  function iterateChunks(diff, f) {
    var startEdit = 0, startOrig = 0;
    var edit = Pos(0, 0), orig = Pos(0, 0);
    for (var i = 0; i < diff.length; ++i) {
      var part = diff[i], tp = part[0];
      if (tp == DIFF_EQUAL) {
        var startOff = startOfLineClean(diff, i) ? 0 : 1;
        var cleanFromEdit = edit.line + startOff, cleanFromOrig = orig.line + startOff;
        moveOver(edit, part[1], null, orig);
        var endOff = endOfLineClean(diff, i) ? 1 : 0;
        var cleanToEdit = edit.line + endOff, cleanToOrig = orig.line + endOff;
        if (cleanToEdit > cleanFromEdit) {
          if (i) f(startOrig, cleanFromOrig, startEdit, cleanFromEdit);
          startEdit = cleanToEdit; startOrig = cleanToOrig;
        }
      } else {
        moveOver(tp == DIFF_INSERT ? edit : orig, part[1]);
      }
    }
    if (startEdit <= edit.line || startOrig <= orig.line)
      f(startOrig, orig.line + 1, startEdit, edit.line + 1);
  }

  function getChunks(dv) {
    ensureDiff(dv);
    var collect = [];
    iterateChunks(dv.diff, function(topOrig, botOrig, topEdit, botEdit) {
      collect.push({origFrom: topOrig, origTo: botOrig,
                    editFrom: topEdit, editTo: botEdit});
    });
    return collect;
  }

  function endOfLineClean(diff, i) {
    if (i == diff.length - 1) return true;
    var next = diff[i + 1][1];
    if (next.length == 1 || next.charCodeAt(0) != 10) return false;
    if (i == diff.length - 2) return true;
    next = diff[i + 2][1];
    return next.length > 1 && next.charCodeAt(0) == 10;
  }

  function startOfLineClean(diff, i) {
    if (i == 0) return true;
    var last = diff[i - 1][1];
    if (last.charCodeAt(last.length - 1) != 10) return false;
    if (i == 1) return true;
    last = diff[i - 2][1];
    return last.charCodeAt(last.length - 1) == 10;
  }

  function chunkBoundariesAround(diff, n, nInEdit) {
    var beforeE, afterE, beforeO, afterO;
    iterateChunks(diff, function(fromOrig, toOrig, fromEdit, toEdit) {
      var fromLocal = nInEdit ? fromEdit : fromOrig;
      var toLocal = nInEdit ? toEdit : toOrig;
      if (afterE == null) {
        if (fromLocal > n) { afterE = fromEdit; afterO = fromOrig; }
        else if (toLocal > n) { afterE = toEdit; afterO = toOrig; }
      }
      if (toLocal <= n) { beforeE = toEdit; beforeO = toOrig; }
      else if (fromLocal <= n) { beforeE = fromEdit; beforeO = fromOrig; }
    });
    return {edit: {before: beforeE, after: afterE}, orig: {before: beforeO, after: afterO}};
  }

  function collapseSingle(cm, from, to) {
    cm.addLineClass(from, "wrap", "CodeMirror-merge-collapsed-line");
    var widget = document.createElement("span");
    widget.className = "CodeMirror-merge-collapsed-widget";
    widget.title = "Identical text collapsed. Click to expand.";
    var mark = cm.markText(Pos(from, 0), Pos(to - 1), {
      inclusiveLeft: true,
      inclusiveRight: true,
      replacedWith: widget,
      clearOnEnter: true
    });
    function clear() {
      mark.clear();
      cm.removeLineClass(from, "wrap", "CodeMirror-merge-collapsed-line");
    }
    widget.addEventListener("click", clear);
    return {mark: mark, clear: clear};
  }

  function collapseStretch(dv, origStart, editStart, size) {
    var mOrig = collapseSingle(dv.orig, origStart, origStart + size);
    var mEdit = collapseSingle(dv.edit, editStart, editStart + size);
    mOrig.mark.on("clear", function() { mEdit.clear(); });
    mEdit.mark.on("clear", function() { mOrig.clear(); });
  }

  function collapseIdenticalStretches(dv, margin) {
    if (typeof margin != "number") margin = 2;
    var lastOrig = dv.orig.firstLine(), lastEdit = dv.edit.firstLine();
    iterateChunks(dv.diff, function(topOrig, botOrig, _topEdit, botEdit) {
      var identicalSize = topOrig - margin - lastOrig;
      if (identicalSize > margin)
        collapseStretch(dv, lastOrig, lastEdit, identicalSize);
      lastOrig = botOrig + margin; lastEdit = botEdit + margin;
    });
    var bottomSize = dv.orig.lastLine() + 1 - lastOrig;
    if (bottomSize > margin)
      collapseStretch(dv, lastOrig, lastEdit, bottomSize);
  }

  // General utilities

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (style) e.style.cssText = style;
    if (typeof content == "string") e.appendChild(document.createTextNode(content));
    else if (content) for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
    return e;
  }

  function clear(node) {
    for (var count = node.childNodes.length; count > 0; --count)
      node.removeChild(node.firstChild);
  }

  function attrs(elt) {
    for (var i = 1; i < arguments.length; i += 2)
      elt.setAttribute(arguments[i], arguments[i+1]);
  }

  function copyObj(obj, target) {
    if (!target) target = {};
    for (var prop in obj) if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
    return target;
  }

  function moveOver(pos, str, copy, other) {
    var out = copy ? Pos(pos.line, pos.ch) : pos, at = 0;
    for (;;) {
      var nl = str.indexOf("\n", at);
      if (nl == -1) break;
      ++out.line;
      if (other) ++other.line;
      at = nl + 1;
    }
    out.ch = (at ? 0 : out.ch) + (str.length - at);
    if (other) other.ch = (at ? 0 : other.ch) + (str.length - at);
    return out;
  }

  function posMin(a, b) { return (a.line - b.line || a.ch - b.ch) < 0 ? a : b; }
  function posMax(a, b) { return (a.line - b.line || a.ch - b.ch) > 0 ? a : b; }
  function posEq(a, b) { return a.line == b.line && a.ch == b.ch; }
});
