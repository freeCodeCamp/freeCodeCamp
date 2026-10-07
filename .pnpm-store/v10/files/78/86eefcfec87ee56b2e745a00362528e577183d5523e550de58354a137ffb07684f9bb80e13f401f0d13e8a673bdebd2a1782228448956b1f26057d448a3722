# mdast-util-gfm-task-list-item

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Extension for [`mdast-util-from-markdown`][from-markdown] and/or
[`mdast-util-to-markdown`][to-markdown] to support GitHub flavored markdown
task list items in **[mdast][]**.
When parsing (`from-markdown`), must be combined with
[`micromark-extension-gfm-task-list-item`][extension].

You probably shouldn’t use this package directly, but instead use
[`remark-gfm`][remark-gfm] with **[remark][]**.

## Install

[npm][]:

```sh
npm install mdast-util-gfm-task-list-item
```

## Use

Say we have the following file, `example.md`:

```markdown
* [ ] To do
* [x] Done

1. Mixed…
2. [x] …messages
```

And our script, `example.js`, looks as follows:

```js
var fs = require('fs')
var fromMarkdown = require('mdast-util-from-markdown')
var toMarkdown = require('mdast-util-to-markdown')
var syntax = require('micromark-extension-gfm-task-list-item')
var taskListItem = require('mdast-util-gfm-task-list-item')

var doc = fs.readFileSync('example.md')

var tree = fromMarkdown(doc, {
  extensions: [syntax],
  mdastExtensions: [taskListItem.fromMarkdown]
})

console.log(tree)

var out = toMarkdown(tree, {extensions: [taskListItem.toMarkdown]})

console.log(out)
```

Now, running `node example` yields (positional info removed for the sake of
brevity):

```js
{
 type: 'root',
 children: [
   {
     type: 'list',
     ordered: false,
     start: null,
     spread: false,
     children: [
       {
         type: 'listItem',
         spread: false,
         checked: false,
         children: [
           {type: 'paragraph', children: [{type: 'text', value: 'To do'}]}
         ]
       },
       {
         type: 'listItem',
         spread: false,
         checked: true,
         children: [
           {type: 'paragraph', children: [{type: 'text', value: 'Done'}]}
         ]
       }
     ]
   },
   {
     type: 'list',
     ordered: true,
     start: 1,
     spread: false,
     children: [
       {
         type: 'listItem',
         spread: false,
         checked: null,
         children: [
           {type: 'paragraph', children: [{type: 'text', value: 'Mixed…'}]}
         ]
       },
       {
         type: 'listItem',
         spread: false,
         checked: true,
         children: [
           {type: 'paragraph', children: [{type: 'text', value: '…messages'}]}
         ]
       }
     ]
   }
 ]
}
```

```markdown
*   [ ] To do
*   [x] Done

1.  Mixed…
2.  [x] …messages
```

## API

### `taskListItem.fromMarkdown`

### `taskListItem.toMarkdown`

> Note: the separate extensions are also available at
> `mdast-util-gfm-task-list-item/from-markdown` and
> `mdast-util-gfm-task-list-item/to-markdown`.

Support task list items.
The exports are extensions, respectively
for [`mdast-util-from-markdown`][from-markdown] and
[`mdast-util-to-markdown`][to-markdown].

## Related

*   [`remarkjs/remark`][remark]
    — markdown processor powered by plugins
*   [`remarkjs/remark-gfm`][remark-gfm]
    — remark plugin to support GFM
*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-gfm-task-list-item`][extension]
    — micromark extension to parse GFM task list items
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

[build-badge]: https://github.com/syntax-tree/mdast-util-gfm-task-list-item/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-gfm-task-list-item/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-gfm-task-list-item.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-gfm-task-list-item

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-gfm-task-list-item.svg

[downloads]: https://www.npmjs.com/package/mdast-util-gfm-task-list-item

[size-badge]: https://img.shields.io/bundlephobia/minzip/mdast-util-gfm-task-list-item.svg

[size]: https://bundlephobia.com/result?p=mdast-util-gfm-task-list-item

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

[remark-gfm]: https://github.com/remarkjs/remark-gfm

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[to-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[micromark]: https://github.com/micromark/micromark

[extension]: https://github.com/micromark/micromark-extension-gfm-task-list-item
