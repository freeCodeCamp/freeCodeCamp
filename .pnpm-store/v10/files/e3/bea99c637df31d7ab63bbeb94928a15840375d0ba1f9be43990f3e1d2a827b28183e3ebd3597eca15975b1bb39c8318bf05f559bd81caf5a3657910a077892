import { $ } from '../../../../../../base/browser/dom.js';
import { equalsIfDefined, itemEquals } from '../../../../../../base/common/equals.js';
import { onUnexpectedError, BugIndicatingError } from '../../../../../../base/common/errors.js';
import { Event } from '../../../../../../base/common/event.js';
import { Disposable } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { IInstantiationService } from '../../../../../../platform/instantiation/common/instantiation.js';
import { observableCodeEditor } from '../../../../../browser/observableCodeEditor.js';
import { TextReplacement } from '../../../../../common/core/edits/textEdit.js';
import { Range } from '../../../../../common/core/range.js';
import { LineRange } from '../../../../../common/core/ranges/lineRange.js';
import { StringText } from '../../../../../common/core/text/abstractText.js';
import { TextLength } from '../../../../../common/core/text/textLength.js';
import { RangeMapping, lineRangeMappingFromRangeMappings } from '../../../../../common/diff/rangeMapping.js';
import { TextModel } from '../../../../../common/model/textModel.js';
import { InlineEditItem } from '../../model/inlineSuggestionItem.js';
import { InlineEditsGutterIndicator } from './components/gutterIndicatorView.js';
import { InlineEditsOnboardingExperience } from './inlineEditsNewUsers.js';
import { InlineEditTabAction, InlineCompletionViewKind } from './inlineEditsViewInterface.js';
import { InlineEditsCollapsedView } from './inlineEditsViews/inlineEditsCollapsedView.js';
import { InlineEditsCustomView } from './inlineEditsViews/inlineEditsCustomView.js';
import { InlineEditsDeletionView } from './inlineEditsViews/inlineEditsDeletionView.js';
import { InlineEditsInsertionView } from './inlineEditsViews/inlineEditsInsertionView.js';
import { InlineEditsLineReplacementView } from './inlineEditsViews/inlineEditsLineReplacementView.js';
import { InlineEditsSideBySideView } from './inlineEditsViews/inlineEditsSideBySideView.js';
import { InlineEditsWordReplacementView } from './inlineEditsViews/inlineEditsWordReplacementView.js';
import { OriginalEditorInlineDiffView } from './inlineEditsViews/originalEditorInlineDiffView.js';
import { createReindentEdit, applyEditToModifiedRangeMappings } from './utils/utils.js';
import './view.css';
import { derived, derivedOpts } from '../../../../../../base/common/observableInternal/observables/derived.js';
import { observableValue } from '../../../../../../base/common/observableInternal/observables/observableValue.js';
import { mapObservableArrayCached } from '../../../../../../base/common/observableInternal/utils/utils.js';
import { autorunWithStore, autorun } from '../../../../../../base/common/observableInternal/reactions/autorun.js';

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
let InlineEditsView = class InlineEditsView extends Disposable {
    constructor(_editor, _host, _model, _ghostTextIndicator, _focusIsInMenu, _instantiationService) {
        super();
        this._editor = _editor;
        this._host = _host;
        this._model = _model;
        this._ghostTextIndicator = _ghostTextIndicator;
        this._focusIsInMenu = _focusIsInMenu;
        this._instantiationService = _instantiationService;
        this._editorObs = observableCodeEditor(this._editor);
        this._tabAction = derived(reader => this._model.read(reader)?.tabAction.read(reader) ?? InlineEditTabAction.Inactive);
        this._constructorDone = observableValue(this, false);
        this._uiState = derived(this, reader => {
            const model = this._model.read(reader);
            if (!model || !this._constructorDone.read(reader)) {
                return undefined;
            }
            const inlineEdit = model.inlineEdit;
            let mappings = RangeMapping.fromEdit(inlineEdit.edit);
            let newText = inlineEdit.edit.apply(inlineEdit.originalText);
            let diff = lineRangeMappingFromRangeMappings(mappings, inlineEdit.originalText, new StringText(newText));
            let state = this.determineRenderState(model, reader, diff, new StringText(newText));
            if (!state) {
                onUnexpectedError(new Error(`unable to determine view: tried to render ${this._previousView?.view}`));
                return undefined;
            }
            if (state.kind === InlineCompletionViewKind.SideBySide) {
                const indentationAdjustmentEdit = createReindentEdit(newText, inlineEdit.modifiedLineRange, textModel.getOptions().tabSize);
                newText = indentationAdjustmentEdit.applyToString(newText);
                mappings = applyEditToModifiedRangeMappings(mappings, indentationAdjustmentEdit);
                diff = lineRangeMappingFromRangeMappings(mappings, inlineEdit.originalText, new StringText(newText));
            }
            this._previewTextModel.setLanguage(this._editor.getModel().getLanguageId());
            const previousNewText = this._previewTextModel.getValue();
            if (previousNewText !== newText) {
                // Only update the model if the text has changed to avoid flickering
                this._previewTextModel.setValue(newText);
            }
            if (model.showCollapsed.read(reader) && !this._indicator.read(reader)?.isHoverVisible.read(reader)) {
                state = { kind: InlineCompletionViewKind.Collapsed, viewData: state.viewData };
            }
            model.handleInlineEditShown(state.kind, state.viewData);
            return {
                state,
                diff,
                edit: inlineEdit,
                newText,
                newTextLineCount: inlineEdit.modifiedLineRange.length,
                isInDiffEditor: model.isInDiffEditor,
            };
        });
        this._previewTextModel = this._register(this._instantiationService.createInstance(TextModel, '', this._editor.getModel().getLanguageId(), { ...TextModel.DEFAULT_CREATION_OPTIONS, bracketPairColorizationOptions: { enabled: true, independentColorPoolPerBracketType: false } }, null));
        this._indicatorCyclicDependencyCircuitBreaker = observableValue(this, false);
        this._indicator = derived(this, (reader) => {
            if (!this._indicatorCyclicDependencyCircuitBreaker.read(reader)) {
                return undefined;
            }
            const indicatorDisplayRange = derivedOpts({ owner: this, equalsFn: equalsIfDefined(itemEquals()) }, reader => {
                /** @description indicatorDisplayRange */
                const ghostTextIndicator = this._ghostTextIndicator.read(reader);
                if (ghostTextIndicator) {
                    return ghostTextIndicator.lineRange;
                }
                const state = this._uiState.read(reader);
                if (!state) {
                    return undefined;
                }
                if (state.state?.kind === 'custom') {
                    const range = state.state.displayLocation?.range;
                    if (!range) {
                        throw new BugIndicatingError('custom view should have a range');
                    }
                    return new LineRange(range.startLineNumber, range.endLineNumber);
                }
                if (state.state?.kind === 'insertionMultiLine') {
                    return this._insertion.originalLines.read(reader);
                }
                return state.edit.displayRange;
            });
            const modelWithGhostTextSupport = derived(this, reader => {
                /** @description modelWithGhostTextSupport */
                const model = this._model.read(reader);
                if (model) {
                    return model;
                }
                const ghostTextIndicator = this._ghostTextIndicator.read(reader);
                if (ghostTextIndicator) {
                    return ghostTextIndicator.model;
                }
                return model;
            });
            return reader.store.add(this._instantiationService.createInstance(InlineEditsGutterIndicator, this._editorObs, indicatorDisplayRange, this._gutterIndicatorOffset, modelWithGhostTextSupport, this._inlineEditsIsHovered, this._focusIsInMenu));
        });
        this._inlineEditsIsHovered = derived(this, reader => {
            return this._sideBySide.isHovered.read(reader)
                || this._wordReplacementViews.read(reader).some(v => v.isHovered.read(reader))
                || this._deletion.isHovered.read(reader)
                || this._inlineDiffView.isHovered.read(reader)
                || this._lineReplacementView.isHovered.read(reader)
                || this._insertion.isHovered.read(reader)
                || this._customView.isHovered.read(reader);
        });
        this._gutterIndicatorOffset = derived(this, reader => {
            // TODO: have a better way to tell the gutter indicator view where the edit is inside a viewzone
            if (this._uiState.read(reader)?.state?.kind === 'insertionMultiLine') {
                return this._insertion.startLineOffset.read(reader);
            }
            const ghostTextIndicator = this._ghostTextIndicator.read(reader);
            if (ghostTextIndicator) {
                return getGhostTextTopOffset(ghostTextIndicator, this._editor);
            }
            return 0;
        });
        this._sideBySide = this._register(this._instantiationService.createInstance(InlineEditsSideBySideView, this._editor, this._model.map(m => m?.inlineEdit), this._previewTextModel, this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.SideBySide ? ({
            newTextLineCount: s.newTextLineCount,
            isInDiffEditor: s.isInDiffEditor,
        }) : undefined), this._tabAction));
        this._deletion = this._register(this._instantiationService.createInstance(InlineEditsDeletionView, this._editor, this._model.map(m => m?.inlineEdit), this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.Deletion ? ({
            originalRange: s.state.originalRange,
            deletions: s.state.deletions,
            inDiffEditor: s.isInDiffEditor,
        }) : undefined), this._tabAction));
        this._insertion = this._register(this._instantiationService.createInstance(InlineEditsInsertionView, this._editor, this._uiState.map(s => s && s.state?.kind === InlineCompletionViewKind.InsertionMultiLine ? ({
            lineNumber: s.state.lineNumber,
            startColumn: s.state.column,
            text: s.state.text,
            inDiffEditor: s.isInDiffEditor,
        }) : undefined), this._tabAction));
        this._inlineDiffViewState = derived(this, reader => {
            const e = this._uiState.read(reader);
            if (!e || !e.state) {
                return undefined;
            }
            if (e.state.kind === 'wordReplacements' || e.state.kind === 'insertionMultiLine' || e.state.kind === 'collapsed' || e.state.kind === 'custom') {
                return undefined;
            }
            return {
                modifiedText: new StringText(e.newText),
                diff: e.diff,
                mode: e.state.kind,
                modifiedCodeEditor: this._sideBySide.previewEditor,
                isInDiffEditor: e.isInDiffEditor,
            };
        });
        this._inlineCollapsedView = this._register(this._instantiationService.createInstance(InlineEditsCollapsedView, this._editor, this._model.map((m, reader) => this._uiState.read(reader)?.state?.kind === 'collapsed' ? m?.inlineEdit : undefined)));
        this._customView = this._register(this._instantiationService.createInstance(InlineEditsCustomView, this._editor, this._model.map((m, reader) => this._uiState.read(reader)?.state?.kind === 'custom' ? m?.displayLocation : undefined), this._tabAction));
        this._inlineDiffView = this._register(new OriginalEditorInlineDiffView(this._editor, this._inlineDiffViewState, this._previewTextModel));
        this._wordReplacementViews = mapObservableArrayCached(this, this._uiState.map(s => s?.state?.kind === 'wordReplacements' ? s.state.replacements : []), (e, store) => {
            return store.add(this._instantiationService.createInstance(InlineEditsWordReplacementView, this._editorObs, e, this._tabAction));
        });
        this._lineReplacementView = this._register(this._instantiationService.createInstance(InlineEditsLineReplacementView, this._editorObs, this._uiState.map(s => s?.state?.kind === InlineCompletionViewKind.LineReplacement ? ({
            originalRange: s.state.originalRange,
            modifiedRange: s.state.modifiedRange,
            modifiedLines: s.state.modifiedLines,
            replacements: s.state.replacements,
        }) : undefined), this._uiState.map(s => s?.isInDiffEditor ?? false), this._tabAction));
        this._useCodeShifting = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(s => s.edits.allowCodeShifting);
        this._renderSideBySide = this._editorObs.getOption(71 /* EditorOption.inlineSuggest */).map(s => s.edits.renderSideBySide);
        this._register(autorunWithStore((reader, store) => {
            const model = this._model.read(reader);
            if (!model) {
                return;
            }
            store.add(Event.any(this._sideBySide.onDidClick, this._deletion.onDidClick, this._lineReplacementView.onDidClick, this._insertion.onDidClick, ...this._wordReplacementViews.read(reader).map(w => w.onDidClick), this._inlineDiffView.onDidClick, this._customView.onDidClick)(e => {
                if (this._viewHasBeenShownLongerThan(350)) {
                    e.preventDefault();
                    model.accept();
                }
            }));
        }));
        this._indicator.recomputeInitiallyAndOnChange(this._store);
        this._wordReplacementViews.recomputeInitiallyAndOnChange(this._store);
        this._indicatorCyclicDependencyCircuitBreaker.set(true, undefined);
        this._register(this._instantiationService.createInstance(InlineEditsOnboardingExperience, this._host, this._model, this._indicator, this._inlineCollapsedView));
        const minEditorScrollHeight = derived(this, reader => {
            return Math.max(...this._wordReplacementViews.read(reader).map(v => v.minEditorScrollHeight.read(reader)), this._lineReplacementView.minEditorScrollHeight.read(reader), this._customView.minEditorScrollHeight.read(reader));
        }).recomputeInitiallyAndOnChange(this._store);
        const textModel = this._editor.getModel();
        let viewZoneId;
        this._register(autorun(reader => {
            const minScrollHeight = minEditorScrollHeight.read(reader);
            this._editor.changeViewZones(accessor => {
                const scrollHeight = this._editor.getScrollHeight();
                const viewZoneHeight = minScrollHeight - scrollHeight + 1 /* Add 1px so there is a small gap */;
                if (viewZoneHeight !== 0 && viewZoneId) {
                    accessor.removeZone(viewZoneId);
                    viewZoneId = undefined;
                }
                if (viewZoneHeight <= 0) {
                    return;
                }
                viewZoneId = accessor.addZone({
                    afterLineNumber: textModel.getLineCount(),
                    heightInPx: viewZoneHeight,
                    domNode: $('div.minScrollHeightViewZone'),
                });
            });
        }));
        this._constructorDone.set(true, undefined); // TODO: remove and use correct initialization order
    }
    getCacheId(model) {
        return model.inlineEdit.inlineCompletion.identity.id;
    }
    determineView(model, reader, diff, newText) {
        // Check if we can use the previous view if it is the same InlineCompletion as previously shown
        const inlineEdit = model.inlineEdit;
        const canUseCache = this._previousView?.id === this.getCacheId(model) && !model.displayLocation?.jumpToEdit;
        const reconsiderViewEditorWidthChange = this._previousView?.editorWidth !== this._editorObs.layoutInfoWidth.read(reader) &&
            (this._previousView?.view === InlineCompletionViewKind.SideBySide ||
                this._previousView?.view === InlineCompletionViewKind.LineReplacement);
        if (canUseCache && !reconsiderViewEditorWidthChange) {
            return this._previousView.view;
        }
        if (model.inlineEdit.inlineCompletion instanceof InlineEditItem && model.inlineEdit.inlineCompletion.uri) {
            return InlineCompletionViewKind.Custom;
        }
        if (model.displayLocation && !model.inlineEdit.inlineCompletion.identity.jumpedTo.read(reader)) {
            return InlineCompletionViewKind.Custom;
        }
        // Determine the view based on the edit / diff
        const numOriginalLines = inlineEdit.originalLineRange.length;
        const numModifiedLines = inlineEdit.modifiedLineRange.length;
        const inner = diff.flatMap(d => d.innerChanges ?? []);
        const isSingleInnerEdit = inner.length === 1;
        if (!model.isInDiffEditor) {
            if (isSingleInnerEdit
                && this._useCodeShifting.read(reader) !== 'never'
                && isSingleLineInsertion(diff)) {
                if (isSingleLineInsertionAfterPosition(diff, inlineEdit.cursorPosition)) {
                    return InlineCompletionViewKind.InsertionInline;
                }
                // If we have a single line insertion before the cursor position, we do not want to move the cursor by inserting
                // the suggestion inline. Use a line replacement view instead. Do not use word replacement view.
                return InlineCompletionViewKind.LineReplacement;
            }
            if (isDeletion(inner, inlineEdit, newText)) {
                return InlineCompletionViewKind.Deletion;
            }
            if (isSingleMultiLineInsertion(diff) && this._useCodeShifting.read(reader) === 'always') {
                return InlineCompletionViewKind.InsertionMultiLine;
            }
            const allInnerChangesNotTooLong = inner.every(m => TextLength.ofRange(m.originalRange).columnCount < InlineEditsWordReplacementView.MAX_LENGTH && TextLength.ofRange(m.modifiedRange).columnCount < InlineEditsWordReplacementView.MAX_LENGTH);
            if (allInnerChangesNotTooLong && isSingleInnerEdit && numOriginalLines === 1 && numModifiedLines === 1) {
                // Do not show indentation changes with word replacement view
                const modifiedText = inner.map(m => newText.getValueOfRange(m.modifiedRange));
                const originalText = inner.map(m => model.inlineEdit.originalText.getValueOfRange(m.originalRange));
                if (!modifiedText.some(v => v.includes('\t')) && !originalText.some(v => v.includes('\t'))) {
                    // Make sure there is no insertion, even if we grow them
                    if (!inner.some(m => m.originalRange.isEmpty()) ||
                        !growEditsUntilWhitespace(inner.map(m => new TextReplacement(m.originalRange, '')), inlineEdit.originalText).some(e => e.range.isEmpty() && TextLength.ofRange(e.range).columnCount < InlineEditsWordReplacementView.MAX_LENGTH)) {
                        return InlineCompletionViewKind.WordReplacements;
                    }
                }
            }
        }
        if (numOriginalLines > 0 && numModifiedLines > 0) {
            if (numOriginalLines === 1 && numModifiedLines === 1 && !model.isInDiffEditor /* prefer side by side in diff editor */) {
                return InlineCompletionViewKind.LineReplacement;
            }
            if (this._renderSideBySide.read(reader) !== 'never' && InlineEditsSideBySideView.fitsInsideViewport(this._editor, this._previewTextModel, inlineEdit, reader)) {
                return InlineCompletionViewKind.SideBySide;
            }
            return InlineCompletionViewKind.LineReplacement;
        }
        if (model.isInDiffEditor) {
            if (isDeletion(inner, inlineEdit, newText)) {
                return InlineCompletionViewKind.Deletion;
            }
            if (isSingleMultiLineInsertion(diff) && this._useCodeShifting.read(reader) === 'always') {
                return InlineCompletionViewKind.InsertionMultiLine;
            }
        }
        return InlineCompletionViewKind.SideBySide;
    }
    determineRenderState(model, reader, diff, newText) {
        const inlineEdit = model.inlineEdit;
        let view = this.determineView(model, reader, diff, newText);
        if (this._willRenderAboveCursor(reader, inlineEdit, view)) {
            switch (view) {
                case InlineCompletionViewKind.LineReplacement:
                case InlineCompletionViewKind.WordReplacements:
                    view = InlineCompletionViewKind.SideBySide;
                    break;
            }
        }
        this._previousView = { id: this.getCacheId(model), view, editorWidth: this._editor.getLayoutInfo().width, timestamp: Date.now() };
        const inner = diff.flatMap(d => d.innerChanges ?? []);
        const textModel = this._editor.getModel();
        const stringChanges = inner.map(m => ({
            originalRange: m.originalRange,
            modifiedRange: m.modifiedRange,
            original: textModel.getValueInRange(m.originalRange),
            modified: newText.getValueOfRange(m.modifiedRange)
        }));
        const cursorPosition = inlineEdit.cursorPosition;
        const startsWithEOL = stringChanges.length === 0 ? false : stringChanges[0].modified.startsWith(textModel.getEOL());
        const viewData = {
            cursorColumnDistance: inlineEdit.edit.replacements.length === 0 ? 0 : inlineEdit.edit.replacements[0].range.getStartPosition().column - cursorPosition.column,
            cursorLineDistance: inlineEdit.lineEdit.lineRange.startLineNumber - cursorPosition.lineNumber + (startsWithEOL && inlineEdit.lineEdit.lineRange.startLineNumber >= cursorPosition.lineNumber ? 1 : 0),
            lineCountOriginal: inlineEdit.lineEdit.lineRange.length,
            lineCountModified: inlineEdit.lineEdit.newLines.length,
            characterCountOriginal: stringChanges.reduce((acc, r) => acc + r.original.length, 0),
            characterCountModified: stringChanges.reduce((acc, r) => acc + r.modified.length, 0),
            disjointReplacements: stringChanges.length,
            sameShapeReplacements: stringChanges.every(r => r.original === stringChanges[0].original && r.modified === stringChanges[0].modified),
        };
        switch (view) {
            case InlineCompletionViewKind.InsertionInline: return { kind: InlineCompletionViewKind.InsertionInline, viewData };
            case InlineCompletionViewKind.SideBySide: return { kind: InlineCompletionViewKind.SideBySide, viewData };
            case InlineCompletionViewKind.Collapsed: return { kind: InlineCompletionViewKind.Collapsed, viewData };
            case InlineCompletionViewKind.Custom: return { kind: InlineCompletionViewKind.Custom, displayLocation: model.displayLocation, viewData };
        }
        if (view === InlineCompletionViewKind.Deletion) {
            return {
                kind: InlineCompletionViewKind.Deletion,
                originalRange: inlineEdit.originalLineRange,
                deletions: inner.map(m => m.originalRange),
                viewData,
            };
        }
        if (view === InlineCompletionViewKind.InsertionMultiLine) {
            const change = inner[0];
            return {
                kind: InlineCompletionViewKind.InsertionMultiLine,
                lineNumber: change.originalRange.startLineNumber,
                column: change.originalRange.startColumn,
                text: newText.getValueOfRange(change.modifiedRange),
                viewData,
            };
        }
        const replacements = stringChanges.map(m => new TextReplacement(m.originalRange, m.modified));
        if (replacements.length === 0) {
            return undefined;
        }
        if (view === InlineCompletionViewKind.WordReplacements) {
            let grownEdits = growEditsToEntireWord(replacements, inlineEdit.originalText);
            if (grownEdits.some(e => e.range.isEmpty())) {
                grownEdits = growEditsUntilWhitespace(replacements, inlineEdit.originalText);
            }
            return {
                kind: InlineCompletionViewKind.WordReplacements,
                replacements: grownEdits,
                viewData,
            };
        }
        if (view === InlineCompletionViewKind.LineReplacement) {
            return {
                kind: InlineCompletionViewKind.LineReplacement,
                originalRange: inlineEdit.originalLineRange,
                modifiedRange: inlineEdit.modifiedLineRange,
                modifiedLines: inlineEdit.modifiedLineRange.mapToLineArray(line => newText.getLineAt(line)),
                replacements: inner.map(m => ({ originalRange: m.originalRange, modifiedRange: m.modifiedRange })),
                viewData,
            };
        }
        return undefined;
    }
    _willRenderAboveCursor(reader, inlineEdit, view) {
        const useCodeShifting = this._useCodeShifting.read(reader);
        if (useCodeShifting === 'always') {
            return false;
        }
        for (const cursorPosition of inlineEdit.multiCursorPositions) {
            if (view === InlineCompletionViewKind.WordReplacements &&
                cursorPosition.lineNumber === inlineEdit.originalLineRange.startLineNumber + 1) {
                return true;
            }
            if (view === InlineCompletionViewKind.LineReplacement &&
                cursorPosition.lineNumber >= inlineEdit.originalLineRange.endLineNumberExclusive &&
                cursorPosition.lineNumber < inlineEdit.modifiedLineRange.endLineNumberExclusive + inlineEdit.modifiedLineRange.length) {
                return true;
            }
        }
        return false;
    }
    _viewHasBeenShownLongerThan(durationMs) {
        const viewCreationTime = this._previousView?.timestamp;
        if (!viewCreationTime) {
            throw new BugIndicatingError('viewHasBeenShownLongThan called before a view has been shown');
        }
        const currentTime = Date.now();
        return (currentTime - viewCreationTime) >= durationMs;
    }
};
InlineEditsView = __decorate([
    __param(5, IInstantiationService)
], InlineEditsView);
function isSingleLineInsertion(diff) {
    return diff.every(m => m.innerChanges.every(r => isWordInsertion(r)));
    function isWordInsertion(r) {
        if (!r.originalRange.isEmpty()) {
            return false;
        }
        const isInsertionWithinLine = r.modifiedRange.startLineNumber === r.modifiedRange.endLineNumber;
        if (!isInsertionWithinLine) {
            return false;
        }
        return true;
    }
}
function isSingleLineInsertionAfterPosition(diff, position) {
    if (!position) {
        return false;
    }
    if (!isSingleLineInsertion(diff)) {
        return false;
    }
    const pos = position;
    return diff.every(m => m.innerChanges.every(r => isStableWordInsertion(r)));
    function isStableWordInsertion(r) {
        const insertPosition = r.originalRange.getStartPosition();
        if (pos.isBeforeOrEqual(insertPosition)) {
            return true;
        }
        if (insertPosition.lineNumber < pos.lineNumber) {
            return true;
        }
        return false;
    }
}
function isSingleMultiLineInsertion(diff) {
    const inner = diff.flatMap(d => d.innerChanges ?? []);
    if (inner.length !== 1) {
        return false;
    }
    const change = inner[0];
    if (!change.originalRange.isEmpty()) {
        return false;
    }
    if (change.modifiedRange.startLineNumber === change.modifiedRange.endLineNumber) {
        return false;
    }
    return true;
}
function isDeletion(inner, inlineEdit, newText) {
    const innerValues = inner.map(m => ({ original: inlineEdit.originalText.getValueOfRange(m.originalRange), modified: newText.getValueOfRange(m.modifiedRange) }));
    return innerValues.every(({ original, modified }) => modified.trim() === '' && original.length > 0 && (original.length > modified.length || original.trim() !== ''));
}
function growEditsToEntireWord(replacements, originalText) {
    return _growEdits(replacements, originalText, (char) => /^[a-zA-Z]$/.test(char));
}
function growEditsUntilWhitespace(replacements, originalText) {
    return _growEdits(replacements, originalText, (char) => !(/^\s$/.test(char)));
}
function _growEdits(replacements, originalText, fn) {
    const result = [];
    replacements.sort((a, b) => Range.compareRangesUsingStarts(a.range, b.range));
    for (const edit of replacements) {
        let startIndex = edit.range.startColumn - 1;
        let endIndex = edit.range.endColumn - 2;
        let prefix = '';
        let suffix = '';
        const startLineContent = originalText.getLineAt(edit.range.startLineNumber);
        const endLineContent = originalText.getLineAt(edit.range.endLineNumber);
        if (isIncluded(startLineContent[startIndex])) {
            // grow to the left
            while (isIncluded(startLineContent[startIndex - 1])) {
                prefix = startLineContent[startIndex - 1] + prefix;
                startIndex--;
            }
        }
        if (isIncluded(endLineContent[endIndex]) || endIndex < startIndex) {
            // grow to the right
            while (isIncluded(endLineContent[endIndex + 1])) {
                suffix += endLineContent[endIndex + 1];
                endIndex++;
            }
        }
        // create new edit and merge together if they are touching
        let newEdit = new TextReplacement(new Range(edit.range.startLineNumber, startIndex + 1, edit.range.endLineNumber, endIndex + 2), prefix + edit.text + suffix);
        if (result.length > 0 && Range.areIntersectingOrTouching(result[result.length - 1].range, newEdit.range)) {
            newEdit = TextReplacement.joinReplacements([result.pop(), newEdit], originalText);
        }
        result.push(newEdit);
    }
    function isIncluded(c) {
        if (c === undefined) {
            return false;
        }
        return fn(c);
    }
    return result;
}
function getGhostTextTopOffset(ghostTextIndicator, editor) {
    const replacements = ghostTextIndicator.model.inlineEdit.edit.replacements;
    if (replacements.length !== 1) {
        return 0;
    }
    const textModel = editor.getModel();
    if (!textModel) {
        return 0;
    }
    const EOL = textModel.getEOL();
    const replacement = replacements[0];
    if (replacement.range.isEmpty() && replacement.text.startsWith(EOL)) {
        const lineHeight = editor.getLineHeightForPosition(replacement.range.getStartPosition());
        return countPrefixRepeats(replacement.text, EOL) * lineHeight;
    }
    return 0;
}
function countPrefixRepeats(str, prefix) {
    if (!prefix.length) {
        return 0;
    }
    let count = 0;
    let i = 0;
    while (str.startsWith(prefix, i)) {
        count++;
        i += prefix.length;
    }
    return count;
}

export { InlineEditsView };
