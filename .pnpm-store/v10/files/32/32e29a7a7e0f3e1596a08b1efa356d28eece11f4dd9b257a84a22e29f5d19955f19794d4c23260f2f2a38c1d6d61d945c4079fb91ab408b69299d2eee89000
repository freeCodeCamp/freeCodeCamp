"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.default = createParcelConfigRequest;
exports.getCachedParcelConfig = getCachedParcelConfig;
exports.getResolveFrom = getResolveFrom;
exports.loadParcelConfig = loadParcelConfig;
exports.mergeConfigs = mergeConfigs;
exports.mergeMaps = mergeMaps;
exports.mergePipelines = mergePipelines;
exports.parseAndProcessConfig = parseAndProcessConfig;
exports.processConfig = processConfig;
exports.processConfigChain = processConfigChain;
exports.resolveExtends = resolveExtends;
exports.resolveParcelConfig = resolveParcelConfig;
exports.validateConfigFile = validateConfigFile;
exports.validateNotEmpty = validateNotEmpty;

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _json() {
  const data = require("json5");

  _json = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

var _ParcelConfig = _interopRequireDefault(require("../ParcelConfig.schema"));

var _utils2 = require("../utils");

var _ParcelConfig2 = _interopRequireDefault(require("../ParcelConfig"));

var _buildCache = require("../buildCache");

var _projectPath = require("../projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const type = 'parcel_config_request';

function createParcelConfigRequest() {
  return {
    id: type,
    type,

    async run({
      api,
      options
    }) {
      let {
        config,
        extendedFiles,
        usedDefault
      } = await loadParcelConfig((0, _utils2.optionsProxy)(options, api.invalidateOnOptionChange));
      api.invalidateOnFileUpdate(config.filePath);
      api.invalidateOnFileDelete(config.filePath);

      for (let filePath of extendedFiles) {
        let pp = (0, _projectPath.toProjectPath)(options.projectRoot, filePath);
        api.invalidateOnFileUpdate(pp);
        api.invalidateOnFileDelete(pp);
      }

      if (usedDefault) {
        let resolveFrom = getResolveFrom(options.inputFS, options.projectRoot);
        api.invalidateOnFileCreate({
          fileName: '.parcelrc',
          aboveFilePath: (0, _projectPath.toProjectPath)(options.projectRoot, resolveFrom)
        });
      }

      let cachePath = (0, _utils().hashObject)(config);
      await options.cache.set(cachePath, config);
      let result = {
        config,
        cachePath
      }; // TODO: don't store config twice (once in the graph and once in a separate cache entry)

      api.storeResult(result);
      return result;
    },

    input: null
  };
}

const parcelConfigCache = (0, _buildCache.createBuildCache)();

function getCachedParcelConfig(result, options) {
  let {
    config: processedConfig,
    cachePath
  } = result;
  let config = parcelConfigCache.get(cachePath);

  if (config) {
    return config;
  }

  config = new _ParcelConfig2.default(processedConfig, options);
  parcelConfigCache.set(cachePath, config);
  return config;
}

async function loadParcelConfig(options) {
  let parcelConfig = await resolveParcelConfig(options);

  if (!parcelConfig) {
    throw new Error('Could not find a .parcelrc');
  }

  return parcelConfig;
}

async function resolveParcelConfig(options) {
  let resolveFrom = getResolveFrom(options.inputFS, options.projectRoot);
  let configPath = options.config != null ? (await options.packageManager.resolve(options.config, resolveFrom)).resolved : await (0, _utils().resolveConfig)(options.inputFS, resolveFrom, ['.parcelrc'], options.projectRoot);
  let usedDefault = false;

  if (configPath == null && options.defaultConfig != null) {
    usedDefault = true;
    configPath = (await options.packageManager.resolve(options.defaultConfig, resolveFrom)).resolved;
  }

  if (configPath == null) {
    return null;
  }

  let contents;

  try {
    contents = await options.inputFS.readFile(configPath, 'utf8');
  } catch (e) {
    throw new (_diagnostic().default)({
      diagnostic: {
        message: (0, _diagnostic().md)`Could not find parcel config at ${_path().default.relative(options.projectRoot, configPath)}`,
        origin: '@parcel/core'
      }
    });
  }

  let {
    config,
    extendedFiles
  } = await parseAndProcessConfig(configPath, contents, options);

  if (options.additionalReporters.length > 0) {
    var _config$reporters;

    config.reporters = [...options.additionalReporters.map(({
      packageName,
      resolveFrom
    }) => ({
      packageName,
      resolveFrom
    })), ...((_config$reporters = config.reporters) !== null && _config$reporters !== void 0 ? _config$reporters : [])];
  }

  return {
    config,
    extendedFiles,
    usedDefault
  };
}

function create(config, options) {
  return processConfigChain(config, config.filePath, options);
} // eslint-disable-next-line require-await


async function parseAndProcessConfig(configPath, contents, options) {
  let config;

  try {
    config = (0, _json().parse)(contents);
  } catch (e) {
    let pos = {
      line: e.lineNumber,
      column: e.columnNumber
    };
    throw new (_diagnostic().default)({
      diagnostic: {
        message: `Failed to parse .parcelrc`,
        origin: '@parcel/core',
        codeFrames: [{
          filePath: configPath,
          language: 'json5',
          code: contents,
          codeHighlights: [{
            start: pos,
            end: pos,
            message: (0, _diagnostic().escapeMarkdown)(e.message)
          }]
        }]
      }
    });
  }

  return processConfigChain(config, configPath, options);
}

function processPipeline(options, pipeline, keyPath, filePath) {
  if (pipeline) {
    return pipeline.map((pkg, i) => {
      // $FlowFixMe
      if (pkg === '...') return pkg;
      return {
        packageName: pkg,
        resolveFrom: (0, _projectPath.toProjectPath)(options.projectRoot, filePath),
        keyPath: `${keyPath}/${i}`
      };
    });
  }
}

const RESERVED_PIPELINES = new Set(['node:', 'npm:', 'http:', 'https:', 'data:', 'tel:', 'mailto:']);

async function processMap( // $FlowFixMe
map, keyPath, filePath, options // $FlowFixMe
) {
  if (!map) return undefined; // $FlowFixMe

  let res = {};

  for (let k in map) {
    let i = k.indexOf(':');

    if (i > 0 && RESERVED_PIPELINES.has(k.slice(0, i + 1))) {
      let code = await options.inputFS.readFile(filePath, 'utf8');
      throw new (_diagnostic().default)({
        diagnostic: {
          message: `Named pipeline '${k.slice(0, i + 1)}' is reserved.`,
          origin: '@parcel/core',
          codeFrames: [{
            filePath: filePath,
            language: 'json5',
            code,
            codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(code, [{
              key: `${keyPath}/${k}`,
              type: 'key'
            }])
          }],
          documentationURL: 'https://parceljs.org/features/dependency-resolution/#url-schemes'
        }
      });
    }

    if (typeof map[k] === 'string') {
      res[k] = {
        packageName: map[k],
        resolveFrom: (0, _projectPath.toProjectPath)(options.projectRoot, filePath),
        keyPath: `${keyPath}/${k}`
      };
    } else {
      res[k] = processPipeline(options, map[k], `${keyPath}/${k}`, filePath);
    }
  }

  return res;
}

async function processConfig(configFile, options) {
  return {
    filePath: (0, _projectPath.toProjectPath)(options.projectRoot, configFile.filePath),
    ...(configFile.resolveFrom != null ? {
      resolveFrom: (0, _projectPath.toProjectPath)(options.projectRoot, configFile.resolveFrom)
    } : {
      /*::...null*/
    }),
    resolvers: processPipeline(options, configFile.resolvers, '/resolvers', configFile.filePath),
    transformers: await processMap(configFile.transformers, '/transformers', configFile.filePath, options),
    bundler: configFile.bundler != null ? {
      packageName: configFile.bundler,
      resolveFrom: (0, _projectPath.toProjectPath)(options.projectRoot, configFile.filePath),
      keyPath: '/bundler'
    } : undefined,
    namers: processPipeline(options, configFile.namers, '/namers', configFile.filePath),
    runtimes: processPipeline(options, configFile.runtimes, '/runtimes', configFile.filePath),
    packagers: await processMap(configFile.packagers, '/packagers', configFile.filePath, options),
    optimizers: await processMap(configFile.optimizers, '/optimizers', configFile.filePath, options),
    compressors: await processMap(configFile.compressors, '/compressors', configFile.filePath, options),
    reporters: processPipeline(options, configFile.reporters, '/reporters', configFile.filePath),
    validators: await processMap(configFile.validators, '/validators', configFile.filePath, options)
  };
}

async function processConfigChain(configFile, filePath, options) {
  // Validate config...
  let relativePath = _path().default.relative(options.inputFS.cwd(), filePath);

  validateConfigFile(configFile, relativePath); // Process config...

  let config = await processConfig({
    filePath,
    ...configFile
  }, options);
  let extendedFiles = [];

  if (configFile.extends != null) {
    let exts = Array.isArray(configFile.extends) ? configFile.extends : [configFile.extends];
    let errors = [];

    if (exts.length !== 0) {
      let extStartConfig;
      let i = 0;

      for (let ext of exts) {
        try {
          let key = Array.isArray(configFile.extends) ? `/extends/${i}` : '/extends';
          let resolved = await resolveExtends(ext, filePath, key, options);
          extendedFiles.push(resolved);
          let {
            extendedFiles: moreExtendedFiles,
            config: nextConfig
          } = await processExtendedConfig(filePath, key, ext, resolved, options);
          extendedFiles = extendedFiles.concat(moreExtendedFiles);
          extStartConfig = extStartConfig ? mergeConfigs(extStartConfig, nextConfig) : nextConfig;
        } catch (err) {
          errors.push(err);
        }

        i++;
      } // Merge with the inline config last


      if (extStartConfig) {
        config = mergeConfigs(extStartConfig, config);
      }
    }

    if (errors.length > 0) {
      throw new (_diagnostic().default)({
        diagnostic: errors.flatMap(e => e.diagnostics)
      });
    }
  }

  return {
    config,
    extendedFiles
  };
}

async function resolveExtends(ext, configPath, extendsKey, options) {
  if (ext.startsWith('.')) {
    return _path().default.resolve(_path().default.dirname(configPath), ext);
  } else {
    try {
      let {
        resolved
      } = await options.packageManager.resolve(ext, configPath);
      return options.inputFS.realpath(resolved);
    } catch (err) {
      let parentContents = await options.inputFS.readFile(configPath, 'utf8');
      let alternatives = await (0, _utils().findAlternativeNodeModules)(options.inputFS, ext, _path().default.dirname(configPath));
      throw new (_diagnostic().default)({
        diagnostic: {
          message: `Cannot find extended parcel config`,
          origin: '@parcel/core',
          codeFrames: [{
            filePath: configPath,
            language: 'json5',
            code: parentContents,
            codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(parentContents, [{
              key: extendsKey,
              type: 'value',
              message: (0, _diagnostic().md)`Cannot find module "${ext}"${alternatives[0] ? `, did you mean "${alternatives[0]}"?` : ''}`
            }])
          }]
        }
      });
    }
  }
}

async function processExtendedConfig(configPath, extendsKey, extendsSpecifier, resolvedExtendedConfigPath, options) {
  let contents;

  try {
    contents = await options.inputFS.readFile(resolvedExtendedConfigPath, 'utf8');
  } catch (e) {
    let parentContents = await options.inputFS.readFile(configPath, 'utf8');
    let alternatives = await (0, _utils().findAlternativeFiles)(options.inputFS, extendsSpecifier, _path().default.dirname(resolvedExtendedConfigPath), options.projectRoot);
    throw new (_diagnostic().default)({
      diagnostic: {
        message: 'Cannot find extended parcel config',
        origin: '@parcel/core',
        codeFrames: [{
          filePath: configPath,
          language: 'json5',
          code: parentContents,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(parentContents, [{
            key: extendsKey,
            type: 'value',
            message: (0, _diagnostic().md)`"${extendsSpecifier}" does not exist${alternatives[0] ? `, did you mean "${alternatives[0]}"?` : ''}`
          }])
        }]
      }
    });
  }

  return parseAndProcessConfig(resolvedExtendedConfigPath, contents, options);
}

function validateConfigFile(config, relativePath) {
  validateNotEmpty(config, relativePath);

  _utils().validateSchema.diagnostic(_ParcelConfig.default, {
    data: config,
    filePath: relativePath
  }, '@parcel/core', 'Invalid Parcel Config');
}

function validateNotEmpty(config, relativePath) {
  _assert().default.notDeepStrictEqual(config, {}, `${relativePath} can't be empty`);
}

function mergeConfigs(base, ext) {
  return {
    filePath: ext.filePath,
    resolvers: assertPurePipeline(mergePipelines(base.resolvers, ext.resolvers)),
    transformers: mergeMaps(base.transformers, ext.transformers, mergePipelines),
    validators: mergeMaps(base.validators, ext.validators, mergePipelines),
    bundler: ext.bundler || base.bundler,
    namers: assertPurePipeline(mergePipelines(base.namers, ext.namers)),
    runtimes: assertPurePipeline(mergePipelines(base.runtimes, ext.runtimes)),
    packagers: mergeMaps(base.packagers, ext.packagers),
    optimizers: mergeMaps(base.optimizers, ext.optimizers, mergePipelines),
    compressors: mergeMaps(base.compressors, ext.compressors, mergePipelines),
    reporters: assertPurePipeline(mergePipelines(base.reporters, ext.reporters))
  };
}

function getResolveFrom(fs, projectRoot) {
  let cwd = fs.cwd();
  let dir = (0, _utils().isDirectoryInside)(cwd, projectRoot) ? cwd : projectRoot;
  return _path().default.join(dir, 'index');
}

function assertPurePipeline(pipeline) {
  return pipeline.map(s => {
    (0, _assert().default)(typeof s !== 'string');
    return s;
  });
}

function mergePipelines(base, ext) {
  if (ext == null) {
    return base !== null && base !== void 0 ? base : [];
  }

  if (ext.filter(v => v === '...').length > 1) {
    throw new Error('Only one spread element can be included in a config pipeline');
  } // Merge the base pipeline if a rest element is defined


  let spreadIndex = ext.indexOf('...');

  if (spreadIndex >= 0) {
    return [...ext.slice(0, spreadIndex), ...(base !== null && base !== void 0 ? base : []), ...ext.slice(spreadIndex + 1)];
  } else {
    return ext;
  }
}

function mergeMaps(base, ext, merger) {
  if (!ext || Object.keys(ext).length === 0) {
    return base || {};
  }

  if (!base) {
    return ext;
  }

  let res = {}; // Add the extension options first so they have higher precedence in the output glob map

  for (let k in ext) {
    //$FlowFixMe Flow doesn't correctly infer the type. See https://github.com/facebook/flow/issues/1736.
    let key = k;
    res[key] = merger && base[key] != null ? merger(base[key], ext[key]) : ext[key];
  } // Add base options that aren't defined in the extension


  for (let k in base) {
    // $FlowFixMe
    let key = k;

    if (res[key] == null) {
      res[key] = base[key];
    }
  }

  return res;
}