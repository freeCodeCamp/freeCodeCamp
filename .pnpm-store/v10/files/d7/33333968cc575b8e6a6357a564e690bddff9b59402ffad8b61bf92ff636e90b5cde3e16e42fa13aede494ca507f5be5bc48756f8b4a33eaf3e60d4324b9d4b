// This file is a shim which defers loading the real module until the compile cache is enabled.
try {
  const { enableCompileCache } = require("node:module");
  if (enableCompileCache) {
    enableCompileCache();
  }
} catch {}
module.exports = require("./_typingsInstaller.js");
