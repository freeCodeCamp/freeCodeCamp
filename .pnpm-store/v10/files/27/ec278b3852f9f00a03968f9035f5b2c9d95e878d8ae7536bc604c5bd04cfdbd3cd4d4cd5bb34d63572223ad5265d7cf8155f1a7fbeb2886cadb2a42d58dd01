import { DisposableStore } from '../../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class OvertypingCapturer {
    static { this._maxSelectionLength = 51200; }
    constructor(editor, suggestModel) {
        this._disposables = new DisposableStore();
        this._lastOvertyped = [];
        this._locked = false;
        this._disposables.add(editor.onWillType(() => {
            if (this._locked || !editor.hasModel()) {
                return;
            }
            const selections = editor.getSelections();
            const selectionsLength = selections.length;
            // Check if it will overtype any selections
            let willOvertype = false;
            for (let i = 0; i < selectionsLength; i++) {
                if (!selections[i].isEmpty()) {
                    willOvertype = true;
                    break;
                }
            }
            if (!willOvertype) {
                if (this._lastOvertyped.length !== 0) {
                    this._lastOvertyped.length = 0;
                }
                return;
            }
            this._lastOvertyped = [];
            const model = editor.getModel();
            for (let i = 0; i < selectionsLength; i++) {
                const selection = selections[i];
                // Check for overtyping capturer restrictions
                if (model.getValueLengthInRange(selection) > OvertypingCapturer._maxSelectionLength) {
                    return;
                }
                this._lastOvertyped[i] = { value: model.getValueInRange(selection), multiline: selection.startLineNumber !== selection.endLineNumber };
            }
        }));
        this._disposables.add(suggestModel.onDidTrigger(e => {
            this._locked = true;
        }));
        this._disposables.add(suggestModel.onDidCancel(e => {
            this._locked = false;
        }));
    }
    getLastOvertypedInfo(idx) {
        if (idx >= 0 && idx < this._lastOvertyped.length) {
            return this._lastOvertyped[idx];
        }
        return undefined;
    }
    dispose() {
        this._disposables.dispose();
    }
}

export { OvertypingCapturer };
