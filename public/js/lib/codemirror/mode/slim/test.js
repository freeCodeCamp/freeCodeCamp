// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// Slim Highlighting for CodeMirror copyright (c) HicknHack Software Gmbh

(function() {
  var mode = CodeMirror.getMode({tabSize: 4, indentUnit: 2}, "slim");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  // Requires at least one media query
  MT("elementName",
     "[tag h1] Hey There");

  MT("oneElementPerLine",
     "[tag h1] Hey There .h2");

  MT("idShortcut",
     "[attribute&def #test] Hey There");

  MT("tagWithIdShortcuts",
     "[tag h1][attribute&def #test] Hey There");

  MT("classShortcut",
     "[attribute&qualifier .hello] Hey There");

  MT("tagWithIdAndClassShortcuts",
     "[tag h1][attribute&def #test][attribute&qualifier .hello] Hey There");

  MT("docType",
     "[keyword doctype] xml");

  MT("comment",
     "[comment / Hello WORLD]");

  MT("notComment",
     "[tag h1] This is not a / comment ");

  MT("attributes",
     "[tag a]([attribute title]=[string \"test\"]) [attribute href]=[string \"link\"]}");

  MT("multiLineAttributes",
     "[tag a]([attribute title]=[string \"test\"]",
     "  ) [attribute href]=[string \"link\"]}");

  MT("htmlCode",
     "[tag&bracket <][tag h1][tag&bracket >]Title[tag&bracket </][tag h1][tag&bracket >]");

  MT("rubyBlock",
     "[operator&special =][variable-2 @item]");

  MT("selectorRubyBlock",
     "[tag a][attribute&qualifier .test][operator&special =] [variable-2 @item]");

  MT("nestedRubyBlock",
      "[tag a]",
      "  [operator&special =][variable puts] [string \"test\"]");

  MT("multilinePlaintext",
      "[tag p]",
      "  | Hello,",
      "    World");

  MT("multilineRuby",
      "[tag p]",
      "  [comment /# this is a comment]",
      "     [comment and this is a comment too]",
      "  | Date/Time",
      "  [operator&special -] [variable now] [operator =] [tag DateTime][operator .][property now]",
      "  [tag strong][operator&special =] [variable now]",
      "  [operator&special -] [keyword if] [variable now] [operator >] [tag DateTime][operator .][property parse]([string \"December 31, 2006\"])",
      "     [operator&special =][string \"Happy\"]",
      "     [operator&special =][string \"Belated\"]",
      "     [operator&special =][string \"Birthday\"]");

  MT("multilineComment",
      "[comment /]",
      "  [comment Multiline]",
      "  [comment Comment]");

  MT("hamlAfterRubyTag",
    "[attribute&qualifier .block]",
    "  [tag strong][operator&special =] [variable now]",
    "  [attribute&qualifier .test]",
    "     [operator&special =][variable now]",
    "  [attribute&qualifier .right]");

  MT("stretchedRuby",
     "[operator&special =] [variable puts] [string \"Hello\"],",
     "   [string \"World\"]");

  MT("interpolationInHashAttribute",
     "[tag div]{[attribute id] = [string \"]#{[variable test]}[string _]#{[variable ting]}[string \"]} test");

  MT("interpolationInHTMLAttribute",
     "[tag div]([attribute title]=[string \"]#{[variable test]}[string _]#{[variable ting]()}[string \"]) Test");
})();
