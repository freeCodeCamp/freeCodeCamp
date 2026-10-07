import * as _codemirror_state from '@codemirror/state';
import { StateCommand, Facet, Transaction, StateEffect, Extension, StateField, EditorState } from '@codemirror/state';
import { KeyBinding, Command } from '@codemirror/view';

/**
An object of this type can be provided as [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt) under a `"commentTokens"`
property to configure comment syntax for a language.
*/
interface CommentTokens {
    /**
    The block comment syntax, if any. For example, for HTML
    you'd provide `{open: "<!--", close: "-->"}`.
    */
    block?: {
        open: string;
        close: string;
    };
    /**
    The line comment syntax. For example `"//"`.
    */
    line?: string;
}
/**
Comment or uncomment the current selection. Will use line comments
if available, otherwise falling back to block comments.
*/
declare const toggleComment: StateCommand;
/**
Comment or uncomment the current selection using line comments.
The line comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
declare const toggleLineComment: StateCommand;
/**
Comment the current selection using line comments.
*/
declare const lineComment: StateCommand;
/**
Uncomment the current selection using line comments.
*/
declare const lineUncomment: StateCommand;
/**
Comment or uncomment the current selection using block comments.
The block comment syntax is taken from the
[`commentTokens`](https://codemirror.net/6/docs/ref/#commands.CommentTokens) [language
data](https://codemirror.net/6/docs/ref/#state.EditorState.languageDataAt).
*/
declare const toggleBlockComment: StateCommand;
/**
Comment the current selection using block comments.
*/
declare const blockComment: StateCommand;
/**
Uncomment the current selection using block comments.
*/
declare const blockUncomment: StateCommand;
/**
Comment or uncomment the lines around the current selection using
block comments.
*/
declare const toggleBlockCommentByLine: StateCommand;

/**
Transaction annotation that will prevent that transaction from
being combined with other transactions in the undo history. Given
`"before"`, it'll prevent merging with previous transactions. With
`"after"`, subsequent transactions won't be combined with this
one. With `"full"`, the transaction is isolated on both sides.
*/
declare const isolateHistory: _codemirror_state.AnnotationType<"after" | "before" | "full">;
/**
This facet provides a way to register functions that, given a
transaction, provide a set of effects that the history should
store when inverting the transaction. This can be used to
integrate some kinds of effects in the history, so that they can
be undone (and redone again).
*/
declare const invertedEffects: Facet<(tr: Transaction) => readonly StateEffect<any>[], readonly ((tr: Transaction) => readonly StateEffect<any>[])[]>;
interface HistoryConfig {
    /**
    The minimum depth (amount of events) to store. Defaults to 100.
    */
    minDepth?: number;
    /**
    The maximum time (in milliseconds) that adjacent events can be
    apart and still be grouped together. Defaults to 500.
    */
    newGroupDelay?: number;
    /**
    By default, when close enough together in time, changes are
    joined into an existing undo event if they touch any of the
    changed ranges from that event. You can pass a custom predicate
    here to influence that logic.
    */
    joinToEvent?: (tr: Transaction, isAdjacent: boolean) => boolean;
}
/**
Create a history extension with the given configuration.
*/
declare function history(config?: HistoryConfig): Extension;
/**
The state field used to store the history data. Should probably
only be used when you want to
[serialize](https://codemirror.net/6/docs/ref/#state.EditorState.toJSON) or
[deserialize](https://codemirror.net/6/docs/ref/#state.EditorState^fromJSON) state objects in a way
that preserves history.
*/
declare const historyField: StateField<unknown>;
/**
Undo a single group of history events. Returns false if no group
was available.
*/
declare const undo: StateCommand;
/**
Redo a group of history events. Returns false if no group was
available.
*/
declare const redo: StateCommand;
/**
Undo a change or selection change.
*/
declare const undoSelection: StateCommand;
/**
Redo a change or selection change.
*/
declare const redoSelection: StateCommand;
/**
The amount of undoable change events available in a given state.
*/
declare const undoDepth: (state: EditorState) => number;
/**
The amount of redoable change events available in a given state.
*/
declare const redoDepth: (state: EditorState) => number;
/**
Default key bindings for the undo history.

- Mod-z: [`undo`](https://codemirror.net/6/docs/ref/#commands.undo).
- Mod-y (Mod-Shift-z on macOS) + Ctrl-Shift-z on Linux: [`redo`](https://codemirror.net/6/docs/ref/#commands.redo).
- Mod-u: [`undoSelection`](https://codemirror.net/6/docs/ref/#commands.undoSelection).
- Alt-u (Mod-Shift-u on macOS): [`redoSelection`](https://codemirror.net/6/docs/ref/#commands.redoSelection).
*/
declare const historyKeymap: readonly KeyBinding[];

/**
Move the selection one character to the left (which is backward in
left-to-right text, forward in right-to-left text).
*/
declare const cursorCharLeft: Command;
/**
Move the selection one character to the right.
*/
declare const cursorCharRight: Command;
/**
Move the selection one character forward.
*/
declare const cursorCharForward: Command;
/**
Move the selection one character backward.
*/
declare const cursorCharBackward: Command;
/**
Move the selection one character forward, in logical
(non-text-direction-aware) string index order.
*/
declare const cursorCharForwardLogical: StateCommand;
/**
Move the selection one character backward, in logical string index
order.
*/
declare const cursorCharBackwardLogical: StateCommand;
/**
Move the selection to the left across one group of word or
non-word (but also non-space) characters.
*/
declare const cursorGroupLeft: Command;
/**
Move the selection one group to the right.
*/
declare const cursorGroupRight: Command;
/**
Move the selection one group forward.
*/
declare const cursorGroupForward: Command;
/**
Move the selection one group backward.
*/
declare const cursorGroupBackward: Command;
/**
Move the cursor one group forward in the default Windows style,
where it moves to the start of the next group.
*/
declare const cursorGroupForwardWin: Command;
/**
Move the selection one group or camel-case subword forward.
*/
declare const cursorSubwordForward: Command;
/**
Move the selection one group or camel-case subword backward.
*/
declare const cursorSubwordBackward: Command;
/**
Move the cursor over the next syntactic element to the left.
*/
declare const cursorSyntaxLeft: Command;
/**
Move the cursor over the next syntactic element to the right.
*/
declare const cursorSyntaxRight: Command;
/**
Move the selection one line up.
*/
declare const cursorLineUp: Command;
/**
Move the selection one line down.
*/
declare const cursorLineDown: Command;
/**
Move the selection one page up.
*/
declare const cursorPageUp: Command;
/**
Move the selection one page down.
*/
declare const cursorPageDown: Command;
/**
Move the selection to the next line wrap point, or to the end of
the line if there isn't one left on this line.
*/
declare const cursorLineBoundaryForward: Command;
/**
Move the selection to previous line wrap point, or failing that to
the start of the line. If the line is indented, and the cursor
isn't already at the end of the indentation, this will move to the
end of the indentation instead of the start of the line.
*/
declare const cursorLineBoundaryBackward: Command;
/**
Move the selection one line wrap point to the left.
*/
declare const cursorLineBoundaryLeft: Command;
/**
Move the selection one line wrap point to the right.
*/
declare const cursorLineBoundaryRight: Command;
/**
Move the selection to the start of the line.
*/
declare const cursorLineStart: Command;
/**
Move the selection to the end of the line.
*/
declare const cursorLineEnd: Command;
/**
Move the selection to the bracket matching the one it is currently
on, if any.
*/
declare const cursorMatchingBracket: StateCommand;
/**
Extend the selection to the bracket matching the one the selection
head is currently on, if any.
*/
declare const selectMatchingBracket: StateCommand;
/**
Move the selection head one character to the left, while leaving
the anchor in place.
*/
declare const selectCharLeft: Command;
/**
Move the selection head one character to the right.
*/
declare const selectCharRight: Command;
/**
Move the selection head one character forward.
*/
declare const selectCharForward: Command;
/**
Move the selection head one character backward.
*/
declare const selectCharBackward: Command;
/**
Move the selection head one character forward by logical
(non-direction aware) string index order.
*/
declare const selectCharForwardLogical: StateCommand;
/**
Move the selection head one character backward by logical string
index order.
*/
declare const selectCharBackwardLogical: StateCommand;
/**
Move the selection head one [group](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) to
the left.
*/
declare const selectGroupLeft: Command;
/**
Move the selection head one group to the right.
*/
declare const selectGroupRight: Command;
/**
Move the selection head one group forward.
*/
declare const selectGroupForward: Command;
/**
Move the selection head one group backward.
*/
declare const selectGroupBackward: Command;
/**
Move the selection head one group forward in the default Windows
style, skipping to the start of the next group.
*/
declare const selectGroupForwardWin: Command;
/**
Move the selection head one group or camel-case subword forward.
*/
declare const selectSubwordForward: Command;
/**
Move the selection head one group or subword backward.
*/
declare const selectSubwordBackward: Command;
/**
Move the selection head over the next syntactic element to the left.
*/
declare const selectSyntaxLeft: Command;
/**
Move the selection head over the next syntactic element to the right.
*/
declare const selectSyntaxRight: Command;
/**
Move the selection head one line up.
*/
declare const selectLineUp: Command;
/**
Move the selection head one line down.
*/
declare const selectLineDown: Command;
/**
Move the selection head one page up.
*/
declare const selectPageUp: Command;
/**
Move the selection head one page down.
*/
declare const selectPageDown: Command;
/**
Move the selection head to the next line boundary.
*/
declare const selectLineBoundaryForward: Command;
/**
Move the selection head to the previous line boundary.
*/
declare const selectLineBoundaryBackward: Command;
/**
Move the selection head one line boundary to the left.
*/
declare const selectLineBoundaryLeft: Command;
/**
Move the selection head one line boundary to the right.
*/
declare const selectLineBoundaryRight: Command;
/**
Move the selection head to the start of the line.
*/
declare const selectLineStart: Command;
/**
Move the selection head to the end of the line.
*/
declare const selectLineEnd: Command;
/**
Move the selection to the start of the document.
*/
declare const cursorDocStart: StateCommand;
/**
Move the selection to the end of the document.
*/
declare const cursorDocEnd: StateCommand;
/**
Move the selection head to the start of the document.
*/
declare const selectDocStart: StateCommand;
/**
Move the selection head to the end of the document.
*/
declare const selectDocEnd: StateCommand;
/**
Select the entire document.
*/
declare const selectAll: StateCommand;
/**
Expand the selection to cover entire lines.
*/
declare const selectLine: StateCommand;
/**
Select the next syntactic construct that is larger than the
selection. Note that this will only work insofar as the language
[provider](https://codemirror.net/6/docs/ref/#language.language) you use builds up a full
syntax tree.
*/
declare const selectParentSyntax: StateCommand;
/**
Simplify the current selection. When multiple ranges are selected,
reduce it to its main range. Otherwise, if the selection is
non-empty, convert it to a cursor selection.
*/
declare const simplifySelection: StateCommand;
/**
Delete the selection, or, for cursor selections, the character or
indentation unit before the cursor.
*/
declare const deleteCharBackward: Command;
/**
Delete the selection or the character before the cursor. Does not
implement any extended behavior like deleting whole indentation
units in one go.
*/
declare const deleteCharBackwardStrict: Command;
/**
Delete the selection or the character after the cursor.
*/
declare const deleteCharForward: Command;
/**
Delete the selection or backward until the end of the next
[group](https://codemirror.net/6/docs/ref/#view.EditorView.moveByGroup), only skipping groups of
whitespace when they consist of a single space.
*/
declare const deleteGroupBackward: StateCommand;
/**
Delete the selection or forward until the end of the next group.
*/
declare const deleteGroupForward: StateCommand;
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line. If the cursor is directly at the end of the
line, delete the line break after it.
*/
declare const deleteToLineEnd: Command;
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line. If the cursor is directly at the start of the
line, delete the line break before it.
*/
declare const deleteToLineStart: Command;
/**
Delete the selection, or, if it is a cursor selection, delete to
the start of the line or the next line wrap before the cursor.
*/
declare const deleteLineBoundaryBackward: Command;
/**
Delete the selection, or, if it is a cursor selection, delete to
the end of the line or the next line wrap after the cursor.
*/
declare const deleteLineBoundaryForward: Command;
/**
Delete all whitespace directly before a line end from the
document.
*/
declare const deleteTrailingWhitespace: StateCommand;
/**
Replace each selection range with a line break, leaving the cursor
on the line before the break.
*/
declare const splitLine: StateCommand;
/**
Flip the characters before and after the cursor(s).
*/
declare const transposeChars: StateCommand;
/**
Move the selected lines up one line.
*/
declare const moveLineUp: StateCommand;
/**
Move the selected lines down one line.
*/
declare const moveLineDown: StateCommand;
/**
Create a copy of the selected lines. Keep the selection in the top copy.
*/
declare const copyLineUp: StateCommand;
/**
Create a copy of the selected lines. Keep the selection in the bottom copy.
*/
declare const copyLineDown: StateCommand;
/**
Delete selected lines.
*/
declare const deleteLine: Command;
/**
Replace the selection with a newline.
*/
declare const insertNewline: StateCommand;
/**
Replace the selection with a newline and the same amount of
indentation as the line above.
*/
declare const insertNewlineKeepIndent: StateCommand;
/**
Replace the selection with a newline and indent the newly created
line(s). If the current line consists only of whitespace, this
will also delete that whitespace. When the cursor is between
matching brackets, an additional newline will be inserted after
the cursor.
*/
declare const insertNewlineAndIndent: StateCommand;
/**
Create a blank, indented line below the current line.
*/
declare const insertBlankLine: StateCommand;
/**
Auto-indent the selected lines. This uses the [indentation service
facet](https://codemirror.net/6/docs/ref/#language.indentService) as source for auto-indent
information.
*/
declare const indentSelection: StateCommand;
/**
Add a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation to all selected
lines.
*/
declare const indentMore: StateCommand;
/**
Remove a [unit](https://codemirror.net/6/docs/ref/#language.indentUnit) of indentation from all
selected lines.
*/
declare const indentLess: StateCommand;
/**
Enables or disables
[tab-focus mode](https://codemirror.net/6/docs/ref/#view.EditorView.setTabFocusMode). While on, this
prevents the editor's key bindings from capturing Tab or
Shift-Tab, making it possible for the user to move focus out of
the editor with the keyboard.
*/
declare const toggleTabFocusMode: Command;
/**
Temporarily enables [tab-focus
mode](https://codemirror.net/6/docs/ref/#view.EditorView.setTabFocusMode) for two seconds or until
another key is pressed.
*/
declare const temporarilySetTabFocusMode: Command;
/**
Insert a tab character at the cursor or, if something is selected,
use [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore) to indent the entire
selection.
*/
declare const insertTab: StateCommand;
/**
Array of key bindings containing the Emacs-style bindings that are
available on macOS by default.

 - Ctrl-b: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - Ctrl-f: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-p: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - Ctrl-n: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Ctrl-a: [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Ctrl-e: [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - Ctrl-d: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-h: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
 - Ctrl-k: [`deleteToLineEnd`](https://codemirror.net/6/docs/ref/#commands.deleteToLineEnd)
 - Ctrl-Alt-h: [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-o: [`splitLine`](https://codemirror.net/6/docs/ref/#commands.splitLine)
 - Ctrl-t: [`transposeChars`](https://codemirror.net/6/docs/ref/#commands.transposeChars)
 - Ctrl-v: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown)
 - Alt-v: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp)
*/
declare const emacsStyleKeymap: readonly KeyBinding[];
/**
An array of key bindings closely sticking to platform-standard or
widely used bindings. (This includes the bindings from
[`emacsStyleKeymap`](https://codemirror.net/6/docs/ref/#commands.emacsStyleKeymap), with their `key`
property changed to `mac`.)

 - ArrowLeft: [`cursorCharLeft`](https://codemirror.net/6/docs/ref/#commands.cursorCharLeft) ([`selectCharLeft`](https://codemirror.net/6/docs/ref/#commands.selectCharLeft) with Shift)
 - ArrowRight: [`cursorCharRight`](https://codemirror.net/6/docs/ref/#commands.cursorCharRight) ([`selectCharRight`](https://codemirror.net/6/docs/ref/#commands.selectCharRight) with Shift)
 - Ctrl-ArrowLeft (Alt-ArrowLeft on macOS): [`cursorGroupLeft`](https://codemirror.net/6/docs/ref/#commands.cursorGroupLeft) ([`selectGroupLeft`](https://codemirror.net/6/docs/ref/#commands.selectGroupLeft) with Shift)
 - Ctrl-ArrowRight (Alt-ArrowRight on macOS): [`cursorGroupRight`](https://codemirror.net/6/docs/ref/#commands.cursorGroupRight) ([`selectGroupRight`](https://codemirror.net/6/docs/ref/#commands.selectGroupRight) with Shift)
 - Cmd-ArrowLeft (on macOS): [`cursorLineStart`](https://codemirror.net/6/docs/ref/#commands.cursorLineStart) ([`selectLineStart`](https://codemirror.net/6/docs/ref/#commands.selectLineStart) with Shift)
 - Cmd-ArrowRight (on macOS): [`cursorLineEnd`](https://codemirror.net/6/docs/ref/#commands.cursorLineEnd) ([`selectLineEnd`](https://codemirror.net/6/docs/ref/#commands.selectLineEnd) with Shift)
 - ArrowUp: [`cursorLineUp`](https://codemirror.net/6/docs/ref/#commands.cursorLineUp) ([`selectLineUp`](https://codemirror.net/6/docs/ref/#commands.selectLineUp) with Shift)
 - ArrowDown: [`cursorLineDown`](https://codemirror.net/6/docs/ref/#commands.cursorLineDown) ([`selectLineDown`](https://codemirror.net/6/docs/ref/#commands.selectLineDown) with Shift)
 - Cmd-ArrowUp (on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Cmd-ArrowDown (on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Ctrl-ArrowUp (on macOS): [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - Ctrl-ArrowDown (on macOS): [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - PageUp: [`cursorPageUp`](https://codemirror.net/6/docs/ref/#commands.cursorPageUp) ([`selectPageUp`](https://codemirror.net/6/docs/ref/#commands.selectPageUp) with Shift)
 - PageDown: [`cursorPageDown`](https://codemirror.net/6/docs/ref/#commands.cursorPageDown) ([`selectPageDown`](https://codemirror.net/6/docs/ref/#commands.selectPageDown) with Shift)
 - Home: [`cursorLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryBackward) ([`selectLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryBackward) with Shift)
 - End: [`cursorLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.cursorLineBoundaryForward) ([`selectLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.selectLineBoundaryForward) with Shift)
 - Ctrl-Home (Cmd-Home on macOS): [`cursorDocStart`](https://codemirror.net/6/docs/ref/#commands.cursorDocStart) ([`selectDocStart`](https://codemirror.net/6/docs/ref/#commands.selectDocStart) with Shift)
 - Ctrl-End (Cmd-Home on macOS): [`cursorDocEnd`](https://codemirror.net/6/docs/ref/#commands.cursorDocEnd) ([`selectDocEnd`](https://codemirror.net/6/docs/ref/#commands.selectDocEnd) with Shift)
 - Enter and Shift-Enter: [`insertNewlineAndIndent`](https://codemirror.net/6/docs/ref/#commands.insertNewlineAndIndent)
 - Ctrl-a (Cmd-a on macOS): [`selectAll`](https://codemirror.net/6/docs/ref/#commands.selectAll)
 - Backspace: [`deleteCharBackward`](https://codemirror.net/6/docs/ref/#commands.deleteCharBackward)
 - Delete: [`deleteCharForward`](https://codemirror.net/6/docs/ref/#commands.deleteCharForward)
 - Ctrl-Backspace (Alt-Backspace on macOS): [`deleteGroupBackward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupBackward)
 - Ctrl-Delete (Alt-Delete on macOS): [`deleteGroupForward`](https://codemirror.net/6/docs/ref/#commands.deleteGroupForward)
 - Cmd-Backspace (macOS): [`deleteLineBoundaryBackward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryBackward).
 - Cmd-Delete (macOS): [`deleteLineBoundaryForward`](https://codemirror.net/6/docs/ref/#commands.deleteLineBoundaryForward).
*/
declare const standardKeymap: readonly KeyBinding[];
/**
The default keymap. Includes all bindings from
[`standardKeymap`](https://codemirror.net/6/docs/ref/#commands.standardKeymap) plus the following:

- Alt-ArrowLeft (Ctrl-ArrowLeft on macOS): [`cursorSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxLeft) ([`selectSyntaxLeft`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxLeft) with Shift)
- Alt-ArrowRight (Ctrl-ArrowRight on macOS): [`cursorSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.cursorSyntaxRight) ([`selectSyntaxRight`](https://codemirror.net/6/docs/ref/#commands.selectSyntaxRight) with Shift)
- Alt-ArrowUp: [`moveLineUp`](https://codemirror.net/6/docs/ref/#commands.moveLineUp)
- Alt-ArrowDown: [`moveLineDown`](https://codemirror.net/6/docs/ref/#commands.moveLineDown)
- Shift-Alt-ArrowUp: [`copyLineUp`](https://codemirror.net/6/docs/ref/#commands.copyLineUp)
- Shift-Alt-ArrowDown: [`copyLineDown`](https://codemirror.net/6/docs/ref/#commands.copyLineDown)
- Escape: [`simplifySelection`](https://codemirror.net/6/docs/ref/#commands.simplifySelection)
- Ctrl-Enter (Cmd-Enter on macOS): [`insertBlankLine`](https://codemirror.net/6/docs/ref/#commands.insertBlankLine)
- Alt-l (Ctrl-l on macOS): [`selectLine`](https://codemirror.net/6/docs/ref/#commands.selectLine)
- Ctrl-i (Cmd-i on macOS): [`selectParentSyntax`](https://codemirror.net/6/docs/ref/#commands.selectParentSyntax)
- Ctrl-[ (Cmd-[ on macOS): [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess)
- Ctrl-] (Cmd-] on macOS): [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore)
- Ctrl-Alt-\\ (Cmd-Alt-\\ on macOS): [`indentSelection`](https://codemirror.net/6/docs/ref/#commands.indentSelection)
- Shift-Ctrl-k (Shift-Cmd-k on macOS): [`deleteLine`](https://codemirror.net/6/docs/ref/#commands.deleteLine)
- Shift-Ctrl-\\ (Shift-Cmd-\\ on macOS): [`cursorMatchingBracket`](https://codemirror.net/6/docs/ref/#commands.cursorMatchingBracket)
- Ctrl-/ (Cmd-/ on macOS): [`toggleComment`](https://codemirror.net/6/docs/ref/#commands.toggleComment).
- Shift-Alt-a: [`toggleBlockComment`](https://codemirror.net/6/docs/ref/#commands.toggleBlockComment).
- Ctrl-m (Alt-Shift-m on macOS): [`toggleTabFocusMode`](https://codemirror.net/6/docs/ref/#commands.toggleTabFocusMode).
*/
declare const defaultKeymap: readonly KeyBinding[];
/**
A binding that binds Tab to [`indentMore`](https://codemirror.net/6/docs/ref/#commands.indentMore) and
Shift-Tab to [`indentLess`](https://codemirror.net/6/docs/ref/#commands.indentLess).
Please see the [Tab example](../../examples/tab/) before using
this.
*/
declare const indentWithTab: KeyBinding;

export { type CommentTokens, blockComment, blockUncomment, copyLineDown, copyLineUp, cursorCharBackward, cursorCharBackwardLogical, cursorCharForward, cursorCharForwardLogical, cursorCharLeft, cursorCharRight, cursorDocEnd, cursorDocStart, cursorGroupBackward, cursorGroupForward, cursorGroupForwardWin, cursorGroupLeft, cursorGroupRight, cursorLineBoundaryBackward, cursorLineBoundaryForward, cursorLineBoundaryLeft, cursorLineBoundaryRight, cursorLineDown, cursorLineEnd, cursorLineStart, cursorLineUp, cursorMatchingBracket, cursorPageDown, cursorPageUp, cursorSubwordBackward, cursorSubwordForward, cursorSyntaxLeft, cursorSyntaxRight, defaultKeymap, deleteCharBackward, deleteCharBackwardStrict, deleteCharForward, deleteGroupBackward, deleteGroupForward, deleteLine, deleteLineBoundaryBackward, deleteLineBoundaryForward, deleteToLineEnd, deleteToLineStart, deleteTrailingWhitespace, emacsStyleKeymap, history, historyField, historyKeymap, indentLess, indentMore, indentSelection, indentWithTab, insertBlankLine, insertNewline, insertNewlineAndIndent, insertNewlineKeepIndent, insertTab, invertedEffects, isolateHistory, lineComment, lineUncomment, moveLineDown, moveLineUp, redo, redoDepth, redoSelection, selectAll, selectCharBackward, selectCharBackwardLogical, selectCharForward, selectCharForwardLogical, selectCharLeft, selectCharRight, selectDocEnd, selectDocStart, selectGroupBackward, selectGroupForward, selectGroupForwardWin, selectGroupLeft, selectGroupRight, selectLine, selectLineBoundaryBackward, selectLineBoundaryForward, selectLineBoundaryLeft, selectLineBoundaryRight, selectLineDown, selectLineEnd, selectLineStart, selectLineUp, selectMatchingBracket, selectPageDown, selectPageUp, selectParentSyntax, selectSubwordBackward, selectSubwordForward, selectSyntaxLeft, selectSyntaxRight, simplifySelection, splitLine, standardKeymap, temporarilySetTabFocusMode, toggleBlockComment, toggleBlockCommentByLine, toggleComment, toggleLineComment, toggleTabFocusMode, transposeChars, undo, undoDepth, undoSelection };
