---
id: 6193e7150dc89231b01a3515
title: Step 18
challengeType: 0
dashedName: step-18
---

# --description--

In your second `.row` element, give the `span` elements the following text values in order: `Checking`, `$54`, `$56`, and `$53`. Give the following `.notes` element the text `Our primary transactional account.`.

# --hints--

The first `span` element should have the text `Checking`.

```js
const row = document.querySelectorAll('.section > .row')?.[1];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Checking');
```

The second `span` element should have the text `$54`.

```js
const row = document.querySelectorAll('.section > .row')?.[1];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$54');
```

The third `span` element should have the text `$56`.

```js
const row = document.querySelectorAll('.section > .row')?.[1];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$56');
```

The fourth `span` element should have the text `$53`.

```js
const row = document.querySelectorAll('.section > .row')?.[1];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$53');
```

Your second `.notes` element should have the text `Our primary transactional account.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[1];
assert(notes?.textContent === 'Our primary transactional account.');
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
          <span class="name">Cash</span>
          <span>$25</span>
          <span>$30</span>
          <span class="current">$28</span>
        </p>
        <span class="notes">This is the cash we currently have on hand.</span>
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
