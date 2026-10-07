import { h } from '../../../../base/browser/dom.js';
import { structuralEquals } from '../../../../base/common/equals.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import '../../../../base/common/observableInternal/index.js';
import { observableCodeEditor } from '../../../browser/observableCodeEditor.js';
import { derivedOpts, derived } from '../../../../base/common/observableInternal/observables/derived.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { constObservable } from '../../../../base/common/observableInternal/observables/constObservable.js';
import { derivedObservableWithCache } from '../../../../base/common/observableInternal/utils/utils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Use the editor option to set the placeholder text.
*/
class PlaceholderTextContribution extends Disposable {
    static { this.ID = 'editor.contrib.placeholderText'; }
    constructor(_editor) {
        super();
        this._editor = _editor;
        this._editorObs = observableCodeEditor(this._editor);
        this._placeholderText = this._editorObs.getOption(100 /* EditorOption.placeholder */);
        this._state = derivedOpts({ owner: this, equalsFn: structuralEquals }, reader => {
            const p = this._placeholderText.read(reader);
            if (!p) {
                return undefined;
            }
            if (!this._editorObs.valueIsEmpty.read(reader)) {
                return undefined;
            }
            return { placeholder: p };
        });
        this._shouldViewBeAlive = isOrWasTrue(this, reader => this._state.read(reader)?.placeholder !== undefined);
        this._view = derived((reader) => {
            if (!this._shouldViewBeAlive.read(reader)) {
                return;
            }
            const element = h('div.editorPlaceholder');
            reader.store.add(autorun(reader => {
                const data = this._state.read(reader);
                const shouldBeVisibile = data?.placeholder !== undefined;
                element.root.style.display = shouldBeVisibile ? 'block' : 'none';
                element.root.innerText = data?.placeholder ?? '';
            }));
            reader.store.add(autorun(reader => {
                const info = this._editorObs.layoutInfo.read(reader);
                element.root.style.left = `${info.contentLeft}px`;
                element.root.style.width = (info.contentWidth - info.verticalScrollbarWidth) + 'px';
                element.root.style.top = `${this._editor.getTopForLineNumber(0)}px`;
            }));
            reader.store.add(autorun(reader => {
                element.root.style.fontFamily = this._editorObs.getOption(58 /* EditorOption.fontFamily */).read(reader);
                element.root.style.fontSize = this._editorObs.getOption(61 /* EditorOption.fontSize */).read(reader) + 'px';
                element.root.style.lineHeight = this._editorObs.getOption(75 /* EditorOption.lineHeight */).read(reader) + 'px';
            }));
            reader.store.add(this._editorObs.createOverlayWidget({
                allowEditorOverflow: false,
                minContentWidthInPx: constObservable(0),
                position: constObservable(null),
                domNode: element.root,
            }));
        });
        this._view.recomputeInitiallyAndOnChange(this._store);
    }
}
function isOrWasTrue(owner, fn) {
    return derivedObservableWithCache(owner, (reader, lastValue) => {
        if (lastValue === true) {
            return true;
        }
        return fn(reader);
    });
}

export { PlaceholderTextContribution };
