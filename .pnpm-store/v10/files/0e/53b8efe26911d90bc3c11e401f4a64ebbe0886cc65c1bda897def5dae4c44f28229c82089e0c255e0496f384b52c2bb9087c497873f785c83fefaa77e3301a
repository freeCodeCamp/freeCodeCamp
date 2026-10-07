"use strict";

var _path = require("./path");
var _gatsbyDependents = require("./gatsby-dependents");
var _webpackUtils = require("./webpack-utils");
var _localEslintConfigFinder = require("./local-eslint-config-finder");
var _gatsbyWebpackVirtualModules = require("./gatsby-webpack-virtual-modules");
var _staticQueryMapper = require("./webpack/plugins/static-query-mapper");
var _forceCssHmrForEdgeCases = require("./webpack/plugins/force-css-hmr-for-edge-cases");
var _webpackLogging = require("./webpack/plugins/webpack-logging");
var _browserslist = require("./browserslist");
var _module = require("module");
var _enginesHelpers = require("./engines-helpers");
var _constants = require("../constants");
var _babelLoader = require("./babel-loader");
var _partialHydration = require("./webpack/plugins/partial-hydration");
var _resolveJsFilePath = require("../bootstrap/resolve-js-file-path");
const crypto = require(`crypto`);
const fs = require(`fs-extra`);
const path = require(`path`);
const dotenv = require(`dotenv`);
const {
  CoreJSResolver
} = require(`./webpack/plugins/corejs-resolver`);
const {
  CacheFolderResolver
} = require(`./webpack/plugins/cache-folder-resolver`);
const {
  store
} = require(`../redux`);
const {
  actions
} = require(`../redux/actions`);
const {
  getPublicPath
} = require(`./get-public-path`);
const debug = require(`debug`)(`gatsby:webpack-config`);
const reporter = require(`gatsby-cli/lib/reporter`);
const apiRunnerNode = require(`./api-runner-node`);
const FRAMEWORK_BUNDLES = [`react`, `react-dom`, `scheduler`, `prop-types`];

// This regex ignores nested copies of framework libraries so they're bundled with their issuer
const FRAMEWORK_BUNDLES_REGEX = new RegExp(`(?<!node_modules.*)[\\\\/]node_modules[\\\\/](${FRAMEWORK_BUNDLES.join(`|`)})[\\\\/]`);

// Four stages or modes:
//   1) develop: for `gatsby develop` command, hot reload and CSS injection into page
//   2) develop-html: same as develop without react-hmre in the babel config for html renderer
//   3) build-javascript: Build JS and CSS chunks for production
//   4) build-html: build all HTML files

module.exports = async (program, directory, suppliedStage, port, {
  parentSpan
} = {}) => {
  let fastRefreshPlugin;
  const modulesThatUseGatsby = await (0, _gatsbyDependents.getGatsbyDependents)();
  const directoryPath = (0, _path.withBasePath)(directory);

  // We combine develop & develop-html stages for purposes of generating the
  // webpack config.
  const stage = suppliedStage;
  const {
    rules,
    loaders,
    plugins
  } = (0, _webpackUtils.createWebpackUtils)(stage, program);
  const {
    assetPrefix,
    pathPrefix,
    trailingSlash
  } = store.getState().config;
  const publicPath = getPublicPath({
    assetPrefix,
    pathPrefix,
    ...program
  });
  const isPartialHydrationEnabled = (process.env.GATSBY_PARTIAL_HYDRATION === `true` || process.env.GATSBY_PARTIAL_HYDRATION === `1`) && "5" === `5`;
  function processEnv(stage, defaultNodeEnv) {
    debug(`Building env for "${stage}"`);
    // node env should be DEVELOPMENT | PRODUCTION as these are commonly used in node land
    // this variable is used inside webpack
    const nodeEnv = process.env.NODE_ENV || `${defaultNodeEnv}`;
    // config env is dependent on the env that it's run, this can be anything from staging-production
    // this allows you to set use different .env environments or conditions in gatsby files
    const configEnv = process.env.GATSBY_ACTIVE_ENV || nodeEnv;
    const envFile = path.join(process.cwd(), `./.env.${configEnv}`);
    let parsed = {};
    try {
      parsed = dotenv.parse(fs.readFileSync(envFile, {
        encoding: `utf8`
      }));
    } catch (err) {
      if (err.code !== `ENOENT`) {
        reporter.error(`There was a problem processing the .env file (${envFile})`, err);
      }
    }
    const target = stage === `build-html` || stage === `develop-html` ? `node` : `web`;
    const envObject = Object.keys(parsed).reduce((acc, key) => {
      acc[key] = JSON.stringify(parsed[key]);
      return acc;
    }, {});
    const gatsbyVarObject = Object.keys(process.env).reduce((acc, key) => {
      if (target === `node` || key.match(/^GATSBY_/)) {
        acc[key] = JSON.stringify(process.env[key]);
      }
      return acc;
    }, {});

    // Don't allow overwriting of NODE_ENV, PUBLIC_DIR as to not break gatsby things
    envObject.NODE_ENV = JSON.stringify(nodeEnv);
    envObject.PUBLIC_DIR = JSON.stringify(`${process.cwd()}/public`);
    envObject.BUILD_STAGE = JSON.stringify(stage);
    envObject.CYPRESS_SUPPORT = JSON.stringify(process.env.CYPRESS_SUPPORT);
    envObject.GATSBY_QUERY_ON_DEMAND = JSON.stringify(!!process.env.GATSBY_QUERY_ON_DEMAND);
    if (stage === `develop`) {
      envObject.GATSBY_SOCKET_IO_DEFAULT_TRANSPORT = JSON.stringify(process.env.GATSBY_SOCKET_IO_DEFAULT_TRANSPORT || `websocket`);
    }
    const mergedEnvVars = Object.assign(envObject, gatsbyVarObject);
    return Object.keys(mergedEnvVars).reduce((acc, key) => {
      acc[`process.env.${key}`] = mergedEnvVars[key];
      return acc;
    }, {
      "process.env": `({})`
    });
  }
  debug(`Loading webpack config for stage "${stage}"`);
  function getOutput() {
    switch (stage) {
      case `develop`:
        return {
          path: directory,
          filename: `[name].js`,
          // Add /* filename */ comments to generated require()s in the output.
          pathinfo: true,
          // Point sourcemap entries to original disk location (format as URL on Windows)
          publicPath: process.env.GATSBY_WEBPACK_PUBLICPATH || `/`,
          devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, `/`),
          // Avoid React cross-origin errors
          // See https://reactjs.org/docs/cross-origin-errors.html
          crossOriginLoading: `anonymous`
        };
      case `build-html`:
      case `develop-html`:
        // Generate the file needed to SSR pages.
        // Deleted by build-html.js, since it's not needed for production.
        return {
          path: directoryPath(_constants.ROUTES_DIRECTORY),
          filename: `[name].js`,
          chunkFilename: `[name].js`,
          library: {
            type: `commonjs`
          },
          publicPath: (0, _path.withTrailingSlash)(publicPath)
        };
      case `build-javascript`:
        return {
          filename: `[name]-[contenthash].js`,
          chunkFilename: `[name]-[contenthash].js`,
          path: directoryPath(`public`),
          publicPath: (0, _path.withTrailingSlash)(publicPath)
        };
      default:
        throw new Error(`The state requested ${stage} doesn't exist.`);
    }
  }
  function getEntry() {
    switch (stage) {
      case `develop`:
        return (0, _browserslist.hasES6ModuleSupport)(directory) ? {
          commons: [directoryPath(`.cache/app`)]
        } : {
          polyfill: directoryPath(`.cache/polyfill-entry`),
          commons: [directoryPath(`.cache/app`)]
        };
      case `develop-html`:
        return {
          "render-page": process.env.GATSBY_EXPERIMENTAL_DEV_SSR ? directoryPath(`.cache/ssr-develop-static-entry`) : directoryPath(`.cache/develop-static-entry`)
        };
      case `build-html`:
        {
          return {
            "render-page": directoryPath(`.cache/static-entry`)
          };
        }
      case `build-javascript`:
        return (0, _browserslist.hasES6ModuleSupport)(directory) ? {
          app: directoryPath(`.cache/production-app`)
        } : {
          polyfill: directoryPath(`.cache/polyfill-entry`),
          app: directoryPath(`.cache/production-app`)
        };
      default:
        throw new Error(`The state requested ${stage} doesn't exist.`);
    }
  }
  function getPlugins() {
    var _process$env$GATSBY_W, _process$env$GATSBY_W2;
    let configPlugins = [plugins.moment(),
    // Add a few global variables. Set NODE_ENV to production (enables
    // optimizations for React) and what the link prefix is (__PATH_PREFIX__).
    plugins.define({
      ...processEnv(stage, `development`),
      __BASE_PATH__: JSON.stringify(program.prefixPaths ? pathPrefix : ``),
      __PATH_PREFIX__: JSON.stringify(program.prefixPaths ? publicPath : ``),
      __ASSET_PREFIX__: JSON.stringify(program.prefixPaths ? assetPrefix : ``),
      __TRAILING_SLASH__: JSON.stringify(trailingSlash),
      // TODO Improve asset passing to pages
      BROWSER_ESM_ONLY: JSON.stringify((0, _browserslist.hasES6ModuleSupport)(directory)),
      "global.hasPartialHydration": isPartialHydrationEnabled
    }), plugins.virtualModules(), new _babelLoader.BabelConfigItemsCacheInvalidatorPlugin(), ((_process$env$GATSBY_W = process.env.GATSBY_WEBPACK_LOGGING) === null || _process$env$GATSBY_W === void 0 ? void 0 : (_process$env$GATSBY_W2 = _process$env$GATSBY_W.split(`,`)) === null || _process$env$GATSBY_W2 === void 0 ? void 0 : _process$env$GATSBY_W2.includes(stage)) && new _webpackLogging.WebpackLoggingPlugin(program.directory, reporter, program.verbose)].filter(Boolean);
    switch (stage) {
      case `develop`:
        {
          configPlugins = configPlugins.concat([fastRefreshPlugin = plugins.fastRefresh({
            modulesThatUseGatsby
          }), new _forceCssHmrForEdgeCases.ForceCssHMRForEdgeCases(), plugins.hotModuleReplacement(), plugins.noEmitOnErrors(), new _staticQueryMapper.StaticQueryMapper(store)]).filter(Boolean);
          configPlugins.push(plugins.extractText({
            filename: `[name].css`,
            chunkFilename: `[id].css`
          }));
          if (process.env.GATSBY_EXPERIMENTAL_DEV_SSR) {
            configPlugins.push(plugins.extractStats());
          }
          const isCustomEslint = (0, _localEslintConfigFinder.hasLocalEslint)(program.directory);

          // if no local eslint config, then add gatsby config
          if (!isCustomEslint) {
            configPlugins.push(plugins.eslint());
          }

          // Enforce fast-refresh rules even with local eslint config
          if (isCustomEslint) {
            configPlugins.push(plugins.eslintRequired());
          }
          break;
        }
      case `build-javascript`:
        {
          configPlugins = configPlugins.concat([plugins.extractText({
            filename: `[name].[contenthash].css`,
            chunkFilename: `[name].[contenthash].css`
          }),
          // Write out stats object mapping named dynamic imports (aka page
          // components) to all their async chunks.
          plugins.extractStats(), new _staticQueryMapper.StaticQueryMapper(store), isPartialHydrationEnabled ? new _partialHydration.PartialHydrationPlugin(path.join(directory, `.cache`, `partial-hydration`, `manifest.json`), reporter) : null]).filter(Boolean);
          break;
        }
      case `develop-html`:
      case `build-html`:
        {
          // Add global fetch in node environments
          configPlugins.push(plugins.provide({
            fetch: require.resolve(`node-fetch`),
            "global.fetch": require.resolve(`node-fetch`)
          }));
          break;
        }
    }
    return configPlugins;
  }
  function getDevtool() {
    switch (stage) {
      case `develop`:
        return `eval-cheap-module-source-map`;
      // use a normal `source-map` for the html phases since
      // it gives better line and column numbers
      case `develop-html`:
      case `build-html`:
      case `build-javascript`:
        return `source-map`;
      default:
        return false;
    }
  }
  function getMode() {
    switch (stage) {
      case `develop`:
      case `develop-html`:
        return `development`;
      case `build-javascript`:
      case `build-html`:
      default:
        return `production`;
    }
  }
  function getModule() {
    // Common config for every env.
    // prettier-ignore
    let configRules = [
    // Webpack expects extensions when importing ESM modules as that's what the spec describes.
    // Not all libraries have adapted so we don't enforce its behaviour
    // @see https://github.com/webpack/webpack/issues/11467
    {
      test: /\.mjs$/i,
      resolve: {
        byDependency: {
          esm: {
            fullySpecified: false
          }
        }
      }
    }, {
      test: /\.js$/i,
      descriptionData: {
        type: `module`
      },
      resolve: {
        byDependency: {
          esm: {
            fullySpecified: false
          }
        }
      }
    }, rules.js({
      modulesThatUseGatsby
    }), rules.yaml(), rules.fonts(), rules.images(), rules.media(), rules.miscAssets()];

    // TODO(v5): Remove since this is only useful during Gatsby 4 publishes
    if ("5" !== `5`) {
      configRules.push({
        test: require.resolve(`@gatsbyjs/reach-router/es/index`),
        type: `javascript/auto`,
        use: [{
          loader: require.resolve(`./reach-router-add-basecontext-export-loader`)
        }]
      });
    }

    // Speedup 🏎️💨 the build! We only include transpilation of node_modules on javascript production builds
    // TODO create gatsby plugin to enable this behaviour on develop (only when people are requesting this feature)
    if (stage === `build-javascript` && !(0, _browserslist.hasES6ModuleSupport)(directory)) {
      configRules.push(rules.dependencies({
        modulesThatUseGatsby
      }));
    }
    switch (stage) {
      case `develop`:
        {
          configRules = configRules.concat([{
            oneOf: [rules.cssModules(), rules.css()]
          }]);
          break;
        }
      case `build-html`:
      case `develop-html`:
        // We don't deal with CSS at all when building the HTML.
        // The 'null' loader is used to prevent 'module not found' errors.
        // On the other hand CSS modules loaders are necessary.

        // prettier-ignore
        configRules = configRules.concat([{
          oneOf: [rules.cssModules(), {
            ...rules.css(),
            use: [loaders.null()]
          }]
        }]);
        break;
      case `build-javascript`:
        // We don't deal with CSS at all when building JavaScript but we still
        // need to process the CSS so offline-plugin knows about the various
        // assets referenced in your CSS.
        //
        // It's also necessary to process CSS Modules so your JS knows the
        // classNames to use.
        configRules = configRules.concat([{
          oneOf: [rules.cssModules(), rules.css()]
        }]);
        break;
    }
    if (!isPartialHydrationEnabled) {
      configRules.push({
        test: /react-server-dom-webpack/,
        use: loaders.null()
      });
    }
    return {
      rules: configRules
    };
  }
  function getPackageRoot(pkg) {
    return path.dirname(require.resolve(`${pkg}/package.json`));
  }
  function getResolve(stage) {
    const {
      program
    } = store.getState();
    const resolve = {
      // Use the program's extension list (generated via the
      // 'resolvableExtensions' API hook).
      extensions: [...program.extensions],
      alias: {
        gatsby$: directoryPath(path.join(`.cache`, `gatsby-browser-entry.js`)),
        // Using directories for module resolution is mandatory because
        // relative path imports are used sometimes
        // See https://stackoverflow.com/a/49455609/6420957 for more details
        "@babel/runtime": getPackageRoot(`@babel/runtime`),
        "@reach/router": getPackageRoot(`@gatsbyjs/reach-router`),
        "react-lifecycles-compat": directoryPath(`.cache/react-lifecycles-compat.js`),
        "react-server-dom-webpack": getPackageRoot(`react-server-dom-webpack`),
        "@pmmmwh/react-refresh-webpack-plugin": getPackageRoot(`@pmmmwh/react-refresh-webpack-plugin`),
        "socket.io-client": getPackageRoot(`socket.io-client`),
        "webpack-hot-middleware": getPackageRoot(`@gatsbyjs/webpack-hot-middleware`),
        $virtual: (0, _gatsbyWebpackVirtualModules.getAbsolutePathForVirtualModule)(`$virtual`)
      },
      plugins: [new CoreJSResolver(), new CacheFolderResolver(path.join(program.directory, `.cache`))]
    };
    const target = stage === `build-html` || stage === `develop-html` ? `node` : `web`;
    if (target === `web`) {
      // TODO(v5): Remove since this is only useful during Gatsby 4 publishes
      if ("5" !== `5`) {
        resolve.alias[`@reach/router`] = path.join(getPackageRoot(`@gatsbyjs/reach-router`), `es`);
      }
      resolve.alias[`gatsby-core-utils/create-content-digest`] = directoryPath(`.cache/create-content-digest-browser-shim`);
    }
    if (stage === `build-javascript` && program.profile) {
      resolve.alias[`react-dom$`] = `react-dom/profiling`;
      resolve.alias[`scheduler/tracing`] = `scheduler/tracing-profiling`;
    }

    // SSR can have many react versions as some packages use their own version. React works best with 1 version.
    // By resolving react,react-dom from gatsby we'll get the site versions of react & react-dom because it's specified as a peerdependency.
    //
    // we need to put this below our resolve.alias for profiling as webpack picks the first one that matches
    // @see https://github.com/gatsbyjs/gatsby/issues/31098
    resolve.alias[`react`] = getPackageRoot(`react`);
    resolve.alias[`react-dom`] = getPackageRoot(`react-dom`);
    return resolve;
  }
  function getResolveLoader() {
    const root = [path.resolve(directory, `node_modules`)];
    const userLoaderDirectoryPath = path.resolve(directory, `loaders`);
    try {
      if (fs.statSync(userLoaderDirectoryPath).isDirectory()) {
        root.push(userLoaderDirectoryPath);
      }
    } catch (err) {
      debug(`Error resolving user loaders directory`, err);
    }
    return {
      modules: [...root, path.join(__dirname, `../loaders`), `node_modules`]
    };
  }
  const config = {
    name: stage,
    // Context is the base directory for resolving the entry option.
    context: directory,
    entry: getEntry(),
    output: getOutput(),
    module: getModule(),
    plugins: getPlugins(),
    devtool: getDevtool(),
    // Turn off performance hints as we (for now) don't want to show the normal
    // webpack output anywhere.
    performance: {
      hints: false
    },
    mode: getMode(),
    resolveLoader: getResolveLoader(),
    resolve: getResolve(stage)
  };
  if (stage === `build-html` || stage === `develop-html`) {
    config.target = `node14.15`;
  } else {
    config.target = [`web`, `es5`];
  }
  const isCssModule = module => module.type === `css/mini-extract`;
  if (stage === `develop`) {
    config.optimization = {
      splitChunks: {
        chunks: `all`,
        cacheGroups: {
          default: false,
          defaultVendors: false,
          framework: {
            chunks: `all`,
            name: `framework`,
            test: FRAMEWORK_BUNDLES_REGEX,
            priority: 40,
            // Don't let webpack eliminate this chunk (prevents this chunk from becoming a part of the commons chunk)
            enforce: true
          },
          // Bundle all css & lazy css into one stylesheet to make sure lazy components do not break
          // TODO make an exception for css-modules
          styles: {
            test(module) {
              return isCssModule(module);
            },
            name: `commons`,
            priority: 40,
            enforce: true
          }
        }
      },
      minimize: false
    };
  }
  if (stage === `build-html` || stage === `develop-html`) {
    config.optimization = {
      // TODO fix our partial hydration manifest
      mangleExports: !isPartialHydrationEnabled,
      minimize: false
    };
    if (stage === `build-html`) {
      config.optimization.splitChunks = {
        chunks: `async`,
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      };
    } else {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          defaultVendors: false
        }
      };
    }
  }
  if (stage === `build-javascript`) {
    const componentsCount = store.getState().components.size;
    const splitChunks = {
      chunks: `all`,
      cacheGroups: {
        default: false,
        defaultVendors: false,
        framework: {
          chunks: `all`,
          name: `framework`,
          // Important: If you change something here, also update "gatsby-plugin-preact"
          test: module => {
            var _module$rawRequest;
            // Packages like gatsby-plugin-image might import from "react-dom/server". We don't want to include react-dom-server in the framework bundle.
            // A rawRequest might look like these:
            // - "react-dom/server"
            // - "node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"
            // Use a "/" before "react-dom-server" so that we don't match packages that contain "react-dom-server" in their name
            if ((module === null || module === void 0 ? void 0 : module.rawRequest) === `react-dom/server` || module !== null && module !== void 0 && (_module$rawRequest = module.rawRequest) !== null && _module$rawRequest !== void 0 && _module$rawRequest.includes(`/react-dom-server`)) {
              return false;
            }
            return FRAMEWORK_BUNDLES_REGEX.test(module.nameForCondition());
          },
          priority: 40,
          // Don't let webpack eliminate this chunk (prevents this chunk from becoming a part of the commons chunk)
          enforce: true
        },
        // if a module is bigger than 160kb from node_modules we make a separate chunk for it
        lib: {
          test(module) {
            return !isCssModule(module) && module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
          },
          name(module) {
            const hash = crypto.createHash(`sha1`);
            if (!module.libIdent) {
              throw new Error(`Encountered unknown module type: ${module.type}. Please open an issue.`);
            }
            hash.update(module.libIdent({
              context: program.directory
            }));
            return hash.digest(`hex`).substring(0, 8);
          },
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true
        },
        commons: {
          name: `commons`,
          // if a chunk is used on all components we put it in commons (we need at least 2 components)
          minChunks: Math.max(componentsCount, 2),
          priority: 20
        },
        // If a chunk is used in at least 2 components we create a separate chunk
        shared: {
          test(module, {
            chunkGraph
          }) {
            for (const chunk of chunkGraph.getModuleChunksIterable(module)) {
              if (chunk.canBeInitial()) {
                return false;
              }
            }
            return !isCssModule(module);
          },
          name(module, chunks) {
            const hash = crypto.createHash(`sha1`).update(chunks.reduce((acc, chunk) => acc + chunk.name, ``)).digest(`hex`);
            return hash;
          },
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true
        },
        // Bundle all css & lazy css into one stylesheet to make sure lazy components do not break
        // TODO make an exception for css-modules
        styles: {
          test(module) {
            return isCssModule(module);
          },
          name: `styles`,
          priority: 40,
          enforce: true
        }
      },
      // We load our pages async through async-requires, maxInitialRequests doesn't have an effect on chunks derived from page components.
      // By default webpack has set maxAsyncRequests to 6, in some cases this isn't enough an actually makes the bundle size blow up.
      // We've set maxAsyncRequests to Infinity to negate this. This could potentionally exceed the 25 initial requests that we set before
      // sadly I do not have a better solution.
      maxAsyncRequests: Infinity,
      maxInitialRequests: 25,
      minSize: 20000
    };
    config.optimization = {
      runtimeChunk: {
        name: `webpack-runtime`
      },
      // TODO fix our partial hydration manifest
      mangleExports: !isPartialHydrationEnabled,
      splitChunks,
      minimizer: [
      // TODO: maybe this option should be noMinimize?
      !program.noUglify && plugins.minifyJs(program.profile ? {
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        }
      } : {}), plugins.minifyCss()].filter(Boolean)
    };
  }
  if (stage === `build-html` || stage === `develop-html`) {
    // externalize react, react-dom when develop-html or build-html(when not generating engines)
    const shouldMarkPackagesAsExternal = stage === `develop-html` || !(0, _enginesHelpers.shouldGenerateEngines)();

    // tracking = build-html (when not generating engines)
    const shouldTrackBuiltins = stage === `build-html` && !(0, _enginesHelpers.shouldGenerateEngines)();

    // removes node internals from bundle
    // https://webpack.js.org/configuration/externals/#externalspresets
    config.externalsPresets = {
      // use it only when not tracking builtins (tracking builtins provide their own fallbacks)
      node: !shouldTrackBuiltins
    };
    config.externals = [];
    if (shouldMarkPackagesAsExternal) {
      // Packages we want to externalize to save some build time
      // https://github.com/gatsbyjs/gatsby/pull/14208#pullrequestreview-240178728
      // const externalList = [`common-tags`, `lodash`, `semver`, /^lodash\//]

      // Packages we want to externalize because meant to be user-provided
      const userExternalList = [`react`, /^react-dom\//];
      const checkItem = (item, request) => {
        if (typeof item === `string` && item === request) {
          return true;
        } else if (item instanceof RegExp && item.test(request)) {
          return true;
        }
        return false;
      };
      config.externals.push(function ({
        context,
        getResolve,
        request
      }, callback) {
        // allows us to resolve webpack aliases from our config
        // helpful for when react is aliased to preact-compat
        // Force commonjs as we're in node land
        const resolver = getResolve({
          dependencyType: `commonjs`
        });

        // User modules that do not need to be part of the bundle
        if (userExternalList.some(item => checkItem(item, request))) {
          // TODO figure out to make preact work with this too

          resolver(context, request, (err, newRequest) => {
            if (err) {
              callback(err);
              return;
            }
            callback(null, newRequest);
          });
          return;
        }
        // TODO look into re-enabling, breaks builds right now because of esm
        // User modules that do not need to be part of the bundle
        // if (externalList.some(item => checkItem(item, request))) {
        //   resolver(context, request, (err, request) => {
        //     if (err) {
        //       callback(err)
        //       return
        //     }

        //     callback(null, `commonjs2 ${request}`)
        //   })
        //   return
        // }

        callback();
      });
    }
    if (shouldTrackBuiltins) {
      if (stage === `build-html`) {
        const builtinModulesToTrack = [`fs`, `http`, `http2`, `https`, `child_process`];
        const builtinsExternalsDictionary = _module.builtinModules.reduce((acc, builtinModule) => {
          if (builtinModulesToTrack.includes(builtinModule)) {
            const builtinModuleTracked = path.join(program.directory, `.cache`, `ssr-builtin-trackers`, builtinModule);
            acc[builtinModule] = `commonjs ${builtinModuleTracked}`;
            acc[`node:${builtinModule}`] = `commonjs ${builtinModuleTracked}`;
          } else {
            acc[builtinModule] = `commonjs ${builtinModule}`;
            acc[`node:${builtinModule}`] = `commonjs ${builtinModule}`;
          }
          return acc;
        }, {});
        config.externals.unshift(builtinsExternalsDictionary);
      }
    }
  }
  if (stage === `develop`) {
    config.externals = {
      "socket.io-client": `io`
    };
  }
  if (stage === `build-javascript` || stage === `build-html` || stage === `develop` || stage === `develop-html`) {
    const cacheLocation = path.join(program.directory, `.cache`, `webpack`, `stage-` + stage);
    const pluginsPathsPromises = store.getState().flattenedPlugins.filter(plugin => plugin.nodeAPIs.includes(`onCreateWebpackConfig`)).map(async plugin => {
      var _plugin$resolvedCompi;
      return (_plugin$resolvedCompi = plugin.resolvedCompiledGatsbyNode) !== null && _plugin$resolvedCompi !== void 0 ? _plugin$resolvedCompi : await (0, _resolveJsFilePath.resolveJSFilepath)({
        rootDir: plugin.resolve,
        filePath: path.join(plugin.resolve, `gatsby-node`)
      });
    });
    const pluginsPaths = await Promise.all(pluginsPathsPromises);
    const cacheConfig = {
      type: `filesystem`,
      name: stage,
      cacheLocation,
      buildDependencies: {
        config: [__filename, ...pluginsPaths]
      }
    };
    config.cache = cacheConfig;
  }
  store.dispatch(actions.replaceWebpackConfig(config));
  const getConfig = () => store.getState().webpack;
  await apiRunnerNode(`onCreateWebpackConfig`, {
    getConfig,
    // we will converge to build-html later on but for now this was the fastest way to get SSR to work
    stage,
    rules,
    loaders,
    plugins,
    parentSpan
  });
  if (fastRefreshPlugin) {
    // Fast refresh plugin has `include` option that determines
    // wether HMR code gets injected. We need to make sure all custom loaders
    // (like .ts or .mdx) that use our babel-loader will be taken into account
    // when deciding which modules get fast-refresh HMR addition.
    const fastRefreshIncludes = [];
    const babelLoaderLoc = require.resolve(`./babel-loader`);
    for (const rule of getConfig().module.rules) {
      var _use$loader, _use;
      if (!rule.use && !rule.loader) {
        continue;
      }
      let use = rule.use;
      if (typeof use === `function`) {
        use = rule.use({});
      }
      const ruleLoaders = Array.isArray(use) ? use.map(useEntry => typeof useEntry === `string` ? useEntry : useEntry.loader) : [(_use$loader = (_use = use) === null || _use === void 0 ? void 0 : _use.loader) !== null && _use$loader !== void 0 ? _use$loader : rule.loader];
      const hasBabelLoader = ruleLoaders.some(loader => loader === babelLoaderLoc);
      if (hasBabelLoader) {
        fastRefreshIncludes.push(rule.test);
      }
    }

    // start with default include of fast refresh plugin
    const includeRegex = /\.([jt]sx?|flow)$/i;
    includeRegex.test = modulePath => {
      // drop query param from request (i.e. ?type=component for mdx-loader)
      // so loader rule test work well
      const queryParamStartIndex = modulePath.indexOf(`?`);
      if (queryParamStartIndex !== -1) {
        modulePath = modulePath.slice(0, queryParamStartIndex);
      }
      return fastRefreshIncludes.some(re => re.test(modulePath));
    };
    fastRefreshPlugin.options.include = includeRegex;
  }
  return getConfig();
};
//# sourceMappingURL=webpack.config.js.map