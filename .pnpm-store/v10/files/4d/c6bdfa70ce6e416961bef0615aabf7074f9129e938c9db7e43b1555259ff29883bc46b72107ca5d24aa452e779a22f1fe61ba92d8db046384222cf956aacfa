import { createCancelablePromise, timeout } from '../../../../base/common/async.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { EditorState } from '../../editorState/browser/editorState.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { Range } from '../../../common/core/range.js';
import { Selection } from '../../../common/core/selection.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { ModelDecorationOptions } from '../../../common/model/textModel.js';
import { IEditorWorkerService } from '../../../common/services/editorWorker.js';
import { localize2 } from '../../../../nls.js';
import { InPlaceReplaceCommand } from './inPlaceReplaceCommand.js';
import './inPlaceReplace.css';

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
var InPlaceReplaceController_1;
let InPlaceReplaceController = class InPlaceReplaceController {
    static { InPlaceReplaceController_1 = this; }
    static { this.ID = 'editor.contrib.inPlaceReplaceController'; }
    static get(editor) {
        return editor.getContribution(InPlaceReplaceController_1.ID);
    }
    static { this.DECORATION = ModelDecorationOptions.register({
        description: 'in-place-replace',
        className: 'valueSetReplacement'
    }); }
    constructor(editor, editorWorkerService) {
        this.editor = editor;
        this.editorWorkerService = editorWorkerService;
        this.decorations = this.editor.createDecorationsCollection();
    }
    dispose() {
    }
    run(source, up) {
        // cancel any pending request
        this.currentRequest?.cancel();
        const editorSelection = this.editor.getSelection();
        const model = this.editor.getModel();
        if (!model || !editorSelection) {
            return undefined;
        }
        let selection = editorSelection;
        if (selection.startLineNumber !== selection.endLineNumber) {
            // Can't accept multiline selection
            return undefined;
        }
        const state = new EditorState(this.editor, 1 /* CodeEditorStateFlag.Value */ | 4 /* CodeEditorStateFlag.Position */);
        const modelURI = model.uri;
        if (!this.editorWorkerService.canNavigateValueSet(modelURI)) {
            return Promise.resolve(undefined);
        }
        this.currentRequest = createCancelablePromise(token => this.editorWorkerService.navigateValueSet(modelURI, selection, up));
        return this.currentRequest.then(result => {
            if (!result || !result.range || !result.value) {
                // No proper result
                return;
            }
            if (!state.validate(this.editor)) {
                // state has changed
                return;
            }
            // Selection
            const editRange = Range.lift(result.range);
            let highlightRange = result.range;
            const diff = result.value.length - (selection.endColumn - selection.startColumn);
            // highlight
            highlightRange = {
                startLineNumber: highlightRange.startLineNumber,
                startColumn: highlightRange.startColumn,
                endLineNumber: highlightRange.endLineNumber,
                endColumn: highlightRange.startColumn + result.value.length
            };
            if (diff > 1) {
                selection = new Selection(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn + diff - 1);
            }
            // Insert new text
            const command = new InPlaceReplaceCommand(editRange, selection, result.value);
            this.editor.pushUndoStop();
            this.editor.executeCommand(source, command);
            this.editor.pushUndoStop();
            // add decoration
            this.decorations.set([{
                    range: highlightRange,
                    options: InPlaceReplaceController_1.DECORATION
                }]);
            // remove decoration after delay
            this.decorationRemover?.cancel();
            this.decorationRemover = timeout(350);
            this.decorationRemover.then(() => this.decorations.clear()).catch(onUnexpectedError);
        }).catch(onUnexpectedError);
    }
};
InPlaceReplaceController = InPlaceReplaceController_1 = __decorate([
    __param(1, IEditorWorkerService)
], InPlaceReplaceController);
class InPlaceReplaceUp extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.inPlaceReplace.up',
            label: localize2(1240, "Replace with Previous Value"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 87 /* KeyCode.Comma */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = InPlaceReplaceController.get(editor);
        if (!controller) {
            return Promise.resolve(undefined);
        }
        return controller.run(this.id, false);
    }
}
class InPlaceReplaceDown extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.inPlaceReplace.down',
            label: localize2(1241, "Replace with Next Value"),
            precondition: EditorContextKeys.writable,
            kbOpts: {
                kbExpr: EditorContextKeys.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 89 /* KeyCode.Period */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = InPlaceReplaceController.get(editor);
        if (!controller) {
            return Promise.resolve(undefined);
        }
        return controller.run(this.id, true);
    }
}
registerEditorContribution(InPlaceReplaceController.ID, InPlaceReplaceController, 4 /* EditorContributionInstantiation.Lazy */);
registerEditorAction(InPlaceReplaceUp);
registerEditorAction(InPlaceReplaceDown);
