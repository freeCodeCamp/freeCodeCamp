"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformFile = void 0;
exports.transformFileAsync = transformFileAsync;
exports.transformFileSync = transformFileSync;
const transformFile = exports.transformFile = function transformFile(filename, opts, callback) {
  if (typeof opts === "function") {
    callback = opts;
  }
  callback(new Error("Transforming files is not supported in browsers"), null);
};
function transformFileSync() {
  throw new Error("Transforming files is not supported in browsers");
}
function transformFileAsync() {
  return Promise.reject(new Error("Transforming files is not supported in browsers"));
}
0 && 0;

//# sourceMappingURL=transform-file-browser.js.map
