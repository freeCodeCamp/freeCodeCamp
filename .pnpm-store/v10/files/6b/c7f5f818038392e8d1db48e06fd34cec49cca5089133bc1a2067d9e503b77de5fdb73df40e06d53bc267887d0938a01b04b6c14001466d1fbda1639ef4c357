# [postcss][postcss]-discard-duplicates

> Discard duplicate rules in your CSS files with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-discard-duplicates) do:

```
npm install postcss-discard-duplicates --save
```

## Example

This module will remove all duplicate rules from your stylesheets. It works on
at rules, normal rules and declarations. Note that this module does not have any
responsibility for normalising declarations, selectors or whitespace, so that it
considers these two rules to be different:

```css
h1, h2 {
    color: blue;
}

h2, h1 {
    color: blue;
}
```

It has to assume that your rules have already been transformed by another
processor, otherwise it would be responsible for too many things.

### Input

```css
h1 {
    margin: 0 auto;
    margin: 0 auto
}

h1 {
    margin: 0 auto
}
```

### Output

```css
h1 {
    margin: 0 auto
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
