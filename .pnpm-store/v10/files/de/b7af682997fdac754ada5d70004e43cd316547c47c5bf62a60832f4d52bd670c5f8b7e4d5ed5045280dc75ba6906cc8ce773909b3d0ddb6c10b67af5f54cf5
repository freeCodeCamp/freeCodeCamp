/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ConnectionTransport } from '../common/ConnectionTransport.js';
/**
 * @internal
 */
export declare class PipeTransport implements ConnectionTransport {
    #private;
    onclose?: () => void;
    onmessage?: (value: string) => void;
    constructor(pipeWrite: NodeJS.WritableStream, pipeRead: NodeJS.ReadableStream);
    send(message: string): void;
    close(): void;
}
//# sourceMappingURL=PipeTransport.d.ts.map