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

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * A general-purpose disposable class. It can normalize disposable-like values
 * (such as single functions or IDisposables), as well as hold multiple
 * disposable-like values to be disposed of at once.
 */
class Disposable {
  disposed = false;
  #disposables
  /*: ?Set<DisposableLike> */
  ;

  constructor(...disposables) {
    this.#disposables = new Set(disposables);
  }

  add(...disposables) {
    if (this.disposed) {
      throw new _errors.AlreadyDisposedError('Cannot add new disposables after disposable has been disposed');
    }

    (0, _assert().default)(this.#disposables != null);

    for (let disposable of disposables) {
      this.#disposables.add(disposable);
    }
  }

  async dispose() {
    if (this.disposed) {
      return;
    }

    this.disposed = true;
    (0, _assert().default)(this.#disposables != null);
    await Promise.all([...this.#disposables].map(disposable => typeof disposable === 'function' ? disposable() : disposable.dispose()));
    this.#disposables = null;
  }

}

exports.default = Disposable;