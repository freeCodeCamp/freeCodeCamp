# PostCSS Flexbugs Fixes [![Build Status][ci-img]][ci]
[PostCSS] plugin This project tries to fix all of [flexbug's](https://github.com/philipwalton/flexbugs) issues.

## bug [4](https://github.com/philipwalton/flexbugs/blob/master/README.md#4-flex-shorthand-declarations-with-unitless-flex-basis-values-are-ignored)
### Input

```css
.foo { flex: 1; }
.bar { flex: 1 1; }
.foz { flex: 1 1 0; }
.baz { flex: 1 1 0px; }
```

### Output

```css
.foo { flex: 1 1; }
.bar { flex: 1 1; }
.foz { flex: 1 1; }
.baz { flex: 1 1; }
```

## bug [6](https://github.com/philipwalton/flexbugs/blob/master/README.md#6-the-default-flex-value-has-changed)
### Input

```css
.foo { flex: 1; }
```

### Output

```css
.foo { flex: 1 1 0%; }
```

> This only fixes css classes that have the `flex` property set. To fix elements that are contained inside a flexbox container, use this global rule:
```css
* {
    flex-shrink: 1;
}
```

## bug [8.1.a](https://github.com/philipwalton/flexbugs/blob/master/README.md#8-flex-basis-doesnt-support-calc)
### Input

```css
.foo { flex: 1 0 calc(1vw - 1px); }
```

### Output

```css
.foo {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: calc(1vw - 1px);
}
```

## Usage

```js
postcss([require('postcss-flexbugs-fixes')]);
```

You can also disable bugs individually, possible keys `bug4`, `bug6` and `bug8a`.
```js
var plugin = require('postcss-flexbugs-fixes');
postcss([plugin({ bug6: false })]);
```

See [PostCSS] docs for examples for your environment.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/luisrudge/postcss-flexbugs-fixes.svg
[ci]: https://travis-ci.org/luisrudge/postcss-flexbugs-fixes
