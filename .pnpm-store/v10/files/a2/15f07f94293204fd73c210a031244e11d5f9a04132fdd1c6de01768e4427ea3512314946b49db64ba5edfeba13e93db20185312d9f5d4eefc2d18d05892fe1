## 1.5.4 (2025-09-18)

### Bug fixes

Support `this` parameters in function types.

## 1.5.3 (2025-09-09)

### Bug fixes

Fix missing highlight tag for `defer` contextual keyword.

## 1.5.2 (2025-09-04)

### Bug fixes

Allow `const` casts with old angle-bracket cast syntax.

Add support for `import defer` syntax.

## 1.5.1 (2025-04-18)

### Bug fixes

Properly highlight `satisfies` as a keyword.

## 1.5.0 (2025-04-17)

### Bug fixes

Support `in`/`out` modifiers on TypeScript type parameters.

### New features

Support the TypeScript `satisfies` operator.

## 1.4.21 (2024-12-03)

### Bug fixes

Add support for `const` modifiers on TypeScript type parameters.

Allow TypeScript  syntax, where the condition is just a variable.

Fix a bug where some TypeScript `<` tokens didn't appear in the syntax tree.

## 1.4.20 (2024-12-02)

### Bug fixes

Use the `className` style tag for variable names used as constructors with `new`.

Add support for `asserts` syntax in function return types.

## 1.4.19 (2024-10-08)

### Bug fixes

Support question marks after method names in TypeScript object type notation.

Support bracketed property names in TypeScript object types.

Allow TypeScript interface declarations to extend multiple types.

## 1.4.18 (2024-09-17)

### Bug fixes

Support `as` syntax in mapped object types.

Make sure the parser doesn't get confused when a template interpolation is missing its expression.

## 1.4.17 (2024-06-11)

### Bug fixes

Add support for `{-readonly [K in T]-?: U}` TypeScript syntax.

## 1.4.16 (2024-05-04)

### Bug fixes

Don't consume `?.` tokens when followed by a digit.

Support type arguments on non-call expressions.

## 1.4.15 (2024-04-23)

### Bug fixes

Add support for `new.target` syntax.

## 1.4.14 (2024-03-30)

### Bug fixes

Recognize the `d` and `v` RegExp flags. Support destructured parameters in function types

Allow destructured parameters in function signature types.

## 1.4.13 (2024-01-16)

### Bug fixes

Fix inverted relative precedence of `&`, `|`, and `^` bitwise operators.

Add an explicit dependency on @lezer/common ^1.2.0.

## 1.4.12 (2024-01-04)

### Bug fixes

Mark strings, comments, and interpolations as isolating for bidirectional text.

## 1.4.11 (2023-12-18)

### Bug fixes

In TSX mode, parse `<T,>` or `<T extends U>` as type parameters, not JSX tags.

## 1.4.10 (2023-12-06)

### Bug fixes

Support `|` and `&` as prefixes in TypeScript types.

## 1.4.9 (2023-10-30)

### Bug fixes

Allow `default` to be used in `import`/`export` binding sets.

## 1.4.8 (2023-10-05)

### Bug fixes

Properly highlight `using` as a keyword.

## 1.4.7 (2023-08-23)

### Bug fixes

Properly parse hashbang comments.

## 1.4.6 (2023-08-22)

### Bug fixes

Make sure that, in TypeScript, type argument lists are prefered over comparison operators when both produce valid parses.

## 1.4.5 (2023-07-25)

### Bug fixes

Allow the index in a TypeScript indexed type to be any kind of type.

## 1.4.4 (2023-07-03)

### Bug fixes

Add support for `using` syntax.

Make the package work with new TS resolution styles.

## 1.4.3 (2023-04-24)

### Bug fixes

Properly parse `this: Type` within parameter lists for TypeScript.

## 1.4.2 (2023-03-29)

### Bug fixes

Properly parse `declare` in front of class properties and methods in TypeScript.

## 1.4.1 (2023-01-09)

### Bug fixes

Fix a bug where something like `yield [1]` (or `await`) was parsed as a member expression.

Add support for `yield*` syntax.

Escapes in strings are now parsed as their own tokens (and styled with the `escape` tag).

## 1.4.0 (2022-12-19)

### New features

The new `"SingleClassItem"` top-level rule can be used to parse only a class item (method, property, or static block).

## 1.3.2 (2022-12-14)

### Bug fixes

Typescript allows `override` on all class elements, not just methods.

Allow expressions in class extends clauses in TypeScript.

## 1.3.1 (2022-11-29)

### Bug fixes

Actually emit a tree node for the `@` characters in decorators.

## 1.3.0 (2022-11-28)

### New features

Add support for decorator syntax.

## 1.2.0 (2022-11-24)

### New features

The grammar now supports `top: "SingleExpression"` to parse an expression rather than a script.

## 1.1.1 (2022-11-19)

### Bug fixes

Fix parsing of computed properties in class declarations.

## 1.1.0 (2022-11-17)

### Bug fixes

Fix parsing of 'null' as type in TypeScript.

Allow computed properties in object destructuring patterns.

Add TypeScript 4.9's `satisfies` operator.

Support `accessor` syntax on class properties.

### New features

Add support for  optional call syntax.

Distinguish lower-case JSX element names syntactically, give them a `standard(tagName)` highlight tag.

## 1.0.2 (2022-07-21)

### Bug fixes

Properly assign a highlighting tag to the `super` keyword.

## 1.0.1 (2022-06-27)

### Bug fixes

Fix parsing of TypeScript conditional types.

Support type parameters in TypeScript function type syntax.

## 1.0.0 (2022-06-06)

### New features

First stable version.

## 0.16.0 (2022-04-20)

### Breaking changes

Move to 0.16 serialized parser format.

### Bug fixes

Allow commas as separators in TypeScript object type syntax.

### New features

Add `CatchClause` and `FinallyClause` nodes wrapping parts of `TryStatement`.

The parser now includes syntax highlighting information in its node types.

## 0.15.3 (2022-01-26)

### Bug fixes

Support missing values in array pattern syntax.

Support quoted module export names.

### New features

Template string interpolations now get their own nodes in the syntax tree.

## 0.15.2 (2021-12-08)

### Bug fixes

Fix a typo in the `TaggedTemplateExpression` node name. Support n suffixes after non-decimal integers

Add support for non-decimal bignum literals ().

Add support for static class initialization blocks.

## 0.15.1 (2021-11-12)

### Bug fixes

Add support for TypeScript `import {type X} from y` syntax.

Indexed TypeScript types can now take type parameters.

Add support for private field syntax.

Rename PropertyNameDefinition node to PropertyDefinition for consistency with other names.

### New features

Recognize TypeScript 4.3's `override` keyword.

## 0.15.0 (2021-08-11)

### Breaking changes

The module's name changed from `lezer-javascript` to `@lezer/javascript`.

Upgrade to the 0.15.0 lezer interfaces.

## 0.13.4 (2021-04-30)

### Bug fixes

Fixes a bug where arrow functions with expression bodies would include commas after the expression.

## 0.13.3 (2021-02-15)

### Bug fixes

Wrap escaped JSX attribute values in a `JSXEscape` node.

## 0.13.2 (2021-01-18)

### Bug fixes

Fix parsing of async function expressions.

## 0.13.1 (2020-12-04)

### Bug fixes

Fix versions of lezer packages depended on.

## 0.13.0 (2020-12-04)

## 0.12.0 (2020-10-23)

### Breaking changes

Adjust to changed serialized parser format.

## 0.11.1 (2020-09-26)

### Bug fixes

Fix lezer depencency versions

## 0.11.0 (2020-09-26)

### Breaking changes

Follow change in serialized parser format.

## 0.10.1 (2020-09-02)

### Bug fixes

Fix associativity of `else` and ternary operators.

Work around accidental ambiguity of TypeScript method and constructor signatures.

Properly parse `??=` as an update operator.

## 0.10.0 (2020-08-07)

### Breaking changes

Upgrade to 0.10 parser serialization

### New features

The gammar now supports TypeScript (use the `"ts"` dialect).

The grammar can now parse JSX syntax (use the `"jsx"` dialect).

## 0.9.1 (2020-06-29)

### Bug fixes

Fix accidental use of non-ES5 library methods.

## 0.9.0 (2020-06-08)

### Breaking changes

Upgrade to 0.9 parser serialization

## 0.8.4 (2020-05-30)

### Bug fixes

Fix the package.json `main` field pointing at the wrong file, breaking the library in node versions older than 13.

## 0.8.3 (2020-04-09)

### Bug fixes

Regenerate parser with a fix in lezer-generator so that the top node prop is properly assigned.

## 0.8.2 (2020-04-01)

### Bug fixes

Make the package load as an ES module on node

## 0.8.1 (2020-02-28)

### New features

Provide an ES module file.

## 0.8.0 (2020-02-03)

### Bug fixes

Add support for the spread ... operator in array literals.

### New features

Follow 0.8.0 release of the library.

Add support for nullish coalescing and optional chaining.

## 0.7.0 (2020-01-20)

### Breaking changes

Use the lezer 0.7.0 parser format.

## 0.5.2 (2020-01-15)

### Bug fixes

Regenerate with lezer-generator 0.5.2 to avoid cyclic forced reductions.

## 0.5.1 (2019-10-22)

### Bug fixes

Fix top prop missing from build output.

## 0.5.0 (2019-10-22)

### Breaking changes

Move from `lang` to `top` prop on document node.

## 0.4.0 (2019-09-10)

### Breaking changes

Adjust to 0.4.0 parse table format.

## 0.3.0 (2019-08-22)

### New features

Go back to node names, add props, follow changes in grammar syntax.

## 0.2.0 (2019-08-02)

### New features

Use tags rather than names.

## 0.1.0 (2019-07-09)

### New Features

First documented release.
