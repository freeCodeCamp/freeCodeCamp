## 6.11.3 (2025-08-15)

### Bug fixes

Make the stream parser user 4 times smaller chunks to reduce the amount of re-parsed code on changes.

## 6.11.2 (2025-06-27)

### Bug fixes

Make sure folded ranges open when backspacing or deleting into them.

## 6.11.1 (2025-06-02)

### Bug fixes

Fix an issue where indentation would sometimes miss nodes in mixed-language situations.

## 6.11.0 (2025-03-13)

### New features

Stream parsers now support a `mergeTokens` option that can be used to turn off automatic merging of adjacent tokens.

## 6.10.8 (2024-12-23)

### Bug fixes

Fix a regression introduced 6.10.7 that caused indention to sometimes crash on nested language boundaries.

## 6.10.7 (2024-12-17)

### Bug fixes

Fix an issue where indentation for a stream language would fail to work when the parse covered only part of the document, far from the start.

Make sure the inner mode gets a chance to indent when indenting right at the end of a nested language section.

## 6.10.6 (2024-11-29)

### Bug fixes

Fix a crash in `StreamLanguage` when the input range is entirely before the editor viewport.

## 6.10.5 (2024-11-27)

### Bug fixes

Fix an issue where a `StreamLanguage` could get confused when trying to reuse existing parse data when the parsed range changed.

## 6.10.4 (2024-11-24)

### Bug fixes

Join adjacent tokens of the same type into a single token in .

Call stream language indent functions even when the language is used as a nested parser.

Fix a crash in `StreamParser` when a parse was resumed with different input ranges.

## 6.10.3 (2024-09-19)

### Bug fixes

Fix a TypeScript error when using `HighlightStyle` with the `exactOptionalPropertyTypes` typechecking option enabled.

Make `delimitedIndent` align to spaces after the opening token.

## 6.10.2 (2024-06-03)

### Bug fixes

Fix an infinite loop that could occur when enabling `bidiIsolates` in documents with both bidirectional text and very long lines.

## 6.10.1 (2024-02-02)

### Bug fixes

Fix an issue where, when a lot of code is visible in the initial editor, the bottom bit of code is shown without highlighting for one frame.

## 6.10.0 (2023-12-28)

### New features

The new `bidiIsolates` extension can be used to wrap syntactic elements where this is appropriate in an element that isolates their text direction, avoiding weird ordering of neutral characters on direction boundaries.

## 6.9.3 (2023-11-27)

### Bug fixes

Fix an issue in `StreamLanguage` where it ran out of node type ids if you repeatedly redefined a language with the same token table.

## 6.9.2 (2023-10-24)

### Bug fixes

Allow `StreamParser` tokens get multiple highlighting tags.

## 6.9.1 (2023-09-20)

### Bug fixes

Indentation now works a lot better in mixed-language documents that interleave the languages in a complex way.

Code folding is now able to pick the right foldable syntax node when the line end falls in a mixed-parsing language that doesn't match the target node.

## 6.9.0 (2023-08-16)

### Bug fixes

Make `getIndentation` return null, rather than 0, when there is no syntax tree available.

### New features

The new `preparePlaceholder` option to `codeFolding` makes it possible to display contextual information in a folded range placeholder widget.

## 6.8.0 (2023-06-12)

### New features

The new `baseIndentFor` method in `TreeIndentContext` can be used to find the base indentation for an arbitrary node.

## 6.7.0 (2023-05-19)

### New features

Export `DocInput` class for feeding editor documents to a Lezer parser.

## 6.6.0 (2023-02-13)

### New features

Syntax-driven language data queries now support sublanguages, which make it possible to return different data for specific parts of the tree produced by a single language.

## 6.5.0 (2023-02-07)

### Bug fixes

Make indentation for stream languages more reliable by having `StringStream.indentation` return overridden indentations from the indent context.

### New features

The `toggleFold` command folds or unfolds depending on whether there's an existing folded range on the current line.

`indentUnit` now accepts any (repeated) whitespace character, not just spaces and tabs.

## 6.4.0 (2023-01-12)

### New features

The `bracketMatchingHandle` node prop can now be used to limit bracket matching behavior for larger nodes to a single subnode (for example the tag name of an HTML tag).

## 6.3.2 (2022-12-16)

### Bug fixes

Fix a bug that caused `ensureSyntaxTree` to return incomplete trees when using a viewport-aware parser like `StreamLanguage`.

## 6.3.1 (2022-11-14)

### Bug fixes

Make syntax-based folding include syntax nodes that start right at the end of a line as potential fold targets.

Fix the `indentService` protocol to allow a distinction between declining to handle the indentation and returning null to indicate the line has no definite indentation.

## 6.3.0 (2022-10-24)

### New features

`HighlightStyle` objects now have a `specs` property holding the tag styles that were used to define them.

`Language` objects now have a `name` field holding the language name.

## 6.2.1 (2022-07-21)

### Bug fixes

Fix a bug where `bracketMatching` would incorrectly match nested brackets in syntax trees that put multiple pairs of brackets in the same parent node.

Fix a bug that could cause `indentRange` to loop infinitely.

## 6.2.0 (2022-06-30)

### Bug fixes

Fix a bug that prevented bracket matching to recognize plain brackets inside a language parsed as an overlay.

### New features

The `indentRange` function provides an easy way to programatically auto-indent a range of the document.

## 6.1.0 (2022-06-20)

### New features

The `foldState` field is now public, and can be used to serialize and deserialize the fold state.

## 6.0.0 (2022-06-08)

### New features

The `foldingChanged` option to `foldGutter` can now be used to trigger a recomputation of the fold markers.

## 0.20.2 (2022-05-20)

### Bug fixes

List style-mod as a dependency.

## 0.20.1 (2022-05-18)

### Bug fixes

Make sure `all` styles in the CSS generated for a `HighlightStyle` have a lower precedence than the other rules defined for the style. Use a shorthand property

## 0.20.0 (2022-04-20)

### Breaking changes

`HighlightStyle.get` is now called `highlightingFor`.

`HighlightStyles` no longer function as extensions (to improve tree shaking), and must be wrapped with `syntaxHighlighting` to add to an editor configuration.

`Language` objects no longer have a `topNode` property.

### New features

`HighlightStyle` and `defaultHighlightStyle` from the now-removed @codemirror/highlight package now live in this package.

The new `forceParsing` function can be used to run the parser forward on an editor view.

The exports that used to live in @codemirror/matchbrackets are now exported from this package.

The @codemirror/fold package has been merged into this one.

The exports from the old @codemirror/stream-parser package now live in this package.

## 0.19.10 (2022-03-31)

### Bug fixes

Autocompletion may now also trigger automatic indentation on input.

## 0.19.9 (2022-03-30)

### Bug fixes

Make sure nodes that end at the end of a partial parse aren't treated as valid fold targets.

Fix an issue where the parser sometimes wouldn't reuse parsing work done in the background on transactions.

## 0.19.8 (2022-03-03)

### Bug fixes

Fix an issue that could cause indentation logic to use the wrong line content when indenting multiple lines at once.

## 0.19.7 (2021-12-02)

### Bug fixes

Fix an issue where the parse worker could incorrectly stop working when the parse tree has skipped gaps in it.

## 0.19.6 (2021-11-26)

### Bug fixes

Fixes an issue where the background parse work would be scheduled too aggressively, degrading responsiveness on a newly-created editor with a large document.

Improve initial highlight for mixed-language editors and limit the amount of parsing done on state creation for faster startup.

## 0.19.5 (2021-11-17)

### New features

The new function `syntaxTreeAvailable` can be used to check if a fully-parsed syntax tree is available up to a given document position.

The module now exports `syntaxParserRunning`, which tells you whether the background parser is still planning to do more work for a given editor view.

## 0.19.4 (2021-11-13)

### New features

`LanguageDescription.of` now takes an optional already-loaded extension.

## 0.19.3 (2021-09-13)

### Bug fixes

Fix an issue where a parse that skipped content with `skipUntilInView` would in some cases not be restarted when the range came into view.

## 0.19.2 (2021-08-11)

### Bug fixes

Fix a bug that caused `indentOnInput` to fire for the wrong kinds of transactions.

Fix a bug that could cause `indentOnInput` to apply its changes incorrectly.

## 0.19.1 (2021-08-11)

### Bug fixes

Fix incorrect versions for @lezer dependencies.

## 0.19.0 (2021-08-11)

### Breaking changes

CodeMirror now uses lezer 0.15, which means different package names (scoped with @lezer) and some breaking changes in the library.

`EditorParseContext` is now called `ParseContext`. It is no longer passed to parsers, but must be retrieved with `ParseContext.get`.

`IndentContext.lineIndent` now takes a position, not a `Line` object, as argument.

`LezerLanguage` was renamed to `LRLanguage` (because all languages must emit Lezer-style trees, the name was misleading).

`Language.parseString` no longer exists. You can just call `.parser.parse(...)` instead.

### New features

New `IndentContext.lineAt` method to access lines in a way that is aware of simulated line breaks.

`IndentContext` now provides a `simulatedBreak` property through which client code can query whether the context has a simulated line break.

## 0.18.2 (2021-06-01)

### Bug fixes

Fix an issue where asynchronous re-parsing (with dynamically loaded languages) sometimes failed to fully happen.

## 0.18.1 (2021-03-31)

### Breaking changes

`EditorParseContext.getSkippingParser` now replaces `EditorParseContext.skippingParser` and allows you to provide a promise that'll cause parsing to start again. (The old property remains available until the next major release.)

### Bug fixes

Fix an issue where nested parsers could see past the end of the nested region.

## 0.18.0 (2021-03-03)

### Breaking changes

Update dependencies to 0.18.

### Breaking changes

The `Language` constructor takes an additional argument that provides the top node type.

### New features

`Language` instances now have a `topNode` property giving their top node type.

`TreeIndentContext` now has a `continue` method that allows an indenter to defer to the indentation of the parent nodes.

## 0.17.5 (2021-02-19)

### New features

This package now exports a `foldInside` helper function, a fold function that should work for most delimited node types.

## 0.17.4 (2021-01-15)

## 0.17.3 (2021-01-15)

### Bug fixes

Parse scheduling has been improved to reduce the likelyhood of the user looking at unparsed code in big documents.

Prevent parser from running too far past the current viewport in huge documents.

## 0.17.2 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.1 (2020-12-30)

### Bug fixes

Fix a bug where changing the editor configuration wouldn't update the language parser used.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

