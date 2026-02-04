---
id: 68f18724d71db1dda8d6fec7
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you will build an HTML video player. The HTML boilerplate has been provided for you.

Create an `h1` element and give it the text `Working with the HTML Video Element`.

# --hints--

You should have an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your `h1` element should contain the text `Working with the HTML Video Element`.

```js
const h1 = document.querySelector('h1');
assert.strictEqual(h1?.textContent.trim(), 'Working with the HTML Video Element');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Working with the HTML Video Element</title>
</head>
<body>
--fcc-editable-region--
  
--fcc-editable-region--
</body>
</html>
```
