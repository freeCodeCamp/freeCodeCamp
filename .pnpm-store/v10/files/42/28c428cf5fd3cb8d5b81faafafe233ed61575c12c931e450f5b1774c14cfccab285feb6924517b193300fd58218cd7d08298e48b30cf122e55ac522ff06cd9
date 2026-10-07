"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeVersion = encodeVersion;
exports.encodeHeader = encodeHeader;
exports.encodeU32 = encodeU32;
exports.encodeI32 = encodeI32;
exports.encodeI64 = encodeI64;
exports.encodeVec = encodeVec;
exports.encodeValtype = encodeValtype;
exports.encodeMutability = encodeMutability;
exports.encodeUTF8Vec = encodeUTF8Vec;
exports.encodeLimits = encodeLimits;
exports.encodeModuleImport = encodeModuleImport;
exports.encodeSectionMetadata = encodeSectionMetadata;
exports.encodeCallInstruction = encodeCallInstruction;
exports.encodeCallIndirectInstruction = encodeCallIndirectInstruction;
exports.encodeModuleExport = encodeModuleExport;
exports.encodeTypeInstruction = encodeTypeInstruction;
exports.encodeInstr = encodeInstr;
exports.encodeStringLiteral = encodeStringLiteral;
exports.encodeGlobal = encodeGlobal;
exports.encodeFuncBody = encodeFuncBody;
exports.encodeIndexInFuncSection = encodeIndexInFuncSection;
exports.encodeElem = encodeElem;

var leb = _interopRequireWildcard(require("@webassemblyjs/leb128"));

var ieee754 = _interopRequireWildcard(require("@webassemblyjs/ieee754"));

var utf8 = _interopRequireWildcard(require("@webassemblyjs/utf8"));

var _helperWasmBytecode = _interopRequireDefault(require("@webassemblyjs/helper-wasm-bytecode"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function assertNotIdentifierNode(n) {
  if (n.type === "Identifier") {
    throw new Error("Unsupported node Identifier");
  }
}

function encodeVersion(v) {
  var bytes = _helperWasmBytecode["default"].moduleVersion;
  bytes[0] = v;
  return bytes;
}

function encodeHeader() {
  return _helperWasmBytecode["default"].magicModuleHeader;
}

function encodeU32(v) {
  var uint8view = new Uint8Array(leb.encodeU32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeI32(v) {
  var uint8view = new Uint8Array(leb.encodeI32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeI64(v) {
  var uint8view = new Uint8Array(leb.encodeI64(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeVec(elements) {
  var size = encodeU32(elements.length);
  return [].concat(_toConsumableArray(size), _toConsumableArray(elements));
}

function encodeValtype(v) {
  var _byte = _helperWasmBytecode["default"].valtypesByString[v];

  if (typeof _byte === "undefined") {
    throw new Error("Unknown valtype: " + v);
  }

  return parseInt(_byte, 10);
}

function encodeMutability(v) {
  var _byte2 = _helperWasmBytecode["default"].globalTypesByString[v];

  if (typeof _byte2 === "undefined") {
    throw new Error("Unknown mutability: " + v);
  }

  return parseInt(_byte2, 10);
}

function encodeUTF8Vec(str) {
  return encodeVec(utf8.encode(str));
}

function encodeLimits(n) {
  var out = [];

  if (typeof n.max === "number") {
    out.push(0x01);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min))); // $FlowIgnore: ensured by the typeof

    out.push.apply(out, _toConsumableArray(encodeU32(n.max)));
  } else {
    out.push(0x00);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min)));
  }

  return out;
}

function encodeModuleImport(n) {
  var out = [];
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.module)));
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));

  switch (n.descr.type) {
    case "GlobalType":
      {
        out.push(0x03); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeValtype(n.descr.valtype)); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeMutability(n.descr.mutability));
        break;
      }

    case "Memory":
      {
        out.push(0x02); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "Table":
      {
        out.push(0x01);
        out.push(0x70); // element type
        // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "FuncImportDescr":
      {
        out.push(0x00); // $FlowIgnore

        assertNotIdentifierNode(n.descr.id); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
        break;
      }

    default:
      throw new Error("Unsupport operation: encode module import of type: " + n.descr.type);
  }

  return out;
}

function encodeSectionMetadata(n) {
  var out = [];
  var sectionId = _helperWasmBytecode["default"].sections[n.section];

  if (typeof sectionId === "undefined") {
    throw new Error("Unknown section: " + n.section);
  }

  if (n.section === "start") {
    /**
     * This is not implemented yet because it's a special case which
     * doesn't have a vector in its section.
     */
    throw new Error("Unsupported section encoding of type start");
  }

  out.push(sectionId);
  out.push.apply(out, _toConsumableArray(encodeU32(n.size.value)));
  out.push.apply(out, _toConsumableArray(encodeU32(n.vectorOfSize.value)));
  return out;
}

function encodeCallInstruction(n) {
  var out = [];
  assertNotIdentifierNode(n.index);
  out.push(0x10); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value)));
  return out;
}

function encodeCallIndirectInstruction(n) {
  var out = []; // $FlowIgnore

  assertNotIdentifierNode(n.index);
  out.push(0x11); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value))); // add a reserved byte

  out.push(0x00);
  return out;
}

function encodeModuleExport(n) {
  var out = [];
  assertNotIdentifierNode(n.descr.id);
  var exportTypeByteString = _helperWasmBytecode["default"].exportTypesByName[n.descr.exportType];

  if (typeof exportTypeByteString === "undefined") {
    throw new Error("Unknown export of type: " + n.descr.exportType);
  }

  var exportTypeByte = parseInt(exportTypeByteString, 10);
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));
  out.push(exportTypeByte); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
  return out;
}

function encodeTypeInstruction(n) {
  var out = [0x60];
  var params = n.functype.params.map(function (x) {
    return x.valtype;
  }).map(encodeValtype);
  var results = n.functype.results.map(encodeValtype);
  out.push.apply(out, _toConsumableArray(encodeVec(params)));
  out.push.apply(out, _toConsumableArray(encodeVec(results)));
  return out;
}

function encodeInstr(n) {
  var out = [];
  var instructionName = n.id;

  if (typeof n.object === "string") {
    instructionName = "".concat(n.object, ".").concat(String(n.id));
  }

  var byteString = _helperWasmBytecode["default"].symbolsByName[instructionName];

  if (typeof byteString === "undefined") {
    throw new Error("encodeInstr: unknown instruction " + JSON.stringify(instructionName));
  }

  var _byte3 = parseInt(byteString, 10);

  out.push(_byte3);

  if (n.args) {
    n.args.forEach(function (arg) {
      var encoder = encodeU32; // find correct encoder

      if (n.object === "i32") {
        encoder = encodeI32;
      }

      if (n.object === "i64") {
        encoder = encodeI64;
      }

      if (n.object === "f32") {
        encoder = ieee754.encodeF32;
      }

      if (n.object === "f64") {
        encoder = ieee754.encodeF64;
      }

      if (arg.type === "NumberLiteral" || arg.type === "FloatLiteral" || arg.type === "LongNumberLiteral") {
        // $FlowIgnore
        out.push.apply(out, _toConsumableArray(encoder(arg.value)));
      } else {
        throw new Error("Unsupported instruction argument encoding " + JSON.stringify(arg.type));
      }
    });
  }

  return out;
}

function encodeExpr(instrs) {
  var out = [];
  instrs.forEach(function (instr) {
    // $FlowIgnore
    var n = (0, _index.encodeNode)(instr);
    out.push.apply(out, _toConsumableArray(n));
  });
  return out;
}

function encodeStringLiteral(n) {
  return encodeUTF8Vec(n.value);
}

function encodeGlobal(n) {
  var out = [];
  var _n$globalType = n.globalType,
      valtype = _n$globalType.valtype,
      mutability = _n$globalType.mutability;
  out.push(encodeValtype(valtype));
  out.push(encodeMutability(mutability));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.init)));
  return out;
}

function encodeFuncBody(n) {
  var out = [];
  out.push(-1); // temporary function body size
  // FIXME(sven): get the func locals?

  var localBytes = encodeVec([]);
  out.push.apply(out, _toConsumableArray(localBytes));
  var funcBodyBytes = encodeExpr(n.body);
  out[0] = funcBodyBytes.length + localBytes.length;
  out.push.apply(out, _toConsumableArray(funcBodyBytes));
  return out;
}

function encodeIndexInFuncSection(n) {
  assertNotIdentifierNode(n.index); // $FlowIgnore

  return encodeU32(n.index.value);
}

function encodeElem(n) {
  var out = [];
  assertNotIdentifierNode(n.table); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.table.value)));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.offset))); // $FlowIgnore

  var funcs = n.funcs.reduce(function (acc, x) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(encodeU32(x.value)));
  }, []);
  out.push.apply(out, _toConsumableArray(encodeVec(funcs)));
  return out;
}