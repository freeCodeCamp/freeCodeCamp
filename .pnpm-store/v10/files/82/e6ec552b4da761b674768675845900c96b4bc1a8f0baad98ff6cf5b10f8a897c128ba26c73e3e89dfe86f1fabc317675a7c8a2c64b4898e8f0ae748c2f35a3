/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { GetIdFn } from '../util/incremental-id-generator.js';
import { ProtocolError } from './Errors.js';
/**
 * Manages callbacks and their IDs for the protocol request/response communication.
 *
 * @internal
 */
export declare class CallbackRegistry {
    #private;
    constructor(idGenerator: GetIdFn);
    has(id: number): boolean;
    create(label: string, timeout: number | undefined, request: (id: number) => void): Promise<unknown>;
    reject(id: number, message: string, originalMessage?: string): void;
    rejectRaw(id: number, error: object): void;
    _reject(callback: Callback, errorMessage: string | ProtocolError, originalMessage?: string): void;
    resolve(id: number, value: unknown): void;
    clear(): void;
    /**
     * @internal
     */
    getPendingProtocolErrors(): Error[];
}
/**
 * @internal
 */
export declare class Callback {
    #private;
    constructor(id: number, label: string, timeout?: number);
    resolve(value: unknown): void;
    reject(error: Error): void;
    get id(): number;
    get promise(): Promise<unknown>;
    get error(): ProtocolError;
    get label(): string;
}
//# sourceMappingURL=CallbackRegistry.d.ts.map