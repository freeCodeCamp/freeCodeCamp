# @es-joy/jsdoccomment

[![NPM](https://img.shields.io/npm/v/@es-joy/jsdoccomment.svg?label=npm)](https://www.npmjs.com/package/@es-joy/jsdoccomment)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/es-joy/jsdoccomment/blob/main/LICENSE-MIT.txt)
[![Build Status](https://github.com/es-joy/jsdoccomment/workflows/CI/CD/badge.svg)](#)
[![API Docs](https://img.shields.io/badge/API%20Documentation-476ff0)](https://es-joy.github.io/jsdoccomment/)


This project aims to preserve and expand upon the
`SourceCode#getJSDocComment` functionality of the deprecated ESLint method.

It also exports a number of functions currently for working with JSDoc:

## API

### `parseComment`

For parsing `comment-parser` in a JSDoc-specific manner.
Might wish to have tags with or without tags, etc. derived from a split off
JSON file.

### `commentParserToESTree`

Converts [comment-parser](https://github.com/syavorsky/comment-parser)
AST to ESTree/ESLint/Babel friendly AST. See the "ESLint AST..." section below.

### `estreeToString`

Stringifies. In addition to the node argument, it accepts an optional second
options object with a single `preferRawType` key. If you don't need to modify
JSDoc type AST, you might wish to set this to `true` to get the benefits of
preserving the raw form, but for AST-based stringification of JSDoc types,
keep it `false` (the default).

### `jsdocVisitorKeys`

The [VisitorKeys](https://github.com/eslint/eslint-visitor-keys)
for `JsdocBlock`, `JsdocDescriptionLine`, and `JsdocTag`. More likely to be
subject to change or dropped in favor of another type parser.

### `jsdocTypeVisitorKeys`

Just a re-export of [VisitorKeys](https://github.com/eslint/eslint-visitor-keys)
from [`jsdoc-type-pratt-parser`](https://github.com/simonseyock/jsdoc-type-pratt-parser/).

### `getDefaultTagStructureForMode`

Provides info on JSDoc tags:

- `nameContents` ('namepath-referencing'|'namepath-defining'|
    'dual-namepath-referencing'|false) - Whether and how a name is allowed
    following any type. Tags without a proper name (value `false`) may still
    have a description (which can appear like a name); `descriptionAllowed`
    in such cases would be `true`.
    The presence of a truthy `nameContents` value is therefore only intended
    to signify whether separate parsing should occur for a name vs. a
    description, and what its nature should be.
- `nameRequired` (boolean) - Whether a name must be present following any type.
- `descriptionAllowed` (boolean) - Whether a description (following any name)
    is allowed.
- `typeAllowed` (boolean) - Whether the tag accepts a curly bracketed portion.
    Even without a type, a tag may still have a name and/or description.
- `typeRequired` (boolean) - Whether a curly bracketed type must be present.
- `typeOrNameRequired` (boolean) - Whether either a curly bracketed type is
    required or a name, but not necessarily both.

### Miscellaneous

Also currently exports these utilities:

- `getTokenizers` - Used with `parseComment` (its main core).
- `hasSeeWithLink` - A utility to detect if a tag is `@see` and has a `@link`.
- `commentHandler` - Used by `eslint-plugin-jsdoc`.
- `commentParserToESTree`- Converts [comment-parser](https://github.com/syavorsky/comment-parser)
    AST to ESTree/ESLint/Babel friendly AST.
- `jsdocVisitorKeys` - The [VisitorKeys](https://github.com/eslint/eslint-visitor-keys)
    for `JSDocBlock`, `JSDocDescriptionLine`, and `JSDocTag`.
- `jsdocTypeVisitorKeys` - [VisitorKeys](https://github.com/eslint/eslint-visitor-keys)
    for `jsdoc-type-pratt-parser`.
- `defaultNoTypes` = The tags which allow no types by default:
    `default`, `defaultvalue`, `description`, `example`, `file`,
    `fileoverview`, `license`, `overview`, `see`, `summary`
- `defaultNoNames` - The tags which allow no names by default:
    `access`, `author`, `default`, `defaultvalue`, `description`, `example`,
    `exception`, `file`, `fileoverview`, `kind`, `license`, `overview`,
    `return`, `returns`, `since`, `summary`, `throws`, `version`, `variation`

## ESLint AST produced for `comment-parser` nodes (`JsdocBlock`, `JsdocTag`, and `JsdocDescriptionLine`)

Note: Although not added in this package, `@es-joy/jsdoc-eslint-parser` adds
a `jsdoc` property to other ES nodes (using this project's `getJSDocComment`
to determine the specific comment-block that will be attached as AST).

### `JsdocBlock`

Has the following visitable properties:

1. `descriptionLines` (an array of `JsdocDescriptionLine` for multiline
    descriptions).
2. `tags` (an array of `JsdocTag`; see below)
3. `inlineTags` (an array of `JsdocInlineTag`; see below)

Has the following custom non-visitable property:

1. `delimiterLineBreak` - A string containing any line break after `delimiter`.
2. `lastDescriptionLine` - A number
3. `endLine` - A number representing the line number with `end`/`terminal`
4. `descriptionStartLine` - A 0+ number indicating the line where any
    description begins
5. `descriptionEndLine` - A 0+ number indicating the line where the description
    ends
6. `hasPreterminalDescription` - Set to 0 or 1. On if has a block description
    on the same line as the terminal `*/`.
7. `hasPreterminalTagDescription` - Set to 0 or 1. On if has a tag description
    on the same line as the terminal `*/`.
8. `preterminalLineBreak` - A string containing any line break before `terminal`.

May also have the following non-visitable properties from `comment-parser`:

1. `description` - Same as `descriptionLines` but as a string with newlines.
2. `delimiter`
3. `postDelimiter`
4. `lineEnd`
5. `initial` (from `start`)
6. `terminal` (from `end`)

### `JsdocTag`

Has the following visitable properties:

1. `parsedType` (the `jsdoc-type-pratt-parser` AST representation of the tag's
    type (see the `jsdoc-type-pratt-parser` section below)).
2. `typeLines` (an array of `JsdocTypeLine` for multiline type strings)
3. `descriptionLines` (an array of `JsdocDescriptionLine` for multiline
    descriptions)
4. `inlineTags` (an array of `JsdocInlineTag`)

May also have the following non-visitable properties from `comment-parser`
(note that all are included from `comment-parser` except `end` as that is only
for JSDoc blocks and note that `type` is renamed to `rawType` and `start` to
`initial`):

1. `description` - Same as `descriptionLines` but as a string with newlines.
2. `rawType` - `comment-parser` has this named as `type`, but because of a
    conflict with ESTree using `type` for Node type, we renamed it to
    `rawType`. It is otherwise the same as in `comment-parser`, i.e., a string
    with newlines, though with the initial `{` and final `}` stripped out.
    See `typeLines` for the array version of this property.
3. `initial` - Renamed from `start` to avoid potential conflicts with
    Acorn-style parser processing tools
4. `delimiter`
5. `postDelimiter`
6. `tag` (this does differ from `comment-parser` now in terms of our stripping
    the initial `@`)
7. `postTag`
8. `name`
9. `postName`
10. `postType`

### `JsdocDescriptionLine`

No visitable properties.

May also have the following non-visitable properties from `comment-parser`:

1. `delimiter`
2. `postDelimiter`
3. `initial` (from `start`)
4. `description`

### `JsdocTypeLine`

No visitable properties.

May also have the following non-visitable properties from `comment-parser`:

1. `delimiter`
2. `postDelimiter`
3. `initial` (from `start`)
4. `rawType` - Renamed from `comment-parser` to avoid a conflict. See
    explanation under `JsdocTag`

### `JsdocInlineTag`

No visitable properties.

Has the following non-visitable properties:

1. `format`: 'pipe' | 'plain' | 'prefix' | 'space'. These follow the styles of [link](https://jsdoc.app/tags-inline-link.html) or [tutorial](https://jsdoc.app/tags-inline-tutorial.html).
    1. `pipe`: `{@link namepathOrURL|link text}`
    2. `plain`: `{@link namepathOrURL}`
    3. `prefix`: `[link text]{@link namepathOrURL}`
    4. `space`: `{@link namepathOrURL link text (after the first space)}`
2. `namepathOrURL`: string
3. `tag`: string. The standard allows `tutorial` or `link`
4. `text`: string

## ESLint AST produced for `jsdoc-type-pratt-parser`

The AST, including `type`, remains as is from [jsdoc-type-pratt-parser](https://github.com/simonseyock/jsdoc-type-pratt-parser/).

The type will always begin with a `JsdocType` prefix added, along with a
camel-cased type name, e.g., `JsdocTypeUnion`.

The `jsdoc-type-pratt-parser` visitor keys are also preserved without change.

You can get a sense of the structure of these types using the parser's
[tester](https://jsdoc-type-pratt-parser.github.io/jsdoc-type-pratt-parser/).

## Installation

```shell
npm i @es-joy/jsdoccomment
```

## Changelog

The changelog can be found on the [CHANGES.md](https://github.com/es-joy/jsdoccomment/blob/main/CHANGES.md).
<!--## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](CONTRIBUTING.md).
-->
## Authors and license

[Brett Zamir](http://brett-zamir.me/) and
[contributors](https://github.com/es-joy/jsdoccomment/graphs/contributors).

MIT License, see the included [LICENSE-MIT.txt](https://github.com/es-joy/jsdoccomment/blob/main/LICENSE-MIT.txt) file.

## To-dos

1. Get complete code coverage
1. Given that `esquery` expects a `right` property to search for `>` (the
    child selector), we should perhaps insist, for example, that params are
    the child property for `JsdocBlock` or such. Where `:has()` is currently
    needed, one could thus instead just use `>`.
1. Might add `trailing` for `JsdocBlock` to know whether it is followed by a
    line break or what not; `comment-parser` does not provide, however
1. Fix and properly utilize `indent` argument (challenging for
    `eslint-plugin-jsdoc` but needed for `jsdoc-eslint-parser` stringifiers
    to be more faithful); should also then use the proposed `trailing` as well
