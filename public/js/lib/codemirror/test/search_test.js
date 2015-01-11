(function() {
  "use strict";

  function test(name) {
    var text = Array.prototype.slice.call(arguments, 1, arguments.length - 1).join("\n");
    var body = arguments[arguments.length - 1];
    return window.test("search_" + name, function() {
      body(new CodeMirror.Doc(text));
    });
  }

  function run(doc, query, insensitive) {
    var cursor = doc.getSearchCursor(query, null, insensitive);
    for (var i = 3; i < arguments.length; i += 4) {
      var found = cursor.findNext();
      is(found, "not enough results (forward)");
      eqPos(Pos(arguments[i], arguments[i + 1]), cursor.from(), "from, forward, " + (i - 3) / 4);
      eqPos(Pos(arguments[i + 2], arguments[i + 3]), cursor.to(), "to, forward, " + (i - 3) / 4);
    }
    is(!cursor.findNext(), "too many matches (forward)");
    for (var i = arguments.length - 4; i >= 3; i -= 4) {
      var found = cursor.findPrevious();
      is(found, "not enough results (backwards)");
      eqPos(Pos(arguments[i], arguments[i + 1]), cursor.from(), "from, backwards, " + (i - 3) / 4);
      eqPos(Pos(arguments[i + 2], arguments[i + 3]), cursor.to(), "to, backwards, " + (i - 3) / 4);
    }
    is(!cursor.findPrevious(), "too many matches (backwards)");
  }

  test("simple", "abcdefg", "abcdefg", function(doc) {
    run(doc, "cde", false, 0, 2, 0, 5, 1, 2, 1, 5);
  });

  test("multiline", "hallo", "goodbye", function(doc) {
    run(doc, "llo\ngoo", false, 0, 2, 1, 3);
    run(doc, "blah\nhall", false);
    run(doc, "bye\neye", false);
  });

  test("regexp", "abcde", "abcde", function(doc) {
    run(doc, /bcd/, false, 0, 1, 0, 4, 1, 1, 1, 4);
    run(doc, /BCD/, false);
    run(doc, /BCD/i, false, 0, 1, 0, 4, 1, 1, 1, 4);
  });

  test("insensitive", "hallo", "HALLO", "oink", "hAllO", function(doc) {
    run(doc, "All", false, 3, 1, 3, 4);
    run(doc, "All", true, 0, 1, 0, 4, 1, 1, 1, 4, 3, 1, 3, 4);
  });

  test("multilineInsensitive", "zie ginds komT", "De Stoomboot", "uit Spanje weer aan", function(doc) {
    run(doc, "komt\nde stoomboot\nuit", false);
    run(doc, "komt\nde stoomboot\nuit", true, 0, 10, 2, 3);
    run(doc, "kOMt\ndE stOOmboot\nuiT", true, 0, 10, 2, 3);
  });

  test("expandingCaseFold", "<b>İİ İİ</b>", "<b>uu uu</b>", function(doc) {
    if (phantom) return; // A Phantom bug makes this hang
    run(doc, "</b>", true, 0, 8, 0, 12, 1, 8, 1, 12);
    run(doc, "İİ", true, 0, 3, 0, 5, 0, 6, 0, 8);
  });
})();
