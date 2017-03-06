"use strict";

var _ = require("lodash");

var errors = {
  // JSHint options
  E001: "Bad option: '{a}'.",
  E002: "Bad option value.",

  // JSHint input
  E003: "Expected a JSON value.",
  E004: "Input is neither a string nor an array of strings.",
  E005: "Input is empty.",
  E006: "Unexpected early end of program.",

  // Strict mode
  E007: "Missing \"use strict\" statement.",
  E008: "Strict violation.",
  E009: "Option 'validthis' can't be used in a global scope.",
  E010: "'with' is not allowed in strict mode.",

  // Constants
  E011: "'{a}' has already been declared.",
  E012: "const '{a}' is initialized to 'undefined'.",
  E013: "Attempting to override '{a}' which is a constant.",

  // Regular expressions
  E014: "A regular expression literal can be confused with '/='.",
  E015: "Unclosed regular expression.",
  E016: "Invalid regular expression.",

  // Tokens
  E017: "Unclosed comment.",
  E018: "Unbegun comment.",
  E019: "Unmatched '{a}'.",
  E020: "Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.",
  E021: "Expected '{a}' and instead saw '{b}'.",
  E022: "Line breaking error '{a}'.",
  E023: "Missing '{a}'.",
  E024: "Unexpected '{a}'.",
  E025: "Missing ':' on a case clause.",
  E026: "Missing '}' to match '{' from line {a}.",
  E027: "Missing ']' to match '[' from line {a}.",
  E028: "Illegal comma.",
  E029: "Unclosed string.",

  // Everything else
  E030: "Expected an identifier and instead saw '{a}'.",
  E031: "Bad assignment.", // FIXME: Rephrase
  E032: "Expected a small integer or 'false' and instead saw '{a}'.",
  E033: "Expected an operator and instead saw '{a}'.",
  E034: "get/set are ES5 features.",
  E035: "Missing property name.",
  E036: "Expected to see a statement and instead saw a block.",
  E037: null,
  E038: null,
  E039: "Function declarations are not invocable. Wrap the whole function invocation in parens.",
  E040: "Each value should have its own case label.",
  E041: "Unrecoverable syntax error.",
  E042: "Stopping.",
  E043: "Too many errors.",
  E044: null,
  E045: "Invalid for each loop.",
  E046: "A yield statement shall be within a generator function (with syntax: `function*`)",
  E047: null,
  E048: "{a} declaration not directly within block.",
  E049: "A {a} cannot be named '{b}'.",
  E050: "Mozilla requires the yield expression to be parenthesized here.",
  E051: null,
  E052: "Unclosed template literal.",
  E053: "{a} declarations are only allowed at the top level of module scope.",
  E054: "Class properties must be methods. Expected '(' but instead saw '{a}'.",
  E055: "The '{a}' option cannot be set after any executable code.",
  E056: "'{a}' was used before it was declared, which is illegal for '{b}' variables.",
  E057: "Invalid meta property: '{a}.{b}'.",
  E058: "Missing semicolon.",
  E059: "Incompatible values for the '{a}' and '{b}' linting options.",
  E060: "Non-callable values cannot be used as the second operand to instanceof.",
  E061: "Invalid position for 'yield' expression (consider wrapping in parenthesis)."
};

var warnings = {
  W001: "'hasOwnProperty' is a really bad name.",
  W002: "Value of '{a}' may be overwritten in IE 8 and earlier.",
  W003: "'{a}' was used before it was defined.",
  W004: "'{a}' is already defined.",
  W005: "A dot following a number can be confused with a decimal point.",
  W006: "Confusing minuses.",
  W007: "Confusing plusses.",
  W008: "A leading decimal point can be confused with a dot: '{a}'.",
  W009: "The array literal notation [] is preferable.",
  W010: "The object literal notation {} is preferable.",
  W011: null,
  W012: null,
  W013: null,
  W014: "Misleading line break before '{a}'; readers may interpret this as an expression boundary.",
  W015: null,
  W016: "Unexpected use of '{a}'.",
  W017: "Bad operand.",
  W018: "Confusing use of '{a}'.",
  W019: "Use the isNaN function to compare with NaN.",
  W020: "Read only.",
  W021: "Reassignment of '{a}', which is is a {b}. " +
    "Use 'var' or 'let' to declare bindings that may change.",
  W022: "Do not assign to the exception parameter.",
  W023: "Expected an identifier in an assignment and instead saw a function invocation.",
  W024: "Expected an identifier and instead saw '{a}' (a reserved word).",
  W025: "Missing name in function declaration.",
  W026: "Inner functions should be listed at the top of the outer function.",
  W027: "Unreachable '{a}' after '{b}'.",
  W028: "Label '{a}' on {b} statement.",
  W030: "Expected an assignment or function call and instead saw an expression.",
  W031: "Do not use 'new' for side effects.",
  W032: "Unnecessary semicolon.",
  W033: "Missing semicolon.",
  W034: "Unnecessary directive \"{a}\".",
  W035: "Empty block.",
  W036: "Unexpected /*member '{a}'.",
  W037: "'{a}' is a statement label.",
  W038: "'{a}' used out of scope.",
  W039: "'{a}' is not allowed.",
  W040: "If a strict mode function is executed using function invocation, " +
    "its 'this' value will be undefined.",
  W041: "Use '{a}' to compare with '{b}'.",
  W042: "Avoid EOL escaping.",
  W043: "Bad escaping of EOL. Use option multistr if needed.",
  W044: "Bad or unnecessary escaping.", /* TODO(caitp): remove W044 */
  W045: "Bad number '{a}'.",
  W046: "Don't use extra leading zeros '{a}'.",
  W047: "A trailing decimal point can be confused with a dot: '{a}'.",
  W048: "Unexpected control character in regular expression.",
  W049: "Unexpected escaped character '{a}' in regular expression.",
  W050: "JavaScript URL.",
  W051: "Variables should not be deleted.",
  W052: "Unexpected '{a}'.",
  W053: "Do not use {a} as a constructor.",
  W054: "The Function constructor is a form of eval.",
  W055: "A constructor name should start with an uppercase letter.",
  W056: "Bad constructor.",
  W057: "Weird construction. Is 'new' necessary?",
  W058: "Missing '()' invoking a constructor.",
  W059: "Avoid arguments.{a}.",
  W060: "document.write can be a form of eval.",
  W061: "eval can be harmful.",
  W062: "Wrap an immediate function invocation in parens " +
    "to assist the reader in understanding that the expression " +
    "is the result of a function, and not the function itself.",
  W063: "Math is not a function.",
  W064: "Missing 'new' prefix when invoking a constructor.",
  W065: "Missing radix parameter.",
  W066: "Implied eval. Consider passing a function instead of a string.",
  W067: "Bad invocation.",
  W068: "Wrapping non-IIFE function literals in parens is unnecessary.",
  W069: "['{a}'] is better written in dot notation.",
  W070: "Extra comma. (it breaks older versions of IE)",
  W071: "This function has too many statements. ({a})",
  W072: "This function has too many parameters. ({a})",
  W073: "Blocks are nested too deeply. ({a})",
  W074: "This function's cyclomatic complexity is too high. ({a})",
  W075: "Duplicate {a} '{b}'.",
  W076: "Unexpected parameter '{a}' in get {b} function.",
  W077: "Expected a single parameter in set {a} function.",
  W078: "Setter is defined without getter.",
  W079: "Redefinition of '{a}'.",
  W080: "It's not necessary to initialize '{a}' to 'undefined'.",
  W081: null,
  W082: "Function declarations should not be placed in blocks. " +
    "Use a function expression or move the statement to the top of " +
    "the outer function.",
  W083: "Don't make functions within a loop.",
  W084: "Expected a conditional expression and instead saw an assignment.",
  W085: "Don't use 'with'.",
  W086: "Expected a 'break' statement before '{a}'.",
  W087: "Forgotten 'debugger' statement?",
  W088: "Creating global 'for' variable. Should be 'for (var {a} ...'.",
  W089: "The body of a for in should be wrapped in an if statement to filter " +
    "unwanted properties from the prototype.",
  W090: "'{a}' is not a statement label.",
  W091: null,
  W093: "Did you mean to return a conditional instead of an assignment?",
  W094: "Unexpected comma.",
  W095: "Expected a string and instead saw {a}.",
  W096: "The '{a}' key may produce unexpected results.",
  W097: "Use the function form of \"use strict\".",
  W098: "'{a}' is defined but never used.",
  W099: null,
  W100: "This character may get silently deleted by one or more browsers.",
  W101: "Line is too long.",
  W102: null,
  W103: "The '{a}' property is deprecated.",
  W104: "'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz).",
  W105: "Unexpected {a} in '{b}'.",
  W106: "Identifier '{a}' is not in camel case.",
  W107: "Script URL.",
  W108: "Strings must use doublequote.",
  W109: "Strings must use singlequote.",
  W110: "Mixed double and single quotes.",
  W112: "Unclosed string.",
  W113: "Control character in string: {a}.",
  W114: "Avoid {a}.",
  W115: "Octal literals are not allowed in strict mode.",
  W116: "Expected '{a}' and instead saw '{b}'.",
  W117: "'{a}' is not defined.",
  W118: "'{a}' is only available in Mozilla JavaScript extensions (use moz option).",
  W119: "'{a}' is only available in ES{b} (use 'esversion: {b}').",
  W120: "You might be leaking a variable ({a}) here.",
  W121: "Extending prototype of native object: '{a}'.",
  W122: "Invalid typeof value '{a}'",
  W123: "'{a}' is already defined in outer scope.",
  W124: "A generator function shall contain a yield statement.",
  W125: "This line contains non-breaking spaces: http://jshint.com/docs/options/#nonbsp",
  W126: "Unnecessary grouping operator.",
  W127: "Unexpected use of a comma operator.",
  W128: "Empty array elements require elision=true.",
  W129: "'{a}' is defined in a future version of JavaScript. Use a " +
    "different variable name to avoid migration issues.",
  W130: "Invalid element after rest element.",
  W131: "Invalid parameter after rest parameter.",
  W132: "`var` declarations are forbidden. Use `let` or `const` instead.",
  W133: "Invalid for-{a} loop left-hand-side: {b}.",
  W134: "The '{a}' option is only available when linting ECMAScript {b} code.",
  W135: "{a} may not be supported by non-browser environments.",
  W136: "'{a}' must be in function scope.",
  W137: "Empty destructuring.",
  W138: "Regular parameters should not come after default parameters.",
  W139: "Function expressions should not be used as the second operand to instanceof."
};

var info = {
  I001: "Comma warnings can be turned off with 'laxcomma'.",
  I002: null,
  I003: "ES5 option is now set per default"
};

exports.errors = {};
exports.warnings = {};
exports.info = {};

_.each(errors, function(desc, code) {
  exports.errors[code] = { code: code, desc: desc };
});

_.each(warnings, function(desc, code) {
  exports.warnings[code] = { code: code, desc: desc };
});

_.each(info, function(desc, code) {
  exports.info[code] = { code: code, desc: desc };
});
