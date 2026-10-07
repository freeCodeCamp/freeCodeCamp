"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAnonymous = isAnonymous;
exports.getSectionMetadata = getSectionMetadata;
exports.getSectionMetadatas = getSectionMetadatas;
exports.sortSectionMetadata = sortSectionMetadata;
exports.orderedInsertNode = orderedInsertNode;
exports.assertHasLoc = assertHasLoc;
exports.getEndOfSection = getEndOfSection;
exports.shiftLoc = shiftLoc;
exports.shiftSection = shiftSection;
exports.signatureForOpcode = signatureForOpcode;
exports.getUniqueNameGenerator = getUniqueNameGenerator;
exports.getStartByteOffset = getStartByteOffset;
exports.getEndByteOffset = getEndByteOffset;
exports.getFunctionBeginingByteOffset = getFunctionBeginingByteOffset;
exports.getEndBlockByteOffset = getEndBlockByteOffset;
exports.getStartBlockByteOffset = getStartBlockByteOffset;

var _signatures = require("./signatures");

var _traverse = require("./traverse");

var _helperWasmBytecode = _interopRequireWildcard(require("@webassemblyjs/helper-wasm-bytecode"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isAnonymous(ident) {
  return ident.raw === "";
}

function getSectionMetadata(ast, name) {
  var section;
  (0, _traverse.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata) {
      function SectionMetadata(_x) {
        return _SectionMetadata.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata.toString();
      };

      return SectionMetadata;
    }(function (_ref) {
      var node = _ref.node;

      if (node.section === name) {
        section = node;
      }
    })
  });
  return section;
}

function getSectionMetadatas(ast, name) {
  var sections = [];
  (0, _traverse.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata2) {
      function SectionMetadata(_x2) {
        return _SectionMetadata2.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata2.toString();
      };

      return SectionMetadata;
    }(function (_ref2) {
      var node = _ref2.node;

      if (node.section === name) {
        sections.push(node);
      }
    })
  });
  return sections;
}

function sortSectionMetadata(m) {
  if (m.metadata == null) {
    console.warn("sortSectionMetadata: no metadata to sort");
    return;
  } // $FlowIgnore


  m.metadata.sections.sort(function (a, b) {
    var aId = _helperWasmBytecode["default"].sections[a.section];
    var bId = _helperWasmBytecode["default"].sections[b.section];

    if (typeof aId !== "number" || typeof bId !== "number") {
      throw new Error("Section id not found");
    }

    return aId - bId;
  });
}

function orderedInsertNode(m, n) {
  assertHasLoc(n);
  var didInsert = false;

  if (n.type === "ModuleExport") {
    m.fields.push(n);
    return;
  }

  m.fields = m.fields.reduce(function (acc, field) {
    var fieldEndCol = Infinity;

    if (field.loc != null) {
      // $FlowIgnore
      fieldEndCol = field.loc.end.column;
    } // $FlowIgnore: assertHasLoc ensures that


    if (didInsert === false && n.loc.start.column < fieldEndCol) {
      didInsert = true;
      acc.push(n);
    }

    acc.push(field);
    return acc;
  }, []); // Handles empty modules or n is the last element

  if (didInsert === false) {
    m.fields.push(n);
  }
}

function assertHasLoc(n) {
  if (n.loc == null || n.loc.start == null || n.loc.end == null) {
    throw new Error("Internal failure: node (".concat(JSON.stringify(n.type), ") has no location information"));
  }
}

function getEndOfSection(s) {
  assertHasLoc(s.size);
  return s.startOffset + s.size.value + (s.size.loc.end.column - s.size.loc.start.column);
}

function shiftLoc(node, delta) {
  // $FlowIgnore
  node.loc.start.column += delta; // $FlowIgnore

  node.loc.end.column += delta;
}

function shiftSection(ast, node, delta) {
  if (node.type !== "SectionMetadata") {
    throw new Error("Can not shift node " + JSON.stringify(node.type));
  }

  node.startOffset += delta;

  if (_typeof(node.size.loc) === "object") {
    shiftLoc(node.size, delta);
  } // Custom sections doesn't have vectorOfSize


  if (_typeof(node.vectorOfSize) === "object" && _typeof(node.vectorOfSize.loc) === "object") {
    shiftLoc(node.vectorOfSize, delta);
  }

  var sectionName = node.section; // shift node locations within that section

  (0, _traverse.traverse)(ast, {
    Node: function Node(_ref3) {
      var node = _ref3.node;
      var section = (0, _helperWasmBytecode.getSectionForNode)(node);

      if (section === sectionName && _typeof(node.loc) === "object") {
        shiftLoc(node, delta);
      }
    }
  });
}

function signatureForOpcode(object, name) {
  var opcodeName = name;

  if (object !== undefined && object !== "") {
    opcodeName = object + "." + name;
  }

  var sign = _signatures.signatures[opcodeName];

  if (sign == undefined) {
    // TODO: Uncomment this when br_table and others has been done
    //throw new Error("Invalid opcode: "+opcodeName);
    return [object, object];
  }

  return sign[0];
}

function getUniqueNameGenerator() {
  var inc = {};
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

    if (!(prefix in inc)) {
      inc[prefix] = 0;
    } else {
      inc[prefix] = inc[prefix] + 1;
    }

    return prefix + "_" + inc[prefix];
  };
}

function getStartByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.start === "undefined") {
    throw new Error( // $FlowIgnore
    "Can not get byte offset without loc informations, node: " + String(n.id));
  }

  return n.loc.start.column;
}

function getEndByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.end === "undefined") {
    throw new Error("Can not get byte offset without loc informations, node: " + n.type);
  }

  return n.loc.end.column;
}

function getFunctionBeginingByteOffset(n) {
  if (!(n.body.length > 0)) {
    throw new Error('n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var _n$body = _slicedToArray(n.body, 1),
      firstInstruction = _n$body[0];

  return getStartByteOffset(firstInstruction);
}

function getEndBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var lastInstruction;

  if (n.instr) {
    // $FlowIgnore
    lastInstruction = n.instr[n.instr.length - 1];
  }

  if (n.body) {
    // $FlowIgnore
    lastInstruction = n.body[n.body.length - 1];
  }

  if (!(_typeof(lastInstruction) === "object")) {
    throw new Error('typeof lastInstruction === "object"' + " error: " + (undefined || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(lastInstruction);
}

function getStartBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var fistInstruction;

  if (n.instr) {
    // $FlowIgnore
    var _n$instr = _slicedToArray(n.instr, 1);

    fistInstruction = _n$instr[0];
  }

  if (n.body) {
    // $FlowIgnore
    var _n$body2 = _slicedToArray(n.body, 1);

    fistInstruction = _n$body2[0];
  }

  if (!(_typeof(fistInstruction) === "object")) {
    throw new Error('typeof fistInstruction === "object"' + " error: " + (undefined || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(fistInstruction);
}