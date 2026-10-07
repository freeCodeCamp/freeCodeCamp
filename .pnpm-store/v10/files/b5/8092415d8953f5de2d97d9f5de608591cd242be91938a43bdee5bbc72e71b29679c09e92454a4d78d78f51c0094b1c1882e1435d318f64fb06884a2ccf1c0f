/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { Browser } from '../api/Browser.js';
import type { BrowserContext } from '../api/BrowserContext.js';
import { type Page } from '../api/Page.js';
import { Target, TargetType } from '../api/Target.js';
import type { Viewport } from '../common/Viewport.js';
import { Deferred } from '../util/Deferred.js';
import type { CdpCDPSession } from './CdpSession.js';
import type { TargetManager } from './TargetManager.js';
import { CdpWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export declare enum InitializationStatus {
    SUCCESS = "success",
    ABORTED = "aborted"
}
/**
 * @internal
 */
export declare class CdpTarget extends Target {
    #private;
    _initializedDeferred: Deferred<InitializationStatus, Error>;
    _isClosedDeferred: Deferred<void, Error>;
    _targetId: string;
    _asPagePromise?: Promise<Page>;
    /** @internal */
    pagePromise?: Promise<Page>;
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo: Protocol.Target.TargetInfo, session: CdpCDPSession | undefined, browserContext: BrowserContext | undefined, targetManager: TargetManager | undefined, sessionFactory: ((isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>) | undefined);
    asPage(): Promise<Page>;
    _subtype(): string | undefined;
    _session(): CdpCDPSession | undefined;
    _addChildTarget(target: CdpTarget): void;
    _removeChildTarget(target: CdpTarget): void;
    _childTargets(): ReadonlySet<CdpTarget>;
    protected _sessionFactory(): (isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>;
    createCDPSession(): Promise<CdpCDPSession>;
    url(): string;
    type(): TargetType;
    _targetManager(): TargetManager;
    _getTargetInfo(): Protocol.Target.TargetInfo;
    browser(): Browser;
    browserContext(): BrowserContext;
    opener(): Target | undefined;
    _targetInfoChanged(targetInfo: Protocol.Target.TargetInfo): void;
    _initialize(): void;
    _isTargetExposed(): boolean;
    protected _checkIfInitialized(): void;
}
/**
 * @internal
 */
export declare class PageTarget extends CdpTarget {
    #private;
    constructor(targetInfo: Protocol.Target.TargetInfo, session: CdpCDPSession | undefined, browserContext: BrowserContext, targetManager: TargetManager, sessionFactory: (isAutoAttachEmulated: boolean) => Promise<CdpCDPSession>, defaultViewport: Viewport | null);
    _initialize(): void;
    page(): Promise<Page | null>;
    _checkIfInitialized(): void;
}
/**
 * @internal
 */
export declare class DevToolsTarget extends PageTarget {
}
/**
 * @internal
 */
export declare class WorkerTarget extends CdpTarget {
    #private;
    worker(): Promise<CdpWebWorker | null>;
}
/**
 * @internal
 */
export declare class OtherTarget extends CdpTarget {
}
//# sourceMappingURL=Target.d.ts.map