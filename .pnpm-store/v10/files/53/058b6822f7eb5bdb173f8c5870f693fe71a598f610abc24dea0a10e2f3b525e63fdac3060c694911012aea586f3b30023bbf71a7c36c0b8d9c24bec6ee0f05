"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.readFileSync = readFileSync;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fsReadFileAsync(pathname, encoding) {
  return new Promise((resolve, reject) => {
    _fs.default.readFile(pathname, encoding, (error, contents) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(contents);
    });
  });
}

async function readFile(filepath, options = {}) {
  const throwNotFound = options.throwNotFound === true;

  try {
    const content = await fsReadFileAsync(filepath, 'utf8');
    return content;
  } catch (error) {
    if (throwNotFound === false && (error.code === 'ENOENT' || error.code === 'EISDIR')) {
      return null;
    }

    throw error;
  }
}

function readFileSync(filepath, options = {}) {
  const throwNotFound = options.throwNotFound === true;

  try {
    const content = _fs.default.readFileSync(filepath, 'utf8');

    return content;
  } catch (error) {
    if (throwNotFound === false && (error.code === 'ENOENT' || error.code === 'EISDIR')) {
      return null;
    }

    throw error;
  }
}
//# sourceMappingURL=readFile.js.map