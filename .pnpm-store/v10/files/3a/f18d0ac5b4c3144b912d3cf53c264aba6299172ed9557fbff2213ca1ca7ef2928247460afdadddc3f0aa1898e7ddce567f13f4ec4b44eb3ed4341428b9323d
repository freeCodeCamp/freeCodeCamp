# remark-directive

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to support the [generic directives proposal][prop]
(`:cite[smith04]`, `::youtube[Video of a cat in a box]{v=01ab2cd3efg}`, and
such).

## Important!

This plugin is made for the new parser in remark
([`micromark`](https://github.com/micromark/micromark),
see [`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
Use this plugin for remark 13+.

## Install

[npm][]:

```sh
npm install remark-directive
```

## Use

Say we have the following file, `example.md`:

```markdown
:::main{#readme}

Lorem:br
ipsum.

::hr{.red}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.

:::
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var parse = require('remark-parse')
var directive = require('remark-directive')
var remark2rehype = require('remark-rehype')
var format = require('rehype-format')
var stringify = require('rehype-stringify')
var visit = require('unist-util-visit')
var h = require('hastscript')

unified()
  .use(parse)
  .use(directive)
  .use(htmlDirectives)
  .use(remark2rehype)
  .use(format)
  .use(stringify)
  .process(vfile.readSync('example.md'), function (err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })

// This plugin is just an example! You can handle directives however you please!
function htmlDirectives() {
  return transform

  function transform(tree) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective)
  }

  function ondirective(node) {
    var data = node.data || (node.data = {})
    var hast = h(node.name, node.attributes)

    data.hName = hast.tagName
    data.hProperties = hast.properties
  }
}
```

Now, running `node example` yields:

```txt
example.md: no issues found
```

```html
example.md: no issues found
<main id="readme">
  <p>Lorem<br>ipsum.</p>
  <hr class="red">
  <p>A <i>lovely</i> language know as <abbr title="HyperText Markup Language">HTML</abbr>.</p>
</main>
```

## API

### `remark().use(directive)`

Configures remark so that it can parse and serialize directives.
Doesn’t handle the directives: [create your own plugin][create-plugin] to do
that.
See the [micromark extension for the syntax][syntax] and the
[mdast utility for the syntax tree][syntax-tree].

## Security

Use of `remark-directive` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for [cross-site
scripting (XSS)][xss] attacks.

## Related

*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
    — GFM
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — Autolink references like in GitHub issues, PRs, and comments
*   [`remark-footnotes`](https://github.com/remarkjs/remark-footnotes)
    — Footnotes
*   [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter)
    — Frontmatter (YAML, TOML, and more)
*   [`remark-math`](https://github.com/remarkjs/remark-math)
    — Math

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/remark-directive/main.svg

[build]: https://travis-ci.org/remarkjs/remark-directive

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-directive.svg

[coverage]: https://codecov.io/github/remarkjs/remark-directive

[downloads-badge]: https://img.shields.io/npm/dm/remark-directive.svg

[downloads]: https://www.npmjs.com/package/remark-directive

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-directive.svg

[size]: https://bundlephobia.com/result?p=remark-directive

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[remark]: https://github.com/remarkjs/remark

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast

[prop]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444

[create-plugin]: https://unifiedjs.com/learn/guide/create-a-plugin/

[syntax]: https://github.com/micromark/micromark-extension-directive#syntax

[syntax-tree]: https://github.com/syntax-tree/mdast-util-directive#syntax-tree
