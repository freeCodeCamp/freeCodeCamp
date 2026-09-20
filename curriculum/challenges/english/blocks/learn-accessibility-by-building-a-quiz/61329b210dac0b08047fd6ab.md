---
id: 61329b210dac0b08047fd6ab
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

Continuing with the `meta` elements, a `viewport` definition tells the browser how to render the page. Including one betters visual accessibility on mobile, and improves _SEO_ (search engine optimization).

Add a `viewport` definition with a `content` attribute detailing the `width` and `initial-scale` of the page.

# --hints--

You should create another `meta` element in the `head`.

```js
assert.equal(document.querySelectorAll('head > meta')?.length, 2);
```

You should give the `meta` a `name` attribute of `viewport`.

```js
assert.equal(document.querySelectorAll('head > meta[name="viewport"]')?.length, 1);
```

You should give the `meta` a `content` attribute of `width=device-width, initial-scale=1`.

```js
assert.equal(document.querySelectorAll('head > meta[content="width=device-width, initial-scale=1.0"]')?.length || document.querySelectorAll('head > meta[content="width=device-width, initial-scale=1"]')?.length, 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
</html>

```

```css
body {
  background: #f5f6f7;
  color: #1b1b32;
  font-family: Helvetica;
  margin: 0;
}
```
