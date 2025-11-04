---
id: 68e6aff5325410118e76e7be
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you will practice working with ARIA by building an accessible audio controller.

To start, add an `h1` element with the text `Audio Controls`.

# --hints--

You should have an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your `h1` element should be inside your `body` element.

```js
assert.exists(document.querySelector('body > h1'));
```

Your `h1` element should have the text `Audio Controls`.

```js
const h1Text = document.querySelector('h1')?.innerText.trim();
assert.strictEqual(h1Text, 'Audio Controls');
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
--fcc-editable-region--
    
--fcc-editable-region--
  </body>
</html>
```
