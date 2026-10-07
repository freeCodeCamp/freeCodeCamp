import { createRequire } from "node:module";
import _createJiti from "../dist/jiti.cjs";

function onError(err) {
  throw err; /* ↓ Check stack trace ↓ */
}

const nativeImport = (id) => import(id);

let _transform;
function lazyTransform(...args) {
  if (!_transform) {
    _transform = createRequire(import.meta.url)("../dist/babel.cjs");
  }
  return _transform(...args);
}

export function createJiti(id, opts = {}) {
  if (!opts.transform) {
    opts = { ...opts, transform: lazyTransform };
  }
  return _createJiti(id, opts, {
    onError,
    nativeImport,
    createRequire,
  });
}

export default createJiti;
