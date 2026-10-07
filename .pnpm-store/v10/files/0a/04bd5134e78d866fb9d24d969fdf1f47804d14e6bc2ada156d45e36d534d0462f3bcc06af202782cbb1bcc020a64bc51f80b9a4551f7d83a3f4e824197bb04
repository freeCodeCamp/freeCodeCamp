# [postcss][postcss]-normalize-url

> [Normalize URLs](https://github.com/sindresorhus/normalize-url) with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-normalize-url) do:

```
npm install postcss-normalize-url --save
```

## Example

### Input

```css
h1 {
    background: url("http://site.com:80/image.jpg")
}
```

### Output

```css
h1 {
    background: url(http://site.com/image.jpg)
}
```

Note that this module will also try to normalize relative URLs, and is capable
of stripping unnecessary quotes. For more examples, see the [tests](test.js).

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## API

### normalize([options])

Please see the [normalize-url documentation][docs]. By default,
`normalizeProtocol`, `stripHash` & `stripWWW` are set to `false`.

## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).

## License

MIT © [Ben Briggs](http://beneb.info)

[docs]: https://github.com/sindresorhus/normalize-url#options
[postcss]: https://github.com/postcss/postcss
