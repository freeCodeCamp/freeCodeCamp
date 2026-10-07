## 6.8.5 (2025-03-26)

### Bug fixes

Fix a regression (since 6.8.4) that broke the `markerFilter` option.

## 6.8.4 (2024-11-28)

### Bug fixes

Don't create overlapping decorations when diagnostics overlap.

Fix an issue where block widgets could cause the lint gutter to show diagnostics multiple times.

## 6.8.3 (2024-11-21)

### Bug fixes

Fix an issue that prevented tooltips in the lint gutter from being displayed.

## 6.8.2 (2024-09-24)

### Bug fixes

Show lint markers for code replaced by a block widget.

When multiple linters are installed, start displaying results from ones that return quickly even if others are slow to return.

## 6.8.1 (2024-06-19)

### Bug fixes

Make lint markers non-inclusive again, since having them that way causes more issues than it solves.

## 6.8.0 (2024-05-23)

### New features

The new `autoPanel` option can be used to make the panel automatically appear when diagnostics are added and close when no diagnostics are left.

## 6.7.1 (2024-05-15)

### Bug fixes

Don't perform an additional superfluous timed lint run after `forceLinting` has been called.

## 6.7.0 (2024-04-30)

### New features

The `renderMessage` function is now called with the editor view as first argument.

## 6.6.0 (2024-04-29)

### New features

The new `hideOn` configuration option can be used to control in what circumstances lint tooltips get hidden by state changes.

## 6.5.0 (2024-01-30)

### Bug fixes

Make lint mark decorations inclusive, so that they are applied even if the marked content is replaced by a widget decoration.

### New features

`linter` can now be called with null as source to only provide a configuration.

`markerFilter` and `tooltipFilter` function now get passed the current editor state.

## 6.4.2 (2023-09-14)

### Bug fixes

Make sure scrolling diagnostic into view in the panel works when the editor is scaled.

## 6.4.1 (2023-08-26)

### Bug fixes

Fix a crash that could occur when a view was reconfigured in a way that removed the lint extension.

## 6.4.0 (2023-07-03)

### New features

Diagnostics can now use `"hint"` as a severity level.

Diagnostics can now set a `markClass` property to add an additional CSS class to the text marked by the diagnostic.

## 6.3.0 (2023-06-23)

### New features

A new `previousDiagnostic` command can be used to move back through the active diagnostics.

## 6.2.2 (2023-06-05)

### Bug fixes

Make sure lint gutter tooltips are properly closed when the content of their line changes.

## 6.2.1 (2023-04-13)

### Bug fixes

The `linter` function now eagerly includes all lint-related extensions, rather than appending them to the configuration as-needed, so that turning off linting by clearing the compartment that contains it works properly.

## 6.2.0 (2023-02-27)

### New features

The new `needsRefresh` option to `linter` makes it possible to cause linting to be recalculated for non-document state changes.

## 6.1.1 (2023-02-15)

### Bug fixes

Give lint action buttons a pointer cursor style.

Fix a bug that caused diagnostic action callbacks to be called twice when their button was clicked.

## 6.1.0 (2022-11-15)

### New features

The new `forEachDiagnostic` function can be used to iterate over the diagnostics in an editor state.

## 6.0.0 (2022-06-08)

### Breaking changes

Update dependencies to 6.0.0

## 0.20.3 (2022-05-25)

### New features

Diagnostic objects may now have a `renderMessage` method to render their message to the DOM.

## 0.20.2 (2022-05-02)

### New features

The package now exports the `LintSource` function type.

The new `markerFilter` and `tooltipFilter` options to `linter` and `lintGutter` allow more control over which diagnostics are visible and which have tooltips.

## 0.20.1 (2022-04-22)

### Bug fixes

Hide lint tooltips when the document is changed.

## 0.20.0 (2022-04-20)

### Breaking changes

Update dependencies to 0.20.0

## 0.19.6 (2022-03-04)

### Bug fixes

Fix a bug where hovering over the icons in the lint gutter would sometimes fail to show a tooltip or show the tooltip for another line.

## 0.19.5 (2022-02-25)

### Bug fixes

Make sure the lint gutter tooltips are positioned under their icon, even when the line is wrapped.

## 0.19.4 (2022-02-25)

### Bug fixes

Fix an issue where an outdated marker could stick around on the lint gutter after all diagnostics were removed.

### New features

Add a `hoverTime` option to the lint gutter. Change default hover time to 300

## 0.19.3 (2021-11-09)

### New features

Export a function `lintGutter` which returns an extension that installs a gutter marking lines with diagnostics.

The package now exports the effect used to update the diagnostics (`setDiagnosticsEffect`).

## 0.19.2 (2021-09-29)

### Bug fixes

Fix a bug where reconfiguring the lint source didn't restart linting.

## 0.19.1 (2021-09-17)

### Bug fixes

Prevent decorations that cover just a line break from being invisible by showing a widget instead of range for them.

### New features

The `diagnosticCount` method can now be used to determine whether there are active diagnostics.

## 0.19.0 (2021-08-11)

### Breaking changes

Update dependencies to 0.19.0

## 0.18.6 (2021-08-08)

### Bug fixes

Fix a crash in the key handler of the lint panel when no diagnostics are available.

## 0.18.5 (2021-08-07)

### Bug fixes

Fix an issue that caused `openLintPanel` to not actually open the panel when ran before the editor had any lint state loaded.

### New features

The package now exports a `forceLinting` function that forces pending lint queries to run immediately.

## 0.18.4 (2021-06-07)

### Bug fixes

Multiple `linter` extensions can now be added to an editor without disrupting each other.

Fix poor layout on lint tooltips due to changes in @codemirror/tooltip.

## 0.18.3 (2021-05-10)

### Bug fixes

Fix a regression where using `setDiagnostics` when linting hadn't been abled yet ignored the first set of diagnostics.

## 0.18.2 (2021-04-16)

### Bug fixes

Newlines in line messages are now shown as line breaks to the user.

### New features

You can now pass a delay option to `linter` to configure how long it waits before calling the linter.

## 0.18.1 (2021-03-15)

### Bug fixes

Adjust to current @codemirror/panel and @codemirror/tooltip interfaces.

## 0.18.0 (2021-03-03)

### Bug fixes

Make sure action access keys are discoverable for screen reader users.

Selection in the lint panel should now be properly visible to screen readers.

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

