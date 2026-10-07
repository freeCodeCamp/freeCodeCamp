"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/npm/node.ts
var node_exports = {};
__export(node_exports, {
  analyzeMetafile: () => analyzeMetafile,
  analyzeMetafileSync: () => analyzeMetafileSync,
  build: () => build,
  buildSync: () => buildSync,
  context: () => context,
  default: () => node_default,
  formatMessages: () => formatMessages,
  formatMessagesSync: () => formatMessagesSync,
  initialize: () => initialize,
  stop: () => stop,
  transform: () => transform,
  transformSync: () => transformSync,
  version: () => version
});
module.exports = __toCommonJS(node_exports);

// lib/shared/stdio_protocol.ts
function encodePacket(packet) {
  let visit = (value) => {
    if (value === null) {
      bb.write8(0);
    } else if (typeof value === "boolean") {
      bb.write8(1);
      bb.write8(+value);
    } else if (typeof value === "number") {
      bb.write8(2);
      bb.write32(value | 0);
    } else if (typeof value === "string") {
      bb.write8(3);
      bb.write(encodeUTF8(value));
    } else if (value instanceof Uint8Array) {
      bb.write8(4);
      bb.write(value);
    } else if (value instanceof Array) {
      bb.write8(5);
      bb.write32(value.length);
      for (let item of value) {
        visit(item);
      }
    } else {
      let keys = Object.keys(value);
      bb.write8(6);
      bb.write32(keys.length);
      for (let key of keys) {
        bb.write(encodeUTF8(key));
        visit(value[key]);
      }
    }
  };
  let bb = new ByteBuffer();
  bb.write32(0);
  bb.write32(packet.id << 1 | +!packet.isRequest);
  visit(packet.value);
  writeUInt32LE(bb.buf, bb.len - 4, 0);
  return bb.buf.subarray(0, bb.len);
}
function decodePacket(bytes) {
  let visit = () => {
    switch (bb.read8()) {
      case 0:
        return null;
      case 1:
        return !!bb.read8();
      case 2:
        return bb.read32();
      case 3:
        return decodeUTF8(bb.read());
      case 4:
        return bb.read();
      case 5: {
        let count = bb.read32();
        let value2 = [];
        for (let i = 0; i < count; i++) {
          value2.push(visit());
        }
        return value2;
      }
      case 6: {
        let count = bb.read32();
        let value2 = {};
        for (let i = 0; i < count; i++) {
          value2[decodeUTF8(bb.read())] = visit();
        }
        return value2;
      }
      default:
        throw new Error("Invalid packet");
    }
  };
  let bb = new ByteBuffer(bytes);
  let id = bb.read32();
  let isRequest = (id & 1) === 0;
  id >>>= 1;
  let value = visit();
  if (bb.ptr !== bytes.length) {
    throw new Error("Invalid packet");
  }
  return { id, isRequest, value };
}
var ByteBuffer = class {
  constructor(buf = new Uint8Array(1024)) {
    this.buf = buf;
    this.len = 0;
    this.ptr = 0;
  }
  _write(delta) {
    if (this.len + delta > this.buf.length) {
      let clone = new Uint8Array((this.len + delta) * 2);
      clone.set(this.buf);
      this.buf = clone;
    }
    this.len += delta;
    return this.len - delta;
  }
  write8(value) {
    let offset = this._write(1);
    this.buf[offset] = value;
  }
  write32(value) {
    let offset = this._write(4);
    writeUInt32LE(this.buf, value, offset);
  }
  write(bytes) {
    let offset = this._write(4 + bytes.length);
    writeUInt32LE(this.buf, bytes.length, offset);
    this.buf.set(bytes, offset + 4);
  }
  _read(delta) {
    if (this.ptr + delta > this.buf.length) {
      throw new Error("Invalid packet");
    }
    this.ptr += delta;
    return this.ptr - delta;
  }
  read8() {
    return this.buf[this._read(1)];
  }
  read32() {
    return readUInt32LE(this.buf, this._read(4));
  }
  read() {
    let length = this.read32();
    let bytes = new Uint8Array(length);
    let ptr = this._read(bytes.length);
    bytes.set(this.buf.subarray(ptr, ptr + length));
    return bytes;
  }
};
var encodeUTF8;
var decodeUTF8;
var encodeInvariant;
if (typeof TextEncoder !== "undefined" && typeof TextDecoder !== "undefined") {
  let encoder = new TextEncoder();
  let decoder = new TextDecoder();
  encodeUTF8 = (text) => encoder.encode(text);
  decodeUTF8 = (bytes) => decoder.decode(bytes);
  encodeInvariant = 'new TextEncoder().encode("")';
} else if (typeof Buffer !== "undefined") {
  encodeUTF8 = (text) => Buffer.from(text);
  decodeUTF8 = (bytes) => {
    let { buffer, byteOffset, byteLength } = bytes;
    return Buffer.from(buffer, byteOffset, byteLength).toString();
  };
  encodeInvariant = 'Buffer.from("")';
} else {
  throw new Error("No UTF-8 codec found");
}
if (!(encodeUTF8("") instanceof Uint8Array))
  throw new Error(`Invariant violation: "${encodeInvariant} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);
function readUInt32LE(buffer, offset) {
  return (buffer[offset++] | buffer[offset++] << 8 | buffer[offset++] << 16 | buffer[offset++] << 24) >>> 0;
}
function writeUInt32LE(buffer, value, offset) {
  buffer[offset++] = value;
  buffer[offset++] = value >> 8;
  buffer[offset++] = value >> 16;
  buffer[offset++] = value >> 24;
}

// lib/shared/uint8array_json_parser.ts
var fromCharCode = String.fromCharCode;
function throwSyntaxError(bytes, index, message) {
  const c = bytes[index];
  let line = 1;
  let column = 0;
  for (let i = 0; i < index; i++) {
    if (bytes[i] === 10 /* Newline */) {
      line++;
      column = 0;
    } else {
      column++;
    }
  }
  throw new SyntaxError(
    message ? message : index === bytes.length ? "Unexpected end of input while parsing JSON" : c >= 32 && c <= 126 ? `Unexpected character ${fromCharCode(c)} in JSON at position ${index} (line ${line}, column ${column})` : `Unexpected byte 0x${c.toString(16)} in JSON at position ${index} (line ${line}, column ${column})`
  );
}
function JSON_parse(bytes) {
  if (!(bytes instanceof Uint8Array)) {
    throw new Error(`JSON input must be a Uint8Array`);
  }
  const propertyStack = [];
  const objectStack = [];
  const stateStack = [];
  const length = bytes.length;
  let property = null;
  let state = 0 /* TopLevel */;
  let object;
  let i = 0;
  while (i < length) {
    let c = bytes[i++];
    if (c <= 32 /* Space */) {
      continue;
    }
    let value;
    if (state === 2 /* Object */ && property === null && c !== 34 /* Quote */ && c !== 125 /* CloseBrace */) {
      throwSyntaxError(bytes, --i);
    }
    switch (c) {
      // True
      case 116 /* LowerT */: {
        if (bytes[i++] !== 114 /* LowerR */ || bytes[i++] !== 117 /* LowerU */ || bytes[i++] !== 101 /* LowerE */) {
          throwSyntaxError(bytes, --i);
        }
        value = true;
        break;
      }
      // False
      case 102 /* LowerF */: {
        if (bytes[i++] !== 97 /* LowerA */ || bytes[i++] !== 108 /* LowerL */ || bytes[i++] !== 115 /* LowerS */ || bytes[i++] !== 101 /* LowerE */) {
          throwSyntaxError(bytes, --i);
        }
        value = false;
        break;
      }
      // Null
      case 110 /* LowerN */: {
        if (bytes[i++] !== 117 /* LowerU */ || bytes[i++] !== 108 /* LowerL */ || bytes[i++] !== 108 /* LowerL */) {
          throwSyntaxError(bytes, --i);
        }
        value = null;
        break;
      }
      // Number begin
      case 45 /* Minus */:
      case 46 /* Dot */:
      case 48 /* Digit0 */:
      case 49 /* Digit1 */:
      case 50 /* Digit2 */:
      case 51 /* Digit3 */:
      case 52 /* Digit4 */:
      case 53 /* Digit5 */:
      case 54 /* Digit6 */:
      case 55 /* Digit7 */:
      case 56 /* Digit8 */:
      case 57 /* Digit9 */: {
        let index = i;
        value = fromCharCode(c);
        c = bytes[i];
        while (true) {
          switch (c) {
            case 43 /* Plus */:
            case 45 /* Minus */:
            case 46 /* Dot */:
            case 48 /* Digit0 */:
            case 49 /* Digit1 */:
            case 50 /* Digit2 */:
            case 51 /* Digit3 */:
            case 52 /* Digit4 */:
            case 53 /* Digit5 */:
            case 54 /* Digit6 */:
            case 55 /* Digit7 */:
            case 56 /* Digit8 */:
            case 57 /* Digit9 */:
            case 101 /* LowerE */:
            case 69 /* UpperE */: {
              value += fromCharCode(c);
              c = bytes[++i];
              continue;
            }
          }
          break;
        }
        value = +value;
        if (isNaN(value)) {
          throwSyntaxError(bytes, --index, "Invalid number");
        }
        break;
      }
      // String begin
      case 34 /* Quote */: {
        value = "";
        while (true) {
          if (i >= length) {
            throwSyntaxError(bytes, length);
          }
          c = bytes[i++];
          if (c === 34 /* Quote */) {
            break;
          } else if (c === 92 /* Backslash */) {
            switch (bytes[i++]) {
              // Normal escape sequence
              case 34 /* Quote */:
                value += '"';
                break;
              case 47 /* Slash */:
                value += "/";
                break;
              case 92 /* Backslash */:
                value += "\\";
                break;
              case 98 /* LowerB */:
                value += "\b";
                break;
              case 102 /* LowerF */:
                value += "\f";
                break;
              case 110 /* LowerN */:
                value += "\n";
                break;
              case 114 /* LowerR */:
                value += "\r";
                break;
              case 116 /* LowerT */:
                value += "	";
                break;
              // Unicode escape sequence
              case 117 /* LowerU */: {
                let code = 0;
                for (let j = 0; j < 4; j++) {
                  c = bytes[i++];
                  code <<= 4;
                  if (c >= 48 /* Digit0 */ && c <= 57 /* Digit9 */) code |= c - 48 /* Digit0 */;
                  else if (c >= 97 /* LowerA */ && c <= 102 /* LowerF */) code |= c + (10 - 97 /* LowerA */);
                  else if (c >= 65 /* UpperA */ && c <= 70 /* UpperF */) code |= c + (10 - 65 /* UpperA */);
                  else throwSyntaxError(bytes, --i);
                }
                value += fromCharCode(code);
                break;
              }
              // Invalid escape sequence
              default:
                throwSyntaxError(bytes, --i);
                break;
            }
          } else if (c <= 127) {
            value += fromCharCode(c);
          } else if ((c & 224) === 192) {
            value += fromCharCode((c & 31) << 6 | bytes[i++] & 63);
          } else if ((c & 240) === 224) {
            value += fromCharCode((c & 15) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63);
          } else if ((c & 248) == 240) {
            let codePoint = (c & 7) << 18 | (bytes[i++] & 63) << 12 | (bytes[i++] & 63) << 6 | bytes[i++] & 63;
            if (codePoint > 65535) {
              codePoint -= 65536;
              value += fromCharCode(codePoint >> 10 & 1023 | 55296);
              codePoint = 56320 | codePoint & 1023;
            }
            value += fromCharCode(codePoint);
          }
        }
        value[0];
        break;
      }
      // Array begin
      case 91 /* OpenBracket */: {
        value = [];
        propertyStack.push(property);
        objectStack.push(object);
        stateStack.push(state);
        property = null;
        object = value;
        state = 1 /* Array */;
        continue;
      }
      // Object begin
      case 123 /* OpenBrace */: {
        value = {};
        propertyStack.push(property);
        objectStack.push(object);
        stateStack.push(state);
        property = null;
        object = value;
        state = 2 /* Object */;
        continue;
      }
      // Array end
      case 93 /* CloseBracket */: {
        if (state !== 1 /* Array */) {
          throwSyntaxError(bytes, --i);
        }
        value = object;
        property = propertyStack.pop();
        object = objectStack.pop();
        state = stateStack.pop();
        break;
      }
      // Object end
      case 125 /* CloseBrace */: {
        if (state !== 2 /* Object */) {
          throwSyntaxError(bytes, --i);
        }
        value = object;
        property = propertyStack.pop();
        object = objectStack.pop();
        state = stateStack.pop();
        break;
      }
      default: {
        throwSyntaxError(bytes, --i);
      }
    }
    c = bytes[i];
    while (c <= 32 /* Space */) {
      c = bytes[++i];
    }
    switch (state) {
      case 0 /* TopLevel */: {
        if (i === length) {
          return value;
        }
        break;
      }
      case 1 /* Array */: {
        object.push(value);
        if (c === 44 /* Comma */) {
          i++;
          continue;
        }
        if (c === 93 /* CloseBracket */) {
          continue;
        }
        break;
      }
      case 2 /* Object */: {
        if (property === null) {
          property = value;
          if (c === 58 /* Colon */) {
            i++;
            continue;
          }
        } else {
          object[property] = value;
          property = null;
          if (c === 44 /* Comma */) {
            i++;
            continue;
          }
          if (c === 125 /* CloseBrace */) {
            continue;
          }
        }
        break;
      }
    }
    break;
  }
  throwSyntaxError(bytes, i);
}

// lib/shared/common.ts
var quote = JSON.stringify;
var buildLogLevelDefault = "warning";
var transformLogLevelDefault = "silent";
function validateAndJoinStringArray(values, what) {
  const toJoin = [];
  for (const value of values) {
    validateStringValue(value, what);
    if (value.indexOf(",") >= 0) throw new Error(`Invalid ${what}: ${value}`);
    toJoin.push(value);
  }
  return toJoin.join(",");
}
var canBeAnything = () => null;
var mustBeBoolean = (value) => typeof value === "boolean" ? null : "a boolean";
var mustBeString = (value) => typeof value === "string" ? null : "a string";
var mustBeRegExp = (value) => value instanceof RegExp ? null : "a RegExp object";
var mustBeInteger = (value) => typeof value === "number" && value === (value | 0) ? null : "an integer";
var mustBeValidPortNumber = (value) => typeof value === "number" && value === (value | 0) && value >= 0 && value <= 65535 ? null : "a valid port number";
var mustBeFunction = (value) => typeof value === "function" ? null : "a function";
var mustBeArray = (value) => Array.isArray(value) ? null : "an array";
var mustBeArrayOfStrings = (value) => Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "an array of strings";
var mustBeObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? null : "an object";
var mustBeEntryPoints = (value) => typeof value === "object" && value !== null ? null : "an array or an object";
var mustBeWebAssemblyModule = (value) => value instanceof WebAssembly.Module ? null : "a WebAssembly.Module";
var mustBeObjectOrNull = (value) => typeof value === "object" && !Array.isArray(value) ? null : "an object or null";
var mustBeStringOrBoolean = (value) => typeof value === "string" || typeof value === "boolean" ? null : "a string or a boolean";
var mustBeStringOrObject = (value) => typeof value === "string" || typeof value === "object" && value !== null && !Array.isArray(value) ? null : "a string or an object";
var mustBeStringOrArrayOfStrings = (value) => typeof value === "string" || Array.isArray(value) && value.every((x) => typeof x === "string") ? null : "a string or an array of strings";
var mustBeStringOrUint8Array = (value) => typeof value === "string" || value instanceof Uint8Array ? null : "a string or a Uint8Array";
var mustBeStringOrURL = (value) => typeof value === "string" || value instanceof URL ? null : "a string or a URL";
function getFlag(object, keys, key, mustBeFn) {
  let value = object[key];
  keys[key + ""] = true;
  if (value === void 0) return void 0;
  let mustBe = mustBeFn(value);
  if (mustBe !== null) throw new Error(`${quote(key)} must be ${mustBe}`);
  return value;
}
function checkForInvalidFlags(object, keys, where) {
  for (let key in object) {
    if (!(key in keys)) {
      throw new Error(`Invalid option ${where}: ${quote(key)}`);
    }
  }
}
function validateInitializeOptions(options) {
  let keys = /* @__PURE__ */ Object.create(null);
  let wasmURL = getFlag(options, keys, "wasmURL", mustBeStringOrURL);
  let wasmModule = getFlag(options, keys, "wasmModule", mustBeWebAssemblyModule);
  let worker = getFlag(options, keys, "worker", mustBeBoolean);
  checkForInvalidFlags(options, keys, "in initialize() call");
  return {
    wasmURL,
    wasmModule,
    worker
  };
}
function validateMangleCache(mangleCache) {
  let validated;
  if (mangleCache !== void 0) {
    validated = /* @__PURE__ */ Object.create(null);
    for (let key in mangleCache) {
      let value = mangleCache[key];
      if (typeof value === "string" || value === false) {
        validated[key] = value;
      } else {
        throw new Error(`Expected ${quote(key)} in mangle cache to map to either a string or false`);
      }
    }
  }
  return validated;
}
function pushLogFlags(flags, options, keys, isTTY2, logLevelDefault) {
  let color = getFlag(options, keys, "color", mustBeBoolean);
  let logLevel = getFlag(options, keys, "logLevel", mustBeString);
  let logLimit = getFlag(options, keys, "logLimit", mustBeInteger);
  if (color !== void 0) flags.push(`--color=${color}`);
  else if (isTTY2) flags.push(`--color=true`);
  flags.push(`--log-level=${logLevel || logLevelDefault}`);
  flags.push(`--log-limit=${logLimit || 0}`);
}
function validateStringValue(value, what, key) {
  if (typeof value !== "string") {
    throw new Error(`Expected value for ${what}${key !== void 0 ? " " + quote(key) : ""} to be a string, got ${typeof value} instead`);
  }
  return value;
}
function pushCommonFlags(flags, options, keys) {
  let legalComments = getFlag(options, keys, "legalComments", mustBeString);
  let sourceRoot = getFlag(options, keys, "sourceRoot", mustBeString);
  let sourcesContent = getFlag(options, keys, "sourcesContent", mustBeBoolean);
  let target = getFlag(options, keys, "target", mustBeStringOrArrayOfStrings);
  let format = getFlag(options, keys, "format", mustBeString);
  let globalName = getFlag(options, keys, "globalName", mustBeString);
  let mangleProps = getFlag(options, keys, "mangleProps", mustBeRegExp);
  let reserveProps = getFlag(options, keys, "reserveProps", mustBeRegExp);
  let mangleQuoted = getFlag(options, keys, "mangleQuoted", mustBeBoolean);
  let minify = getFlag(options, keys, "minify", mustBeBoolean);
  let minifySyntax = getFlag(options, keys, "minifySyntax", mustBeBoolean);
  let minifyWhitespace = getFlag(options, keys, "minifyWhitespace", mustBeBoolean);
  let minifyIdentifiers = getFlag(options, keys, "minifyIdentifiers", mustBeBoolean);
  let lineLimit = getFlag(options, keys, "lineLimit", mustBeInteger);
  let drop = getFlag(options, keys, "drop", mustBeArrayOfStrings);
  let dropLabels = getFlag(options, keys, "dropLabels", mustBeArrayOfStrings);
  let charset = getFlag(options, keys, "charset", mustBeString);
  let treeShaking = getFlag(options, keys, "treeShaking", mustBeBoolean);
  let ignoreAnnotations = getFlag(options, keys, "ignoreAnnotations", mustBeBoolean);
  let jsx = getFlag(options, keys, "jsx", mustBeString);
  let jsxFactory = getFlag(options, keys, "jsxFactory", mustBeString);
  let jsxFragment = getFlag(options, keys, "jsxFragment", mustBeString);
  let jsxImportSource = getFlag(options, keys, "jsxImportSource", mustBeString);
  let jsxDev = getFlag(options, keys, "jsxDev", mustBeBoolean);
  let jsxSideEffects = getFlag(options, keys, "jsxSideEffects", mustBeBoolean);
  let define = getFlag(options, keys, "define", mustBeObject);
  let logOverride = getFlag(options, keys, "logOverride", mustBeObject);
  let supported = getFlag(options, keys, "supported", mustBeObject);
  let pure = getFlag(options, keys, "pure", mustBeArrayOfStrings);
  let keepNames = getFlag(options, keys, "keepNames", mustBeBoolean);
  let platform = getFlag(options, keys, "platform", mustBeString);
  let tsconfigRaw = getFlag(options, keys, "tsconfigRaw", mustBeStringOrObject);
  let absPaths = getFlag(options, keys, "absPaths", mustBeArrayOfStrings);
  if (legalComments) flags.push(`--legal-comments=${legalComments}`);
  if (sourceRoot !== void 0) flags.push(`--source-root=${sourceRoot}`);
  if (sourcesContent !== void 0) flags.push(`--sources-content=${sourcesContent}`);
  if (target) flags.push(`--target=${validateAndJoinStringArray(Array.isArray(target) ? target : [target], "target")}`);
  if (format) flags.push(`--format=${format}`);
  if (globalName) flags.push(`--global-name=${globalName}`);
  if (platform) flags.push(`--platform=${platform}`);
  if (tsconfigRaw) flags.push(`--tsconfig-raw=${typeof tsconfigRaw === "string" ? tsconfigRaw : JSON.stringify(tsconfigRaw)}`);
  if (minify) flags.push("--minify");
  if (minifySyntax) flags.push("--minify-syntax");
  if (minifyWhitespace) flags.push("--minify-whitespace");
  if (minifyIdentifiers) flags.push("--minify-identifiers");
  if (lineLimit) flags.push(`--line-limit=${lineLimit}`);
  if (charset) flags.push(`--charset=${charset}`);
  if (treeShaking !== void 0) flags.push(`--tree-shaking=${treeShaking}`);
  if (ignoreAnnotations) flags.push(`--ignore-annotations`);
  if (drop) for (let what of drop) flags.push(`--drop:${validateStringValue(what, "drop")}`);
  if (dropLabels) flags.push(`--drop-labels=${validateAndJoinStringArray(dropLabels, "drop label")}`);
  if (absPaths) flags.push(`--abs-paths=${validateAndJoinStringArray(absPaths, "abs paths")}`);
  if (mangleProps) flags.push(`--mangle-props=${jsRegExpToGoRegExp(mangleProps)}`);
  if (reserveProps) flags.push(`--reserve-props=${jsRegExpToGoRegExp(reserveProps)}`);
  if (mangleQuoted !== void 0) flags.push(`--mangle-quoted=${mangleQuoted}`);
  if (jsx) flags.push(`--jsx=${jsx}`);
  if (jsxFactory) flags.push(`--jsx-factory=${jsxFactory}`);
  if (jsxFragment) flags.push(`--jsx-fragment=${jsxFragment}`);
  if (jsxImportSource) flags.push(`--jsx-import-source=${jsxImportSource}`);
  if (jsxDev) flags.push(`--jsx-dev`);
  if (jsxSideEffects) flags.push(`--jsx-side-effects`);
  if (define) {
    for (let key in define) {
      if (key.indexOf("=") >= 0) throw new Error(`Invalid define: ${key}`);
      flags.push(`--define:${key}=${validateStringValue(define[key], "define", key)}`);
    }
  }
  if (logOverride) {
    for (let key in logOverride) {
      if (key.indexOf("=") >= 0) throw new Error(`Invalid log override: ${key}`);
      flags.push(`--log-override:${key}=${validateStringValue(logOverride[key], "log override", key)}`);
    }
  }
  if (supported) {
    for (let key in supported) {
      if (key.indexOf("=") >= 0) throw new Error(`Invalid supported: ${key}`);
      const value = supported[key];
      if (typeof value !== "boolean") throw new Error(`Expected value for supported ${quote(key)} to be a boolean, got ${typeof value} instead`);
      flags.push(`--supported:${key}=${value}`);
    }
  }
  if (pure) for (let fn of pure) flags.push(`--pure:${validateStringValue(fn, "pure")}`);
  if (keepNames) flags.push(`--keep-names`);
}
function flagsForBuildOptions(callName, options, isTTY2, logLevelDefault, writeDefault) {
  var _a2;
  let flags = [];
  let entries = [];
  let keys = /* @__PURE__ */ Object.create(null);
  let stdinContents = null;
  let stdinResolveDir = null;
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let bundle = getFlag(options, keys, "bundle", mustBeBoolean);
  let splitting = getFlag(options, keys, "splitting", mustBeBoolean);
  let preserveSymlinks = getFlag(options, keys, "preserveSymlinks", mustBeBoolean);
  let metafile = getFlag(options, keys, "metafile", mustBeBoolean);
  let outfile = getFlag(options, keys, "outfile", mustBeString);
  let outdir = getFlag(options, keys, "outdir", mustBeString);
  let outbase = getFlag(options, keys, "outbase", mustBeString);
  let tsconfig = getFlag(options, keys, "tsconfig", mustBeString);
  let resolveExtensions = getFlag(options, keys, "resolveExtensions", mustBeArrayOfStrings);
  let nodePathsInput = getFlag(options, keys, "nodePaths", mustBeArrayOfStrings);
  let mainFields = getFlag(options, keys, "mainFields", mustBeArrayOfStrings);
  let conditions = getFlag(options, keys, "conditions", mustBeArrayOfStrings);
  let external = getFlag(options, keys, "external", mustBeArrayOfStrings);
  let packages = getFlag(options, keys, "packages", mustBeString);
  let alias = getFlag(options, keys, "alias", mustBeObject);
  let loader = getFlag(options, keys, "loader", mustBeObject);
  let outExtension = getFlag(options, keys, "outExtension", mustBeObject);
  let publicPath = getFlag(options, keys, "publicPath", mustBeString);
  let entryNames = getFlag(options, keys, "entryNames", mustBeString);
  let chunkNames = getFlag(options, keys, "chunkNames", mustBeString);
  let assetNames = getFlag(options, keys, "assetNames", mustBeString);
  let inject = getFlag(options, keys, "inject", mustBeArrayOfStrings);
  let banner = getFlag(options, keys, "banner", mustBeObject);
  let footer = getFlag(options, keys, "footer", mustBeObject);
  let entryPoints = getFlag(options, keys, "entryPoints", mustBeEntryPoints);
  let absWorkingDir = getFlag(options, keys, "absWorkingDir", mustBeString);
  let stdin = getFlag(options, keys, "stdin", mustBeObject);
  let write = (_a2 = getFlag(options, keys, "write", mustBeBoolean)) != null ? _a2 : writeDefault;
  let allowOverwrite = getFlag(options, keys, "allowOverwrite", mustBeBoolean);
  let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
  keys.plugins = true;
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap) flags.push(`--sourcemap${sourcemap === true ? "" : `=${sourcemap}`}`);
  if (bundle) flags.push("--bundle");
  if (allowOverwrite) flags.push("--allow-overwrite");
  if (splitting) flags.push("--splitting");
  if (preserveSymlinks) flags.push("--preserve-symlinks");
  if (metafile) flags.push(`--metafile`);
  if (outfile) flags.push(`--outfile=${outfile}`);
  if (outdir) flags.push(`--outdir=${outdir}`);
  if (outbase) flags.push(`--outbase=${outbase}`);
  if (tsconfig) flags.push(`--tsconfig=${tsconfig}`);
  if (packages) flags.push(`--packages=${packages}`);
  if (resolveExtensions) flags.push(`--resolve-extensions=${validateAndJoinStringArray(resolveExtensions, "resolve extension")}`);
  if (publicPath) flags.push(`--public-path=${publicPath}`);
  if (entryNames) flags.push(`--entry-names=${entryNames}`);
  if (chunkNames) flags.push(`--chunk-names=${chunkNames}`);
  if (assetNames) flags.push(`--asset-names=${assetNames}`);
  if (mainFields) flags.push(`--main-fields=${validateAndJoinStringArray(mainFields, "main field")}`);
  if (conditions) flags.push(`--conditions=${validateAndJoinStringArray(conditions, "condition")}`);
  if (external) for (let name of external) flags.push(`--external:${validateStringValue(name, "external")}`);
  if (alias) {
    for (let old in alias) {
      if (old.indexOf("=") >= 0) throw new Error(`Invalid package name in alias: ${old}`);
      flags.push(`--alias:${old}=${validateStringValue(alias[old], "alias", old)}`);
    }
  }
  if (banner) {
    for (let type in banner) {
      if (type.indexOf("=") >= 0) throw new Error(`Invalid banner file type: ${type}`);
      flags.push(`--banner:${type}=${validateStringValue(banner[type], "banner", type)}`);
    }
  }
  if (footer) {
    for (let type in footer) {
      if (type.indexOf("=") >= 0) throw new Error(`Invalid footer file type: ${type}`);
      flags.push(`--footer:${type}=${validateStringValue(footer[type], "footer", type)}`);
    }
  }
  if (inject) for (let path3 of inject) flags.push(`--inject:${validateStringValue(path3, "inject")}`);
  if (loader) {
    for (let ext in loader) {
      if (ext.indexOf("=") >= 0) throw new Error(`Invalid loader extension: ${ext}`);
      flags.push(`--loader:${ext}=${validateStringValue(loader[ext], "loader", ext)}`);
    }
  }
  if (outExtension) {
    for (let ext in outExtension) {
      if (ext.indexOf("=") >= 0) throw new Error(`Invalid out extension: ${ext}`);
      flags.push(`--out-extension:${ext}=${validateStringValue(outExtension[ext], "out extension", ext)}`);
    }
  }
  if (entryPoints) {
    if (Array.isArray(entryPoints)) {
      for (let i = 0, n = entryPoints.length; i < n; i++) {
        let entryPoint = entryPoints[i];
        if (typeof entryPoint === "object" && entryPoint !== null) {
          let entryPointKeys = /* @__PURE__ */ Object.create(null);
          let input = getFlag(entryPoint, entryPointKeys, "in", mustBeString);
          let output = getFlag(entryPoint, entryPointKeys, "out", mustBeString);
          checkForInvalidFlags(entryPoint, entryPointKeys, "in entry point at index " + i);
          if (input === void 0) throw new Error('Missing property "in" for entry point at index ' + i);
          if (output === void 0) throw new Error('Missing property "out" for entry point at index ' + i);
          entries.push([output, input]);
        } else {
          entries.push(["", validateStringValue(entryPoint, "entry point at index " + i)]);
        }
      }
    } else {
      for (let key in entryPoints) {
        entries.push([key, validateStringValue(entryPoints[key], "entry point", key)]);
      }
    }
  }
  if (stdin) {
    let stdinKeys = /* @__PURE__ */ Object.create(null);
    let contents = getFlag(stdin, stdinKeys, "contents", mustBeStringOrUint8Array);
    let resolveDir = getFlag(stdin, stdinKeys, "resolveDir", mustBeString);
    let sourcefile = getFlag(stdin, stdinKeys, "sourcefile", mustBeString);
    let loader2 = getFlag(stdin, stdinKeys, "loader", mustBeString);
    checkForInvalidFlags(stdin, stdinKeys, 'in "stdin" object');
    if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
    if (loader2) flags.push(`--loader=${loader2}`);
    if (resolveDir) stdinResolveDir = resolveDir;
    if (typeof contents === "string") stdinContents = encodeUTF8(contents);
    else if (contents instanceof Uint8Array) stdinContents = contents;
  }
  let nodePaths = [];
  if (nodePathsInput) {
    for (let value of nodePathsInput) {
      value += "";
      nodePaths.push(value);
    }
  }
  return {
    entries,
    flags,
    write,
    stdinContents,
    stdinResolveDir,
    absWorkingDir,
    nodePaths,
    mangleCache: validateMangleCache(mangleCache)
  };
}
function flagsForTransformOptions(callName, options, isTTY2, logLevelDefault) {
  let flags = [];
  let keys = /* @__PURE__ */ Object.create(null);
  pushLogFlags(flags, options, keys, isTTY2, logLevelDefault);
  pushCommonFlags(flags, options, keys);
  let sourcemap = getFlag(options, keys, "sourcemap", mustBeStringOrBoolean);
  let sourcefile = getFlag(options, keys, "sourcefile", mustBeString);
  let loader = getFlag(options, keys, "loader", mustBeString);
  let banner = getFlag(options, keys, "banner", mustBeString);
  let footer = getFlag(options, keys, "footer", mustBeString);
  let mangleCache = getFlag(options, keys, "mangleCache", mustBeObject);
  checkForInvalidFlags(options, keys, `in ${callName}() call`);
  if (sourcemap) flags.push(`--sourcemap=${sourcemap === true ? "external" : sourcemap}`);
  if (sourcefile) flags.push(`--sourcefile=${sourcefile}`);
  if (loader) flags.push(`--loader=${loader}`);
  if (banner) flags.push(`--banner=${banner}`);
  if (footer) flags.push(`--footer=${footer}`);
  return {
    flags,
    mangleCache: validateMangleCache(mangleCache)
  };
}
function createChannel(streamIn) {
  const requestCallbacksByKey = {};
  const closeData = { didClose: false, reason: "" };
  let responseCallbacks = {};
  let nextRequestID = 0;
  let nextBuildKey = 0;
  let stdout = new Uint8Array(16 * 1024);
  let stdoutUsed = 0;
  let readFromStdout = (chunk) => {
    let limit = stdoutUsed + chunk.length;
    if (limit > stdout.length) {
      let swap = new Uint8Array(limit * 2);
      swap.set(stdout);
      stdout = swap;
    }
    stdout.set(chunk, stdoutUsed);
    stdoutUsed += chunk.length;
    let offset = 0;
    while (offset + 4 <= stdoutUsed) {
      let length = readUInt32LE(stdout, offset);
      if (offset + 4 + length > stdoutUsed) {
        break;
      }
      offset += 4;
      handleIncomingPacket(stdout.subarray(offset, offset + length));
      offset += length;
    }
    if (offset > 0) {
      stdout.copyWithin(0, offset, stdoutUsed);
      stdoutUsed -= offset;
    }
  };
  let afterClose = (error) => {
    closeData.didClose = true;
    if (error) closeData.reason = ": " + (error.message || error);
    const text = "The service was stopped" + closeData.reason;
    for (let id in responseCallbacks) {
      responseCallbacks[id](text, null);
    }
    responseCallbacks = {};
  };
  let sendRequest = (refs, value, callback) => {
    if (closeData.didClose) return callback("The service is no longer running" + closeData.reason, null);
    let id = nextRequestID++;
    responseCallbacks[id] = (error, response) => {
      try {
        callback(error, response);
      } finally {
        if (refs) refs.unref();
      }
    };
    if (refs) refs.ref();
    streamIn.writeToStdin(encodePacket({ id, isRequest: true, value }));
  };
  let sendResponse = (id, value) => {
    if (closeData.didClose) throw new Error("The service is no longer running" + closeData.reason);
    streamIn.writeToStdin(encodePacket({ id, isRequest: false, value }));
  };
  let handleRequest = async (id, request) => {
    try {
      if (request.command === "ping") {
        sendResponse(id, {});
        return;
      }
      if (typeof request.key === "number") {
        const requestCallbacks = requestCallbacksByKey[request.key];
        if (!requestCallbacks) {
          return;
        }
        const callback = requestCallbacks[request.command];
        if (callback) {
          await callback(id, request);
          return;
        }
      }
      throw new Error(`Invalid command: ` + request.command);
    } catch (e) {
      const errors = [extractErrorMessageV8(e, streamIn, null, void 0, "")];
      try {
        sendResponse(id, { errors });
      } catch {
      }
    }
  };
  let isFirstPacket = true;
  let handleIncomingPacket = (bytes) => {
    if (isFirstPacket) {
      isFirstPacket = false;
      let binaryVersion = String.fromCharCode(...bytes);
      if (binaryVersion !== "0.27.7") {
        throw new Error(`Cannot start service: Host version "${"0.27.7"}" does not match binary version ${quote(binaryVersion)}`);
      }
      return;
    }
    let packet = decodePacket(bytes);
    if (packet.isRequest) {
      handleRequest(packet.id, packet.value);
    } else {
      let callback = responseCallbacks[packet.id];
      delete responseCallbacks[packet.id];
      if (packet.value.error) callback(packet.value.error, {});
      else callback(null, packet.value);
    }
  };
  let buildOrContext = ({ callName, refs, options, isTTY: isTTY2, defaultWD: defaultWD2, callback }) => {
    let refCount = 0;
    const buildKey = nextBuildKey++;
    const requestCallbacks = {};
    const buildRefs = {
      ref() {
        if (++refCount === 1) {
          if (refs) refs.ref();
        }
      },
      unref() {
        if (--refCount === 0) {
          delete requestCallbacksByKey[buildKey];
          if (refs) refs.unref();
        }
      }
    };
    requestCallbacksByKey[buildKey] = requestCallbacks;
    buildRefs.ref();
    buildOrContextImpl(
      callName,
      buildKey,
      sendRequest,
      sendResponse,
      buildRefs,
      streamIn,
      requestCallbacks,
      options,
      isTTY2,
      defaultWD2,
      (err, res) => {
        try {
          callback(err, res);
        } finally {
          buildRefs.unref();
        }
      }
    );
  };
  let transform2 = ({ callName, refs, input, options, isTTY: isTTY2, fs: fs3, callback }) => {
    const details = createObjectStash();
    let start = (inputPath) => {
      try {
        if (typeof input !== "string" && !(input instanceof Uint8Array))
          throw new Error('The input to "transform" must be a string or a Uint8Array');
        let {
          flags,
          mangleCache
        } = flagsForTransformOptions(callName, options, isTTY2, transformLogLevelDefault);
        let request = {
          command: "transform",
          flags,
          inputFS: inputPath !== null,
          input: inputPath !== null ? encodeUTF8(inputPath) : typeof input === "string" ? encodeUTF8(input) : input
        };
        if (mangleCache) request.mangleCache = mangleCache;
        sendRequest(refs, request, (error, response) => {
          if (error) return callback(new Error(error), null);
          let errors = replaceDetailsInMessages(response.errors, details);
          let warnings = replaceDetailsInMessages(response.warnings, details);
          let outstanding = 1;
          let next = () => {
            if (--outstanding === 0) {
              let result = {
                warnings,
                code: response.code,
                map: response.map,
                mangleCache: void 0,
                legalComments: void 0
              };
              if ("legalComments" in response) result.legalComments = response == null ? void 0 : response.legalComments;
              if (response.mangleCache) result.mangleCache = response == null ? void 0 : response.mangleCache;
              callback(null, result);
            }
          };
          if (errors.length > 0) return callback(failureErrorWithLog("Transform failed", errors, warnings), null);
          if (response.codeFS) {
            outstanding++;
            fs3.readFile(response.code, (err, contents) => {
              if (err !== null) {
                callback(err, null);
              } else {
                response.code = contents;
                next();
              }
            });
          }
          if (response.mapFS) {
            outstanding++;
            fs3.readFile(response.map, (err, contents) => {
              if (err !== null) {
                callback(err, null);
              } else {
                response.map = contents;
                next();
              }
            });
          }
          next();
        });
      } catch (e) {
        let flags = [];
        try {
          pushLogFlags(flags, options, {}, isTTY2, transformLogLevelDefault);
        } catch {
        }
        const error = extractErrorMessageV8(e, streamIn, details, void 0, "");
        sendRequest(refs, { command: "error", flags, error }, () => {
          error.detail = details.load(error.detail);
          callback(failureErrorWithLog("Transform failed", [error], []), null);
        });
      }
    };
    if ((typeof input === "string" || input instanceof Uint8Array) && input.length > 1024 * 1024) {
      let next = start;
      start = () => fs3.writeFile(input, next);
    }
    start(null);
  };
  let formatMessages2 = ({ callName, refs, messages, options, callback }) => {
    if (!options) throw new Error(`Missing second argument in ${callName}() call`);
    let keys = {};
    let kind = getFlag(options, keys, "kind", mustBeString);
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let terminalWidth = getFlag(options, keys, "terminalWidth", mustBeInteger);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    if (kind === void 0) throw new Error(`Missing "kind" in ${callName}() call`);
    if (kind !== "error" && kind !== "warning") throw new Error(`Expected "kind" to be "error" or "warning" in ${callName}() call`);
    let request = {
      command: "format-msgs",
      messages: sanitizeMessages(messages, "messages", null, "", terminalWidth),
      isWarning: kind === "warning"
    };
    if (color !== void 0) request.color = color;
    if (terminalWidth !== void 0) request.terminalWidth = terminalWidth;
    sendRequest(refs, request, (error, response) => {
      if (error) return callback(new Error(error), null);
      callback(null, response.messages);
    });
  };
  let analyzeMetafile2 = ({ callName, refs, metafile, options, callback }) => {
    if (options === void 0) options = {};
    let keys = {};
    let color = getFlag(options, keys, "color", mustBeBoolean);
    let verbose = getFlag(options, keys, "verbose", mustBeBoolean);
    checkForInvalidFlags(options, keys, `in ${callName}() call`);
    let request = {
      command: "analyze-metafile",
      metafile
    };
    if (color !== void 0) request.color = color;
    if (verbose !== void 0) request.verbose = verbose;
    sendRequest(refs, request, (error, response) => {
      if (error) return callback(new Error(error), null);
      callback(null, response.result);
    });
  };
  return {
    readFromStdout,
    afterClose,
    service: {
      buildOrContext,
      transform: transform2,
      formatMessages: formatMessages2,
      analyzeMetafile: analyzeMetafile2
    }
  };
}
function buildOrContextImpl(callName, buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, options, isTTY2, defaultWD2, callback) {
  const details = createObjectStash();
  const isContext = callName === "context";
  const handleError = (e, pluginName) => {
    const flags = [];
    try {
      pushLogFlags(flags, options, {}, isTTY2, buildLogLevelDefault);
    } catch {
    }
    const message = extractErrorMessageV8(e, streamIn, details, void 0, pluginName);
    sendRequest(refs, { command: "error", flags, error: message }, () => {
      message.detail = details.load(message.detail);
      callback(failureErrorWithLog(isContext ? "Context failed" : "Build failed", [message], []), null);
    });
  };
  let plugins;
  if (typeof options === "object") {
    const value = options.plugins;
    if (value !== void 0) {
      if (!Array.isArray(value)) return handleError(new Error(`"plugins" must be an array`), "");
      plugins = value;
    }
  }
  if (plugins && plugins.length > 0) {
    if (streamIn.isSync) return handleError(new Error("Cannot use plugins in synchronous API calls"), "");
    handlePlugins(
      buildKey,
      sendRequest,
      sendResponse,
      refs,
      streamIn,
      requestCallbacks,
      options,
      plugins,
      details
    ).then(
      (result) => {
        if (!result.ok) return handleError(result.error, result.pluginName);
        try {
          buildOrContextContinue(result.requestPlugins, result.runOnEndCallbacks, result.scheduleOnDisposeCallbacks);
        } catch (e) {
          handleError(e, "");
        }
      },
      (e) => handleError(e, "")
    );
    return;
  }
  try {
    buildOrContextContinue(null, (result, done) => done([], []), () => {
    });
  } catch (e) {
    handleError(e, "");
  }
  function buildOrContextContinue(requestPlugins, runOnEndCallbacks, scheduleOnDisposeCallbacks) {
    const writeDefault = streamIn.hasFS;
    const {
      entries,
      flags,
      write,
      stdinContents,
      stdinResolveDir,
      absWorkingDir,
      nodePaths,
      mangleCache
    } = flagsForBuildOptions(callName, options, isTTY2, buildLogLevelDefault, writeDefault);
    if (write && !streamIn.hasFS) throw new Error(`The "write" option is unavailable in this environment`);
    const request = {
      command: "build",
      key: buildKey,
      entries,
      flags,
      write,
      stdinContents,
      stdinResolveDir,
      absWorkingDir: absWorkingDir || defaultWD2,
      nodePaths,
      context: isContext
    };
    if (requestPlugins) request.plugins = requestPlugins;
    if (mangleCache) request.mangleCache = mangleCache;
    const buildResponseToResult = (response, callback2) => {
      const result = {
        errors: replaceDetailsInMessages(response.errors, details),
        warnings: replaceDetailsInMessages(response.warnings, details),
        outputFiles: void 0,
        metafile: void 0,
        mangleCache: void 0
      };
      const originalErrors = result.errors.slice();
      const originalWarnings = result.warnings.slice();
      if (response.outputFiles) result.outputFiles = response.outputFiles.map(convertOutputFiles);
      if (response.metafile && response.metafile.length) result.metafile = parseJSON(response.metafile);
      if (response.mangleCache) result.mangleCache = response.mangleCache;
      if (response.writeToStdout !== void 0) console.log(decodeUTF8(response.writeToStdout).replace(/\n$/, ""));
      runOnEndCallbacks(result, (onEndErrors, onEndWarnings) => {
        if (originalErrors.length > 0 || onEndErrors.length > 0) {
          const error = failureErrorWithLog("Build failed", originalErrors.concat(onEndErrors), originalWarnings.concat(onEndWarnings));
          return callback2(error, null, onEndErrors, onEndWarnings);
        }
        callback2(null, result, onEndErrors, onEndWarnings);
      });
    };
    let latestResultPromise;
    let provideLatestResult;
    if (isContext)
      requestCallbacks["on-end"] = (id, request2) => new Promise((resolve) => {
        buildResponseToResult(request2, (err, result, onEndErrors, onEndWarnings) => {
          const response = {
            errors: onEndErrors,
            warnings: onEndWarnings
          };
          if (provideLatestResult) provideLatestResult(err, result);
          latestResultPromise = void 0;
          provideLatestResult = void 0;
          sendResponse(id, response);
          resolve();
        });
      });
    sendRequest(refs, request, (error, response) => {
      if (error) return callback(new Error(error), null);
      if (!isContext) {
        return buildResponseToResult(response, (err, res) => {
          scheduleOnDisposeCallbacks();
          return callback(err, res);
        });
      }
      if (response.errors.length > 0) {
        return callback(failureErrorWithLog("Context failed", response.errors, response.warnings), null);
      }
      let didDispose = false;
      const result = {
        rebuild: () => {
          if (!latestResultPromise) latestResultPromise = new Promise((resolve, reject) => {
            let settlePromise;
            provideLatestResult = (err, result2) => {
              if (!settlePromise) settlePromise = () => err ? reject(err) : resolve(result2);
            };
            const triggerAnotherBuild = () => {
              const request2 = {
                command: "rebuild",
                key: buildKey
              };
              sendRequest(refs, request2, (error2, response2) => {
                if (error2) {
                  reject(new Error(error2));
                } else if (settlePromise) {
                  settlePromise();
                } else {
                  triggerAnotherBuild();
                }
              });
            };
            triggerAnotherBuild();
          });
          return latestResultPromise;
        },
        watch: (options2 = {}) => new Promise((resolve, reject) => {
          if (!streamIn.hasFS) throw new Error(`Cannot use the "watch" API in this environment`);
          const keys = {};
          const delay = getFlag(options2, keys, "delay", mustBeInteger);
          checkForInvalidFlags(options2, keys, `in watch() call`);
          const request2 = {
            command: "watch",
            key: buildKey
          };
          if (delay) request2.delay = delay;
          sendRequest(refs, request2, (error2) => {
            if (error2) reject(new Error(error2));
            else resolve(void 0);
          });
        }),
        serve: (options2 = {}) => new Promise((resolve, reject) => {
          if (!streamIn.hasFS) throw new Error(`Cannot use the "serve" API in this environment`);
          const keys = {};
          const port = getFlag(options2, keys, "port", mustBeValidPortNumber);
          const host = getFlag(options2, keys, "host", mustBeString);
          const servedir = getFlag(options2, keys, "servedir", mustBeString);
          const keyfile = getFlag(options2, keys, "keyfile", mustBeString);
          const certfile = getFlag(options2, keys, "certfile", mustBeString);
          const fallback = getFlag(options2, keys, "fallback", mustBeString);
          const cors = getFlag(options2, keys, "cors", mustBeObject);
          const onRequest = getFlag(options2, keys, "onRequest", mustBeFunction);
          checkForInvalidFlags(options2, keys, `in serve() call`);
          const request2 = {
            command: "serve",
            key: buildKey,
            onRequest: !!onRequest
          };
          if (port !== void 0) request2.port = port;
          if (host !== void 0) request2.host = host;
          if (servedir !== void 0) request2.servedir = servedir;
          if (keyfile !== void 0) request2.keyfile = keyfile;
          if (certfile !== void 0) request2.certfile = certfile;
          if (fallback !== void 0) request2.fallback = fallback;
          if (cors) {
            const corsKeys = {};
            const origin = getFlag(cors, corsKeys, "origin", mustBeStringOrArrayOfStrings);
            checkForInvalidFlags(cors, corsKeys, `on "cors" object`);
            if (Array.isArray(origin)) request2.corsOrigin = origin;
            else if (origin !== void 0) request2.corsOrigin = [origin];
          }
          sendRequest(refs, request2, (error2, response2) => {
            if (error2) return reject(new Error(error2));
            if (onRequest) {
              requestCallbacks["serve-request"] = (id, request3) => {
                onRequest(request3.args);
                sendResponse(id, {});
              };
            }
            resolve(response2);
          });
        }),
        cancel: () => new Promise((resolve) => {
          if (didDispose) return resolve();
          const request2 = {
            command: "cancel",
            key: buildKey
          };
          sendRequest(refs, request2, () => {
            resolve();
          });
        }),
        dispose: () => new Promise((resolve) => {
          if (didDispose) return resolve();
          didDispose = true;
          const request2 = {
            command: "dispose",
            key: buildKey
          };
          sendRequest(refs, request2, () => {
            resolve();
            scheduleOnDisposeCallbacks();
            refs.unref();
          });
        })
      };
      refs.ref();
      callback(null, result);
    });
  }
}
var handlePlugins = async (buildKey, sendRequest, sendResponse, refs, streamIn, requestCallbacks, initialOptions, plugins, details) => {
  let onStartCallbacks = [];
  let onEndCallbacks = [];
  let onResolveCallbacks = {};
  let onLoadCallbacks = {};
  let onDisposeCallbacks = [];
  let nextCallbackID = 0;
  let i = 0;
  let requestPlugins = [];
  let isSetupDone = false;
  plugins = [...plugins];
  for (let item of plugins) {
    let keys = {};
    if (typeof item !== "object") throw new Error(`Plugin at index ${i} must be an object`);
    const name = getFlag(item, keys, "name", mustBeString);
    if (typeof name !== "string" || name === "") throw new Error(`Plugin at index ${i} is missing a name`);
    try {
      let setup = getFlag(item, keys, "setup", mustBeFunction);
      if (typeof setup !== "function") throw new Error(`Plugin is missing a setup function`);
      checkForInvalidFlags(item, keys, `on plugin ${quote(name)}`);
      let plugin = {
        name,
        onStart: false,
        onEnd: false,
        onResolve: [],
        onLoad: []
      };
      i++;
      let resolve = (path3, options = {}) => {
        if (!isSetupDone) throw new Error('Cannot call "resolve" before plugin setup has completed');
        if (typeof path3 !== "string") throw new Error(`The path to resolve must be a string`);
        let keys2 = /* @__PURE__ */ Object.create(null);
        let pluginName = getFlag(options, keys2, "pluginName", mustBeString);
        let importer = getFlag(options, keys2, "importer", mustBeString);
        let namespace = getFlag(options, keys2, "namespace", mustBeString);
        let resolveDir = getFlag(options, keys2, "resolveDir", mustBeString);
        let kind = getFlag(options, keys2, "kind", mustBeString);
        let pluginData = getFlag(options, keys2, "pluginData", canBeAnything);
        let importAttributes = getFlag(options, keys2, "with", mustBeObject);
        checkForInvalidFlags(options, keys2, "in resolve() call");
        return new Promise((resolve2, reject) => {
          const request = {
            command: "resolve",
            path: path3,
            key: buildKey,
            pluginName: name
          };
          if (pluginName != null) request.pluginName = pluginName;
          if (importer != null) request.importer = importer;
          if (namespace != null) request.namespace = namespace;
          if (resolveDir != null) request.resolveDir = resolveDir;
          if (kind != null) request.kind = kind;
          else throw new Error(`Must specify "kind" when calling "resolve"`);
          if (pluginData != null) request.pluginData = details.store(pluginData);
          if (importAttributes != null) request.with = sanitizeStringMap(importAttributes, "with");
          sendRequest(refs, request, (error, response) => {
            if (error !== null) reject(new Error(error));
            else resolve2({
              errors: replaceDetailsInMessages(response.errors, details),
              warnings: replaceDetailsInMessages(response.warnings, details),
              path: response.path,
              external: response.external,
              sideEffects: response.sideEffects,
              namespace: response.namespace,
              suffix: response.suffix,
              pluginData: details.load(response.pluginData)
            });
          });
        });
      };
      let promise = setup({
        initialOptions,
        resolve,
        onStart(callback) {
          let registeredText = `This error came from the "onStart" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onStart");
          onStartCallbacks.push({ name, callback, note: registeredNote });
          plugin.onStart = true;
        },
        onEnd(callback) {
          let registeredText = `This error came from the "onEnd" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onEnd");
          onEndCallbacks.push({ name, callback, note: registeredNote });
          plugin.onEnd = true;
        },
        onResolve(options, callback) {
          let registeredText = `This error came from the "onResolve" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onResolve");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onResolve() call for plugin ${quote(name)}`);
          if (filter == null) throw new Error(`onResolve() call is missing a filter`);
          let id = nextCallbackID++;
          onResolveCallbacks[id] = { name, callback, note: registeredNote };
          plugin.onResolve.push({ id, filter: jsRegExpToGoRegExp(filter), namespace: namespace || "" });
        },
        onLoad(options, callback) {
          let registeredText = `This error came from the "onLoad" callback registered here:`;
          let registeredNote = extractCallerV8(new Error(registeredText), streamIn, "onLoad");
          let keys2 = {};
          let filter = getFlag(options, keys2, "filter", mustBeRegExp);
          let namespace = getFlag(options, keys2, "namespace", mustBeString);
          checkForInvalidFlags(options, keys2, `in onLoad() call for plugin ${quote(name)}`);
          if (filter == null) throw new Error(`onLoad() call is missing a filter`);
          let id = nextCallbackID++;
          onLoadCallbacks[id] = { name, callback, note: registeredNote };
          plugin.onLoad.push({ id, filter: jsRegExpToGoRegExp(filter), namespace: namespace || "" });
        },
        onDispose(callback) {
          onDisposeCallbacks.push(callback);
        },
        esbuild: streamIn.esbuild
      });
      if (promise) await promise;
      requestPlugins.push(plugin);
    } catch (e) {
      return { ok: false, error: e, pluginName: name };
    }
  }
  requestCallbacks["on-start"] = async (id, request) => {
    details.clear();
    let response = { errors: [], warnings: [] };
    await Promise.all(onStartCallbacks.map(async ({ name, callback, note }) => {
      try {
        let result = await callback();
        if (result != null) {
          if (typeof result !== "object") throw new Error(`Expected onStart() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          checkForInvalidFlags(result, keys, `from onStart() callback in plugin ${quote(name)}`);
          if (errors != null) response.errors.push(...sanitizeMessages(errors, "errors", details, name, void 0));
          if (warnings != null) response.warnings.push(...sanitizeMessages(warnings, "warnings", details, name, void 0));
        }
      } catch (e) {
        response.errors.push(extractErrorMessageV8(e, streamIn, details, note && note(), name));
      }
    }));
    sendResponse(id, response);
  };
  requestCallbacks["on-resolve"] = async (id, request) => {
    let response = {}, name = "", callback, note;
    for (let id2 of request.ids) {
      try {
        ({ name, callback, note } = onResolveCallbacks[id2]);
        let result = await callback({
          path: request.path,
          importer: request.importer,
          namespace: request.namespace,
          resolveDir: request.resolveDir,
          kind: request.kind,
          pluginData: details.load(request.pluginData),
          with: request.with
        });
        if (result != null) {
          if (typeof result !== "object") throw new Error(`Expected onResolve() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let pluginName = getFlag(result, keys, "pluginName", mustBeString);
          let path3 = getFlag(result, keys, "path", mustBeString);
          let namespace = getFlag(result, keys, "namespace", mustBeString);
          let suffix = getFlag(result, keys, "suffix", mustBeString);
          let external = getFlag(result, keys, "external", mustBeBoolean);
          let sideEffects = getFlag(result, keys, "sideEffects", mustBeBoolean);
          let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
          let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
          checkForInvalidFlags(result, keys, `from onResolve() callback in plugin ${quote(name)}`);
          response.id = id2;
          if (pluginName != null) response.pluginName = pluginName;
          if (path3 != null) response.path = path3;
          if (namespace != null) response.namespace = namespace;
          if (suffix != null) response.suffix = suffix;
          if (external != null) response.external = external;
          if (sideEffects != null) response.sideEffects = sideEffects;
          if (pluginData != null) response.pluginData = details.store(pluginData);
          if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
          if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
          if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
          if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
          break;
        }
      } catch (e) {
        response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
        break;
      }
    }
    sendResponse(id, response);
  };
  requestCallbacks["on-load"] = async (id, request) => {
    let response = {}, name = "", callback, note;
    for (let id2 of request.ids) {
      try {
        ({ name, callback, note } = onLoadCallbacks[id2]);
        let result = await callback({
          path: request.path,
          namespace: request.namespace,
          suffix: request.suffix,
          pluginData: details.load(request.pluginData),
          with: request.with
        });
        if (result != null) {
          if (typeof result !== "object") throw new Error(`Expected onLoad() callback in plugin ${quote(name)} to return an object`);
          let keys = {};
          let pluginName = getFlag(result, keys, "pluginName", mustBeString);
          let contents = getFlag(result, keys, "contents", mustBeStringOrUint8Array);
          let resolveDir = getFlag(result, keys, "resolveDir", mustBeString);
          let pluginData = getFlag(result, keys, "pluginData", canBeAnything);
          let loader = getFlag(result, keys, "loader", mustBeString);
          let errors = getFlag(result, keys, "errors", mustBeArray);
          let warnings = getFlag(result, keys, "warnings", mustBeArray);
          let watchFiles = getFlag(result, keys, "watchFiles", mustBeArrayOfStrings);
          let watchDirs = getFlag(result, keys, "watchDirs", mustBeArrayOfStrings);
          checkForInvalidFlags(result, keys, `from onLoad() callback in plugin ${quote(name)}`);
          response.id = id2;
          if (pluginName != null) response.pluginName = pluginName;
          if (contents instanceof Uint8Array) response.contents = contents;
          else if (contents != null) response.contents = encodeUTF8(contents);
          if (resolveDir != null) response.resolveDir = resolveDir;
          if (pluginData != null) response.pluginData = details.store(pluginData);
          if (loader != null) response.loader = loader;
          if (errors != null) response.errors = sanitizeMessages(errors, "errors", details, name, void 0);
          if (warnings != null) response.warnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
          if (watchFiles != null) response.watchFiles = sanitizeStringArray(watchFiles, "watchFiles");
          if (watchDirs != null) response.watchDirs = sanitizeStringArray(watchDirs, "watchDirs");
          break;
        }
      } catch (e) {
        response = { id: id2, errors: [extractErrorMessageV8(e, streamIn, details, note && note(), name)] };
        break;
      }
    }
    sendResponse(id, response);
  };
  let runOnEndCallbacks = (result, done) => done([], []);
  if (onEndCallbacks.length > 0) {
    runOnEndCallbacks = (result, done) => {
      (async () => {
        const onEndErrors = [];
        const onEndWarnings = [];
        for (const { name, callback, note } of onEndCallbacks) {
          let newErrors;
          let newWarnings;
          try {
            const value = await callback(result);
            if (value != null) {
              if (typeof value !== "object") throw new Error(`Expected onEnd() callback in plugin ${quote(name)} to return an object`);
              let keys = {};
              let errors = getFlag(value, keys, "errors", mustBeArray);
              let warnings = getFlag(value, keys, "warnings", mustBeArray);
              checkForInvalidFlags(value, keys, `from onEnd() callback in plugin ${quote(name)}`);
              if (errors != null) newErrors = sanitizeMessages(errors, "errors", details, name, void 0);
              if (warnings != null) newWarnings = sanitizeMessages(warnings, "warnings", details, name, void 0);
            }
          } catch (e) {
            newErrors = [extractErrorMessageV8(e, streamIn, details, note && note(), name)];
          }
          if (newErrors) {
            onEndErrors.push(...newErrors);
            try {
              result.errors.push(...newErrors);
            } catch {
            }
          }
          if (newWarnings) {
            onEndWarnings.push(...newWarnings);
            try {
              result.warnings.push(...newWarnings);
            } catch {
            }
          }
        }
        done(onEndErrors, onEndWarnings);
      })();
    };
  }
  let scheduleOnDisposeCallbacks = () => {
    for (const cb of onDisposeCallbacks) {
      setTimeout(() => cb(), 0);
    }
  };
  isSetupDone = true;
  return {
    ok: true,
    requestPlugins,
    runOnEndCallbacks,
    scheduleOnDisposeCallbacks
  };
};
function createObjectStash() {
  const map = /* @__PURE__ */ new Map();
  let nextID = 0;
  return {
    clear() {
      map.clear();
    },
    load(id) {
      return map.get(id);
    },
    store(value) {
      if (value === void 0) return -1;
      const id = nextID++;
      map.set(id, value);
      return id;
    }
  };
}
function extractCallerV8(e, streamIn, ident) {
  let note;
  let tried = false;
  return () => {
    if (tried) return note;
    tried = true;
    try {
      let lines = (e.stack + "").split("\n");
      lines.splice(1, 1);
      let location = parseStackLinesV8(streamIn, lines, ident);
      if (location) {
        note = { text: e.message, location };
        return note;
      }
    } catch {
    }
  };
}
function extractErrorMessageV8(e, streamIn, stash, note, pluginName) {
  let text = "Internal error";
  let location = null;
  try {
    text = (e && e.message || e) + "";
  } catch {
  }
  try {
    location = parseStackLinesV8(streamIn, (e.stack + "").split("\n"), "");
  } catch {
  }
  return { id: "", pluginName, text, location, notes: note ? [note] : [], detail: stash ? stash.store(e) : -1 };
}
function parseStackLinesV8(streamIn, lines, ident) {
  let at = "    at ";
  if (streamIn.readFileSync && !lines[0].startsWith(at) && lines[1].startsWith(at)) {
    for (let i = 1; i < lines.length; i++) {
      let line = lines[i];
      if (!line.startsWith(at)) continue;
      line = line.slice(at.length);
      while (true) {
        let match = /^(?:new |async )?\S+ \((.*)\)$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(line);
        if (match) {
          line = match[1];
          continue;
        }
        match = /^(\S+):(\d+):(\d+)$/.exec(line);
        if (match) {
          let contents;
          try {
            contents = streamIn.readFileSync(match[1], "utf8");
          } catch {
            break;
          }
          let lineText = contents.split(/\r\n|\r|\n|\u2028|\u2029/)[+match[2] - 1] || "";
          let column = +match[3] - 1;
          let length = lineText.slice(column, column + ident.length) === ident ? ident.length : 0;
          return {
            file: match[1],
            namespace: "file",
            line: +match[2],
            column: encodeUTF8(lineText.slice(0, column)).length,
            length: encodeUTF8(lineText.slice(column, column + length)).length,
            lineText: lineText + "\n" + lines.slice(1).join("\n"),
            suggestion: ""
          };
        }
        break;
      }
    }
  }
  return null;
}
function failureErrorWithLog(text, errors, warnings) {
  let limit = 5;
  text += errors.length < 1 ? "" : ` with ${errors.length} error${errors.length < 2 ? "" : "s"}:` + errors.slice(0, limit + 1).map((e, i) => {
    if (i === limit) return "\n...";
    if (!e.location) return `
error: ${e.text}`;
    let { file, line, column } = e.location;
    let pluginText = e.pluginName ? `[plugin: ${e.pluginName}] ` : "";
    return `
${file}:${line}:${column}: ERROR: ${pluginText}${e.text}`;
  }).join("");
  let error = new Error(text);
  for (const [key, value] of [["errors", errors], ["warnings", warnings]]) {
    Object.defineProperty(error, key, {
      configurable: true,
      enumerable: true,
      get: () => value,
      set: (value2) => Object.defineProperty(error, key, {
        configurable: true,
        enumerable: true,
        value: value2
      })
    });
  }
  return error;
}
function replaceDetailsInMessages(messages, stash) {
  for (const message of messages) {
    message.detail = stash.load(message.detail);
  }
  return messages;
}
function sanitizeLocation(location, where, terminalWidth) {
  if (location == null) return null;
  let keys = {};
  let file = getFlag(location, keys, "file", mustBeString);
  let namespace = getFlag(location, keys, "namespace", mustBeString);
  let line = getFlag(location, keys, "line", mustBeInteger);
  let column = getFlag(location, keys, "column", mustBeInteger);
  let length = getFlag(location, keys, "length", mustBeInteger);
  let lineText = getFlag(location, keys, "lineText", mustBeString);
  let suggestion = getFlag(location, keys, "suggestion", mustBeString);
  checkForInvalidFlags(location, keys, where);
  if (lineText) {
    const relevantASCII = lineText.slice(
      0,
      (column && column > 0 ? column : 0) + (length && length > 0 ? length : 0) + (terminalWidth && terminalWidth > 0 ? terminalWidth : 80)
    );
    if (!/[\x7F-\uFFFF]/.test(relevantASCII) && !/\n/.test(lineText)) {
      lineText = relevantASCII;
    }
  }
  return {
    file: file || "",
    namespace: namespace || "",
    line: line || 0,
    column: column || 0,
    length: length || 0,
    lineText: lineText || "",
    suggestion: suggestion || ""
  };
}
function sanitizeMessages(messages, property, stash, fallbackPluginName, terminalWidth) {
  let messagesClone = [];
  let index = 0;
  for (const message of messages) {
    let keys = {};
    let id = getFlag(message, keys, "id", mustBeString);
    let pluginName = getFlag(message, keys, "pluginName", mustBeString);
    let text = getFlag(message, keys, "text", mustBeString);
    let location = getFlag(message, keys, "location", mustBeObjectOrNull);
    let notes = getFlag(message, keys, "notes", mustBeArray);
    let detail = getFlag(message, keys, "detail", canBeAnything);
    let where = `in element ${index} of "${property}"`;
    checkForInvalidFlags(message, keys, where);
    let notesClone = [];
    if (notes) {
      for (const note of notes) {
        let noteKeys = {};
        let noteText = getFlag(note, noteKeys, "text", mustBeString);
        let noteLocation = getFlag(note, noteKeys, "location", mustBeObjectOrNull);
        checkForInvalidFlags(note, noteKeys, where);
        notesClone.push({
          text: noteText || "",
          location: sanitizeLocation(noteLocation, where, terminalWidth)
        });
      }
    }
    messagesClone.push({
      id: id || "",
      pluginName: pluginName || fallbackPluginName,
      text: text || "",
      location: sanitizeLocation(location, where, terminalWidth),
      notes: notesClone,
      detail: stash ? stash.store(detail) : -1
    });
    index++;
  }
  return messagesClone;
}
function sanitizeStringArray(values, property) {
  const result = [];
  for (const value of values) {
    if (typeof value !== "string") throw new Error(`${quote(property)} must be an array of strings`);
    result.push(value);
  }
  return result;
}
function sanitizeStringMap(map, property) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const key in map) {
    const value = map[key];
    if (typeof value !== "string") throw new Error(`key ${quote(key)} in object ${quote(property)} must be a string`);
    result[key] = value;
  }
  return result;
}
function convertOutputFiles({ path: path3, contents, hash }) {
  let text = null;
  return {
    path: path3,
    contents,
    hash,
    get text() {
      const binary = this.contents;
      if (text === null || binary !== contents) {
        contents = binary;
        text = decodeUTF8(binary);
      }
      return text;
    }
  };
}
function jsRegExpToGoRegExp(regexp) {
  let result = regexp.source;
  if (regexp.flags) result = `(?${regexp.flags})${result}`;
  return result;
}
function parseJSON(bytes) {
  let text;
  try {
    text = decodeUTF8(bytes);
  } catch {
    return JSON_parse(bytes);
  }
  return JSON.parse(text);
}

// lib/npm/node-platform.ts
var fs = require("fs");
var os = require("os");
var path = require("path");
var ESBUILD_BINARY_PATH = process.env.ESBUILD_BINARY_PATH || ESBUILD_BINARY_PATH;
var isValidBinaryPath = (x) => !!x && x !== "/usr/bin/esbuild";
var packageDarwin_arm64 = "@esbuild/darwin-arm64";
var packageDarwin_x64 = "@esbuild/darwin-x64";
var knownWindowsPackages = {
  "win32 arm64 LE": "@esbuild/win32-arm64",
  "win32 ia32 LE": "@esbuild/win32-ia32",
  "win32 x64 LE": "@esbuild/win32-x64"
};
var knownUnixlikePackages = {
  "aix ppc64 BE": "@esbuild/aix-ppc64",
  "android arm64 LE": "@esbuild/android-arm64",
  "darwin arm64 LE": "@esbuild/darwin-arm64",
  "darwin x64 LE": "@esbuild/darwin-x64",
  "freebsd arm64 LE": "@esbuild/freebsd-arm64",
  "freebsd x64 LE": "@esbuild/freebsd-x64",
  "linux arm LE": "@esbuild/linux-arm",
  "linux arm64 LE": "@esbuild/linux-arm64",
  "linux ia32 LE": "@esbuild/linux-ia32",
  "linux mips64el LE": "@esbuild/linux-mips64el",
  "linux ppc64 LE": "@esbuild/linux-ppc64",
  "linux riscv64 LE": "@esbuild/linux-riscv64",
  "linux s390x BE": "@esbuild/linux-s390x",
  "linux x64 LE": "@esbuild/linux-x64",
  "linux loong64 LE": "@esbuild/linux-loong64",
  "netbsd arm64 LE": "@esbuild/netbsd-arm64",
  "netbsd x64 LE": "@esbuild/netbsd-x64",
  "openbsd arm64 LE": "@esbuild/openbsd-arm64",
  "openbsd x64 LE": "@esbuild/openbsd-x64",
  "sunos x64 LE": "@esbuild/sunos-x64"
};
var knownWebAssemblyFallbackPackages = {
  "android arm LE": "@esbuild/android-arm",
  "android x64 LE": "@esbuild/android-x64",
  "openharmony arm64 LE": "@esbuild/openharmony-arm64"
};
function pkgAndSubpathForCurrentPlatform() {
  let pkg;
  let subpath;
  let isWASM = false;
  let platformKey = `${process.platform} ${os.arch()} ${os.endianness()}`;
  if (platformKey in knownWindowsPackages) {
    pkg = knownWindowsPackages[platformKey];
    subpath = "esbuild.exe";
  } else if (platformKey in knownUnixlikePackages) {
    pkg = knownUnixlikePackages[platformKey];
    subpath = "bin/esbuild";
  } else if (platformKey in knownWebAssemblyFallbackPackages) {
    pkg = knownWebAssemblyFallbackPackages[platformKey];
    subpath = "bin/esbuild";
    isWASM = true;
  } else {
    throw new Error(`Unsupported platform: ${platformKey}`);
  }
  return { pkg, subpath, isWASM };
}
function pkgForSomeOtherPlatform() {
  const libMainJS = require.resolve("esbuild");
  const nodeModulesDirectory = path.dirname(path.dirname(path.dirname(libMainJS)));
  if (path.basename(nodeModulesDirectory) === "node_modules") {
    for (const unixKey in knownUnixlikePackages) {
      try {
        const pkg = knownUnixlikePackages[unixKey];
        if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
      } catch {
      }
    }
    for (const windowsKey in knownWindowsPackages) {
      try {
        const pkg = knownWindowsPackages[windowsKey];
        if (fs.existsSync(path.join(nodeModulesDirectory, pkg))) return pkg;
      } catch {
      }
    }
  }
  return null;
}
function downloadedBinPath(pkg, subpath) {
  const esbuildLibDir = path.dirname(require.resolve("esbuild"));
  return path.join(esbuildLibDir, `downloaded-${pkg.replace("/", "-")}-${path.basename(subpath)}`);
}
function generateBinPath() {
  if (isValidBinaryPath(ESBUILD_BINARY_PATH)) {
    if (!fs.existsSync(ESBUILD_BINARY_PATH)) {
      console.warn(`[esbuild] Ignoring bad configuration: ESBUILD_BINARY_PATH=${ESBUILD_BINARY_PATH}`);
    } else {
      return { binPath: ESBUILD_BINARY_PATH, isWASM: false };
    }
  }
  const { pkg, subpath, isWASM } = pkgAndSubpathForCurrentPlatform();
  let binPath;
  try {
    binPath = require.resolve(`${pkg}/${subpath}`);
  } catch (e) {
    binPath = downloadedBinPath(pkg, subpath);
    if (!fs.existsSync(binPath)) {
      try {
        require.resolve(pkg);
      } catch {
        const otherPkg = pkgForSomeOtherPlatform();
        if (otherPkg) {
          let suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild on Windows or macOS and copying "node_modules"
into a Docker image that runs Linux, or by copying "node_modules" between
Windows and WSL environments.

If you are installing with npm, you can try not copying the "node_modules"
directory when you copy the files over, and running "npm ci" or "npm install"
on the destination platform after the copy. Or you could consider using yarn
instead of npm which has built-in support for installing a package on multiple
platforms simultaneously.

If you are installing with yarn, you can try listing both this platform and the
other platform in your ".yarnrc.yml" file using the "supportedArchitectures"
feature: https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
          if (pkg === packageDarwin_x64 && otherPkg === packageDarwin_arm64 || pkg === packageDarwin_arm64 && otherPkg === packageDarwin_x64) {
            suggestions = `
Specifically the "${otherPkg}" package is present but this platform
needs the "${pkg}" package instead. People often get into this
situation by installing esbuild with npm running inside of Rosetta 2 and then
trying to use it with node running outside of Rosetta 2, or vice versa (Rosetta
2 is Apple's on-the-fly x86_64-to-arm64 translation service).

If you are installing with npm, you can try ensuring that both npm and node are
not running under Rosetta 2 and then reinstalling esbuild. This likely involves
changing how you installed npm and/or node. For example, installing node with
the universal installer here should work: https://nodejs.org/en/download/. Or
you could consider using yarn instead of npm which has built-in support for
installing a package on multiple platforms simultaneously.

If you are installing with yarn, you can try listing both "arm64" and "x64"
in your ".yarnrc.yml" file using the "supportedArchitectures" feature:
https://yarnpkg.com/configuration/yarnrc/#supportedArchitectures
Keep in mind that this means multiple copies of esbuild will be present.
`;
          }
          throw new Error(`
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
${suggestions}
Another alternative is to use the "esbuild-wasm" package instead, which works
the same way on all platforms. But it comes with a heavy performance cost and
can sometimes be 10x slower than the "esbuild" package, so you may also not
want to do that.
`);
        }
        throw new Error(`The package "${pkg}" could not be found, and is needed by esbuild.

If you are installing esbuild with npm, make sure that you don't specify the
"--no-optional" or "--omit=optional" flags. The "optionalDependencies" feature
of "package.json" is used by esbuild to install the correct binary executable
for your current platform.`);
      }
      throw e;
    }
  }
  if (/\.zip\//.test(binPath)) {
    let pnpapi;
    try {
      pnpapi = require("pnpapi");
    } catch (e) {
    }
    if (pnpapi) {
      const root = pnpapi.getPackageInformation(pnpapi.topLevel).packageLocation;
      const binTargetPath = path.join(
        root,
        "node_modules",
        ".cache",
        "esbuild",
        `pnpapi-${pkg.replace("/", "-")}-${"0.27.7"}-${path.basename(subpath)}`
      );
      if (!fs.existsSync(binTargetPath)) {
        fs.mkdirSync(path.dirname(binTargetPath), { recursive: true });
        fs.copyFileSync(binPath, binTargetPath);
        fs.chmodSync(binTargetPath, 493);
      }
      return { binPath: binTargetPath, isWASM };
    }
  }
  return { binPath, isWASM };
}

// lib/npm/node.ts
var child_process = require("child_process");
var crypto = require("crypto");
var path2 = require("path");
var fs2 = require("fs");
var os2 = require("os");
var tty = require("tty");
var worker_threads;
if (process.env.ESBUILD_WORKER_THREADS !== "0") {
  try {
    worker_threads = require("worker_threads");
  } catch {
  }
  let [major, minor] = process.versions.node.split(".");
  if (
    // <v12.17.0 does not work
    +major < 12 || +major === 12 && +minor < 17 || +major === 13 && +minor < 13
  ) {
    worker_threads = void 0;
  }
}
var _a;
var isInternalWorkerThread = ((_a = worker_threads == null ? void 0 : worker_threads.workerData) == null ? void 0 : _a.esbuildVersion) === "0.27.7";
var esbuildCommandAndArgs = () => {
  if ((!ESBUILD_BINARY_PATH || false) && (path2.basename(__filename) !== "main.js" || path2.basename(__dirname) !== "lib")) {
    throw new Error(
      `The esbuild JavaScript API cannot be bundled. Please mark the "esbuild" package as external so it's not included in the bundle.

More information: The file containing the code for esbuild's JavaScript API (${__filename}) does not appear to be inside the esbuild package on the file system, which usually means that the esbuild package was bundled into another file. This is problematic because the API needs to run a binary executable inside the esbuild package which is located using a relative path from the API code to the executable. If the esbuild package is bundled, the relative path will be incorrect and the executable won't be found.`
    );
  }
  if (false) {
    return ["node", [path2.join(__dirname, "..", "bin", "esbuild")]];
  } else {
    const { binPath, isWASM } = generateBinPath();
    if (isWASM) {
      return ["node", [binPath]];
    } else {
      return [binPath, []];
    }
  }
};
var isTTY = () => tty.isatty(2);
var fsSync = {
  readFile(tempFile, callback) {
    try {
      let contents = fs2.readFileSync(tempFile, "utf8");
      try {
        fs2.unlinkSync(tempFile);
      } catch {
      }
      callback(null, contents);
    } catch (err) {
      callback(err, null);
    }
  },
  writeFile(contents, callback) {
    try {
      let tempFile = randomFileName();
      fs2.writeFileSync(tempFile, contents);
      callback(tempFile);
    } catch {
      callback(null);
    }
  }
};
var fsAsync = {
  readFile(tempFile, callback) {
    try {
      fs2.readFile(tempFile, "utf8", (err, contents) => {
        try {
          fs2.unlink(tempFile, () => callback(err, contents));
        } catch {
          callback(err, contents);
        }
      });
    } catch (err) {
      callback(err, null);
    }
  },
  writeFile(contents, callback) {
    try {
      let tempFile = randomFileName();
      fs2.writeFile(tempFile, contents, (err) => err !== null ? callback(null) : callback(tempFile));
    } catch {
      callback(null);
    }
  }
};
var version = "0.27.7";
var build = (options) => ensureServiceIsRunning().build(options);
var context = (buildOptions) => ensureServiceIsRunning().context(buildOptions);
var transform = (input, options) => ensureServiceIsRunning().transform(input, options);
var formatMessages = (messages, options) => ensureServiceIsRunning().formatMessages(messages, options);
var analyzeMetafile = (messages, options) => ensureServiceIsRunning().analyzeMetafile(messages, options);
var buildSync = (options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.buildSync(options);
  }
  let result;
  runServiceSync((service) => service.buildOrContext({
    callName: "buildSync",
    refs: null,
    options,
    isTTY: isTTY(),
    defaultWD,
    callback: (err, res) => {
      if (err) throw err;
      result = res;
    }
  }));
  return result;
};
var transformSync = (input, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.transformSync(input, options);
  }
  let result;
  runServiceSync((service) => service.transform({
    callName: "transformSync",
    refs: null,
    input,
    options: options || {},
    isTTY: isTTY(),
    fs: fsSync,
    callback: (err, res) => {
      if (err) throw err;
      result = res;
    }
  }));
  return result;
};
var formatMessagesSync = (messages, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.formatMessagesSync(messages, options);
  }
  let result;
  runServiceSync((service) => service.formatMessages({
    callName: "formatMessagesSync",
    refs: null,
    messages,
    options,
    callback: (err, res) => {
      if (err) throw err;
      result = res;
    }
  }));
  return result;
};
var analyzeMetafileSync = (metafile, options) => {
  if (worker_threads && !isInternalWorkerThread) {
    if (!workerThreadService) workerThreadService = startWorkerThreadService(worker_threads);
    return workerThreadService.analyzeMetafileSync(metafile, options);
  }
  let result;
  runServiceSync((service) => service.analyzeMetafile({
    callName: "analyzeMetafileSync",
    refs: null,
    metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
    options,
    callback: (err, res) => {
      if (err) throw err;
      result = res;
    }
  }));
  return result;
};
var stop = () => {
  if (stopService) stopService();
  if (workerThreadService) workerThreadService.stop();
  return Promise.resolve();
};
var initializeWasCalled = false;
var initialize = (options) => {
  options = validateInitializeOptions(options || {});
  if (options.wasmURL) throw new Error(`The "wasmURL" option only works in the browser`);
  if (options.wasmModule) throw new Error(`The "wasmModule" option only works in the browser`);
  if (options.worker) throw new Error(`The "worker" option only works in the browser`);
  if (initializeWasCalled) throw new Error('Cannot call "initialize" more than once');
  ensureServiceIsRunning();
  initializeWasCalled = true;
  return Promise.resolve();
};
var defaultWD = process.cwd();
var longLivedService;
var stopService;
var ensureServiceIsRunning = () => {
  if (longLivedService) return longLivedService;
  let [command, args] = esbuildCommandAndArgs();
  let child = child_process.spawn(command, args.concat(`--service=${"0.27.7"}`, "--ping"), {
    windowsHide: true,
    stdio: ["pipe", "pipe", "inherit"],
    cwd: defaultWD
  });
  let { readFromStdout, afterClose, service } = createChannel({
    writeToStdin(bytes) {
      child.stdin.write(bytes, (err) => {
        if (err) afterClose(err);
      });
    },
    readFileSync: fs2.readFileSync,
    isSync: false,
    hasFS: true,
    esbuild: node_exports
  });
  child.stdin.on("error", afterClose);
  child.on("error", afterClose);
  const stdin = child.stdin;
  const stdout = child.stdout;
  stdout.on("data", readFromStdout);
  stdout.on("end", afterClose);
  stopService = () => {
    stdin.destroy();
    stdout.destroy();
    child.kill();
    initializeWasCalled = false;
    longLivedService = void 0;
    stopService = void 0;
  };
  let refCount = 0;
  child.unref();
  if (stdin.unref) {
    stdin.unref();
  }
  if (stdout.unref) {
    stdout.unref();
  }
  const refs = {
    ref() {
      if (++refCount === 1) child.ref();
    },
    unref() {
      if (--refCount === 0) child.unref();
    }
  };
  longLivedService = {
    build: (options) => new Promise((resolve, reject) => {
      service.buildOrContext({
        callName: "build",
        refs,
        options,
        isTTY: isTTY(),
        defaultWD,
        callback: (err, res) => err ? reject(err) : resolve(res)
      });
    }),
    context: (options) => new Promise((resolve, reject) => service.buildOrContext({
      callName: "context",
      refs,
      options,
      isTTY: isTTY(),
      defaultWD,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    transform: (input, options) => new Promise((resolve, reject) => service.transform({
      callName: "transform",
      refs,
      input,
      options: options || {},
      isTTY: isTTY(),
      fs: fsAsync,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    formatMessages: (messages, options) => new Promise((resolve, reject) => service.formatMessages({
      callName: "formatMessages",
      refs,
      messages,
      options,
      callback: (err, res) => err ? reject(err) : resolve(res)
    })),
    analyzeMetafile: (metafile, options) => new Promise((resolve, reject) => service.analyzeMetafile({
      callName: "analyzeMetafile",
      refs,
      metafile: typeof metafile === "string" ? metafile : JSON.stringify(metafile),
      options,
      callback: (err, res) => err ? reject(err) : resolve(res)
    }))
  };
  return longLivedService;
};
var runServiceSync = (callback) => {
  let [command, args] = esbuildCommandAndArgs();
  let stdin = new Uint8Array();
  let { readFromStdout, afterClose, service } = createChannel({
    writeToStdin(bytes) {
      if (stdin.length !== 0) throw new Error("Must run at most one command");
      stdin = bytes;
    },
    isSync: true,
    hasFS: true,
    esbuild: node_exports
  });
  callback(service);
  let stdout = child_process.execFileSync(command, args.concat(`--service=${"0.27.7"}`), {
    cwd: defaultWD,
    windowsHide: true,
    input: stdin,
    // We don't know how large the output could be. If it's too large, the
    // command will fail with ENOBUFS. Reserve 16mb for now since that feels
    // like it should be enough. Also allow overriding this with an environment
    // variable.
    maxBuffer: +process.env.ESBUILD_MAX_BUFFER || 16 * 1024 * 1024
  });
  readFromStdout(stdout);
  afterClose(null);
};
var randomFileName = () => {
  return path2.join(os2.tmpdir(), `esbuild-${crypto.randomBytes(32).toString("hex")}`);
};
var workerThreadService = null;
var startWorkerThreadService = (worker_threads2) => {
  let { port1: mainPort, port2: workerPort } = new worker_threads2.MessageChannel();
  let worker = new worker_threads2.Worker(__filename, {
    workerData: { workerPort, defaultWD, esbuildVersion: "0.27.7" },
    transferList: [workerPort],
    // From node's documentation: https://nodejs.org/api/worker_threads.html
    //
    //   Take care when launching worker threads from preload scripts (scripts loaded
    //   and run using the `-r` command line flag). Unless the `execArgv` option is
    //   explicitly set, new Worker threads automatically inherit the command line flags
    //   from the running process and will preload the same preload scripts as the main
    //   thread. If the preload script unconditionally launches a worker thread, every
    //   thread spawned will spawn another until the application crashes.
    //
    execArgv: []
  });
  let nextID = 0;
  let fakeBuildError = (text) => {
    let error = new Error(`Build failed with 1 error:
error: ${text}`);
    let errors = [{ id: "", pluginName: "", text, location: null, notes: [], detail: void 0 }];
    error.errors = errors;
    error.warnings = [];
    return error;
  };
  let validateBuildSyncOptions = (options) => {
    if (!options) return;
    let plugins = options.plugins;
    if (plugins && plugins.length > 0) throw fakeBuildError(`Cannot use plugins in synchronous API calls`);
  };
  let applyProperties = (object, properties) => {
    for (let key in properties) {
      object[key] = properties[key];
    }
  };
  let runCallSync = (command, args) => {
    let id = nextID++;
    let sharedBuffer = new SharedArrayBuffer(8);
    let sharedBufferView = new Int32Array(sharedBuffer);
    let msg = { sharedBuffer, id, command, args };
    worker.postMessage(msg);
    let status = Atomics.wait(sharedBufferView, 0, 0);
    if (status !== "ok" && status !== "not-equal") throw new Error("Internal error: Atomics.wait() failed: " + status);
    let { message: { id: id2, resolve, reject, properties } } = worker_threads2.receiveMessageOnPort(mainPort);
    if (id !== id2) throw new Error(`Internal error: Expected id ${id} but got id ${id2}`);
    if (reject) {
      applyProperties(reject, properties);
      throw reject;
    }
    return resolve;
  };
  worker.unref();
  return {
    buildSync(options) {
      validateBuildSyncOptions(options);
      return runCallSync("build", [options]);
    },
    transformSync(input, options) {
      return runCallSync("transform", [input, options]);
    },
    formatMessagesSync(messages, options) {
      return runCallSync("formatMessages", [messages, options]);
    },
    analyzeMetafileSync(metafile, options) {
      return runCallSync("analyzeMetafile", [metafile, options]);
    },
    stop() {
      worker.terminate();
      workerThreadService = null;
    }
  };
};
var startSyncServiceWorker = () => {
  let workerPort = worker_threads.workerData.workerPort;
  let parentPort = worker_threads.parentPort;
  let extractProperties = (object) => {
    let properties = {};
    if (object && typeof object === "object") {
      for (let key in object) {
        properties[key] = object[key];
      }
    }
    return properties;
  };
  try {
    let service = ensureServiceIsRunning();
    defaultWD = worker_threads.workerData.defaultWD;
    parentPort.on("message", (msg) => {
      (async () => {
        let { sharedBuffer, id, command, args } = msg;
        let sharedBufferView = new Int32Array(sharedBuffer);
        try {
          switch (command) {
            case "build":
              workerPort.postMessage({ id, resolve: await service.build(args[0]) });
              break;
            case "transform":
              workerPort.postMessage({ id, resolve: await service.transform(args[0], args[1]) });
              break;
            case "formatMessages":
              workerPort.postMessage({ id, resolve: await service.formatMessages(args[0], args[1]) });
              break;
            case "analyzeMetafile":
              workerPort.postMessage({ id, resolve: await service.analyzeMetafile(args[0], args[1]) });
              break;
            default:
              throw new Error(`Invalid command: ${command}`);
          }
        } catch (reject) {
          workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
        }
        Atomics.add(sharedBufferView, 0, 1);
        Atomics.notify(sharedBufferView, 0, Infinity);
      })();
    });
  } catch (reject) {
    parentPort.on("message", (msg) => {
      let { sharedBuffer, id } = msg;
      let sharedBufferView = new Int32Array(sharedBuffer);
      workerPort.postMessage({ id, reject, properties: extractProperties(reject) });
      Atomics.add(sharedBufferView, 0, 1);
      Atomics.notify(sharedBufferView, 0, Infinity);
    });
  }
};
if (isInternalWorkerThread) {
  startSyncServiceWorker();
}
var node_default = node_exports;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  analyzeMetafile,
  analyzeMetafileSync,
  build,
  buildSync,
  context,
  formatMessages,
  formatMessagesSync,
  initialize,
  stop,
  transform,
  transformSync,
  version
});
