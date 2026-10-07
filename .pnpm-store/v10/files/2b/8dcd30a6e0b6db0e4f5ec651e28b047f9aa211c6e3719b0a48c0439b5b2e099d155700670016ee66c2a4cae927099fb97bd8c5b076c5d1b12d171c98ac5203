import { format } from '../../../../base/common/strings.js';
import { Range } from '../../../common/core/range.js';
import { CancellationTokenSource } from '../../../../base/common/cancellation.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { EditorKeybindingCancellationTokenSource } from './keybindingCancellation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditorState {
    constructor(editor, flags) {
        this.flags = flags;
        if ((this.flags & 1 /* CodeEditorStateFlag.Value */) !== 0) {
            const model = editor.getModel();
            this.modelVersionId = model ? format('{0}#{1}', model.uri.toString(), model.getVersionId()) : null;
        }
        else {
            this.modelVersionId = null;
        }
        if ((this.flags & 4 /* CodeEditorStateFlag.Position */) !== 0) {
            this.position = editor.getPosition();
        }
        else {
            this.position = null;
        }
        if ((this.flags & 2 /* CodeEditorStateFlag.Selection */) !== 0) {
            this.selection = editor.getSelection();
        }
        else {
            this.selection = null;
        }
        if ((this.flags & 8 /* CodeEditorStateFlag.Scroll */) !== 0) {
            this.scrollLeft = editor.getScrollLeft();
            this.scrollTop = editor.getScrollTop();
        }
        else {
            this.scrollLeft = -1;
            this.scrollTop = -1;
        }
    }
    _equals(other) {
        if (!(other instanceof EditorState)) {
            return false;
        }
        const state = other;
        if (this.modelVersionId !== state.modelVersionId) {
            return false;
        }
        if (this.scrollLeft !== state.scrollLeft || this.scrollTop !== state.scrollTop) {
            return false;
        }
        if (!this.position && state.position || this.position && !state.position || this.position && state.position && !this.position.equals(state.position)) {
            return false;
        }
        if (!this.selection && state.selection || this.selection && !state.selection || this.selection && state.selection && !this.selection.equalsRange(state.selection)) {
            return false;
        }
        return true;
    }
    validate(editor) {
        return this._equals(new EditorState(editor, this.flags));
    }
}
/**
 * A cancellation token source that cancels when the editor changes as expressed
 * by the provided flags
 * @param range If provided, changes in position and selection within this range will not trigger cancellation
 */
class EditorStateCancellationTokenSource extends EditorKeybindingCancellationTokenSource {
    constructor(editor, flags, range, parent) {
        super(editor, parent);
        this._listener = new DisposableStore();
        if (flags & 4 /* CodeEditorStateFlag.Position */) {
            this._listener.add(editor.onDidChangeCursorPosition(e => {
                if (!range || !Range.containsPosition(range, e.position)) {
                    this.cancel();
                }
            }));
        }
        if (flags & 2 /* CodeEditorStateFlag.Selection */) {
            this._listener.add(editor.onDidChangeCursorSelection(e => {
                if (!range || !Range.containsRange(range, e.selection)) {
                    this.cancel();
                }
            }));
        }
        if (flags & 8 /* CodeEditorStateFlag.Scroll */) {
            this._listener.add(editor.onDidScrollChange(_ => this.cancel()));
        }
        if (flags & 1 /* CodeEditorStateFlag.Value */) {
            this._listener.add(editor.onDidChangeModel(_ => this.cancel()));
            this._listener.add(editor.onDidChangeModelContent(_ => this.cancel()));
        }
    }
    dispose() {
        this._listener.dispose();
        super.dispose();
    }
}
/**
 * A cancellation token source that cancels when the provided model changes
 */
class TextModelCancellationTokenSource extends CancellationTokenSource {
    constructor(model, parent) {
        super(parent);
        this._listener = model.onDidChangeContent(() => this.cancel());
    }
    dispose() {
        this._listener.dispose();
        super.dispose();
    }
}

export { EditorState, EditorStateCancellationTokenSource, TextModelCancellationTokenSource };
