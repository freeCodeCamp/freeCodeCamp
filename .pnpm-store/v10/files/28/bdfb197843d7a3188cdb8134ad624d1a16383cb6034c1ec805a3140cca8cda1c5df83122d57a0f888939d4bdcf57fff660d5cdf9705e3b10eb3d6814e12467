import { Disposable } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { localize2 } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CursorState {
    constructor(selections) {
        this.selections = selections;
    }
    equals(other) {
        const thisLen = this.selections.length;
        const otherLen = other.selections.length;
        if (thisLen !== otherLen) {
            return false;
        }
        for (let i = 0; i < thisLen; i++) {
            if (!this.selections[i].equalsSelection(other.selections[i])) {
                return false;
            }
        }
        return true;
    }
}
class StackElement {
    constructor(cursorState, scrollTop, scrollLeft) {
        this.cursorState = cursorState;
        this.scrollTop = scrollTop;
        this.scrollLeft = scrollLeft;
    }
}
class CursorUndoRedoController extends Disposable {
    static { this.ID = 'editor.contrib.cursorUndoRedoController'; }
    static get(editor) {
        return editor.getContribution(CursorUndoRedoController.ID);
    }
    constructor(editor) {
        super();
        this._editor = editor;
        this._isCursorUndoRedo = false;
        this._undoStack = [];
        this._redoStack = [];
        this._register(editor.onDidChangeModel((e) => {
            this._undoStack = [];
            this._redoStack = [];
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            this._undoStack = [];
            this._redoStack = [];
        }));
        this._register(editor.onDidChangeCursorSelection((e) => {
            if (this._isCursorUndoRedo) {
                return;
            }
            if (!e.oldSelections) {
                return;
            }
            if (e.oldModelVersionId !== e.modelVersionId) {
                return;
            }
            const prevState = new CursorState(e.oldSelections);
            const isEqualToLastUndoStack = (this._undoStack.length > 0 && this._undoStack[this._undoStack.length - 1].cursorState.equals(prevState));
            if (!isEqualToLastUndoStack) {
                this._undoStack.push(new StackElement(prevState, editor.getScrollTop(), editor.getScrollLeft()));
                this._redoStack = [];
                if (this._undoStack.length > 50) {
                    // keep the cursor undo stack bounded
                    this._undoStack.shift();
                }
            }
        }));
    }
    cursorUndo() {
        if (!this._editor.hasModel() || this._undoStack.length === 0) {
            return;
        }
        this._redoStack.push(new StackElement(new CursorState(this._editor.getSelections()), this._editor.getScrollTop(), this._editor.getScrollLeft()));
        this._applyState(this._undoStack.pop());
    }
    cursorRedo() {
        if (!this._editor.hasModel() || this._redoStack.length === 0) {
            return;
        }
        this._undoStack.push(new StackElement(new CursorState(this._editor.getSelections()), this._editor.getScrollTop(), this._editor.getScrollLeft()));
        this._applyState(this._redoStack.pop());
    }
    _applyState(stackElement) {
        this._isCursorUndoRedo = true;
        this._editor.setSelections(stackElement.cursorState.selections);
        this._editor.setScrollPosition({
            scrollTop: stackElement.scrollTop,
            scrollLeft: stackElement.scrollLeft
        });
        this._isCursorUndoRedo = false;
    }
}
class CursorUndo extends EditorAction {
    constructor() {
        super({
            id: 'cursorUndo',
            label: localize2(911, "Cursor Undo"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 51 /* KeyCode.KeyU */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor, args) {
        CursorUndoRedoController.get(editor)?.cursorUndo();
    }
}
class CursorRedo extends EditorAction {
    constructor() {
        super({
            id: 'cursorRedo',
            label: localize2(912, "Cursor Redo"),
            precondition: undefined
        });
    }
    run(accessor, editor, args) {
        CursorUndoRedoController.get(editor)?.cursorRedo();
    }
}
registerEditorContribution(CursorUndoRedoController.ID, CursorUndoRedoController, 0 /* EditorContributionInstantiation.Eager */); // eager because it needs to listen to record cursor state ASAP
registerEditorAction(CursorUndo);
registerEditorAction(CursorRedo);

export { CursorRedo, CursorUndo, CursorUndoRedoController };
