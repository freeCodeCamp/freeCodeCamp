# hast-util-from-parse5

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to transform [Parse5’s AST][ast] to a hast
[*tree*][tree].

## Install

[npm][]:

```sh
npm install hast-util-from-parse5
```

## Use

Say we have the following file, `example.html`:

```html
<!doctype html><title>Hello!</title><h1 id="world">World!<!--after-->
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var parse5 = require('parse5')
var inspect = require('unist-util-inspect')
var fromParse5 = require('hast-util-from-parse5')

var file = vfile.readSync('example.html')
var p5ast = parse5.parse(String(file), {sourceCodeLocationInfo: true})
var hast = fromParse5(p5ast, file)

console.log(inspect(hast))
```

Now, running `node example` yields:

```text
root[2] (1:1-2:1, 0-70)
│ data: {"quirksMode":false}
├─0 doctype<html> (1:1-1:16, 0-15)
│     public: null
│     system: null
└─1 element<html>[2]
    │ properties: {}
    ├─0 element<head>[1]
    │   │ properties: {}
    │   └─0 element<title>[1] (1:16-1:37, 15-36)
    │       │ properties: {}
    │       └─0 text "Hello!" (1:23-1:29, 22-28)
    └─1 element<body>[1]
        │ properties: {}
        └─0 element<h1>[3] (1:37-2:1, 36-70)
            │ properties: {"id":"world"}
            ├─0 text "World!" (1:52-1:58, 51-57)
            ├─1 comment "after" (1:58-1:70, 57-69)
            └─2 text "\n" (1:70-2:1, 69-70)
```

## API

### `fromParse5(ast[, file|options])`

Transform [Parse5’s AST][ast] to a [**hast**][hast] [*tree*][tree].

##### `options`

If `options` is a [`VFile`][vfile], it’s treated as `{file: options}`.

###### `options.space`

Whether the [*root*][root] of the [*tree*][tree] is in the `'html'` or `'svg'`
space (enum, `'svg'` or `'html'`, default: `'html'`).

If an element in with the SVG namespace is found in `ast`, `fromParse5`
automatically switches to the SVG space when entering the element, and switches
back when leaving.

###### `options.file`

[`VFile`][vfile], used to add [positional information][positional-information]
to [*nodes*][node].
If given, the [*file*][file] should have the original HTML source as its
contents.

###### `options.verbose`

Whether to add extra positional information about starting tags, closing tags,
and attributes to elements (`boolean`, default: `false`).
Note: not used without `file`.

For the following HTML:

```html
<img src="http://example.com/fav.ico" alt="foo" title="bar">
```

The verbose info would looks as follows:

```js
{
  type: 'element',
  tagName: 'img',
  properties: {src: 'http://example.com/fav.ico', alt: 'foo', title: 'bar'},
  children: [],
  data: {
    position: {
      opening: {
        start: {line: 1, column: 1, offset: 0},
        end: {line: 1, column: 61, offset: 60}
      },
      closing: null,
      properties: {
        src: {
          start: {line: 1, column: 6, offset: 5},
          end: {line: 1, column: 38, offset: 37}
        },
        alt: {
          start: {line: 1, column: 39, offset: 38},
          end: {line: 1, column: 48, offset: 47}
        },
        title: {
          start: {line: 1, column: 49, offset: 48},
          end: {line: 1, column: 60, offset: 59}
        }
      }
    }
  },
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 61, offset: 60}
  }
}
```

## Security

Use of `hast-util-from-parse5` can open you up to a
[cross-site scripting (XSS)][xss] attack if Parse5’s AST is unsafe.

## Related

*   [`hast-util-to-parse5`](https://github.com/syntax-tree/hast-util-to-parse5)
    — transform hast to Parse5’s AST
*   [`hast-util-to-nlcst`](https://github.com/syntax-tree/hast-util-to-nlcst)
    — transform hast to nlcst
*   [`hast-util-to-mdast`](https://github.com/syntax-tree/hast-util-to-mdast)
    — transform hast to mdast
*   [`hast-util-to-xast`](https://github.com/syntax-tree/hast-util-to-xast)
    — transform hast to xast
*   [`mdast-util-to-hast`](https://github.com/syntax-tree/mdast-util-to-hast)
    — transform mdast to hast
*   [`mdast-util-to-nlcst`](https://github.com/syntax-tree/mdast-util-to-nlcst)
    — transform mdast to nlcst

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

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-from-parse5.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-from-parse5

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-from-parse5.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-from-parse5

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-from-parse5.svg

[downloads]: https://www.npmjs.com/package/hast-util-from-parse5

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-from-parse5.svg

[size]: https://bundlephobia.com/result?p=hast-util-from-parse5

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

[ast]: https://github.com/inikulin/parse5/blob/HEAD/packages/parse5/docs/tree-adapter/default/interface-list.md

[vfile]: https://github.com/vfile/vfile

[tree]: https://github.com/syntax-tree/unist#tree

[root]: https://github.com/syntax-tree/unist#root

[positional-information]: https://github.com/syntax-tree/unist#positional-information

[file]: https://github.com/syntax-tree/unist#file

[hast]: https://github.com/syntax-tree/hast

[node]: https://github.com/syntax-tree/hast#nodes

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
