# remark-frontmatter

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to support frontmatter (YAML, TOML, and more).

## Important!

This plugin is affected by the new parser in remark
([`micromark`](https://github.com/micromark/micromark),
see [`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
Use version 2 while you’re still on remark 12.
Use version 3 for remark 13+.

## Install

[npm][]:

```sh
npm install remark-frontmatter
```

## Use

Say we have the following file, `example.md`:

```markdown
+++
title = "New Website"
+++

# Other markdown
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var unified = require('unified')
var parse = require('remark-parse')
var stringify = require('remark-stringify')
var frontmatter = require('remark-frontmatter')

unified()
  .use(parse)
  .use(stringify)
  .use(frontmatter, ['yaml', 'toml'])
  .use(logger)
  .process(vfile.readSync('example.md'), function (err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })

function logger() {
  return console.dir
}
```

Now, running `node example` yields:

```js
{
  type: 'root',
  children: [
    {type: 'toml', value: 'title = "New Website"', position: [Object]},
    {type: 'heading', depth: 1, children: [Array], position: [Object]}
  ],
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 6, column: 1, offset: 48}
  }
}
```

```markdown
example.md: no issues found
+++
title = "New Website"
+++

# Other markdown
```

## API

### `remark().use(frontmatter[, options])`

Configures remark so that it can parse and serialize frontmatter (YAML, TOML,
and more).

##### `options`

See [`micromark-extension-frontmatter`][options] for a description of `options`.

## Security

Use of `remark-frontmatter` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Related

*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
    — GitHub Flavored Markdown
*   [`remark-footnotes`](https://github.com/remarkjs/remark-footnotes)
    — Footnotes
*   [`remark-math`](https://github.com/remarkjs/remark-math)
    — Math
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — Auto-link references like in GitHub issues, PRs, and comments
*   [`remark-yaml-config`](https://github.com/remarkjs/remark-yaml-config)
    — Configure remark from YAML configuration

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

[build-badge]: https://img.shields.io/travis/remarkjs/remark-frontmatter/main.svg

[build]: https://travis-ci.org/remarkjs/remark-frontmatter

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-frontmatter.svg

[coverage]: https://codecov.io/github/remarkjs/remark-frontmatter

[downloads-badge]: https://img.shields.io/npm/dm/remark-frontmatter.svg

[downloads]: https://www.npmjs.com/package/remark-frontmatter

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-frontmatter.svg

[size]: https://bundlephobia.com/result?p=remark-frontmatter

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

[options]: https://github.com/micromark/micromark-extension-frontmatter#options
