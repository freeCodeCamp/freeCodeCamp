import Module from "module";
import path from "path";

/**
 * We need to use private Module methods in this polyfill
 */

const fallback = filename => {
  const mod = new Module(filename);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  mod._compile(`module.exports = require;`, filename);
  return mod.exports;
};

// Polyfill Node's `Module.createRequireFromPath` if not present (added in Node v10.12.0)
export const createRequireFromPath = Module.createRequire || Module.createRequireFromPath || fallback;