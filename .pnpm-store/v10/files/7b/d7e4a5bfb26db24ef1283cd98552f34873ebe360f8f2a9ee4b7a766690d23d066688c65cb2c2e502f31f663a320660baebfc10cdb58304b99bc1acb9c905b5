"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyOperations = applyOperations;

var _wasmGen = require("@webassemblyjs/wasm-gen");

var _encoder = require("@webassemblyjs/wasm-gen/lib/encoder");

var _ast = require("@webassemblyjs/ast");

var _helperWasmSection = require("@webassemblyjs/helper-wasm-section");

var _helperBuffer = require("@webassemblyjs/helper-buffer");

var _helperWasmBytecode = require("@webassemblyjs/helper-wasm-bytecode");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function shiftLocNodeByDelta(node, delta) {
  (0, _ast.assertHasLoc)(node); // $FlowIgnore: assertHasLoc ensures that

  node.loc.start.column += delta; // $FlowIgnore: assertHasLoc ensures that

  node.loc.end.column += delta;
}

function applyUpdate(ast, uint8Buffer, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      oldNode = _ref2[0],
      newNode = _ref2[1];

  var deltaElements = 0;
  (0, _ast.assertHasLoc)(oldNode);
  var sectionName = (0, _helperWasmBytecode.getSectionForNode)(newNode);
  var replacementByteArray = (0, _wasmGen.encodeNode)(newNode);
  /**
   * Replace new node as bytes
   */

  uint8Buffer = (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.start.column, // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.end.column, replacementByteArray);
  /**
   * Update function body size if needed
   */

  if (sectionName === "code") {
    // Find the parent func
    (0, _ast.traverse)(ast, {
      Func: function Func(_ref3) {
        var node = _ref3.node;
        var funcHasThisIntr = node.body.find(function (n) {
          return n === newNode;
        }) !== undefined; // Update func's body size if needed

        if (funcHasThisIntr === true) {
          // These are the old functions locations informations
          (0, _ast.assertHasLoc)(node);
          var oldNodeSize = (0, _wasmGen.encodeNode)(oldNode).length;
          var bodySizeDeltaBytes = replacementByteArray.length - oldNodeSize;

          if (bodySizeDeltaBytes !== 0) {
            var newValue = node.metadata.bodySize + bodySizeDeltaBytes;
            var newByteArray = (0, _encoder.encodeU32)(newValue); // function body size byte
            // FIXME(sven): only handles one byte u32

            var start = node.loc.start.column;
            var end = start + 1;
            uint8Buffer = (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, start, end, newByteArray);
          }
        }
      }
    });
  }
  /**
   * Update section size
   */


  var deltaBytes = replacementByteArray.length - (oldNode.loc.end.column - oldNode.loc.start.column); // Init location informations

  newNode.loc = {
    start: {
      line: -1,
      column: -1
    },
    end: {
      line: -1,
      column: -1
    }
  }; // Update new node end position
  // $FlowIgnore: assertHasLoc ensures that

  newNode.loc.start.column = oldNode.loc.start.column; // $FlowIgnore: assertHasLoc ensures that

  newNode.loc.end.column = // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.start.column + replacementByteArray.length;
  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyDelete(ast, uint8Buffer, node) {
  var deltaElements = -1; // since we removed an element

  (0, _ast.assertHasLoc)(node);
  var sectionName = (0, _helperWasmBytecode.getSectionForNode)(node);

  if (sectionName === "start") {
    var sectionMetadata = (0, _ast.getSectionMetadata)(ast, "start");
    /**
     * The start section only contains one element,
     * we need to remove the whole section
     */

    uint8Buffer = (0, _helperWasmSection.removeSections)(ast, uint8Buffer, "start");

    var _deltaBytes = -(sectionMetadata.size.value + 1);
    /* section id */


    return {
      uint8Buffer: uint8Buffer,
      deltaBytes: _deltaBytes,
      deltaElements: deltaElements
    };
  } // replacement is nothing


  var replacement = [];
  uint8Buffer = (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, // $FlowIgnore: assertHasLoc ensures that
  node.loc.start.column, // $FlowIgnore: assertHasLoc ensures that
  node.loc.end.column, replacement);
  /**
   * Update section
   */
  // $FlowIgnore: assertHasLoc ensures that

  var deltaBytes = -(node.loc.end.column - node.loc.start.column);
  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyAdd(ast, uint8Buffer, node) {
  var deltaElements = +1; // since we added an element

  var sectionName = (0, _helperWasmBytecode.getSectionForNode)(node);
  var sectionMetadata = (0, _ast.getSectionMetadata)(ast, sectionName); // Section doesn't exists, we create an empty one

  if (typeof sectionMetadata === "undefined") {
    var res = (0, _helperWasmSection.createEmptySection)(ast, uint8Buffer, sectionName);
    uint8Buffer = res.uint8Buffer;
    sectionMetadata = res.sectionMetadata;
  }
  /**
   * check that the expressions were ended
   */


  if ((0, _ast.isFunc)(node)) {
    // $FlowIgnore
    var body = node.body;

    if (body.length === 0 || body[body.length - 1].id !== "end") {
      throw new Error("expressions must be ended");
    }
  }

  if ((0, _ast.isGlobal)(node)) {
    // $FlowIgnore
    var body = node.init;

    if (body.length === 0 || body[body.length - 1].id !== "end") {
      throw new Error("expressions must be ended");
    }
  }
  /**
   * Add nodes
   */


  var newByteArray = (0, _wasmGen.encodeNode)(node); // The size of the section doesn't include the storage of the size itself
  // we need to manually add it here

  var start = (0, _ast.getEndOfSection)(sectionMetadata);
  var end = start;
  /**
   * Update section
   */

  var deltaBytes = newByteArray.length;
  uint8Buffer = (0, _helperBuffer.overrideBytesInBuffer)(uint8Buffer, start, end, newByteArray);
  node.loc = {
    start: {
      line: -1,
      column: start
    },
    end: {
      line: -1,
      column: start + deltaBytes
    }
  }; // for func add the additional metadata in the AST

  if (node.type === "Func") {
    // the size is the first byte
    // FIXME(sven): handle LEB128 correctly here
    var bodySize = newByteArray[0];
    node.metadata = {
      bodySize: bodySize
    };
  }

  if (node.type !== "IndexInFuncSection") {
    (0, _ast.orderedInsertNode)(ast.body[0], node);
  }

  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyOperations(ast, uint8Buffer, ops) {
  ops.forEach(function (op) {
    var state;
    var sectionName;

    switch (op.kind) {
      case "update":
        state = applyUpdate(ast, uint8Buffer, [op.oldNode, op.node]);
        sectionName = (0, _helperWasmBytecode.getSectionForNode)(op.node);
        break;

      case "delete":
        state = applyDelete(ast, uint8Buffer, op.node);
        sectionName = (0, _helperWasmBytecode.getSectionForNode)(op.node);
        break;

      case "add":
        state = applyAdd(ast, uint8Buffer, op.node);
        sectionName = (0, _helperWasmBytecode.getSectionForNode)(op.node);
        break;

      default:
        throw new Error("Unknown operation");
    }
    /**
     * Resize section vec size.
     * If the length of the LEB-encoded size changes, this can change
     * the byte length of the section and the offset for nodes in the
     * section. So we do this first before resizing section byte size
     * or shifting following operations' nodes.
     */


    if (state.deltaElements !== 0 && sectionName !== "start") {
      var oldBufferLength = state.uint8Buffer.length;
      state.uint8Buffer = (0, _helperWasmSection.resizeSectionVecSize)(ast, state.uint8Buffer, sectionName, state.deltaElements); // Infer bytes added/removed by comparing buffer lengths

      state.deltaBytes += state.uint8Buffer.length - oldBufferLength;
    }
    /**
     * Resize section byte size.
     * If the length of the LEB-encoded size changes, this can change
     * the offset for nodes in the section. So we do this before
     * shifting following operations' nodes.
     */


    if (state.deltaBytes !== 0 && sectionName !== "start") {
      var _oldBufferLength = state.uint8Buffer.length;
      state.uint8Buffer = (0, _helperWasmSection.resizeSectionByteSize)(ast, state.uint8Buffer, sectionName, state.deltaBytes); // Infer bytes added/removed by comparing buffer lengths

      state.deltaBytes += state.uint8Buffer.length - _oldBufferLength;
    }
    /**
     * Shift following operation's nodes
     */


    if (state.deltaBytes !== 0) {
      ops.forEach(function (op) {
        // We don't need to handle add ops, they are positioning independent
        switch (op.kind) {
          case "update":
            shiftLocNodeByDelta(op.oldNode, state.deltaBytes);
            break;

          case "delete":
            shiftLocNodeByDelta(op.node, state.deltaBytes);
            break;
        }
      });
    }

    uint8Buffer = state.uint8Buffer;
  });
  return uint8Buffer;
}