"use strict"
exports.__esModule = true

const Module = require('module')
const path = require('path')

// borrowed from babel-eslint
function createModule(filename) {
  const mod = new Module(filename)
  mod.filename = filename
  mod.paths = Module._nodeModulePaths(path.dirname(filename))
  return mod
}

exports.default = function moduleRequire(p) {
  try {
    // attempt to get espree relative to eslint
    const eslintPath = require.resolve('eslint')
    const eslintModule = createModule(eslintPath)
    return require(Module._resolveFilename(p, eslintModule))
  } catch(err) { /* ignore */ }

  try {
    // try relative to entry point
    return require.main.require(p)
  } catch(err) { /* ignore */ }

  // finally, try from here
  return require(p)
}
