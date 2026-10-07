"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_OPERATORS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.STATEMENT_OR_BLOCK_KEYS = exports.NUMBER_UNARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.LOGICAL_OPERATORS = exports.INHERIT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.EQUALITY_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.COMMENT_KEYS = exports.BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.BINARY_OPERATORS = exports.ASSIGNMENT_OPERATORS = void 0;
const STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
const FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
const FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
const COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];
const LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&", "??"];
const UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];
const BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
const EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
const COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [...EQUALITY_BINARY_OPERATORS, "in", "instanceof"];
const BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [...COMPARISON_BINARY_OPERATORS, ...BOOLEAN_NUMBER_BINARY_OPERATORS];
const NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
const BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+", ...NUMBER_BINARY_OPERATORS, ...BOOLEAN_BINARY_OPERATORS, "|>"];
const ASSIGNMENT_OPERATORS = exports.ASSIGNMENT_OPERATORS = ["=", "+=", ...NUMBER_BINARY_OPERATORS.map(op => op + "="), ...LOGICAL_OPERATORS.map(op => op + "=")];
const BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
const NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "~"];
const STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
const UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void", "throw", ...BOOLEAN_UNARY_OPERATORS, ...NUMBER_UNARY_OPERATORS, ...STRING_UNARY_OPERATORS];
const INHERIT_KEYS = exports.INHERIT_KEYS = {
  optional: ["typeAnnotation", "typeParameters", "returnType"],
  force: ["start", "loc", "end"]
};
exports.BLOCK_SCOPED_SYMBOL = Symbol.for("var used to be block scoped");
exports.NOT_LOCAL_BINDING = Symbol.for("should not be considered a local binding");

//# sourceMappingURL=index.js.map
