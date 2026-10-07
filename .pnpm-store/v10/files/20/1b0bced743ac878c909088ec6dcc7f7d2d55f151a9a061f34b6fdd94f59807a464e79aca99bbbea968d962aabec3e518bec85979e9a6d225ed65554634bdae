/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { WebWorker } from '../api/WebWorker.js';
import { UnsupportedOperation } from '../common/Errors.js';
import { BidiWorkerRealm } from './Realm.js';
/**
 * @internal
 */
export class BidiWebWorker extends WebWorker {
    static from(frame, realm) {
        const worker = new BidiWebWorker(frame, realm);
        return worker;
    }
    #frame;
    #realm;
    constructor(frame, realm) {
        super(realm.origin);
        this.#frame = frame;
        this.#realm = BidiWorkerRealm.from(realm, this);
    }
    get frame() {
        return this.#frame;
    }
    mainRealm() {
        return this.#realm;
    }
    get client() {
        throw new UnsupportedOperation();
    }
}
//# sourceMappingURL=WebWorker.js.map