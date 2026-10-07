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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Uint8ArrayBlobAdapter: () => Uint8ArrayBlobAdapter
});
module.exports = __toCommonJS(src_exports);

// src/blob/transforms.ts
var import_util_base64 = require("@smithy/util-base64");
var import_util_utf8 = require("@smithy/util-utf8");
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return (0, import_util_base64.toBase64)(payload);
  }
  return (0, import_util_utf8.toUtf8)(payload);
}
__name(transformToString, "transformToString");
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate((0, import_util_base64.fromBase64)(str));
  }
  return Uint8ArrayBlobAdapter.mutate((0, import_util_utf8.fromUtf8)(str));
}
__name(transformFromString, "transformFromString");

// src/blob/Uint8ArrayBlobAdapter.ts
var _Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
  /**
   * @param source - such as a string or Stream.
   * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
   */
  static fromString(source, encoding = "utf-8") {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }
  /**
   * @param source - Uint8Array to be mutated.
   * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
   */
  static mutate(source) {
    Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  /**
   * @param encoding - default 'utf-8'.
   * @returns the blob as string.
   */
  transformToString(encoding = "utf-8") {
    return transformToString(this, encoding);
  }
};
__name(_Uint8ArrayBlobAdapter, "Uint8ArrayBlobAdapter");
var Uint8ArrayBlobAdapter = _Uint8ArrayBlobAdapter;

// src/index.ts
__reExport(src_exports, require("././getAwsChunkedEncodingStream"), module.exports);
__reExport(src_exports, require("././sdk-stream-mixin"), module.exports);
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  Uint8ArrayBlobAdapter,
  getAwsChunkedEncodingStream,
  sdkStreamMixin
});

