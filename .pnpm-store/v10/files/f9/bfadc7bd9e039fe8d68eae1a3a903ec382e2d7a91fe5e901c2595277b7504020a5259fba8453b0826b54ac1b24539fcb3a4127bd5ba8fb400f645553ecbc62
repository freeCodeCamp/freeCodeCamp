/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import { ElementHandle, type AutofillData } from '../api/ElementHandle.js';
import type { AwaitableIterable } from '../common/types.js';
import type { BidiFrame } from './Frame.js';
import { BidiJSHandle } from './JSHandle.js';
import type { BidiFrameRealm } from './Realm.js';
/**
 * @internal
 */
export declare class BidiElementHandle<ElementType extends Node = Element> extends ElementHandle<ElementType> {
    #private;
    static from<ElementType extends Node = Element>(value: Bidi.Script.RemoteValue, realm: BidiFrameRealm): BidiElementHandle<ElementType>;
    handle: BidiJSHandle<ElementType>;
    constructor(value: Bidi.Script.RemoteValue, realm: BidiFrameRealm);
    get realm(): BidiFrameRealm;
    get frame(): BidiFrame;
    remoteValue(): Bidi.Script.RemoteValue;
    autofill(data: AutofillData): Promise<void>;
    contentFrame(this: BidiElementHandle<HTMLIFrameElement>): Promise<BidiFrame>;
    uploadFile(this: BidiElementHandle<HTMLInputElement>, ...files: string[]): Promise<void>;
    queryAXTree(this: BidiElementHandle<HTMLElement>, name?: string | undefined, role?: string | undefined): AwaitableIterable<ElementHandle<Node>>;
    backendNodeId(): Promise<number>;
}
//# sourceMappingURL=ElementHandle.d.ts.map