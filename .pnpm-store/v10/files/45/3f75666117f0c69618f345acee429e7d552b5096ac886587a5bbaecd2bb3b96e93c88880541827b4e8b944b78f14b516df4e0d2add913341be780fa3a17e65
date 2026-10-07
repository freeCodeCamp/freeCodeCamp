"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var streams_exports = {};
__export(streams_exports, {
  StringWriteStream: () => StringWriteStream
});
module.exports = __toCommonJS(streams_exports);
var import_stream = require("stream");
var import_util = require("../../util");
class StringWriteStream extends import_stream.Writable {
  constructor(output, stdio) {
    super();
    this._output = output;
    this._prefix = stdio === "stdout" ? "" : "[err] ";
  }
  _write(chunk, encoding, callback) {
    let text = (0, import_util.stripAnsiEscapes)(chunk.toString());
    if (text.endsWith("\n"))
      text = text.slice(0, -1);
    if (text)
      this._output.push(this._prefix + text);
    callback();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StringWriteStream
});
