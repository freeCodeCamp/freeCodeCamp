---
id: 68e4c81577243e4db1676491
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you will practice working with semantic HTML by building a web page that includes some of Quincy Larson's tips for landing a developer job. The basic HTML boilerplate has been prepared for you.

Begin by creating an `h1` element with the text `Quincy's Tips for Getting a Developer Job`.

# --hints--

You should have an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your `h1` element should have the text `Quincy's Tips for Getting a Developer Job`.

```js
assert.equal(document.querySelector('h1')?.textContent.trim(), "Quincy's Tips for Getting a Developer Job")
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quincy's Tips for Getting a Developer Job</title>
  </head>
  <body>
--fcc-editable-region--
    
--fcc-editable-region--
  </body>
</html>
```
