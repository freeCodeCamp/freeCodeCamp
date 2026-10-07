"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutableAsset = exports.Asset = void 0;
exports.assetFromValue = assetFromValue;
exports.assetToAssetValue = assetToAssetValue;
exports.mutableAssetToUncommittedAsset = mutableAssetToUncommittedAsset;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _Environment = _interopRequireDefault(require("./Environment"));

var _Dependency = _interopRequireDefault(require("./Dependency"));

var _Symbols = require("./Symbols");

var _UncommittedAsset = _interopRequireDefault(require("../UncommittedAsset"));

var _CommittedAsset = _interopRequireDefault(require("../CommittedAsset"));

var _Environment2 = require("../Environment");

var _projectPath = require("../projectPath");

var _types = require("../types");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inspect = Symbol.for('nodejs.util.inspect.custom');
const uncommittedAssetValueToAsset = new WeakMap();
const committedAssetValueToAsset = new WeakMap();
const assetValueToMutableAsset = new WeakMap();

const _assetToAssetValue = new WeakMap();

const _mutableAssetToUncommittedAsset = new WeakMap();

function assetToAssetValue(asset) {
  return (0, _nullthrows().default)(_assetToAssetValue.get(asset));
}

function mutableAssetToUncommittedAsset(mutableAsset) {
  return (0, _nullthrows().default)(_mutableAssetToUncommittedAsset.get(mutableAsset));
}

function assetFromValue(value, options) {
  return new Asset(value.committed ? new _CommittedAsset.default(value, options) : new _UncommittedAsset.default({
    value,
    options
  }));
}

class BaseAsset {
  #asset;
  #query
  /*: ?URLSearchParams */
  ;

  constructor(asset) {
    this.#asset = asset;

    _assetToAssetValue.set(this, asset.value);
  } // $FlowFixMe[unsupported-syntax]


  [inspect]() {
    return `Asset(${this.filePath})`;
  }

  get id() {
    return this.#asset.value.id;
  }

  get type() {
    return this.#asset.value.type;
  }

  get env() {
    return new _Environment.default(this.#asset.value.env, this.#asset.options);
  }

  get fs() {
    return this.#asset.options.inputFS;
  }

  get filePath() {
    return (0, _projectPath.fromProjectPath)(this.#asset.options.projectRoot, this.#asset.value.filePath);
  }

  get query() {
    if (!this.#query) {
      var _this$asset$value$que;

      this.#query = new URLSearchParams((_this$asset$value$que = this.#asset.value.query) !== null && _this$asset$value$que !== void 0 ? _this$asset$value$que : '');
    }

    return this.#query;
  }

  get meta() {
    return this.#asset.value.meta;
  }

  get bundleBehavior() {
    let bundleBehavior = this.#asset.value.bundleBehavior;
    return bundleBehavior == null ? null : _types.BundleBehaviorNames[bundleBehavior];
  }

  get isBundleSplittable() {
    return this.#asset.value.isBundleSplittable;
  }

  get isSource() {
    return this.#asset.value.isSource;
  }

  get sideEffects() {
    return this.#asset.value.sideEffects;
  }

  get symbols() {
    return new _Symbols.AssetSymbols(this.#asset.options, this.#asset.value);
  }

  get uniqueKey() {
    return this.#asset.value.uniqueKey;
  }

  get astGenerator() {
    return this.#asset.value.astGenerator;
  }

  get pipeline() {
    return this.#asset.value.pipeline;
  }

  getDependencies() {
    return this.#asset.getDependencies().map(dep => new _Dependency.default(dep, this.#asset.options));
  }

  getCode() {
    return this.#asset.getCode();
  }

  getBuffer() {
    return this.#asset.getBuffer();
  }

  getStream() {
    return this.#asset.getStream();
  }

  getMap() {
    return this.#asset.getMap();
  }

  getAST() {
    return this.#asset.getAST();
  }

  getMapBuffer() {
    return this.#asset.getMapBuffer();
  }

}

class Asset extends BaseAsset {
  #asset
  /*: CommittedAsset | UncommittedAsset */
  ;

  constructor(asset) {
    let assetValueToAsset = asset.value.committed ? committedAssetValueToAsset : uncommittedAssetValueToAsset;
    let existing = assetValueToAsset.get(asset.value);

    if (existing != null) {
      return existing;
    }

    super(asset);
    this.#asset = asset;
    assetValueToAsset.set(asset.value, this);
    return this;
  }

  get stats() {
    return this.#asset.value.stats;
  }

}

exports.Asset = Asset;

class MutableAsset extends BaseAsset {
  #asset
  /*: UncommittedAsset */
  ;

  constructor(asset) {
    let existing = assetValueToMutableAsset.get(asset.value);

    if (existing != null) {
      return existing;
    }

    super(asset);
    this.#asset = asset;
    assetValueToMutableAsset.set(asset.value, this);

    _mutableAssetToUncommittedAsset.set(this, asset);

    return this;
  }

  setMap(map) {
    this.#asset.setMap(map);
  }

  get type() {
    return this.#asset.value.type;
  }

  set type(type) {
    if (type !== this.#asset.value.type) {
      this.#asset.value.type = type;
      this.#asset.updateId();
    }
  }

  get bundleBehavior() {
    let bundleBehavior = this.#asset.value.bundleBehavior;
    return bundleBehavior == null ? null : _types.BundleBehaviorNames[bundleBehavior];
  }

  set bundleBehavior(bundleBehavior) {
    this.#asset.value.bundleBehavior = bundleBehavior ? _types.BundleBehavior[bundleBehavior] : null;
  }

  get isBundleSplittable() {
    return this.#asset.value.isBundleSplittable;
  }

  set isBundleSplittable(isBundleSplittable) {
    this.#asset.value.isBundleSplittable = isBundleSplittable;
  }

  get sideEffects() {
    return this.#asset.value.sideEffects;
  }

  set sideEffects(sideEffects) {
    this.#asset.value.sideEffects = sideEffects;
  }

  get symbols() {
    return new _Symbols.MutableAssetSymbols(this.#asset.options, this.#asset.value);
  }

  addDependency(dep) {
    return this.#asset.addDependency(dep);
  }

  invalidateOnFileChange(filePath) {
    this.#asset.invalidateOnFileChange((0, _projectPath.toProjectPath)(this.#asset.options.projectRoot, filePath));
  }

  invalidateOnFileCreate(invalidation) {
    this.#asset.invalidateOnFileCreate(invalidation);
  }

  invalidateOnEnvChange(env) {
    this.#asset.invalidateOnEnvChange(env);
  }

  isASTDirty() {
    return this.#asset.isASTDirty;
  }

  setBuffer(buffer) {
    this.#asset.setBuffer(buffer);
  }

  setCode(code) {
    this.#asset.setCode(code);
  }

  setStream(stream) {
    this.#asset.setStream(stream);
  }

  setAST(ast) {
    return this.#asset.setAST(ast);
  }

  addURLDependency(url, opts) {
    return this.addDependency({
      specifier: url,
      specifierType: 'url',
      priority: 'lazy',
      ...opts
    });
  }

  setEnvironment(env) {
    this.#asset.value.env = (0, _Environment2.createEnvironment)({ ...env,
      loc: (0, _utils.toInternalSourceLocation)(this.#asset.options.projectRoot, env.loc)
    });
    this.#asset.updateId();
  }

}

exports.MutableAsset = MutableAsset;