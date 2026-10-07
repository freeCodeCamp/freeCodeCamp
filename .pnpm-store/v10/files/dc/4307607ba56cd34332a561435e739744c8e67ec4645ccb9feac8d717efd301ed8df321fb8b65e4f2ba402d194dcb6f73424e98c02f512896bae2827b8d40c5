"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isValidIdentifier = require("../validators/isValidIdentifier.js");
var _index = require("../builders/generated/index.js");
var _default = exports.default = valueToNode;
const objectToString = Function.call.bind(Object.prototype.toString);
function isRegExp(value) {
  return objectToString(value) === "[object RegExp]";
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || Object.getPrototypeOf(proto) === null;
}
function valueToNode(value) {
  if (value === undefined) {
    return (0, _index.identifier)("undefined");
  }
  if (value === true || value === false) {
    return (0, _index.booleanLiteral)(value);
  }
  if (value === null) {
    return (0, _index.nullLiteral)();
  }
  if (typeof value === "string") {
    return (0, _index.stringLiteral)(value);
  }
  if (typeof value === "number") {
    let result;
    if (Number.isFinite(value)) {
      result = (0, _index.numericLiteral)(Math.abs(value));
    } else {
      let numerator;
      if (Number.isNaN(value)) {
        numerator = (0, _index.numericLiteral)(0);
      } else {
        numerator = (0, _index.numericLiteral)(1);
      }
      result = (0, _index.binaryExpression)("/", numerator, (0, _index.numericLiteral)(0));
    }
    if (value < 0 || Object.is(value, -0)) {
      result = (0, _index.unaryExpression)("-", result);
    }
    return result;
  }
  if (typeof value === "bigint") {
    if (value < 0) {
      return (0, _index.unaryExpression)("-", (0, _index.bigIntLiteral)(-value));
    } else {
      return (0, _index.bigIntLiteral)(value);
    }
  }
  if (isRegExp(value)) {
    const pattern = value.source;
    const flags = /\/([a-z]*)$/.exec(value.toString())[1];
    return (0, _index.regExpLiteral)(pattern, flags);
  }
  if (Array.isArray(value)) {
    return (0, _index.arrayExpression)(value.map(valueToNode));
  }
  if (isPlainObject(value)) {
    const props = [];
    for (const key of Object.keys(value)) {
      let nodeKey,
        computed = false;
      if ((0, _isValidIdentifier.default)(key)) {
        if (key === "__proto__") {
          computed = true;
          nodeKey = (0, _index.stringLiteral)(key);
        } else {
          nodeKey = (0, _index.identifier)(key);
        }
      } else {
        nodeKey = (0, _index.stringLiteral)(key);
      }
      props.push((0, _index.objectProperty)(nodeKey, valueToNode(value[key]), computed));
    }
    return (0, _index.objectExpression)(props);
  }
  throw new Error("don't know how to turn this value into a node");
}

//# sourceMappingURL=valueToNode.js.map
