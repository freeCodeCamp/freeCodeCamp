// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({tabSize: 4}, 'textile');
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1)); }

  MT('simpleParagraphs',
      'Some text.',
      '',
      'Some more text.');

  /*
   * Phrase Modifiers
   */

  MT('em',
      'foo [em _bar_]');

  MT('emBoogus',
      'code_mirror');

  MT('strong',
      'foo [strong *bar*]');

  MT('strongBogus',
      '3 * 3 = 9');

  MT('italic',
      'foo [em __bar__]');

  MT('italicBogus',
      'code__mirror');

  MT('bold',
      'foo [strong **bar**]');

  MT('boldBogus',
      '3 ** 3 = 27');

  MT('simpleLink',
      '[link "CodeMirror":http://codemirror.net]');

  MT('referenceLink',
      '[link "CodeMirror":code_mirror]',
      'Normal Text.',
      '[link [[code_mirror]]http://codemirror.net]');

  MT('footCite',
      'foo bar[qualifier [[1]]]');

  MT('footCiteBogus',
      'foo bar[[1a2]]');

  MT('special-characters',
          'Registered [tag (r)], ' +
          'Trademark [tag (tm)], and ' +
          'Copyright [tag (c)] 2008');

  MT('cite',
      "A book is [keyword ??The Count of Monte Cristo??] by Dumas.");

  MT('additionAndDeletion',
      'The news networks declared [negative -Al Gore-] ' +
        '[positive +George W. Bush+] the winner in Florida.');

  MT('subAndSup',
      'f(x, n) = log [builtin ~4~] x [builtin ^n^]');

  MT('spanAndCode',
      'A [quote %span element%] and [atom @code element@]');

  MT('spanBogus',
      'Percentage 25% is not a span.');

  MT('citeBogus',
      'Question? is not a citation.');

  MT('codeBogus',
      'user@example.com');

  MT('subBogus',
      '~username');

  MT('supBogus',
      'foo ^ bar');

  MT('deletionBogus',
      '3 - 3 = 0');

  MT('additionBogus',
      '3 + 3 = 6');

  MT('image',
      'An image: [string !http://www.example.com/image.png!]');

  MT('imageWithAltText',
      'An image: [string !http://www.example.com/image.png (Alt Text)!]');

  MT('imageWithUrl',
      'An image: [string !http://www.example.com/image.png!:http://www.example.com/]');

  /*
   * Headers
   */

  MT('h1',
      '[header&header-1 h1. foo]');

  MT('h2',
      '[header&header-2 h2. foo]');

  MT('h3',
      '[header&header-3 h3. foo]');

  MT('h4',
      '[header&header-4 h4. foo]');

  MT('h5',
      '[header&header-5 h5. foo]');

  MT('h6',
      '[header&header-6 h6. foo]');

  MT('h7Bogus',
      'h7. foo');

  MT('multipleHeaders',
      '[header&header-1 h1. Heading 1]',
      '',
      'Some text.',
      '',
      '[header&header-2 h2. Heading 2]',
      '',
      'More text.');

  MT('h1inline',
      '[header&header-1 h1. foo ][header&header-1&em _bar_][header&header-1  baz]');

  /*
   * Lists
   */

  MT('ul',
      'foo',
      'bar',
      '',
      '[variable-2 * foo]',
      '[variable-2 * bar]');

  MT('ulNoBlank',
      'foo',
      'bar',
      '[variable-2 * foo]',
      '[variable-2 * bar]');

  MT('ol',
      'foo',
      'bar',
      '',
      '[variable-2 # foo]',
      '[variable-2 # bar]');

  MT('olNoBlank',
      'foo',
      'bar',
      '[variable-2 # foo]',
      '[variable-2 # bar]');

  MT('ulFormatting',
      '[variable-2 * ][variable-2&em _foo_][variable-2  bar]',
      '[variable-2 * ][variable-2&strong *][variable-2&em&strong _foo_]' +
        '[variable-2&strong *][variable-2  bar]',
      '[variable-2 * ][variable-2&strong *foo*][variable-2  bar]');

  MT('olFormatting',
      '[variable-2 # ][variable-2&em _foo_][variable-2  bar]',
      '[variable-2 # ][variable-2&strong *][variable-2&em&strong _foo_]' +
        '[variable-2&strong *][variable-2  bar]',
      '[variable-2 # ][variable-2&strong *foo*][variable-2  bar]');

  MT('ulNested',
      '[variable-2 * foo]',
      '[variable-3 ** bar]',
      '[keyword *** bar]',
      '[variable-2 **** bar]',
      '[variable-3 ** bar]');

  MT('olNested',
      '[variable-2 # foo]',
      '[variable-3 ## bar]',
      '[keyword ### bar]',
      '[variable-2 #### bar]',
      '[variable-3 ## bar]');

  MT('ulNestedWithOl',
      '[variable-2 * foo]',
      '[variable-3 ## bar]',
      '[keyword *** bar]',
      '[variable-2 #### bar]',
      '[variable-3 ** bar]');

  MT('olNestedWithUl',
      '[variable-2 # foo]',
      '[variable-3 ** bar]',
      '[keyword ### bar]',
      '[variable-2 **** bar]',
      '[variable-3 ## bar]');

  MT('definitionList',
      '[number - coffee := Hot ][number&em _and_][number  black]',
      '',
      'Normal text.');

  MT('definitionListSpan',
      '[number - coffee :=]',
      '',
      '[number Hot ][number&em _and_][number  black =:]',
      '',
      'Normal text.');

  MT('boo',
      '[number - dog := woof woof]',
      '[number - cat := meow meow]',
      '[number - whale :=]',
      '[number Whale noises.]',
      '',
      '[number Also, ][number&em _splashing_][number . =:]');

  /*
   * Attributes
   */

  MT('divWithAttribute',
      '[punctuation div][punctuation&attribute (#my-id)][punctuation . foo bar]');

  MT('divWithAttributeAnd2emRightPadding',
      '[punctuation div][punctuation&attribute (#my-id)((][punctuation . foo bar]');

  MT('divWithClassAndId',
      '[punctuation div][punctuation&attribute (my-class#my-id)][punctuation . foo bar]');

  MT('paragraphWithCss',
      'p[attribute {color:red;}]. foo bar');

  MT('paragraphNestedStyles',
      'p. [strong *foo ][strong&em _bar_][strong *]');

  MT('paragraphWithLanguage',
      'p[attribute [[fr]]]. Parlez-vous français?');

  MT('paragraphLeftAlign',
      'p[attribute <]. Left');

  MT('paragraphRightAlign',
      'p[attribute >]. Right');

  MT('paragraphRightAlign',
      'p[attribute =]. Center');

  MT('paragraphJustified',
      'p[attribute <>]. Justified');

  MT('paragraphWithLeftIndent1em',
      'p[attribute (]. Left');

  MT('paragraphWithRightIndent1em',
      'p[attribute )]. Right');

  MT('paragraphWithLeftIndent2em',
      'p[attribute ((]. Left');

  MT('paragraphWithRightIndent2em',
      'p[attribute ))]. Right');

  MT('paragraphWithLeftIndent3emRightIndent2em',
      'p[attribute ((())]. Right');

  MT('divFormatting',
      '[punctuation div. ][punctuation&strong *foo ]' +
        '[punctuation&strong&em _bar_][punctuation&strong *]');

  MT('phraseModifierAttributes',
      'p[attribute (my-class)]. This is a paragraph that has a class and' +
      ' this [em _][em&attribute (#special-phrase)][em emphasized phrase_]' +
      ' has an id.');

  MT('linkWithClass',
      '[link "(my-class). This is a link with class":http://redcloth.org]');

  /*
   * Layouts
   */

  MT('paragraphLayouts',
      'p. This is one paragraph.',
      '',
      'p. This is another.');

  MT('div',
      '[punctuation div. foo bar]');

  MT('pre',
      '[operator pre. Text]');

  MT('bq.',
      '[bracket bq. foo bar]',
      '',
      'Normal text.');

  MT('footnote',
      '[variable fn123. foo ][variable&strong *bar*]');

  /*
   * Spanning Layouts
   */

  MT('bq..ThenParagraph',
      '[bracket bq.. foo bar]',
      '',
      '[bracket More quote.]',
      'p. Normal Text');

  MT('bq..ThenH1',
      '[bracket bq.. foo bar]',
      '',
      '[bracket More quote.]',
      '[header&header-1 h1. Header Text]');

  MT('bc..ThenParagraph',
      '[atom bc.. # Some ruby code]',
      '[atom obj = {foo: :bar}]',
      '[atom puts obj]',
      '',
      '[atom obj[[:love]] = "*love*"]',
      '[atom puts obj.love.upcase]',
      '',
      'p. Normal text.');

  MT('fn1..ThenParagraph',
      '[variable fn1.. foo bar]',
      '',
      '[variable More.]',
      'p. Normal Text');

  MT('pre..ThenParagraph',
      '[operator pre.. foo bar]',
      '',
      '[operator More.]',
      'p. Normal Text');

  /*
   * Tables
   */

  MT('table',
      '[variable-3&operator |_. name |_. age|]',
      '[variable-3 |][variable-3&strong *Walter*][variable-3 |   5  |]',
      '[variable-3 |Florence|   6  |]',
      '',
      'p. Normal text.');

  MT('tableWithAttributes',
      '[variable-3&operator |_. name |_. age|]',
      '[variable-3 |][variable-3&attribute /2.][variable-3  Jim |]',
      '[variable-3 |][variable-3&attribute \\2{color: red}.][variable-3  Sam |]');

  /*
   * HTML
   */

  MT('html',
      '[comment <div id="wrapper">]',
      '[comment <section id="introduction">]',
      '',
      '[header&header-1 h1. Welcome]',
      '',
      '[variable-2 * Item one]',
      '[variable-2 * Item two]',
      '',
      '[comment <a href="http://example.com">Example</a>]',
      '',
      '[comment </section>]',
      '[comment </div>]');

  MT('inlineHtml',
      'I can use HTML directly in my [comment <span class="youbetcha">Textile</span>].');

  /*
   * No-Textile
   */

  MT('notextile',
    '[string-2 notextile. *No* formatting]');

  MT('notextileInline',
      'Use [string-2 ==*asterisks*==] for [strong *strong*] text.');

  MT('notextileWithPre',
      '[operator pre. *No* formatting]');

  MT('notextileWithSpanningPre',
      '[operator pre.. *No* formatting]',
      '',
      '[operator *No* formatting]');

  /* Only toggling phrases between non-word chars. */

  MT('phrase-in-word',
     'foo_bar_baz');

  MT('phrase-non-word',
     '[negative -x-] aaa-bbb ccc-ddd [negative -eee-] fff [negative -ggg-]');

  MT('phrase-lone-dash',
     'foo - bar - baz');
})();
