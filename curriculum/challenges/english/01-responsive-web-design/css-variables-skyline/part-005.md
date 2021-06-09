---
id: 5d822fd413a79914d39e98cd
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

In CSS, you can target everything with an asterisk. Add a border to everything by using the `*` selector, and giving it a `border` of `1px solid black`. This is a trick I like to use to help visualize where elements are and their size. You will remove this later.

# --hints--

You should use the `*` selector.

```js
assert.exists(new __helpers.CSSHelp(document).getStyle('*'));
```

You should use the `border` property to style all the elements.

```js
assert(new __helpers.CSSHelp(document).isPropertyUsed('border'));
```

All elements should have a `1px solid black` border.

```js
const astStyles = new __helpers.CSSHelp(document).getStyle('*');
assert.equal(astStyles?.border, '1px solid black');
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

--fcc-editable-region--

```
