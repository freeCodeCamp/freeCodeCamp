---
id: 5f33294a6af5e9188dbdb8f3
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

The name of the cafe is `Camper Cafe`. Add an `h1` element with the name of the cafe in capitalized letters to make it stand out.

# --hints--

You should have an opening `<h1>` tag.

```js
assert(code.match(/<h1>/i));
```

You should have a closing `</h1>` tag.

```js
assert(code.match(/<\/h1>/i));
```

You should not change your existing `body` element.

```js
assert($('body').length === 1);
```

Your `h1` element should be nested in your `body` element.

```js
assert($('h1')[0].parentElement.tagName === "BODY");
```

Your `h1` element should have the text `CAMPER CAFE`.

```js
assert(code.match(/<h1>CAMPER CAFE<\/h1>/));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
--fcc-editable-region--
  <body>
  </body>
--fcc-editable-region--
<html>
```
