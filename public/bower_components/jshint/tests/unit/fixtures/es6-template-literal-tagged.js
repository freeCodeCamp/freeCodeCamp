function tag() {}

var one = 1, two = 2;

var string = tag`  ${one} + ${two}
= ${one + two}`;

var literal = tag`because I
can`;

var escaped = tag`one = \`${one}\``;

function octal_strictmode() {
  "use strict";

  var test = tag`\033\t`;
}

var nested = tag`Look and ${ tag`Nested ${ tag`whoaaa` } template` } listen`;

var innerobj = tag`Template with ${ {obj: "literal"} } inside`;

var unterminated = tag`${one}
