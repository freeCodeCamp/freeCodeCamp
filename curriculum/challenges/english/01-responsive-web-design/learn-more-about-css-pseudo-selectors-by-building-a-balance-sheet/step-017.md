---
id: 6193e5d66b67e32e5f0f930e
title: Step 17
challengeType: 0
dashedName: step-17
---

# --description--

Now you can start filling in the data. In your first `.row` element, give the `span` elements the following text values in order: `Cash`, `$25`, `$30`, and `$28`. Give the following `.notes` element the text `This is the cash we currently have on hand.`.

# --hints--

The first `span` element should have the text `Cash`.

```js
const row = document.querySelectorAll('.section > .row')?.[0];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Cash');
```

The second `span` element should have the text `$25`.

```js
const row = document.querySelectorAll('.section > .row')?.[0];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$25');
```

The third `span` element should have the text `$30`.

```js
const row = document.querySelectorAll('.section > .row')?.[0];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$30');
```

The fourth `span` element should have the text `$28`.

```js
const row = document.querySelectorAll('.section > .row')?.[0];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$28');
```

Your first `.notes` element should have the text `This is the cash we currently have on hand.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[0];
assert(notes?.textContent === 'This is the cash we currently have on hand.');
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
--fcc-editable-region--
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
--fcc-editable-region--
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
      <div class="section">
        <p class="row total">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
      </div>
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
