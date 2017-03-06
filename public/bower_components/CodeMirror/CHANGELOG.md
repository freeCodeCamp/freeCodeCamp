## 5.15.2 (2016-05-20)

### Bugfixes

Fix a critical document corruption bug that occurs when a document is gradually grown.

## 5.15.0 (2016-05-20)

### Bugfixes

Fix bug that caused the selection to reset when focusing the editor in contentEditable input mode.

Fix issue where not all ASCII control characters were being replaced by placeholders.

Remove the assumption that all modes have a `startState` method from several wrapping modes.

Fix issue where the editor would complain about overlapping collapsed ranges when there weren't any.

Optimize document tree building when loading or pasting huge chunks of content.

[markdown mode](http://codemirror.net/mode/markdown/): Fix several issues in matching link targets.

[clike mode](http://codemirror.net/mode/clike/): Improve indentation of C++ template declarations.

### New features

Explicitly bind Ctrl-O on OS X to make that binding (“open line”) act as expected.

Pasting [linewise-copied](http://codemirror.net/doc/manual.html#option_lineWiseCopyCut) content when there is no selection now inserts the lines above the current line.

[javascript mode](http://codemirror.net/mode/javascript/): Support `async`/`await` and improve support for TypeScript type syntax.

## 5.14.2 (2016-04-20)

### Bugfixes

Push a new package to NPM due to an [NPM bug](https://github.com/npm/npm/issues/5082) omitting the LICENSE file in 5.14.0.

Set `dataTransfer.effectAllowed` in `dragstart` handler to help browsers use the right drag icon.

Add the [mbox mode](http://codemirror.net/mode/mbox/index.html) to `mode/meta.js`.

## 5.14.0 (2016-04-20)

### Bugfixes

[`posFromIndex`](http://codemirror.net/doc/manual.html#posFromIndex) and [`indexFromPos`](http://codemirror.net/doc/manual.html#indexFromPos) now take [`lineSeparator`](http://codemirror.net/doc/manual.html#option_lineSeparator) into account.

[vim bindings](http://codemirror.net/demo/vim.html): Only call `.save()` when it is actually available.

[comment addon](http://codemirror.net/doc/manual.html#addon_comment): Be careful not to mangle multi-line strings.

[Python mode](http://codemirror.net/mode/python/index.html): Improve distinguishing of decorators from `@` operators.

[`findMarks`](http://codemirror.net/doc/manual.html#findMarks): No longer return marks that touch but don't overlap given range.

### New features

[vim bindings](http://codemirror.net/demo/vim.html): Add yank command.

[match-highlighter addon](http://codemirror.net/doc/manual.html#addon_match-highlighter): Add `trim` option to disable ignoring of whitespace.

[PowerShell mode](http://codemirror.net/mode/powershell/index.html): Added.

[Yacas mode](http://codemirror.net/mode/yacas/index.html): Added.

[Web IDL mode](http://codemirror.net/mode/webidl/index.html): Added.

[SAS mode](http://codemirror.net/mode/sas/index.html): Added.

[mbox mode](http://codemirror.net/mode/mbox/index.html): Added.

## 5.13.2 (2016-03-23)

### Bugfixes

Solves a problem where the gutter would sometimes not extend all the way to the end of the document.

## 5.13.0 (2016-03-21)

### New features

New DOM event forwarded: [`"dragleave"`](http://codemirror.net/doc/manual.html#event_dom).

[protobuf mode](http://codemirror.net/mode/protobuf/index.html): Newly added.

### Bugfixes

Fix problem where [`findMarks`](http://codemirror.net/doc/manual.html#findMarks) sometimes failed to find multi-line marks.

Fix crash that showed up when atomic ranges and bidi text were combined.

[show-hint addon](http://codemirror.net/demo/complete.html): Completion widgets no longer close when the line indented or dedented.

[merge addon](http://codemirror.net/demo/merge.html): Fix bug when merging chunks at the end of the file.

[placeholder addon](http://codemirror.net/doc/manual.html#addon_placeholder): No longer gets confused by [`swapDoc`](http://codemirror.net/doc/manual.html#swapDoc).

[simplescrollbars addon](http://codemirror.net/doc/manual.html#addon_simplescrollbars): Fix invalid state when deleting at end of document.

[clike mode](http://codemirror.net/mode/clike/index.html): No longer gets confused when a comment starts after an operator.

[markdown mode](http://codemirror.net/mode/markdown/index.html): Now supports CommonMark-style flexible list indentation.

[dylan mode](http://codemirror.net/mode/dylan/index.html): Several improvements and fixes.

## 5.12.0 (2016-02-19)

### New features

[Vim bindings](http://codemirror.net/demo/vim.html): Ctrl-Q is now an alias for Ctrl-V.

[Vim bindings](http://codemirror.net/demo/vim.html): The Vim API now exposes an `unmap` method to unmap bindings.

[active-line addon](http://codemirror.net/demo/activeline.html): This addon can now style the active line's gutter.

[FCL mode](http://codemirror.net/mode/fcl/): Newly added.

[SQL mode](http://codemirror.net/mode/sql/): Now has a Postgresql dialect.

### Bugfixes

Fix [issue](https://github.com/codemirror/CodeMirror/issues/3781) where trying to scroll to a horizontal position outside of the document's width could cause the gutter to be positioned incorrectly.

Use absolute, rather than fixed positioning in the context-menu intercept hack, to work around a [problem](https://github.com/codemirror/CodeMirror/issues/3238) when the editor is inside a transformed parent container.

Solve a [problem](https://github.com/codemirror/CodeMirror/issues/3821) where the horizontal scrollbar could hide text in Firefox.

Fix a [bug](https://github.com/codemirror/CodeMirror/issues/3834) that caused phantom scroll space under the text in some situations.

[Sublime Text bindings](http://codemirror.net/demo/sublime.html): Bind delete-line to Shift-Ctrl-K on OS X.

[Markdown mode](http://codemirror.net/mode/markdown/): Fix [issue](https://github.com/codemirror/CodeMirror/issues/3787) where the mode would keep state related to fenced code blocks in an unsafe way, leading to occasional corrupted parses.

[Markdown mode](http://codemirror.net/mode/markdown/): Ignore backslashes in code fragments.

[Markdown mode](http://codemirror.net/mode/markdown/): Use whichever mode is registered as `text/html` to parse HTML.

[Clike mode](http://codemirror.net/mode/clike/): Improve indentation of Scala `=>` functions.

[Python mode](http://codemirror.net/mode/python/): Improve indentation of bracketed code.

[HTMLMixed mode](http://codemirror.net/mode/htmlmixed/): Support multi-line opening tags for sub-languages (`<script>`, `<style>`, etc).

[Spreadsheet mode](http://codemirror.net/mode/spreadsheet/): Fix bug where the mode did not advance the stream when finding a backslash.

[XML mode](http://codemirror.net/mode/xml/): The mode now takes a `matchClosing` option to configure whether mismatched closing tags should be highlighted as errors.

## 5.11.0 (2016-01-20)

* New modes: [JSX](http://codemirror.net/mode/jsx/index.html), [literate Haskell](http://codemirror.net/mode/haskell-literate/index.html)
* The editor now forwards more [DOM events](http://codemirror.net/doc/manual.html#event_dom): `cut`, `copy`, `paste`, and `touchstart`. It will also forward `mousedown` for drag events
* Fixes a bug where bookmarks next to collapsed spans were not rendered
* The [Swift](http://codemirror.net/mode/swift/index.html) mode now supports auto-indentation
* Frontmatters in the [YAML frontmatter](http://codemirror.net/mode/yaml-frontmatter/index.html) mode are now optional as intended

## 5.10.0 (2015-12-21)

* Modify the way [atomic ranges](http://codemirror.net/doc/manual.html#mark_atomic) are skipped by selection to try and make it less surprising.
* The [Swift mode](http://codemirror.net/mode/swift/index.html) was rewritten.
* New addon: [jump-to-line](http://codemirror.net/doc/manual.html#addon_jump-to-line).
* New method: [`isReadOnly`](http://codemirror.net/doc/manual.html#isReadOnly).
* The [show-hint addon](http://codemirror.net/doc/manual.html#addon_show-hint) now defaults to picking completions on single click.
* The object passed to [`"beforeSelectionChange"`](http://codemirror.net/doc/manual.html#event_beforeSelectionChange) events now has an `origin` property.
* New mode: [Crystal](http://codemirror.net/mode/crystal/index.html).

## 5.9.0 (2015-11-23)

* Improve the way overlay (OS X-style) scrollbars are handled
* Make [annotatescrollbar](http://codemirror.net/doc/manual.html#addon_annotatescrollbar) and scrollpastend addons work properly together
* Make [show-hint](http://codemirror.net/doc/manual.html#addon_show-hint) addon select options on single click by default, move selection to hovered item
* Properly fold comments that include block-comment-start markers
* Many small language mode fixes

## 5.8.0 (2015-10-20)

* Fixes an infinite loop in the [hardwrap addon](http://codemirror.net/doc/manual.html#addon_hardwrap)
* New modes: [NSIS](http://codemirror.net/mode/nsis/index.html), [Ceylon](http://codemirror.net/mode/clike/index.html)
* The Kotlin mode is now a [clike](http://codemirror.net/mode/clike/index.html) dialect, rather than a stand-alone mode
* New option: [`allowDropFileTypes`](http://codemirror.net/doc/manual.html#option_allowDropFileTypes). Binary files can no longer be dropped into CodeMirror
* New themes: [bespin](http://codemirror.net/demo/theme.html#bespin), [hopscotch](http://codemirror.net/demo/theme.html#hopscotch), [isotope](http://codemirror.net/demo/theme.html#isotope), [railscasts](http://codemirror.net/demo/theme.html#railscasts)

## 5.7.0 (2015-09-21)

* New modes: [Vue](http://codemirror.net/mode/vue/index.html), [Oz](http://codemirror.net/mode/oz/index.html), [MscGen](http://codemirror.net/mode/mscgen/index.html) (and dialects), [Closure Stylesheets](http://codemirror.net/mode/css/gss.html)
* Implement [CommonMark](http://commonmark.org)-style flexible list indent and cross-line code spans in [Markdown](http://codemirror.net/mode/markdown/index.html) mode
* Add a replace-all button to the [search addon](http://codemirror.net/doc/manual.html#addon_search), and make the persistent search dialog transparent when it obscures the match
* Handle `acync`/`await` and ocal and binary numbers in [JavaScript mode](http://codemirror.net/mode/javascript/index.html)
* Fix various issues with the [Haxe mode](http://codemirror.net/mode/haxe/index.html)
* Make the [closebrackets addon](http://codemirror.net/doc/manual.html#addon_closebrackets) select only the wrapped text when wrapping selection in brackets
* Tokenize properties as properties in the [CoffeeScript mode](http://codemirror.net/mode/coffeescript/index.html)
* The [placeholder addon](http://codemirror.net/doc/manual.html#addon_placeholder) now accepts a DOM node as well as a string placeholder

## 5.6.0 (2015-08-20)

* Fix bug where you could paste into a `readOnly` editor
* Show a cursor at the drop location when dragging over the editor
* The [Rust mode](http://codemirror.net/mode/rust/index.html) was rewritten to handle modern Rust
* The editor and theme CSS was cleaned up. Some selectors are now less specific than before
* New theme: [abcdef](http://codemirror.net/demo/theme.html#abcdef)
* Lines longer than [`maxHighlightLength`](http://codemirror.net/doc/manual.html#option_maxHighlightLength) are now less likely to mess up indentation
* New addons: [`autorefresh`](http://codemirror.net/doc/manual.html#addon_autorefresh) for refreshing an editor the first time it becomes visible, and `html-lint` for using [HTMLHint](http://htmlhint.com/)
* The [`search`](http://codemirror.net/doc/manual.html#addon_search) addon now recognizes `\r` and `\n` in pattern and replacement input

## 5.5.0 (2015-07-20)

*   New option: [`lineSeparator`](http://codemirror.net/doc/manual.html#option_lineSeparator) (with corresponding [method](http://codemirror.net/doc/manual.html#lineSeparator))
*   New themes: [dracula](http://codemirror.net/demo/theme.html#dracula), [seti](http://codemirror.net/demo/theme.html#seti), [yeti](http://codemirror.net/demo/theme.html#yeti), [material](http://codemirror.net/demo/theme.html#material), and [icecoder](http://codemirror.net/demo/theme.html#icecoder)
*   New modes: [Brainfuck](http://codemirror.net/mode/brainfuck/index.html), [VHDL](http://codemirror.net/mode/vhdl/index.html), Squirrel ([clike](http://codemirror.net/mode/clike/index.html) dialect)
*   Define a `findPersistent` command in the [search](http://codemirror.net/demo/search.html) addon, for a dialog that stays open as you cycle through matches
*   From this release on, the NPM module doesn't include documentation and demos
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.4.0...5.5.0)

## 5.4.0 (2015-06-25)

*   New modes: [Twig](http://codemirror.net/mode/twig/index.html), [Elm](http://codemirror.net/mode/elm/index.html), [Factor](http://codemirror.net/mode/factor/index.html), [Swift](http://codemirror.net/mode/swift/index.html)
*   Prefer clipboard API (if available) when pasting
*   Refined definition highlighting in [clike](http://codemirror.net/mode/clike/index.html) mode
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.3.0...5.4.0)

## 5.3.0 (2015-05-20)

*   Fix several regressions in the [`show-hint`](http://codemirror.net/doc/manual.html#addon_show-hint) addon (`completeSingle` option, `"shown"` and `"close"` events)
*   The [vim mode](http://codemirror.net/demo/vim.html) API was [documented](http://codemirror.net/doc/manual.html#vimapi)
*   New modes: [ASN.1](http://codemirror.net/mode/asn.1/index.html), [TTCN](http://codemirror.net/mode/ttcn/index.html), and [TTCN-CFG](http://codemirror.net/mode/ttcn-cfg/index.html)
*   The [clike](http://codemirror.net/mode/clike/index.html) mode can now deep-indent `switch` statements, and roughly recognizes types and defined identifiers
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.2.0...5.3.0)

## 5.2.0 (2015-04-20)

*   Fix several race conditions in [`show-hint`](http://codemirror.net/doc/manual.html#addon_show-hint)'s asynchronous mode
*   Fix backspace binding in [Sublime bindings](http://codemirror.net/demo/sublime.html)
*   Change the way IME is handled in the `"textarea"` [input style](http://codemirror.net/doc/manual.html#option_inputStyle)
*   New modes: [MUMPS](http://codemirror.net/mode/mumps/index.html), [Handlebars](http://codemirror.net/mode/handlebars/index.html)
*   Rewritten modes: [Django](http://codemirror.net/mode/django/index.html), [Z80](http://codemirror.net/mode/z80/index.html)
*   New theme: [Liquibyte](http://codemirror.net/demo/theme.html#liquibyte)
*   New option: [`lineWiseCopyCut`](http://codemirror.net/doc/manual.html#option_lineWiseCopyCut)
*   The [Vim mode](http://codemirror.net/demo/vim.html) now supports buffer-local options and the `filetype` setting
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.1.0...5.2.0)

## 5.1.0 (2015-03-23)

*   New modes: [ASCII armor](http://codemirror.net/mode/asciiarmor/index.html) (PGP data), [Troff](http://codemirror.net/mode/troff/index.html), and [CMake](http://codemirror.net/mode/cmake/index.html).
*   Remove SmartyMixed mode, rewrite [Smarty](http://codemirror.net/mode/smarty/index.html) mode to supersede it.
*   New commands in the [merge addon](http://codemirror.net/doc/manual.html#addon_merge): `goNextDiff` and `goPrevDiff`.
*   The [closebrackets addon](http://codemirror.net/doc/manual.html#addon_closebrackets) can now be configured per mode.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/5.0.0...5.1.0).

## 5.0.0 (2015-02-20)

*   Experimental mobile support (tested on iOS, Android Chrome, stock Android browser)
*   New option [`inputStyle`](http://codemirror.net/doc/manual.html#option_inputStyle) to switch between hidden textarea and contenteditable input.
*   The [`getInputField`](http://codemirror.net/doc/manual.html#getInputField) method is no longer guaranteed to return a textarea.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.13.0...5.0.0).

## 4.13.0 (2015-02-20)

*   Fix the way the [`closetag`](http://codemirror.net/demo/closetag.html) demo handles the slash character.
*   New modes: [Forth](http://codemirror.net/mode/forth/index.html), [Stylus](http://codemirror.net/mode/stylus/index.html).
*   Make the [CSS mode](http://codemirror.net/mode/css/index.html) understand some modern CSS extensions.
*   Have the [Scala mode](http://codemirror.net/mode/clike/index.html) handle symbols and triple-quoted strings.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.12.0...4.13.0).

## 4.12.0 (2015-01-22)

*   The [`closetag`](http://codemirror.net/doc/manual.html#addon_closetag) addon now defines a `"closeTag"` command.
*   Adds a `findModeByFileName` to the [mode metadata](http://codemirror.net/doc/manual.html#addon_meta) addon.
*   [Simple mode](http://codemirror.net/demo/simplemode.html) rules can now contain a `sol` property to only match at the start of a line.
*   New addon: [`selection-pointer`](http://codemirror.net/doc/manual.html#addon_selection-pointer) to style the mouse cursor over the selection.
*   Improvements to the [Sass mode](http://codemirror.net/mode/sass/index.html)'s indentation.
*   The [Vim keymap](http://codemirror.net/demo/vim.html)'s search functionality now supports [scrollbar annotation](http://codemirror.net/doc/manual.html#addon_matchesonscrollbar).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.11.0...4.12.0).

## 4.11.0 (2015-01-09)

Unfortunately, 4.10 did not take care of the Firefox scrolling issue entirely. This release adds two more patches to address that.

## 4.10.0 (2014-12-29)

Emergency single-patch update to 4.9\. Fixes Firefox-specific problem where the cursor could end up behind the horizontal scrollbar.

## 4.9.0 (2014-12-23)

*   Overhauled scroll bar handling. Add pluggable [scrollbar implementations](http://codemirror.net/demo/simplescrollbars.html).
*   Tweaked behavior for the [completion addons](http://codemirror.net/doc/manual.html#addon_show-hint) to not take text after cursor into account.
*   Two new optional features in the [merge addon](http://codemirror.net/doc/manual.html#addon_merge): aligning editors, and folding unchanged text.
*   New modes: [Dart](http://codemirror.net/mode/dart/index.html), [EBNF](http://codemirror.net/mode/ebnf/index.html), [spreadsheet](http://codemirror.net/mode/spreadsheet/index.html), and [Soy](http://codemirror.net/mode/soy/index.html).
*   New [addon](http://codemirror.net/demo/panel.html) to show persistent panels below/above an editor.
*   New themes: [zenburn](http://codemirror.net/demo/theme.html#zenburn) and [tomorrow night bright](http://codemirror.net/demo/theme.html#tomorrow-night-bright).
*   Allow ctrl-click to clear existing cursors.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.8.0...4.9.0).

## 4.8.0 (2014-11-22)

*   Built-in support for [multi-stroke key bindings](http://codemirror.net/doc/manual.html#normalizeKeyMap).
*   New method: [`getLineTokens`](http://codemirror.net/doc/manual.html#getLineTokens).
*   New modes: [dockerfile](http://codemirror.net/mode/dockerfile/index.html), [IDL](http://codemirror.net/mode/idl/index.html), [Objective C](http://codemirror.net/mode/clike/index.html) (crude).
*   Support styling of gutter backgrounds, allow `"gutter"` styles in [`addLineClass`](http://codemirror.net/doc/manual.html#addLineClass).
*   Many improvements to the [Vim mode](http://codemirror.net/demo/vim.html), rewritten visual mode.
*   Improvements to modes: [gfm](http://codemirror.net/mode/gfm/index.html) (strikethrough), [SPARQL](http://codemirror.net/mode/sparql/index.html) (version 1.1 support), and [sTeX](http://codemirror.net/mode/stex/index.html) (no more runaway math mode).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.7.0...4.8.0).

## 4.7.0 (2014-10-20)

*   **Incompatible**: The [lint addon](http://codemirror.net/demo/lint.html) now passes the editor's value as first argument to asynchronous lint functions, for consistency. The editor is still passed, as fourth argument.
*   Improved handling of unicode identifiers in modes for languages that support them.
*   More mode improvements: [CoffeeScript](http://codemirror.net/mode/coffeescript/index.html) (indentation), [Verilog](http://codemirror.net/mode/verilog/index.html) (indentation), [Scala](http://codemirror.net/mode/clike/index.html) (indentation, triple-quoted strings), and [PHP](http://codemirror.net/mode/php/index.html) (interpolated variables in heredoc strings).
*   New modes: [Textile](http://codemirror.net/mode/textile/index.html) and [Tornado templates](http://codemirror.net/mode/tornado/index.html).
*   Experimental new [way to define modes](http://codemirror.net/demo/simplemode.html).
*   Improvements to the [Vim bindings](http://codemirror.net/demo/vim.html): Arbitrary insert mode key mappings are now possible, and text objects are supported in visual mode.
*   The mode [meta-information file](http://codemirror.net/mode/meta.js) now includes information about file extensions, and [helper functions](http://codemirror.net/doc/manual.html#addon_meta) `findModeByMIME` and `findModeByExtension`.
*   New logo!
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.6.0...4.7.0).

## 4.6.0 (2014-09-19)

*   New mode: [Modelica](http://codemirror.net/mode/modelica/index.html)
*   New method: [`findWordAt`](http://codemirror.net/doc/manual.html#findWordAt)
*   Make it easier to [use text background styling](http://codemirror.net/demo/markselection.html)
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.5.0...4.6.0).

## 4.5.0 (2014-08-21)

*   Fix several serious bugs with horizontal scrolling
*   New mode: [Slim](http://codemirror.net/mode/slim/index.html)
*   New command: [`goLineLeftSmart`](http://codemirror.net/doc/manual.html#command_goLineLeftSmart)
*   More fixes and extensions for the [Vim](http://codemirror.net/demo/vim.html) visual block mode
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.4.0...4.5.0).

## 4.4.0 (2014-07-21)

*   **Note:** Some events might now fire in slightly different order (`"change"` is still guaranteed to fire before `"cursorActivity"`)
*   Nested operations in multiple editors are now synced (complete at same time, reducing DOM reflows)
*   Visual block mode for [vim](http://codemirror.net/demo/vim.html) (<C-v>) is nearly complete
*   New mode: [Kotlin](http://codemirror.net/mode/kotlin/index.html)
*   Better multi-selection paste for text copied from multiple CodeMirror selections
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.3.0...4.4.0).

## 4.3.0 (2014-06-23)

*   Several [vim bindings](http://codemirror.net/demo/vim.html) improvements: search and exCommand history, global flag for `:substitute`, `:global` command.
*   Allow hiding the cursor by setting [`cursorBlinkRate`](http://codemirror.net/doc/manual.html#option_cursorBlinkRate) to a negative value.
*   Make gutter markers themeable, use this in foldgutter.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.2.0...4.3.0).

## 4.2.0 (2014-05-19)

*   Fix problem where some modes were broken by the fact that empty tokens were forbidden.
*   Several fixes to context menu handling.
*   On undo, scroll _change_, not cursor, into view.
*   Rewritten [Jade](http://codemirror.net/mode/jade/index.html) mode.
*   Various improvements to [Shell](http://codemirror.net/mode/shell/index.html) (support for more syntax) and [Python](http://codemirror.net/mode/python/index.html) (better indentation) modes.
*   New mode: [Cypher](http://codemirror.net/mode/cypher/index.html).
*   New theme: [Neo](http://codemirror.net/demo/theme.html#neo).
*   Support direct styling options (color, line style, width) in the [rulers](http://codemirror.net/doc/manual.html#addon_rulers) addon.
*   Recognize per-editor configuration for the [show-hint](http://codemirror.net/doc/manual.html#addon_show-hint) and [foldcode](http://codemirror.net/doc/manual.html#addon_foldcode) addons.
*   More intelligent scanning for existing close tags in [closetag](http://codemirror.net/doc/manual.html#addon_closetag) addon.
*   In the [Vim bindings](http://codemirror.net/demo/vim.html): Fix bracket matching, support case conversion in visual mode, visual paste, append action.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.1.0...4.2.0).

## 4.1.0 (2014-04-22)

*   _Slightly incompatible_: The [`"cursorActivity"`](http://codemirror.net/doc/manual.html#event_cursorActivity) event now fires after all other events for the operation (and only for handlers that were actually registered at the time the activity happened).
*   New command: [`insertSoftTab`](http://codemirror.net/doc/manual.html#command_insertSoftTab).
*   New mode: [Django](http://codemirror.net/mode/django/index.html).
*   Improved modes: [Verilog](http://codemirror.net/mode/verilog/index.html) (rewritten), [Jinja2](http://codemirror.net/mode/jinja2/index.html), [Haxe](http://codemirror.net/mode/haxe/index.html), [PHP](http://codemirror.net/mode/php/index.html) (string interpolation highlighted), [JavaScript](http://codemirror.net/mode/javascript/index.html) (indentation of trailing else, template strings), [LiveScript](http://codemirror.net/mode/livescript/index.html) (multi-line strings).
*   Many small issues from the 3.x→4.x transition were found and fixed.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/4.0.3...4.1.0).

## 3.24.0 (2014-04-22)

Merges the improvements from 4.1 that could easily be applied to the 3.x code. Also improves the way the editor size is updated when line widgets change.

## 3.23.0 (2014-03-20)

*   In the [XML mode](http://codemirror.net/mode/xml/index.html), add `brackets` style to angle brackets, fix case-sensitivity of tags for HTML.
*   New mode: [Dylan](http://codemirror.net/mode/dylan/index.html).
*   Many improvements to the [Vim bindings](http://codemirror.net/demo/vim.html).

## 3.22.0 (2014-02-21)

*   Adds the [`findMarks`](http://codemirror.net/doc/manual.html#findMarks) method.
*   New addons: [rulers](http://codemirror.net/doc/manual.html#addon_rulers), markdown-fold, yaml-lint.
*   New theme: [mdn-like](http://codemirror.net/demo/theme.html#mdn-like).
*   New mode: [Solr](http://codemirror.net/mode/solr/index.html).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.21.0...3.22.0).

## 3.21.0 (2014-01-16)

*   Auto-indenting a block will no longer add trailing whitespace to blank lines.
*   Marking text has a new option [`clearWhenEmpty`](http://codemirror.net/doc/manual.html#markText) to control auto-removal.
*   Several bugfixes in the handling of bidirectional text.
*   The [XML](http://codemirror.net/mode/xml/index.html) and [CSS](http://codemirror.net/mode/css/index.html) modes were largely rewritten. [LESS](http://codemirror.net/mode/css/less.html) support was added to the CSS mode.
*   The OCaml mode was moved to an [mllike](http://codemirror.net/mode/mllike/index.html) mode, F# support added.
*   Make it possible to fetch multiple applicable helper values with [`getHelpers`](http://codemirror.net/doc/manual.html#getHelpers), and to register helpers matched on predicates with [`registerGlobalHelper`](http://codemirror.net/doc/manual.html#registerGlobalHelper).
*   New theme [pastel-on-dark](http://codemirror.net/demo/theme.html#pastel-on-dark).
*   Better ECMAScript 6 support in [JavaScript](http://codemirror.net/mode/javascript/index.html) mode.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.20.0...3.21.0).

## 3.20.0 (2013-11-21)

*   New modes: [Julia](http://codemirror.net/mode/julia/index.html) and [PEG.js](http://codemirror.net/mode/pegjs/index.html).
*   Support ECMAScript 6 in the [JavaScript mode](http://codemirror.net/mode/javascript/index.html).
*   Improved indentation for the [CoffeeScript mode](http://codemirror.net/mode/coffeescript/index.html).
*   Make non-printable-character representation [configurable](http://codemirror.net/doc/manual.html#option_specialChars).
*   Add ‘notification’ functionality to [dialog](http://codemirror.net/doc/manual.html#addon_dialog) addon.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.19.0...3.20.0).

## 3.19.0 (2013-10-21)

*   New modes: [Eiffel](http://codemirror.net/mode/eiffel/index.html), [Gherkin](http://codemirror.net/mode/gherkin/index.html), [MSSQL dialect](http://codemirror.net/mode/sql/?mime=text/x-mssql).
*   New addons: [hardwrap](http://codemirror.net/doc/manual.html#addon_hardwrap), [sql-hint](http://codemirror.net/doc/manual.html#addon_sql-hint).
*   New theme: [MBO](http://codemirror.net/demo/theme.html#mbo).
*   Add [support](http://codemirror.net/doc/manual.html#token_style_line) for line-level styling from mode tokenizers.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.18.0...3.19.0).

## 3.18.0 (2013-09-23)

Emergency release to fix a problem in 3.17 where `.setOption("lineNumbers", false)` would raise an error.

## 3.17.0 (2013-09-23)

*   New modes: [Fortran](http://codemirror.net/mode/fortran/index.html), [Octave](http://codemirror.net/mode/octave/index.html) (Matlab), [TOML](http://codemirror.net/mode/toml/index.html), and [DTD](http://codemirror.net/mode/dtd/index.html).
*   New addons: [`css-lint`](http://codemirror.net/addon/lint/css-lint.js), [`css-hint`](http://codemirror.net/doc/manual.html#addon_css-hint).
*   Improve resilience to CSS 'frameworks' that globally mess up `box-sizing`.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.16.0...3.17.0).

## 3.16.0 (2013-08-21)

*   The whole codebase is now under a single [license](http://codemirror.net/LICENSE) file.
*   The project page was overhauled and redesigned.
*   New themes: [Paraiso](http://codemirror.net/demo/theme.html#paraiso-dark) ([light](http://codemirror.net/demo/theme.html#paraiso-light)), [The Matrix](http://codemirror.net/demo/theme.html#the-matrix).
*   Improved interaction between themes and [active-line](http://codemirror.net/doc/manual.html#addon_active-line)/[matchbrackets](http://codemirror.net/doc/manual.html#addon_matchbrackets) addons.
*   New [folding](http://codemirror.net/doc/manual.html#addon_foldcode) function `CodeMirror.fold.comment`.
*   Added [fullscreen](http://codemirror.net/doc/manual.html#addon_fullscreen) addon.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.15.0...3.16.0).

## 3.15.0 (2013-07-29)

*   New modes: [Jade](http://codemirror.net/mode/jade/index.html), [Nginx](http://codemirror.net/mode/nginx/index.html).
*   New addons: [Tern](http://codemirror.net/demo/tern.html), [matchtags](http://codemirror.net/doc/manual.html#addon_matchtags), and [foldgutter](http://codemirror.net/doc/manual.html#addon_foldgutter).
*   Introduced [_helper_](http://codemirror.net/doc/manual.html#getHelper) concept ([context](https://groups.google.com/forum/#!msg/codemirror/cOc0xvUUEUU/nLrX1-qnidgJ)).
*   New method: [`getModeAt`](http://codemirror.net/doc/manual.html#getModeAt).
*   New themes: base16 [dark](http://codemirror.net/demo/theme.html#base16-dark)/[light](http://codemirror.net/demo/theme.html#base16-light), 3024 [dark](http://codemirror.net/demo/theme.html#3024-night)/[light](http://codemirror.net/demo/theme.html#3024-day), [tomorrow-night](http://codemirror.net/demo/theme.html#tomorrow-night-eighties).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.14.0...3.15.0).

## 3.14.0 (2013-06-20)

*   New addons: [trailing space highlight](http://codemirror.net/doc/manual.html#addon_trailingspace), [XML completion](http://codemirror.net/doc/manual.html#addon_xml-hint) (rewritten), and [diff merging](http://codemirror.net/doc/manual.html#addon_merge).
*   [`markText`](http://codemirror.net/doc/manual.html#markText) and [`addLineWidget`](http://codemirror.net/doc/manual.html#addLineWidget) now take a `handleMouseEvents` option.
*   New methods: [`lineAtHeight`](http://codemirror.net/doc/manual.html#lineAtHeight), [`getTokenTypeAt`](http://codemirror.net/doc/manual.html#getTokenTypeAt).
*   More precise cleanness-tracking using [`changeGeneration`](http://codemirror.net/doc/manual.html#changeGeneration) and [`isClean`](http://codemirror.net/doc/manual.html#isClean).
*   Many extensions to [Emacs](http://codemirror.net/demo/emacs.html) mode (prefixes, more navigation units, and more).
*   New events [`"keyHandled"`](http://codemirror.net/doc/manual.html#event_keyHandled) and [`"inputRead"`](http://codemirror.net/doc/manual.html#event_inputRead).
*   Various improvements to [Ruby](http://codemirror.net/mode/ruby/index.html), [Smarty](http://codemirror.net/mode/smarty/index.html), [SQL](http://codemirror.net/mode/sql/index.html), and [Vim](http://codemirror.net/demo/vim.html) modes.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/3.13.0...3.14.0).

## 3.13.0 (2013-05-20)

*   New modes: [COBOL](http://codemirror.net/mode/cobol/index.html) and [HAML](http://codemirror.net/mode/haml/index.html).
*   New options: [`cursorScrollMargin`](http://codemirror.net/doc/manual.html#option_cursorScrollMargin) and [`coverGutterNextToScrollbar`](http://codemirror.net/doc/manual.html#option_coverGutterNextToScrollbar).
*   New addon: [commenting](http://codemirror.net/doc/manual.html#addon_comment).
*   More features added to the [Vim keymap](http://codemirror.net/demo/vim.html).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.12...3.13.0).

## 3.12.0 (2013-04-19)

*   New mode: [GNU assembler](http://codemirror.net/mode/gas/index.html).
*   New options: [`maxHighlightLength`](http://codemirror.net/doc/manual.html#option_maxHighlightLength) and [`historyEventDelay`](http://codemirror.net/doc/manual.html#option_historyEventDelay).
*   Added [`addToHistory`](http://codemirror.net/doc/manual.html#mark_addToHistory) option for `markText`.
*   Various fixes to JavaScript tokenization and indentation corner cases.
*   Further improvements to the vim mode.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.11...v3.12).

## 3.11.0 (2013-03-20)

*   **Removed code:** `collapserange`, `formatting`, and `simple-hint` addons. `plsql` and `mysql` modes (use [`sql`](http://codemirror.net/mode/sql/index.html) mode).
*   **Moved code:** the range-finding functions for folding now have [their own files](http://codemirror.net/addon/fold/).
*   **Changed interface:** the [`continuecomment`](http://codemirror.net/doc/manual.html#addon_continuecomment) addon now exposes an option, rather than a command.
*   New modes: [SCSS](http://codemirror.net/mode/css/scss.html), [Tcl](http://codemirror.net/mode/tcl/index.html), [LiveScript](http://codemirror.net/mode/livescript/index.html), and [mIRC](http://codemirror.net/mode/mirc/index.html).
*   New addons: [`placeholder`](http://codemirror.net/demo/placeholder.html), [HTML completion](http://codemirror.net/demo/html5complete.html).
*   New methods: [`hasFocus`](http://codemirror.net/doc/manual.html#hasFocus), [`defaultCharWidth`](http://codemirror.net/doc/manual.html#defaultCharWidth).
*   New events: [`beforeCursorEnter`](http://codemirror.net/doc/manual.html#event_beforeCursorEnter), [`renderLine`](http://codemirror.net/doc/manual.html#event_renderLine).
*   Many improvements to the [`show-hint`](http://codemirror.net/doc/manual.html#addon_show-hint) completion dialog addon.
*   Tweak behavior of by-word cursor motion.
*   Further improvements to the [vim mode](http://codemirror.net/demo/vim.html).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.1...v3.11).

## 3.02.0 (2013-01-25)

Single-bugfix release. Fixes a problem that prevents CodeMirror instances from being garbage-collected after they become unused.

## 3.01.0 (2013-01-21)

*   Move all add-ons into an organized directory structure under [`/addon`](http://codemirror.net/addon/). **You might have to adjust your paths.**
*   New modes: [D](http://codemirror.net/mode/d/index.html), [Sass](http://codemirror.net/mode/sass/index.html), [APL](http://codemirror.net/mode/apl/index.html), [SQL](http://codemirror.net/mode/sql/index.html) (configurable), and [Asterisk](http://codemirror.net/mode/asterisk/index.html).
*   Several bugfixes in right-to-left text support.
*   Add [`rtlMoveVisually`](http://codemirror.net/doc/manual.html#option_rtlMoveVisually) option.
*   Improvements to vim keymap.
*   Add built-in (lightweight) [overlay mode](http://codemirror.net/doc/manual.html#addOverlay) support.
*   Support `showIfHidden` option for [line widgets](http://codemirror.net/doc/manual.html#addLineWidget).
*   Add simple [Python hinter](http://codemirror.net/doc/manual.html#addon_python-hint).
*   Bring back the [`fixedGutter`](http://codemirror.net/doc/manual.html#option_fixedGutter) option.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.0...v3.01).

## 3.1.0 (2013-02-21)

*   **Incompatible:** key handlers may now _return_, rather than _throw_ `CodeMirror.Pass` to signal they didn't handle the key.
*   Make documents a [first-class construct](http://codemirror.net/doc/manual.html#api_doc), support split views and subviews.
*   Add a [new module](http://codemirror.net/doc/manual.html#addon_show-hint) for showing completion hints. Deprecate `simple-hint.js`.
*   Extend [htmlmixed mode](http://codemirror.net/mode/htmlmixed/index.html) to allow custom handling of script types.
*   Support an `insertLeft` option to [`setBookmark`](http://codemirror.net/doc/manual.html#setBookmark).
*   Add an [`eachLine`](http://codemirror.net/doc/manual.html#eachLine) method to iterate over a document.
*   New addon modules: [selection marking](http://codemirror.net/demo/markselection.html), [linting](http://codemirror.net/demo/lint.html), and [automatic bracket closing](http://codemirror.net/demo/closebrackets.html).
*   Add [`"beforeChange"`](http://codemirror.net/doc/manual.html#event_beforeChange) and [`"beforeSelectionChange"`](http://codemirror.net/doc/manual.html#event_beforeSelectionChange) events.
*   Add [`"hide"`](http://codemirror.net/doc/manual.html#event_hide) and [`"unhide"`](http://codemirror.net/doc/manual.html#event_unhide) events to marked ranges.
*   Fix [`coordsChar`](http://codemirror.net/doc/manual.html#coordsChar)'s interpretation of its argument to match the documentation.
*   New modes: [Turtle](http://codemirror.net/mode/turtle/index.html) and [Q](http://codemirror.net/mode/q/index.html).
*   Further improvements to the [vim mode](http://codemirror.net/demo/vim.html).
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.01...v3.1).

## 3.0.0 (2012-12-10)

**New major version**. Only partially backwards-compatible. See the [upgrading guide](http://codemirror.net/doc/upgrade_v3.html) for more information. Changes since release candidate 2:

*   Rewritten VIM mode.
*   Fix a few minor scrolling and sizing issues.
*   Work around Safari segfault when dragging.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v3.0rc2...v3.0).

## 2.38.0 (2013-01-21)

Integrate some bugfixes, enhancements to the vim keymap, and new modes ([D](http://codemirror.net/mode/d/index.html), [Sass](http://codemirror.net/mode/sass/index.html), [APL](http://codemirror.net/mode/apl/index.html)) from the v3 branch.

## 2.37.0 (2012-12-20)

*   New mode: [SQL](http://codemirror.net/mode/sql/index.html) (will replace [plsql](http://codemirror.net/mode/plsql/index.html) and [mysql](http://codemirror.net/mode/mysql/index.html) modes).
*   Further work on the new VIM mode.
*   Fix Cmd/Ctrl keys on recent Operas on OS X.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v2.36...v2.37).

## 2.36.0 (2012-11-20)

*   New mode: [Z80 assembly](http://codemirror.net/mode/z80/index.html).
*   New theme: [Twilight](http://codemirror.net/demo/theme.html#twilight).
*   Add command-line compression helper.
*   Make [`scrollIntoView`](http://codemirror.net/doc/manual.html#scrollIntoView) public.
*   Add [`defaultTextHeight`](http://codemirror.net/doc/manual.html#defaultTextHeight) method.
*   Various extensions to the vim keymap.
*   Make [PHP mode](http://codemirror.net/mode/php/index.html) build on [mixed HTML mode](http://codemirror.net/mode/htmlmixed/index.html).
*   Add [comment-continuing](http://codemirror.net/doc/manual.html#addon_continuecomment) add-on.
*   Full [list of patches](http://codemirror.net/https://github.com/codemirror/CodeMirror/compare/v2.35...v2.36).

## 2.35.0 (2012-10-22)

*   New (sub) mode: [TypeScript](http://codemirror.net/mode/javascript/typescript.html).
*   Don't overwrite (insert key) when pasting.
*   Fix several bugs in [`markText`](http://codemirror.net/doc/manual.html#markText)/undo interaction.
*   Better indentation of JavaScript code without semicolons.
*   Add [`defineInitHook`](http://codemirror.net/doc/manual.html#defineInitHook) function.
*   Full [list of patches](https://github.com/codemirror/CodeMirror/compare/v2.34...v2.35).

## 2.34.0 (2012-09-19)

*   New mode: [Common Lisp](http://codemirror.net/mode/commonlisp/index.html).
*   Fix right-click select-all on most browsers.
*   Change the way highlighting happens:
      Saves memory and CPU cycles.
      `compareStates` is no longer needed.
      `onHighlightComplete` no longer works.
*   Integrate mode (Markdown, XQuery, CSS, sTex) tests in central testsuite.
*   Add a [`CodeMirror.version`](http://codemirror.net/doc/manual.html#version) property.
*   More robust handling of nested modes in [formatting](http://codemirror.net/demo/formatting.html) and [closetag](http://codemirror.net/demo/closetag.html) plug-ins.
*   Un/redo now preserves [marked text](http://codemirror.net/doc/manual.html#markText) and bookmarks.
*   [Full list](https://github.com/codemirror/CodeMirror/compare/v2.33...v2.34) of patches.

## 2.33.0 (2012-08-23)

*   New mode: [Sieve](http://codemirror.net/mode/sieve/index.html).
*   New [`getViewPort`](http://codemirror.net/doc/manual.html#getViewport) and [`onViewportChange`](http://codemirror.net/doc/manual.html#option_onViewportChange) API.
*   [Configurable](http://codemirror.net/doc/manual.html#option_cursorBlinkRate) cursor blink rate.
*   Make binding a key to `false` disabling handling (again).
*   Show non-printing characters as red dots.
*   More tweaks to the scrolling model.
*   Expanded testsuite. Basic linter added.
*   Remove most uses of `innerHTML`. Remove `CodeMirror.htmlEscape`.
*   [Full list](https://github.com/codemirror/CodeMirror/compare/v2.32...v2.33) of patches.

## 2.32.0 (2012-07-23)

Emergency fix for a bug where an editor with line wrapping on IE will break when there is _no_ scrollbar.

## 2.31.0 (2012-07-20)

*   New modes: [OCaml](http://codemirror.net/mode/ocaml/index.html), [Haxe](http://codemirror.net/mode/haxe/index.html), and [VB.NET](http://codemirror.net/mode/vb/index.html).
*   Several fixes to the new scrolling model.
*   Add a [`setSize`](http://codemirror.net/doc/manual.html#setSize) method for programmatic resizing.
*   Add [`getHistory`](http://codemirror.net/doc/manual.html#getHistory) and [`setHistory`](http://codemirror.net/doc/manual.html#setHistory) methods.
*   Allow custom line separator string in [`getValue`](http://codemirror.net/doc/manual.html#getValue) and [`getRange`](http://codemirror.net/doc/manual.html#getRange).
*   Support double- and triple-click drag, double-clicking whitespace.
*   And more... [(all patches)](https://github.com/codemirror/CodeMirror/compare/v2.3...v2.31)

## 2.30.0 (2012-06-22)

*   **New scrollbar implementation**. Should flicker less. Changes DOM structure of the editor.
*   New theme: [vibrant-ink](http://codemirror.net/demo/theme.html#vibrant-ink).
*   Many extensions to the VIM keymap (including text objects).
*   Add [mode-multiplexing](http://codemirror.net/demo/multiplex.html) utility script.
*   Fix bug where right-click paste works in read-only mode.
*   Add a [`getScrollInfo`](http://codemirror.net/doc/manual.html#getScrollInfo) method.
*   Lots of other [fixes](https://github.com/codemirror/CodeMirror/compare/v2.25...v2.3).

## 2.25.0 (2012-05-23)

*   New mode: [Erlang](http://codemirror.net/mode/erlang/index.html).
*   **Remove xmlpure mode** (use [xml.js](http://codemirror.net/mode/xml/index.html)).
*   Fix line-wrapping in Opera.
*   Fix X Windows middle-click paste in Chrome.
*   Fix bug that broke pasting of huge documents.
*   Fix backspace and tab key repeat in Opera.

## 2.24.0 (2012-04-23)

*   **Drop support for Internet Explorer 6**.
*   New modes: [Shell](http://codemirror.net/mode/shell/index.html), [Tiki wiki](http://codemirror.net/mode/tiki/index.html), [Pig Latin](http://codemirror.net/mode/pig/index.html).
*   New themes: [Ambiance](http://codemirror.net/demo/theme.html#ambiance), [Blackboard](http://codemirror.net/demo/theme.html#blackboard).
*   More control over drag/drop with [`dragDrop`](http://codemirror.net/doc/manual.html#option_dragDrop) and [`onDragEvent`](http://codemirror.net/doc/manual.html#option_onDragEvent) options.
*   Make HTML mode a bit less pedantic.
*   Add [`compoundChange`](http://codemirror.net/doc/manual.html#compoundChange) API method.
*   Several fixes in undo history and line hiding.
*   Remove (broken) support for `catchall` in key maps, add `nofallthrough` boolean field instead.

## 2.23.0 (2012-03-26)

*   Change **default binding for tab**. Starting in 2.23, these bindings are default:
    *   Tab: Insert tab character
    *   Shift-tab: Reset line indentation to default
    *   Ctrl/Cmd-[: Reduce line indentation (old tab behaviour)
    *   Ctrl/Cmd-]: Increase line indentation (old shift-tab behaviour)
*   New modes: [XQuery](http://codemirror.net/mode/xquery/index.html) and [VBScript](http://codemirror.net/mode/vbscript/index.html).
*   Two new themes: [lesser-dark](http://codemirror.net/mode/less/index.html) and [xq-dark](http://codemirror.net/mode/xquery/index.html).
*   Differentiate between background and text styles in [`setLineClass`](http://codemirror.net/doc/manual.html#setLineClass).
*   Fix drag-and-drop in IE9+.
*   Extend [`charCoords`](http://codemirror.net/doc/manual.html#charCoords) and [`cursorCoords`](http://codemirror.net/doc/manual.html#cursorCoords) with a `mode` argument.
*   Add [`autofocus`](http://codemirror.net/doc/manual.html#option_autofocus) option.
*   Add [`findMarksAt`](http://codemirror.net/doc/manual.html#findMarksAt) method.

## 2.22.0 (2012-02-27)

*   Allow [key handlers](http://codemirror.net/doc/manual.html#keymaps) to pass up events, allow binding characters.
*   Add [`autoClearEmptyLines`](http://codemirror.net/doc/manual.html#option_autoClearEmptyLines) option.
*   Properly use tab stops when rendering tabs.
*   Make PHP mode more robust.
*   Support indentation blocks in [code folder](http://codemirror.net/doc/manual.html#addon_foldcode).
*   Add a script for [highlighting instances of the selection](http://codemirror.net/doc/manual.html#addon_match-highlighter).
*   New [.properties](http://codemirror.net/mode/properties/index.html) mode.
*   Fix many bugs.

## 2.21.0 (2012-01-27)

*   Added [LESS](http://codemirror.net/mode/less/index.html), [MySQL](http://codemirror.net/mode/mysql/index.html), [Go](http://codemirror.net/mode/go/index.html), and [Verilog](http://codemirror.net/mode/verilog/index.html) modes.
*   Add [`smartIndent`](http://codemirror.net/doc/manual.html#option_smartIndent) option.
*   Support a cursor in [`readOnly`](http://codemirror.net/doc/manual.html#option_readOnly)-mode.
*   Support assigning multiple styles to a token.
*   Use a new approach to drawing the selection.
*   Add [`scrollTo`](http://codemirror.net/doc/manual.html#scrollTo) method.
*   Allow undo/redo events to span non-adjacent lines.
*   Lots and lots of bugfixes.

## 2.20.0 (2011-12-20)

*   Slightly incompatible API changes. Read [this](http://codemirror.net/doc/upgrade_v2.2.html).
*   New approach to [binding](http://codemirror.net/doc/manual.html#option_extraKeys) keys, support for [custom bindings](http://codemirror.net/doc/manual.html#option_keyMap).
*   Support for overwrite (insert).
*   [Custom-width](http://codemirror.net/doc/manual.html#option_tabSize) and [stylable](http://codemirror.net/demo/visibletabs.html) tabs.
*   Moved more code into [add-on scripts](http://codemirror.net/doc/manual.html#addons).
*   Support for sane vertical cursor movement in wrapped lines.
*   More reliable handling of editing [marked text](http://codemirror.net/doc/manual.html#markText).
*   Add minimal [emacs](http://codemirror.net/demo/emacs.html) and [vim](http://codemirror.net/demo/vim.html) bindings.
*   Rename `coordsFromIndex` to [`posFromIndex`](http://codemirror.net/doc/manual.html#posFromIndex), add [`indexFromPos`](http://codemirror.net/doc/manual.html#indexFromPos) method.

## 2.18.0 (2011-11-21)

Fixes `TextMarker.clear`, which is broken in 2.17.

## 2.17.0 (2011-11-21)

*   Add support for [line wrapping](http://codemirror.net/doc/manual.html#option_lineWrapping) and [code folding](http://codemirror.net/doc/manual.html#hideLine).
*   Add [Github-style Markdown](http://codemirror.net/mode/gfm/index.html) mode.
*   Add [Monokai](http://codemirror.net/theme/monokai.css) and [Rubyblue](http://codemirror.net/theme/rubyblue.css) themes.
*   Add [`setBookmark`](http://codemirror.net/doc/manual.html#setBookmark) method.
*   Move some of the demo code into reusable components under [`lib/util`](http://codemirror.net/addon/).
*   Make screen-coord-finding code faster and more reliable.
*   Fix drag-and-drop in Firefox.
*   Improve support for IME.
*   Speed up content rendering.
*   Fix browser's built-in search in Webkit.
*   Make double- and triple-click work in IE.
*   Various fixes to modes.

## 2.16.0 (2011-10-27)

*   Add [Perl](http://codemirror.net/mode/perl/index.html), [Rust](http://codemirror.net/mode/rust/index.html), [TiddlyWiki](http://codemirror.net/mode/tiddlywiki/index.html), and [Groovy](http://codemirror.net/mode/groovy/index.html) modes.
*   Dragging text inside the editor now moves, rather than copies.
*   Add a [`coordsFromIndex`](http://codemirror.net/doc/manual.html#coordsFromIndex) method.
*   **API change**: `setValue` now no longer clears history. Use [`clearHistory`](http://codemirror.net/doc/manual.html#clearHistory) for that.
*   **API change**: [`markText`](http://codemirror.net/doc/manual.html#markText) now returns an object with `clear` and `find` methods. Marked text is now more robust when edited.
*   Fix editing code with tabs in Internet Explorer.

## 2.15.0 (2011-09-26)

Fix bug that snuck into 2.14: Clicking the character that currently has the cursor didn't re-focus the editor.

## 2.14.0 (2011-09-26)

*   Add [Clojure](http://codemirror.net/mode/clojure/index.html), [Pascal](http://codemirror.net/mode/pascal/index.html), [NTriples](http://codemirror.net/mode/ntriples/index.html), [Jinja2](http://codemirror.net/mode/jinja2/index.html), and [Markdown](http://codemirror.net/mode/markdown/index.html) modes.
*   Add [Cobalt](http://codemirror.net/theme/cobalt.css) and [Eclipse](http://codemirror.net/theme/eclipse.css) themes.
*   Add a [`fixedGutter`](http://codemirror.net/doc/manual.html#option_fixedGutter) option.
*   Fix bug with `setValue` breaking cursor movement.
*   Make gutter updates much more efficient.
*   Allow dragging of text out of the editor (on modern browsers).

## 2.13.0 (2011-08-23)

*   Add [Ruby](http://codemirror.net/mode/ruby/index.html), [R](http://codemirror.net/mode/r/index.html), [CoffeeScript](http://codemirror.net/mode/coffeescript/index.html), and [Velocity](http://codemirror.net/mode/velocity/index.html) modes.
*   Add [`getGutterElement`](http://codemirror.net/doc/manual.html#getGutterElement) to API.
*   Several fixes to scrolling and positioning.
*   Add [`smartHome`](http://codemirror.net/doc/manual.html#option_smartHome) option.
*   Add an experimental [pure XML](http://codemirror.net/mode/xmlpure/index.html) mode.

## 2.12.0 (2011-07-25)

*   Add a [SPARQL](http://codemirror.net/mode/sparql/index.html) mode.
*   Fix bug with cursor jumping around in an unfocused editor in IE.
*   Allow key and mouse events to bubble out of the editor. Ignore widget clicks.
*   Solve cursor flakiness after undo/redo.
*   Fix block-reindent ignoring the last few lines.
*   Fix parsing of multi-line attrs in XML mode.
*   Use `innerHTML` for HTML-escaping.
*   Some fixes to indentation in C-like mode.
*   Shrink horiz scrollbars when long lines removed.
*   Fix width feedback loop bug that caused the width of an inner DIV to shrink.

## 2.11.0 (2011-07-04)

*   Add a [Scheme mode](http://codemirror.net/mode/scheme/index.html).
*   Add a `replace` method to search cursors, for cursor-preserving replacements.
*   Make the [C-like mode](http://codemirror.net/mode/clike/index.html) mode more customizable.
*   Update XML mode to spot mismatched tags.
*   Add `getStateAfter` API and `compareState` mode API methods for finer-grained mode magic.
*   Add a `getScrollerElement` API method to manipulate the scrolling DIV.
*   Fix drag-and-drop for Firefox.
*   Add a C# configuration for the [C-like mode](http://codemirror.net/mode/clike/index.html).
*   Add [full-screen editing](http://codemirror.net/demo/fullscreen.html) and [mode-changing](http://codemirror.net/demo/changemode.html) demos.

## 2.10.0 (2011-06-07)

Add a [theme](http://codemirror.net/doc/manual.html#option_theme) system ([demo](http://codemirror.net/demo/theme.html)). Note that this is not backwards-compatible—you'll have to update your styles and modes!

## 2.2.0 (2011-06-07)

*   Add a [Lua mode](http://codemirror.net/mode/lua/index.html).
*   Fix reverse-searching for a regexp.
*   Empty lines can no longer break highlighting.
*   Rework scrolling model (the outer wrapper no longer does the scrolling).
*   Solve horizontal jittering on long lines.
*   Add [runmode.js](http://codemirror.net/demo/runmode.html).
*   Immediately re-highlight text when typing.
*   Fix problem with 'sticking' horizontal scrollbar.

## 2.1.0 (2011-05-26)

*   Add a [Smalltalk mode](http://codemirror.net/mode/smalltalk/index.html).
*   Add a [reStructuredText mode](http://codemirror.net/mode/rst/index.html).
*   Add a [Python mode](http://codemirror.net/mode/python/index.html).
*   Add a [PL/SQL mode](http://codemirror.net/mode/plsql/index.html).
*   `coordsChar` now works
*   Fix a problem where `onCursorActivity` interfered with `onChange`.
*   Fix a number of scrolling and mouse-click-position glitches.
*   Pass information about the changed lines to `onChange`.
*   Support cmd-up/down on OS X.
*   Add triple-click line selection.
*   Don't handle shift when changing the selection through the API.
*   Support `"nocursor"` mode for `readOnly` option.
*   Add an `onHighlightComplete` option.
*   Fix the context menu for Firefox.

## 2.0.0 (2011-03-28)

CodeMirror 2 is a complete rewrite that's faster, smaller, simpler to use, and less dependent on browser quirks. See [this](http://codemirror.net/doc/internals.html) and [this](http://groups.google.com/group/codemirror/browse_thread/thread/5a8e894024a9f580) for more information.
