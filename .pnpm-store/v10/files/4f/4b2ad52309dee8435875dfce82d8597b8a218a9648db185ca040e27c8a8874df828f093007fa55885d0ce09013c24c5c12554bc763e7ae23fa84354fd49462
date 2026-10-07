"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnvironment = createEnvironment;
exports.mergeEnvironments = mergeEnvironments;

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _utils = require("./utils");

var _Environment = _interopRequireWildcard(require("./public/Environment"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DEFAULT_ENGINES = {
  browsers: ['> 0.25%'],
  node: '>= 8.0.0'
};

function createEnvironment({
  context,
  engines,
  includeNodeModules,
  outputFormat,
  sourceType = 'module',
  shouldOptimize = false,
  isLibrary = false,
  shouldScopeHoist = false,
  sourceMap,
  loc
} = {
  /*::...null*/
}) {
  if (context == null) {
    var _engines, _engines2;

    if ((_engines = engines) !== null && _engines !== void 0 && _engines.node) {
      context = 'node';
    } else if ((_engines2 = engines) !== null && _engines2 !== void 0 && _engines2.browsers) {
      context = 'browser';
    } else {
      context = 'browser';
    }
  }

  if (engines == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
        engines = {
          node: DEFAULT_ENGINES.node
        };
        break;

      case 'browser':
      case 'web-worker':
      case 'service-worker':
      case 'electron-renderer':
        engines = {
          browsers: DEFAULT_ENGINES.browsers
        };
        break;

      default:
        engines = {};
    }
  }

  if (includeNodeModules == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
      case 'electron-renderer':
        includeNodeModules = false;
        break;

      case 'browser':
      case 'web-worker':
      case 'service-worker':
      default:
        includeNodeModules = true;
        break;
    }
  }

  if (outputFormat == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
      case 'electron-renderer':
        outputFormat = 'commonjs';
        break;

      default:
        outputFormat = 'global';
        break;
    }
  }

  let res = {
    id: '',
    context,
    engines,
    includeNodeModules,
    outputFormat,
    sourceType,
    isLibrary,
    shouldOptimize,
    shouldScopeHoist,
    sourceMap,
    loc
  };
  res.id = getEnvironmentHash(res);
  return res;
}

function mergeEnvironments(projectRoot, a, b) {
  // If merging the same object, avoid copying.
  if (a === b || !b) {
    return a;
  }

  if (b instanceof _Environment.default) {
    return (0, _Environment.environmentToInternalEnvironment)(b);
  } // $FlowFixMe - ignore the `id` that is already on a


  return createEnvironment({ ...a,
    ...b,
    loc: b.loc ? (0, _utils.toInternalSourceLocation)(projectRoot, b.loc) : a.loc
  });
}

function getEnvironmentHash(env) {
  return (0, _hash().hashString)(JSON.stringify([env.context, env.engines, env.includeNodeModules, env.outputFormat, env.sourceType, env.isLibrary, env.shouldOptimize, env.shouldScopeHoist, env.sourceMap]));
}