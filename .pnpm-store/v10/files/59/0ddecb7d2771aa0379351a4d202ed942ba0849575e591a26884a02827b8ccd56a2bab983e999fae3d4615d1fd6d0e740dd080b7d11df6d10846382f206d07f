import { compareBy, numberComparator } from '../../../../../base/common/arrays.js';
import { findFirstMax } from '../../../../../base/common/arraysFind.js';
import { Emitter, Event } from '../../../../../base/common/event.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import { Position } from '../../../../common/core/position.js';
import { Range } from '../../../../common/core/range.js';
import { TextReplacement } from '../../../../common/core/edits/textEdit.js';
import { SelectedSuggestionInfo } from '../../../../common/languages.js';
import { singleTextRemoveCommonPrefix, singleTextEditAugments } from './singleTextEditHelpers.js';
import { SnippetParser } from '../../../snippet/browser/snippetParser.js';
import { SnippetSession } from '../../../snippet/browser/snippetSession.js';
import { SuggestController } from '../../../suggest/browser/suggestController.js';
import '../../../../../base/common/observableInternal/index.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SuggestWidgetAdaptor extends Disposable {
    get selectedItem() {
        return this._currentSuggestItemInfo;
    }
    constructor(editor, suggestControllerPreselector, onWillAccept) {
        super();
        this.editor = editor;
        this.suggestControllerPreselector = suggestControllerPreselector;
        this.onWillAccept = onWillAccept;
        this.isSuggestWidgetVisible = false;
        this.isShiftKeyPressed = false;
        this._isActive = false;
        this._currentSuggestItemInfo = undefined;
        this._onDidSelectedItemChange = this._register(new Emitter());
        this.onDidSelectedItemChange = this._onDidSelectedItemChange.event;
        // See the command acceptAlternativeSelectedSuggestion that is bound to shift+tab
        this._register(editor.onKeyDown(e => {
            if (e.shiftKey && !this.isShiftKeyPressed) {
                this.isShiftKeyPressed = true;
                this.update(this._isActive);
            }
        }));
        this._register(editor.onKeyUp(e => {
            if (e.shiftKey && this.isShiftKeyPressed) {
                this.isShiftKeyPressed = false;
                this.update(this._isActive);
            }
        }));
        const suggestController = SuggestController.get(this.editor);
        if (suggestController) {
            this._register(suggestController.registerSelector({
                priority: 100,
                select: (model, pos, suggestItems) => {
                    const textModel = this.editor.getModel();
                    if (!textModel) {
                        // Should not happen
                        return -1;
                    }
                    const i = this.suggestControllerPreselector();
                    const itemToPreselect = i ? singleTextRemoveCommonPrefix(i, textModel) : undefined;
                    if (!itemToPreselect) {
                        return -1;
                    }
                    const position = Position.lift(pos);
                    const candidates = suggestItems
                        .map((suggestItem, index) => {
                        const suggestItemInfo = SuggestItemInfo.fromSuggestion(suggestController, textModel, position, suggestItem, this.isShiftKeyPressed);
                        const suggestItemTextEdit = singleTextRemoveCommonPrefix(suggestItemInfo.getSingleTextEdit(), textModel);
                        const valid = singleTextEditAugments(itemToPreselect, suggestItemTextEdit);
                        return { index, valid, prefixLength: suggestItemTextEdit.text.length, suggestItem };
                    })
                        .filter(item => item && item.valid && item.prefixLength > 0);
                    const result = findFirstMax(candidates, compareBy(s => s.prefixLength, numberComparator));
                    return result ? result.index : -1;
                }
            }));
            let isBoundToSuggestWidget = false;
            const bindToSuggestWidget = () => {
                if (isBoundToSuggestWidget) {
                    return;
                }
                isBoundToSuggestWidget = true;
                this._register(suggestController.widget.value.onDidShow(() => {
                    this.isSuggestWidgetVisible = true;
                    this.update(true);
                }));
                this._register(suggestController.widget.value.onDidHide(() => {
                    this.isSuggestWidgetVisible = false;
                    this.update(false);
                }));
                this._register(suggestController.widget.value.onDidFocus(() => {
                    this.isSuggestWidgetVisible = true;
                    this.update(true);
                }));
            };
            this._register(Event.once(suggestController.model.onDidTrigger)(e => {
                bindToSuggestWidget();
            }));
            this._register(suggestController.onWillInsertSuggestItem(e => {
                const position = this.editor.getPosition();
                const model = this.editor.getModel();
                if (!position || !model) {
                    return undefined;
                }
                const suggestItemInfo = SuggestItemInfo.fromSuggestion(suggestController, model, position, e.item, this.isShiftKeyPressed);
                this.onWillAccept(suggestItemInfo);
            }));
        }
        this.update(this._isActive);
    }
    update(newActive) {
        const newInlineCompletion = this.getSuggestItemInfo();
        if (this._isActive !== newActive || !suggestItemInfoEquals(this._currentSuggestItemInfo, newInlineCompletion)) {
            this._isActive = newActive;
            this._currentSuggestItemInfo = newInlineCompletion;
            this._onDidSelectedItemChange.fire();
        }
    }
    getSuggestItemInfo() {
        const suggestController = SuggestController.get(this.editor);
        if (!suggestController || !this.isSuggestWidgetVisible) {
            return undefined;
        }
        const focusedItem = suggestController.widget.value.getFocusedItem();
        const position = this.editor.getPosition();
        const model = this.editor.getModel();
        if (!focusedItem || !position || !model) {
            return undefined;
        }
        return SuggestItemInfo.fromSuggestion(suggestController, model, position, focusedItem.item, this.isShiftKeyPressed);
    }
    stopForceRenderingAbove() {
        const suggestController = SuggestController.get(this.editor);
        suggestController?.stopForceRenderingAbove();
    }
    forceRenderingAbove() {
        const suggestController = SuggestController.get(this.editor);
        suggestController?.forceRenderingAbove();
    }
}
class SuggestItemInfo {
    static fromSuggestion(suggestController, model, position, item, toggleMode) {
        let { insertText } = item.completion;
        let isSnippetText = false;
        if (item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */) {
            const snippet = new SnippetParser().parse(insertText);
            if (snippet.children.length < 100) {
                // Adjust whitespace is expensive.
                SnippetSession.adjustWhitespace(model, position, true, snippet);
            }
            insertText = snippet.toString();
            isSnippetText = true;
        }
        const info = suggestController.getOverwriteInfo(item, toggleMode);
        return new SuggestItemInfo(Range.fromPositions(position.delta(0, -info.overwriteBefore), position.delta(0, Math.max(info.overwriteAfter, 0))), insertText, item.completion.kind, isSnippetText, item.container.incomplete ?? false);
    }
    constructor(range, insertText, completionItemKind, isSnippetText, listIncomplete) {
        this.range = range;
        this.insertText = insertText;
        this.completionItemKind = completionItemKind;
        this.isSnippetText = isSnippetText;
        this.listIncomplete = listIncomplete;
    }
    equals(other) {
        return this.range.equalsRange(other.range)
            && this.insertText === other.insertText
            && this.completionItemKind === other.completionItemKind
            && this.isSnippetText === other.isSnippetText;
    }
    toSelectedSuggestionInfo() {
        return new SelectedSuggestionInfo(this.range, this.insertText, this.completionItemKind, this.isSnippetText);
    }
    getSingleTextEdit() {
        return new TextReplacement(this.range, this.insertText);
    }
}
function suggestItemInfoEquals(a, b) {
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    return a.equals(b);
}
class ObservableSuggestWidgetAdapter extends Disposable {
    constructor(_editorObs, _handleSuggestAccepted, _suggestControllerPreselector) {
        super();
        this._editorObs = _editorObs;
        this._handleSuggestAccepted = _handleSuggestAccepted;
        this._suggestControllerPreselector = _suggestControllerPreselector;
        this._suggestWidgetAdaptor = this._register(new SuggestWidgetAdaptor(this._editorObs.editor, () => {
            this._editorObs.forceUpdate();
            return this._suggestControllerPreselector();
        }, (item) => this._editorObs.forceUpdate(_tx => {
            /** @description InlineCompletionsController.handleSuggestAccepted */
            this._handleSuggestAccepted(item);
        })));
        this.selectedItem = observableFromEvent(this, cb => this._suggestWidgetAdaptor.onDidSelectedItemChange(() => {
            this._editorObs.forceUpdate(_tx => cb(undefined));
        }), () => this._suggestWidgetAdaptor.selectedItem);
    }
    stopForceRenderingAbove() {
        this._suggestWidgetAdaptor.stopForceRenderingAbove();
    }
    forceRenderingAbove() {
        this._suggestWidgetAdaptor.forceRenderingAbove();
    }
}

export { ObservableSuggestWidgetAdapter, SuggestItemInfo, SuggestWidgetAdaptor };
