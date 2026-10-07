# Monaco Editor Changelog

## [0.55.1]

- Fixes missing language exports (monaco.json/typescript/...) due to wrong "types" path - [#5123](https://github.com/microsoft/monaco-editor/issues/5123)

## [0.55.0]

### Breaking Changes
- Moves nested namespaces (`languages.css`, `languages.html`, `languages.json`, `languages.typescript`) to top level namespaces (`css`, `html`, `json`, `typescript`) to simplify the build process and align with typescript recommendations.

### New Features
- Adds native LSP support (see new `lsp` namespace).

### Bug Fixes
- Updates dompurify to 3.2.7

## [0.54.0]

- Adds option `editor.mouseMiddleClickAction`
- Various bug fixes

## [0.53.0]

- :warning: This release deprecates the AMD build and ships with significant changes of the AMD build. The AMD build will still be shipped for a while, but we don't offer support for it anymore. Please migrate to the ESM build.

### New Features

- Next Edit Suggestion support.
- Scroll On Middle Click
- Edit Context Support

### Breaking Changes

- Internal AMD modules are no longer accessible. Accessing internal AMD modules was never supported. While this is still possible in the ESM build, we don't encourage this usage pattern.
- The [browser-script-editor scenario](https://github.com/microsoft/monaco-editor/blob/a4d7907bd439b06b24e334bdf2ab597bcae658b5/samples/browser-script-editor/index.html) for unbundled synchronous script import and editor creation no longer works. Instead, a the ESM build should be used with a bundler, such as vite or webpack.
- Custom AMD workers don't work anymore out of the box.

## [0.52.0]

- Comment added inside of `IModelContentChangedEvent`

## [0.51.0]

- New fields `IEditorOptions.placeholder` and `IEditorOptions.compactMode`
- New fields `IGotoLocationOptions.multipleTests` and `IGotoLocationOptions.alternativeTestsCommand`
- New field `IInlineEditOptions.backgroundColoring`
- New experimental field `IEditorOptions.experimental.useTrueInlineView`
- New options `CommentThreadRevealOptions` for comments

Contributions to `monaco-editor`:

- [@ScottCarda-MS (Scott Carda)](https://github.com/ScottCarda-MS): Update Q# Keywords [PR #4586](https://github.com/microsoft/monaco-editor/pull/4586)

## [0.50.0]

- New field `IEditorMinimapOptions.sectionHeaderLetterSpacing`
- New field `IOverlayWidgetPosition.stackOridinal`
- New field `EmitOutput.diagnostics`
- New event `IOverlayWidget.onDidLayout`
- New events `ICodeEditor.onBeginUpdate` and `ICodeEditor.onEndUpdate`
- `HoverVerbosityRequest.action` -> `HoverVerbosityRequest.verbosityDelta`
- `MultiDocumentHighlightProvider.selector` changed from `LanguageFilter` to `LanguageSelector`
- New optional parameters in `getEmitOutput`: `emitOnlyDtsFiles` and `forceDtsEmit`

Contributions to `monaco-editor`:

- [@htcfreek (Heiko)](https://github.com/htcfreek): Add extension to `csp.contribution.ts` [PR #4504](https://github.com/microsoft/monaco-editor/pull/4504)
- [@jakebailey (Jake Bailey)](https://github.com/jakebailey): Call clearFiles on internal EmitOutput diagnostics, pass args down [PR #4482](https://github.com/microsoft/monaco-editor/pull/4482)
- [@johnyanarella (John Yanarella)](https://github.com/johnyanarella): Update TypeScript to TS 5.4.5 in all projects, vendored files [PR #4305](https://github.com/microsoft/monaco-editor/pull/4305)
- [@samstrohkorbatt](https://github.com/samstrohkorbatt): Adding Python f-string syntax support [PR #4401](https://github.com/microsoft/monaco-editor/pull/4401)

## [0.49.0]

- New proposed `editorHoverVerbosityLevel` API
- New proposed `newSymbolNamesProvider` API

Contributions to `monaco-editor`:

- [@timotheeguerin (Timothee Guerin)](https://github.com/timotheeguerin): Add support for TypeSpec language [PR #4450](https://github.com/microsoft/monaco-editor/pull/4450)

## [0.48.0]

### Additions

- Various bug fixes
- Minimap Section Headers (see config option `showRegionSectionHeaders`)
- Diff Editor Gutter Menu (see config option `renderGutterMenu`)
- `InlineCompletionsProvider.handlePartialAccept` has `PartialAcceptInfo`

Contributions to `monaco-editor`:

- [@jeremy-rifkin (Jeremy Rifkin)](https://github.com/jeremy-rifkin): Fix bug with highlighting of C++ raw string literals [PR #4436](https://github.com/microsoft/monaco-editor/pull/4436)

## [0.47.0]

### Additions

- Bug fixes
- `registerNewSymbolNameProvider`
- Experimental `registerInlineEditProvider`

## [0.46.0]

- Bug fixes

## [0.45.0]

### Breaking Changes

- `wordBasedSuggestions: boolean` -> `'off' | 'currentDocument' | 'matchingDocuments' | 'allDocuments'`
- `occurrencesHighlight: boolean` -> `'off' | 'singleFile' | 'multiFile'`

### Additions

- Many bug fixes
- `IEditorScrollbarOptions.ignoreHorizontalScrollbarInContentHeight`
- `IDiffEditor.goToDiff`
- `IDiffEditor.revealFirstDiff`

## [0.44.0]

- Removes old diff editor implementation.
- Custom diff algorithms no longer can be passed via diff editor options, instead a service should be used ([see #3558 for more details](https://github.com/microsoft/monaco-editor/issues/3558)).

## [0.42.0]

- Uses new diff editor widget by default. Use `experimental.useVersion2: false` to use the old widget. The old widget will be replaced in the next update.
- Diff editor uses inline mode by default when width is too small. Use the config option `useInlineViewWhenSpaceIsLimited` to control this behavior.
- Fixes broken language features when a model is created before the editor.

## [0.41.0]

- `IDiffEditor.diffReviewNext` was renamed to `IDiffEditor.accessibleDiffViewerNext`.
- `IDiffEditor.diffReviewPrev` was renamed to `IDiffEditor.accessibleDiffViewerPrev`.
- Introduces `InlineCompletionsProvider.yieldsToGroupIds` to allows inline completion providers to yield to other providers.
- Bugfixes

Contributions to `monaco-editor`:

- [@claylibrarymarket](https://github.com/claylibrarymarket): Fix Twig's plain text class expression [PR #4063](https://github.com/microsoft/monaco-editor/pull/4063)
- [@FossPrime (Ray Foss)](https://github.com/FossPrime): Use new GitHub pages workflow [PR #4000](https://github.com/microsoft/monaco-editor/pull/4000)
- [@leandrocp (Leandro Pereira)](https://github.com/leandrocp): Elixir - Add support for multi-letter uppercase sigils [PR #4041](https://github.com/microsoft/monaco-editor/pull/4041)
- [@philippleidig (PhilippLe)](https://github.com/philippleidig): Add TwinCAT file support for structured text (st) language [PR #3315](https://github.com/microsoft/monaco-editor/pull/3315)
- [@remcohaszing (Remco Haszing)](https://github.com/remcohaszing)
  - Add mdx language [PR #3096](https://github.com/microsoft/monaco-editor/pull/3096)
  - Export custom TypeScript worker variables [PR #3488](https://github.com/microsoft/monaco-editor/pull/3488)
  - Document some basic concepts [PR #4087](https://github.com/microsoft/monaco-editor/pull/4087)

## [0.40.0]

- Support for Glyph Margin Widgets
- Removes `getDiffLineInformationForOriginal` and `getDiffLineInformationForModified` from `IDiffEditor`
- `createTrustedTypesPolicy` is optional now
- New option `IModelDecorationOptions.shouldFillLineOnLineBreak`
- New option `EditorOptions.readOnlyMessage`

## [0.39.0]

- New method `Environment.createTrustedTypesPolicy` to override trusted types handling.
- Bugfixes

Contributions to `monaco-editor`:

- [@dlitsman (Dmitry Litsman)](https://github.com/dlitsman): Extend the "Rendering Glyphs In The Margin" example to include a transparent color note. [PR #3945](https://github.com/microsoft/monaco-editor/pull/3945)
- [@dneto0 (David Neto)](https://github.com/dneto0): Avoid a hack in the WGSL lexer [PR #3887](https://github.com/microsoft/monaco-editor/pull/3887)
- [@spahnke (Sebastian Pahnke)](https://github.com/spahnke)
  - [JS, TS] Add Monarch support for private identifiers [PR #3919](https://github.com/microsoft/monaco-editor/pull/3919)
  - [JS] Add static keyword [PR #3922](https://github.com/microsoft/monaco-editor/pull/3922)
- [@titouanmathis (Titouan Mathis)](https://github.com/titouanmathis): [Webpack Plugin] Fix CJS being injected in ESM files [PR #3933](https://github.com/microsoft/monaco-editor/pull/3933)

## [0.38.0]

- `diffAlgorithm` values changed: `smart` -> `legacy`, `experimental` -> `advanced`
- New `registerEditorOpener` API
- New property `IViewZone.showInHiddenAreas` to show view zones in hidden areas
- New properties `InlineCompletions.suppressSuggestions` and `InlineCompletions.enableForwardStability`
- Bugfixes

Contributions to `monaco-editor`:

- [@dneto0 (David Neto)](https://github.com/dneto0): Add WebGPU Shading Language tokenizer, with tests [PR #3884](https://github.com/microsoft/monaco-editor/pull/3884)
- [@kisstkondoros (Tamas Kiss)](https://github.com/kisstkondoros): Fix reference error in convert method of OutlineAdapter [PR #3924](https://github.com/microsoft/monaco-editor/pull/3924)
- [@tamayika](https://github.com/tamayika): Change moduleResolution to node16 and adopt TS 5.0 [PR #3860](https://github.com/microsoft/monaco-editor/pull/3860)

## [0.37.1]

- Fixes Inline Completions feature

## [0.37.0]

- New `registerLinkOpener` API
- New `onLanguageEncountered` event for when a language is encountered during tokenization.
- Updated TypeScript to 5.0
- New required field `canFormatMultipleRanges` on `DocumentRangeFormattingEditProvider`
- Bugfixes

Contributions to `monaco-editor`:

- [@danboo (Dan Boorstein)](https://github.com/danboo): add perl module (.pm) extension [PR #3258](https://github.com/microsoft/monaco-editor/pull/3258)
- [@miloush (Jan Kučera)](https://github.com/miloush): Include .xsd and .xslt as an XML extension [PR #3866](https://github.com/microsoft/monaco-editor/pull/3866)
- [@nnnnoel (Noel Kim (김민혁))](https://github.com/nnnnoel): Add CommonJS, ESM extension for TS [PR #3264](https://github.com/microsoft/monaco-editor/pull/3264)
- [@PmcFizz (Fizz)](https://github.com/PmcFizz): opt example [PR #3726](https://github.com/microsoft/monaco-editor/pull/3726)
- [@tamayika](https://github.com/tamayika)
  - Fix playground samples type errors and add CI test [PR #3722](https://github.com/microsoft/monaco-editor/pull/3722)
  - Add custom keybinding example [PR #3848](https://github.com/microsoft/monaco-editor/pull/3848)
- [@yuri1969 (yuri)](https://github.com/yuri1969): Various YAML improvements [PR #3864](https://github.com/microsoft/monaco-editor/pull/3864)

## [0.36.1]

- Marks unneeded dependencies as dev dependencies.

## [0.36.0]

- Maintenance release

## [0.35.0]

- Adds sticky scrolling
- Support for custom diff algorithms

### Breaking Changes

- Renamed the option `enableDropIntoEditor` to `dropIntoEditor`
- Changed `IContentWidgetPosition.range: Range` to `IContentWidgetPosition.secondaryPosition: Position`
- `renderFinalNewline` config: is now of type `'on' | 'off' | 'dimmed'` (was `boolean`).
- `cursorSmoothCaretAnimation` config: is now of type `'off' | 'explicit' | 'on'` (was `boolean`)

Contributions to `monaco-editor`:

- [@andrewimcclement](https://github.com/andrewimcclement): Add .props & .targets as XML extensions [PR #3510](https://github.com/microsoft/monaco-editor/pull/3510)
- [@DetachHead](https://github.com/DetachHead): add `satisfies` keyword to typescript [PR #3337](https://github.com/microsoft/monaco-editor/pull/3337)
- [@jeremy-rifkin (Jeremy Rifkin)](https://github.com/jeremy-rifkin): Add AVX 512 types to C++ syntax highlighting [PR #3286](https://github.com/microsoft/monaco-editor/pull/3286)
- [@joecarl (José Carlos)](https://github.com/joecarl): Add setModeConfiguration for monaco.languages.typescript.[typescript|javascript]Defaults [PR #3489](https://github.com/microsoft/monaco-editor/pull/3489)
- [@jonatanklosko (Jonatan Kłosko)](https://github.com/jonatanklosko): Update Elixir tokenizer [PR #3453](https://github.com/microsoft/monaco-editor/pull/3453)
- [@JoyceZhu (Joyce Zhu)](https://github.com/JoyceZhu): Update import path for `browser-esm-webpack-small` [PR #3402](https://github.com/microsoft/monaco-editor/pull/3402)
- [@Jozebel11 (Joseph Hardwicke)](https://github.com/Jozebel11): Add position styling to playground container to equal 'relative' [PR #3446](https://github.com/microsoft/monaco-editor/pull/3446)
- [@kirjs (Kirill Cherkashin)](https://github.com/kirjs): Fix broken link in the changelog [PR #3382](https://github.com/microsoft/monaco-editor/pull/3382)
- [@LeoDog896 (Tristan F.)](https://github.com/LeoDog896)
  - Ignore dist from vite/parcel in prettier [PR #3466](https://github.com/microsoft/monaco-editor/pull/3466)
  - Add .kts as a file extension [PR #3467](https://github.com/microsoft/monaco-editor/pull/3467)
- [@MasterOdin (Matthew Peveler)](https://github.com/MasterOdin): Add new pgsql 15 functions [PR #3363](https://github.com/microsoft/monaco-editor/pull/3363)
- [@mofux (Thomas Zilz)](https://github.com/mofux): Resolve URIs with special characters correctly [PR #3392](https://github.com/microsoft/monaco-editor/pull/3392)
- [@nnnnoel (Noel Kim (김민혁))](https://github.com/nnnnoel): fix(mysql/tokenizer): Fix single quoted string escape [PR #3232](https://github.com/microsoft/monaco-editor/pull/3232)
- [@rcjsuen (Remy Suen)](https://github.com/rcjsuen): Fix the color provider's columns [PR #3348](https://github.com/microsoft/monaco-editor/pull/3348)
- [@RubenRBS (Rubén Rincón Blanco)](https://github.com/RubenRBS): Recognize \0 as an escape sequence [PR #3443](https://github.com/microsoft/monaco-editor/pull/3443)
- [@sekedus (Sekedus)](https://github.com/sekedus): add homepage url [PR #3497](https://github.com/microsoft/monaco-editor/pull/3497)
- [@tr3ysmith (Trey Smith)](https://github.com/tr3ysmith): Fix possible duplicate of editors in vite sample [PR #3390](https://github.com/microsoft/monaco-editor/pull/3390)

## [0.34.1]

- Adds API to register global actions, commands, or keybinding rules

## [0.34.0]

- Introduction of `IEditor.createDecorationsCollection` API
- New function `removeAllMarkers` to remove all markers
- Support for light high contrast theme
- Introduction of `BracketPairColorizationOptions.independentColorPoolPerBracketType`
- Introduction of `PositionAffinity.LeftOfInjectedText` and `PositionAffinity.RightOfInjectedText`
- Introduction of `IEditorOptions.showFoldingControls: 'never'`
- Introduction of `IDiffEditorBaseOptions.renderMarginRevertIcon: boolean`
- Inline Quick Suggestions
- Introduction of `IContentWidgetPosition.positionAffinity`
- Provider can now be registered for a `LanguageSelector`

### Breaking Changes

- `IEditorInlayHintsOptions` tweaks
- Iteration on `InlineCompletion` API
- `WorkspaceFileEdit` -> `IWorkspaceFileEdit`
  - `oldUri` -> `oldResource`
  - `newUri` -> `newResource`
- `WorkspaceTextEdit` -> `IWorkspaceTextEdit`
  - `edit` -> `textEdit` (now supports `insertAsSnippet`)
  - `modelVersionId?: number` -> `versionId: number | undefined`
- `InlayHint` API tweaks
- Soft deprecation of `ICodeEditor.deltaDecorations`, no adoption required. `IEditor.createDecorationsCollection` API should be used instead.

Contributions to `monaco-editor`:

- [@alexander-zw (Alexander Wu)](https://github.com/alexander-zw): [webpack readme] Add how to get languages/features [PR #3171](https://github.com/microsoft/monaco-editor/pull/3171)
- [@anjbur (Angela Burton)](https://github.com/anjbur): Update Q# keywords [PR #3222](https://github.com/microsoft/monaco-editor/pull/3222)
- [@bsorrentino (bsorrentino)](https://github.com/bsorrentino): Fix issue #2295 - Models with "@" in their name do not resolve as dependencies [PR #3057](https://github.com/microsoft/monaco-editor/pull/3057)
- [@MasterOdin (Matthew Peveler)](https://github.com/MasterOdin): Remove duplicate testcases for mysql [PR #3138](https://github.com/microsoft/monaco-editor/pull/3138)
- [@mhsdesign (Marc Henry Schultz)](https://github.com/mhsdesign): [DOCS] IEditorOptions.automaticLayout uses ResizeObserver 3051 [PR #3052](https://github.com/microsoft/monaco-editor/pull/3052)
- [@supersonictw (SuperSonic)](https://github.com/supersonictw): Fix menu link in integrate-esm.md [PR #3214](https://github.com/microsoft/monaco-editor/pull/3214)
- [@tonilastre (Toni)](https://github.com/tonilastre): Add config and tokenizer for query language Cypher [PR #3102](https://github.com/microsoft/monaco-editor/pull/3102)

## [0.33.0]

- The first parameter of all `monaco.languages.register*Provider` functions has changed to take a `DocumentSelector` instead of a single `languageId`
- The `Environment.getWorker` function can now return a `Promise`

### Breaking Changes

- `InlayHintKind.Other` is removed.

### Thank you

Contributions to `monaco-editor`:

- [@Dan1ve (Daniel Veihelmann)](https://github.com/Dan1ve): Make Vite sample code Firefox compatible [PR #2991](https://github.com/microsoft/monaco-editor/pull/2991)
- [@philipturner (Philip Turner)](https://github.com/philipturner): Add `@noDerivative` modifier to Swift [PR #2957](https://github.com/microsoft/monaco-editor/pull/2957)

## [0.32.1] (04.02.2022)

- fixes [an issue with service initialization](https://github.com/microsoft/monaco-editor/issues/2941).

## [0.32.0] (03.02.2022)

### Breaking Changes

- The binary format for `IEncodedLineTokens` has changed to support strikethrough text.
- `IDiffEditor.getDomNode()` has been renamed to `IDiffEditor.getContainerDomNode()`.
- `InlayHint.text` has been replaced by `InlayHint.label` and `InlayHintsProvider.provideInlayHints` now returns an `InlayHintList`.

### Thank you

Contributions to `monaco-editor`:

- [@blutorange (Andre Wachsmuth)](https://github.com/blutorange): Implements #2383 Add syntax modes for FreeMarker template language [PR #2847](https://github.com/microsoft/monaco-editor/pull/2847)
- [@forensicmike (forensicmike1)](https://github.com/forensicmike): Add "cd monaco-editor" to the step by step commandline instructions for cloning and running the samples [PR #2894](https://github.com/microsoft/monaco-editor/pull/2894)
- [@juan-carlos-diaz](https://github.com/juan-carlos-diaz): Fix #2851 Highlight correctly the attributes and identifiers (with dashes) for Shell language [PR #2871](https://github.com/microsoft/monaco-editor/pull/2871)
- [@MasterOdin (Matthew Peveler)](https://github.com/MasterOdin): Only run publish workflow on main monaco-editor repo [PR #2926](https://github.com/microsoft/monaco-editor/pull/2926)
- [@philipturner (Philip Turner)](https://github.com/philipturner)
  - Update Swift language specification to version 5.5 [PR #2855](https://github.com/microsoft/monaco-editor/pull/2855)
  - Add @preconcurrency to Swift declaration attributes [PR #2924](https://github.com/microsoft/monaco-editor/pull/2924)
- [@rcjsuen (Remy Suen)](https://github.com/rcjsuen): Support hyphenated HTML tags in Markdown syntax [PR #2864](https://github.com/microsoft/monaco-editor/pull/2864)
- [@resistdesign (Ryan Graff)](https://github.com/resistdesign): doc: (samples) Simplify Browser ESM Parcel build [PR #2832](https://github.com/microsoft/monaco-editor/pull/2832)
- [@ValeraS (Valeriy)](https://github.com/ValeraS)
  - fix(monaco-editor-webpack-plugin): load monaco-editor with webpack 4 [PR #2818](https://github.com/microsoft/monaco-editor/pull/2818)
  - tune(monaco-editor-webpack-plugin): expose plugin options type [PR #2853](https://github.com/microsoft/monaco-editor/pull/2853)
- [@ZusorCode (Tobias Messner)](https://github.com/ZusorCode): Add .cjs extension for javascript files [PR #2929](https://github.com/microsoft/monaco-editor/pull/2929)

## [0.31.1] (14.12.2021)

- Fixes [a problem with missing colors](https://github.com/microsoft/monaco-editor/issues/2822)
- Fixes [a problem with scheduling background tokenization](https://github.com/microsoft/vscode/issues/138887)
- Improves TypeScript's ESM worker.

## [0.31.0] (10.12.2021)

- adds support for [highlighting non basic ASCII, invisible or ambiguous unicode characters](https://code.visualstudio.com/updates/v1_63#_unicode-highlighting).
- adds support for setting an editor banner
- streaming hover results in case of multiple hover providers
- fixes multiple IME issues

### Breaking Changes

- the generated code is now bundled with ESBuild and the generated code makes use of newer browser features, e.g. [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining). These features should be available in all browsers, but they might not be parsed correctly by older JS parsers, specifically parcel v1 might have problems parsing the JS.

### Thank you

- [@activeguild (j1ngzoue)](https://github.com/activeguild): Add 'browser-ems-vite-react' sample [PR #2767](https://github.com/microsoft/monaco-editor/pull/2767)
- [@emojiiii (C.Y.Kun)](https://github.com/emojiiii): Fix some errors on the website playground [PR #2779](https://github.com/microsoft/monaco-editor/pull/2779)
- [@gitpaladin (Chen Minglong)](https://github.com/gitpaladin): Fix token while missing `syntax=` directive [PR #2809](https://github.com/microsoft/monaco-editor/pull/2809)
- [@jonatanklosko (Jonatan Kłosko)](https://github.com/jonatanklosko): Update Elixir tokenization of sigil modifiers [PR #2806](https://github.com/microsoft/monaco-editor/pull/2806)
- [@MasterOdin (Matthew Peveler)](https://github.com/MasterOdin)
  - Update builtin functions for mysql [PR #2749](https://github.com/microsoft/monaco-editor/pull/2749)
  - Update list of keywords for redshift [PR #2757](https://github.com/microsoft/monaco-editor/pull/2757)
  - Remove return from example addAction [PR #2772](https://github.com/microsoft/monaco-editor/pull/2772)
- [@milahu](https://github.com/milahu): fix link to monaco.d.ts [PR #2769](https://github.com/microsoft/monaco-editor/pull/2769)
- [@Pranomvignesh (Pranom Vignesh)](https://github.com/Pranomvignesh): Semantic Tokens Provider Sample is broken in docs [PR #2764](https://github.com/microsoft/monaco-editor/pull/2764)
- [@rramo012 (Rafael Ramos)](https://github.com/rramo012): Fixing the documentation links [PR #2748](https://github.com/microsoft/monaco-editor/pull/2748)

## [0.30.1] (09.11.2021)

- Fixes [a performance regression where all languages would be loaded when loading the first language](https://github.com/microsoft/monaco-editor/issues/2750).

## [0.30.0] (04.11.2021)

- adds support for rendering horizontal guides between bracket pairs and improves the vertical rendering to account for content in between brackets.
- adds new `hover.above` option to control the hover position.
- adds `ICodeEditor.onDidChangeHiddenAreas` which is fired when folding/unfolding.
- to address [CVE-2021-42574](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-42574), the editor now renders Unicode directional formatting characters by default. The special rendering can be turned off using `renderControlCharacters`. See https://code.visualstudio.com/updates/v1_62#_unicode-directional-formatting-characters for an explanation.

### Breaking Changes

- renamed enum members of `monaco.KeyCode` to align with the names given for browser codes.
- renamed `ITextModel.getModeId()` to `ITextModel.getLanguageId()`
- renamed `IPasteEvent.mode` to `IPasteEvent.languageId`

### Thank you

Contributions to `monaco-editor-webpack-plugin`:

- [@silverwind](https://github.com/silverwind): Fix letter case in repo URL [PR #165](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/165)

Contributions to `monaco-languages`:

- [@arlosi (Arlo Siemsen)](https://github.com/arlosi): Rust: highlighting raw strings and fix chars with escapes [PR #167](https://github.com/microsoft/monaco-languages/pull/167)
- [@MasterOdin (Matthew Peveler)](https://github.com/MasterOdin)
  - Add new functions in postgresql 14 [PR #168](https://github.com/microsoft/monaco-languages/pull/168)
  - Update json functions for postgresql [PR #169](https://github.com/microsoft/monaco-languages/pull/169)
  - Add missing postgresql functions [PR #170](https://github.com/microsoft/monaco-languages/pull/170)

## [0.29.1] (11.10.2021)

- fixes [an issue with the ESM version in DOMPurify](https://github.com/microsoft/monaco-editor/issues/2691).

### Thank you

Contributions to `monaco-languages`:

- [@sw23 (Spencer Williams)](https://github.com/sw23)
  - Adding syntax highlighting support for .pla files (Programmable Logic Array) [PR #163](https://github.com/microsoft/monaco-languages/pull/163)
  - SystemVerilog: Adding better syntax highlighting for primitive table definitions [PR #165](https://github.com/microsoft/monaco-languages/pull/165)
- [@tochicool (Tochi Obudulu)](https://github.com/tochicool): Add support for Protocol Buffers language [PR #164](https://github.com/microsoft/monaco-languages/pull/164)

## [0.29.0] (08.10.2021)

- adds an `ariaContainerElement` option for editors
- adds `guides.bracketPairs` to enable guides driven by bracket pairs
- adds `maxFileSize` to control the maximum file size for which to compute diffs
- adds `CodeActionProvider.resolveCodeAction`

### Breaking Change

- consolidated the options `renderIndentGuides`, `highlightActiveIndentGuide` to `guides`

### Thank you

Contributions to `monaco-editor`:

- [@crackalak (Dan Hughes)](https://github.com/crackalak): Added `ariaContainerElement` to shadow dom test [PR #2644](https://github.com/microsoft/monaco-editor/pull/2644)
- [@HKalbasi](https://github.com/HKalbasi): Add example for inlay hints [PR #2640](https://github.com/microsoft/monaco-editor/pull/2640)
- [@silverwind](https://github.com/silverwind): Fix letter case in repo URL [PR #2674](https://github.com/microsoft/monaco-editor/pull/2674)
- [@Un-index](https://github.com/Un-index): chore: Align run button text in playground.css [PR #2658](https://github.com/microsoft/monaco-editor/pull/2658)

Contributions to `monaco-editor-samples`:

- [@koto (Krzysztof Kotowicz)](https://github.com/koto): Added an example of loading Monaco with Trusted Types [PR #92](https://github.com/microsoft/monaco-editor-samples/pull/92)

Contributions to `monaco-editor-webpack-plugin`:

- [@six-ponies (马騳骉)](https://github.com/six-ponies): fix: Failed to execute 'importScripts' on 'WorkerGlobalScope': The URL xxx is invalid. [PR #160](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/160)

Contributions to `monaco-languages`:

- [@aaaaaa2493 (Vladimir Turov)](https://github.com/aaaaaa2493): Support Java 12-17 syntax [PR #159](https://github.com/microsoft/monaco-languages/pull/159)
- [@mbtools (Marc Bernard)](https://github.com/mbtools): Update ABAP syntax [PR #160](https://github.com/microsoft/monaco-languages/pull/160)
- [@scarolan (Sean Carolan)](https://github.com/scarolan): Replace // with # for line comments [PR #158](https://github.com/microsoft/monaco-languages/pull/158)
- [@valeriia-melnychuk (Valeriia Melnychuk)](https://github.com/valeriia-melnychuk): Implement syntax highlighting for Flow9 [PR #154](https://github.com/microsoft/monaco-languages/pull/154)

Contributions to `monaco-typescript`:

- [@paranoidjk (paranoidjk)](https://github.com/paranoidjk): feat: support find reference to extraLib [PR #84](https://github.com/microsoft/monaco-typescript/pull/84)
- [@troy351](https://github.com/troy351): Add type definition of `setInlayHintsOptions` [PR #83](https://github.com/microsoft/monaco-typescript/pull/83)

## [0.28.0] (22.09.2021)

- adds [support for typescript inlay hints](https://github.com/microsoft/monaco-typescript/pull/82). Inlay hints can be enabled like this:

```ts
monaco.languages.typescript.typescriptDefaults.setInlayHintsOptions({
	includeInlayParameterNameHints: 'all',
	includeInlayParameterNameHintsWhenArgumentMatchesName: true,
	includeInlayFunctionParameterTypeHints: true,
	includeInlayVariableTypeHints: true,
	includeInlayPropertyDeclarationTypeHints: true,
	includeInlayFunctionLikeReturnTypeHints: true,
	includeInlayEnumMemberValueHints: true
});
```

- adds support for bracket pair highlighting, which can be enabled by configuring `bracketPairColorization.enabled` when creating a new editor:

```ts
var editor = monaco.editor.create(document.getElementById('container'), {
	model: model,
	language: 'javascript',
	'bracketPairColorization.enabled': true
});
```

- `registerCodeActionProvider` now accepts metadata to specify provided code action kinds (e.g. `quickfix`, `refactor` or `source`).

### Thank you

Contributions to `monaco-editor`:

- [@SpaceComet](https://github.com/SpaceComet): Small update on the website playground [PR #2616](https://github.com/microsoft/monaco-editor/pull/2616)
- [@thien-do (Thien Do)](https://github.com/thien-do): Add usage with Vite to ESM Integrate doc [PR #2632](https://github.com/microsoft/monaco-editor/pull/2632)

Contributions to `monaco-html`:

- [@Pranomvignesh (Pranom Vignesh)](https://github.com/Pranomvignesh): fix(workerManager.js) : Added a check for the existence of the worker [PR #15](https://github.com/microsoft/monaco-html/pull/15)

Contributions to `monaco-languages`:

- [@ladyrick (LadyRick)](https://github.com/ladyrick): fix(cpp): fix cpp language integer suffix [PR #156](https://github.com/microsoft/monaco-languages/pull/156)

Contributions to `monaco-typescript`:

- [@Kingwl (Wenlu Wang)](https://github.com/Kingwl): Add inlay hints support [PR #82](https://github.com/microsoft/monaco-typescript/pull/82)

## [0.27.0] (16.08.2021)

- added property `inlineClassName` to style injected text
- added option `foldingImportsByDefault`
- added more JSON diagnostic options.

### Breaking Change

- changed `seedSearchStringFromSelection` from boolean to `'never' | 'always' 'selection'`
- changed suggestion preview mode `subwordDiff` to `subwordSmart`, introduced `subword`

### Thank you

Contributions to `monaco-editor`:

- [@Surm4 (Marcin)](https://github.com/Surm4): Exposed colors sample update in the playground. [PR #2561](https://github.com/microsoft/monaco-editor/pull/2561)

Contributions to `monaco-languages`:

- [@alefragnani (Alessandro Fragnani)](https://github.com/alefragnani): Adds `strict` keyword to Pascal language [PR #153](https://github.com/microsoft/monaco-languages/pull/153)
- [@jonatanklosko (Jonatan Kłosko)](https://github.com/jonatanklosko): Properly tokenize fence closing in GitHub style code blocks [PR #149](https://github.com/microsoft/monaco-languages/pull/149)
- [@kupiakos (Alyssa Haroldsen)](https://github.com/kupiakos): Remove ' as an auto-closing pair for Rust [PR #151](https://github.com/microsoft/monaco-languages/pull/151)
- [@lofcz (Matěj Štágl)](https://github.com/lofcz): Fix razor + liquid render of tags with a dash symbol [PR #150](https://github.com/microsoft/monaco-languages/pull/150)

## [0.26.1] (15.07.2021)

- fixes [minimatch dependency issue](https://github.com/microsoft/monaco-editor/issues/2578) by downgrading the monaco-json dependency.

## [0.26.0] (15.07.2021)

- added support for injected text. Use `IModelDecorationOptions.before`/`after`.
- added support for inlay hints provider.

### Breaking Changes

- CompletionItemLabel now has the property `label`, `detail` and `description` (instead of `name`, `parameters`, `qualifier` and `type`).

### Thank you

Contributions to `monaco-editor`:

- [@anthony-c-martin (Anthony Martin)](https://github.com/anthony-c-martin): Add Bicep sample [PR #2541](https://github.com/microsoft/monaco-editor/pull/2541)

Contributions to `monaco-languages`:

- [@anjbur (Angela Burton)](https://github.com/anjbur): Add support for Q# [PR #142](https://github.com/microsoft/monaco-languages/pull/142)
- [@maxwrlr](https://github.com/maxwrlr): Implement Syntax-Highlighting for SPARQL [PR #145](https://github.com/microsoft/monaco-languages/pull/145)
- [@nathanrreed (Nathan Reed)](https://github.com/nathanrreed)
  - fix c++ comment continuation highlighting #2497 [PR #143](https://github.com/microsoft/monaco-languages/pull/143)
  - fix rust raw string highlighting #2552 [PR #146](https://github.com/microsoft/monaco-languages/pull/146)
  - fix char literal highlighting #2481 [PR #147](https://github.com/microsoft/monaco-languages/pull/147)
  - fix rust raw string highlighting #2086 [PR #148](https://github.com/microsoft/monaco-languages/pull/148)
- [@qwefgh90 (Changwon Choe)](https://github.com/qwefgh90): improve a rule which freeze a page in restructuredText [PR #141](https://github.com/microsoft/monaco-languages/pull/141)
- [@RubenRBS (Rubén Rincón Blanco)](https://github.com/RubenRBS): Add Swift fileprivate access modifier [PR #144](https://github.com/microsoft/monaco-languages/pull/144)

Contributions to `monaco-typescript`:

- [@spahnke (Sebastian Pahnke)](https://github.com/spahnke): Build tag text correctly for all tags [PR #81](https://github.com/microsoft/monaco-typescript/pull/81)

## [0.25.2] (17.06.2021)

- fixes a problem that [certain characters could not be typed on non-US keyboards](https://github.com/microsoft/monaco-editor/issues/2533).

## [0.25.1] (15.06.2021)

- fixes that [`registerHTMLLanguageService` is not available in the AMD version of the monaco-html contribution](https://github.com/microsoft/monaco-editor/issues/2525).

## [0.25.0] (11.06.2021)

- added a new feature `inlineSuggest` that features a provider api and new settings.
- added `suggest.preview` to toggle previewing the selected suggest item.
- added `suggest.showDeprecated`
- CSS/HTML: added support for [custom data format](https://code.visualstudio.com/blogs/2020/02/24/custom-data-format)
- HTML: added `registerHTMLLanguageService`

### Breaking changes

- renamed `inlineHints` to `inlayHints`.

### Thank you

Contributions to `monaco-editor`:

- [@JeanPerriault (El Jùanch0)](https://github.com/JeanPerriault): Fix error message in Safari - Semantic token play [PR #2486](https://github.com/microsoft/monaco-editor/pull/2486)
- [@jonatanklosko (Jonatan Kłosko)](https://github.com/jonatanklosko): Add Elixir sample [PR #2491](https://github.com/microsoft/monaco-editor/pull/2491)

Contributions to `monaco-languages`:

- [@akonatala (apoorva konatala)](https://github.com/akonatala): Update cameligo language support [PR #137](https://github.com/microsoft/monaco-languages/pull/137)
- [@anark](https://github.com/anark): Add aliases and mimetypes to liquid language [PR #136](https://github.com/microsoft/monaco-languages/pull/136)
- [@mattvague (Matt Vague)](https://github.com/mattvague): Fix incorrect filenames for liquid [PR #135](https://github.com/microsoft/monaco-languages/pull/135)
- [@spahnke (Sebastian Pahnke)](https://github.com/spahnke)
  - [JS/TS] Add support for the RegExp Match Indices flag [PR #139](https://github.com/microsoft/monaco-languages/pull/139)
  - [TS] Add override keyword [PR #140](https://github.com/microsoft/monaco-languages/pull/140)

Contributions to `monaco-typescript`:

- [@paranoidjk (paranoidjk)](https://github.com/paranoidjk): fix: support go to definition for extraLib file [PR #79](https://github.com/microsoft/monaco-typescript/pull/79)

## [0.24.0] (12.05.2021)

- added a setting `domReadOnly` which controls if the `<textarea>` used for editor input should have the DOM `readonly` attribute
- added a setting `useShadowDOM` which can be set to `false` to prevent the editor from using shadow DOM in its implementation (e.g. for the contextmenus).
- added a settings `autoClosingDelete` that controls how backspace works inside auto-closing pairs.
- added `DiagnosticsOptions.onlyVisible` for TypeScript which limits the computation of diagnostics to only visible text models.
- fixed issue where the editor would not load in Safari 13.

### Breaking changes

- `EditorAutoClosingOvertypeStrategy` has been renamed to `EditorAutoClosingEditStrategy`

### Thank you

Contributions to `monaco-editor`:

- [@AmyQianqianwang (王倩倩)](https://github.com/AmyQianqianwang): add version compare link for version greater than V0.14.3 [PR #2433](https://github.com/microsoft/monaco-editor/pull/2433)

Contributions to `monaco-editor-webpack-plugin`:

- [@k15a (Konstantin Pschera)](https://github.com/k15a): Use compiler.webpack if available [PR #147](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/147)
- [@sangmokh (Sangmok Han)](https://github.com/sangmokh): Add globalAPI option to expose the editor API through a global monaco object [PR #145](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/145)

Contributions to `monaco-languages`:

- [@anthony-c-martin (Anthony Martin)](https://github.com/anthony-c-martin): Add support for Bicep language [PR #132](https://github.com/microsoft/monaco-languages/pull/132)
- [@jonatanklosko (Jonatan Kłosko)](https://github.com/jonatanklosko): Add Elixir language definition and tokenizer [PR #130](https://github.com/microsoft/monaco-languages/pull/130)
- [@mattgodbolt (Matt Godbolt)](https://github.com/mattgodbolt): Handle whitespace within C++ preprocessor comments [PR #127](https://github.com/microsoft/monaco-languages/pull/127)
- [@mattvague (Matt Vague)](https://github.com/mattvague): Add basic language support for Liquid [PR #128](https://github.com/microsoft/monaco-languages/pull/128)
- [@NullVoxPopuli](https://github.com/NullVoxPopuli): Add hbs alias to handlebars [PR #134](https://github.com/microsoft/monaco-languages/pull/134)

Contributions to `monaco-typescript`:

- [@spahnke (Sebastian Pahnke)](https://github.com/spahnke): Deep clone diagnostic objects [PR #76](https://github.com/microsoft/monaco-typescript/pull/76)

## [0.23.0] (05.03.2021)

- improves input on Android (using Gboard)
- automatically switches to high contrast when the OS is using high contrast (doesn't work in Firefox). Can be turned off via `autoDetectHighContrast`.
- the editor no longer supports classical Edge, which has reached End of Support on March 9th, 2021. See https://docs.microsoft.com/en-us/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-microsoft-edge

### Thank you

Contributions to `monaco-languages`:

- [@Contentmaudlin (Mert Ussakli)](https://github.com/Contentmaudlin): Property is not a keyword in C# [PR #124](https://github.com/microsoft/monaco-languages/pull/124)
- [@mattgodbolt (Matt Godbolt)](https://github.com/mattgodbolt): Support better C++ annotation highlighting [PR #125](https://github.com/microsoft/monaco-languages/pull/125)
- [@mwellman17 (Michael Wellman)](https://github.com/mwellman17): Add text/x-yaml MIME type. [PR #126](https://github.com/microsoft/monaco-languages/pull/126)

Contributions to `monaco-typescript`:

- [@spahnke (Sebastian Pahnke)](https://github.com/spahnke): Keep fileName property of diagnostic objects and related information [PR #74](https://github.com/microsoft/monaco-typescript/pull/74)

## [0.22.3] (01.02.2021)

Fixes a regression where symbol icons used in suggestions or quick outline were missing colors (see https://github.com/microsoft/monaco-editor/issues/2329).

## [0.22.2] (01.02.2021)

Fixes a regression where under certain webpack configurations `process.nextTick` could be used without explicitly checking for it being defined (see https://github.com/microsoft/monaco-editor/issues/2328).

## [0.22.1] (29.01.2021)

Fixes a regression where format commands would no longer work (see https://github.com/microsoft/monaco-editor/issues/2327).

## [0.22.0] (29.01.2021)

### New & Noteworthy

- new grammars for Modula-3 and ECL (Enterprise Control Language).
- added `monaco.editor.onDidChangeMarkers` to listen for marker changes.
- added `monaco.editor.registerCommand` to register global commands.
- added `monaco.languages.setColorMap` to allow defining the color map used for tokenization.
- added `IMonarchLanguage.includeLF` to allow matching against the `\n` at the end of each line.
- new editor option `stickyTabStops` to make interacting with spaces in indentation behave more like interacting with tabs.

### Breaking changes

- The ESM version of the editor will no longer define a global `monaco` object. You can define `global.MonacoEnvironment = { globalAPI: true }` if you want for the editor to define this global object.
- Renamed `OnTypeRenameProvider` to `LinkedEditingRangeProvider` and related methods like the editor option `renameOnType` (now `linkedEditing`), `registerOnTypeRenameProvider` (now `registerLinkedEditingRangeProvider`), etc.
- Renamed `OnEnterRule.oneLineAboveText` to `OnEnterRule.previousLineText`

### Thank you

Contributions to `monaco-editor`:

- [@Gittenburg](https://github.com/Gittenburg): Fix comment in sample [PR #2161](https://github.com/microsoft/monaco-editor/pull/2161)
- [@luminaxster (David Gonzalez)](https://github.com/luminaxster): Missing breaking change [PR #2186](https://github.com/microsoft/monaco-editor/pull/2186)
- [@svick (Petr Onderka)](https://github.com/svick): Fixed indentation in C# sample [PR #2250](https://github.com/microsoft/monaco-editor/pull/2250)

Contributions to `monaco-languages`:

- [@arlosi (Arlo Siemsen)](https://github.com/arlosi): Rust: add support for keywords from the 2018 edition [PR #123](https://github.com/microsoft/monaco-languages/pull/123)
- [@dehilsterlexis (David de Hilster)](https://github.com/dehilsterlexis): LEXER-ECL-001 Lexer for ECL (Enterprise Control Language) [PR #118](https://github.com/microsoft/monaco-languages/pull/118)
- [@fonsecas72 (Hugo Fonseca)](https://github.com/fonsecas72): terraform Fix heredoc [PR #116](https://github.com/microsoft/monaco-languages/pull/116)
- [@jcchu](https://github.com/jcchu): Add Modula-3 support [PR #117](https://github.com/microsoft/monaco-languages/pull/117)
- [@maclockard (Mac Lockard)](https://github.com/maclockard): Fix highlighting of GROUP BY for redshift [PR #122](https://github.com/microsoft/monaco-languages/pull/122)
- [@philipsens (Sergi Philipsen)](https://github.com/philipsens): Add auto indent for xml [PR #113](https://github.com/microsoft/monaco-languages/pull/113)
- [@stla](https://github.com/stla)
  - completed the list of roxygen tags [PR #114](https://github.com/microsoft/monaco-languages/pull/114)
  - removed white spaces in constants [PR #115](https://github.com/microsoft/monaco-languages/pull/115)
- [@VarghaSabee (Sabolch Varha)](https://github.com/VarghaSabee): Safari regex error fix (negative lookbehind) #2179 [PR #121](https://github.com/microsoft/monaco-languages/pull/121)

Contributions to `monaco-typescript`:

- [@Kingwl (Wenlu Wang)](https://github.com/Kingwl): Add new jsx emit option [PR #73](https://github.com/microsoft/monaco-typescript/pull/73)

Contributions to `monaco-css`:

- [@jpett](https://github.com/jpett): Fix error Cannot read property 'getModeId' of null [PR #10](https://github.com/microsoft/monaco-css/pull/10)

## [0.21.3] (18.01.2021)

Fixes a regression in suggestions where the browser clipboard API would be accessed by incomplete suggestion lists (see https://github.com/microsoft/vscode/commit/96d61842bae1e5dd11f9ff6139fad9e3e5141401).

## [0.21.2] (27.09.2020)

Fixes [a regression in monaco-css](https://github.com/microsoft/monaco-editor/issues/2158).

### Breaking changes

- `monaco.uri` methods `file, from, isUri, joinPath, parse, revive` are now static. Changing `new monaco.uri.method` to `monaco.uri.method` resolves 'TypeError: monaco.Uri.file is not a constructor at...' errors.

## [0.21.1] (24.09.2020)

Fixes [a few regressions](https://github.com/microsoft/monaco-editor/issues?q=is%3Aissue+milestone%3A%22August+2020+%282%29%22+is%3Aclosed).

### Thank you

Contributions to `monaco-html`:

- [Pankaj Khandelwal (@pankajk07)](https://github.com/pankajk07): Fixes microsoft/monaco-editor#2101 [PR #12](https://github.com/microsoft/monaco-html/pull/12)

Contributions to `monaco-languages`:

- [Marc Bernard (@mbtools)](https://github.com/mbtools): Overhaul of ABAP language based on release 7.54 [PR #112](https://github.com/microsoft/monaco-languages/pull/112)

Contributions to `monaco-typescript`:

- [PG Herveou (@pgherveou)](https://github.com/pgherveou): Add missing setWorkerOptions [PR #71](https://github.com/microsoft/monaco-typescript/pull/71)

## [0.21.0] (21.09.2020)

### New & Noteworthy

- Added `Paste` in the context menu in browsers which support the clipboard API.
- Many improvements in `monaco-typescript`: support for "deprecated" tags, API to participate in the web worker, improved lib.d.ts resolving.
- New tokenization support for: Julia, Scala, Lexon, Terraform HCL, Dart, Systemverilog.
- New semantic tokens provider [sample on the playground](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-semantic-tokens-provider-example).
- New [shadow dom sample](https://github.com/microsoft/monaco-editor/tree/main/samples/browser-amd-shadow-dom)
- New `overflowWidgetsDomNode` constructor option to pass in a parent for overflowing widgets.
- New `minimap.size` option: `proportional`, `fill`, `fit`.
- New `OnTypeRename` provider and option `renameOnType`.
- Fixed issue where cross-origin web workers were not working on Safari.
- Fixed many issues around embedding the editor in iframes or in shadow dom.
- Fixed issue with `automaticLayout`.
- Fixed issue with scrolling speed on Firefox.
- New options: `tabIndex`, `scrollPredominantAxis`, `columnSelection`, `padding`, `unfoldOnClickAfterEndOfLine`, `renderLineHighlightOnlyWhenFocus`, `definitionLinkOpensInPeek`, `showDeprecated`, `comments.ignoreEmptyLines`, `find.cursorMoveOnType`, `find.loop`.
- New diff editor options: `originalCodeLens`, `modifiedCodeLens`.
- Changed options: `rulers` can now define different colors, `renderWhitespace` can now be `trailing`.

### Breaking changes

- `CompletionItemLabel.signature` has been renamed to `CompletionItemLabel.parameters`.
- The signature of `CompletionItemProvider.resolveCompletionItem` has changed.
- `IMarker.code.link` was renamed to `IMarker.code.target`.
- `IMarkerData.code.link` was renamed to `IMarkerData.code.target`.
- `EditorLayoutInfo` has been restructured.

### Thank you

Contributions to `monaco-editor`:

- [Hugo Fonseca (@fonsecas72)](https://github.com/fonsecas72): Adding terraform / hcl samples [PR #2102](https://github.com/microsoft/monaco-editor/pull/2102)
- [@KapitanOczywisty](https://github.com/KapitanOczywisty)
  - Update example: allow peek definition [PR #2112](https://github.com/microsoft/monaco-editor/pull/2112)
  - Semantic tokens provider example [PR #2103](https://github.com/microsoft/monaco-editor/pull/2103)
- [Tuan Le Minh (@minhtuanchannhan)](https://github.com/minhtuanchannhan): Correct url of Microsoft logo [PR #2132](https://github.com/microsoft/monaco-editor/pull/2132)
- [Max Schmitt (@mxschmitt)](https://github.com/mxschmitt): ci: fixed smoke tests by increasing timeout [PR #1964](https://github.com/microsoft/monaco-editor/pull/1964)
- [Nicholas Rayburn (@nrayburn-tech)](https://github.com/nrayburn-tech): Monarch documentation changes [PR #1844](https://github.com/microsoft/monaco-editor/pull/1844)
- [ZHAO Jinxiang (@xiaoxiangmoe)](https://github.com/xiaoxiangmoe): fix: A 'declare' modifier cannot be used in an already ambient context [PR #2121](https://github.com/microsoft/monaco-editor/pull/2121)

Contributions to `monaco-typescript`:

- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke)
  - Adopt "deprecated" API [PR #67](https://github.com/microsoft/monaco-typescript/pull/67)
  - Format signature and parameter documentation as Markdown [PR #66](https://github.com/microsoft/monaco-typescript/pull/66)
- [Spencer (@SpencerSharkey)](https://github.com/SpencerSharkey): Use typescript language for hover tooltip header [PR #70](https://github.com/microsoft/monaco-typescript/pull/70)

Contributions to `monaco-json`:

- [@pankajk07](https://github.com/pankajk07): Fixes microsoft/monaco-editor#1999 [PR #12](https://github.com/microsoft/monaco-json/pull/12)

Contributions to `monaco-languages`:

- [theangryepicbanana (@ALANVF)](https://github.com/ALANVF)
  - Add support for Julia [PR #82](https://github.com/microsoft/monaco-languages/pull/82)
  - Add Scala support [PR #98](https://github.com/microsoft/monaco-languages/pull/98)
- [Arjan van Eersel (@arjanvaneersel)](https://github.com/arjanvaneersel): Implemented Lexon highlighting [PR #86](https://github.com/microsoft/monaco-languages/pull/86)
- [Basarat Ali Syed (@basarat)](https://github.com/basarat): add .mjs support :rose: [PR #92](https://github.com/microsoft/monaco-languages/pull/92)
- [@bolinfest](https://github.com/bolinfest): Update Python grammar to include keywords introduced in Python 3 [PR #91](https://github.com/microsoft/monaco-languages/pull/91)
- [Hugo Fonseca (@fonsecas72)](https://github.com/fonsecas72)
  - Adding Gemfile to ruby filenames [PR #111](https://github.com/microsoft/monaco-languages/pull/111)
  - Adding hcl / terraform language [PR #109](https://github.com/microsoft/monaco-languages/pull/109)
  - Terraform HCL : Fixing, Improving, adding tests [PR #110](https://github.com/microsoft/monaco-languages/pull/110)
- [Lars Hvam (@larshp)](https://github.com/larshp)
  - Mocha, fix deprecation warning regarding mocha.opts [PR #88](https://github.com/microsoft/monaco-languages/pull/88)
  - [ABAP] Language fixes [PR #87](https://github.com/microsoft/monaco-languages/pull/87)
- [Kenny Lin (@LinKCoding)](https://github.com/LinKCoding): Added ".rmd" file extension to R's list of supported languages [PR #83](https://github.com/microsoft/monaco-languages/pull/83)
- [Justin Mancusi (@mancusi)](https://github.com/mancusi): Updates the comment tokenization for handlebars syntax. [PR #93](https://github.com/microsoft/monaco-languages/pull/93)
- [Mert Caliskan (@mulderbaba)](https://github.com/mulderbaba): introduce preliminary Scala support, highly inspired by src/java content [PR #97](https://github.com/microsoft/monaco-languages/pull/97)
- [Nicholas Rayburn (@nrayburn-tech)](https://github.com/nrayburn-tech): Add \_ as a supported character for Python tags/keywords [PR #81](https://github.com/microsoft/monaco-languages/pull/81)
- [@skacurt](https://github.com/skacurt): [vb] fix string literals [PR #94](https://github.com/microsoft/monaco-languages/pull/94)
- [Taymon A. Beal (@taymonbeal)](https://github.com/taymonbeal): Add asserts, bigint, and unknown to TypeScript keywords [PR #96](https://github.com/microsoft/monaco-languages/pull/96)
- [Sabolch Varha (@VarghaSabee)](https://github.com/VarghaSabee): Feature - dart language support [PR #84](https://github.com/microsoft/monaco-languages/pull/84)
- [@xadegunt](https://github.com/xadegunt): Add Systemverilog language support [PR #108](https://github.com/microsoft/monaco-languages/pull/108)

## [0.20.0] (11.02.2020)

### New & Noteworthy

- The editor can now be hosted inside a Shadow Root.
- There is new API to read the editor's content width and height.
- New editor options:
  - `renderValidationDecorations` - render validation decorations even in read only editors
  - `wrappingStrategy` - delegate wrapping points computation to the browser
  - `comments.insertSpace` - insert a space around comments when running commenting commands
  - `foldingHighlight` - highlight folded regions
  - `peekWidgetDefaultFocus` - focus the inline editor or the tree when opening peek view

### Breaking changes

- Renamed `onCompositionStart`, `onCompositionEnd` to `onDidCompositionStart`, `onDidCompositionEnd`
- Changed the argument passed in to `onDidPaste`
- `WorkspaceEdit.edits` has now changed its shape such that edits must no longer be grouped by resource.
- The Monaco Editor no longer supports IE 11. The last version that was tested in IE 11 is 0.18.1.

### Thank you

Contributions to `monaco-editor`:

- [Josh Goldberg (@JoshuaKGoldberg)](https://github.com/JoshuaKGoldberg): Added section in Monarch docs for Inspect Tokens development helper [PR #1807](https://github.com/microsoft/monaco-editor/pull/1807)

Contributions to `monaco-typescript`:

- [Elizabeth Craig (@ecraig12345)](https://github.com/ecraig12345): Add types for TypeScriptWorker and missing LanguageServiceDefaults methods [PR #54](https://github.com/microsoft/monaco-typescript/pull/54)

Contributions to `monaco-languages`:

- [alan.invents (@ALANVF)](https://github.com/ALANVF): Highlight function definitions better [PR #79](https://github.com/microsoft/monaco-languages/pull/79)
- [@nrayburn-tech](https://github.com/nrayburn-tech): Add support for multiline comments in Swift [PR #80](https://github.com/microsoft/monaco-languages/pull/80)

## [0.19.3] (14.01.2020)

- brings back a way to get resolved editor options - [#1734](https://github.com/microsoft/monaco-editor/issues/1734)

### Thank you

Contributions to `monaco-editor`:

- [Brijesh Bittu (@brijeshb42)](https://github.com/brijeshb42): Playground: Add keyboard shortcut to run playground code [PR #1756](https://github.com/microsoft/monaco-editor/pull/1756)

Contributions to `monaco-languages`:

- [Rikki Schulte (@acao)](https://github.com/acao): add tokenizer for graphql language variables [PR #78](https://github.com/microsoft/monaco-languages/pull/78)

## [0.19.2] (06.01.2020)

- fixes issue with default value of `autoIndent` - [#1726](https://github.com/microsoft/monaco-editor/issues/1726)

## [0.19.1] (06.01.2020)

- fixes issue with .d.ts file in the ESM distribution - [#1729](https://github.com/microsoft/monaco-editor/issues/1729)
- adds types for global editor options (such as `wordBasedSuggestions`) - [#1746](https://github.com/microsoft/monaco-editor/issues/1746)
- adds support for reStructuredText.

### Thank you

Contributions to `monaco-editor`:

- [Lars Hvam (@larshp)](https://github.com/larshp)
  - Playground: add ABAP sample [PR #1737](https://github.com/microsoft/monaco-editor/pull/1737)
  - Playground: fix codelens provider example [PR #1738](https://github.com/microsoft/monaco-editor/pull/1738)

Contributions to `monaco-languages`:

- [Changwon Choe (@qwefgh90)](https://github.com/qwefgh90): add support for reStructuredText [PR #77](https://github.com/microsoft/monaco-languages/pull/77)

## [0.19.0] (20.12.2019)

### New & Noteworthy

- It is now possible to pass in a `dimension` in the editor construction options in order to avoid a synchronous layout.
- There is new API to provide semantic tokens.
- New options:
  - `multiCursorPaste`: define how to distribute paste in case of multi-cursor
  - `matchBrackets`: control if enclosing brackets should be highlighted
- Fixes for tokenization in: TypeScript, JavaScript, Handlebars, Kotlin and VB.

### Breaking changes

- `getConfiguration()` is replaced by `getRawOptions()`, which returns the passed in editor options.
- Starting with this version, the Monaco Editor no longer supports IE 11. The last version that was tested in IE 11 is 0.18.1.

### Thank you

Contributions to `monaco-editor`:

- [Lars Hvam (@larshp)](https://github.com/larshp)
  - contributing: add details for running website locally [PR #1617](https://github.com/microsoft/monaco-editor/pull/1617)
  - playground: update symbols-provider-example [PR #1616](https://github.com/microsoft/monaco-editor/pull/1616)
- [Remy Suen (@rcjsuen)](https://github.com/rcjsuen): Add CompletionItem with snippet support to the example [PR #1703](https://github.com/microsoft/monaco-editor/pull/1703)

Contributions to `monaco-editor-webpack-plugin`:

- [Dominik Moritz (@domoritz)](https://github.com/domoritz): Bump to 0.16 [PR #62](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/62)
- [Mike Greiling (@mikegreiling)](https://github.com/mikegreiling): Fix **webpack_public_path** within getWorkerUrl method [PR #63](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/63)
- [Roman Krasiuk (@rkrasiuk)](https://github.com/rkrasiuk): Bump to 0.17.0 and Add graphql support [PR #67](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/67)
- [Niklas Mollenhauer (@nikeee)](https://github.com/nikeee): Add loader-utils and make @types/webpack a dev dependency [PR #74](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/74)
- [James Diefenderfer (@jimmydief)](https://github.com/jimmydief)
  - Add support for plugin-specific public path [PR #81](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/81)
  - Add support for dynamic filenames [PR #83](https://github.com/microsoft/monaco-editor-webpack-plugin/pull/83)

Contributions to `monaco-languages`:

- [Maksym Bykovskyy (@mbykovskyy)](https://github.com/mbykovskyy): Adds cameligo language support [PR #75](https://github.com/microsoft/monaco-languages/pull/75)
- [Steven Degutis (@sdegutis)](https://github.com/sdegutis): Adds Markdown Table syntax highlighting [PR #73](https://github.com/microsoft/monaco-languages/pull/73)
- [Sergey Romanov (@Serhioromano)](https://github.com/Serhioromano): Improvements to ST language [PR #76](https://github.com/microsoft/monaco-languages/pull/76)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke): [JS/TS] Add support for the nullish-coalesce operator [PR #74](https://github.com/microsoft/monaco-languages/pull/74)

Contributions to `monaco-typescript`:

- [Denys Vuika (@DenysVuika)](https://github.com/DenysVuika): register multiple extra libs at once [PR #24](https://github.com/microsoft/monaco-typescript/pull/24)
- [Elizabeth Craig (@ecraig12345)](https://github.com/ecraig12345)
  - Generate and publish typings for package [PR #50](https://github.com/microsoft/monaco-typescript/pull/50)
  - Remove another require call [PR #49](https://github.com/microsoft/monaco-typescript/pull/49)
- [@katis](https://github.com/katis): Update TypeScript to 3.7.2 [PR #51](https://github.com/microsoft/monaco-typescript/pull/51)
- [Tamas Kiss (@kisstkondoros)](https://github.com/kisstkondoros): Add documentation to signature help [PR #52](https://github.com/microsoft/monaco-typescript/pull/52)
- [Lars Hvam (@larshp)](https://github.com/larshp): fix typo [PR #45](https://github.com/microsoft/monaco-typescript/pull/45)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke)
  - Provide related information to diagnostics [PR #48](https://github.com/microsoft/monaco-typescript/pull/48)
- [Alessandro Fragnani (@alefragnani)](https://github.com/alefragnani): Add Pascal samples [PR #1358](https://github.com/microsoft/monaco-editor/pull/1358)
  - Adopt monaco.MarkerTag API [PR #47](https://github.com/microsoft/monaco-typescript/pull/47)
  - Add support to ignore certain diagnostics [PR #46](https://github.com/microsoft/monaco-typescript/pull/46)

## [0.18.1] (19.09.2019)

- fixes 2 issues with the ESM distribution - [#1572](https://github.com/microsoft/monaco-editor/issues/1572) and [#1574](https://github.com/microsoft/monaco-editor/issues/1574)
- fixes very slow scrolling in Firefox - [#1575](https://github.com/microsoft/monaco-editor/issues/1575)
- new syntax highlighting for: pascaligo, ABAP, Sophia ML, Twig and MIPS.

### Thank you

Contributions to `monaco-editor`:

- [Alessandro Fragnani (@alefragnani)](https://github.com/alefragnani): Add Pascal samples [PR #1358](https://github.com/microsoft/monaco-editor/pull/1358)
- [Daniel Wang (@datou0412)](https://github.com/datou0412): Add koltin sample for website [PR #1351](https://github.com/microsoft/monaco-editor/pull/1351)
- [Ehsan (@ehsan-mohammadi)](https://github.com/ehsan-mohammadi): Updated html sample code [PR #1387](https://github.com/microsoft/monaco-editor/pull/1387)
- [Jonas Fonseca (@jonas)](https://github.com/jonas): CHANGELOG: Fix year for releases made in 2019 [PR #1388](https://github.com/microsoft/monaco-editor/pull/1388)
- [Milen Radkov (@mradkov)](https://github.com/mradkov): Add Sophia ML example [PR #1543](https://github.com/microsoft/monaco-editor/pull/1543)
- [Sergey Romanov (@Serhioromano)](https://github.com/Serhioromano): Structured text example [PR #1552](https://github.com/microsoft/monaco-editor/pull/1552)
- [zhnlviing (@zhanghongnian)](https://github.com/zhanghongnian): fix demo: completion provider example [PR #1537](https://github.com/microsoft/monaco-editor/pull/1537)

Contributions to `monaco-json`:

- [Dominik Moritz (@domoritz)](https://github.com/domoritz)
  - Upgrade dependencies [PR #11](https://github.com/microsoft/monaco-json/pull/11)
  - Add config to disable default formatter [PR #10](https://github.com/microsoft/monaco-json/pull/10)

Contributions to `monaco-languages`:

- [Brice Aldrich (@DefinitelyNotAGoat)](https://github.com/DefinitelyNotAGoat): pascaligo: adding pascaligo language support [PR #69](https://github.com/microsoft/monaco-languages/pull/69)
- [Salam Elbilig (@finalfantasia)](https://github.com/finalfantasia): [clojure] treat comma as whitespace [PR #63](https://github.com/microsoft/monaco-languages/pull/63)
- [Alf Eaton (@hubgit)](https://github.com/hubgit): [xml] Add OPF and XSL file extensions [PR #64](https://github.com/microsoft/monaco-languages/pull/64)
- [Lars Hvam (@larshp)](https://github.com/larshp)
  - [ABAP] Add ABAP language support [PR #72](https://github.com/microsoft/monaco-languages/pull/72)
  - readme: align "add new language" example [PR #70](https://github.com/microsoft/monaco-languages/pull/70)
- [Milen Radkov (@mradkov)](https://github.com/mradkov)
  - Add support for Sophia ML [PR #67](https://github.com/microsoft/monaco-languages/pull/67)
  - add `None` and `Some` keywords to SophiaML [PR #68](https://github.com/microsoft/monaco-languages/pull/68)
- [Marco Petersen (@ocrampete16)](https://github.com/ocrampete16): Add support for the Twig template language [PR #71](https://github.com/microsoft/monaco-languages/pull/71)
- [Progyan Bhattacharya (@Progyan1997)](https://github.com/Progyan1997): [Feat] MIPS: Support for Syntax Highlight and Basic Colorization [PR #65](https://github.com/microsoft/monaco-languages/pull/65)
- [Sergey Romanov (@Serhioromano)](https://github.com/Serhioromano): [ST] Some updated for Structured Text Language support [PR #66](https://github.com/microsoft/monaco-languages/pull/66)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke): [JS/TS] Add support for BigInt [PR #62](https://github.com/microsoft/monaco-languages/pull/62)

Contributions to `monaco-typescript`:

- [Andre Wachsmuth (@blutorange)](https://github.com/blutorange): Fix microsoft/monaco-editor#1576 update dependency to core [PR #41](https://github.com/microsoft/monaco-typescript/pull/41)
- [Javey (@Javey)](https://github.com/Javey): Make it can be compressed by uglify-js [PR #34](https://github.com/microsoft/monaco-typescript/pull/34)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke): Add a rename provider [PR #39](https://github.com/microsoft/monaco-typescript/pull/39)
- [@ulrichb](https://github.com/ulrichb): Expose TypeScript version via `monaco.languages.typescript.typeScriptVersion` [PR #31](https://github.com/microsoft/monaco-typescript/pull/31)

## [0.18.0] (04.09.2019)

### New & Noteworthy

- Minimap enhancement
  - Selections and find results are now rendered in the minimap.
  - Model decorations now support `IModelDecorationOptions.minimap`, once set the decoration will be rendered in the minimap
- New editor options
  - `autoClosingOvertype`: it controls whether the editor allows [typing over closing quotes or brackets](https://github.com/microsoft/vscode/issues/37315#issuecomment-515200477).
  - `cursorSurroundingLines`: it controls how many visible lines to display around the cursor while moving the cursor towards beginning or end of a file.
  - `renderWhitespace: "selection"`: the editor can render whitespaces only in selection.

### API changes

- `DeclarationProvider`: The declaration provider interface defines the contract between extensions and the go to declaration feature.
- `SelectionRangeProvider` Provide smart selection ranges for the given positions, see VS Code [issue](https://github.com/microsoft/vscode/issues/67872).
- CodeLensProvider should now return `CodeLensList` instead of `ICodeLensSymbol[]`.
- `DocumentSymbol` has a new property `tags` to support more types.
- View Zone id is now `string` instead of `number`.

### Thank you

Contributions to `monaco-json`:

- [Ԝеѕ @wesinator](https://github.com/wesinator): Add .har extension [#9](https://github.com/microsoft/monaco-json/pull/9)

## [0.17.1] (25.06.2019)

- Update monaco-typescript to TypeScript 3.5.0.

## [0.17.0] (05.05.2019)

### New & Noteworthy

- Localization support is brought back for AMD bundle. We lost the localization support when VS Code moved to the localization system but now AMD bundles ships the same localized strings VS Code localization extensions ship. For more details, please read [Monaco#822](https://github.com/Microsoft/monaco-editor/issues/822) and related [VS Code upstream issue](https://github.com/Microsoft/vscode/issues/71065)
- `LinkProvider.ProvideLinks` should now return `ILinksList` instead of `ILink[]`.
- `IEditorOptions.iconsInSuggestions` and `EditorContribOptions.iconsInSuggestions` are now replaced by `EditorContribOptions.suggest.showIcons`.
- We introduced `EditorContribOptions.suggest.maxVisibleSuggestions` to control maximum suggestions to show in suggestions widget.
- `EditorContribOptions.suggest.filteredTypes` is now introduced to allow suggestions to be filtered by the user. For more details, please read [vscode#45039](https://github.com/Microsoft/vscode/issues/45039).

### Thank You

Contributions to `monaco-editor`:

- [Jonas Fonseca @jonas](https://github.com/jonas): Fix year for releases made in 2019 [PR #1388](https://github.com/Microsoft/monaco-editor/pull/1388)

## [0.16.2] (19.03.2019)

- Fixes for HTML and JSON (https://github.com/Microsoft/monaco-editor/issues/1367, https://github.com/Microsoft/monaco-editor/issues/1254)

## [0.16.1] (14.03.2019)

- Fixes issue with context menu (https://github.com/Microsoft/monaco-editor/issues/1357)

## [0.16.0] (05.03.2019)

### New & Noteworthy

- Added built-in support for AMD cross-domain web worker loading.
- Added API to remeasure fonts (`monaco.editor.remeasureFonts`) in case custom fonts are used and the editor is painted at a time when the fonts are not finished loading.
- Various editor improvements, such as an option to `renderFinalNewline`, or to have a `cursorSmoothCaretAnimation`
- Colorization support for Tcl, Pascal, Kotlin and GraphQL.

### Breaking changes

- We are no longer shipping WinJS.Promise, but we are shipping with a Promise shim (for IE11).
- `CompletionItem.range` is now mandatory. Most times, you can use `model.getWordUntilPosition()` to get a good range.
- `DefinitionLink` has been renamed to `LocationLink` and a couple of its fields have also been renamed.

### Thank you

Contributions to `monaco-editor`:

- [Sebastián Gurin (@cancerberoSgx)](https://github.com/cancerberoSgx): fix worker paths in parcel [PR #1339](https://github.com/Microsoft/monaco-editor/pull/1339)
- [@datou0412](https://github.com/datou0412): Fix lineDecoration example css error [PR #1337](https://github.com/Microsoft/monaco-editor/pull/1337)
- [Joshua Sullivan (@jbsulli)](https://github.com/jbsulli): Fix JavaScript RegExp range closing bracket [PR #1329](https://github.com/Microsoft/monaco-editor/pull/1329)
- [Krish De Souza (@Kedstar99)](https://github.com/Kedstar99): Fixed various HTML errors with the various webpages [PR #1309](https://github.com/Microsoft/monaco-editor/pull/1309)
- [Swarnava Sengupta (@swarnava)](https://github.com/swarnava): Make copyright year dynamic [PR #1303](https://github.com/Microsoft/monaco-editor/pull/1303)

Contributions to `monaco-languages`:

- [alan.invents (@ALANVF)](https://github.com/ALANVF): Add Tcl support [PR #59](https://github.com/Microsoft/monaco-languages/pull/59)
- [Alessandro Fragnani (@alefragnani)](https://github.com/alefragnani): Pascal language support [PR #60](https://github.com/Microsoft/monaco-languages/pull/60)
- [Brijesh Bittu (@brijeshb42)](https://github.com/brijeshb42): Update ruby auto indentation rules [PR #58](https://github.com/Microsoft/monaco-languages/pull/58)
- [Andrew (@creativedrewy)](https://github.com/creativedrewy): Add Kotlin Language Support [PR #57](https://github.com/Microsoft/monaco-languages/pull/57)
- [Salam Elbilig (@finalfantasia)](https://github.com/finalfantasia): [clojure] Improve the regular expressions for various symbols [PR #56](https://github.com/Microsoft/monaco-languages/pull/56)
- [Neil Jones (@futurejones)](https://github.com/futurejones): Solidity - add "constructor" to main keywords [PR #55](https://github.com/Microsoft/monaco-languages/pull/55)
- [Pavel Lang (@langpavel)](https://github.com/langpavel): GraphQL language support [PR #54](https://github.com/Microsoft/monaco-languages/pull/54)
- [Samuel Helms (@samghelms)](https://github.com/samghelms): allows annotation in markdown language block headers [PR #61](https://github.com/Microsoft/monaco-languages/pull/61)

Contributions to `monaco-typescript`:

- [Olga Lesnikova (@Geloosa)](https://github.com/Geloosa): more safe extra lib filePath generation [PR #29](https://github.com/Microsoft/monaco-typescript/pull/29)
- [Stefan Lacatus (@stefan-lacatus)](https://github.com/stefan-lacatus): Optimize how external libs are handled and allow for custom languages [PR #30](https://github.com/Microsoft/monaco-typescript/pull/30)

## [0.15.6] (23.11.2018)

- Fixes issue with context menu (https://github.com/Microsoft/monaco-editor/issues/1199)

## [0.15.5] (16.11.2018)

- Re-remove cast to any from our code base to allow for tree shaking to not shake useful code (https://github.com/Microsoft/monaco-editor/issues/1013)

## [0.15.4] (15.11.2018)

- Fixes context menu in IE11 - https://github.com/Microsoft/monaco-editor/issues/1191
- Fixes suggest widget - https://github.com/Microsoft/monaco-editor/issues/1185 and https://github.com/Microsoft/monaco-editor/issues/1186

## [0.15.3] (15.11.2018)

- Remove cast to any from our code base to allow for tree shaking to not shake useful code (https://github.com/Microsoft/monaco-editor/issues/1013)

## [0.15.2] (14.11.2018)

- Fixes usage of `marked` to allow for packaging with rollup (https://github.com/Microsoft/monaco-editor/issues/1183)

## [0.15.1] (13.11.2018)

- Fixes the `/esm/` distribution (https://github.com/Microsoft/monaco-editor/issues/1178)

## [0.15.0] (12.11.2018)

### New & Noteworthy

- Improved typings in `monaco.d.ts` to better reflect null types.

### Breaking changes

- We are slowly migrating our code-base away from WinJS promises, so the exposed `monaco.Promise` API has been reduced to indicate that. We are setting up a Promise polyfill to cover browsers which do not have a native Promise implementation yet (i.e. IE11).
- `CompletionItemProvider.provideCompletionItems` and `CompletionItemProvider.resolveCompletionItem` have been modified to better reflect the API of VS Code. Both arguments and return type have changed.
- `SignatureHelpProvider.provideSignatureHelp` now receives an extra argument for the context.
- Various new editor options or tweaks to existing ones: `parameterHints`, `autoClosingBrackets`, `autoClosingQuotes`, `autoSurround`, `copyWithSyntaxHighlighting`, `tabCompletion`.

### Thank you

Contributions to `monaco-editor`:

- [Arvind S (@arvind0598)](https://github.com/arvind0598): Updated C# sample code for a simpler game. [PR #1160](https://github.com/Microsoft/monaco-editor/pull/1160)
- [Brooks Becton (@brooksbecton)](https://github.com/brooksbecton): Removing obsolete Note in Monarch Docs [PR #1089](https://github.com/Microsoft/monaco-editor/pull/1089)
- [James Orr (@buzzcola)](https://github.com/buzzcola): Correct comma splice in README.md [PR #1111](https://github.com/Microsoft/monaco-editor/pull/1111)
- [Chintogtokh Batbold (@chintogtokh)](https://github.com/chintogtokh): Clarify that repo doesn't contain source code [PR #1119](https://github.com/Microsoft/monaco-editor/pull/1119)
- [Chris Helgert (@chrishelgert)](https://github.com/chrishelgert): Move issue template to '.github' folder and add some styling for better readability [PR #1121](https://github.com/Microsoft/monaco-editor/pull/1121)
- [Steven Bock (@dabockster)](https://github.com/dabockster): Added better Java sample (FizzBuzz instead of JUnit) [PR #1161](https://github.com/Microsoft/monaco-editor/pull/1161)
- [Michele Gobbi (@dynamick)](https://github.com/dynamick): Added Ruby [PR #1102](https://github.com/Microsoft/monaco-editor/pull/1102)
- [Edilson Ngulele (@EdNgulele)](https://github.com/EdNgulele): style: Updated CONTRIBUTING.md [PR #1088](https://github.com/Microsoft/monaco-editor/pull/1088)
- [Evan Walters (@evanwaltersdev)](https://github.com/evanwaltersdev): issue guidelines [PR #1096](https://github.com/Microsoft/monaco-editor/pull/1096)
- [Abdussalam Abdurrahman (@finalfantasia)](https://github.com/finalfantasia): [clojure] Update Clojure example with one that's more representative. [PR #1059](https://github.com/Microsoft/monaco-editor/pull/1059)
- [@flash76](https://github.com/flash76): Update README.md [PR #1141](https://github.com/Microsoft/monaco-editor/pull/1141)
- [Daniel Pasch (@gempir)](https://github.com/gempir): fix 2 of 7 npm package vurnerabilities [PR #1087](https://github.com/Microsoft/monaco-editor/pull/1087)
- [@Hotlar](https://github.com/Hotlar): lingual fixes to readme [PR #1086](https://github.com/Microsoft/monaco-editor/pull/1086)
- [Jeremy Meiss (@jerdog)](https://github.com/jerdog): correct README grammar [PR #1114](https://github.com/Microsoft/monaco-editor/pull/1114)
- [Joaquim Honório (@JoaquimCMH)](https://github.com/JoaquimCMH): Update CHANGELOG [PR #1152](https://github.com/Microsoft/monaco-editor/pull/1152)
- [Ricardo Ambrogi (@KadoBOT)](https://github.com/KadoBOT): Remove commented code [PR #1113](https://github.com/Microsoft/monaco-editor/pull/1113)
- [Abhinav Srivastava (@krototype)](https://github.com/krototype): changed the license block of readme [PR #1133](https://github.com/Microsoft/monaco-editor/pull/1133)
- [Mera Gangapersaud (@Mera-Gangapersaud)](https://github.com/Mera-Gangapersaud): Fixed prerequisites link in Contributing.md [PR #1155](https://github.com/Microsoft/monaco-editor/pull/1155)
- [Michael (@michael-k)](https://github.com/michael-k): Use python examples that work [PR #1053](https://github.com/Microsoft/monaco-editor/pull/1053)
- [Remy Suen (@rcjsuen)](https://github.com/rcjsuen): Add missing links in CHANGELOG.md [PR #1029](https://github.com/Microsoft/monaco-editor/pull/1029)
- [Shivansh Saini (@shivanshs9)](https://github.com/shivanshs9): Fixed typos in website page and CHANGELOG [PR #1153](https://github.com/Microsoft/monaco-editor/pull/1153)
- [Sachin Saini (@thetinygoat)](https://github.com/thetinygoat): hacktoberfest fix [PR #1131](https://github.com/Microsoft/monaco-editor/pull/1131)

Contributions to `monaco-languages`:

- [Aastha (@AasthaGupta)](https://github.com/AasthaGupta): Fix markdown bug #1107 [PR #52](https://github.com/Microsoft/monaco-languages/pull/52)
- [Abdussalam Abdurrahman (@finalfantasia)](https://github.com/finalfantasia): [clojure] Improve Clojure syntax highlighting. [PR #45](https://github.com/Microsoft/monaco-languages/pull/45)
- [Abhishek (@GeekAb)](https://github.com/GeekAb): Markdown bug fix for #1107 [PR #51](https://github.com/Microsoft/monaco-languages/pull/51)
- [Matthew D. Miller (@goober99)](https://github.com/goober99): Added support for Perl quote-like operators to fix #1101 [PR #50](https://github.com/Microsoft/monaco-languages/pull/50)
- [Grzegorz Wcisło (@grzegorz-wcislo)](https://github.com/grzegorz-wcislo): Fix yaml string tokenization [PR #47](https://github.com/Microsoft/monaco-languages/pull/47)
- [Pascal Berger (@pascalberger)](https://github.com/pascalberger): Use C# highlighting for Cake scripts [PR #53](https://github.com/Microsoft/monaco-languages/pull/53)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke)
  - [JS/TS] Add support for alternative octal integer literal syntax [PR #49](https://github.com/Microsoft/monaco-languages/pull/49)
  - Improve tokenization of regular expressions [PR #46](https://github.com/Microsoft/monaco-languages/pull/46)
- [Tiago Danin (@TiagoDanin)](https://github.com/TiagoDanin): New rule for non-teminated string in yaml [PR #48](https://github.com/Microsoft/monaco-languages/pull/48)

Contributions to `monaco-typescript`:

- [Parikshit Hooda (@Parikshit-Hooda)](https://github.com/Parikshit-Hooda): fixed typo in line 11 [PR #23](https://github.com/Microsoft/monaco-typescript/pull/23)
- [Sebastian Pahnke (@spahnke)](https://github.com/spahnke): Render documentation in suggestion widget as Markdown [PR #22](https://github.com/Microsoft/monaco-typescript/pull/22)

Contributions to `monaco-json`:

- [Igor Nesterenko (@nesterone)](https://github.com/nesterone): Provide diagnostic option to enable on-demand schema loading [PR #7](https://github.com/Microsoft/monaco-json/pull/7)

Contributions to `monaco-css`:

- [Richard Samuelson (@ricsam)](https://github.com/ricsam): Fix indentation on the CSS test page [PR #7](https://github.com/Microsoft/monaco-css/pull/7)

## [0.14.3] (17.08.2018)

- Fixes TypeScript/JavaScript coloring of regular expressions https://github.com/Microsoft/monaco-editor/issues/1009

## [0.14.2] (10.08.2018)

- Reverts https://github.com/Microsoft/monaco-editor/pull/981

## [0.14.1] (10.08.2018)

- Fixes Find All References (https://github.com/Microsoft/vscode/issues/56160)

## [0.14.0] (10.08.2018)

### New & Noteworthy

- Using tree-shaking to reduce the amount of shipped code.
- TypeScript and JavaScript coloring is now done with Monarch.
- `typescriptServices` is no longer loaded on the UI thread, this helps with webpack's bundle output size.
- Added coloring for: apex, azcli, clojure, powerquery, rust, scheme and shell.
- Added sub-word navigation commands.
- Added font zoom commands.
- Syntax highlighting for deleted lines in inline diff editor.
- Highlighted indent guide.
- Column selection using middle mouse button.
- Added editor options: `scrollBeyondLastColumn`, `hover`, `suggest`, `highlightActiveIndentGuide`, `showUnused`.
- Added `setTokensProvider` with `EncodedTokensProvider`.
- Added `monaco.languages.getEncodedLanguageId` to get the numeric language id.
- `DefinitionProvider.provideDefinition`, `ImplementationProvider.provideImplementation`, `TypeDefinitionProvider.provideTypeDefinition` can now return a `DefinitionLink`.

### Breaking Changes

- Removed no longer used `Severity`.
- Renamed `IEditor.isFocused` to `IEditor.hasTextFocus`.
- Renamed `ICodeEditor.onDidFocusEditor` to `ICodeEditor.onDidFocusEditorWidget`.
- Renamed `ICodeEditor.onDidBlurEditor` to `ICodeEditor.onDidBlurEditorWidget`.
- `DocumentSymbolProvider.provideDocumentSymbols` must now return `DocumentSymbol[]`.

### Thank you

Contributions to `monaco-editor`:

- [Ali Mirlou (@AliMirlou)](https://github.com/AliMirlou): Fix typo [PR #952](https://github.com/Microsoft/monaco-editor/pull/952)
- [Avelino (@avelino)](https://github.com/avelino): added clojure exampple [PR #904](https://github.com/Microsoft/monaco-editor/pull/904)
- [Sebastián Gurin (@cancerberoSgx)](https://github.com/cancerberoSgx): fix small error in integration docs [PR #957](https://github.com/Microsoft/monaco-editor/pull/957)
- [Haegyun Jung (@haeguri)](https://github.com/haeguri): Fix playground sample option [PR #962](https://github.com/Microsoft/monaco-editor/pull/962)
  (https://github.com/Microsoft/monaco-editor/pull/914)
- [Myles Scolnick (@mscolnick)](https://github.com/mscolnick): add sideEffects false for tree-shaking in webpack [PR #981](https://github.com/Microsoft/monaco-editor/pull/981)
- [Niklas Mollenhauer (@nikeee)](https://github.com/nikeee): Fix hash comment in xdot sample [PR #916](https://github.com/Microsoft/monaco-editor/pull/916)
- [Remy Suen (@rcjsuen)](https://github.com/rcjsuen): Add folding provider sample to the playground [PR #878](https://github.com/Microsoft/monaco-

Contributions to `monaco-typescript`:

- [Fathy Boundjadj (@fathyb)](https://github.com/fathyb): Use Markdown code block for hover tooltip [PR #20](https://github.com/Microsoft/monaco-typescript/pull/20)
- [Matt McCutchen (@mattmccutchen)](https://github.com/mattmccutchen): Clear the `file` fields of `relatedInformation` too. (WIP) [PR #21](https://github.com/Microsoft/monaco-typescript/pull/21)

Contributions to `monaco-languages`:

- [Avelino (@avelino)](https://github.com/avelino)
  - upgrade all language support (today) [PR #35](https://github.com/Microsoft/monaco-languages/pull/35)
  - Clojure support [PR #36](https://github.com/Microsoft/monaco-languages/pull/36)
  - Clojure: added more keywords [PR #37](https://github.com/Microsoft/monaco-languages/pull/37)
- [Faris Masad (@masad-frost)](https://github.com/masad-frost)
  - Fix Clojure syntax highlighting [PR #38](https://github.com/Microsoft/monaco-languages/pull/38)
  - Add Scheme language [PR #34](https://github.com/Microsoft/monaco-languages/pull/34)
  - Add auto-indentation for python [PR #33](https://github.com/Microsoft/monaco-languages/pull/33)
- [Matt Masson (@mattmasson)](https://github.com/mattmasson): Add support for Power Query (M) language [PR #42](https://github.com/Microsoft/monaco-languages/pull/42)
- [Oli Lane (@olane)](https://github.com/olane): Add Apex language [PR #44](https://github.com/Microsoft/monaco-languages/pull/44)
- [Viktar Pakanechny (@Vityanchys)](https://github.com/Vityanchys): Added azcli [PR #43](https://github.com/Microsoft/monaco-languages/pull/43)
- [zqlu (@zqlu)](https://github.com/zqlu)
  - Add Shell language [PR #39](https://github.com/Microsoft/monaco-languages/pull/39)
  - Add Perl language [PR #40](https://github.com/Microsoft/monaco-languages/pull/40)
  - add perl to bundle.js [PR #41](https://github.com/Microsoft/monaco-languages/pull/41)

## [0.13.1] (15.05.2018)

- Fixes [issue #871](https://github.com/Microsoft/monaco-editor/issues/871): TypeScript import error after mocaco-editor upgraded from 0.12 to 0.13

## [0.13.0] (11.05.2018)

### New & Noteworthy

- New folding provider `registerFoldingRangeProvider`.
- You can now specifies the stack order of a decoration by setting `IModelDecorationOptions.zIndex`. A decoration with greater stack order is always in front of a decoration with a lower stack order.
- You can now tell Monaco if there is an `inlineClassName` which affects letter spacing. the stack order of a decoration by setting `IModelDecorationOptions.inlineClassNameAffectsLetterSpacing`.
- Get the text length for a certain line on text model (`ITextModel.getLineLength(lineNumber: number)`)
- New option `codeActionsOnSave`, controls whether code action kinds will be run on save.
- New option `codeActionsOnSaveTimeout`, controls timeout for running code actions on save.
- New option `multiCursorMergeOverlapping`, controls if overlapping selections should be merged. Default to `true`.

### Breaking Change

- Removed `ICodeEditor.getCenteredRangeInViewport`.
- `RenameProvider.resolveRenameLocation` now returns `RenameLocation` instead of `IRange`.

### Thank you

- [Sergey Romanov @Serhioromano](https://github.com/Serhioromano): Add new language Structured Text support [PR monaco-languages#32](https://github.com/Microsoft/monaco-languages/pull/32)
- [Yukai Huang @Yukaii](https://github.com/Yukaii): Fix backspace in IME composition on iOS Safari [PR vscode#40546](https://github.com/Microsoft/vscode/pull/40546)

## [0.12.0] (11.04.2018)

- Special thanks to [Tim Kendrick](https://github.com/timkendrick) for contributing a webpack plugin - `monaco-editor-webpack-plugin` - now available on [npm](https://www.npmjs.com/package/monaco-editor-webpack-plugin).

### Breaking changes

- Introduced `MarkerSeverity` instead of `Severity` for markers serverity.
- Replaced `RenameProvider.resolveInitialRenameValue` with `RenameProvider.resolveRenameLocation`.
- Fixed typo in `monaco-typescript`, renamed `setMaximunWorkerIdleTime` to `setMaximumWorkerIdleTime`.

### Thank you

- [Remy Suen @rcjsuen](https://github.com/rcjsuen): Fix conversion code from MarkedString to IMarkdownString in hovers [PR monaco-css#5](https://github.com/Microsoft/monaco-css/pull/5)
- [Peng Xiao @pengx17](https://github.com/pengx17): fix an issue of `fromMarkdownString` [PR monaco-json#4](https://github.com/Microsoft/monaco-json/pull/4)
- [TJ Kells @systemsoverload](https://github.com/systemsoverload): Add rust colorization support [PR monaco-languages#31](https://github.com/Microsoft/monaco-languages/pull/31)

## [0.11.1] (15.03.2018)

- Fixes [issue #756](https://github.com/Microsoft/monaco-editor/issues/756): Can't use "Enter" key to accept an IntelliSense item
- Fixes [issue #757](https://github.com/Microsoft/monaco-editor/issues/757): TypeScript errors in `editor.api.d.ts` typings

## [0.11.0] (14.03.2018)

### New & Noteworthy

- **ESM distribution** (compatible with e.g. webpack).
- New interval tree decorations implementation.
- New piece tree text buffer implementation.
- The minimap can be placed to the left.
- Line numbers can be displayed in an interval.
- The cursor width can be customized.
- Smooth scrolling can be turned on.
- Color decorators and color picker via `DocumentColorProvider`.

### Breaking changes

- Replaced `MarkedString` with `IMarkdownString`. Source code snippets can be expressed using the GH markdown syntax.
- Renamed `IResourceEdit` to `ResourceTextEdit`.

### API changes

- Merged `IModel`, `IReadOnlyModel`, `IEditableTextModel`, `ITextModelWithMarkers`, `ITokenizedModel`, `ITextModelWithDecorations` to `ITextModel`. A type alias for `IModel` is defined for compatibility.
- Merged `ICommonCodeEditor` and `ICodeEditor` to `ICodeEditor`.
- Merged `ICommonDiffEditor` and `IDiffEditor` to `IDiffEditor`.
- `CompletionItem.documentation`, `ParameterInformation.documentation` and `SignatureInformation.documentation` can now be an `IMarkdownString`.
- Added `CompetionItem.command`, `CompletionItem.commitCharacters` and `CompletionItem.additionalTextEdits`.
- Added language configuration `folding` which can define markers for code patterns where a folding regions should be created. See for example the [Python configuration](https://github.com/Microsoft/monaco-languages/blob/d2db3faa76b741bf4ee822c403fc355c913bc46d/src/python/python.ts#L35-L41).
- Added by accident `ResourceFileEdit` (due to how `monaco.d.ts` is generated from vscode). That is not honoured by the editor, and should not be used.

### Thank you

- [Remy Suen @rcjsuen](https://github.com/rcjsuen):
  - Fix a small typo in README.md [PR monaco-typescript#18](https://github.com/Microsoft/monaco-typescript/pull/18)
  - Remove unused IDisposable array [PR monaco-typescript#19](https://github.com/Microsoft/monaco-typescript/pull/19)
  - Add HEALTHCHECK as a Dockerfile keyword [PR monaco-languages#29](https://github.com/Microsoft/monaco-languages/pull/29)
  - Add ARG as a Dockerfile keyword [PR monaco-languages#30](https://github.com/Microsoft/monaco-languages/pull/30)
- [Can Abacigil @abacigil](https://github.com/abacigil): MySQL, Postgres, Redshift and Redis Language Support [PR monaco-languages#26](https://github.com/Microsoft/monaco-languages/pull/26)
- [Matthias Kadenbach @mattes](https://github.com/mattes): Support Content-Security-Policy syntax highlighting [PR monaco-languages#27](https://github.com/Microsoft/monaco-languages/pull/27)
- [e.vakili @evakili](https://github.com/evakili): Whitespaces after # are allowed in C++ preprocessor statements [PR monaco-languages#28](https://github.com/Microsoft/monaco-languages/pull/28)
- [Pankaj Kumar Gautam @PAPERPANKS](https://github.com/PAPERPANKS): adding microsoft logo to footer [PR monaco-editor#577](https://github.com/Microsoft/monaco-editor/pull/577)
- [Dominik Moritz @domoritz](https://github.com/domoritz): Fix code in changelog [PR monaco-editor#582](https://github.com/Microsoft/monaco-editor/pull/582)
- [ItsPugle @ItsPugle](https://github.com/ItsPugle): Updating the footer to reflect change of year [PR monaco-editor#707](https://github.com/Microsoft/monaco-editor/pull/707)
- [Michael Seifert @MSeifert04](https://github.com/MSeifert04): Add linebreak for if [PR monaco-editor#726](https://github.com/Microsoft/monaco-editor/pull/726)
- [Andrew Palm @apalm](https://github.com/apalm): Fix 'Configure JSON defaults' sample [PR monaco-editor#731](https://github.com/Microsoft/monaco-editor/pull/731)
- [Niklas Mollenhauer @nikeee](https://github.com/nikeee): Fix line number API usage [PR monaco-editor#740](https://github.com/Microsoft/monaco-editor/pull/740)
- [Andre @anc](https://github.com/anc): More realistic terminal shell [PR monaco-editor#742](https://github.com/Microsoft/monaco-editor/pull/742)
- to the many others that have contributed PRs to [vscode](https://github.com/Microsoft/vscode) which have also made their way into the monaco-editor.

## [0.10.1] (16.10.2017)

- Fixes [issue #601](https://github.com/Microsoft/monaco-editor/issues/601): window.opener should be set to null to protect against malicious code

## [0.10.0] (17.08.2017)

### Breaking changes

- Removed `CodeAction`.
- Method `provideCodeActions` in `CodeActionProvider` now returns `Command[] | Thenable<Command[]>` instead of `CodeAction[] | Thenable<CodeAction[]>`, which is already removed.

### API changes

- added `monaco.editor.getModelMarkers`. Get markers for owner and/or resource.

### Notable Fixes

- No longer use CSS class `.row` for command palette to avoid CSS conflicts with Bootstrap.
- Fix Accessibility Help Dialog accessible issue on IE/Edge.
- Fix Find Widget CSS compatibility issues with IE11.
- Toggle Block Comment can remove extra whitespaces.

### Thank you

- [Kitson Kelly @kitsonk](https://github.com/kitsonk): Update monaco-typescript to TypeScript 2.4.1 [PR monaco-typescript#15](https://github.com/Microsoft/monaco-typescript/pull/15)
- [@duncanwerner](https://github.com/duncanwerner): Add hex number tokenization to R language [PR monaco-languages#21](https://github.com/Microsoft/monaco-languages/pull/21)
- [Remy Suen @rcjsuen](https://github.com/rcjsuen): Update Dockerfile grammar with STOPSIGNAL and SHELL instructions [PR monaco-languages#22](https://github.com/Microsoft/monaco-languages/pull/22)
- [Marlene Cota @marlenecota](https://github.com/marlenecota): Add Small Basic support [PR monaco-languages#23](https://github.com/Microsoft/monaco-languages/pull/23)
- [Ben Jacobson @bjacobso](https://github.com/bjacobso): Add LIMIT to sql keywords [PR monaco-languages#24](https://github.com/Microsoft/monaco-languages/pull/24)
- to the many others that have contributed PRs to [vscode](https://github.com/Microsoft/vscode) which have also made their way into the monaco-editor.

## [0.9.0] (03.07.2017)

### New & Noteworthy

- Minimap (on by default, use `editor.minimap` to disable it).
- Drag and Drop (on by default, use `editor.dragAndDrop` to disable it).
- Copy text with formatting.

### Accessibility

- There is a new [guide for making the editor accessible to all](https://github.com/Microsoft/monaco-editor/wiki/Accessibility-Guide-for-Integrators).
- There is a new Alt+F1 (Ctrl+F1 in IE) accessibility help panel.
- There is a new F8/Shift+F8 diff review panel in the diff editor.
- Many bugfixes, including now respecting the Windows High Contrast Theme on Edge.

### Breaking changes

- A lot has changed w.r.t. how themes work in the editor, mostly driven by the work to support theming in VS Code. `editor.updateOptions()` **no longer accepts `theme`**; the theme can be changed via the newly introduced `monaco.editor.setTheme()`. Additionally, we recommend editor colors be customized via `monaco.editor.defineTheme()` instead of via CSS -- see [sample](https://microsoft.github.io/monaco-editor/playground.html#customizing-the-appearence-exposed-colors). The color names will be stable, while the CSS class names might break at any time.
- Support for the internal snippet syntax **has been discontinued** and snippet must now use the official, TextMate-like syntax. Find its grammar and samples [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax).
- Changed `IModel.findMatches` to accept a list of word separators.
- Changed the shape of the `IModelContentChangedEvent` emitted via `IModel.onDidChangeContent` to **now contain a batch** of all the changes that the model had.
- No longer using `transform: translate3d`, now using `will-change: transform` for browser layer hinting. Use the `disableLayerHinting` option if you have any trouble with browser layers (blurriness or high GPU memory usage).
- Simplified wrapping settings: `wordWrap`, `wordWrapColumn` and `wordWrapMinified`.

### API changes

- added `monaco.languages.registerTypeDefinitionProvider`.
- new editor options:
  - `accessibilityHelpUrl` - the url of a page to open for documentation about how to operate the editor when using a Screen Reader.
  - `find.seedSearchStringFromSelection` - Ctrl+F/Cmd+F seeds search string from the editor selection.
  - `find.autoFindInSelection` - Ctrl+F/Cmd+F turns on the find in selection toggle if the editor selection is multiline.
  - `minimap.enabled` - enable minimap.
  - `minimap.showSlider` - control when to render the minimap slider.
  - `minimap.renderCharacters` - render characters or blocks in the minimap.
  - `minimap.maxColumn` - maximum number of columns the minimap shows.
  - `overviewRulerBorder` - toggle that the overview ruler renders a border.
  - `links` - enable link detection.
  - `multiCursorModifier` - change the multi cursor modifier key.
  - `accessibilitySupport` - optimize the editor for use with a Screen Reader.
  - `autoIndent` - automatically fix indentation when moving lines, pasting or typing.
  - `dragAndDrop` - dragging and dropping editor selection within the editor.
  - `occurrencesHighlight` - enable highlighting of occurences.
  - `showFoldingControls` - fine-tune when the folding icons should show
  - `matchBrackets` - enable bracket matching
  - `letterSpacing` - configure font's letter-spacing.

### Thank you

- [Joey Marianer (@jmarianer)](https://github.com/jmarianer): Support literal interpolated strings ($@"") [PR monaco-languages#13](https://github.com/Microsoft/monaco-languages/pull/13)
- [@AndersMad](https://github.com/AndersMad): HTML Tags: Add support for dash and fix colon in end tag [PR monaco-languages#14](https://github.com/Microsoft/monaco-languages/pull/14)
- [Sandy Armstrong (@sandyarmstrong)](https://github.com/sandyarmstrong): csharp: add support for binary literals and \_ as separator [PR monaco-languages#16](https://github.com/Microsoft/monaco-languages/pull/16)
- [Anton Kosyakov (@akosyakov)](https://github.com/akosyakov): Include src as a part of npm package [PR monaco-languages#17](https://github.com/Microsoft/monaco-languages/pull/17)
- [Andrew Bonventre (@andybons)](https://github.com/andybons): Fix typo: concering → concerning [PR monaco-languages#18](https://github.com/Microsoft/monaco-languages/pull/18)
- [Scott McMaster (@scottmcmaster)](https://github.com/scottmcmaster): MSDAX support [PR monaco-languages#19](https://github.com/Microsoft/monaco-languages/pull/19)
- [Luzian Serafin (@lserafin)](https://github.com/lserafin): Add Solidity [PR monaco-languages#20](https://github.com/Microsoft/monaco-languages/pull/20)
- [Kitson Kelly (@kitsonk)](https://github.com/kitsonk): Update to TypeScript 2.3.4 [PR monaco-typescript#13](https://github.com/Microsoft/monaco-typescript/pull/13)
- [Kitson Kelly (@kitsonk)](https://github.com/kitsonk): Add documentation support on hover [PR monaco-typescript#14](https://github.com/Microsoft/monaco-typescript/pull/14)
- [@replacepreg](https://github.com/replacepreg): Updating date at footer [PR monaco-editor#409](https://github.com/Microsoft/monaco-editor/pull/409)
- [Aarin Smith (@aarinsmith)](https://github.com/aarinsmith): Fixed spelling error in README.md:85 'instantion' -> 'instantiation' [PR monaco-editor#440](https://github.com/Microsoft/monaco-editor/pull/440)
- to the many others that have contributed PRs to [`vscode`](https://github.com/Microsoft/vscode) which have also made their way into the `monaco-editor`.

---

## [0.8.3] (03.03.2017)

- Fixes an issue in monaco-typescript where it would attempt to validate a disposed model.

---

## [0.8.2] (01.03.2017)

- Fixes the following regressions:
  - [issue #385](https://github.com/Microsoft/monaco-editor/issues/385): Cannot add action to the left-hand-side of the diff editor
  - [issue #386](https://github.com/Microsoft/monaco-editor/issues/386): Shortcuts for actions added via editor.addAction don't show up in the Command Palette
  - [issue #387](https://github.com/Microsoft/monaco-editor/issues/387): Cannot change diff editor to a custom theme based on high contrast

---

## [0.8.1] (27.01.2017)

- CSS/JSON/HTML language supports updated:
  - CSS: Support for @apply
  - SCSS: Map support
  - New HTML formatter options: unformatedContent, wrapAttributes
- Fixed issue where the editor was throwing in Safari due to `Intl` missing.
- Fixed multiple issues where the editor would not position the cursor correctly when using browser zooming.

### API

- Added `disableMonospaceOptimizations` editor option that can be used in case browser zooming exposes additional issues.
- Added `formatOnPaste` editor option.
- Added `IActionDescriptor.precondition`.
- **Breaking change**: renamed `registerTypeDefinitionProvider` to `registerImplementationProvider` and associated types.

---

## [0.8.0] (18.01.2017)

- This release has been brewing for a while and comes with quite a number of important changes.
- There are many bugfixes and speed/memory usage improvements.
- Now shipping TypeScript v2.1.5 in `monaco-typescript` (JS and TS language support).

### No longer supporting IE9 and IE10

- we have not made the editor fail on purpose in these browsers, but we have removed IE9/IE10 targeted workarounds from our codebase;
- now using **Typed Arrays** in a number of key places resulting in considerable speed boosts and lower memory consumption.

### Monarch Tokenizer

- Monarch states are now memoized up to a depth of 5. This results in considerable memory improvements for files with many lines.
- Speed improvements to Monarch tokenizer that resulted in one **breaking change**:
- when entering an embedded mode (i.e. `nextEmbedded`), the state ending up in must immediately contain a `nextEmbedded: "@pop"` rule. This helps in quickly figuring out where the embedded mode should be left. The editor will throw an error if the Monarch grammar does not respect this condition.

### Tokens are styled in JS (not in CSS anymore)

- This is a **breaking change**
- Before, token types would be rendered on the `span` node of text, and CSS rules would match token types and assign styling to them (i.e. color, boldness, etc.to style tokens)
- To enable us to build something like a minimap, we need to know the text color in JavaScript, and we have therefore moved the token style matching all to JavaScript. In the future, we foresee that even decorations will have to define their color in JavaScript.
- It is possible to create a custom theme via a new API method `monaco.editor.defineTheme()` and the playground contains a sample showing how that works.
- Token types can be inspected via `F1` > `Developer: Inspect tokens`. This will bring up a widget showing the token type and the applied styles.

### API changes:

#### Namespaces

- added `monaco.editor.onDidCreateEditor` that will be fired whenever an editor is created (will fire even for a diff editor, with the two editors that a diff editor consists of).
- added `monaco.editor.tokenize` that returns logical tokens (before theme matching, as opposed to `monaco.editor.colorize`).
- added `monaco.languages.registerTypeDefinitionProvider`

#### Models

- removed `IModel.getMode()`.
- structural changes in the events `IModelLanguageChangedEvent`, `IModelDecorationsChangedEvent` and `IModelTokensChangedEvent`;
- changed `IModel.findMatches`, `IModel.findNextMatch` and `IModel.findPreviousMatch` to be able to capture matches while searching.

#### Editors

- `ICodeEditor.addAction` and `IDiffEditor.addAction` now return an `IDisposable` to be able to remove a previously added action.
- renamed `ICodeEditor.onDidChangeModelMode ` to `ICodeEditor.onDidChangeModelLanguage`;
- `ICodeEditor.executeEdits` can now take resulting selection for better undo/redo stack management;
- added `ICodeEditor.getTargetAtClientPoint(clientX, clientY)` to be able to do hit testing.
- added `IViewZone.marginDomNode` to be able to insert a dom node in the margin side of a view zone.
- settings:
  - `lineDecorationsWidth` can now take a value in the form of `"1.2ch"` besides the previous accepted number (in px)
  - `renderLineHighlight` can now take a value in the set `'none' | 'gutter' | 'line' | 'all'`.
  - added `fixedOverflowWidgets` to render overflowing content widgets as `'fixed'` (defaults to false)
  - added `acceptSuggestionOnCommitCharacter` to accept suggestions on provider defined characters (defaults to true)
  - added `emptySelectionClipboard` - copying without a selection copies the current line (defaults to true)
  - added `suggestFontSize` - the font size for the suggest widget
  - added `suggestLineHeight` - the line height for the suggest widget
- diff editor settings:
  - added `renderIndicators` - Render +/- indicators for added/deleted changes. (defaults to true)

### Thank you

- [Nico Tonozzi (@nicot)](https://github.com/nicot): Register React file extensions [PR monaco-typescript#12](https://github.com/Microsoft/monaco-typescript/pull/12)
- [Jeong Woo Chang (@inspiredjw)](https://github.com/inspiredjw): Cannot read property 'uri' of null fix [PR vscode#13263](https://github.com/Microsoft/vscode/pull/13263)
- [Jan Pilzer(@Hirse)](https://github.com/Hirse): Add YAML samples [PR monaco-editor#242](https://github.com/Microsoft/monaco-editor/pull/242)

---

## [0.7.1] (07.10.2016)

- Bugfixes in monaco-html, including fixing formatting.

---

## [0.7.0] (07.10.2016)

- Adopted TypeScript 2.0 in all the repos (also reflected in `monaco.d.ts`).
- Added YAML colorization support.
- Brought back the ability to use `editor.addAction()` and have the action show in the context menu.
- Web workers now get a nice label next to the script name.

### API changes:

- settings:
  - new values for `lineNumbers`: `'on' | 'off' | 'relative'`
  - new values for `renderWhitespace`: `'none' | 'boundary' | 'all'`
- removed `model.setMode()`, as `IMode` will soon disappear from the API.

### Debt work

- Removed HTML, razor, PHP and handlebars from `monaco-editor-core`:
  - the `monaco-editor-core` is now finally language agnostic.
  - coloring for HTML, razor, PHP and handlebars is now coming in from `monaco-languages`.
  - language smarts for HTML, razor and handlebars now comes from `monaco-html`.
- Packaging improvements:
  - thanks to the removal of the old languages from `monaco-editor-core`, we could improve the bundling and reduce the number of .js files we ship.
  - we are thinking about simplifying this further in the upcoming releases.

### Thank you

- [Sandy Armstrong (@sandyarmstrong)](https://github.com/sandyarmstrong): csharp: allow styling #r/#load [PR monaco-languages#9](https://github.com/Microsoft/monaco-languages/pull/9)
- [Nico Tonozzi (@nicot)](https://github.com/nicot): Go: add raw string literal syntax [PR monaco-languages#10](https://github.com/Microsoft/monaco-languages/pull/10)
- [Jason Killian (@JKillian)](https://github.com/JKillian): Add vmin and vmax CSS units [PR monaco-languages#11](https://github.com/Microsoft/monaco-languages/pull/11)
- [Jan Pilzer (@Hirse)](https://github.com/Hirse): YAML colorization [PR monaco-languages#12](https://github.com/Microsoft/monaco-languages/pull/12)
- [Sam El-Husseini (@microsoftsam)](https://github.com/microsoftsam): Using Cmd+Scroll to zoom on a mac [PR vscode#12477](https://github.com/Microsoft/vscode/pull/12477)

---

## [0.6.1] (06.09.2016)

- Fixed regression where `editor.addCommand` was no longer working.

---

## [0.6.0] (05.09.2016)

- This will be the last release that contains specific IE9 and IE10 fixes/workarounds. We will begin cleaning our code-base and remove them.
- We plan to adopt TypeScript 2.0, so this will be the last release where `monaco.d.ts` is generated by TypeScript 1.8.
- `javascript` and `typescript` language services:
  - exposed API to get to the underlying language service.
  - fixed a bug that prevented modifying `extraLibs`.
- Multiple improvements/bugfixes to the `css`, `less`, `scss` and `json` language services.
- Added support for ATS/Postiats.

### API changes:

- settings:
  - new: `mouseWheelZoom`, `wordWrap`, `snippetSuggestions`, `tabCompletion`, `wordBasedSuggestions`, `renderControlCharacters`, `renderLineHighlight`, `fontWeight`.
  - removed: `tabFocusMode`, `outlineMarkers`.
  - renamed: `indentGuides` -> `renderIndentGuides`, `referenceInfos` -> `codeLens`
- added `editor.pushUndoStop()` to explicitly push an undo stop
- added `suppressMouseDown` to `IContentWidget`
- added optional `resolveLink` to `ILinkProvider`
- removed `enablement`, `contextMenuGroupId` from `IActionDescriptor`
- removed exposed constants for editor context keys.

### Notable bugfixes:

- Icons missing in the find widget in IE11 [#148](https://github.com/Microsoft/monaco-editor/issues/148)
- Multiple context menu issues
- Multiple clicking issues in IE11/Edge ([#137](https://github.com/Microsoft/monaco-editor/issues/137), [#118](https://github.com/Microsoft/monaco-editor/issues/118))
- Multiple issues with the high-contrast theme.
- Multiple IME issues in IE11, Edge and Firefox.

### Thank you

- [Pavel Kolev (@paveldk)](https://github.com/paveldk): Fix sending message to terminated worker [PR vscode#10833](https://github.com/Microsoft/vscode/pull/10833)
- [Pavel Kolev (@paveldk)](https://github.com/paveldk): Export getTypeScriptWorker & getJavaScriptWorker to monaco.languages.typescript [PR monaco-typescript#8](https://github.com/Microsoft/monaco-typescript/pull/8)
- [Sandy Armstrong (@sandyarmstrong)](https://github.com/sandyarmstrong): Support CompletionItemKind.Method. [PR vscode#10225](https://github.com/Microsoft/vscode/pull/10225)
- [Sandy Armstrong (@sandyarmstrong)](https://github.com/sandyarmstrong): Fix show in IE11 [PR vscode#10309](https://github.com/Microsoft/vscode/pull/10309)
- [Sandy Armstrong (@sandyarmstrong)](https://github.com/sandyarmstrong): Correct docs for IEditorScrollbarOptions.useShadows [PR vscode#11312](https://github.com/Microsoft/vscode/pull/11312)
- [Artyom Shalkhakov (@ashalkhakov)](https://github.com/ashalkhakov): Adding support for ATS/Postiats [PR monaco-languages#5](https://github.com/Microsoft/monaco-languages/pull/5)

---

## [0.5.1] (24.06.2016)

- Fixed mouse handling in IE

---

## [0.5.0] (24.06.2016)

### Breaking changes

- `monaco.editor.createWebWorker` now loads the AMD module and calls `create` and passes in as first argument a context of type `monaco.worker.IWorkerContext` and as second argument the `initData`. This **breaking change** was needed to allow handling the case of misconfigured web workers (running on a file protocol or the cross-domain case)
- the `CodeActionProvider.provideCodeActions` now gets passed in a `CodeActionContext` that contains the markers at the relevant range.
- the `hoverMessage` of a decoration is now a `MarkedString | MarkedString[]`
- the `contents` of a `Hover` returned by a `HoverProvider` is now a `MarkedString | MarkedString[]`
- removed deprecated `IEditor.onDidChangeModelRawContent`, `IModel.onDidChangeRawContent`

### Notable fixes

- Broken configurations (loading from `file://` or misconfigured cross-domain loading) now load the web worker code in the UI thread. This caused a **breaking change** in the behaviour of `monaco.editor.createWebWorker`
- The right-pointing mouse pointer is oversized in high DPI - [issue](https://github.com/Microsoft/monaco-editor/issues/5)
- The editor functions now correctly when hosted inside a `position:fixed` element.
- Cross-origin configuration is now picked up (as advertised in documentation from MonacoEnvironment)

[0.24.0]: https://github.com/Microsoft/monaco-editor/compare/v0.23.0...v0.24.0
[0.23.0]: https://github.com/Microsoft/monaco-editor/compare/v0.22.3...v0.23.0
[0.22.3]: https://github.com/Microsoft/monaco-editor/compare/v0.22.2...v0.22.3
[0.22.2]: https://github.com/Microsoft/monaco-editor/compare/v0.22.1...v0.22.2
[0.22.1]: https://github.com/Microsoft/monaco-editor/compare/v0.22.0...v0.22.1
[0.22.0]: https://github.com/Microsoft/monaco-editor/compare/v0.21.3...v0.22.0
[0.21.3]: https://github.com/Microsoft/monaco-editor/compare/v0.21.2...v0.21.3
[0.21.2]: https://github.com/Microsoft/monaco-editor/compare/v0.21.1...v0.21.2
[0.21.1]: https://github.com/Microsoft/monaco-editor/compare/v0.21.0...v0.21.1
[0.21.0]: https://github.com/Microsoft/monaco-editor/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/Microsoft/monaco-editor/compare/v0.19.3...v0.20.0
[0.19.3]: https://github.com/Microsoft/monaco-editor/compare/v0.19.2...v0.19.3
[0.19.2]: https://github.com/Microsoft/monaco-editor/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/Microsoft/monaco-editor/compare/v0.20.0...v0.19.1
[0.19.0]: https://github.com/Microsoft/monaco-editor/compare/v0.18.1...v0.19.0
[0.18.1]: https://github.com/Microsoft/monaco-editor/compare/v0.18.0...v0.18.1
[0.18.0]: https://github.com/Microsoft/monaco-editor/compare/v0.17.1...v0.18.0
[0.17.1]: https://github.com/Microsoft/monaco-editor/compare/v0.17.0...v0.17.1
[0.17.0]: https://github.com/Microsoft/monaco-editor/compare/v0.16.2...v0.17.0
[0.16.2]: https://github.com/Microsoft/monaco-editor/compare/v0.16.1...v0.16.2
[0.16.1]: https://github.com/Microsoft/monaco-editor/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/Microsoft/monaco-editor/compare/v0.15.6...v0.16.0
[0.15.6]: https://github.com/Microsoft/monaco-editor/compare/v0.15.5...v0.15.6
[0.15.5]: https://github.com/Microsoft/monaco-editor/compare/v0.15.4...v0.15.5
[0.15.4]: https://github.com/Microsoft/monaco-editor/compare/v0.15.3...v0.15.4
[0.15.3]: https://github.com/Microsoft/monaco-editor/compare/v0.15.2...v0.15.3
[0.15.2]: https://github.com/Microsoft/monaco-editor/compare/v0.15.1...v0.15.2
[0.15.1]: https://github.com/Microsoft/monaco-editor/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/Microsoft/monaco-editor/compare/v0.14.3...v0.15.0
[0.14.3]: https://github.com/Microsoft/monaco-editor/compare/v0.14.2...v0.14.3
[0.14.2]: https://github.com/Microsoft/monaco-editor/compare/v0.14.1...v0.14.2
[0.14.1]: https://github.com/Microsoft/monaco-editor/compare/v0.14.0...v0.14.1
[0.14.0]: https://github.com/Microsoft/monaco-editor/compare/v0.13.1...v0.14.0
[0.13.1]: https://github.com/Microsoft/monaco-editor/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/Microsoft/monaco-editor/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/Microsoft/monaco-editor/compare/v0.11.1...v0.12.0
[0.11.1]: https://github.com/Microsoft/monaco-editor/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/Microsoft/monaco-editor/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/Microsoft/monaco-editor/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/Microsoft/monaco-editor/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/Microsoft/monaco-editor/compare/v0.8.3...v0.9.0
[0.8.3]: https://github.com/Microsoft/monaco-editor/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/Microsoft/monaco-editor/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/Microsoft/monaco-editor/compare/v0.8.0...v0.8.1
[0.6.1]: https://github.com/Microsoft/monaco-editor/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/Microsoft/monaco-editor/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/Microsoft/monaco-editor/compare/v0.5.0...v0.5.1
