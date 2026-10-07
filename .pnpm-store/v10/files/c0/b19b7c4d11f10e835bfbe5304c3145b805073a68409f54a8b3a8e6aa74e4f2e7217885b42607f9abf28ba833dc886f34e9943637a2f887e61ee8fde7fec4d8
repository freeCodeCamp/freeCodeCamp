import { EventHelper, addDisposableListener } from '../../dom.js';
import { RegexToggle, WholeWordsToggle, CaseSensitiveToggle } from './findInputToggles.js';
import { HistoryInputBox } from '../inputbox/inputBox.js';
import { Widget } from '../widget.js';
import { Emitter } from '../../../common/event.js';
import './findInput.css';
import { localize } from '../../../../nls.js';
import { MutableDisposable, DisposableStore } from '../../../common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const NLS_DEFAULT_LABEL = localize(1, "input");
class FindInput extends Widget {
    get onDidOptionChange() { return this._onDidOptionChange.event; }
    get onKeyDown() { return this._onKeyDown.event; }
    get onMouseDown() { return this._onMouseDown.event; }
    get onCaseSensitiveKeyDown() { return this._onCaseSensitiveKeyDown.event; }
    get onRegexKeyDown() { return this._onRegexKeyDown.event; }
    constructor(parent, contextViewProvider, options) {
        super();
        this.fixFocusOnOptionClickEnabled = true;
        this.imeSessionInProgress = false;
        this.additionalTogglesDisposables = this._register(new MutableDisposable());
        this.additionalToggles = [];
        this._onDidOptionChange = this._register(new Emitter());
        this._onKeyDown = this._register(new Emitter());
        this._onMouseDown = this._register(new Emitter());
        this._onInput = this._register(new Emitter());
        this._onKeyUp = this._register(new Emitter());
        this._onCaseSensitiveKeyDown = this._register(new Emitter());
        this._onRegexKeyDown = this._register(new Emitter());
        this._lastHighlightFindOptions = 0;
        this.placeholder = options.placeholder || '';
        this.validation = options.validation;
        this.label = options.label || NLS_DEFAULT_LABEL;
        this.showCommonFindToggles = !!options.showCommonFindToggles;
        const appendCaseSensitiveLabel = options.appendCaseSensitiveLabel || '';
        const appendWholeWordsLabel = options.appendWholeWordsLabel || '';
        const appendRegexLabel = options.appendRegexLabel || '';
        const flexibleHeight = !!options.flexibleHeight;
        const flexibleWidth = !!options.flexibleWidth;
        const flexibleMaxHeight = options.flexibleMaxHeight;
        this.domNode = document.createElement('div');
        this.domNode.classList.add('monaco-findInput');
        this.inputBox = this._register(new HistoryInputBox(this.domNode, contextViewProvider, {
            placeholder: this.placeholder || '',
            ariaLabel: this.label || '',
            validationOptions: {
                validation: this.validation
            },
            showHistoryHint: options.showHistoryHint,
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight,
            inputBoxStyles: options.inputBoxStyles,
            history: options.history
        }));
        if (this.showCommonFindToggles) {
            const hoverLifecycleOptions = options?.hoverLifecycleOptions || { groupId: 'find-input' };
            this.regex = this._register(new RegexToggle({
                appendTitle: appendRegexLabel,
                isChecked: false,
                hoverLifecycleOptions,
                ...options.toggleStyles
            }));
            this._register(this.regex.onChange(viaKeyboard => {
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this._register(this.regex.onKeyDown(e => {
                this._onRegexKeyDown.fire(e);
            }));
            this.wholeWords = this._register(new WholeWordsToggle({
                appendTitle: appendWholeWordsLabel,
                isChecked: false,
                hoverLifecycleOptions,
                ...options.toggleStyles
            }));
            this._register(this.wholeWords.onChange(viaKeyboard => {
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this.caseSensitive = this._register(new CaseSensitiveToggle({
                appendTitle: appendCaseSensitiveLabel,
                isChecked: false,
                hoverLifecycleOptions,
                ...options.toggleStyles
            }));
            this._register(this.caseSensitive.onChange(viaKeyboard => {
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
                this.validate();
            }));
            this._register(this.caseSensitive.onKeyDown(e => {
                this._onCaseSensitiveKeyDown.fire(e);
            }));
            // Arrow-Key support to navigate between options
            const indexes = [this.caseSensitive.domNode, this.wholeWords.domNode, this.regex.domNode];
            this.onkeydown(this.domNode, (event) => {
                if (event.equals(15 /* KeyCode.LeftArrow */) || event.equals(17 /* KeyCode.RightArrow */) || event.equals(9 /* KeyCode.Escape */)) {
                    const index = indexes.indexOf(this.domNode.ownerDocument.activeElement);
                    if (index >= 0) {
                        let newIndex = -1;
                        if (event.equals(17 /* KeyCode.RightArrow */)) {
                            newIndex = (index + 1) % indexes.length;
                        }
                        else if (event.equals(15 /* KeyCode.LeftArrow */)) {
                            if (index === 0) {
                                newIndex = indexes.length - 1;
                            }
                            else {
                                newIndex = index - 1;
                            }
                        }
                        if (event.equals(9 /* KeyCode.Escape */)) {
                            indexes[index].blur();
                            this.inputBox.focus();
                        }
                        else if (newIndex >= 0) {
                            indexes[newIndex].focus();
                        }
                        EventHelper.stop(event, true);
                    }
                }
            });
        }
        this.controls = document.createElement('div');
        this.controls.className = 'controls';
        this.controls.style.display = this.showCommonFindToggles ? '' : 'none';
        if (this.caseSensitive) {
            this.controls.append(this.caseSensitive.domNode);
        }
        if (this.wholeWords) {
            this.controls.appendChild(this.wholeWords.domNode);
        }
        if (this.regex) {
            this.controls.appendChild(this.regex.domNode);
        }
        this.setAdditionalToggles(options?.additionalToggles);
        if (this.controls) {
            this.domNode.appendChild(this.controls);
        }
        parent?.appendChild(this.domNode);
        this._register(addDisposableListener(this.inputBox.inputElement, 'compositionstart', (e) => {
            this.imeSessionInProgress = true;
        }));
        this._register(addDisposableListener(this.inputBox.inputElement, 'compositionend', (e) => {
            this.imeSessionInProgress = false;
            this._onInput.fire();
        }));
        this.onkeydown(this.inputBox.inputElement, (e) => this._onKeyDown.fire(e));
        this.onkeyup(this.inputBox.inputElement, (e) => this._onKeyUp.fire(e));
        this.oninput(this.inputBox.inputElement, (e) => this._onInput.fire());
        this.onmousedown(this.inputBox.inputElement, (e) => this._onMouseDown.fire(e));
    }
    get onDidChange() {
        return this.inputBox.onDidChange;
    }
    layout(style) {
        this.inputBox.layout();
        this.updateInputBoxPadding(style.collapsedFindWidget);
    }
    enable() {
        this.domNode.classList.remove('disabled');
        this.inputBox.enable();
        this.regex?.enable();
        this.wholeWords?.enable();
        this.caseSensitive?.enable();
        for (const toggle of this.additionalToggles) {
            toggle.enable();
        }
    }
    disable() {
        this.domNode.classList.add('disabled');
        this.inputBox.disable();
        this.regex?.disable();
        this.wholeWords?.disable();
        this.caseSensitive?.disable();
        for (const toggle of this.additionalToggles) {
            toggle.disable();
        }
    }
    setFocusInputOnOptionClick(value) {
        this.fixFocusOnOptionClickEnabled = value;
    }
    setEnabled(enabled) {
        if (enabled) {
            this.enable();
        }
        else {
            this.disable();
        }
    }
    setAdditionalToggles(toggles) {
        for (const currentToggle of this.additionalToggles) {
            currentToggle.domNode.remove();
        }
        this.additionalToggles = [];
        this.additionalTogglesDisposables.value = new DisposableStore();
        for (const toggle of toggles ?? []) {
            this.additionalTogglesDisposables.value.add(toggle);
            this.controls.appendChild(toggle.domNode);
            this.additionalTogglesDisposables.value.add(toggle.onChange(viaKeyboard => {
                this._onDidOptionChange.fire(viaKeyboard);
                if (!viaKeyboard && this.fixFocusOnOptionClickEnabled) {
                    this.inputBox.focus();
                }
            }));
            this.additionalToggles.push(toggle);
        }
        if (this.additionalToggles.length > 0) {
            this.controls.style.display = '';
        }
        this.updateInputBoxPadding();
    }
    updateInputBoxPadding(controlsHidden = false) {
        if (controlsHidden) {
            this.inputBox.paddingRight = 0;
        }
        else {
            this.inputBox.paddingRight =
                ((this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0))
                    + this.additionalToggles.reduce((r, t) => r + t.width(), 0);
        }
    }
    getValue() {
        return this.inputBox.value;
    }
    setValue(value) {
        if (this.inputBox.value !== value) {
            this.inputBox.value = value;
        }
    }
    select() {
        this.inputBox.select();
    }
    focus() {
        this.inputBox.focus();
    }
    getCaseSensitive() {
        return this.caseSensitive?.checked ?? false;
    }
    setCaseSensitive(value) {
        if (this.caseSensitive) {
            this.caseSensitive.checked = value;
        }
    }
    getWholeWords() {
        return this.wholeWords?.checked ?? false;
    }
    setWholeWords(value) {
        if (this.wholeWords) {
            this.wholeWords.checked = value;
        }
    }
    getRegex() {
        return this.regex?.checked ?? false;
    }
    setRegex(value) {
        if (this.regex) {
            this.regex.checked = value;
            this.validate();
        }
    }
    focusOnCaseSensitive() {
        this.caseSensitive?.focus();
    }
    highlightFindOptions() {
        this.domNode.classList.remove('highlight-' + (this._lastHighlightFindOptions));
        this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions;
        this.domNode.classList.add('highlight-' + (this._lastHighlightFindOptions));
    }
    validate() {
        this.inputBox.validate();
    }
    showMessage(message) {
        this.inputBox.showMessage(message);
    }
    clearMessage() {
        this.inputBox.hideMessage();
    }
}

export { FindInput };
