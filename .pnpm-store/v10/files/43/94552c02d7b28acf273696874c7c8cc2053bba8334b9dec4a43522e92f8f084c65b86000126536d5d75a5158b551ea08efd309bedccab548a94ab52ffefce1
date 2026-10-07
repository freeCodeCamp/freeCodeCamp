const { createRequire } = require("node:module");
const _createJiti = require("../dist/jiti.cjs");

function onError(err) {
  throw err; /* ↓ Check stack trace ↓ */
}

const nativeImport = (id) => import(id);

let _transform;
function lazyTransform(...args) {
  if (!_transform) {
    _transform = require("../dist/babel.cjs");
  }
  return _transform(...args);
}

function createJiti(id, opts = {}) {
  if (!opts.transform) {
    opts = { ...opts, transform: lazyTransform };
  }
  return _createJiti(id, opts, {
    onError,
    nativeImport,
    createRequire,
  });
}

module.exports = createJiti;
module.exports.createJiti = createJiti;
