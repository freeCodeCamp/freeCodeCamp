import { createHotClass } from '../../../../../../base/common/hotReloadHelpers.js';
import { Disposable } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { LineRange } from '../../../../../common/core/ranges/lineRange.js';
import { Range } from '../../../../../common/core/range.js';
import { TextReplacement, TextEdit } from '../../../../../common/core/edits/textEdit.js';
import { TextModelText } from '../../../../../common/model/textModelText.js';
import { InlineEditWithChanges } from './inlineEditWithChanges.js';
import { InlineEditModel, InlineEditHost, GhostTextIndicator } from './inlineEditsModel.js';
import { InlineEditsView } from './inlineEditsView.js';
import { InlineEditTabAction } from './inlineEditsViewInterface.js';
import { derived } from '../../../../../../base/common/observableInternal/observables/derived.js';

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
let InlineEditsViewAndDiffProducer = class InlineEditsViewAndDiffProducer extends Disposable {
    static { this.hot = createHotClass(this); }
    constructor(_editor, _edit, _model, _focusIsInMenu, instantiationService) {
        super();
        this._editor = _editor;
        this._edit = _edit;
        this._model = _model;
        this._focusIsInMenu = _focusIsInMenu;
        this._inlineEdit = derived(this, (reader) => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            const inlineEdit = this._edit.read(reader);
            if (!inlineEdit) {
                return undefined;
            }
            const textModel = this._editor.getModel();
            if (!textModel) {
                return undefined;
            }
            const editOffset = model.inlineEditState.read(undefined)?.inlineCompletion.updatedEdit;
            if (!editOffset) {
                return undefined;
            }
            const edits = editOffset.replacements.map(e => {
                const innerEditRange = Range.fromPositions(textModel.getPositionAt(e.replaceRange.start), textModel.getPositionAt(e.replaceRange.endExclusive));
                return new TextReplacement(innerEditRange, e.newText);
            });
            const diffEdits = new TextEdit(edits);
            const text = new TextModelText(textModel);
            return new InlineEditWithChanges(text, diffEdits, model.primaryPosition.read(undefined), model.allPositions.read(undefined), inlineEdit.commands, inlineEdit.inlineCompletion);
        });
        this._inlineEditModel = derived(this, reader => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            const edit = this._inlineEdit.read(reader);
            if (!edit) {
                return undefined;
            }
            const tabAction = derived(this, reader => {
                /** @description tabAction */
                if (this._editorObs.isFocused.read(reader)) {
                    if (model.tabShouldJumpToInlineEdit.read(reader)) {
                        return InlineEditTabAction.Jump;
                    }
                    if (model.tabShouldAcceptInlineEdit.read(reader)) {
                        return InlineEditTabAction.Accept;
                    }
                }
                return InlineEditTabAction.Inactive;
            });
            return new InlineEditModel(model, edit, tabAction);
        });
        this._inlineEditHost = derived(this, reader => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            return new InlineEditHost(model);
        });
        this._ghostTextIndicator = derived(this, reader => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            const state = model.inlineCompletionState.read(reader);
            if (!state) {
                return undefined;
            }
            const inlineCompletion = state.inlineCompletion;
            if (!inlineCompletion) {
                return undefined;
            }
            if (!inlineCompletion.showInlineEditMenu) {
                return undefined;
            }
            const lineRange = LineRange.ofLength(state.primaryGhostText.lineNumber, 1);
            return new GhostTextIndicator(this._editor, model, lineRange, inlineCompletion);
        });
        this._editorObs = observableCodeEditor(this._editor);
        this._register(instantiationService.createInstance(InlineEditsView, this._editor, this._inlineEditHost, this._inlineEditModel, this._ghostTextIndicator, this._focusIsInMenu));
    }
};
InlineEditsViewAndDiffProducer = __decorate([
    __param(4, IInstantiationService)
], InlineEditsViewAndDiffProducer);

export { InlineEditsViewAndDiffProducer };
