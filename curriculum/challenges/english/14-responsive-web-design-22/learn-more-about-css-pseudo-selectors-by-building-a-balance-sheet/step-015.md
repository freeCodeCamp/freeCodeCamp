---
id: 6193e55d97150c2ca7c9458a
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

Below your second `.section` element, create another `h2` element with the text `Net Worth`. Follow that with a `div` element with the `class` set to `section`.

# --hints--

You should create a new `h2` element below your second `.section` element.

```js
assert(document.querySelectorAll('.section')?.[1]?.nextElementSibling?.localName === 'h2');
```

Your new `h2` element should have the text `Net Worth`.

```js
assert(document.querySelectorAll('.section')?.[1]?.nextElementSibling?.textContent === 'Net Worth');
```

You should create a new `div` element within your `#sheet` element.

```js
assert(document.querySelector('#sheet')?.lastElementChild?.localName === 'div');
```

Your new `div` element should have a `class` attribute set to `section`.

```js
assert(document.querySelector('#sheet')?.lastElementChild?.classList?.contains('section'));
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
--fcc-editable-region--

--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
