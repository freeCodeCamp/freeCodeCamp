# hast-to-hyperscript

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to transform a [*tree*][tree] to something else through
a [hyperscript][] interface.

## Install

[npm][]:

```sh
npm install hast-to-hyperscript
```

## Use

```js
var toH = require('hast-to-hyperscript')
var h = require('hyperscript')

var tree = {
  type: 'element',
  tagName: 'p',
  properties: {id: 'alpha', className: ['bravo']},
  children: [
    {type: 'text', value: 'charlie '},
    {
      type: 'element',
      tagName: 'strong',
      properties: {style: 'color: red;'},
      children: [{type: 'text', value: 'delta'}]
    },
    {type: 'text', value: ' echo.'}
  ]
}

// Transform (`hyperscript` needs `outerHTML` to serialize):
var doc = toH(h, tree).outerHTML

console.log(doc)
```

Yields:

```html
<p class="bravo" id="alpha">charlie <strong>delta</strong> echo.</p>
```

## API

### `toH(h, tree[, options|prefix])`

Transform a [**hast**][hast] [*tree*][tree] to something else through a
[hyperscript][] interface.

###### Parameters

*   `h` ([`Function`][h]) — Hyperscript function
*   `tree` ([`Node`][node]) — [*Tree*][tree] to transform
*   `prefix` — Treated as `{prefix: prefix}`
*   `options.prefix` (`string` or `boolean`, optional)
    — Prefix to use as a prefix for keys passed in `attrs` to `h()`,
    this behavior is turned off by passing `false`, turned on by passing
    a `string`.
    By default, `h-` is used as a prefix if the given `h` is detected as being
    `virtual-dom/h` or `React.createElement`
*   `options.space` (enum, `'svg'` or `'html'`, default: `'html'`)
    — Whether `node` is in the `'html'` or `'svg'` space.
    If an `svg` element is found when inside the HTML space, `toH` automatically
    switches to the SVG space when entering the element, and switches back when
    exiting

###### Returns

`*` — Anything returned by invoking `h()`.

### `function h(name, attrs, children)`

Create an [*element*][element] from the given values.

###### Content

`h` is called with the node that is currently compiled as the context object
(`this`).

###### Parameters

*   `name` (`string`) — Tag-name of element to create
*   `attrs` (`Object.<string>`) — Attributes to set
*   `children` (`Array.<* | string>`) — List of children (results of previously
    invoking `h()`)

###### Returns

`*` — Anything.

##### Caveats

###### Nodes

Most hyperscript implementations only support [*elements*][element] and
[*texts*][text].
[**hast**][hast] supports [*doctype*][doctype], [*comment*][comment], and
[*root*][root] as well.

*   If anything other than an `element` or `root` node is given, `toH` throws
*   If a [*root*][root] is given with no [*children*][child], an empty `div`
    [*element*][element] is returned
*   If a [*root*][root] is given with one [*element*][element] [*child*][child],
    that element is transformed
*   Otherwise, the children are wrapped in a `div` [*element*][element]

If unknown nodes (a node with a [*type*][type] not defined by [**hast**][hast])
are found as [*descendants*][descendant] of the given [*tree*][tree], they are
ignored: only [*text*][text] and [*element*][element] are transformed.

###### Support

Although there are lots of libraries mentioning support for a hyperscript-like
interface, there are significant differences between them.
For example, [`hyperscript`][hyperscript] doesn’t support classes in `attrs` and
[`virtual-dom/h`][vdom] needs an `attributes` object inside `attrs` most of the
time.
`toH` works around these differences for:

*   [`React.createElement`][react]
*   Vue’s [`createElement`][vue]
*   [`virtual-dom/h`][vdom]
*   [`hyperscript`][hyperscript]

## Security

Use of `hast-to-hyperscript` can open you up to a
[cross-site scripting (XSS)][xss] attack if the hast tree is unsafe.
Use [`hast-util-sanitize`][sanitize] to make the hast tree safe.

## Related

*   [`hastscript`][hastscript]
    — Hyperscript compatible interface for creating nodes
*   [`hast-util-sanitize`][sanitize]
    — Sanitize nodes
*   [`hast-util-from-dom`](https://github.com/syntax-tree/hast-util-from-dom)
    — Transform a DOM tree to hast
*   [`unist-builder`](https://github.com/syntax-tree/unist-builder)
    — Create any unist tree
*   [`xastscript`](https://github.com/syntax-tree/xastscript)
    — Create a xast tree

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

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-to-hyperscript.svg

[build]: https://travis-ci.org/syntax-tree/hast-to-hyperscript

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-to-hyperscript.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-to-hyperscript

[downloads-badge]: https://img.shields.io/npm/dm/hast-to-hyperscript.svg

[downloads]: https://www.npmjs.com/package/hast-to-hyperscript

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-to-hyperscript.svg

[size]: https://bundlephobia.com/result?p=hast-to-hyperscript

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

[vdom]: https://github.com/Matt-Esch/virtual-dom/tree/HEAD/virtual-hyperscript

[hyperscript]: https://github.com/hyperhype/hyperscript

[react]: https://reactjs.org/docs/glossary.html#react-elements

[vue]: https://vuejs.org/v2/guide/render-function.html#createElement-Arguments

[hastscript]: https://github.com/syntax-tree/hastscript

[tree]: https://github.com/syntax-tree/unist#tree

[child]: https://github.com/syntax-tree/unist#child

[type]: https://github.com/syntax-tree/unist#type

[descendant]: https://github.com/syntax-tree/unist#descendant

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes

[text]: https://github.com/syntax-tree/hast#text

[doctype]: https://github.com/syntax-tree/hast#doctype

[root]: https://github.com/syntax-tree/hast#root

[comment]: https://github.com/syntax-tree/hast#comment

[element]: https://github.com/syntax-tree/hast#element

[h]: #function-hname-attrs-children

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize
