// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({tabSize: 4}, "stex");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT("word",
     "foo");

  MT("twoWords",
     "foo bar");

  MT("beginEndDocument",
     "[tag \\begin][bracket {][atom document][bracket }]",
     "[tag \\end][bracket {][atom document][bracket }]");

  MT("beginEndEquation",
     "[tag \\begin][bracket {][atom equation][bracket }]",
     "  E=mc^2",
     "[tag \\end][bracket {][atom equation][bracket }]");

  MT("beginModule",
     "[tag \\begin][bracket {][atom module][bracket }[[]]]");

  MT("beginModuleId",
     "[tag \\begin][bracket {][atom module][bracket }[[]id=bbt-size[bracket ]]]");

  MT("importModule",
     "[tag \\importmodule][bracket [[][string b-b-t][bracket ]]{][builtin b-b-t][bracket }]");

  MT("importModulePath",
     "[tag \\importmodule][bracket [[][tag \\KWARCslides][bracket {][string dmath/en/cardinality][bracket }]]{][builtin card][bracket }]");

  MT("psForPDF",
     "[tag \\PSforPDF][bracket [[][atom 1][bracket ]]{]#1[bracket }]");

  MT("comment",
     "[comment % foo]");

  MT("tagComment",
     "[tag \\item][comment % bar]");

  MT("commentTag",
     " [comment % \\item]");

  MT("commentLineBreak",
     "[comment %]",
     "foo");

  MT("tagErrorCurly",
     "[tag \\begin][error }][bracket {]");

  MT("tagErrorSquare",
     "[tag \\item][error ]]][bracket {]");

  MT("commentCurly",
     "[comment % }]");

  MT("tagHash",
     "the [tag \\#] key");

  MT("tagNumber",
     "a [tag \\$][atom 5] stetson");

  MT("tagPercent",
     "[atom 100][tag \\%] beef");

  MT("tagAmpersand",
     "L [tag \\&] N");

  MT("tagUnderscore",
     "foo[tag \\_]bar");

  MT("tagBracketOpen",
     "[tag \\emph][bracket {][tag \\{][bracket }]");

  MT("tagBracketClose",
     "[tag \\emph][bracket {][tag \\}][bracket }]");

  MT("tagLetterNumber",
     "section [tag \\S][atom 1]");

  MT("textTagNumber",
     "para [tag \\P][atom 2]");

  MT("thinspace",
     "x[tag \\,]y");

  MT("thickspace",
     "x[tag \\;]y");

  MT("negativeThinspace",
     "x[tag \\!]y");

  MT("periodNotSentence",
     "J.\\ L.\\ is");

  MT("periodSentence",
     "X[tag \\@]. The");

  MT("italicCorrection",
     "[bracket {][tag \\em] If[tag \\/][bracket }] I");

  MT("tagBracket",
     "[tag \\newcommand][bracket {][tag \\pop][bracket }]");

  MT("inlineMathTagFollowedByNumber",
     "[keyword $][tag \\pi][number 2][keyword $]");

  MT("inlineMath",
     "[keyword $][number 3][variable-2 x][tag ^][number 2.45]-[tag \\sqrt][bracket {][tag \\$\\alpha][bracket }] = [number 2][keyword $] other text");

  MT("displayMath",
     "More [keyword $$]\t[variable-2 S][tag ^][variable-2 n][tag \\sum] [variable-2 i][keyword $$] other text");

  MT("mathWithComment",
     "[keyword $][variable-2 x] [comment % $]",
     "[variable-2 y][keyword $] other text");

  MT("lineBreakArgument",
    "[tag \\\\][bracket [[][atom 1cm][bracket ]]]");
})();
