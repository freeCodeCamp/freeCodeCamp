"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _json() {
  const data = _interopRequireDefault(require("json5"));

  _json = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = require("path");

  _path = function () {
    return data;
  };

  return data;
}

var _loadParcelPlugin = _interopRequireDefault(require("./loadParcelPlugin"));

var _projectPath = require("./projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ParcelConfig {
  constructor(config, options) {
    this.options = options;
    this.filePath = config.filePath;
    this.resolvers = config.resolvers || [];
    this.transformers = config.transformers || {};
    this.runtimes = config.runtimes || [];
    this.bundler = config.bundler;
    this.namers = config.namers || [];
    this.packagers = config.packagers || {};
    this.optimizers = config.optimizers || {};
    this.compressors = config.compressors || {};
    this.reporters = config.reporters || [];
    this.validators = config.validators || {};
    this.pluginCache = new Map();
    this.regexCache = new Map();
  }

  static deserialize(serialized) {
    return new ParcelConfig(serialized.config, serialized.options);
  }

  getConfig() {
    return {
      filePath: this.filePath,
      resolvers: this.resolvers,
      transformers: this.transformers,
      validators: this.validators,
      runtimes: this.runtimes,
      bundler: this.bundler,
      namers: this.namers,
      packagers: this.packagers,
      optimizers: this.optimizers,
      compressors: this.compressors,
      reporters: this.reporters
    };
  }

  serialize() {
    return {
      $$raw: false,
      config: this.getConfig(),
      options: this.options
    };
  }

  _loadPlugin(node) {
    let plugin = this.pluginCache.get(node.packageName);

    if (plugin) {
      return plugin;
    }

    plugin = (0, _loadParcelPlugin.default)(node.packageName, (0, _projectPath.fromProjectPath)(this.options.projectRoot, node.resolveFrom), node.keyPath, this.options);
    this.pluginCache.set(node.packageName, plugin);
    return plugin;
  }

  async loadPlugin(node) {
    let plugin = await this._loadPlugin(node);
    return { ...plugin,
      name: node.packageName,
      keyPath: node.keyPath
    };
  }

  invalidatePlugin(packageName) {
    this.pluginCache.delete(packageName);
  }

  loadPlugins(plugins) {
    return Promise.all(plugins.map(p => this.loadPlugin(p)));
  }

  async getResolvers() {
    if (this.resolvers.length === 0) {
      throw await this.missingPluginError(this.resolvers, 'No resolver plugins specified in .parcelrc config', '/resolvers');
    }

    return this.loadPlugins(this.resolvers);
  }

  _getValidatorNodes(filePath) {
    let validators = this.matchGlobMapPipelines(filePath, this.validators) || [];
    return validators;
  }

  getValidatorNames(filePath) {
    let validators = this._getValidatorNodes(filePath);

    return validators.map(v => v.packageName);
  }

  getValidators(filePath) {
    let validators = this._getValidatorNodes(filePath);

    return this.loadPlugins(validators);
  }

  getNamedPipelines() {
    return Object.keys(this.transformers).filter(glob => glob.includes(':')).map(glob => glob.split(':')[0]);
  }

  async getTransformers(filePath, pipeline, allowEmpty) {
    let transformers = this.matchGlobMapPipelines(filePath, this.transformers, pipeline);

    if (!transformers || transformers.length === 0) {
      if (allowEmpty) {
        return [];
      }

      throw await this.missingPluginError(this.transformers, (0, _diagnostic().md)`No transformers found for __${(0, _projectPath.fromProjectPathRelative)(filePath)}__` + (pipeline != null ? ` with pipeline: '${pipeline}'` : '') + '.', '/transformers');
    }

    return this.loadPlugins(transformers);
  }

  async getBundler() {
    if (!this.bundler) {
      throw await this.missingPluginError([], 'No bundler specified in .parcelrc config', '/bundler');
    }

    return this.loadPlugin(this.bundler);
  }

  async getNamers() {
    if (this.namers.length === 0) {
      throw await this.missingPluginError(this.namers, 'No namer plugins specified in .parcelrc config', '/namers');
    }

    return this.loadPlugins(this.namers);
  }

  getRuntimes() {
    if (!this.runtimes) {
      return Promise.resolve([]);
    }

    return this.loadPlugins(this.runtimes);
  }

  async getPackager(filePath) {
    let packager = this.matchGlobMap((0, _projectPath.toProjectPathUnsafe)(filePath), this.packagers);

    if (!packager) {
      throw await this.missingPluginError(this.packagers, (0, _diagnostic().md)`No packager found for __${filePath}__.`, '/packagers');
    }

    return this.loadPlugin(packager);
  }

  _getOptimizerNodes(filePath, pipeline) {
    var _this$matchGlobMapPip;

    // If a pipeline is specified, but it doesn't exist in the optimizers config, ignore it.
    // Pipelines for bundles come from their entry assets, so the pipeline likely exists in transformers.
    if (pipeline) {
      let prefix = pipeline + ':';

      if (!Object.keys(this.optimizers).some(glob => glob.startsWith(prefix))) {
        pipeline = null;
      }
    }

    return (_this$matchGlobMapPip = this.matchGlobMapPipelines((0, _projectPath.toProjectPathUnsafe)(filePath), this.optimizers, pipeline)) !== null && _this$matchGlobMapPip !== void 0 ? _this$matchGlobMapPip : [];
  }

  getOptimizerNames(filePath, pipeline) {
    let optimizers = this._getOptimizerNodes(filePath, pipeline);

    return optimizers.map(o => o.packageName);
  }

  getOptimizers(filePath, pipeline) {
    let optimizers = this._getOptimizerNodes(filePath, pipeline);

    if (optimizers.length === 0) {
      return Promise.resolve([]);
    }

    return this.loadPlugins(optimizers);
  }

  async getCompressors(filePath) {
    var _this$matchGlobMapPip2;

    let compressors = (_this$matchGlobMapPip2 = this.matchGlobMapPipelines((0, _projectPath.toProjectPathUnsafe)(filePath), this.compressors)) !== null && _this$matchGlobMapPip2 !== void 0 ? _this$matchGlobMapPip2 : [];

    if (compressors.length === 0) {
      throw await this.missingPluginError(this.compressors, (0, _diagnostic().md)`No compressors found for __${filePath}__.`, '/compressors');
    }

    return this.loadPlugins(compressors);
  }

  getReporters() {
    return this.loadPlugins(this.reporters);
  }

  isGlobMatch(projectPath, pattern, pipeline) {
    // glob's shouldn't be dependant on absolute paths anyway
    let filePath = (0, _projectPath.fromProjectPathRelative)(projectPath);
    let [patternPipeline, patternGlob] = pattern.split(':');

    if (!patternGlob) {
      patternGlob = patternPipeline;
      patternPipeline = null;
    }

    let re = this.regexCache.get(patternGlob);

    if (!re) {
      re = (0, _utils().globToRegex)(patternGlob, {
        dot: true,
        nocase: true
      });
      this.regexCache.set(patternGlob, re);
    }

    return (pipeline === patternPipeline || !pipeline && !patternPipeline) && (re.test(filePath) || re.test((0, _path().basename)(filePath)));
  }

  matchGlobMap(filePath, globMap) {
    for (let pattern in globMap) {
      if (this.isGlobMatch(filePath, pattern)) {
        return globMap[pattern];
      }
    }

    return null;
  }

  matchGlobMapPipelines(filePath, globMap, pipeline) {
    let matches = [];

    if (pipeline) {
      // If a pipeline is requested, a the glob needs to match exactly
      let exactMatch;

      for (let pattern in globMap) {
        if (this.isGlobMatch(filePath, pattern, pipeline)) {
          exactMatch = globMap[pattern];
          break;
        }
      }

      if (!exactMatch) {
        return [];
      } else {
        matches.push(exactMatch);
      }
    }

    for (let pattern in globMap) {
      if (this.isGlobMatch(filePath, pattern)) {
        matches.push(globMap[pattern]);
      }
    }

    let flatten = () => {
      let pipeline = matches.shift() || [];
      let spreadIndex = pipeline.indexOf('...');

      if (spreadIndex >= 0) {
        pipeline = [...pipeline.slice(0, spreadIndex), ...flatten(), ...pipeline.slice(spreadIndex + 1)];
      }

      if (pipeline.includes('...')) {
        throw new Error('Only one spread parameter can be included in a config pipeline');
      }

      return pipeline;
    };

    let res = flatten(); // $FlowFixMe afaik this should work

    return res;
  }

  async missingPluginError(plugins, message, key) {
    let configsWithPlugin;

    if (Array.isArray(plugins)) {
      configsWithPlugin = new Set(getConfigPaths(this.options, plugins));
    } else {
      configsWithPlugin = new Set(Object.keys(plugins).flatMap(k => Array.isArray(plugins[k]) ? getConfigPaths(this.options, plugins[k]) : [getConfigPath(this.options, plugins[k])]));
    }

    if (configsWithPlugin.size === 0) {
      configsWithPlugin.add((0, _projectPath.fromProjectPath)(this.options.projectRoot, this.filePath));
    }

    let seenKey = false;
    let codeFrames = await Promise.all([...configsWithPlugin].map(async filePath => {
      let configContents = await this.options.inputFS.readFile(filePath, 'utf8');

      if (!_json().default.parse(configContents)[key.slice(1)]) {
        key = '';
      } else {
        seenKey = true;
      }

      return {
        filePath,
        code: configContents,
        codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(configContents, [{
          key
        }])
      };
    }));
    return new (_diagnostic().default)({
      diagnostic: {
        message,
        origin: '@parcel/core',
        codeFrames,
        hints: !seenKey ? ['Try extending __@parcel/config-default__'] : []
      }
    });
  }

}

exports.default = ParcelConfig;

function getConfigPaths(options, nodes) {
  return nodes.map(node => node !== '...' ? getConfigPath(options, node) : null).filter(Boolean);
}

function getConfigPath(options, node) {
  return (0, _projectPath.fromProjectPath)(options.projectRoot, node.resolveFrom);
}