# [postcss][postcss]-ordered-values

> Ensure values are ordered consistently in your CSS.


## Install

With [npm](https://npmjs.org/package/postcss-ordered-values) do:

```
npm install postcss-ordered-values --save
```


## Example

Some CSS properties accept their values in an arbitrary order; for this reason,
it is entirely possible that different developers will write their values in
different orders. This module normalizes the order, making it easier for other
modules to understand which declarations are duplicates.

### Input

```css
h1 {
    border: solid 1px red;
    border: red solid .5em;
    border: rgba(0, 30, 105, 0.8) solid 1px;
    border: 1px solid red;
}
```

### Output

```css
h1 {
    border: 1px solid red;
    border: .5em solid red;
    border: 1px solid rgba(0, 30, 105, 0.8);
    border: 1px solid red;
}
```


## Support List

For more examples, see the [tests](src/__tests__/index.js).

* `animation`, `-webkit-animation`
* `border(border-left|right|top|bottom)`
* `box-shadow`
* `outline`
* `flex-flow`
* `transition`, `-webkit-transition`


## Usage

See the [PostCSS documentation](https://github.com/postcss/postcss#usage) for
examples for your environment.


## Contributors

See [CONTRIBUTORS.md](https://github.com/cssnano/cssnano/blob/master/CONTRIBUTORS.md).


## License

MIT © [Ben Briggs](http://beneb.info)

[postcss]: https://github.com/postcss/postcss
