/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @internal
 */
export function createIncrementalIdGenerator(): GetIdFn {
  let id = 0;
  return (): number => {
    if (id === Number.MAX_SAFE_INTEGER) {
      id = 0;
    }
    return ++id;
  };
}

/**
 * @internal
 */
export type GetIdFn = () => number;
