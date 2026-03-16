---
id: 68e96ce52087043b0e999296
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Below the paragraph element, add a `main` element and nest three `section` elements inside it.

# --hints--

You should have a `main` element below the paragraph element.

```js
const mainEl = document.querySelector('p + main');
assert.exists(mainEl);
```

You should have three `section` elements inside of your `main` element.

```js
const sections = document.querySelectorAll('main > section');
assert.lengthOf(sections, 3);
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
    <h1>Quincy's Tips for Getting a Developer Job</h1>
    <p>
      Learning to code is hard, but as Quincy Larson says,
      <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">You can become a developer.</q>
    </p>

--fcc-editable-region--
    
--fcc-editable-region--
  </body>
</html>
```
