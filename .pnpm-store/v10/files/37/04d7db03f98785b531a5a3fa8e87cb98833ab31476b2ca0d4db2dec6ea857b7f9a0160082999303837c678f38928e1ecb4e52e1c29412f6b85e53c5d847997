function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import * as leb from "@webassemblyjs/leb128";
import * as ieee754 from "@webassemblyjs/ieee754";
import * as utf8 from "@webassemblyjs/utf8";
import constants from "@webassemblyjs/helper-wasm-bytecode";
import { encodeNode } from "../index";

function assertNotIdentifierNode(n) {
  if (n.type === "Identifier") {
    throw new Error("Unsupported node Identifier");
  }
}

export function encodeVersion(v) {
  var bytes = constants.moduleVersion;
  bytes[0] = v;
  return bytes;
}
export function encodeHeader() {
  return constants.magicModuleHeader;
}
export function encodeU32(v) {
  var uint8view = new Uint8Array(leb.encodeU32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
export function encodeI32(v) {
  var uint8view = new Uint8Array(leb.encodeI32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
export function encodeI64(v) {
  var uint8view = new Uint8Array(leb.encodeI64(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
export function encodeVec(elements) {
  var size = encodeU32(elements.length);
  return [].concat(_toConsumableArray(size), _toConsumableArray(elements));
}
export function encodeValtype(v) {
  var _byte = constants.valtypesByString[v];

  if (typeof _byte === "undefined") {
    throw new Error("Unknown valtype: " + v);
  }

  return parseInt(_byte, 10);
}
export function encodeMutability(v) {
  var _byte2 = constants.globalTypesByString[v];

  if (typeof _byte2 === "undefined") {
    throw new Error("Unknown mutability: " + v);
  }

  return parseInt(_byte2, 10);
}
export function encodeUTF8Vec(str) {
  return encodeVec(utf8.encode(str));
}
export function encodeLimits(n) {
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
export function encodeModuleImport(n) {
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
export function encodeSectionMetadata(n) {
  var out = [];
  var sectionId = constants.sections[n.section];

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
export function encodeCallInstruction(n) {
  var out = [];
  assertNotIdentifierNode(n.index);
  out.push(0x10); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value)));
  return out;
}
export function encodeCallIndirectInstruction(n) {
  var out = []; // $FlowIgnore

  assertNotIdentifierNode(n.index);
  out.push(0x11); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value))); // add a reserved byte

  out.push(0x00);
  return out;
}
export function encodeModuleExport(n) {
  var out = [];
  assertNotIdentifierNode(n.descr.id);
  var exportTypeByteString = constants.exportTypesByName[n.descr.exportType];

  if (typeof exportTypeByteString === "undefined") {
    throw new Error("Unknown export of type: " + n.descr.exportType);
  }

  var exportTypeByte = parseInt(exportTypeByteString, 10);
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));
  out.push(exportTypeByte); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
  return out;
}
export function encodeTypeInstruction(n) {
  var out = [0x60];
  var params = n.functype.params.map(function (x) {
    return x.valtype;
  }).map(encodeValtype);
  var results = n.functype.results.map(encodeValtype);
  out.push.apply(out, _toConsumableArray(encodeVec(params)));
  out.push.apply(out, _toConsumableArray(encodeVec(results)));
  return out;
}
export function encodeInstr(n) {
  var out = [];
  var instructionName = n.id;

  if (typeof n.object === "string") {
    instructionName = "".concat(n.object, ".").concat(String(n.id));
  }

  var byteString = constants.symbolsByName[instructionName];

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
    var n = encodeNode(instr);
    out.push.apply(out, _toConsumableArray(n));
  });
  return out;
}

export function encodeStringLiteral(n) {
  return encodeUTF8Vec(n.value);
}
export function encodeGlobal(n) {
  var out = [];
  var _n$globalType = n.globalType,
      valtype = _n$globalType.valtype,
      mutability = _n$globalType.mutability;
  out.push(encodeValtype(valtype));
  out.push(encodeMutability(mutability));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.init)));
  return out;
}
export function encodeFuncBody(n) {
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
export function encodeIndexInFuncSection(n) {
  assertNotIdentifierNode(n.index); // $FlowIgnore

  return encodeU32(n.index.value);
}
export function encodeElem(n) {
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