# remark-footnotes

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to add support for footnotes.

## Important!

This plugin is affected by the new parser in remark
([`micromark`](https://github.com/micromark/micromark),
see [`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
Use version 2 while you’re still on remark 12.
Use version 3 for remark 13+.

## Install

[npm][]:

```sh
npm install remark-footnotes
```

## Use

Say we have the following file, `example.md`:

```markdown
Here is a footnote reference,[^1]
another,[^longnote],
and optionally there are inline
notes.^[you can type them inline, which may be easier, since you don’t
have to pick an identifier and move down to type the note.]

[^1]: Here is the footnote.

[^longnote]: Here’s one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

        { some.code }

    The whole paragraph can be indented, or just the first
    line.  In this way, multi-paragraph footnotes work like
    multi-paragraph list items.

This paragraph won’t be part of the note, because it
isn’t indented.
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var format = require('rehype-format')
var html = require('rehype-stringify')
var footnotes = require('remark-footnotes')

unified()
  .use(markdown)
  .use(footnotes, {inlineNotes: true})
  .use(remark2rehype)
  .use(format)
  .use(html)
  .process(vfile.readSync('example.md'), function (err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```html
<p>
  Here is a footnote reference,<sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>
  another,<sup id="fnref-longnote"><a href="#fn-longnote" class="footnote-ref">longnote</a></sup>,
  and optionally there are inline
  notes.<sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>
</p>
<p>
  This paragraph won’t be part of the note, because it
  isn’t indented.
</p>
<div class="footnotes">
  <hr>
  <ol>
    <li id="fn-1">
      <p>Here is the footnote.<a href="#fnref-1" class="footnote-backref">↩</a></p>
    </li>
    <li id="fn-longnote">
      <p>Here’s one with multiple blocks.</p>
      <p>
        Subsequent paragraphs are indented to show that they
        belong to the previous footnote.
      </p>
      <pre><code>{ some.code }
</code></pre>
      <p>
        The whole paragraph can be indented, or just the first
        line. In this way, multi-paragraph footnotes work like
        multi-paragraph list items.<a href="#fnref-longnote" class="footnote-backref">↩</a>
      </p>
    </li>
    <li id="fn-2">
      <p>
        you can type them inline, which may be easier, since you don’t
        have to pick an identifier and move down to type the note.<a href="#fnref-2" class="footnote-backref">↩</a>
      </p>
    </li>
  </ol>
</div>
```

## API

### `remark().use(footnotes[, options])`

Plugin to add support for footnotes.

###### `options.inlineNotes`

Whether to support `^[inline notes]` (`boolean`, default: `false`).
Passed to [`micromark-extension-footnote`][mm-footnote].

###### Notes

*   Labels, such as `[^this]` (in a footnote reference) or `[^this]:` (in a
    footnote definition) work like link references
*   Footnote definitions work like lists
*   Image and link references cannot start with carets, so `![^this doesn’t
    work][]`

## Security

Use of `remark-footnotes` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for [cross-site
scripting (XSS)][xss] attacks.

## Related

*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)
    — GitHub Flavored Markdown
*   [`remark-frontmatter`](https://github.com/remarkjs/remark-frontmatter)
    — Frontmatter (YAML, TOML, and more)
*   [`remark-math`](https://github.com/remarkjs/remark-math)
    — Math
*   [`remark-github`](https://github.com/remarkjs/remark-github)
    — Auto-link references like in GitHub issues, PRs, and comments

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

[build-badge]: https://img.shields.io/travis/remarkjs/remark-footnotes/main.svg

[build]: https://travis-ci.org/remarkjs/remark-footnotes

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-footnotes.svg

[coverage]: https://codecov.io/github/remarkjs/remark-footnotes

[downloads-badge]: https://img.shields.io/npm/dm/remark-footnotes.svg

[downloads]: https://www.npmjs.com/package/remark-footnotes

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-footnotes.svg

[size]: https://bundlephobia.com/result?p=remark-footnotes

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

[mm-footnote]: https://github.com/micromark/micromark-extension-footnote#optionsinlinenotes
