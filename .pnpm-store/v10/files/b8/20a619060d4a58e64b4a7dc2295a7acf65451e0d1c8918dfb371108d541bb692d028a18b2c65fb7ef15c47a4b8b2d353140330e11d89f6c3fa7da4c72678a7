// @flow
import type {
  Symbol as ISymbol,
  MutableAssetSymbols as IMutableAssetSymbols,
  AssetSymbols as IAssetSymbols,
  MutableDependencySymbols as IMutableDependencySymbols,
  SourceLocation,
  Meta,
} from '@parcel/types';
import type {Asset, Dependency, ParcelOptions} from '../types';

import nullthrows from 'nullthrows';
import {fromInternalSourceLocation, toInternalSourceLocation} from '../utils';

const EMPTY_ITERABLE = {
  [Symbol.iterator]() {
    return EMPTY_ITERATOR;
  },
};

const EMPTY_ITERATOR = {
  next() {
    return {done: true};
  },
};

const inspect = Symbol.for('nodejs.util.inspect.custom');

let valueToSymbols: WeakMap<Asset, AssetSymbols> = new WeakMap();
export class AssetSymbols implements IAssetSymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value: Asset;
  #options: ParcelOptions;

  constructor(options: ParcelOptions, asset: Asset): AssetSymbols {
    let existing = valueToSymbols.get(asset);
    if (existing != null) {
      return existing;
    }

    this.#value = asset;
    this.#options = options;
    valueToSymbols.set(asset, this);
    return this;
  }

  hasExportSymbol(exportSymbol: ISymbol): boolean {
    return Boolean(this.#value.symbols?.has(exportSymbol));
  }

  hasLocalSymbol(local: ISymbol): boolean {
    if (this.#value.symbols == null) {
      return false;
    }
    for (let s of this.#value.symbols.values()) {
      if (local === s.local) return true;
    }
    return false;
  }

  get(
    exportSymbol: ISymbol,
  ): ?{|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|} {
    return fromInternalAssetSymbol(
      this.#options.projectRoot,
      this.#value.symbols?.get(exportSymbol),
    );
  }

  get isCleared(): boolean {
    return this.#value.symbols == null;
  }

  exportSymbols(): Iterable<ISymbol> {
    return this.#value.symbols?.keys() ?? [];
  }
  // $FlowFixMe
  [Symbol.iterator]() {
    return this.#value.symbols
      ? this.#value.symbols[Symbol.iterator]()
      : EMPTY_ITERATOR;
  }

  // $FlowFixMe
  [inspect]() {
    return `AssetSymbols(${
      this.#value.symbols
        ? [...this.#value.symbols]
            .map(([s, {local}]) => `${s}:${local}`)
            .join(', ')
        : null
    })`;
  }
}

let valueToMutableAssetSymbols: WeakMap<Asset, MutableAssetSymbols> =
  new WeakMap();
export class MutableAssetSymbols implements IMutableAssetSymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value: Asset;
  #options: ParcelOptions;

  constructor(options: ParcelOptions, asset: Asset): MutableAssetSymbols {
    let existing = valueToMutableAssetSymbols.get(asset);
    if (existing != null) {
      return existing;
    }
    this.#value = asset;
    this.#options = options;
    return this;
  }

  // immutable

  hasExportSymbol(exportSymbol: ISymbol): boolean {
    return Boolean(this.#value.symbols?.has(exportSymbol));
  }

  hasLocalSymbol(local: ISymbol): boolean {
    if (this.#value.symbols == null) {
      return false;
    }
    for (let s of this.#value.symbols.values()) {
      if (local === s.local) return true;
    }
    return false;
  }

  get(
    exportSymbol: ISymbol,
  ): ?{|local: ISymbol, loc: ?SourceLocation, meta?: ?Meta|} {
    return fromInternalAssetSymbol(
      this.#options.projectRoot,
      this.#value.symbols?.get(exportSymbol),
    );
  }

  get isCleared(): boolean {
    return this.#value.symbols == null;
  }

  exportSymbols(): Iterable<ISymbol> {
    // $FlowFixMe
    return this.#value.symbols.keys();
  }
  // $FlowFixMe
  [Symbol.iterator]() {
    return this.#value.symbols
      ? this.#value.symbols[Symbol.iterator]()
      : EMPTY_ITERATOR;
  }

  // $FlowFixMe
  [inspect]() {
    return `MutableAssetSymbols(${
      this.#value.symbols
        ? [...this.#value.symbols]
            .map(([s, {local}]) => `${s}:${local}`)
            .join(', ')
        : null
    })`;
  }

  // mutating

  ensure(): void {
    if (this.#value.symbols == null) {
      this.#value.symbols = new Map();
    }
  }

  set(
    exportSymbol: ISymbol,
    local: ISymbol,
    loc: ?SourceLocation,
    meta: ?Meta,
  ) {
    nullthrows(this.#value.symbols).set(exportSymbol, {
      local,
      loc: toInternalSourceLocation(this.#options.projectRoot, loc),
      meta,
    });
  }

  delete(exportSymbol: ISymbol) {
    nullthrows(this.#value.symbols).delete(exportSymbol);
  }
}

let valueToMutableDependencySymbols: WeakMap<
  Dependency,
  MutableDependencySymbols,
> = new WeakMap();
export class MutableDependencySymbols implements IMutableDependencySymbols {
  /*::
  @@iterator(): Iterator<[ISymbol, {|local: ISymbol, loc: ?SourceLocation, isWeak: boolean, meta?: ?Meta|}]> { return ({}: any); }
  */
  #value: Dependency;
  #options: ParcelOptions;

  constructor(
    options: ParcelOptions,
    dep: Dependency,
  ): MutableDependencySymbols {
    let existing = valueToMutableDependencySymbols.get(dep);
    if (existing != null) {
      return existing;
    }
    this.#value = dep;
    this.#options = options;
    return this;
  }

  // immutable:

  hasExportSymbol(exportSymbol: ISymbol): boolean {
    return Boolean(this.#value.symbols?.has(exportSymbol));
  }

  hasLocalSymbol(local: ISymbol): boolean {
    if (this.#value.symbols) {
      for (let s of this.#value.symbols.values()) {
        if (local === s.local) return true;
      }
    }
    return false;
  }

  get(
    exportSymbol: ISymbol,
  ): ?{|local: ISymbol, loc: ?SourceLocation, isWeak: boolean, meta?: ?Meta|} {
    return fromInternalDependencySymbol(
      this.#options.projectRoot,
      nullthrows(this.#value.symbols).get(exportSymbol),
    );
  }

  get isCleared(): boolean {
    return this.#value.symbols == null;
  }

  exportSymbols(): Iterable<ISymbol> {
    // $FlowFixMe
    return this.#value.symbols ? this.#value.symbols.keys() : EMPTY_ITERABLE;
  }

  // $FlowFixMe
  [Symbol.iterator]() {
    return this.#value.symbols
      ? this.#value.symbols[Symbol.iterator]()
      : EMPTY_ITERATOR;
  }

  // $FlowFixMe
  [inspect]() {
    return `MutableDependencySymbols(${
      this.#value.symbols
        ? [...this.#value.symbols]
            .map(([s, {local, isWeak}]) => `${s}:${local}${isWeak ? '?' : ''}`)
            .join(', ')
        : null
    })`;
  }

  // mutating:

  ensure(): void {
    if (this.#value.symbols == null) {
      this.#value.symbols = new Map();
    }
  }

  set(
    exportSymbol: ISymbol,
    local: ISymbol,
    loc: ?SourceLocation,
    isWeak: ?boolean,
  ) {
    let symbols = nullthrows(this.#value.symbols);
    symbols.set(exportSymbol, {
      local,
      loc: toInternalSourceLocation(this.#options.projectRoot, loc),
      isWeak: (symbols.get(exportSymbol)?.isWeak ?? true) && (isWeak ?? false),
    });
  }

  delete(exportSymbol: ISymbol) {
    nullthrows(this.#value.symbols).delete(exportSymbol);
  }
}

function fromInternalAssetSymbol(projectRoot: string, value) {
  return (
    value && {
      local: value.local,
      meta: value.meta,
      loc: fromInternalSourceLocation(projectRoot, value.loc),
    }
  );
}

function fromInternalDependencySymbol(projectRoot: string, value) {
  return (
    value && {
      local: value.local,
      meta: value.meta,
      isWeak: value.isWeak,
      loc: fromInternalSourceLocation(projectRoot, value.loc),
    }
  );
}
