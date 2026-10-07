/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import { JSHandle } from '../api/JSHandle.js';
import type { CdpElementHandle } from './ElementHandle.js';
import type { IsolatedWorld } from './IsolatedWorld.js';
/**
 * @internal
 */
export declare class CdpJSHandle<T = unknown> extends JSHandle<T> {
    #private;
    constructor(world: IsolatedWorld, remoteObject: Protocol.Runtime.RemoteObject);
    get disposed(): boolean;
    get realm(): IsolatedWorld;
    get client(): CDPSession;
    jsonValue(): Promise<T>;
    /**
     * Either `null` or the handle itself if the handle is an
     * instance of {@link ElementHandle}.
     */
    asElement(): CdpElementHandle<Node> | null;
    dispose(): Promise<void>;
    toString(): string;
    get id(): string | undefined;
    remoteObject(): Protocol.Runtime.RemoteObject;
    getProperties(): Promise<Map<string, JSHandle<unknown>>>;
}
/**
 * @internal
 */
export declare function releaseObject(client: CDPSession, remoteObject: Protocol.Runtime.RemoteObject): Promise<void>;
//# sourceMappingURL=JSHandle.d.ts.map