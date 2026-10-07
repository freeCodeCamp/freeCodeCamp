/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */
export const assert: (value: unknown, message?: string) => asserts value = (
  value,
  message,
) => {
  if (!value) {
    throw new Error(message);
  }
};
