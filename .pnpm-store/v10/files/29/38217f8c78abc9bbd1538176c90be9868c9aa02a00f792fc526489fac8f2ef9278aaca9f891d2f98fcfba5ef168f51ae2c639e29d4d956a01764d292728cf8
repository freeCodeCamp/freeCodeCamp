## 8.5.2 (2025-07-01)

### Bug fixes

Use the proper version of `acorn` as a dependency.

## 8.5.1 (2025-06-08)

### Bug fixes

Handle tokenizer exceptions raised by invalid numeric separators.

## 8.5.0 (2025-04-17)

### New features

Support ES2025 import attributes.

## 8.4.0 (2023-10-26)

### Bug fixes

Fix an issue where a slash after a call to a propery named the same as some keywords would be tokenized as a regular expression.

Fix a bug where the parser would raise an error when an invalid escape was included in an identifier after a keyword.

### New features

Use a set of new, much more precise, TypeScript types.

## 8.3.0 (2021-12-27)

### New features

Support quoted export names.

Support class private fields with the `in` operator.

### Bug fixes

Fix a bug that caused semicolons after `export *` statements to be parsed as empty statements.

## 8.2.1 (2021-09-06)

### Bug fixes

Depend on the proper version of acorn.

## 8.2.0 (2021-09-06)

### New features

Add support for ES2022 class static blocks.

## 8.1.0 (2021-04-24)

### New features

Add support for ES2022 class fields and private methods.

## 8.0.2 (2021-01-25)

### Bug fixes

Adjust package.json to work with Node 12.16.0 and 13.0-13.6.

## 8.0.1 (2020-10-11)

### Bug fixes

Allow `for await` at the top level.

## 8.0.0 (2020-08-12)

### New features

The package can now be loaded directly as an ECMAScript module in node 13+.

### Breaking changes

The `ecmaVersion` option is now required. For the moment, omitting it will still work with a warning, but that will change in a future release.

## 7.1.0 (2020-06-11)

### Bug fixes

Fix various issues in regexp validation.

### New features

Add support for `import.meta`.

Add support for optional chaining (`?.`) and nullish coalescing (`??`).

Support `export * as ns from "source"`.

## 7.0.0 (2019-08-12)

### Breaking changes

Changes the node format for dynamic imports to use the `ImportExpression` node type, as defined in [ESTree](https://github.com/estree/estree/blob/master/es2020.md#importexpression).

## 6.1.0 (2019-07-04)

### New features

Support bigint syntax.

Support dynamic import.

## 6.0.0 (2018-09-14)

### Breaking changes

This module has been moved into its own package, `acorn-loose`.

Plugins work differently, and will have to be rewritten to work with this version.

The `parse_dammit` function is now simply called `parse`.

## 5.1.0 (2017-07-05)

### Bug fixes

Make the ES module version of the loose parser actually work.

## 4.0.4 (2016-12-19)

### Bug fixes

Fix issue with loading acorn_loose.js with an AMD loader.

## 3.2.0 (2016-06-07)

### Bug fixes

Don't crash when the loose parser is called without options object.

## 3.1.0 (2016-04-18)

### Bug fixes

Fix issue where the loose parser created invalid TemplateElement nodes for unclosed template literals.

## 2.7.0 (2016-01-04)

### Fixes

Make sure the loose parser always attaches a `local` property to `ImportNamespaceSpecifier` nodes.

## 2.6.4 (2015-11-12)

### Fixes

Fix crash in loose parser when parsing invalid object pattern.

### New features

Support plugins in the loose parser.

## 2.5.0 (2015-10-27)

### Fixes

In the loose parser, don't allow non-string-literals as import sources.
