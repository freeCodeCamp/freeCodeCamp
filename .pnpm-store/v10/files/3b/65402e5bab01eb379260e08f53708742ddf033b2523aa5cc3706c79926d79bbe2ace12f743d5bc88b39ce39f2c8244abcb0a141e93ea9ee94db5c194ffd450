/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import type { ElementHandle } from '../api/ElementHandle.js';
import { JSHandle } from '../api/JSHandle.js';
import type { BidiRealm } from './Realm.js';
/**
 * @internal
 */
export declare class BidiJSHandle<T = unknown> extends JSHandle<T> {
    #private;
    static from<T>(value: Bidi.Script.RemoteValue, realm: BidiRealm): BidiJSHandle<T>;
    readonly realm: BidiRealm;
    constructor(value: Bidi.Script.RemoteValue, realm: BidiRealm);
    get disposed(): boolean;
    jsonValue(): Promise<T>;
    asElement(): ElementHandle<Node> | null;
    dispose(): Promise<void>;
    get isPrimitiveValue(): boolean;
    toString(): string;
    get id(): string | undefined;
    remoteValue(): Bidi.Script.RemoteValue;
    remoteObject(): never;
}
//# sourceMappingURL=JSHandle.d.ts.map