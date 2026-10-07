"use strict";

exports.__esModule = true;
exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;
exports.isContainer = isContainer;
exports.isIdentifier = void 0;
exports.isNamespace = isNamespace;
exports.isNesting = void 0;
exports.isNode = isNode;
exports.isPseudo = void 0;
exports.isPseudoClass = isPseudoClass;
exports.isPseudoElement = isPseudoElement;
exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = void 0;
var _types = require("./types");
var _IS_TYPE;
var IS_TYPE = (_IS_TYPE = {}, _IS_TYPE[_types.ATTRIBUTE] = true, _IS_TYPE[_types.CLASS] = true, _IS_TYPE[_types.COMBINATOR] = true, _IS_TYPE[_types.COMMENT] = true, _IS_TYPE[_types.ID] = true, _IS_TYPE[_types.NESTING] = true, _IS_TYPE[_types.PSEUDO] = true, _IS_TYPE[_types.ROOT] = true, _IS_TYPE[_types.SELECTOR] = true, _IS_TYPE[_types.STRING] = true, _IS_TYPE[_types.TAG] = true, _IS_TYPE[_types.UNIVERSAL] = true, _IS_TYPE);
function isNode(node) {
  return typeof node === "object" && IS_TYPE[node.type];
}
function isNodeType(type, node) {
  return isNode(node) && node.type === type;
}
var isAttribute = isNodeType.bind(null, _types.ATTRIBUTE);
exports.isAttribute = isAttribute;
var isClassName = isNodeType.bind(null, _types.CLASS);
exports.isClassName = isClassName;
var isCombinator = isNodeType.bind(null, _types.COMBINATOR);
exports.isCombinator = isCombinator;
var isComment = isNodeType.bind(null, _types.COMMENT);
exports.isComment = isComment;
var isIdentifier = isNodeType.bind(null, _types.ID);
exports.isIdentifier = isIdentifier;
var isNesting = isNodeType.bind(null, _types.NESTING);
exports.isNesting = isNesting;
var isPseudo = isNodeType.bind(null, _types.PSEUDO);
exports.isPseudo = isPseudo;
var isRoot = isNodeType.bind(null, _types.ROOT);
exports.isRoot = isRoot;
var isSelector = isNodeType.bind(null, _types.SELECTOR);
exports.isSelector = isSelector;
var isString = isNodeType.bind(null, _types.STRING);
exports.isString = isString;
var isTag = isNodeType.bind(null, _types.TAG);
exports.isTag = isTag;
var isUniversal = isNodeType.bind(null, _types.UNIVERSAL);
exports.isUniversal = isUniversal;
function isPseudoElement(node) {
  return isPseudo(node) && node.value && (node.value.startsWith("::") || node.value.toLowerCase() === ":before" || node.value.toLowerCase() === ":after" || node.value.toLowerCase() === ":first-letter" || node.value.toLowerCase() === ":first-line");
}
function isPseudoClass(node) {
  return isPseudo(node) && !isPseudoElement(node);
}
function isContainer(node) {
  return !!(isNode(node) && node.walk);
}
function isNamespace(node) {
  return isAttribute(node) || isTag(node);
}