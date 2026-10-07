'use strict';

exports.__esModule = true;

const Module = require('module');
const path = require('path');

// borrowed from babel-eslint
/** @type {(filename: string) => Module} */
function createModule(filename) {
  const mod = new Module(filename);
  mod.filename = filename;
  // @ts-expect-error _nodeModulesPaths are undocumented
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  return mod;
}

/** @type {import('./module-require').default} */
exports.default = function moduleRequire(p) {
  try {
    // attempt to get espree relative to eslint
    const eslintPath = require.resolve('eslint');
    const eslintModule = createModule(eslintPath);
    // @ts-expect-error _resolveFilename is undocumented
    return require(Module._resolveFilename(p, eslintModule));
  } catch (err) { /* ignore */ }

  try {
    // try relative to entry point
    // @ts-expect-error TODO: figure out what this is
    return require.main.require(p);
  } catch (err) { /* ignore */ }

  // finally, try from here
  return require(p);
};
