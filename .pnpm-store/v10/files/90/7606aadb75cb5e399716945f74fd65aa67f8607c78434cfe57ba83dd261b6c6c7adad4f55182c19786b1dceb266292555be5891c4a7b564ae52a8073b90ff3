"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = require("stream");

  _stream = function () {
    return data;
  };

  return data;
}

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
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

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _serializer = require("./serializer");

var _Dependency = require("./Dependency");

var _Environment = require("./Environment");

var _constants = require("./constants");

var _assetUtils = require("./assetUtils");

var _types = require("./types");

var _utils2 = require("./utils");

var _projectPath = require("./projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UncommittedAsset {
  constructor({
    value,
    options,
    content,
    mapBuffer,
    ast,
    isASTDirty,
    idBase,
    invalidations,
    fileCreateInvalidations
  }) {
    this.value = value;
    this.options = options;
    this.content = content;
    this.mapBuffer = mapBuffer;
    this.ast = ast;
    this.isASTDirty = isASTDirty || false;
    this.idBase = idBase;
    this.invalidations = invalidations || new Map();
    this.fileCreateInvalidations = fileCreateInvalidations || [];
  }
  /*
   * Prepares the asset for being serialized to the cache by committing its
   * content and map of the asset to the cache.
   */


  async commit(pipelineKey) {
    var _this$value$hash;

    // If there is a dirty AST, clear out any old content and map as these
    // must be regenerated later and shouldn't be committed.
    if (this.ast != null && this.isASTDirty) {
      this.content = null;
      this.mapBuffer = null;
    }

    let size = 0;
    let contentKey = this.content == null ? null : this.getCacheKey('content' + pipelineKey);
    let mapKey = this.mapBuffer == null ? null : this.getCacheKey('map' + pipelineKey);
    let astKey = this.ast == null ? null : this.getCacheKey('ast' + pipelineKey); // Since we can only read from the stream once, compute the content length
    // and hash while it's being written to the cache.

    await Promise.all([contentKey != null && this.commitContent(contentKey).then(s => size = s), this.mapBuffer != null && mapKey != null && this.options.cache.setBlob(mapKey, this.mapBuffer), astKey != null && this.options.cache.setBlob(astKey, (0, _serializer.serializeRaw)(this.ast))]);
    this.value.contentKey = contentKey;
    this.value.mapKey = mapKey;
    this.value.astKey = astKey;
    this.value.outputHash = (0, _hash().hashString)(((_this$value$hash = this.value.hash) !== null && _this$value$hash !== void 0 ? _this$value$hash : '') + pipelineKey + (await (0, _assetUtils.getInvalidationHash)(this.getInvalidations(), this.options)));

    if (this.content != null) {
      this.value.stats.size = size;
    }

    this.value.isLargeBlob = this.content instanceof _stream().Readable;
    this.value.committed = true;
  }

  async commitContent(contentKey) {
    let content = await this.content;

    if (content == null) {
      return 0;
    }

    let size = 0;

    if (content instanceof _stream().Readable) {
      await this.options.cache.setStream(contentKey, content.pipe(new (_utils().TapStream)(buf => {
        size += buf.length;
      })));
      return size;
    }

    if (typeof content === 'string') {
      size = Buffer.byteLength(content);
    } else {
      size = content.length;
    }

    await this.options.cache.setBlob(contentKey, content);
    return size;
  }

  async getCode() {
    if (this.ast != null && this.isASTDirty) {
      throw new Error('Cannot call getCode() on an asset with a dirty AST. For transformers, implement canReuseAST() and check asset.isASTDirty.');
    }

    let content = await this.content;

    if (typeof content === 'string' || content instanceof Buffer) {
      return content.toString();
    } else if (content != null) {
      this.content = (0, _utils().bufferStream)(content);
      return (await this.content).toString();
    }

    (0, _assert().default)(false, 'Internal error: missing content');
  }

  async getBuffer() {
    let content = await this.content;

    if (content == null) {
      return Buffer.alloc(0);
    } else if (content instanceof Buffer) {
      return content;
    } else if (typeof content === 'string') {
      return Buffer.from(content);
    }

    this.content = (0, _utils().bufferStream)(content);
    return this.content;
  }

  getStream() {
    var _this$content;

    if (this.content instanceof _stream().Readable) {
      // Remove content if it's a stream, as it should not be reused.
      let content = this.content;
      this.content = null;
      return content;
    }

    if (this.content instanceof Promise) {
      return (0, _utils().streamFromPromise)(this.content);
    }

    return (0, _utils().blobToStream)((_this$content = this.content) !== null && _this$content !== void 0 ? _this$content : Buffer.alloc(0));
  }

  setCode(code) {
    this.content = code;
    this.clearAST();
  }

  setBuffer(buffer) {
    this.content = buffer;
    this.clearAST();
  }

  setStream(stream) {
    this.content = stream;
    this.clearAST();
  }

  async loadExistingSourcemap() {
    if (this.map) {
      return this.map;
    }

    let code = await this.getCode();
    let map = await (0, _utils().loadSourceMap)((0, _projectPath.fromProjectPath)(this.options.projectRoot, this.value.filePath), code, {
      fs: this.options.inputFS,
      projectRoot: this.options.projectRoot
    });

    if (map) {
      this.map = map;
      this.mapBuffer = map.toBuffer();
      this.setCode(code.replace(_utils().SOURCEMAP_RE, ''));
    }

    return this.map;
  }

  getMapBuffer() {
    return Promise.resolve(this.mapBuffer);
  }

  async getMap() {
    if (this.map == null) {
      var _this$mapBuffer;

      let mapBuffer = (_this$mapBuffer = this.mapBuffer) !== null && _this$mapBuffer !== void 0 ? _this$mapBuffer : await this.getMapBuffer();

      if (mapBuffer) {
        // Get sourcemap from flatbuffer
        this.map = new (_sourceMap().default)(this.options.projectRoot, mapBuffer);
      }
    }

    return this.map;
  }

  setMap(map) {
    var _this$map;

    // If we have sourceContent available, it means this asset is source code without
    // a previous source map. Ensure that the map set by the transformer has the original
    // source content available.
    if (map != null && this.sourceContent != null) {
      map.setSourceContent((0, _projectPath.fromProjectPath)(this.options.projectRoot, this.value.filePath), // $FlowFixMe
      this.sourceContent);
      this.sourceContent = null;
    }

    this.map = map;
    this.mapBuffer = (_this$map = this.map) === null || _this$map === void 0 ? void 0 : _this$map.toBuffer();
  }

  getAST() {
    return Promise.resolve(this.ast);
  }

  setAST(ast) {
    this.ast = ast;
    this.isASTDirty = true;
    this.value.astGenerator = {
      type: ast.type,
      version: ast.version
    };
  }

  clearAST() {
    this.ast = null;
    this.isASTDirty = false;
    this.value.astGenerator = null;
  }

  getCacheKey(key) {
    return (0, _hash().hashString)(_constants.PARCEL_VERSION + key + this.value.id + (this.value.hash || ''));
  }

  addDependency(opts) {
    // eslint-disable-next-line no-unused-vars
    let {
      env,
      symbols,
      ...rest
    } = opts;
    let dep = (0, _Dependency.createDependency)(this.options.projectRoot, { ...rest,
      // $FlowFixMe "convert" the $ReadOnlyMaps to the interal mutable one
      symbols,
      env: (0, _Environment.mergeEnvironments)(this.options.projectRoot, this.value.env, env),
      sourceAssetId: this.value.id,
      sourcePath: (0, _projectPath.fromProjectPath)(this.options.projectRoot, this.value.filePath)
    });
    let existing = this.value.dependencies.get(dep.id);

    if (existing) {
      (0, _Dependency.mergeDependencies)(existing, dep);
    } else {
      this.value.dependencies.set(dep.id, dep);
    }

    return dep.id;
  }

  invalidateOnFileChange(filePath) {
    let invalidation = {
      type: 'file',
      filePath
    };
    this.invalidations.set((0, _assetUtils.getInvalidationId)(invalidation), invalidation);
  }

  invalidateOnFileCreate(invalidation) {
    this.fileCreateInvalidations.push((0, _utils2.invalidateOnFileCreateToInternal)(this.options.projectRoot, invalidation));
  }

  invalidateOnEnvChange(key) {
    let invalidation = {
      type: 'env',
      key
    };
    this.invalidations.set((0, _assetUtils.getInvalidationId)(invalidation), invalidation);
  }

  getInvalidations() {
    return [...this.invalidations.values()];
  }

  getDependencies() {
    return Array.from(this.value.dependencies.values());
  }

  createChildAsset(result, plugin, configPath, configKeyPath) {
    var _result$content, _result$bundleBehavio, _result$isBundleSplit, _result$pipeline, _result$sideEffects;

    let content = (_result$content = result.content) !== null && _result$content !== void 0 ? _result$content : null;
    let asset = new UncommittedAsset({
      value: (0, _assetUtils.createAsset)(this.options.projectRoot, {
        idBase: this.idBase,
        hash: this.value.hash,
        filePath: this.value.filePath,
        type: result.type,
        bundleBehavior: (_result$bundleBehavio = result.bundleBehavior) !== null && _result$bundleBehavio !== void 0 ? _result$bundleBehavio : this.value.bundleBehavior == null ? null : _types.BundleBehaviorNames[this.value.bundleBehavior],
        isBundleSplittable: (_result$isBundleSplit = result.isBundleSplittable) !== null && _result$isBundleSplit !== void 0 ? _result$isBundleSplit : this.value.isBundleSplittable,
        isSource: this.value.isSource,
        env: (0, _Environment.mergeEnvironments)(this.options.projectRoot, this.value.env, result.env),
        dependencies: this.value.type === result.type ? new Map(this.value.dependencies) : new Map(),
        meta: { ...this.value.meta,
          ...result.meta
        },
        pipeline: (_result$pipeline = result.pipeline) !== null && _result$pipeline !== void 0 ? _result$pipeline : this.value.type === result.type ? this.value.pipeline : null,
        stats: {
          time: 0,
          size: this.value.stats.size
        },
        // $FlowFixMe
        symbols: result.symbols,
        sideEffects: (_result$sideEffects = result.sideEffects) !== null && _result$sideEffects !== void 0 ? _result$sideEffects : this.value.sideEffects,
        uniqueKey: result.uniqueKey,
        astGenerator: result.ast ? {
          type: result.ast.type,
          version: result.ast.version
        } : null,
        plugin,
        configPath,
        configKeyPath
      }),
      options: this.options,
      content,
      ast: result.ast,
      isASTDirty: result.ast === this.ast ? this.isASTDirty : true,
      mapBuffer: result.map ? result.map.toBuffer() : null,
      idBase: this.idBase,
      invalidations: this.invalidations,
      fileCreateInvalidations: this.fileCreateInvalidations
    });
    let dependencies = result.dependencies;

    if (dependencies) {
      for (let dep of dependencies) {
        asset.addDependency(dep);
      }
    }

    return asset;
  }

  updateId() {
    // $FlowFixMe - this is fine
    this.value.id = (0, _assetUtils.createAssetIdFromOptions)(this.value);
  }

}

exports.default = UncommittedAsset;