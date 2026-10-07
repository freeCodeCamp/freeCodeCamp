"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trueFn = trueFn;
exports.findModuleById = findModuleById;
exports.evalModuleCode = evalModuleCode;
exports.compareModulesByIdentifier = compareModulesByIdentifier;
exports.MODULE_TYPE = void 0;

var _module = _interopRequireDefault(require("module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trueFn() {
  return true;
}

function findModuleById(compilation, id) {
  const {
    modules,
    chunkGraph
  } = compilation;

  for (const module of modules) {
    const moduleId = typeof chunkGraph !== 'undefined' ? chunkGraph.getModuleId(module) : module.id;

    if (moduleId === id) {
      return module;
    }
  }

  return null;
}

function evalModuleCode(loaderContext, code, filename) {
  const module = new _module.default(filename, loaderContext);
  module.paths = _module.default._nodeModulePaths(loaderContext.context); // eslint-disable-line no-underscore-dangle

  module.filename = filename;

  module._compile(code, filename); // eslint-disable-line no-underscore-dangle


  return module.exports;
}

function compareIds(a, b) {
  if (typeof a !== typeof b) {
    return typeof a < typeof b ? -1 : 1;
  }

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

function compareModulesByIdentifier(a, b) {
  return compareIds(a.identifier(), b.identifier());
}

const MODULE_TYPE = 'css/mini-extract';
exports.MODULE_TYPE = MODULE_TYPE;