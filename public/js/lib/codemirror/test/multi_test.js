(function() {
  namespace = "multi_";

  function hasSelections(cm) {
    var sels = cm.listSelections();
    var given = (arguments.length - 1) / 4;
    if (sels.length != given)
      throw new Failure("expected " + given + " selections, found " + sels.length);
    for (var i = 0, p = 1; i < given; i++, p += 4) {
      var anchor = Pos(arguments[p], arguments[p + 1]);
      var head = Pos(arguments[p + 2], arguments[p + 3]);
      eqPos(sels[i].anchor, anchor, "anchor of selection " + i);
      eqPos(sels[i].head, head, "head of selection " + i);
    }
  }
  function hasCursors(cm) {
    var sels = cm.listSelections();
    var given = (arguments.length - 1) / 2;
    if (sels.length != given)
      throw new Failure("expected " + given + " selections, found " + sels.length);
    for (var i = 0, p = 1; i < given; i++, p += 2) {
      eqPos(sels[i].anchor, sels[i].head, "something selected for " + i);
      var head = Pos(arguments[p], arguments[p + 1]);
      eqPos(sels[i].head, head, "selection " + i);
    }
  }

  testCM("getSelection", function(cm) {
    select(cm, {anchor: Pos(0, 0), head: Pos(1, 2)}, {anchor: Pos(2, 2), head: Pos(2, 0)});
    eq(cm.getSelection(), "1234\n56\n90");
    eq(cm.getSelection(false).join("|"), "1234|56|90");
    eq(cm.getSelections().join("|"), "1234\n56|90");
  }, {value: "1234\n5678\n90"});

  testCM("setSelection", function(cm) {
    select(cm, Pos(3, 0), Pos(0, 0), {anchor: Pos(2, 5), head: Pos(1, 0)});
    hasSelections(cm, 0, 0, 0, 0,
                  2, 5, 1, 0,
                  3, 0, 3, 0);
    cm.setSelection(Pos(1, 2), Pos(1, 1));
    hasSelections(cm, 1, 2, 1, 1);
    select(cm, {anchor: Pos(1, 1), head: Pos(2, 4)},
           {anchor: Pos(0, 0), head: Pos(1, 3)},
           Pos(3, 0), Pos(2, 2));
    hasSelections(cm, 0, 0, 2, 4,
                  3, 0, 3, 0);
    cm.setSelections([{anchor: Pos(0, 1), head: Pos(0, 2)},
                      {anchor: Pos(1, 1), head: Pos(1, 2)},
                      {anchor: Pos(2, 1), head: Pos(2, 2)}], 1);
    eqPos(cm.getCursor("head"), Pos(1, 2));
    eqPos(cm.getCursor("anchor"), Pos(1, 1));
    eqPos(cm.getCursor("from"), Pos(1, 1));
    eqPos(cm.getCursor("to"), Pos(1, 2));
    cm.setCursor(Pos(1, 1));
    hasCursors(cm, 1, 1);
  }, {value: "abcde\nabcde\nabcde\n"});

  testCM("somethingSelected", function(cm) {
    select(cm, Pos(0, 1), {anchor: Pos(0, 3), head: Pos(0, 5)});
    eq(cm.somethingSelected(), true);
    select(cm, Pos(0, 1), Pos(0, 3), Pos(0, 5));
    eq(cm.somethingSelected(), false);
  }, {value: "123456789"});

  testCM("extendSelection", function(cm) {
    select(cm, Pos(0, 1), Pos(1, 1), Pos(2, 1));
    cm.setExtending(true);
    cm.extendSelections([Pos(0, 2), Pos(1, 0), Pos(2, 3)]);
    hasSelections(cm, 0, 1, 0, 2,
                  1, 1, 1, 0,
                  2, 1, 2, 3);
    cm.extendSelection(Pos(2, 4), Pos(2, 0));
    hasSelections(cm, 2, 4, 2, 0);
  }, {value: "1234\n1234\n1234"});

  testCM("addSelection", function(cm) {
    select(cm, Pos(0, 1), Pos(1, 1));
    cm.addSelection(Pos(0, 0), Pos(0, 4));
    hasSelections(cm, 0, 0, 0, 4,
                  1, 1, 1, 1);
    cm.addSelection(Pos(2, 2));
    hasSelections(cm, 0, 0, 0, 4,
                  1, 1, 1, 1,
                  2, 2, 2, 2);
  }, {value: "1234\n1234\n1234"});

  testCM("replaceSelection", function(cm) {
    var selections = [{anchor: Pos(0, 0), head: Pos(0, 1)},
                      {anchor: Pos(0, 2), head: Pos(0, 3)},
                      {anchor: Pos(0, 4), head: Pos(0, 5)},
                      {anchor: Pos(2, 1), head: Pos(2, 4)},
                      {anchor: Pos(2, 5), head: Pos(2, 6)}];
    var val = "123456\n123456\n123456";
    cm.setValue(val);
    cm.setSelections(selections);
    cm.replaceSelection("ab", "around");
    eq(cm.getValue(), "ab2ab4ab6\n123456\n1ab5ab");
    hasSelections(cm, 0, 0, 0, 2,
                  0, 3, 0, 5,
                  0, 6, 0, 8,
                  2, 1, 2, 3,
                  2, 4, 2, 6);
    cm.setValue(val);
    cm.setSelections(selections);
    cm.replaceSelection("", "around");
    eq(cm.getValue(), "246\n123456\n15");
    hasSelections(cm, 0, 0, 0, 0,
                  0, 1, 0, 1,
                  0, 2, 0, 2,
                  2, 1, 2, 1,
                  2, 2, 2, 2);
    cm.setValue(val);
    cm.setSelections(selections);
    cm.replaceSelection("X\nY\nZ", "around");
    hasSelections(cm, 0, 0, 2, 1,
                  2, 2, 4, 1,
                  4, 2, 6, 1,
                  8, 1, 10, 1,
                  10, 2, 12, 1);
    cm.replaceSelection("a", "around");
    hasSelections(cm, 0, 0, 0, 1,
                  0, 2, 0, 3,
                  0, 4, 0, 5,
                  2, 1, 2, 2,
                  2, 3, 2, 4);
    cm.replaceSelection("xy", "start");
    hasSelections(cm, 0, 0, 0, 0,
                  0, 3, 0, 3,
                  0, 6, 0, 6,
                  2, 1, 2, 1,
                  2, 4, 2, 4);
    cm.replaceSelection("z\nf");
    hasSelections(cm, 1, 1, 1, 1,
                  2, 1, 2, 1,
                  3, 1, 3, 1,
                  6, 1, 6, 1,
                  7, 1, 7, 1);
    eq(cm.getValue(), "z\nfxy2z\nfxy4z\nfxy6\n123456\n1z\nfxy5z\nfxy");
  });

  function select(cm) {
    var sels = [];
    for (var i = 1; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg.head) sels.push(arg);
      else sels.push({head: arg, anchor: arg});
    }
    cm.setSelections(sels, sels.length - 1);
  }

  testCM("indentSelection", function(cm) {
    select(cm, Pos(0, 1), Pos(1, 1));
    cm.indentSelection(4);
    eq(cm.getValue(), "    foo\n    bar\nbaz");

    select(cm, Pos(0, 2), Pos(0, 3), Pos(0, 4));
    cm.indentSelection(-2);
    eq(cm.getValue(), "  foo\n    bar\nbaz");

    select(cm, {anchor: Pos(0, 0), head: Pos(1, 2)},
           {anchor: Pos(1, 3), head: Pos(2, 0)});
    cm.indentSelection(-2);
    eq(cm.getValue(), "foo\n  bar\nbaz");
  }, {value: "foo\nbar\nbaz"});

  testCM("killLine", function(cm) {
    select(cm, Pos(0, 1), Pos(0, 2), Pos(1, 1));
    cm.execCommand("killLine");
    eq(cm.getValue(), "f\nb\nbaz");
    cm.execCommand("killLine");
    eq(cm.getValue(), "fbbaz");
    cm.setValue("foo\nbar\nbaz");
    select(cm, Pos(0, 1), {anchor: Pos(0, 2), head: Pos(2, 1)});
    cm.execCommand("killLine");
    eq(cm.getValue(), "faz");
  }, {value: "foo\nbar\nbaz"});

  testCM("deleteLine", function(cm) {
    select(cm, Pos(0, 0),
           {head: Pos(0, 1), anchor: Pos(2, 0)},
           Pos(4, 0));
    cm.execCommand("deleteLine");
    eq(cm.getValue(), "4\n6\n7");
    select(cm, Pos(2, 1));
    cm.execCommand("deleteLine");
    eq(cm.getValue(), "4\n6\n");
  }, {value: "1\n2\n3\n4\n5\n6\n7"});

  testCM("deleteH", function(cm) {
    select(cm, Pos(0, 4), {anchor: Pos(1, 4), head: Pos(1, 5)});
    cm.execCommand("delWordAfter");
    eq(cm.getValue(), "foo bar baz\nabc ef ghi\n");
    cm.execCommand("delWordAfter");
    eq(cm.getValue(), "foo  baz\nabc  ghi\n");
    cm.execCommand("delCharBefore");
    cm.execCommand("delCharBefore");
    eq(cm.getValue(), "fo baz\nab ghi\n");
    select(cm, Pos(0, 3), Pos(0, 4), Pos(0, 5));
    cm.execCommand("delWordAfter");
    eq(cm.getValue(), "fo \nab ghi\n");
  }, {value: "foo bar baz\nabc def ghi\n"});

  testCM("goLineStart", function(cm) {
    select(cm, Pos(0, 2), Pos(0, 3), Pos(1, 1));
    cm.execCommand("goLineStart");
    hasCursors(cm, 0, 0, 1, 0);
    select(cm, Pos(1, 1), Pos(0, 1));
    cm.setExtending(true);
    cm.execCommand("goLineStart");
    hasSelections(cm, 0, 1, 0, 0,
                  1, 1, 1, 0);
  }, {value: "foo\nbar\nbaz"});

  testCM("moveV", function(cm) {
    select(cm, Pos(0, 2), Pos(1, 2));
    cm.execCommand("goLineDown");
    hasCursors(cm, 1, 2, 2, 2);
    cm.execCommand("goLineUp");
    hasCursors(cm, 0, 2, 1, 2);
    cm.execCommand("goLineUp");
    hasCursors(cm, 0, 0, 0, 2);
    cm.execCommand("goLineUp");
    hasCursors(cm, 0, 0);
    select(cm, Pos(0, 2), Pos(1, 2));
    cm.setExtending(true);
    cm.execCommand("goLineDown");
    hasSelections(cm, 0, 2, 2, 2);
  }, {value: "12345\n12345\n12345"});

  testCM("moveH", function(cm) {
    select(cm, Pos(0, 1), Pos(0, 3), Pos(0, 5), Pos(2, 3));
    cm.execCommand("goCharRight");
    hasCursors(cm, 0, 2, 0, 4, 1, 0, 2, 4);
    cm.execCommand("goCharLeft");
    hasCursors(cm, 0, 1, 0, 3, 0, 5, 2, 3);
    for (var i = 0; i < 15; i++)
      cm.execCommand("goCharRight");
    hasCursors(cm, 2, 4, 2, 5);
  }, {value: "12345\n12345\n12345"});

  testCM("newlineAndIndent", function(cm) {
    select(cm, Pos(0, 5), Pos(1, 5));
    cm.execCommand("newlineAndIndent");
    hasCursors(cm, 1, 2, 3, 2);
    eq(cm.getValue(), "x = [\n  1];\ny = [\n  2];");
    cm.undo();
    eq(cm.getValue(), "x = [1];\ny = [2];");
    hasCursors(cm, 0, 5, 1, 5);
    select(cm, Pos(0, 5), Pos(0, 6));
    cm.execCommand("newlineAndIndent");
    hasCursors(cm, 1, 2, 2, 0);
    eq(cm.getValue(), "x = [\n  1\n];\ny = [2];");
  }, {value: "x = [1];\ny = [2];", mode: "javascript"});

  testCM("goDocStartEnd", function(cm) {
    select(cm, Pos(0, 1), Pos(1, 1));
    cm.execCommand("goDocStart");
    hasCursors(cm, 0, 0);
    select(cm, Pos(0, 1), Pos(1, 1));
    cm.execCommand("goDocEnd");
    hasCursors(cm, 1, 3);
    select(cm, Pos(0, 1), Pos(1, 1));
    cm.setExtending(true);
    cm.execCommand("goDocEnd");
    hasSelections(cm, 1, 1, 1, 3);
  }, {value: "abc\ndef"});

  testCM("selectionHistory", function(cm) {
    for (var i = 0; i < 3; ++i)
      cm.addSelection(Pos(0, i * 2), Pos(0, i * 2 + 1));
    cm.execCommand("undoSelection");
    eq(cm.getSelection(), "1\n2");
    cm.execCommand("undoSelection");
    eq(cm.getSelection(), "1");
    cm.execCommand("undoSelection");
    eq(cm.getSelection(), "");
    eqPos(cm.getCursor(), Pos(0, 0));
    cm.execCommand("redoSelection");
    eq(cm.getSelection(), "1");
    cm.execCommand("redoSelection");
    eq(cm.getSelection(), "1\n2");
    cm.execCommand("redoSelection");
    eq(cm.getSelection(), "1\n2\n3");
  }, {value: "1 2 3"});
})();
