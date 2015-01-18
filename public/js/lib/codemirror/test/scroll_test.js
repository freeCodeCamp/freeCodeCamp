(function() {
  "use strict";

  namespace = "scroll_";

  testCM("bars_hidden", function(cm) {
    for (var i = 0;; i++) {
      var wrapBox = cm.getWrapperElement().getBoundingClientRect();
      var scrollBox = cm.getScrollerElement().getBoundingClientRect();
      is(wrapBox.bottom < scrollBox.bottom - 10);
      is(wrapBox.right < scrollBox.right - 10);
      if (i == 1) break;
      cm.getWrapperElement().style.height = "auto";
      cm.refresh();
    }
  });
  
  function barH(cm) { return byClassName(cm.getWrapperElement(), "CodeMirror-hscrollbar")[0]; }
  function barV(cm) { return byClassName(cm.getWrapperElement(), "CodeMirror-vscrollbar")[0]; }

  function displayBottom(cm, scrollbar) {
    if (scrollbar)
      return barH(cm).getBoundingClientRect().top;
    else
      return cm.getWrapperElement().getBoundingClientRect().bottom - 1;
  }

  function displayRight(cm, scrollbar) {
    if (scrollbar)
      return barV(cm).getBoundingClientRect().left;
    else
      return cm.getWrapperElement().getBoundingClientRect().right - 1;
  }

  function testMovedownFixed(cm, hScroll) {
    cm.setSize("100px", "100px");
    if (hScroll) cm.setValue(new Array(100).join("x"));
    var bottom = displayBottom(cm, hScroll);
    for (var i = 0; i < 30; i++) {
      cm.replaceSelection("x\n");
      var cursorBottom = cm.cursorCoords(null, "window").bottom;
      is(cursorBottom <= bottom);
    }
    is(cursorBottom >= bottom - 5);
  }

  testCM("movedown_fixed", function(cm) {testMovedownFixed(cm, false);});
  testCM("movedown_hscroll_fixed", function(cm) {testMovedownFixed(cm, true);});

  function testMovedownResize(cm, hScroll) {
    cm.getWrapperElement().style.height = "auto";
    if (hScroll) cm.setValue(new Array(100).join("x"));
    cm.refresh();
    for (var i = 0; i < 30; i++) {
      cm.replaceSelection("x\n");
      var bottom = displayBottom(cm, hScroll);
      var cursorBottom = cm.cursorCoords(null, "window").bottom;
      is(cursorBottom <= bottom);
      is(cursorBottom >= bottom - 5);
    }
  }

  testCM("movedown_resize", function(cm) {testMovedownResize(cm, false);});
  testCM("movedown_hscroll_resize", function(cm) {testMovedownResize(cm, true);});

  function testMoveright(cm, wrap, scroll) {
    cm.setSize("100px", "100px");
    if (wrap) cm.setOption("lineWrapping", true);
    if (scroll) {
      cm.setValue("\n" + new Array(100).join("x\n"));
      cm.setCursor(Pos(0, 0));
    }
    var right = displayRight(cm, scroll);
    for (var i = 0; i < 10; i++) {
      cm.replaceSelection("xxxxxxxxxx");
      var cursorRight = cm.cursorCoords(null, "window").right;
      is(cursorRight < right);
    }
    if (!wrap) is(cursorRight > right - 20);
  }

  testCM("moveright", function(cm) {testMoveright(cm, false, false);});
  testCM("moveright_wrap", function(cm) {testMoveright(cm, true, false);});
  testCM("moveright_scroll", function(cm) {testMoveright(cm, false, true);});
  testCM("moveright_scroll_wrap", function(cm) {testMoveright(cm, true, true);});

  testCM("suddenly_wide", function(cm) {
    addDoc(cm, 100, 100);
    cm.replaceSelection(new Array(600).join("l ") + "\n");
    cm.execCommand("goLineUp");
    cm.execCommand("goLineEnd");
    is(barH(cm).scrollLeft > cm.getScrollerElement().scrollLeft - 1);
  });

  testCM("wrap_changes_height", function(cm) {
    var line = new Array(20).join("a ") + "\n";
    cm.setValue(new Array(20).join(line));
    var box = cm.getWrapperElement().getBoundingClientRect();
    cm.setSize(cm.cursorCoords(Pos(0), "window").right - box.left + 2,
               cm.cursorCoords(Pos(19, 0), "window").bottom - box.top + 2);
    cm.setCursor(Pos(19, 0));
    cm.replaceSelection("\n");
    is(cm.cursorCoords(null, "window").bottom < displayBottom(cm, false));
  }, {lineWrapping: true});
})();
