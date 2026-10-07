"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createWebpackUtils = void 0;
var path = _interopRequireWildcard(require("path"));
var _autoprefixer = _interopRequireDefault(require("autoprefixer"));
var _postcssFlexbugsFixes = _interopRequireDefault(require("postcss-flexbugs-fixes"));
var _terserWebpackPlugin = _interopRequireDefault(require("terser-webpack-plugin"));
var _miniCssExtractPlugin = _interopRequireDefault(require("mini-css-extract-plugin"));
var _cssMinimizerWebpackPlugin = _interopRequireDefault(require("css-minimizer-webpack-plugin"));
var _reactRefreshWebpackPlugin = _interopRequireDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var _browserslist = require("./browserslist");
var _eslintWebpackPlugin = _interopRequireDefault(require("eslint-webpack-plugin"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _gatsbyWebpackStatsExtractor = require("./gatsby-webpack-stats-extractor");
var _getPublicPath = require("./get-public-path");
var _gatsbyWebpackVirtualModules = require("./gatsby-webpack-virtual-modules");
var _webpackPlugins = require("./webpack-plugins");
var _eslintConfig = require("./eslint-config");
var _redux = require("../redux");
var _constants = require("../constants");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const vendorRegex = /(node_modules|bower_components)/;

/**
 * A factory method that produces an atoms namespace
 */
const createWebpackUtils = (stage, program) => {
  const assetRelativeRoot = `static/`;
  const supportedBrowsers = (0, _browserslist.getBrowsersList)(program.directory);
  const PRODUCTION = !stage.includes(`develop`);
  const isSSR = stage.includes(`html`);
  const {
    config
  } = _redux.store.getState();
  const {
    assetPrefix,
    pathPrefix
  } = config;
  const publicPath = (0, _getPublicPath.getPublicPath)({
    assetPrefix,
    pathPrefix,
    ...program
  });
  const makeExternalOnly = original => (options = {}) => {
    const rule = original(options);
    rule.include = vendorRegex;
    return rule;
  };
  const makeInternalOnly = original => (options = {}) => {
    const rule = original(options);
    rule.exclude = vendorRegex;
    return rule;
  };
  const fileLoaderCommonOptions = {
    name: `${assetRelativeRoot}[name]-[hash].[ext]`
  };
  if (stage === `build-html` || stage === `develop-html`) {
    // build-html and develop-html outputs to `.cache/page-ssr/routes/` (ROUTES_DIRECTORY)
    // so this config is setting it to output assets to `public` (outputPath)
    // while preserving "url" (publicPath)
    fileLoaderCommonOptions.outputPath = path.relative(_constants.ROUTES_DIRECTORY, `public`);
    fileLoaderCommonOptions.publicPath = publicPath || `/`;
  }
  const loaders = {
    json: (options = {}) => {
      return {
        options,
        loader: require.resolve(`json-loader`)
      };
    },
    yaml: (options = {}) => {
      return {
        loader: require.resolve(`yaml-loader`),
        options: {
          asJSON: true,
          ...options
        }
      };
    },
    null: (options = {}) => {
      return {
        options,
        loader: require.resolve(`null-loader`)
      };
    },
    raw: (options = {}) => {
      return {
        options,
        loader: require.resolve(`raw-loader`)
      };
    },
    style: (options = {}) => {
      return {
        options,
        loader: require.resolve(`style-loader`)
      };
    },
    // TODO(v5): Re-Apply https://github.com/gatsbyjs/gatsby/pull/33979 with breaking change in inline loader syntax
    miniCssExtract: (options = {}) => {
      let moduleOptions = undefined;
      const {
        modules,
        ...restOptions
      } = options;
      if (typeof modules === `boolean` && options.modules) {
        moduleOptions = {
          namedExport: true
        };
      } else {
        moduleOptions = modules;
      }
      return {
        loader: _miniCssExtractPlugin.default.loader,
        options: {
          modules: moduleOptions,
          ...restOptions
        }
      };
    },
    css: (options = {}) => {
      let modulesOptions = false;
      if (options.modules) {
        modulesOptions = {
          auto: undefined,
          namedExport: true,
          localIdentName: `[name]--[local]--[hash:hex:5]`,
          exportLocalsConvention: `dashesOnly`,
          exportOnlyLocals: isSSR
        };
        if (typeof options.modules === `object`) {
          modulesOptions = {
            ...modulesOptions,
            ...options.modules
          };
        }
      }
      return {
        loader: require.resolve(`css-loader`),
        options: {
          // Absolute urls (https or //) are not send to this function. Only resolvable paths absolute or relative ones.
          url: function (url) {
            // When an url starts with /
            if (url.startsWith(`/`)) {
              return false;
            }
            return true;
          },
          sourceMap: !PRODUCTION,
          modules: modulesOptions
        }
      };
    },
    postcss: (options = {}) => {
      const {
        plugins,
        overrideBrowserslist = supportedBrowsers,
        ...postcssOpts
      } = options;
      return {
        loader: require.resolve(`postcss-loader`),
        options: {
          execute: false,
          sourceMap: !PRODUCTION,
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          postcssOptions: loaderContext => {
            var _options, _postCSSPlugins$find;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let postCSSPlugins = [];
            if (plugins) {
              postCSSPlugins = typeof plugins === `function` ? plugins(loaderContext) : plugins;
            }
            const autoprefixerPlugin = (0, _autoprefixer.default)({
              overrideBrowserslist,
              flexbox: `no-2009`,
              ...((_options = (_postCSSPlugins$find = postCSSPlugins.find(plugin => plugin.postcssPlugin === `autoprefixer`)) === null || _postCSSPlugins$find === void 0 ? void 0 : _postCSSPlugins$find.options) !== null && _options !== void 0 ? _options : {})
            });
            postCSSPlugins.unshift(autoprefixerPlugin);
            postCSSPlugins.unshift(_postcssFlexbugsFixes.default);
            return {
              plugins: postCSSPlugins,
              ...postcssOpts
            };
          }
        }
      };
    },
    file: (options = {}) => {
      return {
        loader: require.resolve(`file-loader`),
        options: {
          ...fileLoaderCommonOptions,
          ...options
        }
      };
    },
    url: (options = {}) => {
      return {
        loader: require.resolve(`url-loader`),
        options: {
          limit: 10000,
          ...fileLoaderCommonOptions,
          fallback: require.resolve(`file-loader`),
          ...options
        }
      };
    },
    js: options => {
      return {
        options: {
          stage,
          reactRuntime: config.jsxRuntime,
          reactImportSource: config.jsxImportSource,
          cacheDirectory: path.join(program.directory, `.cache`, `webpack`, `babel`),
          ...options,
          rootDir: program.directory
        },
        loader: require.resolve(`./babel-loader`)
      };
    },
    dependencies: options => {
      return {
        options: {
          cacheDirectory: path.join(program.directory, `.cache`, `webpack`, `babel`),
          ...options
        },
        loader: require.resolve(`babel-loader`)
      };
    }
  };

  /**
   * Rules
   */
  const rules = {};

  /**
   * JavaScript loader via babel, includes userland code
   * and packages that depend on `gatsby`
   */
  {
    const js = ({
      modulesThatUseGatsby = [],
      ...options
    } = {}) => {
      return {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: modulePath => {
          // when it's not coming from node_modules we treat it as a source file.
          if (!vendorRegex.test(modulePath)) {
            return true;
          }

          // If the module uses Gatsby as a dependency
          // we want to treat it as src so we can extract queries
          return modulesThatUseGatsby.some(module => modulePath.includes(module.path));
        },
        type: `javascript/auto`,
        use: ({
          resourceQuery,
          issuer
        }) => [
        // If a JS import comes from async-requires, assume it is for a page component.
        // Using `issuer` allows us to avoid mutating async-requires for this case.
        //
        // If other imports are added to async-requires in the future, another option is to
        // append a query param to page components in the store and check against `resourceQuery` here.
        //
        // This would require we adjust `doesModuleMatchResourcePath` in `static-query-mapper`
        // to check against the module's `resourceResolveData.path` instead of resource to avoid
        // mismatches because of the added query param. Other adjustments may also be needed.
        loaders.js({
          ...options,
          configFile: true,
          compact: PRODUCTION,
          isPageTemplate: /async-requires/.test(issuer),
          resourceQuery
        })]
      };
    };
    rules.js = js;
  }

  /**
   * Node_modules JavaScript loader via babel
   * Excludes core-js & babel-runtime to speedup babel transpilation
   * Excludes modules that use Gatsby since the `rules.js` already transpiles those
   */
  {
    const dependencies = ({
      modulesThatUseGatsby = []
    } = {}) => {
      const jsOptions = {
        babelrc: false,
        configFile: false,
        compact: false,
        presets: [[require.resolve(`babel-preset-gatsby/dependencies`), {
          stage
        }]],
        // If an error happens in a package, it's possible to be
        // because it was compiled. Thus, we don't want the browser
        // debugger to show the original code. Instead, the code
        // being evaluated would be much more helpful.
        sourceMaps: false,
        cacheIdentifier: JSON.stringify({
          browsersList: supportedBrowsers,
          gatsbyPreset: require(`babel-preset-gatsby/package.json`).version
        })
      };

      // TODO REMOVE IN V3
      // a list of vendors we know we shouldn't polyfill (we should have set core-js to entry but we didn't so we have to do this)
      const VENDORS_TO_NOT_POLYFILL = [`@babel[\\\\/]runtime`, `@mikaelkristiansson[\\\\/]domready`, `@reach[\\\\/]router`, `babel-preset-gatsby`, `core-js`, `dom-helpers`, `gatsby-legacy-polyfills`, `gatsby-link`, `gatsby-script`, `gatsby-react-router-scroll`, `invariant`, `lodash`, `mitt`, `prop-types`, `react-dom`, `react`, `regenerator-runtime`, `scheduler`, `scroll-behavior`, `shallow-compare`, `warning`, `webpack`];
      const doNotPolyfillRegex = new RegExp(`[\\\\/]node_modules[\\\\/](${VENDORS_TO_NOT_POLYFILL.join(`|`)})[\\\\/]`);
      return {
        test: /\.(js|mjs)$/,
        exclude: modulePath => {
          // If dep is user land code, exclude
          if (!vendorRegex.test(modulePath)) {
            return true;
          }

          // If dep uses Gatsby, exclude
          if (modulesThatUseGatsby.some(module => modulePath.includes(module.path))) {
            return true;
          }
          return doNotPolyfillRegex.test(modulePath);
        },
        type: `javascript/auto`,
        use: [loaders.dependencies(jsOptions)]
      };
    };
    rules.dependencies = dependencies;
  }
  rules.yaml = () => {
    return {
      test: /\.ya?ml$/,
      type: `json`,
      use: [loaders.yaml()]
    };
  };

  /**
   * Font loader
   */
  rules.fonts = () => {
    return {
      use: [loaders.url()],
      test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/
    };
  };

  /**
   * Loads image assets, inlines images via a data URI if they are below
   * the size threshold
   */
  rules.images = () => {
    return {
      use: [loaders.url()],
      test: /\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/
    };
  };

  /**
   * Loads audio and video and inlines them via a data URI if they are below
   * the size threshold
   */
  rules.media = () => {
    return {
      use: [loaders.url()],
      test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/
    };
  };

  /**
   * Loads assets without inlining
   */
  rules.miscAssets = () => {
    return {
      use: [loaders.file()],
      test: /\.pdf$/
    };
  };

  /**
   * CSS style loader.
   */
  {
    const css = (options = {}) => {
      const {
        browsers,
        ...restOptions
      } = options;
      const use = [!isSSR && loaders.miniCssExtract(restOptions), loaders.css({
        ...restOptions,
        importLoaders: 1
      }), loaders.postcss({
        browsers
      })].filter(Boolean);
      return {
        use,
        test: /\.css$/
      };
    };

    /**
     * CSS style loader, _excludes_ node_modules.
     */
    css.internal = makeInternalOnly(css);
    css.external = makeExternalOnly(css);
    const cssModules = options => {
      const rule = css({
        ...options,
        modules: true
      });
      delete rule.exclude;
      rule.test = /\.module\.css$/;
      return rule;
    };
    rules.css = css;
    rules.cssModules = cssModules;
  }

  /**
   * PostCSS loader.
   */
  {
    const postcss = options => {
      return {
        test: /\.css$/,
        use: [loaders.css({
          importLoaders: 1
        }), loaders.postcss(options)]
      };
    };

    /**
     * PostCSS loader, _excludes_ node_modules.
     */
    postcss.internal = makeInternalOnly(postcss);
    postcss.external = makeExternalOnly(postcss);
    rules.postcss = postcss;
  }
  /**
   * cast rules to IRuleUtils
   */
  /**
   * Plugins
   */
  const plugins = {
    ..._webpackPlugins.builtinPlugins
  };
  plugins.minifyJs = ({
    terserOptions,
    ...options
  } = {}) => new _terserWebpackPlugin.default({
    exclude: /\.min\.js/,
    terserOptions: {
      ie8: false,
      mangle: {
        safari10: true
      },
      parse: {
        ecma: 5
      },
      compress: {
        ecma: 5
      },
      output: {
        ecma: 5
      },
      ...terserOptions
    },
    parallel: Math.max(1, (0, _gatsbyCoreUtils.cpuCoreCount)() - 1),
    ...options
  });
  plugins.minifyCss = (options = {
    minimizerOptions: {
      preset: [`default`, {
        svgo: {
          full: true,
          plugins: [
          // potentially destructive plugins removed - see https://github.com/gatsbyjs/gatsby/issues/15629
          // use correct config format and remove plugins requiring specific params - see https://github.com/gatsbyjs/gatsby/issues/31619
          // List of default plugins and their defaults: https://github.com/svg/svgo#built-in-plugins
          // Last update 2021-08-17
          `cleanupAttrs`, `cleanupEnableBackground`, `cleanupIDs`, `cleanupListOfValues`,
          // Default: disabled
          `cleanupNumericValues`, `collapseGroups`, `convertColors`, `convertPathData`, `convertStyleToAttrs`,
          // Default: disabled
          `convertTransform`, `inlineStyles`, `mergePaths`, `minifyStyles`, `moveElemsAttrsToGroup`, `moveGroupAttrsToElems`, `prefixIds`,
          // Default: disabled
          `removeComments`, `removeDesc`, `removeDoctype`, `removeEditorsNSData`, `removeEmptyAttrs`, `removeEmptyContainers`, `removeEmptyText`, `removeHiddenElems`, `removeMetadata`, `removeNonInheritableGroupAttrs`, `removeRasterImages`,
          // Default: disabled
          `removeScriptElement`,
          // Default: disabled
          `removeStyleElement`,
          // Default: disabled
          `removeTitle`, `removeUnknownsAndDefaults`, `removeUnusedNS`, `removeUselessDefs`, `removeUselessStrokeAndFill`, `removeXMLProcInst`, `reusePaths`,
          // Default: disabled
          `sortAttrs` // Default: disabled
          ]
        }
      }]
    }
  }) => new _cssMinimizerWebpackPlugin.default({
    parallel: Math.max(1, (0, _gatsbyCoreUtils.cpuCoreCount)() - 1),
    ...options
  });
  plugins.fastRefresh = ({
    modulesThatUseGatsby
  }) => {
    const regExpToHack = /node_modules/;
    regExpToHack.test = modulePath => {
      // when it's not coming from node_modules we treat it as a source file.
      if (!vendorRegex.test(modulePath)) {
        return false;
      }

      // If the module uses Gatsby as a dependency
      // we want to treat it as src because of shadowing
      return !modulesThatUseGatsby.some(module => modulePath.includes(module.path));
    };
    return new _reactRefreshWebpackPlugin.default({
      overlay: {
        sockIntegration: `whm`,
        module: path.join(__dirname, `fast-refresh-module`)
      },
      // this is a bit hacky - exclude expect string or regexp or array of those
      // so this is tricking ReactRefreshWebpackPlugin with providing regexp with
      // overwritten .test method
      exclude: regExpToHack
    });
  };
  plugins.extractText = options => new _miniCssExtractPlugin.default({
    ...options
  });
  plugins.moment = () => plugins.ignore({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/
  });
  plugins.extractStats = () => new _gatsbyWebpackStatsExtractor.GatsbyWebpackStatsExtractor(publicPath);

  // TODO: remove this in v5
  plugins.eslintGraphqlSchemaReload = () => null;
  plugins.virtualModules = () => new _gatsbyWebpackVirtualModules.GatsbyWebpackVirtualModules();
  plugins.eslint = () => {
    const options = {
      extensions: [`js`, `jsx`],
      exclude: [`/node_modules/`, `/bower_components/`, _gatsbyWebpackVirtualModules.VIRTUAL_MODULES_BASE_PATH],
      ...(0, _eslintConfig.eslintConfig)(config.jsxRuntime === `automatic`)
    };
    // @ts-ignore
    return new _eslintWebpackPlugin.default(options);
  };
  plugins.eslintRequired = () => {
    const options = {
      extensions: [`js`, `jsx`],
      exclude: [`/node_modules/`, `/bower_components/`, _gatsbyWebpackVirtualModules.VIRTUAL_MODULES_BASE_PATH],
      ..._eslintConfig.eslintRequiredConfig
    };
    // @ts-ignore
    return new _eslintWebpackPlugin.default(options);
  };
  return {
    loaders,
    rules,
    plugins
  };
};
exports.createWebpackUtils = createWebpackUtils;
//# sourceMappingURL=webpack-utils.js.map