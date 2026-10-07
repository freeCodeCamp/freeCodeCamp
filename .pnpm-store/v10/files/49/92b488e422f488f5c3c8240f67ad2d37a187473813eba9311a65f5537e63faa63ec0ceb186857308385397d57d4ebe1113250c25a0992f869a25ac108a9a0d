var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Hash: () => Hash
});
module.exports = __toCommonJS(src_exports);
var import_util_buffer_from = require("@smithy/util-buffer-from");
var import_util_utf8 = require("@smithy/util-utf8");
var import_buffer = require("buffer");
var import_crypto = require("crypto");
var _Hash = class _Hash {
  constructor(algorithmIdentifier, secret) {
    this.algorithmIdentifier = algorithmIdentifier;
    this.secret = secret;
    this.reset();
  }
  update(toHash, encoding) {
    this.hash.update((0, import_util_utf8.toUint8Array)(castSourceData(toHash, encoding)));
  }
  digest() {
    return Promise.resolve(this.hash.digest());
  }
  reset() {
    this.hash = this.secret ? (0, import_crypto.createHmac)(this.algorithmIdentifier, castSourceData(this.secret)) : (0, import_crypto.createHash)(this.algorithmIdentifier);
  }
};
__name(_Hash, "Hash");
var Hash = _Hash;
function castSourceData(toCast, encoding) {
  if (import_buffer.Buffer.isBuffer(toCast)) {
    return toCast;
  }
  if (typeof toCast === "string") {
    return (0, import_util_buffer_from.fromString)(toCast, encoding);
  }
  if (ArrayBuffer.isView(toCast)) {
    return (0, import_util_buffer_from.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
  }
  return (0, import_util_buffer_from.fromArrayBuffer)(toCast);
}
__name(castSourceData, "castSourceData");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  Hash
});

