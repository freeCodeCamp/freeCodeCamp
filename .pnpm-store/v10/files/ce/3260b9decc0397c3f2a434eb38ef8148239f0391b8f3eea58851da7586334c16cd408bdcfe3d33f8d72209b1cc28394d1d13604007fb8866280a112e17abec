"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MutableDependencySymbols = exports.MutableAssetSymbols = exports.AssetSymbols = void 0;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EMPTY_ITERABLE = {
  [Symbol.iterator]() {
    return EMPTY_ITERATOR;
  }

};
const EMPTY_ITERATOR = {
  next() {
    return {
      done: true
    };
  }

};
const inspect = Symbol.for('nodejs.util.inspect.custom');
let valueToSymbols = new WeakMap();

class AssetSymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value;
  #options;

  constructor(options, asset) {
    let existing = valueToSymbols.get(asset);

    if (existing != null) {
      return existing;
    }

    this.#value = asset;
    this.#options = options;
    valueToSymbols.set(asset, this);
    return this;
  }

  hasExportSymbol(exportSymbol) {
    var _this$value$symbols;

    return Boolean((_this$value$symbols = this.#value.symbols) === null || _this$value$symbols === void 0 ? void 0 : _this$value$symbols.has(exportSymbol));
  }

  hasLocalSymbol(local) {
    if (this.#value.symbols == null) {
      return false;
    }

    for (let s of this.#value.symbols.values()) {
      if (local === s.local) return true;
    }

    return false;
  }

  get(exportSymbol) {
    var _this$value$symbols2;

    return fromInternalAssetSymbol(this.#options.projectRoot, (_this$value$symbols2 = this.#value.symbols) === null || _this$value$symbols2 === void 0 ? void 0 : _this$value$symbols2.get(exportSymbol));
  }

  get isCleared() {
    return this.#value.symbols == null;
  }

  exportSymbols() {
    var _this$value$symbols$k, _this$value$symbols3;

    return (_this$value$symbols$k = (_this$value$symbols3 = this.#value.symbols) === null || _this$value$symbols3 === void 0 ? void 0 : _this$value$symbols3.keys()) !== null && _this$value$symbols$k !== void 0 ? _this$value$symbols$k : [];
  } // $FlowFixMe


  [Symbol.iterator]() {
    return this.#value.symbols ? this.#value.symbols[Symbol.iterator]() : EMPTY_ITERATOR;
  } // $FlowFixMe


  [inspect]() {
    return `AssetSymbols(${this.#value.symbols ? [...this.#value.symbols].map(([s, {
      local
    }]) => `${s}:${local}`).join(', ') : null})`;
  }

}

exports.AssetSymbols = AssetSymbols;
let valueToMutableAssetSymbols = new WeakMap();

class MutableAssetSymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value;
  #options;

  constructor(options, asset) {
    let existing = valueToMutableAssetSymbols.get(asset);

    if (existing != null) {
      return existing;
    }

    this.#value = asset;
    this.#options = options;
    return this;
  } // immutable


  hasExportSymbol(exportSymbol) {
    var _this$value$symbols4;

    return Boolean((_this$value$symbols4 = this.#value.symbols) === null || _this$value$symbols4 === void 0 ? void 0 : _this$value$symbols4.has(exportSymbol));
  }

  hasLocalSymbol(local) {
    if (this.#value.symbols == null) {
      return false;
    }

    for (let s of this.#value.symbols.values()) {
      if (local === s.local) return true;
    }

    return false;
  }

  get(exportSymbol) {
    var _this$value$symbols5;

    return fromInternalAssetSymbol(this.#options.projectRoot, (_this$value$symbols5 = this.#value.symbols) === null || _this$value$symbols5 === void 0 ? void 0 : _this$value$symbols5.get(exportSymbol));
  }

  get isCleared() {
    return this.#value.symbols == null;
  }

  exportSymbols() {
    // $FlowFixMe
    return this.#value.symbols.keys();
  } // $FlowFixMe


  [Symbol.iterator]() {
    return this.#value.symbols ? this.#value.symbols[Symbol.iterator]() : EMPTY_ITERATOR;
  } // $FlowFixMe


  [inspect]() {
    return `MutableAssetSymbols(${this.#value.symbols ? [...this.#value.symbols].map(([s, {
      local
    }]) => `${s}:${local}`).join(', ') : null})`;
  } // mutating


  ensure() {
    if (this.#value.symbols == null) {
      this.#value.symbols = new Map();
    }
  }

  set(exportSymbol, local, loc, meta) {
    (0, _nullthrows().default)(this.#value.symbols).set(exportSymbol, {
      local,
      loc: (0, _utils.toInternalSourceLocation)(this.#options.projectRoot, loc),
      meta
    });
  }

  delete(exportSymbol) {
    (0, _nullthrows().default)(this.#value.symbols).delete(exportSymbol);
  }

}

exports.MutableAssetSymbols = MutableAssetSymbols;
let valueToMutableDependencySymbols = new WeakMap();

class MutableDependencySymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, isWeak: boolean, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value;
  #options;

  constructor(options, dep) {
    let existing = valueToMutableDependencySymbols.get(dep);

    if (existing != null) {
      return existing;
    }

    this.#value = dep;
    this.#options = options;
    return this;
  } // immutable:


  hasExportSymbol(exportSymbol) {
    var _this$value$symbols6;

    return Boolean((_this$value$symbols6 = this.#value.symbols) === null || _this$value$symbols6 === void 0 ? void 0 : _this$value$symbols6.has(exportSymbol));
  }

  hasLocalSymbol(local) {
    if (this.#value.symbols) {
      for (let s of this.#value.symbols.values()) {
        if (local === s.local) return true;
      }
    }

    return false;
  }

  get(exportSymbol) {
    return fromInternalDependencySymbol(this.#options.projectRoot, (0, _nullthrows().default)(this.#value.symbols).get(exportSymbol));
  }

  get isCleared() {
    return this.#value.symbols == null;
  }

  exportSymbols() {
    // $FlowFixMe
    return this.#value.symbols ? this.#value.symbols.keys() : EMPTY_ITERABLE;
  } // $FlowFixMe


  [Symbol.iterator]() {
    return this.#value.symbols ? this.#value.symbols[Symbol.iterator]() : EMPTY_ITERATOR;
  } // $FlowFixMe


  [inspect]() {
    return `MutableDependencySymbols(${this.#value.symbols ? [...this.#value.symbols].map(([s, {
      local,
      isWeak
    }]) => `${s}:${local}${isWeak ? '?' : ''}`).join(', ') : null})`;
  } // mutating:


  ensure() {
    if (this.#value.symbols == null) {
      this.#value.symbols = new Map();
    }
  }

  set(exportSymbol, local, loc, isWeak) {
    var _symbols$get$isWeak, _symbols$get;

    let symbols = (0, _nullthrows().default)(this.#value.symbols);
    symbols.set(exportSymbol, {
      local,
      loc: (0, _utils.toInternalSourceLocation)(this.#options.projectRoot, loc),
      isWeak: ((_symbols$get$isWeak = (_symbols$get = symbols.get(exportSymbol)) === null || _symbols$get === void 0 ? void 0 : _symbols$get.isWeak) !== null && _symbols$get$isWeak !== void 0 ? _symbols$get$isWeak : true) && (isWeak !== null && isWeak !== void 0 ? isWeak : false)
    });
  }

  delete(exportSymbol) {
    (0, _nullthrows().default)(this.#value.symbols).delete(exportSymbol);
  }

}

exports.MutableDependencySymbols = MutableDependencySymbols;

function fromInternalAssetSymbol(projectRoot, value) {
  return value && {
    local: value.local,
    meta: value.meta,
    loc: (0, _utils.fromInternalSourceLocation)(projectRoot, value.loc)
  };
}

function fromInternalDependencySymbol(projectRoot, value) {
  return value && {
    local: value.local,
    meta: value.meta,
    isWeak: value.isWeak,
    loc: (0, _utils.fromInternalSourceLocation)(projectRoot, value.loc)
  };
}