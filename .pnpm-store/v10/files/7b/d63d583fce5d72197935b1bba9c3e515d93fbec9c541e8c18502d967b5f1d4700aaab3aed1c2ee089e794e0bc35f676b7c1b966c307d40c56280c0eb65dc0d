# micromark-extension-directive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support the [generic directives proposal][prop]
(`:cite[smith04]`, `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and
such).

Generic directives solve the need for an infinite number of potential extensions
to markdown in a single markdown-esque way.
However, it’s just [a proposal][prop] and may never be specced.

This package provides the low-level modules for integrating with the micromark
tokenizer and the micromark HTML compiler.

You probably shouldn’t use the HTML parts of this package directly, but instead
use [`mdast-util-directive`][mdast-util-directive] with **[mdast][]** or
[`remark-directive`][remark-directive] with **[remark][]**

## Install

[npm][]:

```sh
npm install micromark-extension-directive
```

## Use

Say we have the following file, `example.md`:

```markdown
A lovely language know as :abbr[HTML]{title="HyperText Markup Language"}.
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var micromark = require('micromark')
var syntax = require('micromark-extension-directive')
var html = require('micromark-extension-directive/html')

var doc = fs.readFileSync('example.md')

var result = micromark(doc, {
  extensions: [syntax()],
  htmlExtensions: [html({abbr: abbr})]
})

console.log(result)

function abbr(d) {
  if (d.type !== 'textDirective') return false

  this.tag('<abbr')

  if (d.attributes && 'title' in d.attributes) {
    this.tag(' title="' + this.encode(d.attributes.title) + '"')
  }

  this.tag('>')
  this.raw(d.label || '')
  this.tag('</abbr>')
}
```

Now, running `node example` yields (abbreviated):

```html
<p>A lovely language know as <abbr title="HyperText Markup Language">HTML</abbr>.</p>
```

## API

### `html(htmlOptions?)`

### `syntax(syntaxOptions?)`

> Note: `syntax` is the default export of this module, `html` is available at
> `micromark-extension-directive/html`.

Support the [generic directives proposal][prop].
The export of `syntax` is a function that can be called with options and returns
an extension for the micromark parser (to tokenize directives in text, flow,
and as a container; can be passed in `extensions`).
The export of `html` is a function that can be called with options and returns
an extension for the default HTML compiler (to compile directives a certain way;
can be passed in `htmlExtensions`).

###### `syntaxOptions`

None yet, but might be added in the future.

###### `htmlOptions`

An object mapping names of directives to handlers ([`Object.<Handle>`][handle]).
The special name `'*'` is the fallback to handle all unhandled directives.

### `function handle(directive)`

How to handle a `directive` ([`Directive`][directive]).

##### Returns

`boolean` — `false` can be used to signal that the directive could not be
handled, in which case the fallback is used (when given).

### `Directive`

An object representing a directive.

###### Fields

*   `type` (`enum`, either `'textDirective'`, `'leafDirective'`, or
    `'containerDirective'`)
*   `name` (`string`) — name of directive
*   `label` (`string?`) — compiled HTML content in brackets
*   `attributes` (`Object.<string>?`) — optional object w/ HTML attributes
*   `content` (`string?`) — compiled HTML content when `container`

## Syntax

The syntax looks like this:

```markdown
Directives in text can form with a single colon, such as :cite[smith04].
Their syntax is `:name[label]{attributes}`.

Leafs (block without content) can form by using two colons:

::youtube[Video of a cat in a box]{vid=01ab2cd3efg}

Their syntax is `::name[label]{attributes}` on its own line.

Containers (blocks with content) can form by using three colons:

:::spoiler
He dies.
:::

The `name` part is required.  The first character must be a letter, other
characters can be alphanumerical, `-`, and `_`.
`_` cannot end a name.

The `[label]` part is optional (`:x` and `:x[]` are equivalent)†.
When used, it can include text constructs such as emphasis and so on: `x[a *b*
c]`.

The `{attributes}` part is optional (`:x` and `:x{}` are equivalent)†.
When used, it is handled like HTML attributes, such as that `{a}`, `{a=""}`,
, `{a=''}` but also `{a=b}`, `{a="b"}`, and `{a='b'}` are equivalent.
Shortcuts are available for `id=` (`{#readme}` for `{id=readme}`) and
`class` (`{.big}` for `{class=big}`).
When multiple ids are found, the last is used; when multiple classes are found,
they are combined: `{.red class=green .blue}` is equivalent to
`{.red .green .blue}` and `{class="red green blue"}`.

† there is one case where a name must be followed by an empty label or empty
attributes: a *text* directive that only has a name, cannot be followed by a
colon. So, `:red:` doesn’t work. Use either `:red[]` or `:red{}` instead.
The reason for this is to allow GitHub emoji (gemoji) and directives to coexist.

Containers can be nested by using more colons outside:

::::spoiler
He dies.

:::spoiler
She is born.
:::
::::

The closing fence must include the same or more colons as the opening.
If no closing is found, the container runs to the end of its parent container
(block quote, list item, document, or other container).

::::spoiler
These three are not enough to close
:::
So this line is also part of the container.
```

Note that while other implementations are sometimes loose in what they allow,
this implementation mimics CommonMark as closely as possible:

*   Whitespace is not allowed between colons and name (~~`: a`~~), name and
    label (~~`:a []`~~), name and attributes (~~`:a {}`~~), or label and
    attributes (~~`:a[] {}`~~) — because it’s not allowed in links either
    (~~`[] ()`~~)
*   No trailing colons allowed on the opening fence of a container
    (~~`:::a:::`~~) — because it’s not allowed in fenced code either
*   The label and attributes in a leaf or container cannot include line endings
    (~~`::a[b\nc]`~~) — because it’s not allowed in fenced code either

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`syntax-tree/mdast-util-directive`][mdast-util-directive]
    — mdast utility to support generic directives
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast

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

[build-badge]: https://github.com/micromark/micromark-extension-directive/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-directive/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-directive.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-directive

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-directive.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-directive

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-directive.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-directive

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/HEAD/contributing.md

[support]: https://github.com/micromark/.github/blob/HEAD/support.md

[coc]: https://github.com/micromark/.github/blob/HEAD/code-of-conduct.md

[micromark]: https://github.com/micromark/micromark

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[prop]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444

[mdast-util-directive]: https://github.com/syntax-tree/mdast-util-directive

[remark-directive]: https://github.com/remarkjs/remark-directive

[handle]: #function-handledirective

[directive]: #directive
