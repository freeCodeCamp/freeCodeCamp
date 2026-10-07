/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Dialog } from '../api/Dialog.js';
export class BidiDialog extends Dialog {
    static from(prompt) {
        return new BidiDialog(prompt);
    }
    #prompt;
    constructor(prompt) {
        super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
        this.#prompt = prompt;
        this.handled = prompt.handled;
    }
    async handle(options) {
        await this.#prompt.handle({
            accept: options.accept,
            userText: options.text,
        });
    }
}
//# sourceMappingURL=Dialog.js.map