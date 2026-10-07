/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Dialog } from '../api/Dialog.js';
/**
 * @internal
 */
export class CdpDialog extends Dialog {
    #client;
    constructor(client, type, message, defaultValue = '') {
        super(type, message, defaultValue);
        this.#client = client;
    }
    async handle(options) {
        await this.#client.send('Page.handleJavaScriptDialog', {
            accept: options.accept,
            promptText: options.text,
        });
    }
}
//# sourceMappingURL=Dialog.js.map