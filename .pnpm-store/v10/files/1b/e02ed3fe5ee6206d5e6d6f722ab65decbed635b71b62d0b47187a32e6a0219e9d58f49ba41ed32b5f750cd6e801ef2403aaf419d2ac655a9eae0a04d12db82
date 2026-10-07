import { RawContextKey } from '../../../../../platform/contextkey/common/contextkey.js';
import { localize } from '../../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InlineCompletionContextKeys {
    static { this.inlineSuggestionVisible = new RawContextKey('inlineSuggestionVisible', false, localize(1192, "Whether an inline suggestion is visible")); }
    static { this.inlineSuggestionHasIndentation = new RawContextKey('inlineSuggestionHasIndentation', false, localize(1193, "Whether the inline suggestion starts with whitespace")); }
    static { this.inlineSuggestionHasIndentationLessThanTabSize = new RawContextKey('inlineSuggestionHasIndentationLessThanTabSize', true, localize(1194, "Whether the inline suggestion starts with whitespace that is less than what would be inserted by tab")); }
    static { this.suppressSuggestions = new RawContextKey('inlineSuggestionSuppressSuggestions', undefined, localize(1195, "Whether suggestions should be suppressed for the current suggestion")); }
    static { this.cursorBeforeGhostText = new RawContextKey('cursorBeforeGhostText', false, localize(1196, "Whether the cursor is at ghost text")); }
    static { this.cursorInIndentation = new RawContextKey('cursorInIndentation', false, localize(1197, "Whether the cursor is in indentation")); }
    static { this.hasSelection = new RawContextKey('editor.hasSelection', false, localize(1198, "Whether the editor has a selection")); }
    static { this.cursorAtInlineEdit = new RawContextKey('cursorAtInlineEdit', false, localize(1199, "Whether the cursor is at an inline edit")); }
    static { this.inlineEditVisible = new RawContextKey('inlineEditIsVisible', false, localize(1200, "Whether an inline edit is visible")); }
    static { this.tabShouldJumpToInlineEdit = new RawContextKey('tabShouldJumpToInlineEdit', false, localize(1201, "Whether tab should jump to an inline edit.")); }
    static { this.tabShouldAcceptInlineEdit = new RawContextKey('tabShouldAcceptInlineEdit', false, localize(1202, "Whether tab should accept the inline edit.")); }
    static { this.inInlineEditsPreviewEditor = new RawContextKey('inInlineEditsPreviewEditor', true, localize(1203, "Whether the current code editor is showing an inline edits preview")); }
}

export { InlineCompletionContextKeys };
