// ------------------------------------------------------------------
// Post Build
//
// TypeScript emits .mjs files when compiling from .mts. This
// is true even if the module target is set to CommonJS. This
// code renames the compiler emitted files to use the correct
// file extension.
//
// Run via:
//
// $ npm run build:post
//
// ------------------------------------------------------------------

const fs = require('node:fs')
fs.renameSync('dist/cjs/index.d.mts', 'dist/cjs/index.d.ts')
fs.renameSync('dist/cjs/index.mjs', 'dist/cjs/index.js')
