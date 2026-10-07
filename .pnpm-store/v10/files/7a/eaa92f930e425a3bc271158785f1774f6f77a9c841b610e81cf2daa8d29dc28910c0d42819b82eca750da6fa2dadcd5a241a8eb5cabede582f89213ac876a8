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
var chunk_FKGWOTGU_exports = {};
__export(chunk_FKGWOTGU_exports, {
  getHash: () => getHash
});
module.exports = __toCommonJS(chunk_FKGWOTGU_exports);
var import_node_crypto = __toESM(require("node:crypto"));
var import_node_fs = __toESM(require("node:fs"));
function getHash(filePath) {
  const hash = import_node_crypto.default.createHash("sha256");
  const input = import_node_fs.default.createReadStream(filePath);
  return new Promise((resolve) => {
    input.on("readable", () => {
      const data = input.read();
      if (data) {
        hash.update(data);
      } else {
        resolve(hash.digest("hex"));
      }
    });
  });
}
