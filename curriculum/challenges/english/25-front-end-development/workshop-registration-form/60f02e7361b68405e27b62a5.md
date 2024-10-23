---
id: 60f02e7361b68405e27b62a5
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you will learn how to style forms by designing a registration form.

All of the HTML boilerplate (`DOCTYPE`, `html`, `head`, and `body`) has been provided for you.

Within the `body`, add a heading to give context to the form by using an `h1` element with the text `Registration Form`.

# --hints--

You should add the `h1` within the `body`.

```js
assert.exists(document.querySelector('body > h1'));
```

You should give the `h1` the text `Registration Form`.

```js
assert.equal(document.querySelector('body > h1')?.textContent, 'Registration Form');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
</html>
```

