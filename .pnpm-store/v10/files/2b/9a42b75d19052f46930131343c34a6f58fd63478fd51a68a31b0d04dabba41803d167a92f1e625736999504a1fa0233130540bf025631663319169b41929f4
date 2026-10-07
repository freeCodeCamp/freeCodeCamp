## 6.4.10 (2025-09-11)

### Bug fixes

Don't include period characters in the language's word characters.

## 6.4.9 (2024-04-12)

### Bug fixes

Fix a bug in `autoCloseTags` that made tags not close when typing > after an attribute.

## 6.4.8 (2024-01-23)

### Bug fixes

Complete attribute names after whitespace in a tag even when completion isn't explicitly triggered.

## 6.4.7 (2023-11-27)

### Bug fixes

Parse `script` tags with `application/json` type as JSON syntax.

## 6.4.6 (2023-08-28)

### Bug fixes

`autoCloseTags` now generates two separate transactions, so that the completion can be undone separately.

Add highlighting for the content of `<script>` tags with a type of `importmap` or `speculationrules`.

## 6.4.5 (2023-06-23)

### Bug fixes

Fix a bug where HTML autocompletion didn't work when the cursor was at the end of a bit of HTML code inside a mixed-language document.

## 6.4.4 (2023-06-05)

### Bug fixes

Fix a bug where the completed tag names didn't take into account the parent node's declared children in the schema in some circumstances.

## 6.4.3 (2023-03-27)

### Bug fixes

Fix a bug that could cause some nested language regions to be parsed multiple times.

## 6.4.2 (2023-02-10)

### Bug fixes

Fix an issue where `autoCloseTags` would close self-closing tags when typed directly in front of a word.

## 6.4.1 (2023-01-12)

### Bug fixes

Use only the tag name for matching of opening and closing tags.

## 6.4.0 (2022-11-30)

### Bug fixes

Directly depend on @lang/css 1.1.0, since we're using a new top rule name introduced in that.

### New features

Add a `globalAttrs` property to (completion) `TagSpec` objects that controls whether global attributes are completed in that tag.

## 6.3.1 (2022-11-29)

### Bug fixes

Remove incorrect pure annotation that broke the code after tree-shaking.

## 6.3.0 (2022-11-28)

### Bug fixes

Parse type=text/babel script tags as JSX.

### New features

The new `nestedLanguages` option can be used to configure how the content of script, style, and textarea tags is parsed.

The content of style attributes will now be parsed as CSS, and the content of on[event] attributes as JavaScript. The new `nestedAttributes` option can be used to configure the parsing of other attribute values.

## 6.2.0 (2022-11-16)

### New features

Add a `selfClosingTags` option to `html` that enables `/>` syntax.

## 6.1.4 (2022-11-15)

### Bug fixes

Parse the content of text/javascript or lang=ts script tags as TypeScript, use JS for text/jsx, and TSX for text/typescript-jsx.

## 6.1.3 (2022-10-24)

### Bug fixes

Remove deprecated HTML tags from the completions.

## 6.1.2 (2022-09-27)

### Bug fixes

Make tag auto-closing consume `>` characters after the cursor.

## 6.1.1 (2022-09-05)

### Bug fixes

Properly list the dependency on @codemirror/view in package.json.

## 6.1.0 (2022-06-22)

### New features

It is now possible to pass in options to extend the set of tags and attributes provided by autocompletion.

## 6.0.0 (2022-06-08)

### Breaking changes

Update dependencies to 6.0.0

## 0.20.0 (2022-04-20)

### New features

Autocompletion now suggests the `<template>` and `<slot>` elements.

## 0.19.4 (2021-11-30)

### Bug fixes

Fix an issue where autoclosing a tag directly in front of alphanumeric text would include nonsense text in the completed tag name.

## 0.19.3 (2021-09-23)

### New features

The package now exports a completion source function, rather than a prebuilt completion extension.

Use more specific highlighting tags for attribute names and values.

## 0.19.2 (2021-09-21)

### New features

The new `autoCloseTags` extension (included by default in `html()`) finishes closing tags when you type a `>` or `/` character.

## 0.19.1 (2021-08-11)

### Bug fixes

Fix incorrect versions for @lezer dependencies.

## 0.19.0 (2021-08-11)

### Bug fixes

Improve autocompletion in/after unclosed opening tags.

### New features

`html()` now takes a `matchClosingTags` option to turn off closing tag matching.

## 0.18.1 (2021-05-05)

### Bug fixes

Fix an issue where the completer would sometimes try to complete an opening tag to its own close tag.

Fix a bug that would sometimes produce the wrong indentation in HTML elements.

Fix a bug that broke tag-specific attribute completion in tags like `<input>` or `<script>`.

Move a new version of lezer-html which solves some issues with autocompletion.

## 0.18.0 (2021-03-03)

### Bug fixes

Improves indentation at end of implicitly closed elements.

## 0.17.1 (2021-01-06)

### New features

The package now also exports a CommonJS module.

## 0.17.0 (2020-12-29)

### Breaking changes

First numbered release.

