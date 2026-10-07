# github-slugger

[![npm][npm-image]][npm-url]
[![Build][build-badge]][build]

[npm-image]: https://img.shields.io/npm/v/github-slugger.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/github-slugger
[build-badge]: https://github.com/Flet/github-slugger/workflows/main/badge.svg
[build]: https://github.com/Flet/github-slugger/actions

Generate a slug just like GitHub does for markdown headings. It also ensures slugs are unique in the same way GitHub does it. The overall goal of this package is to emulate the way GitHub handles generating markdown heading anchors as close as possible.

This project is not a Markdown or HTML parser: passing `alpha *bravo* charlie`
or `alpha <em>bravo</em> charlie` doesn’t work.
Instead pass the plain text value of the heading: `alpha bravo charlie`.

## Install

```
npm install github-slugger
```

## Usage

```js
var GithubSlugger = require('github-slugger')
var slugger = new GithubSlugger()

slugger.slug('foo')
// returns 'foo'

slugger.slug('foo')
// returns 'foo-1'

slugger.slug('bar')
// returns 'bar'

slugger.slug('foo')
// returns 'foo-2'

slugger.slug('Привет non-latin 你好')
// returns 'привет-non-latin-你好'

slugger.slug('😄 emoji')
// returns '-emoji'

slugger.reset()

slugger.slug('foo')
// returns 'foo'
```

Check `test/fixtures.json` for more examples.

If you need, you can also use the underlying implementation which does not keep
track of the previously slugged strings (not recommended):

```js
var slug = require('github-slugger').slug;

slug('foo bar baz')
// returns 'foo-bar-baz'

slug('foo bar baz')
// returns the same slug 'foo-bar-baz' because it does not keep track
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE)
