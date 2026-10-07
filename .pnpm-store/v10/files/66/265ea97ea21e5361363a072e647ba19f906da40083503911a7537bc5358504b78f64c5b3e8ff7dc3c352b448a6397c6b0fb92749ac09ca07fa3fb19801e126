/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import { ElementHandle, type AutofillData } from '../api/ElementHandle.js';
import type { AwaitableIterable } from '../common/types.js';
import type { CdpFrame } from './Frame.js';
import type { IsolatedWorld } from './IsolatedWorld.js';
import { CdpJSHandle } from './JSHandle.js';
/**
 * The CdpElementHandle extends ElementHandle now to keep compatibility
 * with `instanceof` because of that we need to have methods for
 * CdpJSHandle to in this implementation as well.
 *
 * @internal
 */
export declare class CdpElementHandle<ElementType extends Node = Element> extends ElementHandle<ElementType> {
    #private;
    protected readonly handle: CdpJSHandle<ElementType>;
    constructor(world: IsolatedWorld, remoteObject: Protocol.Runtime.RemoteObject);
    get realm(): IsolatedWorld;
    get client(): CDPSession;
    remoteObject(): Protocol.Runtime.RemoteObject;
    get frame(): CdpFrame;
    contentFrame(this: ElementHandle<HTMLIFrameElement>): Promise<CdpFrame>;
    scrollIntoView(this: CdpElementHandle<Element>): Promise<void>;
    uploadFile(this: CdpElementHandle<HTMLInputElement>, ...files: string[]): Promise<void>;
    autofill(data: AutofillData): Promise<void>;
    queryAXTree(name?: string | undefined, role?: string | undefined): AwaitableIterable<ElementHandle<Node>>;
    backendNodeId(): Promise<number>;
}
//# sourceMappingURL=ElementHandle.d.ts.map