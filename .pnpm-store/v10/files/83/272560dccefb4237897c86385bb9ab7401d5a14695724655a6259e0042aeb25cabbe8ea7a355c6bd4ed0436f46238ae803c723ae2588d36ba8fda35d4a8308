"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createGraphqlEngineBundle = createGraphqlEngineBundle;
var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _execa = _interopRequireDefault(require("execa"));
var _webpack = _interopRequireDefault(require("webpack"));
var _ConcatenatedModule = _interopRequireDefault(require("webpack/lib/optimize/ConcatenatedModule"));
var _package = require("gatsby/package.json");
var _printPlugins = require("./print-plugins");
var _module = _interopRequireDefault(require("module"));
var _webpackLogging = require("../../utils/webpack/plugins/webpack-logging");
var _webpackAssetRelocatorLoader = require("@vercel/webpack-asset-relocator-loader");
var nodeApis = _interopRequireWildcard(require("../../utils/api-node-docs"));
var _redux = require("../../redux");
var _path2 = require("gatsby-core-utils/path");
var _enginesHelpers = require("../../utils/engines-helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable @typescript-eslint/naming-convention */

const extensions = [`.mjs`, `.js`, `.json`, `.node`, `.ts`, `.tsx`];
const outputDir = path.posix.join((0, _path2.slash)(process.cwd()), `.cache`, `query-engine`);
const cacheLocation = path.posix.join((0, _path2.slash)(process.cwd()), `.cache`, `webpack`, `query-engine`);
function getApisToRemoveForQueryEngine() {
  const apisToKeep = new Set(_printPlugins.schemaCustomizationAPIs);
  apisToKeep.add(`onPluginInit`);
  const apisToRemove = Object.keys(nodeApis).filter(api => !apisToKeep.has(api));
  return apisToRemove;
}
const getInternalPackagesCacheDir = functionsTarget => path.posix.join((0, _path2.slash)(process.cwd()), `.cache`, `internal-packages`, `${functionsTarget.platform}-${functionsTarget.arch}`);

// Create a directory and JS module where we install internally used packages
const createInternalPackagesCacheDir = async functionsTarget => {
  const cacheDir = getInternalPackagesCacheDir(functionsTarget);
  await fs.ensureDir(cacheDir);
  const packageJsonPath = path.join(cacheDir, `package.json`);
  if (!fs.existsSync(packageJsonPath)) {
    await fs.emptyDir(cacheDir);
    await fs.outputJson(packageJsonPath, {
      name: `gatsby-internal-packages`,
      description: `This directory contains internal packages installed by Gatsby used to comply with the current platform requirements`,
      version: `1.0.0`,
      private: true,
      author: `Gatsby`,
      license: `MIT`,
      functionsTarget
    });
  }
};
function getLMDBBinaryFromSiteLocation(lmdbPackageName, version, functionsTarget) {
  // Read lmdb's package.json, go through its optional depedencies and validate if there's a prebuilt lmdb module with a compatible binary to our platform and arch
  let packageJson;
  try {
    const modulePath = path.dirname((0, _path2.slash)(require.resolve(`lmdb`))).replace(`/dist`, ``);
    const packageJsonPath = path.join(modulePath, `package.json`);
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, `utf-8`));
  } catch (e) {
    // If we fail to read lmdb's package.json there's bigger problems here so just skip installation
    return undefined;
  }
  // If there's no lmdb prebuilt package for our arch/platform listed as optional dep no point in trying to install it
  const {
    optionalDependencies = {}
  } = packageJson;
  if (!Object.keys(optionalDependencies).find(p => p === lmdbPackageName)) {
    throw new Error(`Target platform/arch for functions execution (${functionsTarget.platform}/${functionsTarget.arch}) is not supported.`);
  }
  return getPackageLocationFromRequireContext((0, _path2.slash)(require.resolve(`lmdb`)), lmdbPackageName, version);
}
function getPackageLocationFromRequireContext(location, packageName, packageVersion) {
  try {
    const requireId = `${packageName}/package.json`;
    const locationRequire = _module.default.createRequire(location);
    const packageJsonLocation = (0, _path2.slash)(locationRequire.resolve(requireId));
    if (packageVersion) {
      // delete locationRequire.cache[requireId]
      const {
        version
      } = JSON.parse(fs.readFileSync(packageJsonLocation, `utf-8`));
      if (packageVersion !== version) {
        return undefined;
      }
    }
    return path.dirname(packageJsonLocation);
  } catch (e) {
    return undefined;
  }
}
function checkIfInstalledInInternalPackagesCache(packageStatus, functionsTarget) {
  const cacheDir = getInternalPackagesCacheDir(functionsTarget);
  const packageLocationFromInternalPackageCache = getPackageLocationFromRequireContext(path.posix.join(cacheDir, `:internal:`), packageStatus.packageName, packageStatus.packageVersion);
  if (packageLocationFromInternalPackageCache && !path.posix.relative(cacheDir, packageLocationFromInternalPackageCache).startsWith(`..`)) {
    return {
      ...packageStatus,
      needToInstall: false,
      packageLocation: packageLocationFromInternalPackageCache
    };
  }
  return {
    ...packageStatus,
    needToInstall: true
  };
}

// Install lmdb's native system module under our internal cache if we detect the current installation
// isn't using the pre-build binaries
function checkIfNeedToInstallMissingLmdb(functionsTarget) {
  // lmdb module with prebuilt binaries for target platform
  const lmdbPackageName = `@lmdb/lmdb-${functionsTarget.platform}-${functionsTarget.arch}`;
  const lmdbBinaryFromSiteLocation = getLMDBBinaryFromSiteLocation(lmdbPackageName, _package.dependencies.lmdb, functionsTarget);
  const sharedPackageStatus = {
    needToInstall: true,
    packageName: lmdbPackageName,
    packageVersion: _package.dependencies.lmdb
  };
  if (lmdbBinaryFromSiteLocation) {
    return {
      ...sharedPackageStatus,
      needToInstall: false,
      packageLocation: lmdbBinaryFromSiteLocation
    };
  }
  return checkIfInstalledInInternalPackagesCache(sharedPackageStatus, functionsTarget);
}
function checkIfNeedToInstallMissingSharp(functionsTarget, currentTarget) {
  try {
    var _sharp$versions$sharp;
    // check if sharp is resolvable
    const sharp = require(`sharp`);
    if ((0, _isEqual2.default)(functionsTarget, currentTarget)) {
      // if current platform and target is the same as functions target, we need to check if vendored libvips
      // exists in the current sharp installation as it will be needed in lambda
      if (sharp.vendor.installed.includes(sharp.vendor.current)) {
        // vendored libvips is installed, so we can use it
        return undefined;
      }
    }
    return checkIfInstalledInInternalPackagesCache({
      needToInstall: true,
      packageName: `sharp`,
      packageVersion: (_sharp$versions$sharp = sharp.versions.sharp) !== null && _sharp$versions$sharp !== void 0 ? _sharp$versions$sharp : require(`sharp/package.json`).version
    }, functionsTarget);
  } catch (e) {
    return undefined;
  }
}
async function installMissing(packages, functionsTarget) {
  function shouldInstall(p) {
    return Boolean(p === null || p === void 0 ? void 0 : p.needToInstall);
  }
  const packagesToInstall = packages.filter(shouldInstall);
  if (packagesToInstall.length === 0) {
    return packages;
  }
  await createInternalPackagesCacheDir(functionsTarget);
  const cacheDir = getInternalPackagesCacheDir(functionsTarget);
  const options = {
    stderr: `inherit`,
    cwd: cacheDir,
    env: {
      npm_config_arch: functionsTarget.arch,
      npm_config_platform: functionsTarget.platform,
      // force sharp to download vendored libvips and not skip it if globally installed libvips matches sharp requirements
      // so that produced function is self-sufficient and doesn't rely on function execution environment having (same)
      // globally available libvips
      SHARP_IGNORE_GLOBAL_LIBVIPS: `1`
    }
  };
  const npmAdditionalCliArgs = [`--no-progress`, `--no-audit`, `--no-fund`, `--loglevel`, `error`, `--color`, `always`, `--legacy-peer-deps`, `--save-exact`,
  // target platform might be different than current and force allows us to install it
  `--force`];
  await (0, _execa.default)(`npm`, [`install`, ...npmAdditionalCliArgs, ...packagesToInstall.map(p => `${p.packageName}@${p.packageVersion}`)], options);
  return packages.map(info => info ? info.needToInstall ? {
    ...info,
    needToInstall: false,
    packageLocation: path.posix.join(cacheDir, `node_modules`, info.packageName)
  } : info : undefined);
}
async function createGraphqlEngineBundle(rootDir, reporter, isVerbose) {
  var _state$config$pathPre, _process$env$GATSBY_W;
  const state = _redux.store.getState();
  const pathPrefix = state.program.prefixPaths ? (_state$config$pathPre = state.config.pathPrefix) !== null && _state$config$pathPre !== void 0 ? _state$config$pathPre : `` : ``;
  const schemaSnapshotString = await fs.readFile(path.join(rootDir, `.cache`, `schema.gql`), `utf-8`);
  await (0, _printPlugins.printQueryEnginePlugins)();
  const assetRelocatorUseEntry = {
    loader: require.resolve(`@vercel/webpack-asset-relocator-loader`),
    options: {
      outputAssetBase: `assets`
    }
  };
  const gatsbyPluginTSRequire = _module.default.createRequire(require.resolve(`gatsby-plugin-typescript`));
  const currentTarget = (0, _enginesHelpers.getCurrentPlatformAndTarget)();
  const functionsTarget = (0, _enginesHelpers.getFunctionsTargetPlatformAndTarget)();
  const dynamicAliases = {};
  let forcedLmdbBinaryModule = undefined;

  // we need to make sure we have internal packages cache directory setup for current lambda target
  // before we attempt to check if we can reuse those packages
  await createInternalPackagesCacheDir(functionsTarget);
  const [lmdbPackageInfo, sharpPackageInfo] = await installMissing([checkIfNeedToInstallMissingLmdb(functionsTarget), checkIfNeedToInstallMissingSharp(functionsTarget, currentTarget)], functionsTarget);
  if (!lmdbPackageInfo) {
    throw new Error(`Failed to find required LMDB binary`);
  } else if (functionsTarget.platform === `linux`) {
    // function execution platform is primarily linux, which is tested the most, so we only force that specific binary
    // to not cause untested code paths
    if (lmdbPackageInfo.needToInstall) {
      throw new Error(`Failed to locate or install LMDB binary for functions execution platform/arch (${functionsTarget.platform}/${functionsTarget.arch})`);
    }
    forcedLmdbBinaryModule = `${lmdbPackageInfo.packageLocation}/node.abi83.glibc.node`;
  }
  if (sharpPackageInfo) {
    if (sharpPackageInfo.needToInstall) {
      throw new Error(`Failed to locate or install Sharp binary for functions execution platform/arch (${functionsTarget.platform}/${functionsTarget.arch})`);
    }
    dynamicAliases[`sharp$`] = sharpPackageInfo.packageLocation;
  }
  const compiler = (0, _webpack.default)({
    name: `Query Engine`,
    // mode: `production`,
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
      name: `graphql-engine`,
      cacheLocation,
      buildDependencies: {
        config: [__filename]
      },
      version: JSON.stringify(functionsTarget)
    },
    // those are required in some runtime paths, but we don't need them
    externals: [`cbor-x`,
    // optional dep of lmdb-store, but we are using `msgpack` (default) encoding, so we don't need it
    `electron`,
    // :shrug: `got` seems to have electron specific code path
    _module.default.builtinModules.reduce((acc, builtinModule) => {
      if (builtinModule === `fs`) {
        acc[builtinModule] = `global _actualFsWrapper`;
        acc[`node:${builtinModule}`] = `global _actualFsWrapper`;
      } else {
        acc[builtinModule] = `commonjs ${builtinModule}`;
        acc[`node:${builtinModule}`] = `commonjs ${builtinModule}`;
      }
      return acc;
    }, {})],
    module: {
      rules: [{
        oneOf: [{
          // specific set of loaders for sharp
          test: /node_modules[/\\]sharp[/\\].*\.[cm]?js$/,
          // it is recommended for Node builds to turn off AMD support
          parser: {
            amd: false
          },
          use: [assetRelocatorUseEntry, {
            loader: require.resolve(`./sharp-bundling-patch`)
          }]
        }, {
          // specific set of loaders for LMBD - our custom patch to massage lmdb to work with relocator -> relocator
          test: /node_modules[/\\]lmdb[/\\].*\.[cm]?js/,
          // it is recommended for Node builds to turn off AMD support
          parser: {
            amd: false
          },
          use: [assetRelocatorUseEntry, {
            loader: require.resolve(`./lmdb-bundling-patch`),
            options: {
              forcedBinaryModule: forcedLmdbBinaryModule
            }
          }]
        }, {
          // specific set of loaders for gatsby-node files - our babel transform that removes lifecycles not needed for engine -> relocator
          test: /gatsby-node\.(cjs|mjs|js|ts)$/,
          // it is recommended for Node builds to turn off AMD support
          parser: {
            amd: false
          },
          use: [assetRelocatorUseEntry, {
            loader: require.resolve(`../../utils/webpack/loaders/webpack-remove-exports-loader`),
            options: {
              remove: getApisToRemoveForQueryEngine(),
              jsx: false
            }
          }]
        }, {
          // generic loader for all other cases than lmdb or gatsby-node - we don't do anything special other than using relocator on it
          // For node binary relocations, include ".node" files as well here
          test: /\.(cjs|mjs|js|ts|node)$/,
          // it is recommended for Node builds to turn off AMD support
          parser: {
            amd: false
          },
          use: assetRelocatorUseEntry
        }]
      }, {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve(`babel-loader`),
          options: {
            presets: [gatsbyPluginTSRequire.resolve(`@babel/preset-typescript`)]
          }
        }
      }, {
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
        test: /\.txt/,
        type: `asset/resource`
      }, {
        test: /\.(graphqls?|gqls?)$/,
        use: {
          loader: require.resolve(`graphql-tag/loader`)
        }
      }]
    },
    resolve: {
      extensions,
      alias: {
        ...dynamicAliases,
        ".cache": process.cwd() + `/.cache/`,
        [require.resolve(`gatsby-cli/lib/reporter/loggers/ink/index.js`)]: false,
        inquirer: false,
        // only load one version of lmdb
        lmdb: require.resolve(`lmdb`),
        "ts-node": require.resolve(`./shims/ts-node`),
        "gatsby-sharp$": require.resolve(`./shims/gatsby-sharp`),
        "graphql-import-node$": require.resolve(`./shims/no-op-module`),
        "graphql-import-node/register$": require.resolve(`./shims/no-op-module`),
        "babel-runtime/helpers/asyncToGenerator": require.resolve(`./shims/no-op-module`) // undeclared dep of yurnalist (but used in code path we don't use)
      }
    },

    plugins: [new _webpack.default.EnvironmentPlugin([`GATSBY_CLOUD_IMAGE_CDN`]), new _webpack.default.DefinePlugin({
      "process.env.GATSBY_SKIP_WRITING_SCHEMA_TO_FILE": `true`,
      "process.env.NODE_ENV": JSON.stringify(`production`),
      SCHEMA_SNAPSHOT: JSON.stringify(schemaSnapshotString),
      PATH_PREFIX: JSON.stringify(pathPrefix),
      "process.env.GATSBY_LOGGER": JSON.stringify(`yurnalist`),
      "process.env.GATSBY_SLICES": JSON.stringify(!!process.env.GATSBY_SLICES),
      "process.env.GATSBY_FUNCTIONS_PLATFORM": JSON.stringify(functionsTarget.platform),
      "process.env.GATSBY_FUNCTIONS_ARCH": JSON.stringify(functionsTarget.arch)
    }), ((_process$env$GATSBY_W = process.env.GATSBY_WEBPACK_LOGGING) === null || _process$env$GATSBY_W === void 0 ? void 0 : _process$env$GATSBY_W.includes(`query-engine`)) && new _webpackLogging.WebpackLoggingPlugin(rootDir, reporter, isVerbose)].filter(Boolean)
  });
  return new Promise((resolve, reject) => {
    compiler.run(async (err, stats) => {
      function getResourcePath(webpackModule) {
        if (webpackModule && !(webpackModule instanceof _ConcatenatedModule.default)) {
          return webpackModule.resource;
        }
        if (webpackModule !== null && webpackModule !== void 0 && webpackModule.modules) {
          // ConcatenatedModule is a collection of modules so we have to go deeper to actually get a path,
          // at this point we won't know which one so we just grab first module here
          const [firstSubModule] = webpackModule.modules;
          return getResourcePath(firstSubModule);
        }
        return undefined;
      }
      function iterateModules(webpackModules, compilation) {
        for (const webpackModule of webpackModules) {
          if (webpackModule instanceof _ConcatenatedModule.default) {
            iterateModules(webpackModule.modules, compilation);
          } else {
            const resourcePath = getResourcePath(webpackModule);
            if (resourcePath !== null && resourcePath !== void 0 && resourcePath.includes(`ts-node`)) {
              const importedBy = getResourcePath(compilation.moduleGraph.getIssuer(webpackModule));
              const structuredError = {
                id: `98011`,
                context: {
                  package: `ts-node`,
                  importedBy,
                  advisory: `Gatsby is supporting TypeScript natively (see https://gatsby.dev/typescript). "ts-node" might not be needed anymore at all, consider removing it.`
                }
              };
              throw structuredError;
            }
          }
        }
      }
      try {
        if (stats !== null && stats !== void 0 && stats.compilation.modules) {
          iterateModules(stats.compilation.modules, stats.compilation);
        }
        if (!(0, _isEqual2.default)(functionsTarget, currentTarget)) {
          const binaryFixingPromises = [];
          // sigh - emitAsset used by relocator seems to corrupt binaries
          // resulting in "ELF file's phentsize not the expected size" errors
          // - see size diff
          //   > find . -name node.abi83.glibc.node
          // ./.cache/internal-packages/node_modules/@lmdb/lmdb-linux-x64/node.abi83.glibc.node
          // ./.cache/query-engine/assets/node.abi83.glibc.node
          // > ls -al ./.cache/query-engine/assets/node.abi83.glibc.node
          // -rw-r--r-- 1 misiek 197121 1285429 Mar 14 11:36 ./.cache/query-engine/assets/node.abi83.glibc.node
          // > ls -al ./.cache/internal-packages/node_modules/@lmdb/lmdb-linux-x64/node.abi83.glibc.node
          // -rw-r--r-- 1 misiek 197121 693544 Mar 14 11:35 ./.cache/internal-packages/node_modules/@lmdb/lmdb-linux-x64/node.abi83.glibc.node
          // so this tries to fix it by straight copying it over
          for (const asset of ((_stats$compilation$as = stats === null || stats === void 0 ? void 0 : (_stats$compilation = stats.compilation) === null || _stats$compilation === void 0 ? void 0 : _stats$compilation.assetsInfo) !== null && _stats$compilation$as !== void 0 ? _stats$compilation$as : new Map()).keys()) {
            var _stats$compilation$as, _stats$compilation;
            if (asset !== null && asset !== void 0 && asset.endsWith(`.node`)) {
              const targetRelPath = path.posix.relative(`assets`, asset);
              const assetMeta = (0, _webpackAssetRelocatorLoader.getAssetMeta)(targetRelPath, stats === null || stats === void 0 ? void 0 : stats.compilation);
              const sourcePath = assetMeta === null || assetMeta === void 0 ? void 0 : assetMeta.path;
              if (sourcePath) {
                const dist = path.join(outputDir, asset);
                binaryFixingPromises.push(fs.copyFile(sourcePath, dist));
              }
            }
          }
          await Promise.all(binaryFixingPromises);
        }
        compiler.close(closeErr => {
          if (err) {
            return reject(err);
          }
          if (closeErr) {
            return reject(closeErr);
          }
          return resolve(stats === null || stats === void 0 ? void 0 : stats.compilation);
        });
      } catch (e) {
        reject(e);
      }
    });
  });
}
//# sourceMappingURL=bundle-webpack.js.map