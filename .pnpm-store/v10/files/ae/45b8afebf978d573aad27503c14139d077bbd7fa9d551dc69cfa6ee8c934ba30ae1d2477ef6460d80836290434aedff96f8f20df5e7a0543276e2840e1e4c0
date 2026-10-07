import { createSingleCallFunction } from '../../../../base/common/functional.js';
import { DisposableStore, MutableDisposable, toDisposable } from '../../../../base/common/lifecycle.js';
import { getCodeEditor, isDiffEditor } from '../../../browser/editorBrowser.js';
import { OverviewRulerLane } from '../../../common/model.js';
import { overviewRulerRangeHighlight } from '../../../common/core/editorColorRegistry.js';
import { themeColorFromId } from '../../../../platform/theme/common/themeService.js';
import { status } from '../../../../base/browser/ui/aria/aria.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A reusable quick access provider for the editor with support
 * for adding decorations for navigating in the currently active file
 * (for example "Go to line", "Go to symbol").
 */
class AbstractEditorNavigationQuickAccessProvider {
    constructor(options) {
        this.options = options;
        //#endregion
        //#region Decorations Utils
        this.rangeHighlightDecorationId = undefined;
    }
    //#region Provider methods
    provide(picker, token, runOptions) {
        const disposables = new DisposableStore();
        // Apply options if any
        picker.canAcceptInBackground = !!this.options?.canAcceptInBackground;
        // Disable filtering & sorting, we control the results
        picker.matchOnLabel = picker.matchOnDescription = picker.matchOnDetail = picker.sortByLabel = false;
        // Provide based on current active editor
        const pickerDisposable = disposables.add(new MutableDisposable());
        pickerDisposable.value = this.doProvide(picker, token, runOptions);
        // Re-create whenever the active editor changes
        disposables.add(this.onDidActiveTextEditorControlChange(() => {
            // Clear old
            pickerDisposable.value = undefined;
            // Add new
            pickerDisposable.value = this.doProvide(picker, token);
        }));
        return disposables;
    }
    doProvide(picker, token, runOptions) {
        const disposables = new DisposableStore();
        // With text control
        const editor = this.activeTextEditorControl;
        if (editor && this.canProvideWithTextEditor(editor)) {
            const context = { editor };
            // Restore any view state if this picker was closed
            // without actually going to a line
            const codeEditor = getCodeEditor(editor);
            if (codeEditor) {
                // Remember view state and update it when the cursor position
                // changes even later because it could be that the user has
                // configured quick access to remain open when focus is lost and
                // we always want to restore the current location.
                let lastKnownEditorViewState = editor.saveViewState() ?? undefined;
                disposables.add(codeEditor.onDidChangeCursorPosition(() => {
                    lastKnownEditorViewState = editor.saveViewState() ?? undefined;
                }));
                context.restoreViewState = () => {
                    if (lastKnownEditorViewState && editor === this.activeTextEditorControl) {
                        editor.restoreViewState(lastKnownEditorViewState);
                    }
                };
                disposables.add(createSingleCallFunction(token.onCancellationRequested)(() => context.restoreViewState?.()));
            }
            // Clean up decorations on dispose
            disposables.add(toDisposable(() => this.clearDecorations(editor)));
            // Ask subclass for entries
            disposables.add(this.provideWithTextEditor(context, picker, token, runOptions));
        }
        // Without text control
        else {
            disposables.add(this.provideWithoutTextEditor(picker, token));
        }
        return disposables;
    }
    /**
     * Subclasses to implement if they can operate on the text editor.
     */
    canProvideWithTextEditor(editor) {
        return true;
    }
    gotoLocation({ editor }, options) {
        editor.setSelection(options.range, "code.jump" /* TextEditorSelectionSource.JUMP */);
        editor.revealRangeInCenter(options.range, 0 /* ScrollType.Smooth */);
        if (!options.preserveFocus) {
            editor.focus();
        }
        const model = editor.getModel();
        if (model && 'getLineContent' in model) {
            status(`${model.getLineContent(options.range.startLineNumber)}`);
        }
    }
    getModel(editor) {
        return isDiffEditor(editor) ?
            editor.getModel()?.modified :
            editor.getModel();
    }
    addDecorations(editor, range) {
        editor.changeDecorations(changeAccessor => {
            // Reset old decorations if any
            const deleteDecorations = [];
            if (this.rangeHighlightDecorationId) {
                deleteDecorations.push(this.rangeHighlightDecorationId.overviewRulerDecorationId);
                deleteDecorations.push(this.rangeHighlightDecorationId.rangeHighlightId);
                this.rangeHighlightDecorationId = undefined;
            }
            // Add new decorations for the range
            const newDecorations = [
                // highlight the entire line on the range
                {
                    range,
                    options: {
                        description: 'quick-access-range-highlight',
                        className: 'rangeHighlight',
                        isWholeLine: true
                    }
                },
                // also add overview ruler highlight
                {
                    range,
                    options: {
                        description: 'quick-access-range-highlight-overview',
                        overviewRuler: {
                            color: themeColorFromId(overviewRulerRangeHighlight),
                            position: OverviewRulerLane.Full
                        }
                    }
                }
            ];
            const [rangeHighlightId, overviewRulerDecorationId] = changeAccessor.deltaDecorations(deleteDecorations, newDecorations);
            this.rangeHighlightDecorationId = { rangeHighlightId, overviewRulerDecorationId };
        });
    }
    clearDecorations(editor) {
        const rangeHighlightDecorationId = this.rangeHighlightDecorationId;
        if (rangeHighlightDecorationId) {
            editor.changeDecorations(changeAccessor => {
                changeAccessor.deltaDecorations([
                    rangeHighlightDecorationId.overviewRulerDecorationId,
                    rangeHighlightDecorationId.rangeHighlightId
                ], []);
            });
            this.rangeHighlightDecorationId = undefined;
        }
    }
}

export { AbstractEditorNavigationQuickAccessProvider };
