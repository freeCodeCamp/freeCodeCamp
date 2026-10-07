"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getConfigFile = getConfigFile;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _testImportError = require("../utils/test-import-error");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _path = _interopRequireDefault(require("path"));
var _compileGatsbyFiles = require("../utils/parcel/compile-gatsby-files");
var _isNearMatch = require("../utils/is-near-match");
var _resolveJsFilePath = require("./resolve-js-file-path");
var _preferDefault = require("./prefer-default");
async function getConfigFile(siteDirectory, configName, distance = 3) {
  const compiledResult = await attemptImportCompiled(siteDirectory, configName);
  if (compiledResult !== null && compiledResult !== void 0 && compiledResult.configModule && compiledResult !== null && compiledResult !== void 0 && compiledResult.configFilePath) {
    return compiledResult;
  }
  const uncompiledResult = await attemptImportUncompiled(siteDirectory, configName, distance);
  return uncompiledResult || {};
}
async function attemptImport(siteDirectory, configPath) {
  const configFilePath = await (0, _resolveJsFilePath.resolveJSFilepath)({
    rootDir: siteDirectory,
    filePath: configPath
  });

  // The file does not exist, no sense trying to import it
  if (!configFilePath) {
    return {
      configFilePath: ``,
      configModule: undefined
    };
  }
  const importedModule = await import((0, _resolveJsFilePath.maybeAddFileProtocol)(configFilePath));
  const configModule = (0, _preferDefault.preferDefault)(importedModule);
  return {
    configFilePath,
    configModule
  };
}
async function attemptImportCompiled(siteDirectory, configName) {
  let compiledResult;
  try {
    const compiledConfigPath = _path.default.join(`${siteDirectory}/${_compileGatsbyFiles.COMPILED_CACHE_DIR}`, configName);
    compiledResult = await attemptImport(siteDirectory, compiledConfigPath);
  } catch (error) {
    _reporter.default.panic({
      id: `11902`,
      error: error,
      context: {
        configName,
        message: error.message
      }
    });
  }
  return compiledResult;
}
async function attemptImportUncompiled(siteDirectory, configName, distance) {
  var _uncompiledResult;
  let uncompiledResult;
  const uncompiledConfigPath = _path.default.join(siteDirectory, configName);
  try {
    uncompiledResult = await attemptImport(siteDirectory, uncompiledConfigPath);
  } catch (error) {
    if (!(0, _testImportError.testImportError)(uncompiledConfigPath, error)) {
      _reporter.default.panic({
        id: `10123`,
        error,
        context: {
          configName,
          message: error.message
        }
      });
    }
  }
  if ((_uncompiledResult = uncompiledResult) !== null && _uncompiledResult !== void 0 && _uncompiledResult.configFilePath) {
    return uncompiledResult;
  }
  const error = new Error(`Cannot find package '${uncompiledConfigPath}'`);
  const {
    tsConfig,
    nearMatch
  } = await checkTsAndNearMatch(siteDirectory, configName, distance);

  // gatsby-config.ts exists but compiled gatsby-config.js does not
  if (tsConfig) {
    _reporter.default.panic({
      id: `10127`,
      error,
      context: {
        configName
      }
    });
  }

  // gatsby-config is misnamed
  if (nearMatch) {
    const isTSX = nearMatch.endsWith(`.tsx`);
    _reporter.default.panic({
      id: `10124`,
      error,
      context: {
        configName,
        nearMatch,
        isTSX
      }
    });
  }

  // gatsby-config is incorrectly located in src directory
  const isInSrcDir = await (0, _resolveJsFilePath.resolveJSFilepath)({
    rootDir: siteDirectory,
    filePath: _path.default.join(siteDirectory, `src`, configName),
    warn: false
  });
  if (isInSrcDir) {
    _reporter.default.panic({
      id: `10125`,
      context: {
        configName
      }
    });
  }
  return uncompiledResult;
}
async function checkTsAndNearMatch(siteDirectory, configName, distance) {
  const files = await _fsExtra.default.readdir(siteDirectory);
  let tsConfig = false;
  let nearMatch = ``;
  for (const file of files) {
    if (tsConfig || nearMatch) {
      break;
    }
    const {
      name,
      ext
    } = _path.default.parse(file);
    if (name === configName && ext === `.ts`) {
      tsConfig = true;
      break;
    }
    if ((0, _isNearMatch.isNearMatch)(name, configName, distance)) {
      nearMatch = file;
    }
  }
  return {
    tsConfig,
    nearMatch
  };
}
//# sourceMappingURL=get-config-file.js.map