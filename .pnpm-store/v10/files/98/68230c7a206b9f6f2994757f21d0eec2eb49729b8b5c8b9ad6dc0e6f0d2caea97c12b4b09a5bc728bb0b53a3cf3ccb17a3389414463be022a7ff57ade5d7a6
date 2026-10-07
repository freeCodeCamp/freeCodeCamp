import { append, $ as $$1 } from '../../../base/browser/dom.js';
import { FindInput } from '../../../base/browser/ui/findinput/findInput.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import Severity from '../../../base/common/severity.js';
import './media/quickInput.css';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const $ = $$1;
class QuickInputBox extends Disposable {
    constructor(parent, inputBoxStyles, toggleStyles) {
        super();
        this.parent = parent;
        this.onDidChange = (handler) => {
            return this.findInput.onDidChange(handler);
        };
        this.container = append(this.parent, $('.quick-input-box'));
        this.findInput = this._register(new FindInput(this.container, undefined, { label: '', inputBoxStyles, toggleStyles }));
        const input = this.findInput.inputBox.inputElement;
        input.role = 'textbox';
        input.ariaHasPopup = 'menu';
        input.ariaAutoComplete = 'list';
    }
    get onKeyDown() {
        return this.findInput.onKeyDown;
    }
    get value() {
        return this.findInput.getValue();
    }
    set value(value) {
        this.findInput.setValue(value);
    }
    select(range = null) {
        this.findInput.inputBox.select(range);
    }
    getSelection() {
        return this.findInput.inputBox.getSelection();
    }
    isSelectionAtEnd() {
        return this.findInput.inputBox.isSelectionAtEnd();
    }
    get placeholder() {
        return this.findInput.inputBox.inputElement.getAttribute('placeholder') || '';
    }
    set placeholder(placeholder) {
        this.findInput.inputBox.setPlaceHolder(placeholder);
    }
    get password() {
        return this.findInput.inputBox.inputElement.type === 'password';
    }
    set password(password) {
        this.findInput.inputBox.inputElement.type = password ? 'password' : 'text';
    }
    set enabled(enabled) {
        // We can't disable the input box because it is still used for
        // navigating the list. Instead, we disable the list and the OK
        // so that nothing can be selected.
        // TODO: should this be what we do for all find inputs? Or maybe some _other_ API
        // on findInput to change it to readonly?
        this.findInput.inputBox.inputElement.toggleAttribute('readonly', !enabled);
        // TODO: styles of the quick pick need to be moved to the CSS instead of being in line
        // so things like this can be done in CSS
        // this.findInput.inputBox.inputElement.classList.toggle('disabled', !enabled);
    }
    set toggles(toggles) {
        this.findInput.setAdditionalToggles(toggles);
    }
    get ariaLabel() {
        return this.findInput.inputBox.inputElement.getAttribute('aria-label') || '';
    }
    set ariaLabel(ariaLabel) {
        this.findInput.inputBox.inputElement.setAttribute('aria-label', ariaLabel);
    }
    hasFocus() {
        return this.findInput.inputBox.hasFocus();
    }
    setAttribute(name, value) {
        this.findInput.inputBox.inputElement.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.findInput.inputBox.inputElement.removeAttribute(name);
    }
    showDecoration(decoration) {
        if (decoration === Severity.Ignore) {
            this.findInput.clearMessage();
        }
        else {
            this.findInput.showMessage({ type: decoration === Severity.Info ? 1 /* MessageType.INFO */ : decoration === Severity.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */, content: '' });
        }
    }
    stylesForType(decoration) {
        return this.findInput.inputBox.stylesForType(decoration === Severity.Info ? 1 /* MessageType.INFO */ : decoration === Severity.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */);
    }
    setFocus() {
        this.findInput.focus();
    }
    layout() {
        this.findInput.inputBox.layout();
    }
}

export { QuickInputBox };
