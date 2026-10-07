/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { HTTPResponse } from '../api/HTTPResponse.js';
import type { TimeoutError } from '../common/Errors.js';
import type { CdpFrame } from './Frame.js';
import type { NetworkManager } from './NetworkManager.js';
/**
 * @public
 */
export type PuppeteerLifeCycleEvent = 
/**
 * Waits for the 'load' event.
 */
'load'
/**
 * Waits for the 'DOMContentLoaded' event.
 */
 | 'domcontentloaded'
/**
 * Waits till there are no more than 0 network connections for at least `500`
 * ms.
 */
 | 'networkidle0'
/**
 * Waits till there are no more than 2 network connections for at least `500`
 * ms.
 */
 | 'networkidle2';
/**
 * @public
 */
export type ProtocolLifeCycleEvent = 'load' | 'DOMContentLoaded' | 'networkIdle' | 'networkAlmostIdle';
/**
 * @internal
 */
export declare class LifecycleWatcher {
    #private;
    constructor(networkManager: NetworkManager, frame: CdpFrame, waitUntil: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[], timeout: number, signal?: AbortSignal);
    navigationResponse(): Promise<HTTPResponse | null>;
    sameDocumentNavigationPromise(): Promise<Error | undefined>;
    newDocumentNavigationPromise(): Promise<Error | undefined>;
    lifecyclePromise(): Promise<void>;
    terminationPromise(): Promise<Error | TimeoutError | undefined>;
    dispose(): void;
}
//# sourceMappingURL=LifecycleWatcher.d.ts.map