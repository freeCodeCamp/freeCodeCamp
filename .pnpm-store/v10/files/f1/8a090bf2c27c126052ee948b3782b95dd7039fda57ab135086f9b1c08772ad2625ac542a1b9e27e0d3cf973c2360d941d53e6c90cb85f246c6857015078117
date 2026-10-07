# [postcss][postcss]-minify-gradients

> Minify gradient parameters with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-minify-gradients) do:

```
npm install postcss-minify-gradients
```


## Example

Where possible, this module will minify gradient parameters. It can convert
linear gradient directional syntax to angles, remove the unnecessary `0%` and
`100%` start and end values, and minimise color stops that use the same length
values (the browser will adjust the value automatically).

### Input

```css
h1 {
    background: linear-gradient(to bottom, #ffe500 0%, #ffe500 50%, #121 50%, #121 100%)
}
```

### Output

```css
h1 {
    background: linear-gradient(180deg, #ffe500, #ffe500 50%, #121 0, #121)
}
```


## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.


## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).


## License

MIT © [Ben Briggs](http://beneb.info)

[postcss]: https://github.com/postcss/postcss
