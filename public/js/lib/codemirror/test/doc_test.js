(function() {
  // A minilanguage for instantiating linked CodeMirror instances and Docs
  function instantiateSpec(spec, place, opts) {
    var names = {}, pos = 0, l = spec.length, editors = [];
    while (spec) {
      var m = spec.match(/^(\w+)(\*?)(?:='([^\']*)'|<(~?)(\w+)(?:\/(\d+)-(\d+))?)\s*/);
      var name = m[1], isDoc = m[2], cur;
      if (m[3]) {
        cur = isDoc ? CodeMirror.Doc(m[3]) : CodeMirror(place, clone(opts, {value: m[3]}));
      } else {
        var other = m[5];
        if (!names.hasOwnProperty(other)) {
          names[other] = editors.length;
          editors.push(CodeMirror(place, opts));
        }
        var doc = editors[names[other]].linkedDoc({
          sharedHist: !m[4],
          from: m[6] ? Number(m[6]) : null,
          to: m[7] ? Number(m[7]) : null
        });
        cur = isDoc ? doc : CodeMirror(place, clone(opts, {value: doc}));
      }
      names[name] = editors.length;
      editors.push(cur);
      spec = spec.slice(m[0].length);
    }
    return editors;
  }

  function clone(obj, props) {
    if (!obj) return;
    clone.prototype = obj;
    var inst = new clone();
    if (props) for (var n in props) if (props.hasOwnProperty(n))
      inst[n] = props[n];
    return inst;
  }

  function eqAll(val) {
    var end = arguments.length, msg = null;
    if (typeof arguments[end-1] == "string")
      msg = arguments[--end];
    if (i == end) throw new Error("No editors provided to eqAll");
    for (var i = 1; i < end; ++i)
      eq(arguments[i].getValue(), val, msg)
  }

  function testDoc(name, spec, run, opts, expectFail) {
    if (!opts) opts = {};

    return test("doc_" + name, function() {
      var place = document.getElementById("testground");
      var editors = instantiateSpec(spec, place, opts);
      var successful = false;

      try {
        run.apply(null, editors);
        successful = true;
      } finally {
        if (!successful || verbose) {
          place.style.visibility = "visible";
        } else {
          for (var i = 0; i < editors.length; ++i)
            if (editors[i] instanceof CodeMirror)
              place.removeChild(editors[i].getWrapperElement());
        }
      }
    }, expectFail);
  }

  var ie_lt8 = /MSIE [1-7]\b/.test(navigator.userAgent);

  function testBasic(a, b) {
    eqAll("x", a, b);
    a.setValue("hey");
    eqAll("hey", a, b);
    b.setValue("wow");
    eqAll("wow", a, b);
    a.replaceRange("u\nv\nw", Pos(0, 3));
    b.replaceRange("i", Pos(0, 4));
    b.replaceRange("j", Pos(2, 1));
    eqAll("wowui\nv\nwj", a, b);
  }

  testDoc("basic", "A='x' B<A", testBasic);
  testDoc("basicSeparate", "A='x' B<~A", testBasic);

  testDoc("sharedHist", "A='ab\ncd\nef' B<A", function(a, b) {
    a.replaceRange("x", Pos(0));
    b.replaceRange("y", Pos(1));
    a.replaceRange("z", Pos(2));
    eqAll("abx\ncdy\nefz", a, b);
    a.undo();
    a.undo();
    eqAll("abx\ncd\nef", a, b);
    a.redo();
    eqAll("abx\ncdy\nef", a, b);
    b.redo();
    eqAll("abx\ncdy\nefz", a, b);
    a.undo(); b.undo(); a.undo(); a.undo();
    eqAll("ab\ncd\nef", a, b);
  }, null, ie_lt8);

  testDoc("undoIntact", "A='ab\ncd\nef' B<~A", function(a, b) {
    a.replaceRange("x", Pos(0));
    b.replaceRange("y", Pos(1));
    a.replaceRange("z", Pos(2));
    a.replaceRange("q", Pos(0));
    eqAll("abxq\ncdy\nefz", a, b);
    a.undo();
    a.undo();
    eqAll("abx\ncdy\nef", a, b);
    b.undo();
    eqAll("abx\ncd\nef", a, b);
    a.redo();
    eqAll("abx\ncd\nefz", a, b);
    a.redo();
    eqAll("abxq\ncd\nefz", a, b);
    a.undo(); a.undo(); a.undo(); a.undo();
    eqAll("ab\ncd\nef", a, b);
    b.redo();
    eqAll("ab\ncdy\nef", a, b);
  });

  testDoc("undoConflict", "A='ab\ncd\nef' B<~A", function(a, b) {
    a.replaceRange("x", Pos(0));
    a.replaceRange("z", Pos(2));
    // This should clear the first undo event in a, but not the second
    b.replaceRange("y", Pos(0));
    a.undo(); a.undo();
    eqAll("abxy\ncd\nef", a, b);
    a.replaceRange("u", Pos(2));
    a.replaceRange("v", Pos(0));
    // This should clear both events in a
    b.replaceRange("w", Pos(0));
    a.undo(); a.undo();
    eqAll("abxyvw\ncd\nefu", a, b);
  });

  testDoc("doubleRebase", "A='ab\ncd\nef\ng' B<~A C<B", function(a, b, c) {
    c.replaceRange("u", Pos(3));
    a.replaceRange("", Pos(0, 0), Pos(1, 0));
    c.undo();
    eqAll("cd\nef\ng", a, b, c);
  });

  testDoc("undoUpdate", "A='ab\ncd\nef' B<~A", function(a, b) {
    a.replaceRange("x", Pos(2));
    b.replaceRange("u\nv\nw\n", Pos(0, 0));
    a.undo();
    eqAll("u\nv\nw\nab\ncd\nef", a, b);
    a.redo();
    eqAll("u\nv\nw\nab\ncd\nefx", a, b);
    a.undo();
    eqAll("u\nv\nw\nab\ncd\nef", a, b);
    b.undo();
    a.redo();
    eqAll("ab\ncd\nefx", a, b);
    a.undo();
    eqAll("ab\ncd\nef", a, b);
  });

  testDoc("undoKeepRanges", "A='abcdefg' B<A", function(a, b) {
    var m = a.markText(Pos(0, 1), Pos(0, 3), {className: "foo"});
    b.replaceRange("x", Pos(0, 0));
    eqPos(m.find().from, Pos(0, 2));
    b.replaceRange("yzzy", Pos(0, 1), Pos(0));
    eq(m.find(), null);
    b.undo();
    eqPos(m.find().from, Pos(0, 2));
    b.undo();
    eqPos(m.find().from, Pos(0, 1));
  });

  testDoc("longChain", "A='uv' B<A C<B D<C", function(a, b, c, d) {
    a.replaceSelection("X");
    eqAll("Xuv", a, b, c, d);
    d.replaceRange("Y", Pos(0));
    eqAll("XuvY", a, b, c, d);
  });

  testDoc("broadCast", "B<A C<A D<A E<A", function(a, b, c, d, e) {
    b.setValue("uu");
    eqAll("uu", a, b, c, d, e);
    a.replaceRange("v", Pos(0, 1));
    eqAll("uvu", a, b, c, d, e);
  });

  // A and B share a history, C and D share a separate one
  testDoc("islands", "A='x\ny\nz' B<A C<~A D<C", function(a, b, c, d) {
    a.replaceRange("u", Pos(0));
    d.replaceRange("v", Pos(2));
    b.undo();
    eqAll("x\ny\nzv", a, b, c, d);
    c.undo();
    eqAll("x\ny\nz", a, b, c, d);
    a.redo();
    eqAll("xu\ny\nz", a, b, c, d);
    d.redo();
    eqAll("xu\ny\nzv", a, b, c, d);
  });

  testDoc("unlink", "B<A C<A D<B", function(a, b, c, d) {
    a.setValue("hi");
    b.unlinkDoc(a);
    d.setValue("aye");
    eqAll("hi", a, c);
    eqAll("aye", b, d);
    a.setValue("oo");
    eqAll("oo", a, c);
    eqAll("aye", b, d);
  });

  testDoc("bareDoc", "A*='foo' B*<A C<B", function(a, b, c) {
    is(a instanceof CodeMirror.Doc);
    is(b instanceof CodeMirror.Doc);
    is(c instanceof CodeMirror);
    eqAll("foo", a, b, c);
    a.replaceRange("hey", Pos(0, 0), Pos(0));
    c.replaceRange("!", Pos(0));
    eqAll("hey!", a, b, c);
    b.unlinkDoc(a);
    b.setValue("x");
    eqAll("x", b, c);
    eqAll("hey!", a);
  });

  testDoc("swapDoc", "A='a' B*='b' C<A", function(a, b, c) {
    var d = a.swapDoc(b);
    d.setValue("x");
    eqAll("x", c, d);
    eqAll("b", a, b);
  });

  testDoc("docKeepsScroll", "A='x' B*='y'", function(a, b) {
    addDoc(a, 200, 200);
    a.scrollIntoView(Pos(199, 200));
    var c = a.swapDoc(b);
    a.swapDoc(c);
    var pos = a.getScrollInfo();
    is(pos.left > 0, "not at left");
    is(pos.top > 0, "not at top");
  });

  testDoc("copyDoc", "A='u'", function(a) {
    var copy = a.getDoc().copy(true);
    a.setValue("foo");
    copy.setValue("bar");
    var old = a.swapDoc(copy);
    eq(a.getValue(), "bar");
    a.undo();
    eq(a.getValue(), "u");
    a.swapDoc(old);
    eq(a.getValue(), "foo");
    eq(old.historySize().undo, 1);
    eq(old.copy(false).historySize().undo, 0);
  });

  testDoc("docKeepsMode", "A='1+1'", function(a) {
    var other = CodeMirror.Doc("hi", "text/x-markdown");
    a.setOption("mode", "text/javascript");
    var old = a.swapDoc(other);
    eq(a.getOption("mode"), "text/x-markdown");
    eq(a.getMode().name, "markdown");
    a.swapDoc(old);
    eq(a.getOption("mode"), "text/javascript");
    eq(a.getMode().name, "javascript");
  });

  testDoc("subview", "A='1\n2\n3\n4\n5' B<~A/1-3", function(a, b) {
    eq(b.getValue(), "2\n3");
    eq(b.firstLine(), 1);
    b.setCursor(Pos(4));
    eqPos(b.getCursor(), Pos(2, 1));
    a.replaceRange("-1\n0\n", Pos(0, 0));
    eq(b.firstLine(), 3);
    eqPos(b.getCursor(), Pos(4, 1));
    a.undo();
    eqPos(b.getCursor(), Pos(2, 1));
    b.replaceRange("oyoy\n", Pos(2, 0));
    eq(a.getValue(), "1\n2\noyoy\n3\n4\n5");
    b.undo();
    eq(a.getValue(), "1\n2\n3\n4\n5");
  });

  testDoc("subviewEditOnBoundary", "A='11\n22\n33\n44\n55' B<~A/1-4", function(a, b) {
    a.replaceRange("x\nyy\nz", Pos(0, 1), Pos(2, 1));
    eq(b.firstLine(), 2);
    eq(b.lineCount(), 2);
    eq(b.getValue(), "z3\n44");
    a.replaceRange("q\nrr\ns", Pos(3, 1), Pos(4, 1));
    eq(b.firstLine(), 2);
    eq(b.getValue(), "z3\n4q");
    eq(a.getValue(), "1x\nyy\nz3\n4q\nrr\ns5");
    a.execCommand("selectAll");
    a.replaceSelection("!");
    eqAll("!", a, b);
  });


  testDoc("sharedMarker", "A='ab\ncd\nef\ngh' B<A C<~A/1-2", function(a, b, c) {
    var mark = b.markText(Pos(0, 1), Pos(3, 1),
                          {className: "cm-searching", shared: true});
    var found = a.findMarksAt(Pos(0, 2));
    eq(found.length, 1);
    eq(found[0], mark);
    eq(c.findMarksAt(Pos(1, 1)).length, 1);
    eqPos(mark.find().from, Pos(0, 1));
    eqPos(mark.find().to, Pos(3, 1));
    b.replaceRange("x\ny\n", Pos(0, 0));
    eqPos(mark.find().from, Pos(2, 1));
    eqPos(mark.find().to, Pos(5, 1));
    var cleared = 0;
    CodeMirror.on(mark, "clear", function() {++cleared;});
    b.operation(function(){mark.clear();});
    eq(a.findMarksAt(Pos(3, 1)).length, 0);
    eq(b.findMarksAt(Pos(3, 1)).length, 0);
    eq(c.findMarksAt(Pos(3, 1)).length, 0);
    eq(mark.find(), null);
    eq(cleared, 1);
  });

  testDoc("sharedMarkerCopy", "A='abcde'", function(a) {
    var shared = a.markText(Pos(0, 1), Pos(0, 3), {shared: true});
    var b = a.linkedDoc();
    var found = b.findMarksAt(Pos(0, 2));
    eq(found.length, 1);
    eq(found[0], shared);
    shared.clear();
    eq(b.findMarksAt(Pos(0, 2)), 0);
  });

  testDoc("sharedMarkerDetach", "A='abcde' B<A C<B", function(a, b, c) {
    var shared = a.markText(Pos(0, 1), Pos(0, 3), {shared: true});
    a.unlinkDoc(b);
    var inB = b.findMarksAt(Pos(0, 2));
    eq(inB.length, 1);
    is(inB[0] != shared);
    var inC = c.findMarksAt(Pos(0, 2));
    eq(inC.length, 1);
    is(inC[0] != shared);
    inC[0].clear();
    is(shared.find());
  });

  testDoc("sharedBookmark", "A='ab\ncd\nef\ngh' B<A C<~A/1-2", function(a, b, c) {
    var mark = b.setBookmark(Pos(1, 1), {shared: true});
    var found = a.findMarksAt(Pos(1, 1));
    eq(found.length, 1);
    eq(found[0], mark);
    eq(c.findMarksAt(Pos(1, 1)).length, 1);
    eqPos(mark.find(), Pos(1, 1));
    b.replaceRange("x\ny\n", Pos(0, 0));
    eqPos(mark.find(), Pos(3, 1));
    var cleared = 0;
    CodeMirror.on(mark, "clear", function() {++cleared;});
    b.operation(function() {mark.clear();});
    eq(a.findMarks(Pos(0, 0), Pos(5)).length, 0);
    eq(b.findMarks(Pos(0, 0), Pos(5)).length, 0);
    eq(c.findMarks(Pos(0, 0), Pos(5)).length, 0);
    eq(mark.find(), null);
    eq(cleared, 1);
  });

  testDoc("undoInSubview", "A='line 0\nline 1\nline 2\nline 3\nline 4' B<A/1-4", function(a, b) {
    b.replaceRange("x", Pos(2, 0));
    a.undo();
    eq(a.getValue(), "line 0\nline 1\nline 2\nline 3\nline 4");
    eq(b.getValue(), "line 1\nline 2\nline 3");
  });
})();
