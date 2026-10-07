"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.dependencyToInternalDependency = dependencyToInternalDependency;

var _types = require("../types");

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _Environment = _interopRequireDefault(require("./Environment"));

var _Target = _interopRequireDefault(require("./Target"));

var _Symbols = require("./Symbols");

var _projectPath = require("../projectPath");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SpecifierTypeNames = Object.keys(_types.SpecifierType);
const PriorityNames = Object.keys(_types.Priority);
const inspect = Symbol.for('nodejs.util.inspect.custom');
const internalDependencyToDependency = new WeakMap();

const _dependencyToInternalDependency = new WeakMap();

function dependencyToInternalDependency(dependency) {
  return (0, _nullthrows().default)(_dependencyToInternalDependency.get(dependency));
}

class Dependency {
  #dep
  /*: InternalDependency */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(dep, options) {
    let existing = internalDependencyToDependency.get(dep);

    if (existing != null) {
      return existing;
    }

    this.#dep = dep;
    this.#options = options;

    _dependencyToInternalDependency.set(this, dep);

    internalDependencyToDependency.set(dep, this);
    return this;
  } // $FlowFixMe


  [inspect]() {
    return `Dependency(${String(this.sourcePath)} -> ${this.specifier})`;
  }

  get id() {
    return this.#dep.id;
  }

  get specifier() {
    return this.#dep.specifier;
  }

  get specifierType() {
    return SpecifierTypeNames[this.#dep.specifierType];
  }

  get priority() {
    return PriorityNames[this.#dep.priority];
  }

  get needsStableName() {
    return this.#dep.needsStableName;
  }

  get bundleBehavior() {
    let bundleBehavior = this.#dep.bundleBehavior;
    return bundleBehavior == null ? null : _types.BundleBehaviorNames[bundleBehavior];
  }

  get isEntry() {
    return this.#dep.isEntry;
  }

  get isOptional() {
    return this.#dep.isOptional;
  }

  get loc() {
    return (0, _utils.fromInternalSourceLocation)(this.#options.projectRoot, this.#dep.loc);
  }

  get env() {
    return new _Environment.default(this.#dep.env, this.#options);
  }

  get meta() {
    return this.#dep.meta;
  }

  get symbols() {
    return new _Symbols.MutableDependencySymbols(this.#options, this.#dep);
  }

  get target() {
    let target = this.#dep.target;
    return target ? new _Target.default(target, this.#options) : null;
  }

  get sourceAssetId() {
    // TODO: does this need to be public?
    return this.#dep.sourceAssetId;
  }

  get sourcePath() {
    // TODO: does this need to be public?
    return (0, _projectPath.fromProjectPath)(this.#options.projectRoot, this.#dep.sourcePath);
  }

  get sourceAssetType() {
    return this.#dep.sourceAssetType;
  }

  get resolveFrom() {
    var _this$dep$resolveFrom;

    return (0, _projectPath.fromProjectPath)(this.#options.projectRoot, (_this$dep$resolveFrom = this.#dep.resolveFrom) !== null && _this$dep$resolveFrom !== void 0 ? _this$dep$resolveFrom : this.#dep.sourcePath);
  }

  get range() {
    return this.#dep.range;
  }

  get pipeline() {
    return this.#dep.pipeline;
  }

}

exports.default = Dependency;