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
  escapeUri: () => escapeUri,
  escapeUriPath: () => escapeUriPath
});
module.exports = __toCommonJS(src_exports);

// src/escape-uri.ts
var escapeUri = /* @__PURE__ */ __name((uri) => (
  // AWS percent-encodes some extra non-standard characters in a URI
  encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// src/escape-uri-path.ts
var escapeUriPath = /* @__PURE__ */ __name((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  escapeUri,
  escapeUriPath
});

