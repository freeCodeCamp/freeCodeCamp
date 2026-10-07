"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.onCreateDevServer = onCreateDevServer;
exports.onPreBootstrap = onPreBootstrap;
var _unionBy2 = _interopRequireDefault(require("lodash/unionBy"));
var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));
var _union2 = _interopRequireDefault(require("lodash/union"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _glob = _interopRequireDefault(require("glob"));
var _path2 = _interopRequireDefault(require("path"));
var _webpack = _interopRequireDefault(require("webpack"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _formatWebpackMessages = _interopRequireDefault(require("react-dev-utils/formatWebpackMessages"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _chokidar = _interopRequireDefault(require("chokidar"));
var _webpackErrorUtils = require("../../utils/webpack-error-utils");
var _actions = require("../../redux/actions");
var _middleware = require("./middleware");
var _module = _interopRequireDefault(require("module"));
const isProductionEnv = process.env.gatsby_executing_command !== `develop`;
// During development, we lazily compile functions only when they're requested.
// Here we keep track of which functions have been requested so are "active"
const activeDevelopmentFunctions = new Set();
let activeEntries = {};
async function ensureFunctionIsCompiled(functionObj, compiledFunctionsDir) {
  // stat the compiled function. If it's there, then return.
  let compiledFileExists = false;
  try {
    compiledFileExists = !!(await _fsExtra.default.stat(functionObj.absoluteCompiledFilePath));
  } catch (e) {
    // ignore
  }
  if (compiledFileExists) {
    return;
  } else {
    // Otherwise, restart webpack by touching the file and watch for the file to be
    // compiled.
    const time = new Date();
    _fsExtra.default.utimesSync(functionObj.originalAbsoluteFilePath, time, time);
    await new Promise(resolve => {
      const watcher = _chokidar.default
      // Watch the root of the compiled function directory in .cache as chokidar
      // can't watch files in directories that don't yet exist.
      .watch(compiledFunctionsDir).on(`add`, async _path => {
        if (_path === functionObj.absoluteCompiledFilePath) {
          await watcher.close();
          resolve(null);
        }
      });
    });
  }
}

// Create glob type w/ glob, plugin name, root path
const createGlobArray = (siteDirectoryPath, plugins) => {
  const globs = [];
  function globIgnorePatterns(root, pluginName) {
    const nestedFolder = pluginName ? `/${pluginName}/**/` : `/**/`;
    return [`${root}/src/api${nestedFolder}__tests__/**/*.+(js|ts)`,
    // Jest tests
    `${root}/src/api${nestedFolder}+(*.)+(spec|test).+(js|ts)`, `${root}/src/api${nestedFolder}+(*.)+(d).ts` // .d.ts files
    ];
  }

  // Add the default site src/api directory.
  globs.push({
    globPattern: `${siteDirectoryPath}/src/api/**/*.{js,ts}`,
    ignorePattern: globIgnorePatterns(siteDirectoryPath),
    rootPath: _path2.default.join(siteDirectoryPath, `src/api`),
    pluginName: `default-site-plugin`
  });

  // Add each plugin
  plugins.forEach(plugin => {
    // Ignore the "default" site plugin (aka the src tree) as we're
    // already watching that.
    if (plugin.name === `default-site-plugin`) {
      return;
    }
    // Ignore any plugins we include by default. In the very unlikely case
    // we want to ship default functions, we'll special case add them. In the
    // meantime, we'll avoid extra FS IO.
    if (plugin.resolve.includes(`internal-plugin`)) {
      return;
    }
    if (plugin.resolve.includes(`gatsby-plugin-typescript`)) {
      return;
    }
    if (plugin.resolve.includes(`gatsby-plugin-page-creator`)) {
      return;
    }
    const glob = {
      globPattern: `${plugin.resolve}/src/api/${plugin.name}/**/*.{js,ts}`,
      ignorePattern: globIgnorePatterns(plugin.resolve, plugin.name),
      rootPath: _path2.default.join(plugin.resolve, `src/api`),
      pluginName: plugin.name
    };
    globs.push(glob);
  });

  // Only return unique paths
  return (0, _union2.default)(globs);
};
async function globAsync(pattern, options = {}) {
  return await new Promise((resolve, reject) => {
    (0, _glob.default)(pattern, options, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}
const createWebpackConfig = async ({
  siteDirectoryPath,
  store,
  reporter
}) => {
  const compiledFunctionsDir = _path2.default.join(siteDirectoryPath, `.cache`, `functions`);
  const globs = createGlobArray(siteDirectoryPath, store.getState().flattenedPlugins);
  const seenFunctionIds = new Set();
  // Glob and return object with relative/absolute paths + which plugin
  // they belong to.
  const allFunctions = await Promise.all(globs.map(async glob => {
    const knownFunctions = [];
    const files = await globAsync(glob.globPattern, {
      ignore: glob.ignorePattern
    });
    files.map(file => {
      const originalAbsoluteFilePath = file;
      const originalRelativeFilePath = _path2.default.relative(glob.rootPath, file);
      const {
        dir,
        name
      } = _path2.default.parse(originalRelativeFilePath);
      // Ignore the original extension as all compiled functions now end with js.
      const compiledFunctionName = _path2.default.join(dir, name + `.js`);
      const compiledPath = _path2.default.join(compiledFunctionsDir, compiledFunctionName);
      const finalName = (0, _gatsbyCoreUtils.urlResolve)(dir, name === `index` ? `` : name);

      // functionId should have only alphanumeric characters and dashes
      const functionIdBase = (0, _kebabCase2.default)(compiledFunctionName).replace(/[^a-zA-Z0-9-]/g, `-`);
      let functionId = functionIdBase;
      if (seenFunctionIds.has(functionId)) {
        let counter = 2;
        do {
          functionId = `${functionIdBase}-${counter}`;
          counter++;
        } while (seenFunctionIds.has(functionId));
      }
      knownFunctions.push({
        functionRoute: finalName,
        pluginName: glob.pluginName,
        originalAbsoluteFilePath,
        originalRelativeFilePath,
        relativeCompiledFilePath: compiledFunctionName,
        absoluteCompiledFilePath: compiledPath,
        matchPath: (0, _gatsbyCoreUtils.getMatchPath)(finalName),
        functionId
      });
    });
    return knownFunctions;
  }));

  // Combine functions by the route name so that functions in the default
  // functions directory can override the plugin's implementations.
  // @ts-ignore - Seems like a TS bug: https://github.com/microsoft/TypeScript/issues/28010#issuecomment-713484584
  const knownFunctions = (0, _unionBy2.default)(...allFunctions, func => func.functionRoute);
  store.dispatch(_actions.internalActions.setFunctions(knownFunctions));

  // Write out manifest for use by `gatsby serve` and plugins
  _fsExtra.default.writeFileSync(_path2.default.join(compiledFunctionsDir, `manifest.json`), JSON.stringify(knownFunctions, null, 4));
  const {
    config: {
      pathPrefix
    },
    program
  } = store.getState();

  // Load environment variables from process.env.* and .env.* files.
  // Logic is shared with webpack.config.js

  // node env should be DEVELOPMENT | PRODUCTION as these are commonly used in node land
  const nodeEnv = process.env.NODE_ENV || `development`;
  // config env is dependent on the env that it's run, this can be anything from staging-production
  // this allows you to set use different .env environments or conditions in gatsby files
  const configEnv = process.env.GATSBY_ACTIVE_ENV || nodeEnv;
  const envFile = _path2.default.join(siteDirectoryPath, `./.env.${configEnv}`);
  let parsed = {};
  try {
    parsed = _dotenv.default.parse(_fsExtra.default.readFileSync(envFile, {
      encoding: `utf8`
    }));
  } catch (err) {
    if (err.code !== `ENOENT`) {
      reporter.error(`There was a problem processing the .env file (${envFile})`, err);
    }
  }
  const envObject = Object.keys(parsed).reduce((acc, key) => {
    acc[key] = JSON.stringify(parsed[key]);
    return acc;
  }, {});
  const varsFromProcessEnv = Object.keys(process.env).reduce((acc, key) => {
    acc[key] = JSON.stringify(process.env[key]);
    return acc;
  }, {});

  // Don't allow overwriting of NODE_ENV, PUBLIC_DIR as to not break gatsby things
  envObject.NODE_ENV = JSON.stringify(nodeEnv);
  envObject.PUBLIC_DIR = JSON.stringify(`${siteDirectoryPath}/public`);
  const mergedEnvVars = Object.assign(envObject, varsFromProcessEnv);
  const processEnvVars = Object.keys(mergedEnvVars).reduce((acc, key) => {
    acc[`process.env.${key}`] = mergedEnvVars[key];
    return acc;
  }, {
    "process.env": `({})`
  });
  const entries = {};
  const precompileDevFunctions = isProductionEnv || process.env.GATSBY_PRECOMPILE_DEVELOP_FUNCTIONS === `true` || process.env.GATSBY_PRECOMPILE_DEVELOP_FUNCTIONS === `1`;
  const functionsList = precompileDevFunctions ? knownFunctions : activeDevelopmentFunctions;
  functionsList.forEach(functionObj => {
    var _functionObj$matchPat;
    // Get path without the extension (as it could be ts or js)
    const parsedFile = _path2.default.parse(functionObj.originalRelativeFilePath);
    const compiledNameWithoutExtension = _path2.default.join(parsedFile.dir, parsedFile.name);
    let entryToTheFunction = functionObj.originalAbsoluteFilePath;
    // we wrap user defined function with our preamble that handles matchPath as well as body parsing
    // see api-function-webpack-loader.ts for more info
    entryToTheFunction += `?matchPath=` + ((_functionObj$matchPat = functionObj.matchPath) !== null && _functionObj$matchPat !== void 0 ? _functionObj$matchPat : ``);
    entries[compiledNameWithoutExtension] = entryToTheFunction;
  });
  activeEntries = entries;
  const stage = isProductionEnv ? `functions-production` : `functions-development`;
  const gatsbyPluginTSRequire = _module.default.createRequire(require.resolve(`gatsby-plugin-typescript`));
  return {
    entry: entries,
    output: {
      path: compiledFunctionsDir,
      filename: `[name].js`,
      libraryTarget: `commonjs2`
    },
    target: `node`,
    // Minification is expensive and not as helpful for serverless functions.
    optimization: {
      minimize: false
    },
    // Resolve files ending with .ts and the default extensions of .js, .json, .wasm
    resolve: {
      extensions: [`.ts`, `...`]
    },
    // Have webpack save its cache to the .cache/webpack directory
    cache: {
      type: `filesystem`,
      name: stage,
      cacheLocation: _path2.default.join(siteDirectoryPath, `.cache`, `webpack`, `stage-` + stage)
    },
    mode: isProductionEnv ? `production` : `development`,
    // watch: !isProductionEnv,
    module: {
      rules: [
      // Webpack expects extensions when importing ESM modules as that's what the spec describes.
      // Not all libraries have adapted so we don't enforce its behaviour
      // @see https://github.com/webpack/webpack/issues/11467
      {
        test: /\.[tj]sx?$/,
        resourceQuery: /matchPath/,
        use: {
          loader: require.resolve(`./api-function-webpack-loader`)
        }
      }, {
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
        },
        use: {
          loader: require.resolve(`babel-loader`),
          options: {
            presets: [gatsbyPluginTSRequire.resolve(`@babel/preset-typescript`)]
          }
        }
      }, {
        test: [/.js$/, /.ts$/],
        exclude: /node_modules/,
        use: {
          loader: require.resolve(`babel-loader`),
          options: {
            presets: [gatsbyPluginTSRequire.resolve(`@babel/preset-typescript`)]
          }
        }
      }]
    },
    plugins: [new _webpack.default.DefinePlugin({
      PREFIX_TO_STRIP: JSON.stringify(program.prefixPaths ? pathPrefix === null || pathPrefix === void 0 ? void 0 : pathPrefix.replace(/(^\/+|\/+$)/g, ``) : ``),
      ...processEnvVars
    }), new _webpack.default.IgnorePlugin({
      checkResource(resource) {
        if (resource === `lmdb`) {
          reporter.warn(`LMDB and other modules with native dependencies are not supported in Gatsby Functions.\nIf you are importing utils from \`gatsby-core-utils\`, make sure to import from a specific module (for example \`gatsby-core-utils/create-content-digest\`).`);
          return true;
        }
        return false;
      }
    })]
  };
};
let isFirstBuild = true;
async function onPreBootstrap({
  reporter,
  store,
  parentSpan
}) {
  const activity = reporter.activityTimer(`Compiling Gatsby Functions`, {
    parentSpan
  });
  activity.start();
  const {
    program: {
      directory: siteDirectoryPath
    }
  } = store.getState();
  const compiledFunctionsDir = _path2.default.join(siteDirectoryPath, `.cache`, `functions`);
  await _fsExtra.default.ensureDir(compiledFunctionsDir);
  await _fsExtra.default.emptyDir(compiledFunctionsDir);
  try {
    // We do this ungainly thing as we need to make accessible
    // the resolve/reject functions to our shared callback function
    // eslint-disable-next-line
    await new Promise(async (resolve, reject) => {
      const config = await createWebpackConfig({
        siteDirectoryPath,
        store,
        reporter
      });
      function callback(err, stats) {
        const rawMessages = stats === null || stats === void 0 ? void 0 : stats.toJson({
          all: false,
          warnings: true,
          errors: true
        });
        if (rawMessages !== null && rawMessages !== void 0 && rawMessages.warnings && rawMessages.warnings.length > 0) {
          (0, _webpackErrorUtils.reportWebpackWarnings)(rawMessages.warnings, reporter);
        }
        if (err) return reject(err);
        const errors = (stats === null || stats === void 0 ? void 0 : stats.compilation.errors) || [];

        // If there's errors, reject in production and print to the console
        // in development.
        if (isProductionEnv) {
          if (errors.length > 0) return reject(errors);
        } else {
          const formatted = (0, _formatWebpackMessages.default)({
            errors: rawMessages !== null && rawMessages !== void 0 && rawMessages.errors ? rawMessages.errors.map(e => e.message) : [],
            warnings: []
          });
          reporter.error(formatted.errors);
        }

        // Log success in dev
        if (!isProductionEnv) {
          if (isFirstBuild) {
            isFirstBuild = false;
          } else {
            reporter.success(`Re-building functions`);
          }
        }
        return resolve(null);
      }
      if (isProductionEnv) {
        (0, _webpack.default)(config).run(callback);
      } else {
        // When in watch mode, you call things differently
        let compiler = (0, _webpack.default)(config).watch({}, callback);
        const globs = createGlobArray(siteDirectoryPath, store.getState().flattenedPlugins);

        // Watch for env files to change and restart the webpack watcher.
        _chokidar.default.watch([`${siteDirectoryPath}/.env*`, ...globs.map(glob => glob.globPattern)], {
          ignoreInitial: true
        }).on(`all`, async (event, path) => {
          // Ignore change events from the API directory for functions we're
          // already watching.
          if (event === `change` && Object.values(activeEntries).includes(path) && path.includes(`/src/api/`)) {
            return;
          }
          reporter.log(`Restarting function watcher due to change to "${path}"`);

          // Otherwise, restart the watcher
          compiler.close(async () => {
            const config = await createWebpackConfig({
              siteDirectoryPath,
              store,
              reporter
            });
            compiler = (0, _webpack.default)(config).watch({}, callback);
          });
        });
      }
    });
  } catch (error) {
    activity.panic({
      id: `11332`,
      error,
      context: {}
    });
  }
  activity.end();
}
async function onCreateDevServer({
  reporter,
  app,
  store
}) {
  reporter.verbose(`Attaching functions to development server`);
  const {
    program: {
      directory: siteDirectoryPath
    }
  } = store.getState();
  const compiledFunctionsDir = _path2.default.join(siteDirectoryPath, `.cache`, `functions`);
  app.use(`/api/*`, ...(0, _middleware.functionMiddlewares)({
    getFunctions() {
      const {
        functions
      } = store.getState();
      return functions;
    },
    async prepareFn(functionObj) {
      activeDevelopmentFunctions.add(functionObj);
      await ensureFunctionIsCompiled(functionObj, compiledFunctionsDir);
    },
    showDebugMessageInResponse: true
  }));
}
//# sourceMappingURL=gatsby-node.js.map