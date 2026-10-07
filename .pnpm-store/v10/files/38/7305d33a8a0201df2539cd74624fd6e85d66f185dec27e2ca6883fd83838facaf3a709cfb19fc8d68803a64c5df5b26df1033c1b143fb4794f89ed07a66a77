'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helperPluginUtils = require('@babel/helper-plugin-utils');
var transformTypeScript = require('@babel/plugin-transform-typescript');
require('@babel/plugin-syntax-jsx');
var transformModulesCommonJS = require('@babel/plugin-transform-modules-commonjs');
var helperValidatorOption = require('@babel/helper-validator-option');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var transformTypeScript__default = /*#__PURE__*/_interopDefault(transformTypeScript);
var transformModulesCommonJS__default = /*#__PURE__*/_interopDefault(transformModulesCommonJS);

const v = new helperValidatorOption.OptionValidator("@babel/preset-typescript");
function normalizeOptions(options = {}) {
  let {
    allowNamespaces = true,
    jsxPragma,
    onlyRemoveTypeImports
  } = options;
  const TopLevelOptions = {
    ignoreExtensions: "ignoreExtensions",
    allowNamespaces: "allowNamespaces",
    disallowAmbiguousJSXLike: "disallowAmbiguousJSXLike",
    jsxPragma: "jsxPragma",
    jsxPragmaFrag: "jsxPragmaFrag",
    onlyRemoveTypeImports: "onlyRemoveTypeImports",
    optimizeConstEnums: "optimizeConstEnums",
    rewriteImportExtensions: "rewriteImportExtensions",
    allExtensions: "allExtensions",
    isTSX: "isTSX"
  };
  const jsxPragmaFrag = v.validateStringOption(TopLevelOptions.jsxPragmaFrag, options.jsxPragmaFrag, "React.Fragment");
  {
    var allExtensions = v.validateBooleanOption(TopLevelOptions.allExtensions, options.allExtensions, false);
    var isTSX = v.validateBooleanOption(TopLevelOptions.isTSX, options.isTSX, false);
    if (isTSX) {
      v.invariant(allExtensions, "isTSX:true requires allExtensions:true");
    }
  }
  const ignoreExtensions = v.validateBooleanOption(TopLevelOptions.ignoreExtensions, options.ignoreExtensions, false);
  const disallowAmbiguousJSXLike = v.validateBooleanOption(TopLevelOptions.disallowAmbiguousJSXLike, options.disallowAmbiguousJSXLike, false);
  if (disallowAmbiguousJSXLike) {
    {
      v.invariant(allExtensions, "disallowAmbiguousJSXLike:true requires allExtensions:true");
    }
  }
  const optimizeConstEnums = v.validateBooleanOption(TopLevelOptions.optimizeConstEnums, options.optimizeConstEnums, false);
  const rewriteImportExtensions = v.validateBooleanOption(TopLevelOptions.rewriteImportExtensions, options.rewriteImportExtensions, false);
  const normalized = {
    ignoreExtensions,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums,
    rewriteImportExtensions
  };
  {
    normalized.allExtensions = allExtensions;
    normalized.isTSX = isTSX;
  }
  return normalized;
}

var pluginRewriteTSImports = helperPluginUtils.declare(function ({
  types: t
}) {
  return {
    name: "preset-typescript/plugin-rewrite-ts-imports",
    visitor: {
      "ImportDeclaration|ExportAllDeclaration|ExportNamedDeclaration"({
        node
      }) {
        const {
          source
        } = node;
        const kind = t.isImportDeclaration(node) ? node.importKind : node.exportKind;
        if (kind === "value" && source && /[\\/]/.test(source.value)) {
          source.value = source.value.replace(/(\.[mc]?)ts$/, "$1js").replace(/\.tsx$/, ".js");
        }
      }
    }
  };
});

var index = helperPluginUtils.declarePreset((api, opts) => {
  api.assertVersion(7);
  const {
    allExtensions,
    ignoreExtensions,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    isTSX,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums,
    rewriteImportExtensions
  } = normalizeOptions(opts);
  const pluginOptions = disallowAmbiguousJSXLike => ({
    allowDeclareFields: opts.allowDeclareFields,
    allowNamespaces,
    disallowAmbiguousJSXLike,
    jsxPragma,
    jsxPragmaFrag,
    onlyRemoveTypeImports,
    optimizeConstEnums
  });
  const getPlugins = (isTSX, disallowAmbiguousJSXLike) => {
    {
      return [[transformTypeScript__default.default, Object.assign({
        isTSX
      }, pluginOptions(disallowAmbiguousJSXLike))]];
    }
  };
  const disableExtensionDetect = allExtensions || ignoreExtensions;
  return {
    plugins: rewriteImportExtensions ? [pluginRewriteTSImports] : [],
    overrides: disableExtensionDetect ? [{
      plugins: getPlugins(isTSX, disallowAmbiguousJSXLike)
    }] : [{
      test: /\.ts$/,
      plugins: getPlugins(false, false)
    }, {
      test: /\.mts$/,
      sourceType: "module",
      plugins: getPlugins(false, true)
    }, {
      test: /\.cts$/,
      sourceType: "unambiguous",
      plugins: [[transformModulesCommonJS__default.default, {
        allowTopLevelThis: true
      }], [transformTypeScript__default.default, pluginOptions(true)]]
    }, {
      test: /\.tsx$/,
      plugins: getPlugins(true, false)
    }]
  };
});

exports.default = index;
//# sourceMappingURL=index.js.map
