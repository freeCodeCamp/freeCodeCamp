"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = decode;

var _helperApiError = require("@webassemblyjs/helper-api-error");

var ieee754 = _interopRequireWildcard(require("@webassemblyjs/ieee754"));

var utf8 = _interopRequireWildcard(require("@webassemblyjs/utf8"));

var t = _interopRequireWildcard(require("@webassemblyjs/ast"));

var _leb = require("@webassemblyjs/leb128");

var _helperWasmBytecode = _interopRequireDefault(require("@webassemblyjs/helper-wasm-bytecode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function toHex(n) {
  return "0x" + Number(n).toString(16);
}

function byteArrayEq(l, r) {
  if (l.length !== r.length) {
    return false;
  }

  for (var i = 0; i < l.length; i++) {
    if (l[i] !== r[i]) {
      return false;
    }
  }

  return true;
}

function decode(ab, opts) {
  var buf = new Uint8Array(ab);
  var getUniqueName = t.getUniqueNameGenerator();
  var offset = 0;

  function getPosition() {
    return {
      line: -1,
      column: offset
    };
  }

  function dump(b, msg) {
    if (opts.dump === false) return;
    var pad = "\t\t\t\t\t\t\t\t\t\t";
    var str = "";

    if (b.length < 5) {
      str = b.map(toHex).join(" ");
    } else {
      str = "...";
    }

    console.log(toHex(offset) + ":\t", str, pad, ";", msg);
  }

  function dumpSep(msg) {
    if (opts.dump === false) return;
    console.log(";", msg);
  }
  /**
   * TODO(sven): we can atually use a same structure
   * we are adding incrementally new features
   */


  var state = {
    elementsInFuncSection: [],
    elementsInExportSection: [],
    elementsInCodeSection: [],

    /**
     * Decode memory from:
     * - Memory section
     */
    memoriesInModule: [],

    /**
     * Decoded types from:
     * - Type section
     */
    typesInModule: [],

    /**
     * Decoded functions from:
     * - Function section
     * - Import section
     */
    functionsInModule: [],

    /**
     * Decoded tables from:
     * - Table section
     */
    tablesInModule: [],

    /**
     * Decoded globals from:
     * - Global section
     */
    globalsInModule: []
  };

  function isEOF() {
    return offset >= buf.length;
  }

  function eatBytes(n) {
    offset = offset + n;
  }

  function readBytesAtOffset(_offset, numberOfBytes) {
    var arr = [];

    for (var i = 0; i < numberOfBytes; i++) {
      arr.push(buf[_offset + i]);
    }

    return arr;
  }

  function readBytes(numberOfBytes) {
    return readBytesAtOffset(offset, numberOfBytes);
  }

  function readF64() {
    var bytes = readBytes(ieee754.NUMBER_OF_BYTE_F64);
    var value = ieee754.decodeF64(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F64
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 16 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F64
      };
    }

    return {
      value: value,
      nextIndex: ieee754.NUMBER_OF_BYTE_F64
    };
  }

  function readF32() {
    var bytes = readBytes(ieee754.NUMBER_OF_BYTE_F32);
    var value = ieee754.decodeF32(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F32
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 128 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: ieee754.NUMBER_OF_BYTE_F32
      };
    }

    return {
      value: value,
      nextIndex: ieee754.NUMBER_OF_BYTE_F32
    };
  }

  function readUTF8String() {
    var lenu32 = readU32(); // Don't eat any bytes. Instead, peek ahead of the current offset using
    // readBytesAtOffset below. This keeps readUTF8String neutral with respect
    // to the current offset, just like the other readX functions.

    var strlen = lenu32.value;
    dump([strlen], "string length");
    var bytes = readBytesAtOffset(offset + lenu32.nextIndex, strlen);
    var value = utf8.decode(bytes);
    return {
      value: value,
      nextIndex: strlen + lenu32.nextIndex
    };
  }
  /**
   * Decode an unsigned 32bits integer
   *
   * The length will be handled by the leb librairy, we pass the max number of
   * byte.
   */


  function readU32() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U32);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }

  function readVaruint32() {
    // where 32 bits = max 4 bytes
    var bytes = readBytes(4);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }

  function readVaruint7() {
    // where 7 bits = max 1 bytes
    var bytes = readBytes(1);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt32)(buffer);
  }
  /**
   * Decode a signed 32bits interger
   */


  function read32() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U32);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeInt32)(buffer);
  }
  /**
   * Decode a signed 64bits integer
   */


  function read64() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U64);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeInt64)(buffer);
  }

  function readU64() {
    var bytes = readBytes(_leb.MAX_NUMBER_OF_BYTE_U64);
    var buffer = new Uint8Array(bytes);
    return (0, _leb.decodeUInt64)(buffer);
  }

  function readByte() {
    return readBytes(1)[0];
  }

  function parseModuleHeader() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var header = readBytes(4);

    if (byteArrayEq(_helperWasmBytecode["default"].magicModuleHeader, header) === false) {
      throw new _helperApiError.CompileError("magic header not detected");
    }

    dump(header, "wasm magic header");
    eatBytes(4);
  }

  function parseVersion() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var version = readBytes(4);

    if (byteArrayEq(_helperWasmBytecode["default"].moduleVersion, version) === false) {
      throw new _helperApiError.CompileError("unknown binary version");
    }

    dump(version, "wasm version");
    eatBytes(4);
  }

  function parseVec(cast) {
    var u32 = readU32();
    var length = u32.value;
    eatBytes(u32.nextIndex);
    dump([length], "number");

    if (length === 0) {
      return [];
    }

    var elements = [];

    for (var i = 0; i < length; i++) {
      var _byte = readByte();

      eatBytes(1);
      var value = cast(_byte);
      dump([_byte], value);

      if (typeof value === "undefined") {
        throw new _helperApiError.CompileError("Internal failure: parseVec could not cast the value");
      }

      elements.push(value);
    }

    return elements;
  } // Type section
  // https://webassembly.github.io/spec/binary/modules.html#binary-typesec


  function parseTypeSection(numberOfTypes) {
    var typeInstructionNodes = [];
    dump([numberOfTypes], "num types");

    for (var i = 0; i < numberOfTypes; i++) {
      var _startLoc = getPosition();

      dumpSep("type " + i);
      var type = readByte();
      eatBytes(1);

      if (type == _helperWasmBytecode["default"].types.func) {
        dump([type], "func");
        var paramValtypes = parseVec(function (b) {
          var valtype = _helperWasmBytecode["default"].valtypes[b];

          if (valtype === undefined) {
            throw new Error("unexpected value type ".concat(b));
          }

          return valtype;
        });
        var params = paramValtypes.map(function (v) {
          return t.funcParam(
          /*valtype*/
          v);
        });
        var result = parseVec(function (b) {
          return _helperWasmBytecode["default"].valtypes[b];
        });
        typeInstructionNodes.push(function () {
          var endLoc = getPosition();
          return t.withLoc(t.typeInstruction(undefined, t.signature(params, result)), endLoc, _startLoc);
        }());
        state.typesInModule.push({
          params: params,
          result: result
        });
      } else {
        throw new Error("Unsupported type: " + toHex(type));
      }
    }

    return typeInstructionNodes;
  } // Import section
  // https://webassembly.github.io/spec/binary/modules.html#binary-importsec


  function parseImportSection(numberOfImports) {
    var imports = [];

    for (var i = 0; i < numberOfImports; i++) {
      dumpSep("import header " + i);

      var _startLoc2 = getPosition();
      /**
       * Module name
       */


      var moduleName = readUTF8String();
      eatBytes(moduleName.nextIndex);
      dump([], "module name (".concat(moduleName.value, ")"));
      /**
       * Name
       */

      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "name (".concat(name.value, ")"));
      /**
       * Import descr
       */

      var descrTypeByte = readByte();
      eatBytes(1);
      var descrType = _helperWasmBytecode["default"].importTypes[descrTypeByte];
      dump([descrTypeByte], "import kind");

      if (typeof descrType === "undefined") {
        throw new _helperApiError.CompileError("Unknown import description type: " + toHex(descrTypeByte));
      }

      var importDescr = void 0;

      if (descrType === "func") {
        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _helperApiError.CompileError("function signature not found (".concat(typeindex, ")"));
        }

        var id = getUniqueName("func");
        importDescr = t.funcImportDescr(id, t.signature(signature.params, signature.result));
        state.functionsInModule.push({
          id: t.identifier(name.value),
          signature: signature,
          isExternal: true
        });
      } else if (descrType === "global") {
        importDescr = parseGlobalType();
        var globalNode = t.global(importDescr, []);
        state.globalsInModule.push(globalNode);
      } else if (descrType === "table") {
        importDescr = parseTableType(i);
      } else if (descrType === "memory") {
        var memoryNode = parseMemoryType(0);
        state.memoriesInModule.push(memoryNode);
        importDescr = memoryNode;
      } else {
        throw new _helperApiError.CompileError("Unsupported import of type: " + descrType);
      }

      imports.push(function () {
        var endLoc = getPosition();
        return t.withLoc(t.moduleImport(moduleName.value, name.value, importDescr), endLoc, _startLoc2);
      }());
    }

    return imports;
  } // Function section
  // https://webassembly.github.io/spec/binary/modules.html#function-section


  function parseFuncSection(numberOfFunctions) {
    dump([numberOfFunctions], "num funcs");

    for (var i = 0; i < numberOfFunctions; i++) {
      var indexU32 = readU32();
      var typeindex = indexU32.value;
      eatBytes(indexU32.nextIndex);
      dump([typeindex], "type index");
      var signature = state.typesInModule[typeindex];

      if (typeof signature === "undefined") {
        throw new _helperApiError.CompileError("function signature not found (".concat(typeindex, ")"));
      } // preserve anonymous, a name might be resolved later


      var id = t.withRaw(t.identifier(getUniqueName("func")), "");
      state.functionsInModule.push({
        id: id,
        signature: signature,
        isExternal: false
      });
    }
  } // Export section
  // https://webassembly.github.io/spec/binary/modules.html#export-section


  function parseExportSection(numberOfExport) {
    dump([numberOfExport], "num exports"); // Parse vector of exports

    for (var i = 0; i < numberOfExport; i++) {
      var _startLoc3 = getPosition();
      /**
       * Name
       */


      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "export name (".concat(name.value, ")"));
      /**
       * exportdescr
       */

      var typeIndex = readByte();
      eatBytes(1);
      dump([typeIndex], "export kind");
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      dump([index], "export index");
      var id = void 0,
          signature = void 0;

      if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Func") {
        var func = state.functionsInModule[index];

        if (typeof func === "undefined") {
          throw new _helperApiError.CompileError("unknown function (".concat(index, ")"));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = func.signature;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Table") {
        var table = state.tablesInModule[index];

        if (typeof table === "undefined") {
          throw new _helperApiError.CompileError("unknown table ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Memory") {
        var memNode = state.memoriesInModule[index];

        if (typeof memNode === "undefined") {
          throw new _helperApiError.CompileError("unknown memory ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_helperWasmBytecode["default"].exportTypes[typeIndex] === "Global") {
        var global = state.globalsInModule[index];

        if (typeof global === "undefined") {
          throw new _helperApiError.CompileError("unknown global ".concat(index));
        }

        id = t.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else {
        console.warn("Unsupported export type: " + toHex(typeIndex));
        return;
      }

      var endLoc = getPosition();
      state.elementsInExportSection.push({
        name: name.value,
        type: _helperWasmBytecode["default"].exportTypes[typeIndex],
        signature: signature,
        id: id,
        index: index,
        endLoc: endLoc,
        startLoc: _startLoc3
      });
    }
  } // Code section
  // https://webassembly.github.io/spec/binary/modules.html#code-section


  function parseCodeSection(numberOfFuncs) {
    dump([numberOfFuncs], "number functions"); // Parse vector of function

    for (var i = 0; i < numberOfFuncs; i++) {
      var _startLoc4 = getPosition();

      dumpSep("function body " + i); // the u32 size of the function code in bytes
      // Ignore it for now

      var bodySizeU32 = readU32();
      eatBytes(bodySizeU32.nextIndex);
      dump([bodySizeU32.value], "function body size");
      var code = []; // Parse locals

      var funcLocalNumU32 = readU32();
      var funcLocalNum = funcLocalNumU32.value;
      eatBytes(funcLocalNumU32.nextIndex);
      dump([funcLocalNum], "num locals");
      var locals = [];

      for (var _i = 0; _i < funcLocalNum; _i++) {
        var _startLoc5 = getPosition();

        var localCountU32 = readU32();
        var localCount = localCountU32.value;
        eatBytes(localCountU32.nextIndex);
        dump([localCount], "num local");
        var valtypeByte = readByte();
        eatBytes(1);
        var type = _helperWasmBytecode["default"].valtypes[valtypeByte];
        var args = [];

        for (var _i2 = 0; _i2 < localCount; _i2++) {
          args.push(t.valtypeLiteral(type));
        }

        var localNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.instruction("local", args), endLoc, _startLoc5);
        }();

        locals.push(localNode);
        dump([valtypeByte], type);

        if (typeof type === "undefined") {
          throw new _helperApiError.CompileError("Unexpected valtype: " + toHex(valtypeByte));
        }
      }

      code.push.apply(code, locals); // Decode instructions until the end

      parseInstructionBlock(code);
      var endLoc = getPosition();
      state.elementsInCodeSection.push({
        code: code,
        locals: locals,
        endLoc: endLoc,
        startLoc: _startLoc4,
        bodySize: bodySizeU32.value
      });
    }
  }

  function parseInstructionBlock(code) {
    while (true) {
      var _startLoc6 = getPosition();

      var instructionAlreadyCreated = false;
      var instructionByte = readByte();
      eatBytes(1);

      if (instructionByte === 0xfe) {
        instructionByte = 0xfe00 + readByte();
        eatBytes(1);
      } // Table instructions
      // https://webassembly.github.io/spec/core/binary/instructions.html#table-instructions


      if (instructionByte === 0xfc) {
        instructionByte = 0xfc00 + readByte();
        eatBytes(1);
      }

      var instruction = _helperWasmBytecode["default"].symbolsByByte[instructionByte];

      if (typeof instruction === "undefined") {
        throw new _helperApiError.CompileError("Unexpected instruction: " + toHex(instructionByte));
      }

      if (instruction === "illegal") {
        throw new Error("tried to decode an illegal bytecode: ".concat(toHex(instructionByte)));
      }

      if (typeof instruction.object === "string") {
        dump([instructionByte], "".concat(instruction.object, ".").concat(instruction.name));
      } else {
        dump([instructionByte], instruction.name);
      }
      /**
       * End of the function
       */


      if (instruction.name === "end") {
        var node = function () {
          var endLoc = getPosition();
          return t.withLoc(t.instruction(instruction.name), endLoc, _startLoc6);
        }();

        code.push(node);
        break;
      }

      var args = [];
      var namedArgs = void 0;

      if (instruction.name === "loop") {
        var _startLoc7 = getPosition();

        var blocktype = parseBlockType();
        var instr = [];
        parseInstructionBlock(instr); // preserve anonymous

        var label = t.withRaw(t.identifier(getUniqueName("loop")), "");

        var loopNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.loopInstruction(label, blocktype, instr), endLoc, _startLoc7);
        }();

        code.push(loopNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "if") {
        var _startLoc8 = getPosition();

        var _blocktype = parseBlockType();

        var testIndex = t.withRaw(t.identifier(getUniqueName("if")), "");
        var ifBody = [];
        parseInstructionBlock(ifBody); // Defaults to no alternate

        var elseIndex = 0;

        for (elseIndex = 0; elseIndex < ifBody.length; ++elseIndex) {
          var _instr = ifBody[elseIndex];

          if (_instr.type === "Instr" && _instr.id === "else") {
            break;
          }
        }

        var consequentInstr = ifBody.slice(0, elseIndex);
        var alternate = ifBody.slice(elseIndex + 1); // wast sugar

        var testInstrs = [];

        var ifNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.ifInstruction(testIndex, testInstrs, _blocktype, consequentInstr, alternate), endLoc, _startLoc8);
        }();

        code.push(ifNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "block") {
        var _startLoc9 = getPosition();

        var _blocktype2 = parseBlockType();

        var _instr2 = [];
        parseInstructionBlock(_instr2); // preserve anonymous

        var _label = t.withRaw(t.identifier(getUniqueName("block")), "");

        var blockNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.blockInstruction(_label, _instr2, _blocktype2), endLoc, _startLoc9);
        }();

        code.push(blockNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call") {
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        dump([index], "index");

        var callNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.callInstruction(t.indexLiteral(index)), endLoc, _startLoc6);
        }();

        code.push(callNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call_indirect") {
        var _startLoc10 = getPosition();

        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _helperApiError.CompileError("call_indirect signature not found (".concat(typeindex, ")"));
        }

        var _callNode = t.callIndirectInstruction(t.signature(signature.params, signature.result), []);

        var flagU32 = readU32();
        var flag = flagU32.value; // 0x00 - reserved byte

        eatBytes(flagU32.nextIndex);

        if (flag !== 0) {
          throw new _helperApiError.CompileError("zero flag expected");
        }

        code.push(function () {
          var endLoc = getPosition();
          return t.withLoc(_callNode, endLoc, _startLoc10);
        }());
        instructionAlreadyCreated = true;
      } else if (instruction.name === "br_table") {
        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");

        for (var i = 0; i <= indices; i++) {
          var _indexu = readU32();

          var _index = _indexu.value;
          eatBytes(_indexu.nextIndex);
          dump([_index], "index");
          args.push(t.numberLiteralFromRaw(_indexu.value.toString(), "u32"));
        }
      } else if (instructionByte >= 0x28 && instructionByte <= 0x40) {
        /**
         * Memory instructions
         */
        if (instruction.name === "grow_memory" || instruction.name === "current_memory") {
          var _indexU = readU32();

          var _index2 = _indexU.value;
          eatBytes(_indexU.nextIndex);

          if (_index2 !== 0) {
            throw new Error("zero flag expected");
          }

          dump([_index2], "index");
        } else {
          var aligun32 = readU32();
          var align = aligun32.value;
          eatBytes(aligun32.nextIndex);
          dump([align], "align");
          var offsetu32 = readU32();
          var _offset2 = offsetu32.value;
          eatBytes(offsetu32.nextIndex);
          dump([_offset2], "offset");
          if (namedArgs === undefined) namedArgs = {};
          namedArgs.offset = t.numberLiteralFromRaw(_offset2);
        }
      } else if (instructionByte >= 0x41 && instructionByte <= 0x44) {
        /**
         * Numeric instructions
         */
        if (instruction.object === "i32") {
          var value32 = read32();
          var value = value32.value;
          eatBytes(value32.nextIndex);
          dump([value], "i32 value");
          args.push(t.numberLiteralFromRaw(value));
        }

        if (instruction.object === "u32") {
          var valueu32 = readU32();
          var _value = valueu32.value;
          eatBytes(valueu32.nextIndex);
          dump([_value], "u32 value");
          args.push(t.numberLiteralFromRaw(_value));
        }

        if (instruction.object === "i64") {
          var value64 = read64();
          var _value2 = value64.value;
          eatBytes(value64.nextIndex);
          dump([Number(_value2.toString())], "i64 value");
          var high = _value2.high,
              low = _value2.low;
          var _node = {
            type: "LongNumberLiteral",
            value: {
              high: high,
              low: low
            }
          };
          args.push(_node);
        }

        if (instruction.object === "u64") {
          var valueu64 = readU64();
          var _value3 = valueu64.value;
          eatBytes(valueu64.nextIndex);
          dump([Number(_value3.toString())], "u64 value");
          var _high = _value3.high,
              _low = _value3.low;
          var _node2 = {
            type: "LongNumberLiteral",
            value: {
              high: _high,
              low: _low
            }
          };
          args.push(_node2);
        }

        if (instruction.object === "f32") {
          var valuef32 = readF32();
          var _value4 = valuef32.value;
          eatBytes(valuef32.nextIndex);
          dump([_value4], "f32 value");
          args.push( // $FlowIgnore
          t.floatLiteral(_value4, valuef32.nan, valuef32.inf, String(_value4)));
        }

        if (instruction.object === "f64") {
          var valuef64 = readF64();
          var _value5 = valuef64.value;
          eatBytes(valuef64.nextIndex);
          dump([_value5], "f64 value");
          args.push( // $FlowIgnore
          t.floatLiteral(_value5, valuef64.nan, valuef64.inf, String(_value5)));
        }
      } else if (instructionByte >= 0xfe00 && instructionByte <= 0xfeff) {
        /**
         * Atomic memory instructions
         */
        var align32 = readU32();
        var _align = align32.value;
        eatBytes(align32.nextIndex);
        dump([_align], "align");

        var _offsetu = readU32();

        var _offset3 = _offsetu.value;
        eatBytes(_offsetu.nextIndex);
        dump([_offset3], "offset");
      } else {
        for (var _i3 = 0; _i3 < instruction.numberOfArgs; _i3++) {
          var u32 = readU32();
          eatBytes(u32.nextIndex);
          dump([u32.value], "argument " + _i3);
          args.push(t.numberLiteralFromRaw(u32.value));
        }
      }

      if (instructionAlreadyCreated === false) {
        if (typeof instruction.object === "string") {
          var _node3 = function () {
            var endLoc = getPosition();
            return t.withLoc(t.objectInstruction(instruction.name, instruction.object, args, namedArgs), endLoc, _startLoc6);
          }();

          code.push(_node3);
        } else {
          var _node4 = function () {
            var endLoc = getPosition();
            return t.withLoc(t.instruction(instruction.name, args, namedArgs), endLoc, _startLoc6);
          }();

          code.push(_node4);
        }
      }
    }
  } // https://webassembly.github.io/spec/core/binary/types.html#limits


  function parseLimits() {
    var limitType = readByte();
    eatBytes(1);
    var shared = limitType === 0x03;
    dump([limitType], "limit type" + (shared ? " (shared)" : ""));
    var min, max;

    if (limitType === 0x01 || limitType === 0x03 // shared limits
    ) {
      var u32min = readU32();
      min = parseInt(u32min.value);
      eatBytes(u32min.nextIndex);
      dump([min], "min");
      var u32max = readU32();
      max = parseInt(u32max.value);
      eatBytes(u32max.nextIndex);
      dump([max], "max");
    }

    if (limitType === 0x00) {
      var _u32min = readU32();

      min = parseInt(_u32min.value);
      eatBytes(_u32min.nextIndex);
      dump([min], "min");
    }

    return t.limit(min, max, shared);
  } // https://webassembly.github.io/spec/core/binary/types.html#binary-tabletype


  function parseTableType(index) {
    var name = t.withRaw(t.identifier(getUniqueName("table")), String(index));
    var elementTypeByte = readByte();
    eatBytes(1);
    dump([elementTypeByte], "element type");
    var elementType = _helperWasmBytecode["default"].tableTypes[elementTypeByte];

    if (typeof elementType === "undefined") {
      throw new _helperApiError.CompileError("Unknown element type in table: " + toHex(elementTypeByte));
    }

    var limits = parseLimits();
    return t.table(elementType, limits, name);
  } // https://webassembly.github.io/spec/binary/types.html#global-types


  function parseGlobalType() {
    var valtypeByte = readByte();
    eatBytes(1);
    var type = _helperWasmBytecode["default"].valtypes[valtypeByte];
    dump([valtypeByte], type);

    if (typeof type === "undefined") {
      throw new _helperApiError.CompileError("Unknown valtype: " + toHex(valtypeByte));
    }

    var globalTypeByte = readByte();
    eatBytes(1);
    var globalType = _helperWasmBytecode["default"].globalTypes[globalTypeByte];
    dump([globalTypeByte], "global type (".concat(globalType, ")"));

    if (typeof globalType === "undefined") {
      throw new _helperApiError.CompileError("Invalid mutability: " + toHex(globalTypeByte));
    }

    return t.globalType(type, globalType);
  } // function parseNameModule() {
  //   const lenu32 = readVaruint32();
  //   eatBytes(lenu32.nextIndex);
  //   console.log("len", lenu32);
  //   const strlen = lenu32.value;
  //   dump([strlen], "string length");
  //   const bytes = readBytes(strlen);
  //   eatBytes(strlen);
  //   const value = utf8.decode(bytes);
  //   return [t.moduleNameMetadata(value)];
  // }
  // this section contains an array of function names and indices


  function parseNameSectionFunctions() {
    var functionNames = [];
    var numberOfFunctionsu32 = readU32();
    var numbeOfFunctions = numberOfFunctionsu32.value;
    eatBytes(numberOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      var name = readUTF8String();
      eatBytes(name.nextIndex);
      functionNames.push(t.functionNameMetadata(name.value, index));
    }

    return functionNames;
  }

  function parseNameSectionLocals() {
    var localNames = [];
    var numbeOfFunctionsu32 = readU32();
    var numbeOfFunctions = numbeOfFunctionsu32.value;
    eatBytes(numbeOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var functionIndexu32 = readU32();
      var functionIndex = functionIndexu32.value;
      eatBytes(functionIndexu32.nextIndex);
      var numLocalsu32 = readU32();
      var numLocals = numLocalsu32.value;
      eatBytes(numLocalsu32.nextIndex);

      for (var _i4 = 0; _i4 < numLocals; _i4++) {
        var localIndexu32 = readU32();
        var localIndex = localIndexu32.value;
        eatBytes(localIndexu32.nextIndex);
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        localNames.push(t.localNameMetadata(name.value, localIndex, functionIndex));
      }
    }

    return localNames;
  } // this is a custom section used for name resolution
  // https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section


  function parseNameSection(remainingBytes) {
    var nameMetadata = [];
    var initialOffset = offset;

    while (offset - initialOffset < remainingBytes) {
      // name_type
      var sectionTypeByte = readVaruint7();
      eatBytes(sectionTypeByte.nextIndex); // name_payload_len

      var subSectionSizeInBytesu32 = readVaruint32();
      eatBytes(subSectionSizeInBytesu32.nextIndex);

      switch (sectionTypeByte.value) {
        // case 0: {
        // TODO(sven): re-enable that
        // Current status: it seems that when we decode the module's name
        // no name_payload_len is used.
        //
        // See https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section
        //
        // nameMetadata.push(...parseNameModule());
        // break;
        // }
        case 1:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionFunctions()));
            break;
          }

        case 2:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionLocals()));
            break;
          }

        default:
          {
            // skip unknown subsection
            eatBytes(subSectionSizeInBytesu32.value);
          }
      }
    }

    return nameMetadata;
  } // this is a custom section used for information about the producers
  // https://github.com/WebAssembly/tool-conventions/blob/master/ProducersSection.md


  function parseProducersSection() {
    var metadata = t.producersSectionMetadata([]); // field_count

    var sectionTypeByte = readVaruint32();
    eatBytes(sectionTypeByte.nextIndex);
    dump([sectionTypeByte.value], "num of producers");
    var fields = {
      language: [],
      "processed-by": [],
      sdk: []
    }; // fields

    for (var fieldI = 0; fieldI < sectionTypeByte.value; fieldI++) {
      // field_name
      var fieldName = readUTF8String();
      eatBytes(fieldName.nextIndex); // field_value_count

      var valueCount = readVaruint32();
      eatBytes(valueCount.nextIndex); // field_values

      for (var producerI = 0; producerI < valueCount.value; producerI++) {
        var producerName = readUTF8String();
        eatBytes(producerName.nextIndex);
        var producerVersion = readUTF8String();
        eatBytes(producerVersion.nextIndex);
        fields[fieldName.value].push(t.producerMetadataVersionedName(producerName.value, producerVersion.value));
      }

      metadata.producers.push(fields[fieldName.value]);
    }

    return metadata;
  }

  function parseGlobalSection(numberOfGlobals) {
    var globals = [];
    dump([numberOfGlobals], "num globals");

    for (var i = 0; i < numberOfGlobals; i++) {
      var _startLoc11 = getPosition();

      var globalType = parseGlobalType();
      /**
       * Global expressions
       */

      var init = [];
      parseInstructionBlock(init);

      var node = function () {
        var endLoc = getPosition();
        return t.withLoc(t.global(globalType, init), endLoc, _startLoc11);
      }();

      globals.push(node);
      state.globalsInModule.push(node);
    }

    return globals;
  }

  function parseElemSection(numberOfElements) {
    var elems = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var _startLoc12 = getPosition();

      var tableindexu32 = readU32();
      var bitfield = tableindexu32.value;
      eatBytes(tableindexu32.nextIndex);
      dump([bitfield], "bitfield");

      if (bitfield === 0) {
        // Parse instructions
        var instr = [];
        parseInstructionBlock(instr); // Parse ( vector function index ) *

        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");
        var indexValues = [];

        for (var _i5 = 0; _i5 < indices; _i5++) {
          var indexu32 = readU32();
          var index = indexu32.value;
          eatBytes(indexu32.nextIndex);
          dump([index], "index");
          indexValues.push(t.indexLiteral(index));
        }

        var elemNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.elem(t.indexLiteral(bitfield), instr, indexValues), endLoc, _startLoc12);
        }();

        elems.push(elemNode);
      } else if (bitfield === 1) {
        var elemKind = readByte();
        eatBytes(1);

        if (elemKind !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(elemKind)));
        } // Parse ( vector function index ) *


        var _indicesu = readU32();

        var _indices = _indicesu.value;
        eatBytes(_indicesu.nextIndex);
        dump([_indices], "num indices");
        var _indexValues = [];

        for (var _i6 = 0; _i6 < _indices; _i6++) {
          var _indexu2 = readU32();

          var _index3 = _indexu2.value;
          eatBytes(_indexu2.nextIndex);
          dump([_index3], "index");

          _indexValues.push(t.indexLiteral(_index3));
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 2) {
        var u32 = readU32();
        var tableidx = u32.value;
        eatBytes(u32.nextIndex);
        dump([tableidx], "tableidx"); // Parse instructions

        var _instr3 = [];
        parseInstructionBlock(_instr3);

        var _elemKind = readByte();

        eatBytes(1);

        if (_elemKind !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(_elemKind)));
        } // Parse ( vector function index ) *


        var _indicesu2 = readU32();

        var _indices2 = _indicesu2.value;
        eatBytes(_indicesu2.nextIndex);
        dump([_indices2], "num indices");
        var _indexValues2 = [];

        for (var _i7 = 0; _i7 < _indices2; _i7++) {
          var _indexu3 = readU32();

          var _index4 = _indexu3.value;
          eatBytes(_indexu3.nextIndex);
          dump([_index4], "index");

          _indexValues2.push(t.indexLiteral(_index4));
        }

        var _elemNode = function () {
          var endLoc = getPosition();
          return t.withLoc(t.elem(t.indexLiteral(bitfield), _instr3, _indexValues2), endLoc, _startLoc12);
        }();

        elems.push(_elemNode);
      } else if (bitfield === 3) {
        var _elemKind2 = readByte();

        eatBytes(1);

        if (_elemKind2 !== 0) {
          throw new Error("unexpected Elem kind: ".concat(toHex(_elemKind2)));
        } // Parse ( vector function index ) *


        var countU32 = readU32();
        var count = countU32.value;
        eatBytes(countU32.nextIndex);
        dump([count], "count");

        for (var _i8 = 0; _i8 < count; _i8++) {
          var _indexu4 = readU32();

          var _index5 = _indexu4.value;
          eatBytes(_indexu4.nextIndex);
          dump([_index5], "index");
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 4) {
        var expr = [];
        parseInstructionBlock(expr);

        var _countU = readU32();

        var _count = _countU.value;
        eatBytes(_countU.nextIndex);
        dump([_count], "count");

        for (var _i9 = 0; _i9 < _count; _i9++) {
          var code = [];
          parseInstructionBlock(code);
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 5) {
        var reftype = readByte();
        eatBytes(1);
        dump([reftype], "reftype");

        var _countU2 = readU32();

        var _count2 = _countU2.value;
        eatBytes(_countU2.nextIndex);
        dump([_count2], "count");

        for (var _i10 = 0; _i10 < _count2; _i10++) {
          var _code = [];
          parseInstructionBlock(_code);
        } // TODO: emit a AST node, for now just make it parse.

      } else if (bitfield === 7) {
        var _reftype = readByte();

        eatBytes(1);
        dump([_reftype], "reftype");

        var _countU3 = readU32();

        var _count3 = _countU3.value;
        eatBytes(_countU3.nextIndex);
        dump([_count3], "count");

        for (var _i11 = 0; _i11 < _count3; _i11++) {
          var _code2 = [];
          parseInstructionBlock(_code2);
        } // TODO: emit a AST node, for now just make it parse.

      } else {
        throw new Error("unexpected Elem with bitfield ".concat(toHex(bitfield)));
      }
    }

    return elems;
  } // https://webassembly.github.io/spec/core/binary/types.html#memory-types


  function parseMemoryType(i) {
    var limits = parseLimits();
    return t.memory(limits, t.indexLiteral(i));
  } // https://webassembly.github.io/spec/binary/modules.html#table-section


  function parseTableSection(numberOfElements) {
    var tables = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var tablesNode = parseTableType(i);
      state.tablesInModule.push(tablesNode);
      tables.push(tablesNode);
    }

    return tables;
  } // https://webassembly.github.io/spec/binary/modules.html#memory-section


  function parseMemorySection(numberOfElements) {
    var memories = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryNode = parseMemoryType(i);
      state.memoriesInModule.push(memoryNode);
      memories.push(memoryNode);
    }

    return memories;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-startsec


  function parseStartSection() {
    var startLoc = getPosition();
    var u32 = readU32();
    var startFuncIndex = u32.value;
    eatBytes(u32.nextIndex);
    dump([startFuncIndex], "index");
    return function () {
      var endLoc = getPosition();
      return t.withLoc(t.start(t.indexLiteral(startFuncIndex)), endLoc, startLoc);
    }();
  } // https://webassembly.github.io/spec/binary/modules.html#data-section


  function parseDataSection(numberOfElements) {
    var dataEntries = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryIndexu32 = readU32();
      var memoryIndex = memoryIndexu32.value;
      eatBytes(memoryIndexu32.nextIndex);
      dump([memoryIndex], "memory index");
      var instrs = [];
      parseInstructionBlock(instrs);
      var hasExtraInstrs = instrs.filter(function (i) {
        return i.id !== "end";
      }).length !== 1;

      if (hasExtraInstrs) {
        throw new _helperApiError.CompileError("data section offset must be a single instruction");
      }

      var bytes = parseVec(function (b) {
        return b;
      });
      dump([], "init");
      dataEntries.push(t.data(t.memIndexLiteral(memoryIndex), instrs[0], t.byteArray(bytes)));
    }

    return dataEntries;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-section


  function parseSection(sectionIndex) {
    var sectionId = readByte();
    eatBytes(1);

    if (sectionId >= sectionIndex || sectionIndex === _helperWasmBytecode["default"].sections.custom) {
      sectionIndex = sectionId + 1;
    } else {
      if (sectionId !== _helperWasmBytecode["default"].sections.custom) throw new _helperApiError.CompileError("Unexpected section: " + toHex(sectionId));
    }

    var nextSectionIndex = sectionIndex;
    var startOffset = offset;
    var startLoc = getPosition();
    var u32 = readU32();
    var sectionSizeInBytes = u32.value;
    eatBytes(u32.nextIndex);

    var sectionSizeInBytesNode = function () {
      var endLoc = getPosition();
      return t.withLoc(t.numberLiteralFromRaw(sectionSizeInBytes), endLoc, startLoc);
    }();

    switch (sectionId) {
      case _helperWasmBytecode["default"].sections.type:
        {
          dumpSep("section Type");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc13 = getPosition();

          var _u = readU32();

          var numberOfTypes = _u.value;
          eatBytes(_u.nextIndex);
          var metadata = t.sectionMetadata("type", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfTypes), endLoc, _startLoc13);
          }());
          var nodes = parseTypeSection(numberOfTypes);
          return {
            nodes: nodes,
            metadata: metadata,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.table:
        {
          dumpSep("section Table");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc14 = getPosition();

          var _u2 = readU32();

          var numberOfTable = _u2.value;
          eatBytes(_u2.nextIndex);
          dump([numberOfTable], "num tables");

          var _metadata = t.sectionMetadata("table", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfTable), endLoc, _startLoc14);
          }());

          var _nodes = parseTableSection(numberOfTable);

          return {
            nodes: _nodes,
            metadata: _metadata,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections["import"]:
        {
          dumpSep("section Import");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc15 = getPosition();

          var numberOfImportsu32 = readU32();
          var numberOfImports = numberOfImportsu32.value;
          eatBytes(numberOfImportsu32.nextIndex);
          dump([numberOfImports], "number of imports");

          var _metadata2 = t.sectionMetadata("import", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfImports), endLoc, _startLoc15);
          }());

          var _nodes2 = parseImportSection(numberOfImports);

          return {
            nodes: _nodes2,
            metadata: _metadata2,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.func:
        {
          dumpSep("section Function");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc16 = getPosition();

          var numberOfFunctionsu32 = readU32();
          var numberOfFunctions = numberOfFunctionsu32.value;
          eatBytes(numberOfFunctionsu32.nextIndex);

          var _metadata3 = t.sectionMetadata("func", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfFunctions), endLoc, _startLoc16);
          }());

          parseFuncSection(numberOfFunctions);
          var _nodes3 = [];
          return {
            nodes: _nodes3,
            metadata: _metadata3,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections["export"]:
        {
          dumpSep("section Export");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc17 = getPosition();

          var _u3 = readU32();

          var numberOfExport = _u3.value;
          eatBytes(_u3.nextIndex);

          var _metadata4 = t.sectionMetadata("export", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfExport), endLoc, _startLoc17);
          }());

          parseExportSection(numberOfExport);
          var _nodes4 = [];
          return {
            nodes: _nodes4,
            metadata: _metadata4,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.code:
        {
          dumpSep("section Code");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc18 = getPosition();

          var _u4 = readU32();

          var numberOfFuncs = _u4.value;
          eatBytes(_u4.nextIndex);

          var _metadata5 = t.sectionMetadata("code", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfFuncs), endLoc, _startLoc18);
          }());

          if (opts.ignoreCodeSection === true) {
            var remainingBytes = sectionSizeInBytes - _u4.nextIndex;
            eatBytes(remainingBytes); // eat the entire section
          } else {
            parseCodeSection(numberOfFuncs);
          }

          var _nodes5 = [];
          return {
            nodes: _nodes5,
            metadata: _metadata5,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.start:
        {
          dumpSep("section Start");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata6 = t.sectionMetadata("start", startOffset, sectionSizeInBytesNode);

          var _nodes6 = [parseStartSection()];
          return {
            nodes: _nodes6,
            metadata: _metadata6,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.element:
        {
          dumpSep("section Element");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc19 = getPosition();

          var numberOfElementsu32 = readU32();
          var numberOfElements = numberOfElementsu32.value;
          eatBytes(numberOfElementsu32.nextIndex);

          var _metadata7 = t.sectionMetadata("element", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfElements), endLoc, _startLoc19);
          }());

          var _nodes7 = parseElemSection(numberOfElements);

          return {
            nodes: _nodes7,
            metadata: _metadata7,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.global:
        {
          dumpSep("section Global");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc20 = getPosition();

          var numberOfGlobalsu32 = readU32();
          var numberOfGlobals = numberOfGlobalsu32.value;
          eatBytes(numberOfGlobalsu32.nextIndex);

          var _metadata8 = t.sectionMetadata("global", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(numberOfGlobals), endLoc, _startLoc20);
          }());

          var _nodes8 = parseGlobalSection(numberOfGlobals);

          return {
            nodes: _nodes8,
            metadata: _metadata8,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.memory:
        {
          dumpSep("section Memory");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc21 = getPosition();

          var _numberOfElementsu = readU32();

          var _numberOfElements = _numberOfElementsu.value;
          eatBytes(_numberOfElementsu.nextIndex);

          var _metadata9 = t.sectionMetadata("memory", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(_numberOfElements), endLoc, _startLoc21);
          }());

          var _nodes9 = parseMemorySection(_numberOfElements);

          return {
            nodes: _nodes9,
            metadata: _metadata9,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _helperWasmBytecode["default"].sections.data:
        {
          dumpSep("section Data");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata10 = t.sectionMetadata("data", startOffset, sectionSizeInBytesNode);

          var _startLoc22 = getPosition();

          var _numberOfElementsu2 = readU32();

          var _numberOfElements2 = _numberOfElementsu2.value;
          eatBytes(_numberOfElementsu2.nextIndex);

          _metadata10.vectorOfSize = function () {
            var endLoc = getPosition();
            return t.withLoc(t.numberLiteralFromRaw(_numberOfElements2), endLoc, _startLoc22);
          }();

          if (opts.ignoreDataSection === true) {
            var _remainingBytes = sectionSizeInBytes - _numberOfElementsu2.nextIndex;

            eatBytes(_remainingBytes); // eat the entire section

            dumpSep("ignore data (" + sectionSizeInBytes + " bytes)");
            return {
              nodes: [],
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex
            };
          } else {
            var _nodes10 = parseDataSection(_numberOfElements2);

            return {
              nodes: _nodes10,
              metadata: _metadata10,
              nextSectionIndex: nextSectionIndex
            };
          }
        }

      case _helperWasmBytecode["default"].sections.custom:
        {
          dumpSep("section Custom");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata11 = [t.sectionMetadata("custom", startOffset, sectionSizeInBytesNode)];
          var sectionName = readUTF8String();
          eatBytes(sectionName.nextIndex);
          dump([], "section name (".concat(sectionName.value, ")"));

          var _remainingBytes2 = sectionSizeInBytes - sectionName.nextIndex;

          if (sectionName.value === "name") {
            var initialOffset = offset;

            try {
              _metadata11.push.apply(_metadata11, _toConsumableArray(parseNameSection(_remainingBytes2)));
            } catch (e) {
              console.warn("Failed to decode custom \"name\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (initialOffset + _remainingBytes2));
            }
          } else if (sectionName.value === "producers") {
            var _initialOffset = offset;

            try {
              _metadata11.push(parseProducersSection());
            } catch (e) {
              console.warn("Failed to decode custom \"producers\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (_initialOffset + _remainingBytes2));
            }
          } else {
            // We don't parse the custom section
            eatBytes(_remainingBytes2);
            dumpSep("ignore custom " + JSON.stringify(sectionName.value) + " section (" + _remainingBytes2 + " bytes)");
          }

          return {
            nodes: [],
            metadata: _metadata11,
            nextSectionIndex: nextSectionIndex
          };
        }
    }

    if (opts.errorOnUnknownSection) {
      throw new _helperApiError.CompileError("Unexpected section: " + toHex(sectionId));
    } else {
      dumpSep("section " + toHex(sectionId));
      dump([sectionId], "section code");
      dump([sectionSizeInBytes], "section size");
      eatBytes(sectionSizeInBytes);
      dumpSep("ignoring (" + sectionSizeInBytes + " bytes)");
      return {
        nodes: [],
        metadata: [],
        nextSectionIndex: 0
      };
    }
  }

  function parseBlockType() {
    var blocktypeByte = readByte();
    var blocktype = _helperWasmBytecode["default"].blockTypes[blocktypeByte];

    if (typeof blocktype !== "undefined") {
      eatBytes(1);
      dump([blocktypeByte], "blocktype"); // value type

      return blocktype;
    } else {
      // type index
      var u32 = readU32();
      eatBytes(u32.nextIndex);
      var signature = state.typesInModule[u32.value];
      console.log({
        signature: signature
      });
      dump([u32.value], "typeidx");
      return u32.value;
    }
  }

  parseModuleHeader();
  parseVersion();
  var moduleFields = [];
  var sectionIndex = 0;
  var moduleMetadata = {
    sections: [],
    functionNames: [],
    localNames: [],
    producers: []
  };
  /**
   * All the generate declaration are going to be stored in our state
   */

  while (offset < buf.length) {
    var _parseSection = parseSection(sectionIndex),
        nodes = _parseSection.nodes,
        metadata = _parseSection.metadata,
        nextSectionIndex = _parseSection.nextSectionIndex;

    moduleFields.push.apply(moduleFields, _toConsumableArray(nodes));
    var metadataArray = Array.isArray(metadata) ? metadata : [metadata];
    metadataArray.forEach(function (metadataItem) {
      // $FlowIgnore
      if (metadataItem.type === "FunctionNameMetadata") {
        moduleMetadata.functionNames.push(metadataItem); // $FlowIgnore
      } else if (metadataItem.type === "LocalNameMetadata") {
        moduleMetadata.localNames.push(metadataItem); // $FlowIgnore
      } else if (metadataItem.type === "ProducersSectionMetadata") {
        moduleMetadata.producers.push(metadataItem);
      } else {
        moduleMetadata.sections.push(metadataItem);
      }
    }); // Ignore custom section

    if (nextSectionIndex) {
      sectionIndex = nextSectionIndex;
    }
  }
  /**
   * Transform the state into AST nodes
   */


  var funcIndex = 0;
  state.functionsInModule.forEach(function (func) {
    var params = func.signature.params;
    var result = func.signature.result;
    var body = []; // External functions doesn't provide any code, can skip it here

    if (func.isExternal === true) {
      return;
    }

    var decodedElementInCodeSection = state.elementsInCodeSection[funcIndex];

    if (opts.ignoreCodeSection === false) {
      if (typeof decodedElementInCodeSection === "undefined") {
        throw new _helperApiError.CompileError("func " + toHex(funcIndex) + " code not found");
      }

      body = decodedElementInCodeSection.code;
    }

    funcIndex++;
    var funcNode = t.func(func.id, t.signature(params, result), body);

    if (func.isExternal === true) {
      funcNode.isExternal = func.isExternal;
    } // Add function position in the binary if possible


    if (opts.ignoreCodeSection === false) {
      var _startLoc23 = decodedElementInCodeSection.startLoc,
          endLoc = decodedElementInCodeSection.endLoc,
          bodySize = decodedElementInCodeSection.bodySize;
      funcNode = t.withLoc(funcNode, endLoc, _startLoc23);
      funcNode.metadata = {
        bodySize: bodySize
      };
    }

    moduleFields.push(funcNode);
  });
  state.elementsInExportSection.forEach(function (moduleExport) {
    /**
     * If the export has no id, we won't be able to call it from the outside
     * so we can omit it
     */
    if (moduleExport.id != null) {
      moduleFields.push(t.withLoc(t.moduleExport(moduleExport.name, t.moduleExportDescr(moduleExport.type, moduleExport.id)), moduleExport.endLoc, moduleExport.startLoc));
    }
  });
  dumpSep("end of program");
  var module = t.module(null, moduleFields, t.moduleMetadata(moduleMetadata.sections, moduleMetadata.functionNames, moduleMetadata.localNames, moduleMetadata.producers));
  return t.program([module]);
}