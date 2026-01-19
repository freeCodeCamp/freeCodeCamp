---
id: 68e6698b29e562d21b1d260c
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you are going to build a list of major web browsers. The HTML boilerplate has been provided for you.

Start by adding a heading to your page that reads `List of Major Web Browsers` using a `h1` element inside the `body` element.

# --hints--

You should have an `h1` element inside the `body` element.

```js
const h1 = document.querySelector('body h1');
assert.exists(h1);
```

Your `h1` element should contain the text `List of Major Web Browsers`.

```js
const h1 = document.querySelector('body h1');
assert.strictEqual(h1?.textContent.trim(), 'List of Major Web Browsers');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>List of Browsers and Descriptions</title>
    </head>
    <body>
    --fcc-editable-region--
        
    --fcc-editable-region--
    </body>
</html>
```
