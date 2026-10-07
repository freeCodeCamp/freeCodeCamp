/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ProtocolMapping } from 'devtools-protocol/types/protocol-mapping.js';
import { type CDPEvents, CDPSession, type CommandOptions } from '../api/CDPSession.js';
import type { Connection } from './Connection.js';
import type { CdpTarget } from './Target.js';
/**
 * @internal
 */
export declare class CdpCDPSession extends CDPSession {
    #private;
    /**
     * @internal
     */
    constructor(connection: Connection, targetType: string, sessionId: string, parentSessionId: string | undefined, rawErrors: boolean);
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    setTarget(target: CdpTarget): void;
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    target(): CdpTarget;
    connection(): Connection;
    get detached(): boolean;
    parentSession(): CDPSession | undefined;
    send<T extends keyof ProtocolMapping.Commands>(method: T, params?: ProtocolMapping.Commands[T]['paramsType'][0], options?: CommandOptions): Promise<ProtocolMapping.Commands[T]['returnType']>;
    /**
     * @internal
     */
    onMessage(object: {
        id?: number;
        method: keyof CDPEvents;
        params: CDPEvents[keyof CDPEvents];
        error: {
            message: string;
            data: any;
            code: number;
        };
        result?: any;
    }): void;
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    detach(): Promise<void>;
    /**
     * @internal
     */
    onClosed(): void;
    /**
     * Returns the session's id.
     */
    id(): string;
    /**
     * @internal
     */
    hasCallback(id: number): boolean;
    /**
     * @internal
     */
    getPendingProtocolErrors(): Error[];
}
//# sourceMappingURL=CdpSession.d.ts.map