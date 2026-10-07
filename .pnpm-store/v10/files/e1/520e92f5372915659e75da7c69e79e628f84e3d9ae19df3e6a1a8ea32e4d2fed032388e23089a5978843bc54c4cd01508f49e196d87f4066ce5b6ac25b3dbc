## 6.5.2 (2025-02-03)

### Bug fixes

Fix a bug where reconfiguring a field with a new `init` value didn't update the value of the field.

## 6.5.1 (2025-01-10)

### Bug fixes

`countColumn` no longer loops infinitely when given a `to` that's higher than the input string's length.

## 6.5.0 (2024-12-09)

### New features

`RangeSet.compare` now supports a `boundChange` callback that is called when there's a change in the way ranges are split.

## 6.4.1 (2024-02-19)

### Bug fixes

Fix an issue that caused widgets at the end of a mark decoration to be rendered in their own separate mark DOM element.

## 6.4.0 (2023-12-28)

### Bug fixes

When multiple ranges in a single range set overlap, put the smaller ones inside the bigger ones, so that overlapping decorations don't break up each other's elements when coming from the same source.

### New features

Selection and selection range `eq` methods now support an optional argument that makes them also compare by cursor associativity.

The `RangeSet.join` function can be used to join multiple range sets together.

## 6.3.3 (2023-12-06)

### Bug fixes

Fix an issue where `Text.slice` and `Text.replace` could return objects with incorrect `length` when the given `from`/`to` values were out of range for the text.

## 6.3.2 (2023-11-27)

### Bug fixes

Make sure transactions cannot add multiple selections when `allowMultipleSelections` is false.

Fix a bug that caused `Text.iterLines` to not return empty lines at the end of the iterated ranges.

## 6.3.1 (2023-10-18)

### Bug fixes

Give the tag property on `FacetReader` the type of the output type parameter to force TypeScript to infer the proper type when converting from `Facet` to `FacetReader`.

## 6.3.0 (2023-10-12)

### New features

The new `FacetReader` type provides a way to export a read-only handle to a `Facet`.

## 6.2.1 (2023-05-23)

### Bug fixes

Fix an issue that could cause `RangeSet.compare` to miss changes in the set of active ranges around a point range.

## 6.2.0 (2022-12-26)

### New features

`EditorSelection.range` now accepts an optional 4th argument to specify the bidi level of the range's head position.

## 6.1.4 (2022-11-15)

### Bug fixes

Fix a bug that caused the `openStart` value passed to span iterators to be incorrect around widgets in some circumstances.

## 6.1.3 (2022-11-10)

### Bug fixes

Avoid unnecessary calls to computed facet getters when a state is reconfigured but no dependencies of the computed facet change.

Fix an infinite loop in `RangeSet.eq` when the `to` parameter isn't given.

## 6.1.2 (2022-09-21)

### Bug fixes

Fix an issue where, when multiple transaction extenders took effect, only the highest-precedence one was actually included in the transaction.

## 6.1.1 (2022-08-03)

### Bug fixes

Fix a bug in range set span iteration that would cause decorations to be inappropriately split in some situations.

## 6.1.0 (2022-06-30)

### Bug fixes

Refine change mapping to preserve insertions made by concurrent changes.

### New features

The `enables` option to `Facet.define` may now take a function, which will be called with the facet value to create the extensions.

## 6.0.1 (2022-06-17)

### Bug fixes

Fix a problem that caused effects' `map` methods to be called with an incorrect change set when filtering changes.

## 6.0.0 (2022-06-08)

### Breaking changes

Update dependencies to 6.0.0

## 0.20.1 (2022-06-02)

### New features

`EditorView.phrase` now accepts additional arguments, which it will interpolate into the phrase in the place of `$` markers.

## 0.20.0 (2022-04-20)

### Breaking changes

The deprecated precedence names `fallback`, `extend`, and `override` were removed from the library.

### Bug fixes

Fix a bug where, if an extension value occurs multiple times, its lowest, rather than highest precedence is used.

Fix an issue where facets with computed inputs would unneccesarily have their outputs recreated on state reconfiguration.

Fix a bug in the order in which new values for state fields and facets were computed, which could cause dynamic facets to hold the wrong value in some situations.

### New features

The exports from @codemirror/rangeset now live in this package.

The exports from @codemirror/text now live in this package.

## 0.19.9 (2022-02-16)

### Bug fixes

Mapping a non-empty selection range now always puts any newly inserted text on the sides of the range outside of the mapped version.

## 0.19.8 (2022-02-15)

### Bug fixes

Fix a bug where facet values with computed inputs could incorrectly retain their old value on reconfiguration.

## 0.19.7 (2022-02-11)

### Bug fixes

Avoid recomputing facets on state reconfiguration if that facet's inputs stayed precisely the same.

Selection ranges created with `EditorSelection.range` will now have an assoc pointing at their anchor, when non-empty.

## 0.19.6 (2021-11-19)

### Bug fixes

Fix a bug that caused facet compare functions to be called with an invalid value in some situations.

Fix a bug that caused dynamic facet values to be incorrectly kept unchanged when reconfiguration changed one of their dependencies.

## 0.19.5 (2021-11-10)

### Bug fixes

Fix a bug that would cause dynamic facet values influenced by a state reconfiguration to not properly recompute.

## 0.19.4 (2021-11-05)

### Bug fixes

When reconfiguring a state, effects from the reconfiguring transaction can now be seen by newly added state fields.

## 0.19.3 (2021-11-03)

### New features

The precedence levels (under `Prec`) now have more generic names, because their 'meaningful' names were entirely inappropriate in many situations.

## 0.19.2 (2021-09-13)

### New features

The editor state now has a `readOnly` property with a matching facet to control its value.

## 0.19.1 (2021-08-15)

### Bug fixes

Fix a bug where `wordAt` never returned a useful result.

## 0.19.0 (2021-08-11)

### Breaking changes

User event strings now work differently—the events emitted by the core packages follow a different system, and hierarchical event tags can be created by separating the words with dots.

### New features

`languageDataAt` now takes an optional `side` argument to specificy which side of the position you're interested in.

It is now possible to add a user event annotation with a direct `userEvent` property on a transaction spec.

Transactions now have an `isUserEvent` method that can be used to check if it is (a subtype of) some user event type.

## 0.18.7 (2021-05-04)

### Bug fixes

Fix an issue where state fields might be initialized with a state that they aren't actually part of during reconfiguration.

## 0.18.6 (2021-04-12)

### New features

The new `EditorState.wordAt` method finds the word at a given position.

## 0.18.5 (2021-04-08)

### Bug fixes

Fix an issue in the compiled output that would break the code when minified with terser.

## 0.18.4 (2021-04-06)

### New features

The new `Transaction.remote` annotation can be used to mark and recognize transactions created by other actors.

## 0.18.3 (2021-03-23)

### New features

The `ChangeDesc` class now has `toJSON` and `fromJSON` methods.

## 0.18.2 (2021-03-14)

### Bug fixes

Fix unintended ES2020 output (the package contains ES6 code again).

## 0.18.1 (2021-03-10)

### New features

The new `Compartment.get` method can be used to get the content of a compartment in a given state.

## 0.18.0 (2021-03-03)

### Breaking changes

`tagExtension` and the `reconfigure` transaction spec property have been replaced with the concept of configuration compartments and reconfiguration effects (see `Compartment`, `StateEffect.reconfigure`, and `StateEffect.appendConfig`).

## 0.17.2 (2021-02-19)

### New features

`EditorSelection.map` and `SelectionRange.map` now take an optional second argument to indicate which direction to map to.

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

