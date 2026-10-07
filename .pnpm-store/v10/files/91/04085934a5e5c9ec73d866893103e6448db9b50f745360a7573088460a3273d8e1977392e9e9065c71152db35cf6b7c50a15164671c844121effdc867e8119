import { addDisposableListener, EventType } from '../../../../base/browser/dom.js';
import './findOptionsWidget.css';
import { CaseSensitiveToggle, WholeWordsToggle, RegexToggle } from '../../../../base/browser/ui/findinput/findInputToggles.js';
import { Widget } from '../../../../base/browser/ui/widget.js';
import { RunOnceScheduler } from '../../../../base/common/async.js';
import { FIND_IDS } from './findModel.js';
import { asCssVariable } from '../../../../platform/theme/common/colorUtils.js';
import '../../../../platform/theme/common/colors/baseColors.js';
import '../../../../platform/theme/common/colors/chartsColors.js';
import '../../../../platform/theme/common/colors/editorColors.js';
import { inputActiveOptionBackground, inputActiveOptionForeground, inputActiveOptionBorder } from '../../../../platform/theme/common/colors/inputColors.js';
import '../../../../platform/theme/common/colors/listColors.js';
import '../../../../platform/theme/common/colors/menuColors.js';
import '../../../../platform/theme/common/colors/minimapColors.js';
import '../../../../platform/theme/common/colors/miscColors.js';
import '../../../../platform/theme/common/colors/quickpickColors.js';
import '../../../../platform/theme/common/colors/searchColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class FindOptionsWidget extends Widget {
    static { this.ID = 'editor.contrib.findOptionsWidget'; }
    constructor(editor, state, keybindingService) {
        super();
        this._hideSoon = this._register(new RunOnceScheduler(() => this._hide(), 2000));
        this._isVisible = false;
        this._editor = editor;
        this._state = state;
        this._keybindingService = keybindingService;
        this._domNode = document.createElement('div');
        this._domNode.className = 'findOptionsWidget';
        this._domNode.style.display = 'none';
        this._domNode.style.top = '10px';
        this._domNode.style.zIndex = '12';
        this._domNode.setAttribute('role', 'presentation');
        this._domNode.setAttribute('aria-hidden', 'true');
        const toggleStyles = {
            inputActiveOptionBorder: asCssVariable(inputActiveOptionBorder),
            inputActiveOptionForeground: asCssVariable(inputActiveOptionForeground),
            inputActiveOptionBackground: asCssVariable(inputActiveOptionBackground),
        };
        const hoverLifecycleOptions = { groupId: 'find-options-widget' };
        this.caseSensitive = this._register(new CaseSensitiveToggle({
            appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleCaseSensitiveCommand),
            isChecked: this._state.matchCase,
            hoverLifecycleOptions,
            ...toggleStyles
        }));
        this._domNode.appendChild(this.caseSensitive.domNode);
        this._register(this.caseSensitive.onChange(() => {
            this._state.change({
                matchCase: this.caseSensitive.checked
            }, false);
        }));
        this.wholeWords = this._register(new WholeWordsToggle({
            appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleWholeWordCommand),
            isChecked: this._state.wholeWord,
            hoverLifecycleOptions,
            ...toggleStyles
        }));
        this._domNode.appendChild(this.wholeWords.domNode);
        this._register(this.wholeWords.onChange(() => {
            this._state.change({
                wholeWord: this.wholeWords.checked
            }, false);
        }));
        this.regex = this._register(new RegexToggle({
            appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleRegexCommand),
            isChecked: this._state.isRegex,
            hoverLifecycleOptions,
            ...toggleStyles
        }));
        this._domNode.appendChild(this.regex.domNode);
        this._register(this.regex.onChange(() => {
            this._state.change({
                isRegex: this.regex.checked
            }, false);
        }));
        this._editor.addOverlayWidget(this);
        this._register(this._state.onFindReplaceStateChange((e) => {
            let somethingChanged = false;
            if (e.isRegex) {
                this.regex.checked = this._state.isRegex;
                somethingChanged = true;
            }
            if (e.wholeWord) {
                this.wholeWords.checked = this._state.wholeWord;
                somethingChanged = true;
            }
            if (e.matchCase) {
                this.caseSensitive.checked = this._state.matchCase;
                somethingChanged = true;
            }
            if (!this._state.isRevealed && somethingChanged) {
                this._revealTemporarily();
            }
        }));
        this._register(addDisposableListener(this._domNode, EventType.MOUSE_LEAVE, (e) => this._onMouseLeave()));
        this._register(addDisposableListener(this._domNode, 'mouseover', (e) => this._onMouseOver()));
    }
    _keybindingLabelFor(actionId) {
        const kb = this._keybindingService.lookupKeybinding(actionId);
        if (!kb) {
            return '';
        }
        return ` (${kb.getLabel()})`;
    }
    dispose() {
        this._editor.removeOverlayWidget(this);
        super.dispose();
    }
    // ----- IOverlayWidget API
    getId() {
        return FindOptionsWidget.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            preference: 0 /* OverlayWidgetPositionPreference.TOP_RIGHT_CORNER */
        };
    }
    highlightFindOptions() {
        this._revealTemporarily();
    }
    _revealTemporarily() {
        this._show();
        this._hideSoon.schedule();
    }
    _onMouseLeave() {
        this._hideSoon.schedule();
    }
    _onMouseOver() {
        this._hideSoon.cancel();
    }
    _show() {
        if (this._isVisible) {
            return;
        }
        this._isVisible = true;
        this._domNode.style.display = 'block';
    }
    _hide() {
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        this._domNode.style.display = 'none';
    }
}

export { FindOptionsWidget };
