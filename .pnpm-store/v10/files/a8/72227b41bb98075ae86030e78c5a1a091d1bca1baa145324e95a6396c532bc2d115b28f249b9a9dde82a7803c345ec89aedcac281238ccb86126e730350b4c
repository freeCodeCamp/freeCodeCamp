# hastscript

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to create [*trees*][tree] in HTML or SVG.

Similar to [`hyperscript`][hyperscript], [`virtual-dom/h`][virtual-hyperscript],
[`React.createElement`][react], and [Vue’s `createElement`][vue],
but for [**hast**][hast].

Use [`unist-builder`][u] to create any [**unist**][unist] tree.

## Install

[npm][]:

```sh
npm install hastscript
```

## Use

```js
var h = require('hastscript')
var s = require('hastscript/svg')

// Children as an array:
console.log(
  h('.foo#some-id', [
    h('span', 'some text'),
    h('input', {type: 'text', value: 'foo'}),
    h('a.alpha', {class: 'bravo charlie', download: 'download'}, [
      'delta',
      'echo'
    ])
  ])
)

// Children as arguments:
console.log(
  h(
    'form',
    {method: 'POST'},
    h('input', {type: 'text', name: 'foo'}),
    h('input', {type: 'text', name: 'bar'}),
    h('input', {type: 'submit', value: 'send'})
  )
)

// SVG:
console.log(
  s('svg', {xmlns: 'http://www.w3.org/2000/svg', viewbox: '0 0 500 500'}, [
    s('title', 'SVG `<circle>` element'),
    s('circle', {cx: 120, cy: 120, r: 100})
  ])
)
```

Yields:

```js
{
  type: 'element',
  tagName: 'div',
  properties: {className: ['foo'], id: 'some-id'},
  children: [
    {
      type: 'element',
      tagName: 'span',
      properties: {},
      children: [{type: 'text', value: 'some text'}]
    },
    {
      type: 'element',
      tagName: 'input',
      properties: {type: 'text', value: 'foo'},
      children: []
    },
    {
      type: 'element',
      tagName: 'a',
      properties: {className: ['alpha', 'bravo', 'charlie'], download: true},
      children: [{type: 'text', value: 'delta'}, {type: 'text', value: 'echo'}]
    }
  ]
}
{
  type: 'element',
  tagName: 'form',
  properties: {method: 'POST'},
  children: [
    {
      type: 'element',
      tagName: 'input',
      properties: {type: 'text', name: 'foo'},
      children: []
    },
    {
      type: 'element',
      tagName: 'input',
      properties: {type: 'text', name: 'bar'},
      children: []
    },
    {
      type: 'element',
      tagName: 'input',
      properties: {type: 'submit', value: 'send'},
      children: []
    }
  ]
}
{
  type: 'element',
  tagName: 'svg',
  properties: {xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 500 500'},
  children: [
    {
      type: 'element',
      tagName: 'title',
      properties: {},
      children: [{type: 'text', value: 'SVG `<circle>` element'}]
    },
    {
      type: 'element',
      tagName: 'circle',
      properties: {cx: 120, cy: 120, r: 100},
      children: []
    }
  ]
}
```

## API

### `h(selector?[, properties][, ...children])`

### `s(selector?[, properties][, ...children])`

DSL to create virtual [**hast**][hast] [*trees*][tree] for HTML or SVG.

##### Parameters

###### `selector`

Simple CSS selector (`string`, optional).
Can contain a tag name (`foo`), IDs (`#bar`), and classes (`.baz`).
If there is no tag name in the selector, `h` defaults to a `div` element,
and `s` to a `g` element.
`selector` is parsed by [`hast-util-parse-selector`][parse-selector].

###### `properties`

Map of properties (`Object.<*>`, optional).

###### `children`

(Lists of) child nodes (`string`, `Node`, `Array.<string|Node>`, optional).
When strings are encountered, they are mapped to [`text`][text] nodes.

##### Returns

[`Element`][element].

## Security

Use of `hastscript` can open you up to a [cross-site scripting (XSS)][xss]
attack as values are injected into the syntax tree.
The following example shows how a script is injected that runs when loaded in a
browser.

```js
var tree = {type: 'root', children: []}

tree.children.push(h('script', 'alert(1)'))
```

Yields:

```html
<script>alert(1)</script>
```

The following example shows how an image is injected that fails loading and
therefore runs code in a browser.

```js
var tree = {type: 'root', children: []}

// Somehow someone injected these properties instead of an expected `src` and
// `alt`:
var otherProps = {src: 'x', onError: 'alert(2)'}

tree.children.push(h('img', {src: 'default.png', ...otherProps}))
```

Yields:

```html
<img src="x" onerror="alert(2)">
```

The following example shows how code can run in a browser because someone stored
an object in a database instead of the expected string.

```js
var tree = {type: 'root', children: []}

// Somehow this isn’t the expected `'wooorm'`.
var username = {
  type: 'element',
  tagName: 'script',
  children: [{type: 'text', value: 'alert(3)'}]
}

tree.children.push(h('span.handle', username))
```

Yields:

```html
<span class="handle"><script>alert(3)</script></span>
```

Either do not use user input in `hastscript` or use
[`hast-util-santize`][sanitize].

## Related

*   [`unist-builder`](https://github.com/syntax-tree/unist-builder)
    — Create any unist tree
*   [`xastscript`](https://github.com/syntax-tree/xastscript)
    — Create a xast tree
*   [`hast-to-hyperscript`](https://github.com/syntax-tree/hast-to-hyperscript)
    — Convert a Node to React, Virtual DOM, Hyperscript, and more
*   [`hast-util-from-dom`](https://github.com/syntax-tree/hast-util-from-dom)
    — Transform a DOM tree to hast
*   [`hast-util-select`](https://github.com/syntax-tree/hast-util-select)
    — `querySelector`, `querySelectorAll`, and `matches`
*   [`hast-util-to-html`](https://github.com/syntax-tree/hast-util-to-html)
    — Stringify nodes to HTML
*   [`hast-util-to-dom`](https://github.com/syntax-tree/hast-util-to-dom)
    — Transform to a DOM tree

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

[build-badge]: https://img.shields.io/travis/syntax-tree/hastscript.svg

[build]: https://travis-ci.org/syntax-tree/hastscript

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hastscript.svg

[coverage]: https://codecov.io/github/syntax-tree/hastscript

[downloads-badge]: https://img.shields.io/npm/dm/hastscript.svg

[downloads]: https://www.npmjs.com/package/hastscript

[size-badge]: https://img.shields.io/bundlephobia/minzip/hastscript.svg

[size]: https://bundlephobia.com/result?p=hastscript

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[hyperscript]: https://github.com/dominictarr/hyperscript

[virtual-hyperscript]: https://github.com/Matt-Esch/virtual-dom/tree/HEAD/virtual-hyperscript

[react]: https://reactjs.org/docs/glossary.html#react-elements

[vue]: https://vuejs.org/v2/guide/render-function.html#createElement-Arguments

[unist]: https://github.com/syntax-tree/unist

[tree]: https://github.com/syntax-tree/unist#tree

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[text]: https://github.com/syntax-tree/hast#text

[u]: https://github.com/syntax-tree/unist-builder

[parse-selector]: https://github.com/syntax-tree/hast-util-parse-selector

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[sanitize]: https://github.com/syntax-tree/hast-util-sanitize
