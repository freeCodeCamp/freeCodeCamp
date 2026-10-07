"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getAdapterInit = getAdapterInit;
exports.getAdaptersCacheDir = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _createRequireFromPath = require("gatsby-core-utils/create-require-from-path");
var _path = require("path");
var _fsExtra = require("fs-extra");
var _execa = _interopRequireDefault(require("execa"));
var _package = require("gatsby/package.json");
var _semver = require("semver");
var _preferDefault = require("../../bootstrap/prefer-default");
var _getLatestGatsbyFiles = require("../get-latest-gatsby-files");
var _resolveJsFilePath = require("../../bootstrap/resolve-js-file-path");
const getAdaptersCacheDir = () => (0, _path.join)(process.cwd(), `.cache/adapters`);
exports.getAdaptersCacheDir = getAdaptersCacheDir;
const createAdaptersCacheDir = async () => {
  await (0, _fsExtra.ensureDir)(getAdaptersCacheDir());
  await (0, _fsExtra.emptyDir)(getAdaptersCacheDir());
  const packageJsonPath = (0, _path.join)(getAdaptersCacheDir(), `package.json`);
  await (0, _fsExtra.outputJson)(packageJsonPath, {
    name: `gatsby-adapters`,
    description: `This directory contains adapters that have been automatically installed by Gatsby.`,
    version: `1.0.0`,
    private: true,
    author: `Gatsby`,
    license: `MIT`
  });
};
const tryLoadingAlreadyInstalledAdapter = async ({
  adapterToUse,
  installLocation,
  currentGatsbyVersion
}) => {
  try {
    const locationRequire = (0, _createRequireFromPath.createRequireFromPath)(`${installLocation}/:internal:`);
    const adapterPackageJson = locationRequire(`${adapterToUse.module}/package.json`);
    const adapterPackageVersion = adapterPackageJson === null || adapterPackageJson === void 0 ? void 0 : adapterPackageJson.version;

    // Check if installed adapter version is compatible with the current Gatsby version based on the manifest
    if (!(0, _semver.satisfies)(adapterPackageVersion, adapterToUse.moduleVersion, {
      includePrerelease: true
    })) {
      return {
        found: true,
        compatible: false,
        installedVersion: adapterPackageVersion,
        incompatibilityReason: `Used gatsby version "${currentGatsbyVersion}" requires "${adapterToUse.module}@${adapterToUse.moduleVersion}". Installed "${adapterToUse.module}" version: "${adapterPackageVersion}".`
      };
    }
    const required = (0, _resolveJsFilePath.maybeAddFileProtocol)(locationRequire.resolve(adapterToUse.module));
    if (required) {
      return {
        found: true,
        compatible: true,
        installedVersion: adapterPackageVersion,
        loadedModule: (0, _preferDefault.preferDefault)((0, _preferDefault.preferDefault)(await import(required)))
      };
    } else {
      return {
        found: false
      };
    }
  } catch (e) {
    return {
      found: false
    };
  }
};
const handleAdapterProblem = (message, panicFn = _reporter.default.panic) => {
  if (!process.env.GATSBY_CONTINUE_BUILD_ON_ADAPTER_MISMATCH) {
    panicFn(`${message}\n\nZero-configuration deployment failed to avoid potentially broken deployment.\nIf you want build to continue despite above problems:\n - configure adapter manually in gatsby-config which will skip zero-configuration deployment attempt\n - or set GATSBY_CONTINUE_BUILD_ON_MISSING_ADAPTER=true environment variable to continue build without an adapter.`);
  } else {
    _reporter.default.warn(`${message}\n\nContinuing build using without using any adapter due to GATSBY_CONTINUE_BUILD_ON_MISSING_ADAPTER environment variable being set`);
  }
  return undefined;
};
async function getAdapterInit(currentGatsbyVersion = _package.version) {
  // 0. Try to fetch the latest adapters manifest - if it fails, we continue with manifest packaged with current version of gatsby
  const latestAdapters = await (0, _getLatestGatsbyFiles.getLatestAdapters)();

  // 1. Find adapter candidates that are compatible with the current environment
  //    we find all matching adapters in case package is renamed in the future and future gatsby versions will need different package than previous ones
  const adapterEntry = latestAdapters.find(candidate => candidate.test());
  if (!adapterEntry) {
    _reporter.default.verbose(`No adapter was found for the current environment. Skipping adapter initialization.`);
    return undefined;
  }

  // 2.From the manifest entry find one that supports current Gatsby version and identify it's version to use
  //   First matching one will be used.
  let adapterToUse = undefined;
  for (const versionEntry of adapterEntry.versions) {
    if ((0, _semver.satisfies)(currentGatsbyVersion, versionEntry.gatsbyVersion, {
      includePrerelease: true
    })) {
      var _versionEntry$module;
      adapterToUse = {
        name: adapterEntry.name,
        module: (_versionEntry$module = versionEntry.module) !== null && _versionEntry$module !== void 0 ? _versionEntry$module : adapterEntry.module,
        gatsbyVersion: versionEntry.gatsbyVersion,
        moduleVersion: versionEntry.moduleVersion
      };
      break;
    }
  }
  if (!adapterToUse) {
    return handleAdapterProblem(`No version of ${adapterEntry.name} adapter is compatible with your current Gatsby version ${currentGatsbyVersion}.`);
  }
  {
    // 3. Check if the user has manually installed the adapter and try to resolve it from there
    const adapterInstalledByUserResults = await tryLoadingAlreadyInstalledAdapter({
      adapterToUse,
      installLocation: process.cwd(),
      currentGatsbyVersion
    });
    if (adapterInstalledByUserResults.found) {
      if (adapterInstalledByUserResults.compatible) {
        _reporter.default.verbose(`Using site's adapter dependency "${adapterToUse.module}@${adapterInstalledByUserResults.installedVersion}"`);
        return adapterInstalledByUserResults.loadedModule;
      } else {
        _reporter.default.warn(`Ignoring incompatible ${adapterToUse.module}@${adapterInstalledByUserResults.installedVersion} installed by site. ${adapterInstalledByUserResults.incompatibilityReason}`);
      }
    }
  }
  {
    // 4. Check if a previous run has installed the correct adapter into .cache/adapters already and try to resolve it from there
    const adapterPreviouslyInstalledInCacheAdaptersResults = await tryLoadingAlreadyInstalledAdapter({
      adapterToUse,
      installLocation: getAdaptersCacheDir(),
      currentGatsbyVersion
    });
    if (adapterPreviouslyInstalledInCacheAdaptersResults.found) {
      if (adapterPreviouslyInstalledInCacheAdaptersResults.compatible) {
        _reporter.default.verbose(`Using previously adapter previously installed by gatsby "${adapterToUse.module}@${adapterPreviouslyInstalledInCacheAdaptersResults.installedVersion}"`);
        return adapterPreviouslyInstalledInCacheAdaptersResults.loadedModule;
      } else {
        _reporter.default.verbose(`Ignoring incompatible ${adapterToUse.module} installed by gatsby in ".cache/adapters" before. ${adapterPreviouslyInstalledInCacheAdaptersResults.incompatibilityReason}`);
      }
    }
  }
  {
    // 5. If user has not installed the adapter manually or is incompatible and we don't have cached version installed by gatsby or that version is not compatible
    //    we try to install compatible version into .cache/adapters
    const installTimer = _reporter.default.activityTimer(`Installing ${adapterToUse.name} adapter (${adapterToUse.module}@${adapterToUse.moduleVersion})`);
    try {
      installTimer.start();
      await createAdaptersCacheDir();
      const options = {
        stderr: `inherit`,
        cwd: getAdaptersCacheDir()
      };
      const npmAdditionalCliArgs = [`--no-progress`, `--no-audit`, `--no-fund`, `--loglevel`, `error`, `--color`, `always`, `--legacy-peer-deps`, `--save-exact`];
      await (0, _execa.default)(`npm`, [`install`, ...npmAdditionalCliArgs, `${adapterToUse.module}@${adapterToUse.moduleVersion}`], options);
    } catch (e) {
      return handleAdapterProblem(`Could not install adapter "${adapterToUse.module}@${adapterToUse.moduleVersion}". Please install it yourself by adding it to your package.json's dependencies and try building your project again.`, installTimer.panic);
    }
    installTimer.end();
  }
  {
    // 5. Try to load again from ".cache/adapters"
    const adapterAutoInstalledInCacheAdaptersResults = await tryLoadingAlreadyInstalledAdapter({
      adapterToUse,
      installLocation: getAdaptersCacheDir(),
      currentGatsbyVersion
    });
    if (adapterAutoInstalledInCacheAdaptersResults.found) {
      if (adapterAutoInstalledInCacheAdaptersResults.compatible) {
        _reporter.default.info(`If you plan on staying on this deployment platform, consider installing "${adapterToUse.module}@${adapterToUse.moduleVersion}" as a dependency in your project. This will give you faster and more robust installs.`);
        return adapterAutoInstalledInCacheAdaptersResults.loadedModule;
      } else {
        // this indicates a bug as we install version with range from manifest, and now after trying to load the adapter we consider that adapter incompatible
        return handleAdapterProblem(`Auto installed adapter "${adapterToUse.module}@${adapterAutoInstalledInCacheAdaptersResults.installedVersion}"`);
      }
    } else {
      // this indicates a bug with adapter itself (fail to resolve main entry point) OR the adapter loading logic
      return handleAdapterProblem(`Could not load adapter "${adapterToUse.module}@${adapterToUse.moduleVersion}". Adapter entry point is not resolvable.`);
    }
  }
}
//# sourceMappingURL=init.js.map