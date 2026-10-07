import '../colorPicker.css';
import { append, $ as $$1, addDisposableListener, EventType } from '../../../../../base/browser/dom.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { localize } from '../../../../../nls.js';
import { Emitter } from '../../../../../base/common/event.js';
import { registerIcon } from '../../../../../platform/theme/common/iconRegistry.js';
import { ThemeIcon } from '../../../../../base/common/themables.js';
import { Codicon } from '../../../../../base/common/codicons.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class CloseButton extends Disposable {
    constructor(container) {
        super();
        this._onClicked = this._register(new Emitter());
        this.onClicked = this._onClicked.event;
        this._button = document.createElement('div');
        this._button.classList.add('close-button');
        append(container, this._button);
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('close-button-inner-div');
        append(this._button, innerDiv);
        const closeButton = append(innerDiv, $('.button' + ThemeIcon.asCSSSelector(registerIcon('color-picker-close', Codicon.close, localize(885, 'Icon to close the color picker')))));
        closeButton.classList.add('close-icon');
        this._register(addDisposableListener(this._button, EventType.CLICK, () => {
            this._onClicked.fire();
        }));
    }
}

export { CloseButton };
