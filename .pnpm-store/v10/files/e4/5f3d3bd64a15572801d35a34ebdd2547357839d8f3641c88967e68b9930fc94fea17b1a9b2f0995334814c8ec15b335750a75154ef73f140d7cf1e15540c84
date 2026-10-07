/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ProtocolError} from '../common/Errors.js';

/**
 * @internal
 */
export interface ErrorLike extends Error {
  name: string;
  message: string;
}

/**
 * @internal
 */
export function isErrorLike(obj: unknown): obj is ErrorLike {
  return (
    typeof obj === 'object' && obj !== null && 'name' in obj && 'message' in obj
  );
}

/**
 * @internal
 */
export function isErrnoException(obj: unknown): obj is NodeJS.ErrnoException {
  return (
    isErrorLike(obj) &&
    ('errno' in obj || 'code' in obj || 'path' in obj || 'syscall' in obj)
  );
}

/**
 * @internal
 */
export function rewriteError(
  error: ProtocolError,
  message: string,
  originalMessage?: string,
): Error {
  error.message = message;
  error.originalMessage = originalMessage ?? error.originalMessage;
  return error;
}

/**
 * @internal
 */
export function createProtocolErrorMessage(object: {
  error: {message: string; data: any; code: number};
}): string {
  let message = object.error.message;
  // TODO: remove the type checks when we stop connecting to BiDi with a CDP
  // client.
  if (
    object.error &&
    typeof object.error === 'object' &&
    'data' in object.error
  ) {
    message += ` ${object.error.data}`;
  }
  return message;
}
