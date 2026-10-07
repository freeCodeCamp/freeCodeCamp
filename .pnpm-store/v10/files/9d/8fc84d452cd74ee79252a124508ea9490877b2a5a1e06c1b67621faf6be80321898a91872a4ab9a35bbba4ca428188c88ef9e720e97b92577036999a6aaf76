import '../colorPicker.css';
import { append, addDisposableListener, EventType } from '../../../../../base/browser/dom.js';
import { Emitter } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InsertButton extends Disposable {
    constructor(container) {
        super();
        this._onClicked = this._register(new Emitter());
        this.onClicked = this._onClicked.event;
        this._button = append(container, document.createElement('button'));
        this._button.classList.add('insert-button');
        this._button.textContent = 'Insert';
        this._register(addDisposableListener(this._button, EventType.CLICK, () => {
            this._onClicked.fire();
        }));
    }
    get button() {
        return this._button;
    }
}

export { InsertButton };
