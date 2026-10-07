[![Build Status][ci-img]][ci] [![codecov][codecov-img]][codecov] [![npm][npm-img]][npm]

# CSS Modules: Local by Default

Transformation examples:

<!-- prettier-ignore-start -->
```css
.foo { ... } /* => */ :local(.foo) { ... }

.foo .bar { ... } /* => */ :local(.foo) :local(.bar) { ... }

/* Shorthand global selector */

:global .foo .bar { ... } /* => */ .foo .bar { ... }

.foo :global .bar { ... } /* => */ :local(.foo) .bar { ... }

/* Targeted global selector */

:global(.foo) .bar { ... } /* => */ .foo :local(.bar) { ... }

.foo:global(.bar) { ... } /* => */ :local(.foo).bar { ... }

.foo :global(.bar) .baz { ... } /* => */ :local(.foo) .bar :local(.baz) { ... }

.foo:global(.bar) .baz { ... } /* => */ :local(.foo).bar :local(.baz) { ... }
```
<!-- prettier-ignore-end -->

## Building

```bash
$ npm install
$ npm test
```

- Build: [![Build Status][ci-img]][ci]
- Lines: [![coveralls][coveralls-img]][coveralls]
- Statements: [![codecov][codecov-img]][codecov]

## Development

```bash
$ yarn test:watch
```

## License

MIT

## With thanks

- [Tobias Koppers](https://github.com/sokra)
- [Glen Maddern](https://github.com/geelen)

---

Mark Dalgleish, 2015.

[ci-img]: https://img.shields.io/travis/css-modules/postcss-modules-local-by-default/master.svg?style=flat-square
[ci]: https://travis-ci.org/css-modules/postcss-modules-local-by-default
[npm-img]: https://img.shields.io/npm/v/postcss-modules-local-by-default.svg?style=flat-square
[npm]: https://www.npmjs.com/package/postcss-modules-local-by-default
[coveralls-img]: https://img.shields.io/coveralls/css-modules/postcss-modules-local-by-default/master.svg?style=flat-square
[coveralls]: https://coveralls.io/r/css-modules/postcss-modules-local-by-default?branch=master
[codecov-img]: https://img.shields.io/codecov/c/github/css-modules/postcss-modules-local-by-default/master.svg?style=flat-square
[codecov]: https://codecov.io/github/css-modules/postcss-modules-local-by-default?branch=master
