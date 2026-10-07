"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bundleGroupToInternalBundleGroup = bundleGroupToInternalBundleGroup;
exports.default = void 0;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _Target = _interopRequireDefault(require("./Target"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const internalBundleGroupToBundleGroup = new WeakMap();

const _bundleGroupToInternalBundleGroup = new WeakMap();

function bundleGroupToInternalBundleGroup(target) {
  return (0, _nullthrows().default)(_bundleGroupToInternalBundleGroup.get(target));
}

class BundleGroup {
  #bundleGroup
  /*: InternalBundleGroup */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(bundleGroup, options) {
    let existing = internalBundleGroupToBundleGroup.get(bundleGroup);

    if (existing != null) {
      return existing;
    }

    this.#bundleGroup = bundleGroup;
    this.#options = options;

    _bundleGroupToInternalBundleGroup.set(this, bundleGroup);

    internalBundleGroupToBundleGroup.set(bundleGroup, this);
    return this;
  }

  get target() {
    return new _Target.default(this.#bundleGroup.target, this.#options);
  }

  get entryAssetId() {
    return this.#bundleGroup.entryAssetId;
  }

}

exports.default = BundleGroup;