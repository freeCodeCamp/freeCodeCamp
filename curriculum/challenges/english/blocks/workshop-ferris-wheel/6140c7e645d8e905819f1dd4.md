---
id: 6140c7e645d8e905819f1dd4
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

To start, add a `link` element for the `./styles.css` file.

# --hints--

Your code should have a `link` element.

```js
assert.match(code, /<link/);
```

You should have one `link` element.

```js
assert.lengthOf(document.querySelectorAll('link'), 1);
```

Your `link` element should be within your `head` element.

```js
assert.exists(document.querySelector('head > link'));
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
const linkElement = document.querySelector('link');
const rel = linkElement?.getAttribute("rel");
assert.strictEqual(rel, "stylesheet");
```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
const linkElement = document.querySelector('link');
assert.strictEqual(linkElement?.dataset?.href, "styles.css");
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8">
    <title>Ferris Wheel</title>

  </head>
--fcc-editable-region--
  <body>

  </body>
</html>

```

```css

```
