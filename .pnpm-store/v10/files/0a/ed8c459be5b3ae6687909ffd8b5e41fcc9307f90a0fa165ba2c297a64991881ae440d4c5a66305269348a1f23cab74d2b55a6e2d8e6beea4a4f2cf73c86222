"use strict";

exports.__esModule = true;
exports.default = void 0;
var path = _interopRequireWildcard(require("path"));
var _index = require("./index");
var _exclude = require("gatsby-legacy-polyfills/dist/exclude");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// This file is heavily based on create-react-app's implementation
// @see https://github.com/facebook/create-react-app/blob/master/packages/babel-preset-react-app/dependencies.js
// export default is required here because it is passed directly to webpack
// via require.resolve
// This function has a better inference than would be beneficial to type, and it's relatively easy to grok.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var _default = (_, options = {}) => {
  const absoluteRuntimePath = path.dirname(require.resolve(`@babel/runtime/package.json`));
  const stage = options.stage || `test`;
  const pluginBabelConfig = (0, _index.loadCachedConfig)();
  const targets = pluginBabelConfig.browserslist;
  return {
    // Babel assumes ES Modules, which isn't safe until CommonJS
    // dies. This changes the behavior to assume CommonJS unless
    // an `import` or `export` is present in the file.
    // https://github.com/webpack/webpack/issues/4039#issuecomment-419284940
    sourceType: `unambiguous`,
    presets: [[
    // Latest stable ECMAScript features
    require.resolve(`@babel/preset-env`), {
      // Allow importing core-js in entrypoint and use browserlist to select polyfills
      // V3 change, make this entry
      useBuiltIns: `usage`,
      corejs: 3,
      modules: false,
      // debug: true,
      targets,
      exclude: [
      // Exclude transforms that make all code slower (https://github.com/facebook/create-react-app/pull/5278)
      `transform-typeof-symbol`, ..._exclude.CORE_JS_POLYFILL_EXCLUDE_LIST]
    }]],
    plugins: [
    // Polyfills the runtime needed for async/await, generators, and friends
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    [require.resolve(`@babel/plugin-transform-runtime`), {
      corejs: false,
      helpers: true,
      regenerator: true,
      // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
      // We should turn this on once the lowest version of Node LTS
      // supports ES Modules.
      useESModules: true,
      // Undocumented option that lets us encapsulate our runtime, ensuring
      // the correct version is used
      // https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
      absoluteRuntime: absoluteRuntimePath
    }],
    // Adds syntax support for import()
    require.resolve(`@babel/plugin-syntax-dynamic-import`), stage === `build-javascript` && [
    // Remove PropTypes from production build
    require.resolve(`babel-plugin-transform-react-remove-prop-types`), {
      removeImport: true
    }]].filter(Boolean)
  };
};
exports.default = _default;