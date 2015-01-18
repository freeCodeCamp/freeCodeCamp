// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function() {
  var mode = CodeMirror.getMode({indentUnit: 2}, "text/x-scss");
  function MT(name) { test.mode(name, mode, Array.prototype.slice.call(arguments, 1), "scss"); }

  MT('url_with_quotation',
    "[tag foo] { [property background]:[atom url]([string test.jpg]) }");

  MT('url_with_double_quotes',
    "[tag foo] { [property background]:[atom url]([string \"test.jpg\"]) }");

  MT('url_with_single_quotes',
    "[tag foo] { [property background]:[atom url]([string \'test.jpg\']) }");

  MT('string',
    "[def @import] [string \"compass/css3\"]");

  MT('important_keyword',
    "[tag foo] { [property background]:[atom url]([string \'test.jpg\']) [keyword !important] }");

  MT('variable',
    "[variable-2 $blue]:[atom #333]");

  MT('variable_as_attribute',
    "[tag foo] { [property color]:[variable-2 $blue] }");

  MT('numbers',
    "[tag foo] { [property padding]:[number 10px] [number 10] [number 10em] [number 8in] }");

  MT('number_percentage',
    "[tag foo] { [property width]:[number 80%] }");

  MT('selector',
    "[builtin #hello][qualifier .world]{}");

  MT('singleline_comment',
    "[comment // this is a comment]");

  MT('multiline_comment',
    "[comment /*foobar*/]");

  MT('attribute_with_hyphen',
    "[tag foo] { [property font-size]:[number 10px] }");

  MT('string_after_attribute',
    "[tag foo] { [property content]:[string \"::\"] }");

  MT('directives',
    "[def @include] [qualifier .mixin]");

  MT('basic_structure',
    "[tag p] { [property background]:[keyword red]; }");

  MT('nested_structure',
    "[tag p] { [tag a] { [property color]:[keyword red]; } }");

  MT('mixin',
    "[def @mixin] [tag table-base] {}");

  MT('number_without_semicolon',
    "[tag p] {[property width]:[number 12]}",
    "[tag a] {[property color]:[keyword red];}");

  MT('atom_in_nested_block',
    "[tag p] { [tag a] { [property color]:[atom #000]; } }");

  MT('interpolation_in_property',
    "[tag foo] { #{[variable-2 $hello]}:[number 2]; }");

  MT('interpolation_in_selector',
    "[tag foo]#{[variable-2 $hello]} { [property color]:[atom #000]; }");

  MT('interpolation_error',
    "[tag foo]#{[error foo]} { [property color]:[atom #000]; }");

  MT("divide_operator",
    "[tag foo] { [property width]:[number 4] [operator /] [number 2] }");

  MT('nested_structure_with_id_selector',
    "[tag p] { [builtin #hello] { [property color]:[keyword red]; } }");

  MT('indent_mixin',
     "[def @mixin] [tag container] (",
     "  [variable-2 $a]: [number 10],",
     "  [variable-2 $b]: [number 10])",
     "{}");

  MT('indent_nested',
     "[tag foo] {",
     "  [tag bar] {",
     "  }",
     "}");

  MT('indent_parentheses',
     "[tag foo] {",
     "  [property color]: [variable darken]([variable-2 $blue],",
     "    [number 9%]);",
     "}");

  MT('indent_vardef',
     "[variable-2 $name]:",
     "  [string 'val'];",
     "[tag tag] {",
     "  [tag inner] {",
     "    [property margin]: [number 3px];",
     "  }",
     "}");
})();
