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
  calculateBodyLength: () => calculateBodyLength
});
module.exports = __toCommonJS(src_exports);

// src/calculateBodyLength.ts
var import_fs = require("fs");
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (!body) {
    return 0;
  }
  if (typeof body === "string") {
    return Buffer.byteLength(body);
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  } else if (typeof body.start === "number" && typeof body.end === "number") {
    return body.end + 1 - body.start;
  } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
    return (0, import_fs.lstatSync)(body.path).size;
  } else if (typeof body.fd === "number") {
    return (0, import_fs.fstatSync)(body.fd).size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  calculateBodyLength
});

