(function() {
  "use strict";
  
  var Pos = CodeMirror.Pos;
  namespace = "sublime_";

  function stTest(name) {
    var actions = Array.prototype.slice.call(arguments, 1);
    testCM(name, function(cm) {
      for (var i = 0; i < actions.length; i++) {
        var action = actions[i];
        if (typeof action == "string" && i == 0)
          cm.setValue(action);
        else if (typeof action == "string")
          cm.execCommand(action);
        else if (action instanceof Pos)
          cm.setCursor(action);
        else
          action(cm);
      }
    });
  }

  function at(line, ch, msg) {
    return function(cm) {
      eq(cm.listSelections().length, 1);
      eqPos(cm.getCursor("head"), Pos(line, ch), msg);
      eqPos(cm.getCursor("anchor"), Pos(line, ch), msg);
    };
  }

  function val(content, msg) {
    return function(cm) { eq(cm.getValue(), content, msg); };
  }

  function argsToRanges(args) {
    if (args.length % 4) throw new Error("Wrong number of arguments for ranges.");
    var ranges = [];
    for (var i = 0; i < args.length; i += 4)
      ranges.push({anchor: Pos(args[i], args[i + 1]),
                   head: Pos(args[i + 2], args[i + 3])});
    return ranges;
  }

  function setSel() {
    var ranges = argsToRanges(arguments);
    return function(cm) { cm.setSelections(ranges, 0); };
  }

  function hasSel() {
    var ranges = argsToRanges(arguments);
    return function(cm) {
      var sels = cm.listSelections();
      if (sels.length != ranges.length)
        throw new Failure("Expected " + ranges.length + " selections, but found " + sels.length);
      for (var i = 0; i < sels.length; i++) {
        eqPos(sels[i].anchor, ranges[i].anchor, "anchor " + i);
        eqPos(sels[i].head, ranges[i].head, "head " + i);
      }
    };
  }

  stTest("bySubword", "the foo_bar DooDahBah \n a",
         "goSubwordLeft", at(0, 0),
         "goSubwordRight", at(0, 3),
         "goSubwordRight", at(0, 7),
         "goSubwordRight", at(0, 11),
         "goSubwordRight", at(0, 15),
         "goSubwordRight", at(0, 18),
         "goSubwordRight", at(0, 21),
         "goSubwordRight", at(0, 22),
         "goSubwordRight", at(1, 0),
         "goSubwordRight", at(1, 2),
         "goSubwordRight", at(1, 2),
         "goSubwordLeft", at(1, 1),
         "goSubwordLeft", at(1, 0),
         "goSubwordLeft", at(0, 22),
         "goSubwordLeft", at(0, 18),
         "goSubwordLeft", at(0, 15),
         "goSubwordLeft", at(0, 12),
         "goSubwordLeft", at(0, 8),
         "goSubwordLeft", at(0, 4),
         "goSubwordLeft", at(0, 0));

  stTest("splitSelectionByLine", "abc\ndef\nghi",
         setSel(0, 1, 2, 2),
         "splitSelectionByLine",
         hasSel(0, 1, 0, 3,
                1, 0, 1, 3,
                2, 0, 2, 2));

  stTest("splitSelectionByLineMulti", "abc\ndef\nghi\njkl",
         setSel(0, 1, 1, 1,
                1, 2, 3, 2,
                3, 3, 3, 3),
         "splitSelectionByLine",
         hasSel(0, 1, 0, 3,
                1, 0, 1, 1,
                1, 2, 1, 3,
                2, 0, 2, 3,
                3, 0, 3, 2,
                3, 3, 3, 3));

  stTest("selectLine", "abc\ndef\nghi",
         setSel(0, 1, 0, 1,
                2, 0, 2, 1),
         "selectLine",
         hasSel(0, 0, 1, 0,
                2, 0, 2, 3),
         setSel(0, 1, 1, 0),
         "selectLine",
         hasSel(0, 0, 2, 0));

  stTest("insertLineAfter", "abcde\nfghijkl\nmn",
         setSel(0, 1, 0, 1,
                0, 3, 0, 3,
                1, 2, 1, 2,
                1, 3, 1, 5), "insertLineAfter",
         hasSel(1, 0, 1, 0,
                3, 0, 3, 0), val("abcde\n\nfghijkl\n\nmn"));

  stTest("insertLineBefore", "abcde\nfghijkl\nmn",
         setSel(0, 1, 0, 1,
                0, 3, 0, 3,
                1, 2, 1, 2,
                1, 3, 1, 5), "insertLineBefore",
         hasSel(0, 0, 0, 0,
                2, 0, 2, 0), val("\nabcde\n\nfghijkl\nmn"));

  stTest("selectNextOccurrence", "a foo bar\nfoobar foo",
         setSel(0, 2, 0, 5),
         "selectNextOccurrence", hasSel(0, 2, 0, 5,
                                        1, 0, 1, 3),
         "selectNextOccurrence", hasSel(0, 2, 0, 5,
                                        1, 0, 1, 3,
                                        1, 7, 1, 10),
         "selectNextOccurrence", hasSel(0, 2, 0, 5,
                                        1, 0, 1, 3,
                                        1, 7, 1, 10),
         Pos(0, 3), "selectNextOccurrence", hasSel(0, 2, 0, 5),
        "selectNextOccurrence", hasSel(0, 2, 0, 5,
                                       1, 7, 1, 10),
         setSel(0, 6, 0, 9),
         "selectNextOccurrence", hasSel(0, 6, 0, 9,
                                        1, 3, 1, 6));

  stTest("selectScope", "foo(a) {\n  bar[1, 2];\n}",
         "selectScope", hasSel(0, 0, 2, 1),
         Pos(0, 4), "selectScope", hasSel(0, 4, 0, 5),
         Pos(0, 5), "selectScope", hasSel(0, 4, 0, 5),
         Pos(0, 6), "selectScope", hasSel(0, 0, 2, 1),
         Pos(0, 8), "selectScope", hasSel(0, 8, 2, 0),
         Pos(1, 2), "selectScope", hasSel(0, 8, 2, 0),
         Pos(1, 6), "selectScope", hasSel(1, 6, 1, 10),
         Pos(1, 9), "selectScope", hasSel(1, 6, 1, 10));

  stTest("goToBracket", "foo(a) {\n  bar[1, 2];\n}",
         Pos(0, 0), "goToBracket", at(0, 0),
         Pos(0, 4), "goToBracket", at(0, 5), "goToBracket", at(0, 4),
         Pos(0, 8), "goToBracket", at(2, 0), "goToBracket", at(0, 8),
         Pos(1, 2), "goToBracket", at(2, 0),
         Pos(1, 7), "goToBracket", at(1, 10), "goToBracket", at(1, 6));

  stTest("swapLine", "1\n2\n3---\n4\n5",
         "swapLineDown", val("2\n1\n3---\n4\n5"),
         "swapLineUp", val("1\n2\n3---\n4\n5"),
         "swapLineUp", val("1\n2\n3---\n4\n5"),
         Pos(4, 1), "swapLineDown", val("1\n2\n3---\n4\n5"),
         setSel(0, 1, 0, 1,
                1, 0, 2, 0,
                2, 2, 2, 2),
         "swapLineDown", val("4\n1\n2\n3---\n5"),
         hasSel(1, 1, 1, 1,
                2, 0, 3, 0,
                3, 2, 3, 2),
         "swapLineUp", val("1\n2\n3---\n4\n5"),
         hasSel(0, 1, 0, 1,
                1, 0, 2, 0,
                2, 2, 2, 2));

  stTest("swapLineEmptyBottomSel", "1\n2\n3",
         setSel(0, 1, 1, 0),
         "swapLineDown", val("2\n1\n3"), hasSel(1, 1, 2, 0),
         "swapLineUp", val("1\n2\n3"), hasSel(0, 1, 1, 0),
         "swapLineUp", val("1\n2\n3"), hasSel(0, 0, 0, 0));

  stTest("swapLineUpFromEnd", "a\nb\nc",
         Pos(2, 1), "swapLineUp",
         hasSel(1, 1, 1, 1), val("a\nc\nb"));

  stTest("joinLines", "abc\ndef\nghi\njkl",
         "joinLines", val("abc def\nghi\njkl"), at(0, 4),
         "undo",
         setSel(0, 2, 1, 1), "joinLines",
         val("abc def ghi\njkl"), hasSel(0, 2, 0, 8),
         "undo",
         setSel(0, 1, 0, 1,
                1, 1, 1, 1,
                3, 1, 3, 1), "joinLines",
         val("abc def ghi\njkl"), hasSel(0, 4, 0, 4,
                                         0, 8, 0, 8,
                                         1, 3, 1, 3));

  stTest("duplicateLine", "abc\ndef\nghi",
         Pos(1, 0), "duplicateLine", val("abc\ndef\ndef\nghi"), at(2, 0),
         "undo",
         setSel(0, 1, 0, 1,
                1, 1, 1, 1,
                2, 1, 2, 1), "duplicateLine",
         val("abc\nabc\ndef\ndef\nghi\nghi"), hasSel(1, 1, 1, 1,
                                                     3, 1, 3, 1,
                                                     5, 1, 5, 1));
  stTest("duplicateLineSelection", "abcdef",
         setSel(0, 1, 0, 1,
                0, 2, 0, 4,
                0, 5, 0, 5),
         "duplicateLine",
         val("abcdef\nabcdcdef\nabcdcdef"), hasSel(2, 1, 2, 1,
                                                   2, 4, 2, 6,
                                                   2, 7, 2, 7));

  stTest("selectLinesUpward", "123\n345\n789\n012",
         setSel(0, 1, 0, 1,
                1, 1, 1, 3,
                2, 0, 2, 0,
                3, 0, 3, 0),
         "selectLinesUpward",
         hasSel(0, 1, 0, 1,
                0, 3, 0, 3,
                1, 0, 1, 0,
                1, 1, 1, 3,
                2, 0, 2, 0,
                3, 0, 3, 0));

  stTest("selectLinesDownward", "123\n345\n789\n012",
         setSel(0, 1, 0, 1,
                1, 1, 1, 3,
                2, 0, 2, 0,
                3, 0, 3, 0),
         "selectLinesDownward",
         hasSel(0, 1, 0, 1,
                1, 1, 1, 3,
                2, 0, 2, 0,
                2, 3, 2, 3,
                3, 0, 3, 0));

  stTest("sortLines", "c\nb\na\nC\nB\nA",
         "sortLines", val("A\nB\nC\na\nb\nc"),
         "undo",
         setSel(0, 0, 2, 0,
                3, 0, 5, 0),
         "sortLines", val("a\nb\nc\nA\nB\nC"),
         hasSel(0, 0, 2, 1,
                3, 0, 5, 1),
         "undo",
         setSel(1, 0, 4, 0), "sortLinesInsensitive", val("c\na\nB\nb\nC\nA"));

  stTest("bookmarks", "abc\ndef\nghi\njkl",
         Pos(0, 1), "toggleBookmark",
         setSel(1, 1, 1, 2), "toggleBookmark",
         setSel(2, 1, 2, 2), "toggleBookmark",
         "nextBookmark", hasSel(0, 1, 0, 1),
         "nextBookmark", hasSel(1, 1, 1, 2),
         "nextBookmark", hasSel(2, 1, 2, 2),
         "prevBookmark", hasSel(1, 1, 1, 2),
         "prevBookmark", hasSel(0, 1, 0, 1),
         "prevBookmark", hasSel(2, 1, 2, 2),
         "prevBookmark", hasSel(1, 1, 1, 2),
         "toggleBookmark",
         "prevBookmark", hasSel(2, 1, 2, 2),
         "prevBookmark", hasSel(0, 1, 0, 1),
         "selectBookmarks", hasSel(0, 1, 0, 1,
                                   2, 1, 2, 2),
         "clearBookmarks",
         Pos(0, 0), "selectBookmarks", at(0, 0));

  stTest("upAndDowncaseAtCursor", "abc\ndef  x\nghI",
         setSel(0, 1, 0, 3,
                1, 1, 1, 1,
                1, 4, 1, 4), "upcaseAtCursor",
         val("aBC\nDEF  x\nghI"), hasSel(0, 1, 0, 3,
                                         1, 3, 1, 3,
                                         1, 4, 1, 4),
         "downcaseAtCursor",
         val("abc\ndef  x\nghI"), hasSel(0, 1, 0, 3,
                                         1, 3, 1, 3,
                                         1, 4, 1, 4));

  stTest("mark", "abc\ndef\nghi",
         Pos(1, 1), "setSublimeMark",
         Pos(2, 1), "selectToSublimeMark", hasSel(2, 1, 1, 1),
         Pos(0, 1), "swapWithSublimeMark", at(1, 1), "swapWithSublimeMark", at(0, 1),
         "deleteToSublimeMark", val("aef\nghi"),
         "sublimeYank", val("abc\ndef\nghi"), at(1, 1));

  stTest("findUnder", "foo foobar  a",
         "findUnder", hasSel(0, 4, 0, 7),
         "findUnder", hasSel(0, 0, 0, 3),
         "findUnderPrevious", hasSel(0, 4, 0, 7),
         "findUnderPrevious", hasSel(0, 0, 0, 3),
         Pos(0, 4), "findUnder", hasSel(0, 4, 0, 10),
         Pos(0, 11), "findUnder", hasSel(0, 11, 0, 11));
})();
