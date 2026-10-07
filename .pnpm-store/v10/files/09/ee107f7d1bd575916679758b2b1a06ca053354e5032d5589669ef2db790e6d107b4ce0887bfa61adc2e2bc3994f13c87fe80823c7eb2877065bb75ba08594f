'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var transformReactJSX = require('@babel/plugin-transform-react-jsx');
var transformReactJSXDevelopment = require('@babel/plugin-transform-react-jsx-development');
var transformReactDisplayName = require('@babel/plugin-transform-react-display-name');
var transformReactPure = require('@babel/plugin-transform-react-pure-annotations');
var helperValidatorOption = require('@babel/helper-validator-option');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var transformReactJSX__default = /*#__PURE__*/_interopDefault(transformReactJSX);
var transformReactJSXDevelopment__default = /*#__PURE__*/_interopDefault(transformReactJSXDevelopment);
var transformReactDisplayName__default = /*#__PURE__*/_interopDefault(transformReactDisplayName);
var transformReactPure__default = /*#__PURE__*/_interopDefault(transformReactPure);

new helperValidatorOption.OptionValidator("@babel/preset-react");
function normalizeOptions(options = {}) {
  {
    let {
      pragma,
      pragmaFrag
    } = options;
    const {
      pure,
      throwIfNamespace = true,
      runtime = "classic",
      importSource,
      useBuiltIns,
      useSpread
    } = options;
    if (runtime === "classic") {
      pragma = pragma || "React.createElement";
      pragmaFrag = pragmaFrag || "React.Fragment";
    }
    const development = !!options.development;
    return {
      development,
      importSource,
      pragma,
      pragmaFrag,
      pure,
      runtime,
      throwIfNamespace,
      useBuiltIns,
      useSpread
    };
  }
}

var index = helperPluginUtils.declarePreset((api, opts) => {
  api.assertVersion(7);
  const {
    development,
    importSource,
    pragma,
    pragmaFrag,
    pure,
    runtime,
    throwIfNamespace
  } = normalizeOptions(opts);
  return {
    plugins: [[development ? transformReactJSXDevelopment__default.default : transformReactJSX__default.default, {
      importSource,
      pragma,
      pragmaFrag,
      runtime,
      throwIfNamespace,
      pure,
      useBuiltIns: !!opts.useBuiltIns,
      useSpread: opts.useSpread
    }], transformReactDisplayName__default.default, pure !== false && transformReactPure__default.default].filter(Boolean)
  };
});

exports.default = index;
//# sourceMappingURL=index.js.map
