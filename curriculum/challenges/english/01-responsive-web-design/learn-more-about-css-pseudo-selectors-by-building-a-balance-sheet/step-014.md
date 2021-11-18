---
id: 6193e5280857e72be1efc99d
title: Step 14
challengeType: 0
dashedName: step-14
---

# --description--

Copy the entire contents of your first `.section` element and paste them into your second `.section` element.

# --hints--

Your second `.section` element should have the same contents as your first `.section` element.

```js
assert.deepEqual(document.querySelectorAll('.section')?.[0]?.innerHTML, document.querySelectorAll('.section')?.[1]?.innerHTML);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>freeCodeCamp Balance Sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
  </head>
  <body>
    <div id="sheet">
      <div id="header">
        <h1>Balance Sheet</h1>
        <h2>freeCodeCamp</h2>
        <p class="row">
          <span>2019</span>
          <span>2020</span>
          <span class="current">2021</span>
        </p>
      </div>
      <h2>Assets</h2>
      <div class="section">
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
        <p class="row total">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
      </div>
      <h2>Liabilities</h2>
--fcc-editable-region--
      <div class="section">

      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: August 2021</footer>
  </body>
</html>
```

```css

```
