import { createStyleSheetFromObservable } from '../../../../../base/browser/domStylesheets.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../browser/observableCodeEditor.js';
import { InlineCompletionsHintsWidget } from '../hintsWidget/inlineCompletionsHintsWidget.js';
import { convertItemsToStableObservables } from '../utils.js';
import { GhostTextView } from './ghostText/ghostTextView.js';
import { InlineCompletionViewKind } from './inlineEdits/inlineEditsViewInterface.js';
import { InlineEditsViewAndDiffProducer } from './inlineEdits/inlineEditsViewProducer.js';
import { derived, derivedDisposable } from '../../../../../base/common/observableInternal/observables/derived.js';
import { mapObservableArrayCached, derivedObservableWithCache } from '../../../../../base/common/observableInternal/utils/utils.js';
import { constObservable } from '../../../../../base/common/observableInternal/observables/constObservable.js';

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
let InlineCompletionsView = class InlineCompletionsView extends Disposable {
    constructor(_editor, _model, _focusIsInMenu, _instantiationService) {
        super();
        this._editor = _editor;
        this._model = _model;
        this._focusIsInMenu = _focusIsInMenu;
        this._instantiationService = _instantiationService;
        this._ghostTexts = derived(this, (reader) => {
            const model = this._model.read(reader);
            return model?.ghostTexts.read(reader) ?? [];
        });
        this._stablizedGhostTexts = convertItemsToStableObservables(this._ghostTexts, this._store);
        this._editorObs = observableCodeEditor(this._editor);
        this._ghostTextWidgets = mapObservableArrayCached(this, this._stablizedGhostTexts, (ghostText, store) => derivedDisposable((reader) => this._instantiationService.createInstance(GhostTextView.hot.read(reader), this._editor, {
            ghostText: ghostText,
            warning: this._model.map((m, reader) => {
                const warning = m?.warning?.read(reader);
                return warning ? { icon: warning.icon } : undefined;
            }),
            minReservedLineCount: constObservable(0),
            targetTextModel: this._model.map(v => v?.textModel),
            handleInlineCompletionShown: this._model.map((model, reader) => {
                const inlineCompletion = model?.inlineCompletionState.read(reader)?.inlineCompletion;
                if (inlineCompletion) {
                    return (viewData) => model.handleInlineSuggestionShown(inlineCompletion, InlineCompletionViewKind.GhostText, viewData);
                }
                return () => { };
            }),
        }, this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(v => ({ syntaxHighlightingEnabled: v.syntaxHighlightingEnabled })), false, false)).recomputeInitiallyAndOnChange(store)).recomputeInitiallyAndOnChange(this._store);
        this._inlineEdit = derived(this, reader => this._model.read(reader)?.inlineEditState.read(reader)?.inlineEdit);
        this._everHadInlineEdit = derivedObservableWithCache(this, (reader, last) => last || !!this._inlineEdit.read(reader) || !!this._model.read(reader)?.inlineCompletionState.read(reader)?.inlineCompletion?.showInlineEditMenu);
        this._inlineEditWidget = derivedDisposable(reader => {
            if (!this._everHadInlineEdit.read(reader)) {
                return undefined;
            }
            return this._instantiationService.createInstance(InlineEditsViewAndDiffProducer.hot.read(reader), this._editor, this._inlineEdit, this._model, this._focusIsInMenu);
        })
            .recomputeInitiallyAndOnChange(this._store);
        this._fontFamily = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(val => val.fontFamily);
        this._register(createStyleSheetFromObservable(derived(reader => {
            const fontFamily = this._fontFamily.read(reader);
            return `
.monaco-editor .ghost-text-decoration,
.monaco-editor .ghost-text-decoration-preview,
.monaco-editor .ghost-text {
	font-family: ${fontFamily};
}`;
        })));
        this._register(new InlineCompletionsHintsWidget(this._editor, this._model, this._instantiationService));
    }
    shouldShowHoverAtViewZone(viewZoneId) {
        return this._ghostTextWidgets.get()[0]?.get().ownsViewZone(viewZoneId) ?? false;
    }
};
InlineCompletionsView = __decorate([
    __param(3, IInstantiationService)
], InlineCompletionsView);

export { InlineCompletionsView };
