// ok, if option multistr is set
var test;
test = "hallo world\
\
this is a multiline string in javascript";

// never ok
// not detected as error before!
test = "hallo world

this is not a multiline string in javascript";

// mixed (should result in one error)
test = "hallo world\

this is a faulty multiline string in javascript";

test = "\033\t";

test = "unnecessary \` escaping";

function octal_strictmode() {
  "use strict";

  var test = "\033\t";
  test = "\0"; // Regression for false positives on \0
}

test = "closing quote on next line\
";
