---
id: 61fd5a93fd62bb35968adeab
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

Begin your project by giving your `head` element a `link` element for your stylesheet.

# --hints--

Your code should have a `link` element.

```js
assert.match(code, /<link/);
```

Your `link` element should be within your `head` element.

```js
assert.match(code, /<head>[\w\W\s]*<link[\w\W\s]*\/?>[\w\W\s]*<\/head>/i);
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
assert.match(code, /<link[\s\S]*?rel=('|"|`)stylesheet\1/);
```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
assert.match(code, /<link[\s\S]*?href=('|"|`)(\.\/)?styles\.css\1/);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Balance Sheet</title>
    
  </head>
--fcc-editable-region--
  <body>
  </body>
</html>
```

```css

```
