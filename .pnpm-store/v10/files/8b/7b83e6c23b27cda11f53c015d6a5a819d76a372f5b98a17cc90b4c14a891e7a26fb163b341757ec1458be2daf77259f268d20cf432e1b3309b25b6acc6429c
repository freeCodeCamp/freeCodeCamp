import { Emitter } from '../../base/common/event.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InputModeImpl {
    constructor() {
        this._inputMode = 'insert';
        this._onDidChangeInputMode = new Emitter();
        this.onDidChangeInputMode = this._onDidChangeInputMode.event;
    }
    getInputMode() {
        return this._inputMode;
    }
}
/**
 * Controls the type mode, whether insert or overtype
 */
const InputMode = new InputModeImpl();

export { InputMode };
