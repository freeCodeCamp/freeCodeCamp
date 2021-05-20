---
id: 5d822fd413a79914d39e98ce
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

Also add a `box-sizing` of `border-box` to the everything. This will make it so the border you added doesn't add any size to your elements.

# --hints--

You should use the `box-sizing` property to style all elements.

```js
```

You should make use of the existing `*` selector.

```js
// Two selectors create two CSSStyleRule objects
```

All elements should have a `box-sizing` of `border-box`.

```js
const astStyles = __helpers.getStyles(document, '*');
assert.equal(astStyles.boxSizing, 'border-box');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
  </body>
</html>
```

```css
--fcc-editable-region--
* {
  border: 1px solid black;
}

--fcc-editable-region--
```

