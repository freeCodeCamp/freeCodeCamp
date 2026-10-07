/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ProtocolError } from '../common/Errors.js';
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
export declare function isErrorLike(obj: unknown): obj is ErrorLike;
/**
 * @internal
 */
export declare function isErrnoException(obj: unknown): obj is NodeJS.ErrnoException;
/**
 * @internal
 */
export declare function rewriteError(error: ProtocolError, message: string, originalMessage?: string): Error;
/**
 * @internal
 */
export declare function createProtocolErrorMessage(object: {
    error: {
        message: string;
        data: any;
        code: number;
    };
}): string;
//# sourceMappingURL=ErrorLike.d.ts.map