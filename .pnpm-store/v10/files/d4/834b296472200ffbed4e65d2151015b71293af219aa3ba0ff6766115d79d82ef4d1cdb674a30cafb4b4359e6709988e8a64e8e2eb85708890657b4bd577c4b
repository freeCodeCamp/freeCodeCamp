"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edit = edit;
exports.editWithAST = editWithAST;
exports.add = add;
exports.addWithAST = addWithAST;

var _wasmParser = require("@webassemblyjs/wasm-parser");

var _ast = require("@webassemblyjs/ast");

var _clone = require("@webassemblyjs/ast/lib/clone");

var _wasmOpt = require("@webassemblyjs/wasm-opt");

var _helperWasmBytecode = _interopRequireWildcard(require("@webassemblyjs/helper-wasm-bytecode"));

var _apply = require("./apply");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function hashNode(node) {
  return JSON.stringify(node);
}

function preprocess(ab) {
  var optBin = (0, _wasmOpt.shrinkPaddedLEB128)(new Uint8Array(ab));
  return optBin.buffer;
}

function sortBySectionOrder(nodes) {
  var originalOrder = new Map();

  var _iterator = _createForOfIteratorHelper(nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      originalOrder.set(node, originalOrder.size);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  nodes.sort(function (a, b) {
    var sectionA = (0, _helperWasmBytecode.getSectionForNode)(a);
    var sectionB = (0, _helperWasmBytecode.getSectionForNode)(b);
    var aId = _helperWasmBytecode["default"].sections[sectionA];
    var bId = _helperWasmBytecode["default"].sections[sectionB];

    if (typeof aId !== "number" || typeof bId !== "number") {
      throw new Error("Section id not found");
    }

    if (aId === bId) {
      // $FlowIgnore originalOrder is filled for all nodes
      return originalOrder.get(a) - originalOrder.get(b);
    }

    return aId - bId;
  });
}

function edit(ab, visitors) {
  ab = preprocess(ab);
  var ast = (0, _wasmParser.decode)(ab);
  return editWithAST(ast, ab, visitors);
}

function editWithAST(ast, ab, visitors) {
  var operations = [];
  var uint8Buffer = new Uint8Array(ab);
  var nodeBefore;

  function before(type, path) {
    nodeBefore = (0, _clone.cloneNode)(path.node);
  }

  function after(type, path) {
    if (path.node._deleted === true) {
      operations.push({
        kind: "delete",
        node: path.node
      }); // $FlowIgnore
    } else if (hashNode(nodeBefore) !== hashNode(path.node)) {
      operations.push({
        kind: "update",
        oldNode: nodeBefore,
        node: path.node
      });
    }
  }

  (0, _ast.traverse)(ast, visitors, before, after);
  uint8Buffer = (0, _apply.applyOperations)(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}

function add(ab, newNodes) {
  ab = preprocess(ab);
  var ast = (0, _wasmParser.decode)(ab);
  return addWithAST(ast, ab, newNodes);
}

function addWithAST(ast, ab, newNodes) {
  // Sort nodes by insertion order
  sortBySectionOrder(newNodes);
  var uint8Buffer = new Uint8Array(ab); // Map node into operations

  var operations = newNodes.map(function (n) {
    return {
      kind: "add",
      node: n
    };
  });
  uint8Buffer = (0, _apply.applyOperations)(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}