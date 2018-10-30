## 6.1.0 (2018-09-28)

### New features

The walker now walks `TemplateElement` nodes.

## 6.0.1 (2018-09-14)

### Bug fixes

Fix bad "main" field in package.json.

## 6.0.0 (2018-09-14)

### Breaking changes

This is now a separate package, `acorn-walk`, rather than part of the main `acorn` package.

The `ScopeBody` and `ScopeExpression` meta-node-types are no longer supported.

## 5.7.1 (2018-06-15)

### Bug fixes

Make sure the walker and bin files are rebuilt on release (the previous release didn't get the up-to-date versions).

## 5.7.0 (2018-06-15)

### Bug fixes

Fix crash in walker when walking a binding-less catch node.

## 5.6.2 (2018-06-05)

### Bug fixes

In the walker, go back to allowing the `baseVisitor` argument to be null to default to the default base everywhere.

## 5.6.1 (2018-06-01)

### Bug fixes

Fix regression when passing `null` as fourth argument to `walk.recursive`.

## 5.6.0 (2018-05-31)

### Bug fixes

Fix a bug in the walker that caused a crash when walking an object pattern spread.

## 5.5.1 (2018-03-06)

### Bug fixes

Fix regression in walker causing property values in object patterns to be walked as expressions.

## 5.5.0 (2018-02-27)

### Bug fixes

Support object spread in the AST walker.

## 5.4.1 (2018-02-02)

### Bug fixes

5.4.0 somehow accidentally included an old version of walk.js.

## 5.2.0 (2017-10-30)

### Bug fixes

The `full` and `fullAncestor` walkers no longer visit nodes multiple times.

## 5.1.0 (2017-07-05)

### New features

New walker functions `full` and `fullAncestor`.

## 3.2.0 (2016-06-07)

### New features

Make it possible to use `visit.ancestor` with a walk state.

## 3.1.0 (2016-04-18)

### New features

The walker now allows defining handlers for `CatchClause` nodes.

## 2.5.2 (2015-10-27)

### Fixes

Fix bug where the walker walked an exported `let` statement as an expression.
