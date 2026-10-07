## 6.19.0 (2025-09-26)

### New features

Completion sections may now set their rank to `dynamic` to indicate their order should be determined by the matching score of their best-matching option.

## 6.18.7 (2025-09-02)

### Bug fixes

Add a binding for Alt-i to trigger `startCompletion`, following VS Code's current default bindings.

Improve handling of nested fields in snippets.

## 6.18.6 (2025-02-12)

### Bug fixes

Fix an issue where the closing character for double-angle quotation marks and full-width brackets was computed incorrectly.

## 6.18.5 (2025-02-11)

### Bug fixes

Fix an issue where clicking on the scrollbar for the completion list could move focus out of the editor.

## 6.18.4 (2024-12-17)

### Bug fixes

Align the behavior of snippet completions with text completions in that they overwrite the selected text.

## 6.18.3 (2024-11-13)

### Bug fixes

Backspacing to the start of the completed range will no longer close the completion tooltip when it was triggered implicitly by typing the character before that range.

## 6.18.2 (2024-10-30)

### Bug fixes

Don't immediately show synchronously updated completions when there are some sources that still need to return.

## 6.18.1 (2024-09-14)

### Bug fixes

Fix an issue where `insertCompletionText` would get confused about the length of the inserted text when it contained CRLF line breaks, and create an invalid selection.

Add Alt-Backtick as additional binding on macOS, where IME can take over Ctrl-Space.

## 6.18.0 (2024-08-05)

### Bug fixes

Style the info element so that newlines are preserved, to make it easier to display multi-line info from a string source.

### New features

When registering an `abort` handler for a completion query, you can now use the `onDocChange` option to indicate that your query should be aborted as soon as the document changes while it is running.

## 6.17.0 (2024-07-03)

### Bug fixes

Fix an issue where completions weren't properly reset when starting a new completion through `activateOnCompletion`.

### New features

`CompletionContext` objects now have a `view` property that holds the editor view when the query context has a view available.

## 6.16.3 (2024-06-19)

### Bug fixes

Avoid adding an `aria-autocomplete` attribute to the editor when there are no active sources active.

## 6.16.2 (2024-05-31)

### Bug fixes

Allow backslash-escaped closing braces inside snippet field names/content.

## 6.16.1 (2024-05-29)

### Bug fixes

Fix a bug where multiple backslashes before a brace in a snippet were all removed.

## 6.16.0 (2024-04-12)

### New features

The new `activateOnCompletion` option allows autocompletion to be configured to chain completion activation for some types of completions.

## 6.15.0 (2024-03-13)

### New features

The new `filterStrict` option can be used to turn off fuzzy matching of completions.

## 6.14.0 (2024-03-10)

### New features

Completion results can now define a `map` method that can be used to adjust position-dependent information for document changes.

## 6.13.0 (2024-02-29)

### New features

Completions may now provide 'commit characters' that, when typed, commit the completion before inserting the character.

## 6.12.0 (2024-01-12)

### Bug fixes

Make sure snippet completions also set `userEvent` to `input.complete`.

Fix a crash when the editor lost focus during an update and autocompletion was active.

Fix a crash when using a snippet that has only one field, but multiple instances of that field.

### New features

The new `activateOnTypingDelay` option allows control over the debounce time before the completions are queried when the user types.

## 6.11.1 (2023-11-27)

### Bug fixes

Fix a bug that caused typing over closed brackets after pressing enter to still not work in many situations.

## 6.11.0 (2023-11-09)

### Bug fixes

Fix an issue that would prevent typing over closed brackets after starting a new line with enter.

### New features

Additional elements rendered in completion options with `addToOptions` are now given access to the editor view.

## 6.10.2 (2023-10-13)

### Bug fixes

Fix a bug that caused `updateSyncTime` to always delay the initial population of the tooltip.

## 6.10.1 (2023-10-11)

### Bug fixes

Fix a bug where picking a selection with the mouse could use the wrong completion if the completion list was updated after being opened.

## 6.10.0 (2023-10-11)

### New features

The new autocompletion configuration option `updateSyncTime` allows control over how long fast sources are held back waiting for slower completion sources.

## 6.9.2 (2023-10-06)

### Bug fixes

Fix a bug in `completeAnyWord` that could cause it to generate invalid regular expressions and crash.

## 6.9.1 (2023-09-14)

### Bug fixes

Make sure the cursor is scrolled into view after inserting completion text.

Make sure scrolling completions into view doesn't get confused when the tooltip is scaled.

## 6.9.0 (2023-07-18)

### New features

Completions may now provide a `displayLabel` property that overrides the way they are displayed in the completion list.

## 6.8.1 (2023-06-23)

### Bug fixes

`acceptCompletion` now returns false (allowing other handlers to take effect) when the completion popup is open but disabled.

## 6.8.0 (2023-06-12)

### New features

The result of `Completion.info` may now include a `destroy` method that will be called when the tooltip is removed.

## 6.7.1 (2023-05-13)

### Bug fixes

Fix a bug that cause incorrect ordering of completions when some results covered input text and others didn't.

## 6.7.0 (2023-05-11)

### New features

The new `hasNextSnippetField` and `hasPrevSnippetField` functions can be used to figure out if the snippet-field-motion commands apply to a given state.

## 6.6.1 (2023-05-03)

### Bug fixes

Fix a bug that made the editor use the completion's original position, rather than its current position, when changes happened in the document while a result was active.

## 6.6.0 (2023-04-27)

### Bug fixes

Fix a bug in `insertCompletionText` that caused it to replace the wrong range when a result set's `to` fell after the cursor.

### New features

Functions returned by `snippet` can now be called without a completion object.

## 6.5.1 (2023-04-13)

### Bug fixes

Keep completions open when interaction with an info tooltip moves focus out of the editor.

## 6.5.0 (2023-04-13)

### Bug fixes

When `closeBrackets` skips a bracket, it now generates a change that overwrites the bracket.

Replace the entire selected range when picking a completion with a non-cursor selection active.

### New features

Completions can now provide a `section` field that is used to group them into sections.

The new `positionInfo` option can be used to provide custom logic for positioning the info tooltips.

## 6.4.2 (2023-02-17)

### Bug fixes

Fix a bug where the apply method created by `snippet` didn't add a `pickedCompletion` annotation to the transactions it created.

## 6.4.1 (2023-02-14)

### Bug fixes

Don't consider node names in trees that aren't the same language as the one at the completion position in `ifIn` and `ifNotIn`.

Make sure completions that exactly match the input get a higher score than those that don't (so that even if the latter has a score boost, it ends up lower in the list).

## 6.4.0 (2022-12-14)

### Bug fixes

Fix an issue where the extension would sometimes try to draw a disabled dialog at an outdated position, leading to plugin crashes.

### New features

A `tooltipClass` option to autocompletion can now be used to add additional CSS classes to the completion tooltip.

## 6.3.4 (2022-11-24)

### Bug fixes

Fix an issue where completion lists could end up being higher than the tooltip they were in.

## 6.3.3 (2022-11-18)

### Bug fixes

Set an explicit `box-sizing` style on completion icons so CSS resets don't mess them up.

Allow closing braces in templates to be escaped with a backslash.

## 6.3.2 (2022-11-15)

### Bug fixes

Fix a regression that could cause the completion dialog to stick around when it should be hidden.

## 6.3.1 (2022-11-14)

### Bug fixes

Fix a regression where transactions for picking a completion (without custom `apply` method) no longer had the `pickedCompletion` annotation.

Reduce flickering for completion sources without `validFor` info by temporarily showing a disabled tooltip while the completion updates.

Make sure completion info tooltips are kept within the space provided by the `tooltipSpace` option.

## 6.3.0 (2022-09-22)

### New features

Close bracket configuration now supports a `stringPrefixes` property that can be used to allow autoclosing of prefixed strings.

## 6.2.0 (2022-09-13)

### New features

Autocompletion now takes an `interactionDelay` option that can be used to control the delay between the time where completion opens and the time where commands like `acceptCompletion` affect it.

## 6.1.1 (2022-09-08)

### Bug fixes

Fix a bug that prevented transactions produced by `deleteBracketPair` from being marked as deletion user events.

Improve positioning of completion info tooltips so they are less likely to stick out of the screen on small displays.

## 6.1.0 (2022-07-19)

### New features

You can now provide a `compareCompletions` option to autocompletion to influence the way completions with the same match score are sorted.

The `selectOnOpen` option to autocompletion can be used to require explicitly selecting a completion option before `acceptCompletion` does anything.

## 6.0.4 (2022-07-07)

### Bug fixes

Remove a leftover `console.log` in bracket closing code.

## 6.0.3 (2022-07-04)

### Bug fixes

Fix a bug that caused `closeBrackets` to not close quotes when at the end of a syntactic construct that starts with a similar quote.

## 6.0.2 (2022-06-15)

### Bug fixes

Declare package dependencies as peer dependencies as an attempt to avoid duplicated package issues.

## 6.0.1 (2022-06-09)

### Bug fixes

Support escaping `${` or `#{` in snippets.

## 6.0.0 (2022-06-08)

### Bug fixes

Scroll the cursor into view when inserting a snippet.

## 0.20.3 (2022-05-30)

### Bug fixes

Add an aria-label to the completion listbox.

Fix a regression that caused transactions generated for completion to not have a `userEvent` annotation.

## 0.20.2 (2022-05-24)

### New features

The package now exports an `insertCompletionText` helper that implements the default behavior for applying a completion.

## 0.20.1 (2022-05-16)

### New features

The new `closeOnBlur` option determines whether the completion tooltip is closed when the editor loses focus.

`CompletionResult` objects with `filter: false` may now have a `getMatch` property that determines the matched range in the options.

## 0.20.0 (2022-04-20)

### Breaking changes

`CompletionResult.span` has been renamed to `validFor`, and may now hold a function as well as a regular expression.

### Bug fixes

Remove code that dropped any options beyond the 300th one when matching and sorting option lists.

Completion will now apply to all cursors when there are multiple cursors.

### New features

`CompletionResult.update` can now be used to implement quick autocompletion updates in a synchronous way.

The @codemirror/closebrackets package was merged into this one.

## 0.19.15 (2022-03-23)

### New features

The `selectedCompletionIndex` function tells you the position of the currently selected completion.

The new `setSelectionCompletion` function creates a state effect that moves the selected completion to a given index.

A completion's `info` method may now return null to indicate that no further info is available.

## 0.19.14 (2022-03-10)

### Bug fixes

Make the ARIA attributes added to the editor during autocompletion spec-compliant.

## 0.19.13 (2022-02-18)

### Bug fixes

Fix an issue where the completion tooltip stayed open if it was explicitly opened and the user backspaced past its start.

Stop snippet filling when a change happens across one of the snippet fields' boundaries.

## 0.19.12 (2022-01-11)

### Bug fixes

Fix completion navigation with PageUp/Down when the completion tooltip isn't part of the view DOM.

## 0.19.11 (2022-01-11)

### Bug fixes

Fix a bug that caused page up/down to only move the selection by two options in the completion tooltip.

## 0.19.10 (2022-01-05)

### Bug fixes

Make sure the info tooltip is hidden when the selected option is scrolled out of view.

Fix a bug in the completion ranking that would sometimes give options that match the input by word start chars higher scores than appropriate.

Options are now sorted (ascending) by length when their match score is otherwise identical.

## 0.19.9 (2021-11-26)

### Bug fixes

Fix an issue where info tooltips would be visible in an inappropriate position when there was no room to place them properly.

## 0.19.8 (2021-11-17)

### Bug fixes

Give the completion tooltip a minimal width, and show ellipsis when completions overflow the tooltip width.

### New features

`autocompletion` now accepts an `aboveCursor` option to make the completion tooltip show up above the cursor.

## 0.19.7 (2021-11-16)

### Bug fixes

Make option deduplication less aggressive, so that options with different `type` or `apply` fields don't get merged.

## 0.19.6 (2021-11-12)

### Bug fixes

Fix an issue where parsing a snippet with a field that was labeled only by a number crashed.

## 0.19.5 (2021-11-09)

### Bug fixes

Make sure info tooltips don't stick out of the bottom of the page.

### New features

The package exports a new function `selectedCompletion`, which can be used to find out which completion is currently selected.

Transactions created by picking a completion now have an annotation (`pickedCompletion`) holding the original completion.

## 0.19.4 (2021-10-24)

### Bug fixes

Don't rely on the platform's highlight colors for the active completion, since those are inconsistent and may not be appropriate for the theme.

Fix incorrect match underline for some kinds of matched completions.

## 0.19.3 (2021-08-31)

### Bug fixes

Improve the sorting of completions by using `localeCompare`.

Fix reading of autocompletions in NVDA screen reader.

### New features

The new `icons` option can be used to turn off icons in the completion list.

The `optionClass` option can now be used to add CSS classes to the options in the completion list.

It is now possible to inject additional content into rendered completion options with the `addToOptions` configuration option.

## 0.19.2 (2021-08-25)

### Bug fixes

Fix an issue where `completeAnyWord` would return results when there was no query and `explicit` was false.

## 0.19.1 (2021-08-11)

### Bug fixes

Fix incorrect versions for @lezer dependencies.

## 0.19.0 (2021-08-11)

### Breaking changes

Update dependencies to 0.19.0

## 0.18.8 (2021-06-30)

### New features

Add an `ifIn` helper function that constrains a completion source to only fire when in a given syntax node. Add support for unfiltered completions

A completion result can now set a `filter: false` property to disable filtering and sorting of completions, when it already did so itself.

## 0.18.7 (2021-06-14)

### Bug fixes

Don't treat continued completions when typing after an explicit completion as explicit.

## 0.18.6 (2021-06-03)

### Bug fixes

Adding or reconfiguring completion sources will now cause them to be activated right away if a completion was active.

### New features

You can now specify multiple types in `Completion.type` by separating them by spaces. Small doc comment tweak for Completion.type

## 0.18.5 (2021-04-23)

### Bug fixes

Fix a regression where snippet field selection didn't work with @codemirror/state 0.18.6.

Fix a bug where snippet fields with different position numbers were inappropriately merged.

## 0.18.4 (2021-04-20)

### Bug fixes

Fix a crash in Safari when moving the selection during composition.

## 0.18.3 (2021-03-15)

### Bug fixes

Adjust to updated @codemirror/tooltip interface.

## 0.18.2 (2021-03-14)

### Bug fixes

Fix unintended ES2020 output (the package contains ES6 code again).

## 0.18.1 (2021-03-11)

### Bug fixes

Stop active completion when all sources resolve without producing any matches.

### New features

`Completion.info` may now return a promise.

## 0.18.0 (2021-03-03)

### Bug fixes

Only preserve selected option across updates when it isn't the first option.

## 0.17.4 (2021-01-18)

### Bug fixes

Fix a styling issue where the selection had become invisible inside snippet fields (when using `drawSelection`).

### New features

Snippet fields can now be selected with the pointing device (so that they are usable on touch devices).

## 0.17.3 (2021-01-18)

### Bug fixes

Fix a bug where uppercase completions would be incorrectly matched against the typed input.

## 0.17.2 (2021-01-12)

### Bug fixes

Don't bind Cmd-Space on macOS, since that already has a system default binding. Use Ctrl-Space for autocompletion.

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

