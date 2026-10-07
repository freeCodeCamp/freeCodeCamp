# [postcss][postcss]-normalize-string

> Normalize strings with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-normalize-string) do:

```
npm install postcss-normalize-string --save
```

## Example

### Input

```css
p:after{ content: '\\'string\\' is intact' }
```

### Output

```css
p:after{ content:"'string' is intact" }
```

## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.

## API

### normalize([options])

#### options

##### preferredQuote

Type: `string`
Default: `double`

Sets what type of quote to prefer. Possible values are `single` and `double`.

```js
var css = 'p:after{content:""}';
console.log(postcss(normalize({preferredQuote: 'single'})).process(css).css);
//=> p:after{content:''}
```

## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).

## License

MIT © [Ben Briggs](http://beneb.info)

[postcss]: https://github.com/postcss/postcss
