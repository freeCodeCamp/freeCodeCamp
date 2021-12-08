---
id: 6193e5946b7ea12d8ce7b1c2
title: Step 16
challengeType: 0
dashedName: step-16
---

# --description--

Copy one of your `.row total` elements, with its contents, and paste that into your third `.section` element. Do not copy the other elements.

# --hints--

Your third `.section` element should have a `.row total` element.

```js
assert(document.querySelectorAll('.section')?.[2]?.querySelector('.row.total'));
```

Your new `.row total` element should match the other `.row total` elements.

```js
assert.deepEqual(document.querySelectorAll('.row.total')?.[0]?.innerHTML, document.querySelectorAll('.row.total')?.[2]?.innerHTML);
```

Your third `.section` element should not have any other elements within it.

```js
assert(document.querySelectorAll('.section')?.[2]?.querySelector('.row.total')?.previousElementSibling === null);
assert(document.querySelectorAll('.section')?.[2]?.querySelector('.row.total')?.nextElementSibling === null);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AcmeWidgetCorp Balance Sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
  </head>
  <body>
    <div id="sheet">
      <div id="header">
        <h1>Balance Sheet</h1>
        <h2>AcmeWidgetCorp</h2>
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
      <h2>Net Worth</h2>
--fcc-editable-region--
      <div class="section">

      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
