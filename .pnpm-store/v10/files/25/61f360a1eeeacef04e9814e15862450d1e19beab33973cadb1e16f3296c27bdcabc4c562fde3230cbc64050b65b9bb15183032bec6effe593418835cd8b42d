import { localize } from '../../nls.js';
import { RawContextKey } from '../../platform/contextkey/common/contextkey.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var EditorContextKeys;
(function (EditorContextKeys) {
    EditorContextKeys.editorSimpleInput = new RawContextKey('editorSimpleInput', false, true);
    /**
     * A context key that is set when the editor's text has focus (cursor is blinking).
     * Is false when focus is in simple editor widgets (repl input, scm commit input).
     */
    EditorContextKeys.editorTextFocus = new RawContextKey('editorTextFocus', false, localize(681, "Whether the editor text has focus (cursor is blinking)"));
    /**
     * A context key that is set when the editor's text or an editor's widget has focus.
     */
    EditorContextKeys.focus = new RawContextKey('editorFocus', false, localize(682, "Whether the editor or an editor widget has focus (e.g. focus is in the find widget)"));
    /**
     * A context key that is set when any editor input has focus (regular editor, repl input...).
     */
    EditorContextKeys.textInputFocus = new RawContextKey('textInputFocus', false, localize(683, "Whether an editor or a rich text input has focus (cursor is blinking)"));
    EditorContextKeys.readOnly = new RawContextKey('editorReadonly', false, localize(684, "Whether the editor is read-only"));
    EditorContextKeys.inDiffEditor = new RawContextKey('inDiffEditor', false, localize(685, "Whether the context is a diff editor"));
    EditorContextKeys.isEmbeddedDiffEditor = new RawContextKey('isEmbeddedDiffEditor', false, localize(686, "Whether the context is an embedded diff editor"));
    EditorContextKeys.inMultiDiffEditor = new RawContextKey('inMultiDiffEditor', false, localize(687, "Whether the context is a multi diff editor"));
    EditorContextKeys.multiDiffEditorAllCollapsed = new RawContextKey('multiDiffEditorAllCollapsed', undefined, localize(688, "Whether all files in multi diff editor are collapsed"));
    EditorContextKeys.hasChanges = new RawContextKey('diffEditorHasChanges', false, localize(689, "Whether the diff editor has changes"));
    EditorContextKeys.comparingMovedCode = new RawContextKey('comparingMovedCode', false, localize(690, "Whether a moved code block is selected for comparison"));
    EditorContextKeys.accessibleDiffViewerVisible = new RawContextKey('accessibleDiffViewerVisible', false, localize(691, "Whether the accessible diff viewer is visible"));
    EditorContextKeys.diffEditorRenderSideBySideInlineBreakpointReached = new RawContextKey('diffEditorRenderSideBySideInlineBreakpointReached', false, localize(692, "Whether the diff editor render side by side inline breakpoint is reached"));
    EditorContextKeys.diffEditorInlineMode = new RawContextKey('diffEditorInlineMode', false, localize(693, "Whether inline mode is active"));
    EditorContextKeys.diffEditorOriginalWritable = new RawContextKey('diffEditorOriginalWritable', false, localize(694, "Whether modified is writable in the diff editor"));
    EditorContextKeys.diffEditorModifiedWritable = new RawContextKey('diffEditorModifiedWritable', false, localize(695, "Whether modified is writable in the diff editor"));
    EditorContextKeys.diffEditorOriginalUri = new RawContextKey('diffEditorOriginalUri', '', localize(696, "The uri of the original document"));
    EditorContextKeys.diffEditorModifiedUri = new RawContextKey('diffEditorModifiedUri', '', localize(697, "The uri of the modified document"));
    EditorContextKeys.columnSelection = new RawContextKey('editorColumnSelection', false, localize(698, "Whether `editor.columnSelection` is enabled"));
    EditorContextKeys.writable = EditorContextKeys.readOnly.toNegated();
    EditorContextKeys.hasNonEmptySelection = new RawContextKey('editorHasSelection', false, localize(699, "Whether the editor has text selected"));
    EditorContextKeys.hasOnlyEmptySelection = EditorContextKeys.hasNonEmptySelection.toNegated();
    EditorContextKeys.hasMultipleSelections = new RawContextKey('editorHasMultipleSelections', false, localize(700, "Whether the editor has multiple selections"));
    EditorContextKeys.hasSingleSelection = EditorContextKeys.hasMultipleSelections.toNegated();
    EditorContextKeys.tabMovesFocus = new RawContextKey('editorTabMovesFocus', false, localize(701, "Whether `Tab` will move focus out of the editor"));
    EditorContextKeys.tabDoesNotMoveFocus = EditorContextKeys.tabMovesFocus.toNegated();
    EditorContextKeys.isInEmbeddedEditor = new RawContextKey('isInEmbeddedEditor', false, true);
    EditorContextKeys.canUndo = new RawContextKey('canUndo', false, true);
    EditorContextKeys.canRedo = new RawContextKey('canRedo', false, true);
    EditorContextKeys.hoverVisible = new RawContextKey('editorHoverVisible', false, localize(702, "Whether the editor hover is visible"));
    EditorContextKeys.hoverFocused = new RawContextKey('editorHoverFocused', false, localize(703, "Whether the editor hover is focused"));
    EditorContextKeys.stickyScrollFocused = new RawContextKey('stickyScrollFocused', false, localize(704, "Whether the sticky scroll is focused"));
    EditorContextKeys.stickyScrollVisible = new RawContextKey('stickyScrollVisible', false, localize(705, "Whether the sticky scroll is visible"));
    EditorContextKeys.standaloneColorPickerVisible = new RawContextKey('standaloneColorPickerVisible', false, localize(706, "Whether the standalone color picker is visible"));
    EditorContextKeys.standaloneColorPickerFocused = new RawContextKey('standaloneColorPickerFocused', false, localize(707, "Whether the standalone color picker is focused"));
    /**
     * A context key that is set when an editor is part of a larger editor, like notebooks or
     * (future) a diff editor
     */
    EditorContextKeys.inCompositeEditor = new RawContextKey('inCompositeEditor', undefined, localize(708, "Whether the editor is part of a larger editor (e.g. notebooks)"));
    EditorContextKeys.notInCompositeEditor = EditorContextKeys.inCompositeEditor.toNegated();
    // -- mode context keys
    EditorContextKeys.languageId = new RawContextKey('editorLangId', '', localize(709, "The language identifier of the editor"));
    EditorContextKeys.hasCompletionItemProvider = new RawContextKey('editorHasCompletionItemProvider', false, localize(710, "Whether the editor has a completion item provider"));
    EditorContextKeys.hasCodeActionsProvider = new RawContextKey('editorHasCodeActionsProvider', false, localize(711, "Whether the editor has a code actions provider"));
    EditorContextKeys.hasCodeLensProvider = new RawContextKey('editorHasCodeLensProvider', false, localize(712, "Whether the editor has a code lens provider"));
    EditorContextKeys.hasDefinitionProvider = new RawContextKey('editorHasDefinitionProvider', false, localize(713, "Whether the editor has a definition provider"));
    EditorContextKeys.hasDeclarationProvider = new RawContextKey('editorHasDeclarationProvider', false, localize(714, "Whether the editor has a declaration provider"));
    EditorContextKeys.hasImplementationProvider = new RawContextKey('editorHasImplementationProvider', false, localize(715, "Whether the editor has an implementation provider"));
    EditorContextKeys.hasTypeDefinitionProvider = new RawContextKey('editorHasTypeDefinitionProvider', false, localize(716, "Whether the editor has a type definition provider"));
    EditorContextKeys.hasHoverProvider = new RawContextKey('editorHasHoverProvider', false, localize(717, "Whether the editor has a hover provider"));
    EditorContextKeys.hasDocumentHighlightProvider = new RawContextKey('editorHasDocumentHighlightProvider', false, localize(718, "Whether the editor has a document highlight provider"));
    EditorContextKeys.hasDocumentSymbolProvider = new RawContextKey('editorHasDocumentSymbolProvider', false, localize(719, "Whether the editor has a document symbol provider"));
    EditorContextKeys.hasReferenceProvider = new RawContextKey('editorHasReferenceProvider', false, localize(720, "Whether the editor has a reference provider"));
    EditorContextKeys.hasRenameProvider = new RawContextKey('editorHasRenameProvider', false, localize(721, "Whether the editor has a rename provider"));
    EditorContextKeys.hasSignatureHelpProvider = new RawContextKey('editorHasSignatureHelpProvider', false, localize(722, "Whether the editor has a signature help provider"));
    EditorContextKeys.hasInlayHintsProvider = new RawContextKey('editorHasInlayHintsProvider', false, localize(723, "Whether the editor has an inline hints provider"));
    // -- mode context keys: formatting
    EditorContextKeys.hasDocumentFormattingProvider = new RawContextKey('editorHasDocumentFormattingProvider', false, localize(724, "Whether the editor has a document formatting provider"));
    EditorContextKeys.hasDocumentSelectionFormattingProvider = new RawContextKey('editorHasDocumentSelectionFormattingProvider', false, localize(725, "Whether the editor has a document selection formatting provider"));
    EditorContextKeys.hasMultipleDocumentFormattingProvider = new RawContextKey('editorHasMultipleDocumentFormattingProvider', false, localize(726, "Whether the editor has multiple document formatting providers"));
    EditorContextKeys.hasMultipleDocumentSelectionFormattingProvider = new RawContextKey('editorHasMultipleDocumentSelectionFormattingProvider', false, localize(727, "Whether the editor has multiple document selection formatting providers"));
})(EditorContextKeys || (EditorContextKeys = {}));

export { EditorContextKeys };
