function Doit() {
}
var foo = true;
Doit.prototype = {
  _someProperty: null,

  test: function(num, num2=1, num3=2) {
    return num === num2;
  },

  testUseOfVariables: function(num = foo, // Ok, defined above
                               num1 = num, // Ok, previous argument
                               num2 = num3, // warn, next argument
                               num3 = bar, // warn, not defined
                               num4 = num4) { // warn, self reference
  },

  testBadDefault: function(num, num2=1, num3) {
    return num === num2;
  },

  get someProperty() {
    return this._someProperty;
  },
};
function test1(a = function() {
  return c; // warn - wrong scope
}) {
  var c;
}
function test2(a = function() {
  return d; // cannot tell if it is declared yet at point of evaluation
}, d = true) {
}
function test2(a = e, // next param and outside scope - this acts like a reference in TDZ and throws
               e = true) {
}
var e;
