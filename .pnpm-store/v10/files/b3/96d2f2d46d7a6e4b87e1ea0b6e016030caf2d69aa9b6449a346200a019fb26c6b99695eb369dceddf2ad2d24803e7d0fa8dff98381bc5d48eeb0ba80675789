# markdown-it <!-- omit in toc -->

[![CI](https://github.com/markdown-it/markdown-it/actions/workflows/ci.yml/badge.svg)](https://github.com/markdown-it/markdown-it/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/markdown-it.svg?style=flat)](https://www.npmjs.org/package/markdown-it)
[![Coverage Status](https://coveralls.io/repos/markdown-it/markdown-it/badge.svg?branch=master&service=github)](https://coveralls.io/github/markdown-it/markdown-it?branch=master)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/markdown-it/markdown-it)

> Markdown parser done right. Fast and easy to extend.

__[Live demo](https://markdown-it.github.io)__

- Follows the __[CommonMark spec](http://spec.commonmark.org/)__ + adds syntax extensions & sugar (URL autolinking, typographer).
- Configurable syntax! You can add new rules and even replace existing ones.
- High speed.
- [Safe](https://github.com/markdown-it/markdown-it/tree/master/docs/security.md) by default.
- Community-written __[plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin)__ and [other packages](https://www.npmjs.org/browse/keyword/markdown-it) on npm.

__Table of content__

- [Install](#install)
- [Usage examples](#usage-examples)
  - [Simple](#simple)
  - [Init with presets and options](#init-with-presets-and-options)
  - [Plugins load](#plugins-load)
  - [Syntax highlighting](#syntax-highlighting)
  - [Linkify](#linkify)
- [API](#api)
- [Syntax extensions](#syntax-extensions)
  - [Manage rules](#manage-rules)
- [Benchmark](#benchmark)
- [markdown-it for enterprise](#markdown-it-for-enterprise)
- [Authors](#authors)
- [References / Thanks](#references--thanks)

## Install

**node.js**:

```bash
npm install markdown-it
```

**browser (CDN):**

- [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it "jsDelivr CDN")
- [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it "cdnjs.com")


## Usage examples

See also:

- __[API documentation](https://markdown-it.github.io/markdown-it/)__ - for more
  info and examples.
- [Development info](https://github.com/markdown-it/markdown-it/tree/master/docs) -
  for plugins writers.


### Simple

```js
// node.js
// can use `require('markdown-it')` for CJS
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.render('# markdown-it rulezz!');

// browser with UMD build, added to "window" on script load
// Note, there is no dash in "markdownit".
const md = window.markdownit();
const result = md.render('# markdown-it rulezz!');
```

Single line rendering, without paragraph wrap:

```js
import markdownit from 'markdown-it'
const md = markdownit()
const result = md.renderInline('__markdown-it__ rulezz!');
```


### Init with presets and options

(*) presets define combinations of active rules and options. Can be
`"commonmark"`, `"zero"` or `"default"` (if skipped). See
[API docs](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) for more details.

```js
import markdownit from 'markdown-it'

// commonmark mode
const md = markdownit('commonmark')

// default mode
const md = markdownit()

// enable everything
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
})

// full options list (defaults)
const md = markdownit({
  // Enable HTML tags in source
  html:         false,

  // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  xhtmlOut:     false,

  // Convert '\n' in paragraphs into <br>
  breaks:       false,

  // CSS language prefix for fenced blocks. Can be
  // useful for external highlighters.
  langPrefix:   'language-',

  // Autoconvert URL-like text to links
  linkify:      false,

  // Enable some language-neutral replacement + quotes beautification
  // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
});
```

### Plugins load

```js
import markdownit from 'markdown-it'

const md = markdownit
  .use(plugin1)
  .use(plugin2, opts, ...)
  .use(plugin3);
```


### Syntax highlighting

Apply syntax highlighting to fenced code blocks with the `highlight` option:

```js
import markdownit from 'markdown-it'
import hljs from 'highlight.js' // https://highlightjs.org

// Actual default values
const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});
```

Or with full wrapper override (if you need assign class to `<pre>` or `<code>`):

```js
import markdownit from 'markdown-it'
import hljs from 'highlight.js' // https://highlightjs.org

// Actual default values
const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre><code class="hljs">' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
```

### Linkify

`linkify: true` uses [linkify-it](https://github.com/markdown-it/linkify-it). To
configure linkify-it, access the linkify instance through `md.linkify`:

```js
md.linkify.set({ fuzzyEmail: false });  // disables converting email to link
```


## API

__[API documentation](https://markdown-it.github.io/markdown-it/)__

If you are going to write plugins, please take a look at
[Development info](https://github.com/markdown-it/markdown-it/tree/master/docs).


## Syntax extensions

Embedded (enabled by default):

- [Tables](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [Strikethrough](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

Via plugins:

- [subscript](https://github.com/markdown-it/markdown-it-sub)
- [superscript](https://github.com/markdown-it/markdown-it-sup)
- [footnote](https://github.com/markdown-it/markdown-it-footnote)
- [definition list](https://github.com/markdown-it/markdown-it-deflist)
- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [custom container](https://github.com/markdown-it/markdown-it-container)
- [insert](https://github.com/markdown-it/markdown-it-ins)
- [mark](https://github.com/markdown-it/markdown-it-mark)
- ... and [others](https://www.npmjs.org/browse/keyword/markdown-it-plugin)


### Manage rules

By default all rules are enabled, but can be restricted by options. On plugin
load all its rules are enabled automatically.

```js
import markdownit from 'markdown-it'

// Activate/deactivate rules, with currying
const md = markdownit()
  .disable(['link', 'image'])
  .enable(['link'])
  .enable('image');

// Enable everything
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});
```

You can find all rules in sources:

- [`parser_core.mjs`](lib/parser_core.mjs)
- [`parser_block.mjs`](lib/parser_block.mjs)
- [`parser_inline.mjs`](lib/parser_inline.mjs)


## Benchmark

Here is the result of readme parse at MB Pro Retina 2013 (2.4 GHz):

```bash
npm run benchmark-deps
benchmark/benchmark.mjs readme

Selected samples: (1 of 28)
 > README

Sample: README.md (7774 bytes)
 > commonmark-reference x 1,222 ops/sec ±0.96% (97 runs sampled)
 > current x 743 ops/sec ±0.84% (97 runs sampled)
 > current-commonmark x 1,568 ops/sec ±0.84% (98 runs sampled)
 > marked x 1,587 ops/sec ±4.31% (93 runs sampled)
```

__Note.__ CommonMark version runs with [simplified link normalizers](https://github.com/markdown-it/markdown-it/blob/master/benchmark/implementations/current-commonmark/index.mjs)
for more "honest" compare. Difference is ≈1.5×.

As you can see, `markdown-it` doesn't pay with speed for its flexibility.
Slowdown of "full" version caused by additional features not available in
other implementations.


## markdown-it for enterprise

Available as part of the Tidelift Subscription.

The maintainers of `markdown-it` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-markdown-it?utm_source=npm-markdown-it&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)


## Authors

- Alex Kocharin [github/rlidwka](https://github.com/rlidwka)
- Vitaly Puzrin [github/puzrin](https://github.com/puzrin)

_markdown-it_ is the result of the decision of the authors who contributed to
99% of the _Remarkable_ code to move to a project with the same authorship but
new leadership (Vitaly and Alex). It's not a fork.

## References / Thanks

Big thanks to [John MacFarlane](https://github.com/jgm) for his work on the
CommonMark spec and reference implementations. His work saved us a lot of time
during this project's development.

**Related Links:**

- https://github.com/jgm/CommonMark - reference CommonMark implementations in C & JS,
  also contains latest spec & online demo.
- http://talk.commonmark.org - CommonMark forum, good place to collaborate
  developers' efforts.

**Ports**

- [motion-markdown-it](https://github.com/digitalmoksha/motion-markdown-it) - Ruby/RubyMotion
- [markdown-it-py](https://github.com/ExecutableBookProject/markdown-it-py)- Python
