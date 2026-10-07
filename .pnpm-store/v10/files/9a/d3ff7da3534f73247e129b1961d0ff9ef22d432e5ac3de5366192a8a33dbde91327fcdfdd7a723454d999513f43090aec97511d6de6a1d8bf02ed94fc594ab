"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

function _nodeResolverCore() {
  const data = _interopRequireDefault(require("@parcel/node-resolver-core"));

  _nodeResolverCore = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Throw user friendly errors on special webpack loader syntax
// ex. `imports-loader?$=jquery!./example.js`
const WEBPACK_IMPORT_REGEX = /^\w+-loader(?:\?\S*)?!/;

var _default = new (_plugin().Resolver)({
  resolve({
    dependency,
    options,
    specifier,
    logger
  }) {
    if (WEBPACK_IMPORT_REGEX.test(dependency.specifier)) {
      throw new Error(`The import path: ${dependency.specifier} is using webpack specific loader import syntax, which isn't supported by Parcel.`);
    }

    const resolver = new (_nodeResolverCore().default)({
      fs: options.inputFS,
      projectRoot: options.projectRoot,
      // Extensions are always required in URL dependencies.
      extensions: dependency.specifierType === 'commonjs' || dependency.specifierType === 'esm' ? ['ts', 'tsx', 'mjs', 'js', 'jsx', 'cjs', 'json'] : [],
      mainFields: ['source', 'browser', 'module', 'main'],
      packageManager: options.packageManager,
      shouldAutoInstall: options.shouldAutoInstall,
      logger
    });
    return resolver.resolve({
      filename: specifier,
      specifierType: dependency.specifierType,
      range: dependency.range,
      parent: dependency.resolveFrom,
      env: dependency.env,
      sourcePath: dependency.sourcePath,
      loc: dependency.loc
    });
  }

});

exports.default = _default;