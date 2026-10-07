/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { Browser } from './Browser.js';
import type { BrowsingContext } from './BrowsingContext.js';
import type { Session } from './Session.js';
/**
 * @internal
 */
export type CallFunctionOptions = Omit<Bidi.Script.CallFunctionParameters, 'functionDeclaration' | 'awaitPromise' | 'target'>;
/**
 * @internal
 */
export type EvaluateOptions = Omit<Bidi.Script.EvaluateParameters, 'expression' | 'awaitPromise' | 'target'>;
/**
 * @internal
 */
export declare abstract class Realm extends EventEmitter<{
    /** Emitted whenever the realm has updated. */
    updated: Realm;
    /** Emitted when the realm is destroyed. */
    destroyed: string;
    /** Emitted when a dedicated worker is created in the realm. */
    worker: DedicatedWorkerRealm;
    /** Emitted when a shared worker is created in the realm. */
    sharedworker: SharedWorkerRealm;
    /** Emitted whenever a log entry is added to the realm. */
    log: Bidi.Log.Entry;
}> {
    #private;
    protected readonly disposables: import("../../index-browser.js").DisposableStackPolyfill;
    readonly id: string;
    readonly origin: string;
    protected executionContextId?: number;
    protected constructor(id: string, origin: string);
    get disposed(): boolean;
    protected abstract get session(): Session;
    get target(): Bidi.Script.Target;
    protected dispose(reason?: string): void;
    disown(handles: string[]): Promise<void>;
    callFunction(functionDeclaration: string, awaitPromise: boolean, options?: CallFunctionOptions): Promise<Bidi.Script.EvaluateResult>;
    evaluate(expression: string, awaitPromise: boolean, options?: EvaluateOptions): Promise<Bidi.Script.EvaluateResult>;
    resolveExecutionContextId(): Promise<number>;
    [disposeSymbol](): void;
}
/**
 * @internal
 */
export declare class WindowRealm extends Realm {
    #private;
    static from(context: BrowsingContext, sandbox?: string): WindowRealm;
    readonly browsingContext: BrowsingContext;
    readonly sandbox?: string;
    private constructor();
    get session(): Session;
    get target(): Bidi.Script.Target;
}
/**
 * @internal
 */
export type DedicatedWorkerOwnerRealm = DedicatedWorkerRealm | SharedWorkerRealm | WindowRealm;
/**
 * @internal
 */
export declare class DedicatedWorkerRealm extends Realm {
    #private;
    static from(owner: DedicatedWorkerOwnerRealm, id: string, origin: string): DedicatedWorkerRealm;
    readonly owners: Set<DedicatedWorkerOwnerRealm>;
    private constructor();
    get session(): Session;
}
/**
 * @internal
 */
export declare class SharedWorkerRealm extends Realm {
    #private;
    static from(browser: Browser, id: string, origin: string): SharedWorkerRealm;
    readonly browser: Browser;
    private constructor();
    get session(): Session;
}
//# sourceMappingURL=Realm.d.ts.map