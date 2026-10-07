"use strict";

exports.__esModule = true;
exports.md5File = void 0;
var _hashWasm = require("hash-wasm");
var fs = _interopRequireWildcard(require("fs-extra"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Create a MD5 hash from a given filePath
 * @param filePath Absolute path to the file
 * @returns MD5 hash in hex format
 */
const md5File = async filePath => {
  const md5hasher = await (0, _hashWasm.createMD5)();
  return new Promise((resolve, reject) => {
    md5hasher.init();
    const fileInput = fs.createReadStream(filePath);
    fileInput.on(`error`, err => {
      reject(err);
    });
    fileInput.on(`data`, data => {
      md5hasher.update(data);
    });
    fileInput.on(`end`, () => {
      resolve(md5hasher.digest(`hex`));
    });
  });
};
exports.md5File = md5File;