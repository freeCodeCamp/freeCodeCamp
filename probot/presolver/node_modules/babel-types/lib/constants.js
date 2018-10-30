"use strict";

exports.__esModule = true;
exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

var _for = require("babel-runtime/core-js/symbol/for");

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];

var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];

var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);

var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);

var INHERIT_KEYS = exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};

var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");