"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.copyStaticQueriesToEngine = copyStaticQueriesToEngine;
exports.createPageSSRBundle = createPageSSRBundle;
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _webpack = _interopRequireDefault(require("webpack"));
var _module = _interopRequireDefault(require("module"));
var _webpackLogging = require("../../utils/webpack/plugins/webpack-logging");
var _clientAssetsForTemplate = require("../client-assets-for-template");
var _redux = require("../../redux");
var _enginesHelpers = require("../engines-helpers");
var _pageMode = require("../page-mode");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const extensions = [`.mjs`, `.js`, `.json`, `.node`, `.ts`, `.tsx`];
const outputDir = path.join(process.cwd(), `.cache`, `page-ssr`);
const cacheLocation = path.join(process.cwd(), `.cache`, `webpack`, `page-ssr`);
async function copyStaticQueriesToEngine({
  engineTemplatePaths,
  components,
  staticQueriesByTemplate
}) {
  const staticQueriesToCopy = new Set();
  for (const component of components.values()) {
    // figuring out needed slices for each pages using componentPath is not straightforward
    // so for now we just collect static queries for all slices + engine templates
    if (component.isSlice || engineTemplatePaths.has(component.componentPath)) {
      const staticQueryHashes = staticQueriesByTemplate.get(component.componentPath) || [];
      for (const hash of staticQueryHashes) {
        staticQueriesToCopy.add(hash);
      }
    }
  }
  const sourceDir = path.join(process.cwd(), `public`, `page-data`, `sq`, `d`);
  const destDir = path.join(outputDir, `sq`);
  await fs.ensureDir(destDir);
  await fs.emptyDir(destDir);
  const promisesToAwait = [];
  for (const hash of staticQueriesToCopy) {
    const sourcePath = path.join(sourceDir, `${hash}.json`);
    const destPath = path.join(destDir, `${hash}.json`);
    promisesToAwait.push(fs.copy(sourcePath, destPath));
  }
  await Promise.all(promisesToAwait);
}
async function createPageSSRBundle({
  rootDir,
  components,
  staticQueriesByTemplate,
  webpackCompilationHash,
  reporter,
  isVerbose = false
}) {
  var _state$config$pathPre, _process$env$GATSBY_W, _global$__GATSBY, _global$__GATSBY2, _state$adapter$config;
  const state = _redux.store.getState();
  const pathPrefix = state.program.prefixPaths ? (_state$config$pathPre = state.config.pathPrefix) !== null && _state$config$pathPre !== void 0 ? _state$config$pathPre : `` : ``;
  const slicesStateObject = {};
  for (const [key, value] of state.slices) {
    slicesStateObject[key] = value;
  }
  const slicesByTemplateStateObject = {};
  for (const [template, records] of state.slicesByTemplate) {
    const recordsObject = {};
    for (const path of Object.keys(records)) {
      recordsObject[path] = records[path];
    }
    slicesByTemplateStateObject[template] = recordsObject;
  }
  const webpackStats = await (0, _clientAssetsForTemplate.readWebpackStats)(path.join(rootDir, `public`));
  const toInline = {};
  for (const pageTemplate of components.values()) {
    const staticQueryHashes = staticQueriesByTemplate.get(pageTemplate.componentPath) || [];
    toInline[pageTemplate.componentChunkName] = {
      query: pageTemplate.query,
      staticQueryHashes,
      assets: await (0, _clientAssetsForTemplate.getScriptsAndStylesForTemplate)(pageTemplate.componentChunkName, webpackStats)
    };
  }
  const pagesIterable = [];
  for (const [pagePath, page] of state.pages) {
    const mode = (0, _pageMode.getPageMode)(page, state);
    if (mode !== `SSG`) {
      pagesIterable.push([pagePath, {
        componentChunkName: page.componentChunkName,
        componentPath: page.componentPath,
        context: page.context,
        matchPath: page.matchPath,
        mode,
        path: page.path,
        slices: page.slices
      }]);
    }
  }
  const compiler = (0, _webpack.default)({
    name: `Page Engine`,
    mode: `none`,
    entry: path.join(__dirname, `entry.js`),
    output: {
      path: outputDir,
      filename: `index.js`,
      libraryTarget: `commonjs`
    },
    target: `node`,
    externalsPresets: {
      node: false
    },
    cache: {
      type: `filesystem`,
      name: `page-ssr`,
      cacheLocation,
      buildDependencies: {
        config: [__filename]
      }
    },
    // those are required in some runtime paths, but we don't need them
    externals: [/^\.\/routes/, `electron`,
    // :shrug: `got` seems to have electron specific code path
    _module.default.builtinModules.reduce((acc, builtinModule) => {
      if (builtinModule === `fs`) {
        acc[builtinModule] = `global _actualFsWrapper`;
      } else {
        acc[builtinModule] = `commonjs ${builtinModule}`;
      }
      return acc;
    }, {})],
    devtool: false,
    module: {
      rules: [{
        test: /\.m?js$/,
        type: `javascript/auto`,
        resolve: {
          byDependency: {
            esm: {
              fullySpecified: false
            }
          }
        }
      }, {
        // For node binary relocations, include ".node" files as well here
        test: /\.(m?js|node)$/,
        // it is recommended for Node builds to turn off AMD support
        parser: {
          amd: false
        },
        use: {
          loader: require.resolve(`@vercel/webpack-asset-relocator-loader`),
          options: {
            outputAssetBase: `assets`
          }
        }
      }, {
        test: /\.txt/,
        type: `asset/resource`
      }]
    },
    resolve: {
      extensions,
      alias: {
        ".cache": `${rootDir}/.cache/`,
        [require.resolve(`gatsby-cli/lib/reporter/loggers/ink/index.js`)]: false,
        inquirer: false
      }
    },
    plugins: [new _webpack.default.DefinePlugin({
      INLINED_TEMPLATE_TO_DETAILS: JSON.stringify(toInline),
      INLINED_HEADERS_CONFIG: JSON.stringify(state.config.headers),
      WEBPACK_COMPILATION_HASH: JSON.stringify(webpackCompilationHash),
      GATSBY_PAGES: JSON.stringify(pagesIterable),
      GATSBY_SLICES: JSON.stringify(slicesStateObject),
      GATSBY_SLICES_BY_TEMPLATE: JSON.stringify(slicesByTemplateStateObject),
      GATSBY_SLICES_SCRIPT: JSON.stringify("5" === `5` && process.env.GATSBY_SLICES ? fs.readFileSync(path.join(rootDir, `public`, `_gatsby`, `slices`, `_gatsby-scripts-1.html`), `utf-8`) : ``),
      PATH_PREFIX: JSON.stringify(pathPrefix),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "process.env.GATSBY_LOGGER": JSON.stringify(`yurnalist`),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "process.env.GATSBY_SLICES": JSON.stringify(!!process.env.GATSBY_SLICES)
    }), (_process$env$GATSBY_W = process.env.GATSBY_WEBPACK_LOGGING) !== null && _process$env$GATSBY_W !== void 0 && _process$env$GATSBY_W.includes(`page-engine`) ? new _webpackLogging.WebpackLoggingPlugin(rootDir, reporter, isVerbose) : false].filter(Boolean)
  });
  let IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH = ``;
  if ((_global$__GATSBY = global.__GATSBY) !== null && _global$__GATSBY !== void 0 && _global$__GATSBY.imageCDNUrlGeneratorModulePath) {
    await fs.copyFile(global.__GATSBY.imageCDNUrlGeneratorModulePath, path.join(outputDir, `image-cdn-url-generator.js`));
    IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH = `./image-cdn-url-generator.js`;
  }
  let FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH = ``;
  if ((_global$__GATSBY2 = global.__GATSBY) !== null && _global$__GATSBY2 !== void 0 && _global$__GATSBY2.fileCDNUrlGeneratorModulePath) {
    await fs.copyFile(global.__GATSBY.fileCDNUrlGeneratorModulePath, path.join(outputDir, `file-cdn-url-generator.js`));
    FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH = `./file-cdn-url-generator.js`;
  }
  let functionCode = await fs.readFile(path.join(__dirname, `lambda.js`), `utf-8`);
  functionCode = functionCode.replaceAll(`%CDN_DATASTORE_PATH%`, (0, _enginesHelpers.shouldBundleDatastore)() ? `` : (0, _enginesHelpers.getLmdbOnCdnPath)()).replaceAll(`%CDN_DATASTORE_ORIGIN%`, (0, _enginesHelpers.shouldBundleDatastore)() ? `` : (_state$adapter$config = state.adapter.config.deployURL) !== null && _state$adapter$config !== void 0 ? _state$adapter$config : ``).replaceAll(`%PATH_PREFIX%`, pathPrefix).replaceAll(`%IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`, IMAGE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH).replaceAll(`%FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH%`, FILE_CDN_URL_GENERATOR_MODULE_RELATIVE_PATH);
  await fs.outputFile(path.join(outputDir, `lambda.js`), functionCode);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      compiler.close(closeErr => {
        if (err) {
          return reject(err);
        }
        if (closeErr) {
          return reject(closeErr);
        }
        return resolve(stats === null || stats === void 0 ? void 0 : stats.compilation);
      });
    });
  });
}
//# sourceMappingURL=bundle-webpack.js.map