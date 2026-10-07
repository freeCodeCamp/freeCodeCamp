# micromark-extension-gfm-footnote

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[micromark][] extensions to support GFM [footnotes][post].

## Contents

* [What is this?](#what-is-this)
* [When to use this](#when-to-use-this)
* [Install](#install)
* [Use](#use)
* [API](#api)
  * [`defaultBackLabel(referenceIndex, rereferenceIndex)`](#defaultbacklabelreferenceindex-rereferenceindex)
  * [`gfmFootnote()`](#gfmfootnote)
  * [`gfmFootnoteHtml(options?)`](#gfmfootnotehtmloptions)
  * [`BackLabelTemplate`](#backlabeltemplate)
  * [`HtmlOptions`](#htmloptions)
* [Bugs](#bugs)
* [Authoring](#authoring)
* [HTML](#html)
* [CSS](#css)
* [Syntax](#syntax)
* [Types](#types)
* [Compatibility](#compatibility)
* [Security](#security)
* [Related](#related)
* [Contribute](#contribute)
* [License](#license)

## What is this?

This package contains extensions that add support for footnotes as enabled by
GFM to [`micromark`][micromark].

GitHub announced footnotes [on September 30, 2021][post] but did not specify
them in their GFM spec.
As they are implemented in their parser and supported in all places where
other GFM features work, they can be considered part of GFM.
GitHub employs several other features (such as mentions or frontmatter) that
are either not in their parser, or not in all places where GFM features work,
which should not be considered GFM.

The implementation of footnotes on github.com is currently buggy.
The bugs have been reported on [`cmark-gfm`][cmark-gfm].
This micromark extension matches github.com except for its bugs.

## When to use this

This project is useful when you want to support footnotes in markdown.

You can use these extensions when you are working with [`micromark`][micromark].
To support all GFM features, use
[`micromark-extension-gfm`][micromark-extension-gfm] instead.

When you need a syntax tree, combine this package with
[`mdast-util-gfm-footnote`][mdast-util-gfm-footnote].

All these packages are used in [`remark-gfm`][remark-gfm], which focusses on
making it easier to transform content by abstracting these internals away.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-gfm-footnote
```

In Deno with [`esm.sh`][esmsh]:

```js
import {gfmFootnote, gfmFootnoteHtml} from 'https://esm.sh/micromark-extension-gfm-footnote@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {gfmFootnote, gfmFootnoteHtml} from 'https://esm.sh/micromark-extension-gfm-footnote@2?bundle'
</script>
```

## Use

Say our document `example.md` contains:

````markdown
Using footnotes is fun![^1] They let you reference relevant information without disrupting the flow of what you’re trying to say.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here’s one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    ```
    my code
    ```

    Add as many paragraphs as you like.

Text here and here and here.
[Learn more about markdown and footnotes in markdown](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes)
````

…and our module `example.js` looks as follows:

```js
import fs from 'node:fs/promises'
import {micromark} from 'micromark'
import {gfmFootnote, gfmFootnoteHtml} from 'micromark-extension-gfm-footnote'

const output = micromark(await fs.readFile('example.md'), {
  extensions: [gfmFootnote()],
  htmlExtensions: [gfmFootnoteHtml()]
})

console.log(output)
```

…now running `node example.js` yields:

```html
<p>Using footnotes is fun!<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> They let you reference relevant information without disrupting the flow of what you’re trying to say.<sup><a href="#user-content-fn-bignote" id="user-content-fnref-bignote" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup></p>
<p>Text here and here and here.
<a href="https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes">Learn more about markdown and footnotes in markdown</a></p>
<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>This is the first footnote. <a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
<li id="user-content-fn-bignote">
<p>Here’s one with multiple paragraphs and code.</p>
<p>Indent paragraphs to include them in the footnote.</p>
<pre><code>my code
</code></pre>
<p>Add as many paragraphs as you like. <a href="#user-content-fnref-bignote" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a></p>
</li>
</ol>
</section>
```

## API

This package exports the identifiers
[`defaultBackLabel`][api-default-back-label],
[`gfmFootnote`][api-gfm-footnote], and
[`gfmFootnoteHtml`][api-gfm-footnote-html].
There is no default export.

The export map supports the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.

### `defaultBackLabel(referenceIndex, rereferenceIndex)`

Generate the default label that GitHub uses on backreferences
([`BackLabelTemplate`][api-back-label-template]).

### `gfmFootnote()`

Create an extension for `micromark` to enable GFM footnote syntax.

###### Returns

Extension for `micromark` that can be passed in `extensions` to enable GFM
footnote syntax ([`Extension`][micromark-extension]).

### `gfmFootnoteHtml(options?)`

Create an extension for `micromark` to support GFM footnotes when serializing
to HTML.

###### Parameters

* `options` ([`HtmlOptions`][api-html-options], optional)
  — configuration

###### Returns

Extension for `micromark` that can be passed in `htmlExtensions` to support GFM
footnotes when serializing to HTML
([`HtmlExtension`][micromark-html-extension]).

### `BackLabelTemplate`

Generate a back label dynamically (TypeScript type).

For the following markdown:

```markdown
Alpha[^micromark], bravo[^micromark], and charlie[^remark].

[^remark]: things about remark
[^micromark]: things about micromark
```

This function will be called with:

* `0` and `0` for the backreference from `things about micromark` to
  `alpha`, as it is the first used definition, and the first call to it
* `0` and `1` for the backreference from `things about micromark` to
  `bravo`, as it is the first used definition, and the second call to it
* `1` and `0` for the backreference from `things about remark` to
  `charlie`, as it is the second used definition

###### Parameters

* `referenceIndex` (`number`)
  — index of the definition in the order that they are first referenced,
  0-indexed
* `rereferenceIndex` (`number`)
  — index of calls to the same definition, 0-indexed

###### Returns

Back label to use when linking back from definitions to their reference
(`string`).

### `HtmlOptions`

Configuration (TypeScript type).

##### Fields

###### `clobberPrefix`

Prefix to use before the `id` attribute on footnotes to prevent them from
*clobbering* (`string`, default: `'user-content-'`).

Pass `''` for trusted markdown and when you are careful with polyfilling.
You could pass a different prefix.

DOM clobbering is this:

```html
<p id="x"></p>
<script>alert(x) // `x` now refers to the `p#x` DOM element</script>
```

The above example shows that elements are made available by browsers, by their
ID, on the `window` object.
This is a security risk because you might be expecting some other variable at
that place.
It can also break polyfills.
Using a prefix solves these problems.

###### `label`

Textual label to use for the footnotes section (`string`, default:
`'Footnotes'`).

Change it when the markdown is not in English.

This label is typically hidden visually (assuming a `sr-only` CSS class
is defined that does that) and so affects screen readers only.

###### `labelAttributes`

Attributes to use on the footnote label (`string`, default:
`'class="sr-only"'`).

Change it to show the label and add other attributes.

This label is typically hidden visually (assuming an `sr-only` CSS class
is defined that does that) and so affects screen readers only.
If you do have such a class, but want to show this section to everyone,
pass an empty string.
You can also add different attributes.

> 👉 **Note**: `id="footnote-label"` is always added, because footnote
> calls use it with `aria-describedby` to provide an accessible label.

###### `labelTagName`

HTML tag name to use for the footnote label element (`string`, default:
`'h2'`).

Change it to match your document structure.

This label is typically hidden visually (assuming a `sr-only` CSS class
is defined that does that) and so affects screen readers only.

###### `backLabel`

Textual label to describe the backreference back to footnote calls
([`BackLabelTemplate`][api-back-label-template] or `string`,
default: [`defaultBackLabel`][api-default-back-label]).

Change it when the markdown is not in English.

This label is used in the [`aria-label`][aria-label] attribute on each
backreference (the `↩` links).
It affects users of assistive technology.

## Bugs

GitHub’s own algorithm to parse footnote definitions contains several bugs.
These are not present in this project.
The issues relating to footnote definitions are:

* [Footnote reference call identifiers are trimmed, but definition
  identifiers aren’t](https://github.com/github/cmark-gfm/issues/237)\
  — initial and final whitespace in labels causes them not to match
* [Footnotes are matched case-insensitive, but links keep their casing,
  breaking them](https://github.com/github/cmark-gfm/issues/239)\
  — using uppercase (or any character that will be percent encoded) in
  identifiers breaks links
* [Colons in footnotes generate links w/o
  `href`](https://github.com/github/cmark-gfm/issues/250)\
  — colons in identifiers generate broken links
* [Character escape of `]` does not work in footnote
  identifiers](https://github.com/github/cmark-gfm/issues/240)\
  — some character escapes don’t work
* [Footnotes in links are
  broken](https://github.com/github/cmark-gfm/issues/249)\
  — while `CommonMark` prevents links in links, GitHub does not prevent
  footnotes (which turn into links) in links
* [Footnote-like brackets around image, break that
  image](https://github.com/github/cmark-gfm/issues/275)\
  — images can’t be used in what looks like a footnote call
* [GFM footnotes: line ending in footnote definition label causes text to
  disappear](https://github.com/github/cmark-gfm/issues/282)\
  — line endings in footnote definitions cause text to disappear

## Authoring

When authoring markdown with footnotes it’s recommended to use words instead
of numbers (or letters or anything with an order) as identifiers.
That makes it easier to reuse and reorder footnotes.

It’s recommended to place footnotes definitions at the bottom of the document.

## HTML

GFM footnotes do not, on their own, relate to anything in HTML.
When a footnote reference matches with a definition, they each relate to several
elements in HTML.

The reference relates to `<sup>` and `<a>` elements in HTML:

```html
<sup><a href="#user-content-fn-x" id="user-content-fnref-x" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></p>
```

…where `x` is the identifier used in the markdown source and `1` the number of
corresponding, listed, definition.

See [*§ 4.5.19 The `sub` and `sup` elements*][html-sup],
[*§ 4.5.1 The `a` element*][html-a], and
[*§ 3.2.6.6 Embedding custom non-visible data with the `data-*`
attributes*][html-data]
in the HTML spec, and
[*§ 6.8 `aria-describedby` property*][aria-describedby]
in WAI-ARIA, for more info.

When one or more definitions are referenced, a footnote section is generated at
the end of the document, using `<section>`, `<h2>`, and `<ol>` elements:

```html
<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">Footnotes</h2>
<ol>…</ol>
</section>
```

Each definition is generated as a `<li>` in the `<ol>` in the order they were
first referenced:

```html
<li id="user-content-fn-1">…</li>
```

Backreferences are injected at the end of the first paragraph, or, when there
is no paragraph, at the end of the definition.
When a definition is referenced multiple times, multiple backreferences are
generated.
Further backreferences use an extra counter in the `href` attribute and
visually in a `<span>` after `↩`.

```html
<a href="#user-content-fnref-1" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩</a> <a href="#user-content-fnref-1-2" data-footnote-backref="" class="data-footnote-backref" aria-label="Back to content">↩<sup>2</sup></a>
```

See
[*§ 4.5.1 The `a` element*][html-a],
[*§ 4.3.6 The `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements*][html-h],
[*§ 4.4.8 The `li` element*][html-li],
[*§ 4.4.5 The `ol` element*][html-ol],
[*§ 4.4.1 The `p` element*][html-p],
[*§ 4.3.3 The `section` element*][html-section], and
[*§ 4.5.19 The `sub` and `sup` elements*][html-sup]
in the HTML spec, and
[*§ 6.8 `aria-label` property*][aria-label]
in WAI-ARIA, for more info.

## CSS

The following CSS is needed to make footnotes look a bit like GitHub (and fixes
a bug).
For the complete actual CSS see
[`sindresorhus/github-markdown-css`](https://github.com/sindresorhus/github-markdown-css).

```css
/* Style the footnotes section. */
.footnotes {
  font-size: smaller;
  color: #8b949e;
  border-top: 1px solid #30363d;
}

/* Hide the section label for visual users. */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  word-wrap: normal;
  border: 0;
}

/* Place `[` and `]` around footnote references. */
[data-footnote-ref]::before {
  content: '[';
}

[data-footnote-ref]::after {
  content: ']';
}
```

## Syntax

Footnotes form with, roughly, the following BNF:

```bnf
gfm_footnote_reference ::= gfm_footnote_label

gfm_footnote_definition_start ::= gfm_footnote_label ':' *space_or_tab
; Restriction: blank line allowed.
gfm_footnote_definition_cont ::= 4(space_or_tab)

; Restriction: maximum `999` codes between `^` and `]`.
gfm_footnote_label ::= '[' '^' 1*(gfm_footnote_label_byte | gfm_footnote_label_escape) ']'
gfm_footnote_label_byte ::= text - '[' - '\\' - ']'
gfm_footnote_label_escape ::= '\\' ['[' | '\\' | ']']

; Any byte (u8)
byte ::= 0x00..=0xFFFF
space_or_tab ::= '\t' | ' '
eol ::= '\n' | '\r' | '\r\n'
line ::= byte - eol
text ::= line - space_or_tab
```

Further lines after `gfm_footnote_definition_start` that are not prefixed with
`gfm_footnote_definition_cont` cause the footnote definition to be exited,
except when those lines are lazy continuation or blank.
Like so many things in markdown, footnote definition too are complex.
See [*§ Phase 1: block structure* in `CommonMark`][commonmark-block] for more
on parsing details.

The identifiers in the `label` parts are interpreted as the
[string][micromark-content-types] content type.
That means that character escapes and character references are allowed.

Definitions match to references through identifiers.
To match, both labels must be equal after normalizing with
[`normalizeIdentifier`][micromark-normalize-identifier].
One definition can match to multiple calls.
Multiple definitions with the same, normalized, identifier are ignored: the
first definition is preferred.
To illustrate, the definition with the content of `x` wins:

```markdown
[^a]: x
[^a]: y

[^a]
```

Importantly, while labels *can* include [string][micromark-content-types]
content (character escapes and character references), these are not considered
when matching.
To illustrate, neither definition matches the reference:

```markdown
[^a&amp;b]: x
[^a\&b]: y

[^a&b]
```

Because footnote definitions are containers (like block quotes and list items),
they can contain more footnote definitions.
They can even include references to themselves.

## Types

This package is fully typed with [TypeScript][].
It exports the additional types [`BackLabelTemplate`][api-back-label-template]
and [`HtmlOptions`][api-html-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-extension-gfm-footnote@^2`, compatible with Node.js 16.

This package works with `micromark` version `3` and later.

## Security

This package is safe.
Setting `clobberPrefix = ''` is dangerous, it opens you up to DOM clobbering.
The `labelTagName` and `labelAttributes` options are unsafe when used with user
content, they allow defining arbitrary HTML.

## Related

* [`micromark-extension-gfm`][micromark-extension-gfm]
  — support all of GFM
* [`mdast-util-gfm-footnote`][mdast-util-gfm-footnote]
  — support all of GFM in mdast
* [`mdast-util-gfm`][mdast-util-gfm]
  — support all of GFM in mdast
* [`remark-gfm`][remark-gfm]
  — support all of GFM in remark

## Contribute

See [`contributing.md` in `micromark/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark-extension-gfm-footnote/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-gfm-footnote/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-gfm-footnote.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-gfm-footnote

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-gfm-footnote.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-gfm-footnote

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-extension-gfm-footnote

[size]: https://bundlejs.com/?q=micromark-extension-gfm-footnote

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[support]: https://github.com/micromark/.github/blob/main/support.md

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[development]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions

[micromark]: https://github.com/micromark/micromark

[micromark-content-types]: https://github.com/micromark/micromark#content-types

[micromark-extension]: https://github.com/micromark/micromark#syntaxextension

[micromark-html-extension]: https://github.com/micromark/micromark#htmlextension

[micromark-normalize-identifier]: https://github.com/micromark/micromark/tree/main/packages/micromark-util-normalize-identifier

[micromark-extension-gfm]: https://github.com/micromark/micromark-extension-gfm

[mdast-util-gfm-footnote]: https://github.com/syntax-tree/mdast-util-gfm-footnote

[mdast-util-gfm]: https://github.com/syntax-tree/mdast-util-gfm

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[post]: https://github.blog/changelog/2021-09-30-footnotes-now-supported-in-markdown-fields/

[cmark-gfm]: https://github.com/github/cmark-gfm

[commonmark-block]: https://spec.commonmark.org/0.30/#phase-1-block-structure

[html-a]: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element

[html-data]: https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes

[html-h]: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements

[html-li]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-li-element

[html-ol]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element

[html-p]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element

[html-section]: https://html.spec.whatwg.org/multipage/sections.html#the-section-element

[html-sup]: https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-sub-and-sup-elements

[aria-describedby]: https://w3c.github.io/aria/#aria-describedby

[aria-label]: https://w3c.github.io/aria/#aria-label

[api-gfm-footnote]: #gfmfootnote

[api-gfm-footnote-html]: #gfmfootnotehtmloptions

[api-html-options]: #htmloptions

[api-default-back-label]: #defaultbacklabelreferenceindex-rereferenceindex

[api-back-label-template]: #backlabeltemplate
