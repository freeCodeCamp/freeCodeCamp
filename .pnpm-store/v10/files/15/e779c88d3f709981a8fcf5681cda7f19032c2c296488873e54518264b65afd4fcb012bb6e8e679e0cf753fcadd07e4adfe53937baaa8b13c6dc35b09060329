## 6.8.1 (2025-03-31)

### Bug fixes

Fix an issue where creating a comment for a line that starts an inner language would use the comment style from the outer language.

## 6.8.0 (2025-01-08)

### New features

The new `cursorGroupForwardWin` and `selectGroupForwardWin` commands implement Windows-style forward motion by group.

## 6.7.1 (2024-10-21)

### Bug fixes

Change `toggleBlockCommentByLine` to not affect lines with the selection end right at their start.

## 6.7.0 (2024-10-07)

### Bug fixes

Bind Shift-Enter to the same command as Enter in the default keymap, so that it doesn't do nothing when on an EditContext-supporting browser.

### New features

Add commands for by-string-index cursor motion that ignores text direction.

## 6.6.2 (2024-09-17)

### Bug fixes

Fix an issue causing `selectParentSyntax` to not select syntax that is a direct child of the top node.

Make `selectParentSyntax` return false when it doesn't change the selection.

## 6.6.1 (2024-08-31)

### Bug fixes

Fix a bug in the undo history that would cause it to incorrectly track inverted effects when adding multiple edits to a single history event.

## 6.6.0 (2024-06-04)

### New features

The new `toggleTabFocusMode` and `temporarilySetTabFocusMode` commands provide control over the view's tab-focus mode.

The default keymap now binds Ctrl-m (Shift-Alt-m on macOS) to `toggleTabFocusMode`.

## 6.5.0 (2024-04-19)

### New features

The `insertNewlineKeepIndent` command inserts a newline along with the same indentation as the line before.

## 6.4.0 (2024-04-17)

### Bug fixes

Fix an issue where `deleteLine` sometimes leaves the cursor on the wrong line.

### New features

The new `deleteCharBackwardStrict` command just deletes a character, without further smart behavior around indentation.

## 6.3.3 (2023-12-28)

### Bug fixes

Fix an issue causing cursor motion commands to not dispatch a transaction when the change only affects cursor associativity.

## 6.3.2 (2023-11-28)

### Bug fixes

Fix a regression that caused `deleteCharBackward` to sometimes delete a large chunk of text.

## 6.3.1 (2023-11-27)

### Bug fixes

When undoing, store the selection after the undone change with the redo event, so that redoing restores it.

`deleteCharBackward` will no longer delete variant selector characters as separate characters.

## 6.3.0 (2023-09-29)

### Bug fixes

Make it possible for `selectParentSyntax` to jump out of or into a syntax tree overlay.

Make Cmd-Backspace and Cmd-Delete on macOS delete to the next line wrap point, not the start/end of the line.

### New features

The new `deleteLineBoundaryForward` and `deleteLineBoundaryBackward` commands delete to the start/end of the line or the next line wrapping point.

## 6.2.5 (2023-08-26)

### Bug fixes

Make `insertNewlineAndIndent` properly count indentation for tabs when copying over the previous line's indentation.

The various sub-word motion commands will now use `Intl.Segmenter`, when available, to stop at CJK language word boundaries.

Fix a bug in `insertNewlineAndIndent` that would delete text between brackets if it had no corresponding AST node.

## 6.2.4 (2023-05-03)

### Bug fixes

The by-subword motion commands now properly treat dashes, underscores, and similar as subword separators.

## 6.2.3 (2023-04-19)

### Bug fixes

Block commenting the selection no longer includes indentation on the first line.

## 6.2.2 (2023-03-10)

### Bug fixes

Fix a bug where line commenting got confused when commenting a range that crossed language boundaries.

## 6.2.1 (2023-02-15)

### Bug fixes

Keep cursor position stable in `cursorPageUp`/`cursorPageDown` when there are panels or other scroll margins active.

Make sure `toggleComment` doesn't get thrown off by local language nesting, by fetching the language data for the start of the selection line.

## 6.2.0 (2023-01-18)

### New features

The new `joinToEvent` history configuration option allows you to provide custom logic that determines whether a new transaction is added to an existing history event.

## 6.1.3 (2022-12-26)

### Bug fixes

Preserve selection bidi level when extending the selection, to prevent shift-selection from getting stuck in some kinds of bidirectional text.

## 6.1.2 (2022-10-13)

### Bug fixes

Fix a bug that caused deletion commands on non-empty ranges to incorrectly return false and do nothing, causing the editor to fall back to native behavior.

## 6.1.1 (2022-09-28)

### Bug fixes

Make sure the selection endpoints are moved out of atomic ranges when applying a deletion command to a non-empty selection.

## 6.1.0 (2022-08-18)

### Bug fixes

Prevent native behavior on Ctrl/Cmd-ArrowLeft/ArrowRight bindings, so that browsers with odd bidi behavior won't do the wrong thing at start/end of line.

Cmd-ArrowLeft/Right on macOS now moves the cursor in the direction of the arrow even in right-to-left content.

### New features

The new `cursorLineBoundaryLeft`/`Right` and `selectLineBoundaryLeft`/`Right` commands allow directional motion to line boundaries.

## 6.0.1 (2022-06-30)

### Bug fixes

Announce to the screen reader when the selection is deleted.

Also bind Ctrl-Shift-z to redo on Linux.

## 6.0.0 (2022-06-08)

### Bug fixes

Fix a bug where by-page selection commands sometimes moved one line too far.

## 0.20.0 (2022-04-20)

### Breaking changes

There is no longer a separate `commentKeymap`. Those bindings are now part of `defaultKeymap`.

### Bug fixes

Make `cursorPageUp` and `cursorPageDown` move by window height when the editor is higher than the window.

Make sure the default behavior of Home/End is prevented, since it could produce unexpected results on macOS.

### New features

The exports from @codemirror/comment are now available in this package.

The exports from the @codemirror/history package are now available from this package.

## 0.19.8 (2022-01-26)

### Bug fixes

`deleteCharBackward` now removes extending characters one at a time, rather than deleting the entire glyph at once.

Alt-v is no longer bound in `emacsStyleKeymap` and macOS's `standardKeymap`, because macOS doesn't bind it by default and it conflicts with some keyboard layouts.

## 0.19.7 (2022-01-11)

### Bug fixes

Don't bind Alt-\< and Alt-> on macOS by default, since those interfere with some keyboard layouts. Make cursorPageUp/Down scroll the view to keep the cursor in place

`cursorPageUp` and `cursorPageDown` now scroll the view by the amount that the cursor moved.

## 0.19.6 (2021-12-10)

### Bug fixes

The standard keymap no longer overrides Shift-Delete, in order to allow the native behavior of that key to happen on platforms that support it.

## 0.19.5 (2021-09-21)

### New features

Adds an `insertBlankLine` command which creates an empty line below the selection, and binds it to Mod-Enter in the default keymap.

## 0.19.4 (2021-09-13)

### Bug fixes

Make commands that affect the editor's content check `state.readOnly` and return false when that is true.

## 0.19.3 (2021-09-09)

### Bug fixes

Make by-line cursor motion commands move the cursor to the start/end of the document when they hit the first/last line.

Fix a bug where `deleteCharForward`/`Backward` behaved incorrectly when deleting directly before or after an atomic range.

## 0.19.2 (2021-08-24)

### New features

New commands `cursorSubwordForward`, `cursorSubwordBackward`, `selectSubwordForward`, and `selectSubwordBackward` which implement motion by camel case subword.

## 0.19.1 (2021-08-11)

### Bug fixes

Fix incorrect versions for @lezer dependencies.

## 0.19.0 (2021-08-11)

### Breaking changes

Change default binding for backspace to `deleteCharBackward`, drop `deleteCodePointBackward`/`Forward` from the library.

`defaultTabBinding` was removed.

### Bug fixes

Drop Alt-d, Alt-f, and Alt-b bindings from `emacsStyleKeymap` (and thus from the default macOS bindings).

`deleteCharBackward` and `deleteCharForward` now take atomic ranges into account.

### New features

Attach more granular user event strings to transactions.

The module exports a new binding `indentWithTab` that binds tab and shift-tab to `indentMore` and `indentLess`.

## 0.18.3 (2021-06-11)

### Bug fixes

`moveLineDown` will no longer incorrectly grow the selection.

Line-based commands will no longer include lines where a range selection ends right at the start of the line.

## 0.18.2 (2021-05-06)

### Bug fixes

Use Ctrl-l, not Alt-l, to bind `selectLine` on macOS, to avoid conflicting with special-character-insertion bindings.

Make the macOS Command-ArrowLeft/Right commands behave more like their native versions.

## 0.18.1 (2021-04-08)

### Bug fixes

Also bind Shift-Backspace and Shift-Delete in the default keymap (to do the same thing as the Shift-less binding).

### New features

Adds a `deleteToLineStart` command.

Adds bindings for Cmd-Delete and Cmd-Backspace on macOS.

## 0.18.0 (2021-03-03)

### Breaking changes

Update dependencies to 0.18.

## 0.17.5 (2021-02-25)

### Bug fixes

Use Alt-l for the default `selectLine` binding, because Mod-l already has an important meaning in the browser.

Make `deleteGroupBackward`/`deleteGroupForward` delete groups of whitespace when bigger than a single space.

Don't change lines that have the end of a range selection directly at their start in `indentLess`, `indentMore`, and `indentSelection`.

## 0.17.4 (2021-02-18)

### Bug fixes

Fix a bug where `deleteToLineEnd` would delete the rest of the document when at the end of a line.

## 0.17.3 (2021-02-16)

### Bug fixes

Fix an issue where `insertNewlineAndIndent` behaved strangely with the cursor between brackets that sat on different lines.

## 0.17.2 (2021-01-22)

### New features

The new `insertTab` command inserts a tab when nothing is selected, and defers to `indentMore` otherwise.

The package now exports a `defaultTabBinding` object that provides a recommended binding for tab (if you must bind tab).

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

