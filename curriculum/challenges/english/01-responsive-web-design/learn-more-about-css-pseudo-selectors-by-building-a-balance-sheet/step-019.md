---
id: 6193e8957e614d3b8eeb770f
title: Step 19
challengeType: 0
dashedName: step-19
---

# --description--

In your third `.row` element, give the `span` elements the following text values in order: `Savings`, `$500`, `$650`, and `$728`. Give the following `.notes` element the text `Funds set aside for emergencies.`.

# --hints--

The first `span` element should have the text `Savings`.

```js
const row = document.querySelectorAll('.section > .row')?.[2];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Savings');
```

The second `span` element should have the text `$500`.

```js
const row = document.querySelectorAll('.section > .row')?.[2];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$500');
```

The third `span` element should have the text `$650`.

```js
const row = document.querySelectorAll('.section > .row')?.[2];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$650');
```

The fourth `span` element should have the text `$728`.

```js
const row = document.querySelectorAll('.section > .row')?.[2];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$728');
```

Your third `.notes` element should have the text `Funds set aside for emergencies.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[2];
assert(notes?.textContent === 'Funds set aside for emergencies.');
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
        <p class="row">
          <span class="name">Checking</span>
          <span>$54</span>
          <span>$56</span>
          <span class="current">$53</span>
        </p>
        <span class="notes">Our primary transactional account.</span>
--fcc-editable-region--
        <p class="row">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
        <span class="notes"></span>
--fcc-editable-region--
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
