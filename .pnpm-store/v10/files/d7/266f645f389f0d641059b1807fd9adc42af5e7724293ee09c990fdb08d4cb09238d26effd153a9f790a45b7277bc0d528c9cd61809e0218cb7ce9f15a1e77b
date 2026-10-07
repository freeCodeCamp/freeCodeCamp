# postcss-minify-font-values [![Build Status][ci-img]][ci]

> Minify font declarations with PostCSS.

This module will try to minimise the `font-family`, `font-weight` and `font` shorthand
properties; it can unquote font families where necessary, detect & remove
duplicates, and cut short a declaration after it finds a keyword. For more
examples, see the [tests](test).

```css
h1 {
  font:bold 2.2rem/.9 "Open Sans Condensed", sans-serif;
}

p {
  font-family: "Helvetica Neue", Arial, sans-serif, Helvetica;
  font-weight: normal;
}
```

```css
h1 {
  font:700 2.2rem/.9 Open Sans Condensed,sans-serif
}

p {
  font-family: Helvetica Neue,Arial,sans-serif;
  font-weight: 400;
}
```

## API

### minifyFontValues([options])

#### options

##### removeAfterKeyword

Type: `boolean`
Default: `false`

Pass `true` to remove font families after the module encounters a font keyword,
for example `sans-serif`.

##### removeDuplicates

Type: `boolean`
Default: `true`

Pass `false` to disable the module from removing duplicated font families.

##### removeQuotes

Type: `boolean`
Default: `true`

Pass `false` to disable the module from removing quotes from font families.
Note that oftentimes, this is a *safe optimisation* & is done safely. For more
details, see [Mathias Bynens' article][mathias].

## Usage

```js
postcss([ require('postcss-minify-font-values') ])
```

See [PostCSS] docs for examples for your environment.

## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).

# License

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)

[mathias]: https://mathiasbynens.be/notes/unquoted-font-family
[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cssnano/postcss-minify-font-values.svg
[ci]:      https://travis-ci.org/cssnano/postcss-minify-font-values
