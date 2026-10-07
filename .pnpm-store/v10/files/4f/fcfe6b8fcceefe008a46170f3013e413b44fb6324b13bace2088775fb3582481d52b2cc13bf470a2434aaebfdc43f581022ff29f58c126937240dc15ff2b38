/**
 * Copyright (c) 2016 The xterm.js authors. All rights reserved.
 * @license MIT
 */

/*
 * A simple utility for cloning values
 */
export function clone<T>(val: T, depth: number = 5): T {
  if (typeof val !== 'object') {
    return val;
  }

  // If we're cloning an array, use an array as the base, otherwise use an object
  const clonedObject: any = Array.isArray(val) ? [] : {};

  for (const key in val) {
    // Recursively clone eack item unless we're at the maximum depth
    clonedObject[key] = depth <= 1 ? val[key] : (val[key] && clone(val[key], depth - 1));
  }

  return clonedObject as T;
}
