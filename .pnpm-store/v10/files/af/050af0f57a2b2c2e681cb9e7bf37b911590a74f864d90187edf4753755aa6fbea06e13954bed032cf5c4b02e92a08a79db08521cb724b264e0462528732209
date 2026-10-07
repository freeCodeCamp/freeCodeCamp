/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from 'webdriver-bidi-protocol';
import type { Extension } from '../api/Extension.js';
import type { JSHandle } from '../api/JSHandle.js';
import { Realm } from '../api/Realm.js';
import type { TimeoutSettings } from '../common/TimeoutSettings.js';
import type { EvaluateFunc, HandleFor } from '../common/types.js';
import type { PuppeteerInjectedUtil } from '../injected/injected.js';
import type { Realm as BidiRealmCore, DedicatedWorkerRealm, SharedWorkerRealm } from './core/Realm.js';
import type { WindowRealm } from './core/Realm.js';
import { BidiElementHandle } from './ElementHandle.js';
import type { BidiFrame } from './Frame.js';
import { BidiJSHandle } from './JSHandle.js';
import type { BidiWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export declare abstract class BidiRealm extends Realm {
    #private;
    readonly realm: BidiRealmCore;
    constructor(realm: BidiRealmCore, timeoutSettings: TimeoutSettings);
    protected initialize(): void;
    protected internalPuppeteerUtil?: Promise<BidiJSHandle<PuppeteerInjectedUtil>>;
    get puppeteerUtil(): Promise<BidiJSHandle<PuppeteerInjectedUtil>>;
    evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
    evaluate<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<Awaited<ReturnType<Func>>>;
    createHandle(result: Bidi.Script.RemoteValue): BidiJSHandle<unknown> | BidiElementHandle<Node>;
    serializeAsync(arg: unknown): Promise<Bidi.Script.LocalValue>;
    serialize(arg: unknown): Bidi.Script.LocalValue;
    destroyHandles(handles: Array<BidiJSHandle<unknown>>): Promise<void>;
    adoptHandle<T extends JSHandle<Node>>(handle: T): Promise<T>;
    transferHandle<T extends JSHandle<Node>>(handle: T): Promise<T>;
    extension(): Promise<Extension | null>;
    get origin(): string;
}
/**
 * @internal
 */
export declare class BidiFrameRealm extends BidiRealm {
    #private;
    static from(realm: WindowRealm, frame: BidiFrame): BidiFrameRealm;
    readonly realm: WindowRealm;
    private constructor();
    get puppeteerUtil(): Promise<BidiJSHandle<PuppeteerInjectedUtil>>;
    get sandbox(): string | undefined;
    get environment(): BidiFrame;
    adoptBackendNode(backendNodeId?: number | undefined): Promise<JSHandle<Node>>;
}
/**
 * @internal
 */
export declare class BidiWorkerRealm extends BidiRealm {
    #private;
    static from(realm: DedicatedWorkerRealm | SharedWorkerRealm, worker: BidiWebWorker): BidiWorkerRealm;
    readonly realm: DedicatedWorkerRealm | SharedWorkerRealm;
    private constructor();
    initialize(): void;
    get environment(): BidiWebWorker;
    adoptBackendNode(): Promise<JSHandle<Node>>;
}
//# sourceMappingURL=Realm.d.ts.map