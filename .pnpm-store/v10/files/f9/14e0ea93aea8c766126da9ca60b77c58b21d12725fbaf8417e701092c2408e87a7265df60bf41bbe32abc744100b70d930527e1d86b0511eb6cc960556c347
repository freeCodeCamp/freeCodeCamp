# postcss-resolve-nested-selector

[![test](https://github.com/csstools/postcss-resolve-nested-selector/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/csstools/postcss-resolve-nested-selector/actions/workflows/test.yml)

Given a (nested) selector in a PostCSS AST, return an array of resolved selectors.

Tested to work with the syntax of [postcss-nested](https://github.com/postcss/postcss-nested).
Should also work with SCSS and Less syntax. If you'd like to help out by
adding some automated tests for those, that'd be swell. In fact, if you'd
like to add any automated tests, you are a winner!

If you want to resolve selectors in the same style as [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting) you should instead use [selector-resolve-nested](https://github.com/csstools/postcss-plugins/tree/main/packages/selector-resolve-nested)

## API

`resolveNestedSelector(selector, node)`

Returns an array of selectors resolved from `selector`.

For example, given this JS:

```js
var resolvedNestedSelector = require('postcss-resolve-nested-selector');
postcssRoot.eachRule(function(rule) {
	rule.selectors.forEach(function(selector) {
		console.log(resolvedNestedSelector(selector, rule));
	});
});
```

And the following CSS:

```scss
.foo {
	.bar {
		color: pink;
	}
}
```

This should log:

```
['.foo']
['.foo .bar']
```

Or with this CSS:

```scss
.foo {
	.bar &,
	a {
		color: pink;
	}
}
```

This should log:

```
['.foo']
['.bar .foo']
['.foo a']
```
