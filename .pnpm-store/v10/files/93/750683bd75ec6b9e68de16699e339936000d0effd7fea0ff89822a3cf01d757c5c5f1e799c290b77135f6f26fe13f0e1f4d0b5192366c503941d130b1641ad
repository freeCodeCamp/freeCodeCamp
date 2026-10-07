"use strict";

exports.__esModule = true;
// This module should be imported as first or one first modules in engines.
// It allows to provide alternative `fs` module by setting `global._fsWrapper`
// variable before importing engine. It will automatically fallback to regular
// `fs` if alternative `fs` is not provided.

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/naming-convention

if (global._fsWrapper) {
  global._actualFsWrapper = global._fsWrapper;
} else {
  // fs alternative not provided - falling back to regular fs
  global._actualFsWrapper = __non_webpack_require__(`fs`);
}

// hydrate webpack module cache (consume global, so it's not lazy)
require(`fs`);

// https://stackoverflow.com/a/59499895
//# sourceMappingURL=engines-fs-provider.js.map