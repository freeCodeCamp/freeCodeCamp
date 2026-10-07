import '../../../../../../base/common/observableInternal/index.js';
import { localize } from '../../../../../../nls.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { TextEdit } from '../../../../../common/core/edits/textEdit.js';
import { StringText } from '../../../../../common/core/text/abstractText.js';
import { InlineEditTabAction } from './inlineEditsViewInterface.js';
import { InlineEditWithChanges } from './inlineEditWithChanges.js';
import { derived } from '../../../../../../base/common/observableInternal/observables/derived.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineEditModel {
    constructor(_model, inlineEdit, tabAction) {
        this._model = _model;
        this.inlineEdit = inlineEdit;
        this.tabAction = tabAction;
        this.action = this.inlineEdit.inlineCompletion.action;
        this.displayName = this.inlineEdit.inlineCompletion.source.provider.displayName ?? localize(1219, "Inline Edit");
        this.extensionCommands = this.inlineEdit.inlineCompletion.source.inlineSuggestions.commands ?? [];
        this.isInDiffEditor = this._model.isInDiffEditor;
        this.displayLocation = this.inlineEdit.inlineCompletion.hint;
        this.showCollapsed = this._model.showCollapsed;
    }
    accept() {
        this._model.accept();
    }
    jump() {
        this._model.jump();
    }
    handleInlineEditShown(viewKind, viewData) {
        this._model.handleInlineSuggestionShown(this.inlineEdit.inlineCompletion, viewKind, viewData);
    }
}
class InlineEditHost {
    constructor(_model) {
        this._model = _model;
        this.onDidAccept = this._model.onDidAccept;
        this.inAcceptFlow = this._model.inAcceptFlow;
    }
}
class GhostTextIndicator {
    constructor(editor, model, lineRange, inlineCompletion) {
        this.lineRange = lineRange;
        const editorObs = observableCodeEditor(editor);
        const tabAction = derived(this, reader => {
            if (editorObs.isFocused.read(reader)) {
                if (inlineCompletion.showInlineEditMenu) {
                    return InlineEditTabAction.Accept;
                }
            }
            return InlineEditTabAction.Inactive;
        });
        this.model = new InlineEditModel(model, new InlineEditWithChanges(new StringText(''), new TextEdit([inlineCompletion.getSingleTextEdit()]), model.primaryPosition.get(), model.allPositions.get(), inlineCompletion.source.inlineSuggestions.commands ?? [], inlineCompletion), tabAction);
    }
}

export { GhostTextIndicator, InlineEditHost, InlineEditModel };
