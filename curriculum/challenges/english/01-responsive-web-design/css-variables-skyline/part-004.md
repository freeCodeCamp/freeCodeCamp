---
id: 5d822fd413a79914d39e98cc
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

Add a `title` element to the `head`, and give your project a title of `freeCodeCamp Skyline Project`. Also, nest a self-closing `link` element in the `head` element. Give it a `rel` attribute value of `stylesheet`, a `type` attribute value of `text/css`, and an `href` attribute value of `styles.css`.

# --hints--

Your code should have a `link` element.

```js
const link = document.querySelectorAll('link')?.[1];
assert.exists(link);
```

You should not change your existing `head` element. Make sure you did not delete the closing tag.

```js
const heads = document.querySelectorAll('head');
assert.equal(heads?.length, 1);
```

Your `link` element should be a self-closing element.

```js
assert(code.match(/<link[\w\W\s]+\/>/i));
```

Your `link` element should be within your `head` element.

```js
assert(code.match(/<head>[\w\W\s]*<link[\w\W\s]*\/>[\w\W\s]*<\/head>/i))
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
const link = document.querySelectorAll('link')?.[1];
assert.equal(link.rel, 'stylesheet');
```

Your `link` element should have a `type` attribute with the value `text/css`.

```js
const link = document.querySelectorAll('link')?.[1];
assert.equal(link.type, 'text/css');
```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
const link = document.querySelectorAll('link')?.[1];
assert.include(link.href, 'styles.css');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    
  </head>
--fcc-editable-region--
  <body>
  </body>
</html>
```

