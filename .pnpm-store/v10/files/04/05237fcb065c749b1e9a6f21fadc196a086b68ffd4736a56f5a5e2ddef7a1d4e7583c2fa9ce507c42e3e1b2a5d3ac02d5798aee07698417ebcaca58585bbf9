/**
 * Copyright (c) 2018 The xterm.js authors. All rights reserved.
 * @license MIT
 */

export type TypedArray = Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array;

/**
 * Concat two typed arrays `a` and `b`.
 * Returns a new typed array.
 */
export function concat<T extends TypedArray>(a: T, b: T): T {
  const result = new (a.constructor as any)(a.length + b.length);
  result.set(a);
  result.set(b, a.length);
  return result;
}
