/*global Cat, Dog */
/*exported isCat, isDog, cannotBeExported, Dog */

function isCat(obj) {
  var unused;
  var isDog;
  
  return obj instanceof Cat;
}

var isDog = function () {};

function unusedDeclaration() {}
var unusedExpression = function () {};

(function () {
  function cannotBeExported() {}
}());

var a, b;
if (true) {
  /* exported a */
}
if (true) {
  for(var i = 0; i < 1; i++) {
    // dont peek
  }
  /* exported b */
}

if (true) {
  var c;
}
/* exported c */
