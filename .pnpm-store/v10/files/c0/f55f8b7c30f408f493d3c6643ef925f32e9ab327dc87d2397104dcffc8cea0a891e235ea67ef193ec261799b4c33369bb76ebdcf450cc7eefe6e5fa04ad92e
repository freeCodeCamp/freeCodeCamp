# mdast-util-directive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Extension for [`mdast-util-from-markdown`][from-markdown] and/or
[`mdast-util-to-markdown`][to-markdown] to support the [generic directives
proposal][prop] (`:cite[smith04]`, `::youtube[Video of a cat in a
box]{v=01ab2cd3efg}`, and such) in **[mdast][]**.
When parsing (`from-markdown`), must be combined with
[`micromark-extension-directive`][extension].

See [`micromark-extension-directive`][extension] for how the syntax works.
This utility handles parsing and serializing.
[Traverse the tree][traversal] to change them to whatever you please.

You probably shouldn’t use this package directly, but instead use
[`remark-directive`][plugin] with **[remark][]**

## Install

[npm][]:

```sh
npm install mdast-util-directive
```

## Use

Say our script, `example.js`, looks as follows:

```js
var fromMarkdown = require('mdast-util-from-markdown')
var toMarkdown = require('mdast-util-to-markdown')
var syntax = require('micromark-extension-directive')
var directive = require('mdast-util-directive')

var doc = 'A lovely language know as :abbr[HTML]{title="HyperText Markup Language"}.'

var tree = fromMarkdown(doc, {
  extensions: [syntax()],
  mdastExtensions: [directive.fromMarkdown]
})

console.log(tree)

var out = toMarkdown(tree, {extensions: [directive.toMarkdown]})

console.log(out)
```

Now, running `node example` yields (positional info removed for brevity):

```js
{
  type: 'root',
  children: [
    {
      type: 'paragraph',
      children: [
        {type: 'text', value: 'A lovely language know as '},
        {
          type: 'textDirective',
          name: 'abbr',
          attributes: {title: 'HyperText Markup Language'},
          children: [{type: 'text', value: 'HTML'}]
        },
        {type: 'text', value: '.'}
      ]
    }
  ]
}
```

```markdown
A lovely language know as :abbr[HTML]{title="HyperText Markup Language"}.
```

## API

### `directive.fromMarkdown`

### `directive.toMarkdown`

> Note: the separate extensions are also available at
> `mdast-util-directive/from-markdown` and `mdast-util-directive/to-markdown`.

Support the [generic directives proposal][prop].
The exports are extensions, respectively
for [`mdast-util-from-markdown`][from-markdown] and
[`mdast-util-to-markdown`][to-markdown].

There are no options, but passing [`options.quote`][quote] to
`mdast-util-to-markdown` is honored for attributes.

This utility handles parsing and serializing.
[Traverse the tree][traversal] to change them to whatever you please.

## Syntax tree

The following interfaces are added to **[mdast][]** by this utility.

### Nodes

#### `TextDirective`

```idl
interface TextDirective <: Parent {
  type: "textDirective"
  children: [PhrasingContent]
}

TextDirective includes Directive
```

**TextDirective** (**[Parent][dfn-parent]**) is a directive.
It can be used where **[phrasing][dfn-phrasing-content]** content is expected.
Its content model is also **[phrasing][dfn-phrasing-content]** content.
It includes the mixin **[Directive][dfn-mxn-directive]**.

For example, the following Markdown:

```markdown
:name[Label]{#x.y.z key=value}
```

Yields:

```js
{
  type: 'textDirective',
  name: 'name',
  attributes: {id: 'x', class: 'y z', key: 'value'},
  children: [{type: 'text', value: 'Label'}]
}
```

#### `LeafDirective`

```idl
interface LeafDirective <: Parent {
  type: "leafDirective"
  children: [PhrasingContent]
}

LeafDirective includes Directive
```

**LeafDirective** (**[Parent][dfn-parent]**) is a directive.
It can be used where **[flow][dfn-flow-content]** content is expected.
Its content model is **[phrasing][dfn-phrasing-content]** content.
It includes the mixin **[Directive][dfn-mxn-directive]**.

For example, the following Markdown:

```markdown
::youtube[Label]{v=123}
```

Yields:

```js
{
  type: 'leafDirective',
  name: 'youtube',
  attributes: {v: '123'},
  children: [{type: 'text', value: 'Label'}]
}
```

#### `ContainerDirective`

```idl
interface ContainerDirective <: Parent {
  type: "containerDirective"
  children: [FlowContent]
}

ContainerDirective includes Directive
```

**ContainerDirective** (**[Parent][dfn-parent]**) is a directive.
It can be used where **[flow][dfn-flow-content]** content is expected.
Its content model is also **[flow][dfn-flow-content]** content.
It includes the mixin **[Directive][dfn-mxn-directive]**.

The phrasing in the label is, when available, added as a paragraph with a
`directiveLabel: true` field, as the head of its content.

For example, the following Markdown:

```markdown
:::spoiler[Open at your own peril]
He dies.
:::
```

Yields:

```js
{
  type: 'containerDirective',
  name: 'spoiler',
  attributes: {},
  children: [
    {
      type: 'paragraph',
      data: {directiveLabel: true},
      children: [{type: 'text', value: 'Open at your own peril'}]
    },
    {
      type: 'paragraph',
      children: [{type: 'text', value: 'He dies.'}]
    }
  ]
}
```

### Mixin

### `Directive`

```idl
interface mixin Directive {
  name: string
  attributes: Attributes?
}

interface Attributes {}
typedef string AttributeName
typedef string AttributeValue
```

**Directive** represents something defined by an extension.

The `name` field must be present and represents an identifier of an extension.

The `attributes` field represents information associated with the node.
The value of the `attributes` field implements the **Attributes** interface.

In the **Attributes** interface, every field must be an `AttributeName` and
every value an `AttributeValue`.
The fields and values can be anything: there are no semantics (such as by HTML
or hast).

> In JSON, the value `null` must be treated as if the attribute was not
> included.
> In JavaScript, both `null` and `undefined` must be similarly ignored.

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`remarkjs/remark-directive`][plugin]
    — remark plugin to support generic directives
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-directive`][extension]
    — micromark extension to parse directives
*   [`syntax-tree/mdast-util-from-markdown`][from-markdown]
    — mdast parser using `micromark` to create mdast from markdown
*   [`syntax-tree/mdast-util-to-markdown`][to-markdown]
    — mdast serializer to create markdown from mdast

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-util-directive/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-directive/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-directive.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-directive

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-directive.svg

[downloads]: https://www.npmjs.com/package/mdast-util-directive

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-directive.svg

[size]: https://bundlephobia.com/result?p=mdast-util-directive

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[plugin]: https://github.com/remarkjs/remark-directive

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[micromark]: https://github.com/micromark/micromark

[extension]: https://github.com/micromark/micromark-extension-directive

[prop]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444

[quote]: https://github.com/syntax-tree/mdast-util-to-markdown#optionsquote

[traversal]: https://unifiedjs.com/learn/recipe/tree-traversal/

[dfn-parent]: https://github.com/syntax-tree/mdast#parent

[dfn-flow-content]: https://github.com/syntax-tree/mdast#flowcontent

[dfn-phrasing-content]: https://github.com/syntax-tree/mdast#phrasingcontent

[dfn-mxn-directive]: #directive
