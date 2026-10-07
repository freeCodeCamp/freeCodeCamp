## 1.3.12 (2025-09-26)

### Bug fixes

Emit tokens for `<` characters without tag name, so that autocompletion can work with them.

## 1.3.11 (2025-09-25)

### Bug fixes

Don't parse `<` followed by whitespace as the start of a tag.

## 1.3.10 (2024-05-29)

### Bug fixes

Fix an issue that broke attribute reading when defining a nested language on a tag that isn't a `style`, `textearea`, or `script` tag.

## 1.3.9 (2024-02-21)

### Bug fixes

When using the "selfClosing" dialect, fix parse errors for `<br/>` (tags that implicitly self-close) and `<script/>` (special tags).

## 1.3.8 (2023-12-28)

### Bug fixes

Add `bidiIsolate` node props for tags, comments, and attributes.

Mark tags, attributes, and comments as isolating for bidirectional text.

## 1.3.7 (2023-11-23)

### Bug fixes

Fix a bug that caused the parser to not properly recognize empty HTML comments. Don't emit nested parses for empty elements in configureNesting

Fix an issue where `configureNesting` could emit empty overlay ranges for empty elements.

## 1.3.6 (2023-07-12)

### Bug fixes

Improve parsing of multiple unfinished opening tags by disallowing less-than characters in attribute names.

## 1.3.5 (2023-07-03)

### Bug fixes

Make the package work with new TS resolution styles.

## 1.3.4 (2023-03-27)

### Bug fixes

Fix a bug that caused mixed parsing of non-style/script elements to attach the nested parse tree to the incorrect node.

## 1.3.3 (2023-02-21)

### Bug fixes

Make sure build output is strictly ES6 again.

## 1.3.2 (2023-02-16)

### Bug fixes

Fix a crash caused by nexted parsing of attributes returning invalid ranges for attributes missing their closing quote.

## 1.3.1 (2023-02-11)

### Bug fixes

Always allow self-closing tags in `<svg>` and `<math>` tags.

## 1.3.0 (2022-12-16)

### New features

`configureNesting` now supports targeting tags other than `style`, `script`, and `textarea`.

## 1.2.0 (2022-11-25)

### New features

`configureNesting` now takes a second argument that can be used to specify that the value of some attributes should be parsed with an external parser.

## 1.1.1 (2022-11-18)

### Bug fixes

Align allowed characters in unquoted attribute values with the spec. Replace another unicode escape with a character

## 1.1.0 (2022-11-16)

### Bug fixes

Allow more characters in attribute names, following HTML spec.

### New features

The new `"selfClosing"` dialect allows `/>` syntax to be used to create self-closing tags.

## 1.0.1 (2022-07-27)

### Bug fixes

Continue parsing when an invalid entity reference appears in an attribute value.

## 1.0.0 (2022-06-06)

### New features

First stable version.

## 0.16.1 (2022-05-16)

### Bug fixes

Fix a bug where comment end tokens preceded by dashes were sometimes not recognized.

## 0.16.0 (2022-04-20)

### Breaking changes

Move to 0.16 serialized parser format.

### New features

The parser now includes syntax highlighting information in its node types.

## 0.15.1 (2022-02-16)

### Bug fixes

Make sure the tree for unfinished self-closing tags shows them as self-closing.

## 0.15.0 (2021-08-11)

### Breaking changes

The module's name changed from `lezer-html` to `@lezer/html`.

Upgrade to the 0.15.0 lezer interfaces.

## 0.13.6 (2021-06-16)

### Bug fixes

Add a rule for invalid `&` syntax to avoid error-recovery around stray ampersands.

## 0.13.5 (2021-05-05)

### Bug fixes

Fix a problem where like attributes inappropriately included trailing whitespace.

## 0.13.4 (2021-03-10)

### Bug fixes

Strip quotes from attribute values passed to `attrs` predicates in `configureNesting`.

## 0.13.3 (2021-02-17)

### Bug fixes

Optimize the tokenizer by using a context tracker.

## 0.13.2 (2021-01-22)

### Bug fixes

Make comments consist of multiple tokens, so that huge comments don't freeze the parser.

## 0.13.1 (2020-12-04)

### Bug fixes

Fix versions of lezer packages depended on.

## 0.13.0 (2020-12-04)

### Breaking changes

The nested parser configuration utility is now called `configureNesting`, and returns an object to pass to `Parser.configure`'s `nested` option instead of a new parser.

### New features

The parser can now be given a "noMatch" dialect to not mark mismatched tags.

## 0.12.0 (2020-10-23)

### Breaking changes

Adjust to changed serialized parser format.

### New features

The parser now more effectively matches close and open tags, even in the presence of mismatched tags.

## 0.11.1 (2020-09-26)

### Bug fixes

Fix lezer depencency versions

## 0.11.0 (2020-09-26)

### Breaking changes

Follow change in serialized parser format.

## 0.10.0 (2020-08-07)

### Breaking changes

Upgrade to 0.10 parser serialization

## 0.9.0 (2020-06-08)

### Breaking changes

Upgrade to 0.9 parser serialization

### New features

Tag start/end tokens now have `NodeProp.openedBy`/`closedBy` props.

## 0.8.4 (2020-04-09)

### Bug fixes

Regenerate parser with a fix in lezer-generator so that the top node prop is properly assigned.

## 0.8.3 (2020-04-01)

### Bug fixes

Make the package load as an ES module on node

## 0.8.2 (2020-02-28)

### New features

Provide an ES module file.

## 0.8.1 (2020-02-26)

### Bug fixes

Adds support for single-quoted attribute values.

Don't treat /> tag ends as self-closing, just ignore them instead.

## 0.8.0 (2020-02-03)

### New features

Follow 0.8.0 release of the library.

## 0.7.0 (2020-01-20)

### Breaking changes

Use the lezer 0.7.0 parser format.

## 0.5.2 (2020-01-15)

### Bug fixes

Allow whitespace between the `<` and `/` in a close tag.

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

First numbered release.
