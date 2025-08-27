---
id: 613297a923965e0703b64796
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

You may be familiar with the `meta` element already; it is used to specify information about the page, such as the title, description, keywords, and author.

Give your page a `meta` element with an appropriate `charset` value.

The `charset` attribute specifies the character encoding of the page, and, nowadays, `UTF-8` is the only encoding supported by most browsers.

# --hints--

You should create a `meta` element within the `head` element.

```js
assert.exists(document.querySelector('head > meta'));
```

You should give the `meta` tag a `charset` of `UTF-8`.

```js
assert.equal(document.querySelector('head > meta')?.getAttribute('charset')?.toLowerCase(), 'utf-8');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
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
