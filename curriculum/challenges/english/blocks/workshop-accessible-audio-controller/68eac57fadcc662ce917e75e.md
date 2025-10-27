---
id: 68eac57fadcc662ce917e75e
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Next, add a `button` element with the `type` attribute set to the value `button`.

The `button` element's text should be `Play`.

# --hints--

You should have a `button` element.

```js
assert.exists(document.querySelector('button'));
```

Your `button` element should have a `type` attribute.

```js
const button = document.querySelector('button');
assert.isTrue(button?.hasAttribute('type'));
```

Your `button` element should have the `type` attribute set to `button`.

```js
const button = document.querySelector('button');
assert.strictEqual(button?.getAttribute('type'), 'button');
```

Your `button` element should have the text `Play`.

```js
const button = document.querySelector('button');
assert.strictEqual(button?.innerText.trim(), 'Play');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Accessible Controls</title>
  </head>
  <body>

    <h1>Audio Controls</h1>
--fcc-editable-region--
    
--fcc-editable-region--
  </body>
</html>
```
