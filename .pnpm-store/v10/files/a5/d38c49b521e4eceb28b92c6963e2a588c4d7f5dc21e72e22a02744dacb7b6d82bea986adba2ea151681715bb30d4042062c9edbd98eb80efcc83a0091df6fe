interface Cache {
  _keys?: any[];
  _values?: any[];
  has: (value: any) => boolean;
  set: (key: any, value: any) => void;
  get: (key: any) => any;
}

export interface CreateCopierOptions {
  array?: InternalCopier<any[]>;
  arrayBuffer?: InternalCopier<ArrayBuffer>;
  blob?: InternalCopier<Blob>;
  dataView?: InternalCopier<DataView>;
  date?: InternalCopier<Date>;
  map?: InternalCopier<Map<any, any>>;
  object?: InternalCopier<Record<string, any>>;
  regExp?: InternalCopier<RegExp>;
  set?: InternalCopier<Set<any>>;
}

type InternalCopier<Value> = (value: Value, state: State) => Value;

export interface State {
  Constructor: any;
  cache: Cache;
  copier: InternalCopier<any>;
  prototype: any;
}

/**
 * Copy an value deeply as much as possible.
 */
export default function copy<Value>(value: Value): Value;

/**
 * Copy an value deeply as much as possible, where strict recreation of object properties
 * are maintained. All properties (including non-enumerable ones) are copied with their
 * original property descriptors on both objects and arrays.
 */
export function copyStrict<Value>(value: Value): Value;

/**
 * Create a custom copier based on the object-specific copy methods passed.
 */
export function createCopier(
  options: CreateCopierOptions
): <Value>(value: Value) => Value;

/**
 * Create a custom copier based on the object-specific copy methods passed, defaulting to the
 * same internals as `copyStrict`.
 */
export function createStrictCopier(
  options: CreateCopierOptions
): <Value>(value: Value) => Value;
