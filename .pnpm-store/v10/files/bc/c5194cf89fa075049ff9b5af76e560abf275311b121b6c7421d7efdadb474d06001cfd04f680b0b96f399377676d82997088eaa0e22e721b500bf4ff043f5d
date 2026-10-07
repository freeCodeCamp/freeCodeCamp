"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.targetToInternalTarget = targetToInternalTarget;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _Environment = _interopRequireDefault(require("./Environment"));

var _projectPath = require("../projectPath");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inspect = Symbol.for('nodejs.util.inspect.custom');
const internalTargetToTarget = new WeakMap();

const _targetToInternalTarget = new WeakMap();

function targetToInternalTarget(target) {
  return (0, _nullthrows().default)(_targetToInternalTarget.get(target));
}

class Target {
  #target
  /*: TargetValue */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(target, options) {
    let existing = internalTargetToTarget.get(target);

    if (existing != null) {
      return existing;
    }

    this.#target = target;
    this.#options = options;

    _targetToInternalTarget.set(this, target);

    internalTargetToTarget.set(target, this);
    return this;
  }

  get distEntry() {
    return this.#target.distEntry;
  }

  get distDir() {
    return (0, _projectPath.fromProjectPath)(this.#options.projectRoot, this.#target.distDir);
  }

  get env() {
    return new _Environment.default(this.#target.env, this.#options);
  }

  get name() {
    return this.#target.name;
  }

  get publicUrl() {
    return this.#target.publicUrl;
  }

  get loc() {
    return (0, _utils.fromInternalSourceLocation)(this.#options.projectRoot, this.#target.loc);
  } // $FlowFixMe[unsupported-syntax]


  [inspect]() {
    return `Target(${this.name} - ${this.env[inspect]()})`;
  }

}

exports.default = Target;