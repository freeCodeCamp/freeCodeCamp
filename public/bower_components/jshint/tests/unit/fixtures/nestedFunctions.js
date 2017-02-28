// non-nested function with non-standard ending curly placement
function a(x, y) {
	return x+y;
   }

// regular nested function
function b() {
	function c() {
		return 1+1;
	}
	return c();
}

// anonymous nested function with params
function d() {
	var e = function (x, y) {
		return x+y;
	};
	return e;
}

// anonymous nested function in parens
function f() {
	(function () {
		return 1+1;
	})();
}

// all on one line with non-standard parenthesis placement
function g() { return function h     () { return 1+1; };}

// function in object
var i = {
	j : function () { return 1+1; },
	"k" : function() {},
	23: function() {},
	["computedStr"] : function() {},
	["computed" + 3] : function() {},
	get getter() {},
	set setter() {}
};

g.then(function() {});

var unrelated;

// Inferred name values should not extend beyond assignment operations.
unrelated = {}, (function() {})();

unrelated.unrelated = {}, (function() {})();

g[(function() { var l = function() {}; return l(); }())] = function() {};

g.viaDot = function() {};

g["viaBracket"] = function() {};
g["expr" + g + "ession"] = function() {};

var VarDeclClass = class {
  /**
   * A constructor method is effectively a reference to the class to which it
   * belongs. This means its name should be reported as the name of the class
   * itself.
   */
  constructor() {}                 // "VarDeclClass"
  static func() {}                 // "func"
  method() {}                      // "method"
  get getter() {}                  // "get getter"
  set setter() {}                  // "set setter"
  *genMethod() {}                  // "genMethod"
  static *staticGenMethod() {}     // "staticGenMethod"
};

var grouping = (function() {});

export default function() {}
