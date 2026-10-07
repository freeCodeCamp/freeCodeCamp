"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _resolve = _interopRequireDefault(require("./resolve"));
const CSS_PATTERN = /\.css$/;
const MODULE_CSS_PATTERN = /\.module\.css$/;
const isCssRules = rule => rule.test && (rule.test.toString() === CSS_PATTERN.toString() || rule.test.toString() === MODULE_CSS_PATTERN.toString());
const findCssRules = config => config.module.rules.find(rule => Array.isArray(rule.oneOf) && rule.oneOf.every(isCssRules));
exports.onCreateWebpackConfig = ({
  actions,
  stage,
  loaders,
  getConfig
},
// eslint-disable-next-line no-unused-vars
{
  cssLoaderOptions = {},
  postCssPlugins,
  plugins,
  ...postcssLoaderOptions
}) => {
  var _cssLoaderOptions$mod, _cssLoaderOptions$mod2, _cssLoaderOptions$mod3;
  const isSSR = [`develop-html`, `build-html`].includes(stage);
  const config = getConfig();
  const cssRules = findCssRules(config);
  if (!postcssLoaderOptions.postcssOptions) {
    postcssLoaderOptions.postcssOptions = {};
  }
  if (postCssPlugins) {
    postcssLoaderOptions.postcssOptions.plugins = postCssPlugins;
  }
  const postcssLoader = {
    loader: (0, _resolve.default)(`postcss-loader`),
    options: postcssLoaderOptions
  };
  const postcssRule = {
    test: CSS_PATTERN,
    use: isSSR ? [loaders.null()] : [loaders.miniCssExtract(), loaders.css({
      ...cssLoaderOptions,
      importLoaders: 1,
      modules: false
    }), postcssLoader]
  };
  const postcssRuleModules = {
    test: MODULE_CSS_PATTERN,
    use: [!isSSR && loaders.miniCssExtract({
      modules: {
        namedExport: (_cssLoaderOptions$mod = (_cssLoaderOptions$mod2 = cssLoaderOptions.modules) === null || _cssLoaderOptions$mod2 === void 0 ? void 0 : _cssLoaderOptions$mod2.namedExport) !== null && _cssLoaderOptions$mod !== void 0 ? _cssLoaderOptions$mod : true
      }
    }), loaders.css({
      ...cssLoaderOptions,
      importLoaders: 1,
      modules: (_cssLoaderOptions$mod3 = cssLoaderOptions.modules) !== null && _cssLoaderOptions$mod3 !== void 0 ? _cssLoaderOptions$mod3 : true
    }), postcssLoader].filter(Boolean)
  };
  const postcssRules = {
    oneOf: [postcssRuleModules, postcssRule]
  };
  if (cssRules) {
    cssRules.oneOf.unshift(...postcssRules.oneOf);
    actions.replaceWebpackConfig(config);
  } else {
    actions.setWebpackConfig({
      module: {
        rules: [postcssRules]
      }
    });
  }
};