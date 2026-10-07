"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getSectionForNode", {
  enumerable: true,
  get: function get() {
    return _section.getSectionForNode;
  }
});
exports["default"] = void 0;

var _section = require("./section");

var illegalop = "illegal";
var magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
var moduleVersion = [0x01, 0x00, 0x00, 0x00];

function invertMap(obj) {
  var keyModifierFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (k) {
    return k;
  };
  var result = {};
  var keys = Object.keys(obj);

  for (var i = 0, length = keys.length; i < length; i++) {
    result[keyModifierFn(obj[keys[i]])] = keys[i];
  }

  return result;
}

function createSymbolObject(name
/*: string */
, object
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return {
    name: name,
    object: object,
    numberOfArgs: numberOfArgs
  };
}

function createSymbol(name
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    name: name,
    numberOfArgs: numberOfArgs
  };
}

var types = {
  func: 0x60,
  result: 0x40
};
var exportTypes = {
  0x00: "Func",
  0x01: "Table",
  0x02: "Memory",
  0x03: "Global"
};
var exportTypesByName = invertMap(exportTypes);
var valtypes = {
  // numtype
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64",
  // vectype
  0x7b: "v128",
  // reftype
  0x70: "anyfunc",
  0x6f: "externref"
};
var valtypesByString = invertMap(valtypes);
var tableTypes = {
  0x70: "anyfunc",
  0x6f: "externref"
};
var blockTypes = Object.assign({}, valtypes, {
  // https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
  0x40: null,
  // https://webassembly.github.io/spec/core/binary/types.html#binary-valtype
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64"
});
var globalTypes = {
  0x00: "const",
  0x01: "var"
};
var globalTypesByString = invertMap(globalTypes);
var importTypes = {
  0x00: "func",
  0x01: "table",
  0x02: "memory",
  0x03: "global"
};
var sections = {
  custom: 0,
  type: 1,
  "import": 2,
  func: 3,
  table: 4,
  memory: 5,
  global: 6,
  "export": 7,
  start: 8,
  element: 9,
  code: 10,
  data: 11
};
var symbolsByByte = {
  0x00: createSymbol("unreachable"),
  0x01: createSymbol("nop"),
  0x02: createSymbol("block"),
  0x03: createSymbol("loop"),
  0x04: createSymbol("if"),
  0x05: createSymbol("else"),
  0x06: illegalop,
  0x07: illegalop,
  0x08: illegalop,
  0x09: illegalop,
  0x0a: illegalop,
  0x0b: createSymbol("end"),
  0x0c: createSymbol("br", 1),
  0x0d: createSymbol("br_if", 1),
  0x0e: createSymbol("br_table"),
  0x0f: createSymbol("return"),
  0x10: createSymbol("call", 1),
  0x11: createSymbol("call_indirect", 2),
  0x12: illegalop,
  0x13: illegalop,
  0x14: illegalop,
  0x15: illegalop,
  0x16: illegalop,
  0x17: illegalop,
  0x18: illegalop,
  0x19: illegalop,
  0x1a: createSymbol("drop"),
  0x1b: createSymbol("select"),
  0x1c: illegalop,
  0x1d: illegalop,
  0x1e: illegalop,
  0x1f: illegalop,
  0x20: createSymbol("get_local", 1),
  0x21: createSymbol("set_local", 1),
  0x22: createSymbol("tee_local", 1),
  0x23: createSymbol("get_global", 1),
  0x24: createSymbol("set_global", 1),
  0x25: createSymbol("table.get", 1),
  0x26: createSymbol("table.set", 1),
  0x27: illegalop,
  0x28: createSymbolObject("load", "u32", 1),
  0x29: createSymbolObject("load", "u64", 1),
  0x2a: createSymbolObject("load", "f32", 1),
  0x2b: createSymbolObject("load", "f64", 1),
  0x2c: createSymbolObject("load8_s", "u32", 1),
  0x2d: createSymbolObject("load8_u", "u32", 1),
  0x2e: createSymbolObject("load16_s", "u32", 1),
  0x2f: createSymbolObject("load16_u", "u32", 1),
  0x30: createSymbolObject("load8_s", "u64", 1),
  0x31: createSymbolObject("load8_u", "u64", 1),
  0x32: createSymbolObject("load16_s", "u64", 1),
  0x33: createSymbolObject("load16_u", "u64", 1),
  0x34: createSymbolObject("load32_s", "u64", 1),
  0x35: createSymbolObject("load32_u", "u64", 1),
  0x36: createSymbolObject("store", "u32", 1),
  0x37: createSymbolObject("store", "u64", 1),
  0x38: createSymbolObject("store", "f32", 1),
  0x39: createSymbolObject("store", "f64", 1),
  0x3a: createSymbolObject("store8", "u32", 1),
  0x3b: createSymbolObject("store16", "u32", 1),
  0x3c: createSymbolObject("store8", "u64", 1),
  0x3d: createSymbolObject("store16", "u64", 1),
  0x3e: createSymbolObject("store32", "u64", 1),
  0x3f: createSymbolObject("current_memory"),
  0x40: createSymbolObject("grow_memory"),
  0x41: createSymbolObject("const", "i32", 1),
  0x42: createSymbolObject("const", "i64", 1),
  0x43: createSymbolObject("const", "f32", 1),
  0x44: createSymbolObject("const", "f64", 1),
  0x45: createSymbolObject("eqz", "i32"),
  0x46: createSymbolObject("eq", "i32"),
  0x47: createSymbolObject("ne", "i32"),
  0x48: createSymbolObject("lt_s", "i32"),
  0x49: createSymbolObject("lt_u", "i32"),
  0x4a: createSymbolObject("gt_s", "i32"),
  0x4b: createSymbolObject("gt_u", "i32"),
  0x4c: createSymbolObject("le_s", "i32"),
  0x4d: createSymbolObject("le_u", "i32"),
  0x4e: createSymbolObject("ge_s", "i32"),
  0x4f: createSymbolObject("ge_u", "i32"),
  0x50: createSymbolObject("eqz", "i64"),
  0x51: createSymbolObject("eq", "i64"),
  0x52: createSymbolObject("ne", "i64"),
  0x53: createSymbolObject("lt_s", "i64"),
  0x54: createSymbolObject("lt_u", "i64"),
  0x55: createSymbolObject("gt_s", "i64"),
  0x56: createSymbolObject("gt_u", "i64"),
  0x57: createSymbolObject("le_s", "i64"),
  0x58: createSymbolObject("le_u", "i64"),
  0x59: createSymbolObject("ge_s", "i64"),
  0x5a: createSymbolObject("ge_u", "i64"),
  0x5b: createSymbolObject("eq", "f32"),
  0x5c: createSymbolObject("ne", "f32"),
  0x5d: createSymbolObject("lt", "f32"),
  0x5e: createSymbolObject("gt", "f32"),
  0x5f: createSymbolObject("le", "f32"),
  0x60: createSymbolObject("ge", "f32"),
  0x61: createSymbolObject("eq", "f64"),
  0x62: createSymbolObject("ne", "f64"),
  0x63: createSymbolObject("lt", "f64"),
  0x64: createSymbolObject("gt", "f64"),
  0x65: createSymbolObject("le", "f64"),
  0x66: createSymbolObject("ge", "f64"),
  0x67: createSymbolObject("clz", "i32"),
  0x68: createSymbolObject("ctz", "i32"),
  0x69: createSymbolObject("popcnt", "i32"),
  0x6a: createSymbolObject("add", "i32"),
  0x6b: createSymbolObject("sub", "i32"),
  0x6c: createSymbolObject("mul", "i32"),
  0x6d: createSymbolObject("div_s", "i32"),
  0x6e: createSymbolObject("div_u", "i32"),
  0x6f: createSymbolObject("rem_s", "i32"),
  0x70: createSymbolObject("rem_u", "i32"),
  0x71: createSymbolObject("and", "i32"),
  0x72: createSymbolObject("or", "i32"),
  0x73: createSymbolObject("xor", "i32"),
  0x74: createSymbolObject("shl", "i32"),
  0x75: createSymbolObject("shr_s", "i32"),
  0x76: createSymbolObject("shr_u", "i32"),
  0x77: createSymbolObject("rotl", "i32"),
  0x78: createSymbolObject("rotr", "i32"),
  0x79: createSymbolObject("clz", "i64"),
  0x7a: createSymbolObject("ctz", "i64"),
  0x7b: createSymbolObject("popcnt", "i64"),
  0x7c: createSymbolObject("add", "i64"),
  0x7d: createSymbolObject("sub", "i64"),
  0x7e: createSymbolObject("mul", "i64"),
  0x7f: createSymbolObject("div_s", "i64"),
  0x80: createSymbolObject("div_u", "i64"),
  0x81: createSymbolObject("rem_s", "i64"),
  0x82: createSymbolObject("rem_u", "i64"),
  0x83: createSymbolObject("and", "i64"),
  0x84: createSymbolObject("or", "i64"),
  0x85: createSymbolObject("xor", "i64"),
  0x86: createSymbolObject("shl", "i64"),
  0x87: createSymbolObject("shr_s", "i64"),
  0x88: createSymbolObject("shr_u", "i64"),
  0x89: createSymbolObject("rotl", "i64"),
  0x8a: createSymbolObject("rotr", "i64"),
  0x8b: createSymbolObject("abs", "f32"),
  0x8c: createSymbolObject("neg", "f32"),
  0x8d: createSymbolObject("ceil", "f32"),
  0x8e: createSymbolObject("floor", "f32"),
  0x8f: createSymbolObject("trunc", "f32"),
  0x90: createSymbolObject("nearest", "f32"),
  0x91: createSymbolObject("sqrt", "f32"),
  0x92: createSymbolObject("add", "f32"),
  0x93: createSymbolObject("sub", "f32"),
  0x94: createSymbolObject("mul", "f32"),
  0x95: createSymbolObject("div", "f32"),
  0x96: createSymbolObject("min", "f32"),
  0x97: createSymbolObject("max", "f32"),
  0x98: createSymbolObject("copysign", "f32"),
  0x99: createSymbolObject("abs", "f64"),
  0x9a: createSymbolObject("neg", "f64"),
  0x9b: createSymbolObject("ceil", "f64"),
  0x9c: createSymbolObject("floor", "f64"),
  0x9d: createSymbolObject("trunc", "f64"),
  0x9e: createSymbolObject("nearest", "f64"),
  0x9f: createSymbolObject("sqrt", "f64"),
  0xa0: createSymbolObject("add", "f64"),
  0xa1: createSymbolObject("sub", "f64"),
  0xa2: createSymbolObject("mul", "f64"),
  0xa3: createSymbolObject("div", "f64"),
  0xa4: createSymbolObject("min", "f64"),
  0xa5: createSymbolObject("max", "f64"),
  0xa6: createSymbolObject("copysign", "f64"),
  0xa7: createSymbolObject("wrap/i64", "i32"),
  0xa8: createSymbolObject("trunc_s/f32", "i32"),
  0xa9: createSymbolObject("trunc_u/f32", "i32"),
  0xaa: createSymbolObject("trunc_s/f64", "i32"),
  0xab: createSymbolObject("trunc_u/f64", "i32"),
  0xac: createSymbolObject("extend_s/i32", "i64"),
  0xad: createSymbolObject("extend_u/i32", "i64"),
  0xae: createSymbolObject("trunc_s/f32", "i64"),
  0xaf: createSymbolObject("trunc_u/f32", "i64"),
  0xb0: createSymbolObject("trunc_s/f64", "i64"),
  0xb1: createSymbolObject("trunc_u/f64", "i64"),
  0xb2: createSymbolObject("convert_s/i32", "f32"),
  0xb3: createSymbolObject("convert_u/i32", "f32"),
  0xb4: createSymbolObject("convert_s/i64", "f32"),
  0xb5: createSymbolObject("convert_u/i64", "f32"),
  0xb6: createSymbolObject("demote/f64", "f32"),
  0xb7: createSymbolObject("convert_s/i32", "f64"),
  0xb8: createSymbolObject("convert_u/i32", "f64"),
  0xb9: createSymbolObject("convert_s/i64", "f64"),
  0xba: createSymbolObject("convert_u/i64", "f64"),
  0xbb: createSymbolObject("promote/f32", "f64"),
  0xbc: createSymbolObject("reinterpret/f32", "i32"),
  0xbd: createSymbolObject("reinterpret/f64", "i64"),
  0xbe: createSymbolObject("reinterpret/i32", "f32"),
  0xbf: createSymbolObject("reinterpret/i64", "f64"),
  0xc0: createSymbolObject("extend8_s", "i32"),
  0xc1: createSymbolObject("extend16_s", "i32"),
  0xc2: createSymbolObject("extend8_s", "i64"),
  0xc3: createSymbolObject("extend16_s", "i64"),
  0xc4: createSymbolObject("extend32_s", "i64"),
  0xd0: createSymbol("ref.null"),
  0xd1: createSymbol("ref.is_null"),
  0xd2: createSymbol("ref.func", 1),
  0xfc0a: createSymbol("memory.copy"),
  0xfc0b: createSymbol("memory.fill"),
  // Table instructions
  // https://webassembly.github.io/spec/core/binary/instructions.html#table-instructions
  0xfc0c: createSymbol("table.init", 2),
  0xfc0d: createSymbol("elem.drop", 1),
  0xfc0e: createSymbol("table.copy", 2),
  0xfc0f: createSymbol("table.grow", 1),
  0xfc10: createSymbol("table.size", 1),
  0xfc11: createSymbol("table.fill", 1),
  // Atomic Memory Instructions
  0xfe00: createSymbol("memory.atomic.notify", 1),
  0xfe01: createSymbol("memory.atomic.wait32", 1),
  0xfe02: createSymbol("memory.atomic.wait64", 1),
  0xfe10: createSymbolObject("atomic.load", "i32", 1),
  0xfe11: createSymbolObject("atomic.load", "i64", 1),
  0xfe12: createSymbolObject("atomic.load8_u", "i32", 1),
  0xfe13: createSymbolObject("atomic.load16_u", "i32", 1),
  0xfe14: createSymbolObject("atomic.load8_u", "i64", 1),
  0xfe15: createSymbolObject("atomic.load16_u", "i64", 1),
  0xfe16: createSymbolObject("atomic.load32_u", "i64", 1),
  0xfe17: createSymbolObject("atomic.store", "i32", 1),
  0xfe18: createSymbolObject("atomic.store", "i64", 1),
  0xfe19: createSymbolObject("atomic.store8_u", "i32", 1),
  0xfe1a: createSymbolObject("atomic.store16_u", "i32", 1),
  0xfe1b: createSymbolObject("atomic.store8_u", "i64", 1),
  0xfe1c: createSymbolObject("atomic.store16_u", "i64", 1),
  0xfe1d: createSymbolObject("atomic.store32_u", "i64", 1),
  0xfe1e: createSymbolObject("atomic.rmw.add", "i32", 1),
  0xfe1f: createSymbolObject("atomic.rmw.add", "i64", 1),
  0xfe20: createSymbolObject("atomic.rmw8_u.add_u", "i32", 1),
  0xfe21: createSymbolObject("atomic.rmw16_u.add_u", "i32", 1),
  0xfe22: createSymbolObject("atomic.rmw8_u.add_u", "i64", 1),
  0xfe23: createSymbolObject("atomic.rmw16_u.add_u", "i64", 1),
  0xfe24: createSymbolObject("atomic.rmw32_u.add_u", "i64", 1),
  0xfe25: createSymbolObject("atomic.rmw.sub", "i32", 1),
  0xfe26: createSymbolObject("atomic.rmw.sub", "i64", 1),
  0xfe27: createSymbolObject("atomic.rmw8_u.sub_u", "i32", 1),
  0xfe28: createSymbolObject("atomic.rmw16_u.sub_u", "i32", 1),
  0xfe29: createSymbolObject("atomic.rmw8_u.sub_u", "i64", 1),
  0xfe2a: createSymbolObject("atomic.rmw16_u.sub_u", "i64", 1),
  0xfe2b: createSymbolObject("atomic.rmw32_u.sub_u", "i64", 1),
  0xfe2c: createSymbolObject("atomic.rmw.and", "i32", 1),
  0xfe2d: createSymbolObject("atomic.rmw.and", "i64", 1),
  0xfe2e: createSymbolObject("atomic.rmw8_u.and_u", "i32", 1),
  0xfe2f: createSymbolObject("atomic.rmw16_u.and_u", "i32", 1),
  0xfe30: createSymbolObject("atomic.rmw8_u.and_u", "i64", 1),
  0xfe31: createSymbolObject("atomic.rmw16_u.and_u", "i64", 1),
  0xfe32: createSymbolObject("atomic.rmw32_u.and_u", "i64", 1),
  0xfe33: createSymbolObject("atomic.rmw.or", "i32", 1),
  0xfe34: createSymbolObject("atomic.rmw.or", "i64", 1),
  0xfe35: createSymbolObject("atomic.rmw8_u.or_u", "i32", 1),
  0xfe36: createSymbolObject("atomic.rmw16_u.or_u", "i32", 1),
  0xfe37: createSymbolObject("atomic.rmw8_u.or_u", "i64", 1),
  0xfe38: createSymbolObject("atomic.rmw16_u.or_u", "i64", 1),
  0xfe39: createSymbolObject("atomic.rmw32_u.or_u", "i64", 1),
  0xfe3a: createSymbolObject("atomic.rmw.xor", "i32", 1),
  0xfe3b: createSymbolObject("atomic.rmw.xor", "i64", 1),
  0xfe3c: createSymbolObject("atomic.rmw8_u.xor_u", "i32", 1),
  0xfe3d: createSymbolObject("atomic.rmw16_u.xor_u", "i32", 1),
  0xfe3e: createSymbolObject("atomic.rmw8_u.xor_u", "i64", 1),
  0xfe3f: createSymbolObject("atomic.rmw16_u.xor_u", "i64", 1),
  0xfe40: createSymbolObject("atomic.rmw32_u.xor_u", "i64", 1),
  0xfe41: createSymbolObject("atomic.rmw.xchg", "i32", 1),
  0xfe42: createSymbolObject("atomic.rmw.xchg", "i64", 1),
  0xfe43: createSymbolObject("atomic.rmw8_u.xchg_u", "i32", 1),
  0xfe44: createSymbolObject("atomic.rmw16_u.xchg_u", "i32", 1),
  0xfe45: createSymbolObject("atomic.rmw8_u.xchg_u", "i64", 1),
  0xfe46: createSymbolObject("atomic.rmw16_u.xchg_u", "i64", 1),
  0xfe47: createSymbolObject("atomic.rmw32_u.xchg_u", "i64", 1),
  0xfe48: createSymbolObject("atomic.rmw.cmpxchg", "i32", 1),
  0xfe49: createSymbolObject("atomic.rmw.cmpxchg", "i64", 1),
  0xfe4a: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i32", 1),
  0xfe4b: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i32", 1),
  0xfe4c: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i64", 1),
  0xfe4d: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i64", 1),
  0xfe4e: createSymbolObject("atomic.rmw32_u.cmpxchg_u", "i64", 1)
};
var symbolsByName = invertMap(symbolsByByte, function (obj) {
  if (typeof obj.object === "string") {
    return "".concat(obj.object, ".").concat(obj.name);
  }

  return obj.name;
});
var _default = {
  symbolsByByte: symbolsByByte,
  sections: sections,
  magicModuleHeader: magicModuleHeader,
  moduleVersion: moduleVersion,
  types: types,
  valtypes: valtypes,
  exportTypes: exportTypes,
  blockTypes: blockTypes,
  tableTypes: tableTypes,
  globalTypes: globalTypes,
  importTypes: importTypes,
  valtypesByString: valtypesByString,
  globalTypesByString: globalTypesByString,
  exportTypesByName: exportTypesByName,
  symbolsByName: symbolsByName
};
exports["default"] = _default;