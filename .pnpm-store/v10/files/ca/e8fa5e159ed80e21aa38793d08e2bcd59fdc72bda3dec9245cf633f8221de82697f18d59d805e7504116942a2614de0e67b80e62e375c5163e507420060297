# [postcss][postcss]-merge-rules

> Merge CSS rules with PostCSS.

## Install

With [npm](https://npmjs.org/package/postcss-merge-rules) do:

```
npm install postcss-merge-rules --save
```

## Examples

This module will attempt to merge *adjacent* CSS rules:

### By declarations

#### Input

```css
a {
    color: blue;
    font-weight: bold
}

p {
    color: blue;
    font-weight: bold
}
```

#### Output

```css
a,p {
    color: blue;
    font-weight: bold
}
```

### By selectors

#### Input

```css
a {
    color: blue
}

a {
    font-weight: bold
}
```

#### Output

```css
a {
    color: blue;
    font-weight: bold
}
```

### By partial declarations

#### Input

```css
a {
    font-weight: bold
}

p {
    color: blue;
    font-weight: bold
}
```

#### Output

```css
a,p {
    font-weight: bold
}

p {
    color: blue
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
