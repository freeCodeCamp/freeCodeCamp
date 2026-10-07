/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { WebWorker } from '../api/WebWorker.js';
import type { CDPSession } from '../puppeteer-core.js';
import type { DedicatedWorkerRealm, SharedWorkerRealm } from './core/Realm.js';
import type { BidiFrame } from './Frame.js';
import { BidiWorkerRealm } from './Realm.js';
/**
 * @internal
 */
export declare class BidiWebWorker extends WebWorker {
    #private;
    static from(frame: BidiFrame, realm: DedicatedWorkerRealm | SharedWorkerRealm): BidiWebWorker;
    private constructor();
    get frame(): BidiFrame;
    mainRealm(): BidiWorkerRealm;
    get client(): CDPSession;
}
//# sourceMappingURL=WebWorker.d.ts.map