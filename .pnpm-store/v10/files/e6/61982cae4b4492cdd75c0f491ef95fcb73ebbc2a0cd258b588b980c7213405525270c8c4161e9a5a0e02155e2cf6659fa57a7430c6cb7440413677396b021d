"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createFileContentHash = createFileContentHash;
var _fs = _interopRequireDefault(require("fs"));
var _crypto = _interopRequireDefault(require("crypto"));
var _glob = _interopRequireDefault(require("glob"));
function createFileContentHash(root, globPattern) {
  // TODO: Use hash-wasm
  const hash = _crypto.default.createHash(`md5`);
  const files = _glob.default.sync(`${root}/${globPattern}`, {
    nodir: true
  });
  files.forEach(filepath => {
    hash.update(_fs.default.readFileSync(filepath));
  });
  return hash.digest(`hex`);
}
//# sourceMappingURL=create-hash.js.map