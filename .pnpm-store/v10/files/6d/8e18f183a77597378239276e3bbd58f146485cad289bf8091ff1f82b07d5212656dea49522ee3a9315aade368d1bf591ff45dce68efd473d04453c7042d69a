import { alert } from '../../../../base/browser/ui/aria/aria.js';
import { MarkdownString } from '../../../../base/common/htmlContent.js';
import { KeyChord } from '../../../../base/common/keyCodes.js';
import './anchorSelect.css';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { localize, localize2 } from '../../../../nls.js';
import { RawContextKey, IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SelectionAnchorController_1;
const SelectionAnchorSet = new RawContextKey('selectionAnchorSet', false);
let SelectionAnchorController = class SelectionAnchorController {
    static { SelectionAnchorController_1 = this; }
    static { this.ID = 'editor.contrib.selectionAnchorController'; }
    static get(editor) {
        return editor.getContribution(SelectionAnchorController_1.ID);
    }
    constructor(editor, contextKeyService) {
        this.editor = editor;
        this.selectionAnchorSetContextKey = SelectionAnchorSet.bindTo(contextKeyService);
        this.modelChangeListener = editor.onDidChangeModel(() => this.selectionAnchorSetContextKey.reset());
    }
    setSelectionAnchor() {
        if (this.editor.hasModel()) {
            const position = this.editor.getPosition();
            this.editor.changeDecorations((accessor) => {
                if (this.decorationId) {
                    accessor.removeDecoration(this.decorationId);
                }
                this.decorationId = accessor.addDecoration(Selection.fromPositions(position, position), {
                    description: 'selection-anchor',
                    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
                    hoverMessage: new MarkdownString().appendText(localize(798, "Selection Anchor")),
                    className: 'selection-anchor'
                });
            });
            this.selectionAnchorSetContextKey.set(!!this.decorationId);
            alert(localize(799, "Anchor set at {0}:{1}", position.lineNumber, position.column));
        }
    }
    goToSelectionAnchor() {
        if (this.editor.hasModel() && this.decorationId) {
            const anchorPosition = this.editor.getModel().getDecorationRange(this.decorationId);
            if (anchorPosition) {
                this.editor.setPosition(anchorPosition.getStartPosition());
            }
        }
    }
    selectFromAnchorToCursor() {
        if (this.editor.hasModel() && this.decorationId) {
            const start = this.editor.getModel().getDecorationRange(this.decorationId);
            if (start) {
                const end = this.editor.getPosition();
                this.editor.setSelection(Selection.fromPositions(start.getStartPosition(), end));
                this.cancelSelectionAnchor();
            }
        }
    }
    cancelSelectionAnchor() {
        if (this.decorationId) {
            const decorationId = this.decorationId;
            this.editor.changeDecorations((accessor) => {
                accessor.removeDecoration(decorationId);
                this.decorationId = undefined;
            });
            this.selectionAnchorSetContextKey.set(false);
        }
    }
    dispose() {
        this.cancelSelectionAnchor();
        this.modelChangeListener.dispose();
    }
};
SelectionAnchorController = SelectionAnchorController_1 = __decorate([
    __param(1, IContextKeyService)
], SelectionAnchorController);
class SetSelectionAnchor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.setSelectionAnchor',
            label: localize2(800, "Set Selection Anchor"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 32 /* KeyCode.KeyB */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    async run(_accessor, editor) {
        SelectionAnchorController.get(editor)?.setSelectionAnchor();
    }
}
class GoToSelectionAnchor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.goToSelectionAnchor',
            label: localize2(801, "Go to Selection Anchor"),
            precondition: SelectionAnchorSet,
        });
    }
    async run(_accessor, editor) {
        SelectionAnchorController.get(editor)?.goToSelectionAnchor();
    }
}
class SelectFromAnchorToCursor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.selectFromAnchorToCursor',
            label: localize2(802, "Select from Anchor to Cursor"),
            precondition: SelectionAnchorSet,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: KeyChord(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    async run(_accessor, editor) {
        SelectionAnchorController.get(editor)?.selectFromAnchorToCursor();
    }
}
class CancelSelectionAnchor extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.cancelSelectionAnchor',
            label: localize2(803, "Cancel Selection Anchor"),
            precondition: SelectionAnchorSet,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 9 /* KeyCode.Escape */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    async run(_accessor, editor) {
        SelectionAnchorController.get(editor)?.cancelSelectionAnchor();
    }
}
registerEditorContribution(SelectionAnchorController.ID, SelectionAnchorController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(SetSelectionAnchor);
registerEditorAction(GoToSelectionAnchor);
registerEditorAction(SelectFromAnchorToCursor);
registerEditorAction(CancelSelectionAnchor);

export { SelectionAnchorSet };
