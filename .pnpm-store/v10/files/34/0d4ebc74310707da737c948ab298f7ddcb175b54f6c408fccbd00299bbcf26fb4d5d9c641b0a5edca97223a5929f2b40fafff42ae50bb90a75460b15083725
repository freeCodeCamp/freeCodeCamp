function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { decode } from "@webassemblyjs/wasm-parser";
import { traverse } from "@webassemblyjs/ast";
import { cloneNode } from "@webassemblyjs/ast/lib/clone";
import { shrinkPaddedLEB128 } from "@webassemblyjs/wasm-opt";
import { getSectionForNode } from "@webassemblyjs/helper-wasm-bytecode";
import constants from "@webassemblyjs/helper-wasm-bytecode";
import { applyOperations } from "./apply";

function hashNode(node) {
  return JSON.stringify(node);
}

function preprocess(ab) {
  var optBin = shrinkPaddedLEB128(new Uint8Array(ab));
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
    var sectionA = getSectionForNode(a);
    var sectionB = getSectionForNode(b);
    var aId = constants.sections[sectionA];
    var bId = constants.sections[sectionB];

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

export function edit(ab, visitors) {
  ab = preprocess(ab);
  var ast = decode(ab);
  return editWithAST(ast, ab, visitors);
}
export function editWithAST(ast, ab, visitors) {
  var operations = [];
  var uint8Buffer = new Uint8Array(ab);
  var nodeBefore;

  function before(type, path) {
    nodeBefore = cloneNode(path.node);
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

  traverse(ast, visitors, before, after);
  uint8Buffer = applyOperations(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}
export function add(ab, newNodes) {
  ab = preprocess(ab);
  var ast = decode(ab);
  return addWithAST(ast, ab, newNodes);
}
export function addWithAST(ast, ab, newNodes) {
  // Sort nodes by insertion order
  sortBySectionOrder(newNodes);
  var uint8Buffer = new Uint8Array(ab); // Map node into operations

  var operations = newNodes.map(function (n) {
    return {
      kind: "add",
      node: n
    };
  });
  uint8Buffer = applyOperations(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}