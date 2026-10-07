/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { ProtocolMapping } from 'devtools-protocol/types/protocol-mapping.js';
import type { CommandOptions } from '../api/CDPSession.js';
import { type CDPSession, type CDPSessionEvents } from '../api/CDPSession.js';
import { CallbackRegistry } from '../common/CallbackRegistry.js';
import type { ConnectionTransport } from '../common/ConnectionTransport.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { type GetIdFn } from '../util/incremental-id-generator.js';
import { CdpCDPSession } from './CdpSession.js';
/**
 * @public
 */
export declare class Connection extends EventEmitter<CDPSessionEvents> {
    #private;
    constructor(url: string, transport: ConnectionTransport, delay?: number, timeout?: number, rawErrors?: boolean, idGenerator?: () => number);
    static fromSession(session: CDPSession): Connection | undefined;
    /**
     * @internal
     */
    get delay(): number;
    get timeout(): number;
    /**
     * @internal
     */
    get rejectEmulateNetworkConditionsCalls(): boolean;
    set rejectEmulateNetworkConditionsCalls(value: boolean);
    /**
     * @internal
     */
    get _closed(): boolean;
    /**
     * @internal
     */
    get _idGenerator(): GetIdFn;
    /**
     * @internal
     */
    get _sessions(): Map<string, CdpCDPSession>;
    /**
     * @internal
     */
    _session(sessionId: string): CdpCDPSession | null;
    /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */
    session(sessionId: string): CDPSession | null;
    url(): string;
    send<T extends keyof ProtocolMapping.Commands>(method: T, params?: ProtocolMapping.Commands[T]['paramsType'][0], options?: CommandOptions): Promise<ProtocolMapping.Commands[T]['returnType']>;
    /**
     * @internal
     */
    _rawSend<T extends keyof ProtocolMapping.Commands>(callbacks: CallbackRegistry, method: T, params: ProtocolMapping.Commands[T]['paramsType'][0], sessionId?: string, options?: CommandOptions): Promise<ProtocolMapping.Commands[T]['returnType']>;
    /**
     * @internal
     */
    closeBrowser(): Promise<void>;
    /**
     * @internal
     */
    protected onMessage(message: string): Promise<void>;
    dispose(): void;
    /**
     * @internal
     */
    isAutoAttached(targetId: string): boolean;
    /**
     * @internal
     */
    _createSession(targetInfo: {
        targetId: string;
    }, isAutoAttachEmulated?: boolean): Promise<CdpCDPSession>;
    /**
     * @param targetInfo - The target info
     * @returns The CDP session that is created
     */
    createSession(targetInfo: Protocol.Target.TargetInfo): Promise<CDPSession>;
    /**
     * @internal
     */
    getPendingProtocolErrors(): Error[];
}
/**
 * @internal
 */
export declare function isTargetClosedError(error: Error): boolean;
//# sourceMappingURL=Connection.d.ts.map