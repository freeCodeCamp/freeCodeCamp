/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import { Dialog } from '../api/Dialog.js';
/**
 * @internal
 */
export declare class CdpDialog extends Dialog {
    #private;
    constructor(client: CDPSession, type: Protocol.Page.DialogType, message: string, defaultValue?: string);
    handle(options: {
        accept: boolean;
        text?: string;
    }): Promise<void>;
}
//# sourceMappingURL=Dialog.d.ts.map