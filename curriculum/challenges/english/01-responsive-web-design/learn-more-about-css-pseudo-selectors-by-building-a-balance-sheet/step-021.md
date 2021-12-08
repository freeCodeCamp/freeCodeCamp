---
id: 6193e9f7a92e7e3e1810b2f4
title: Step 21
challengeType: 0
dashedName: step-21
---

# --description--

Now move on to your second `.section` element. In the first `.row` there, give the `span` elements the following text in order: `Loans`, `$500`, `$250`, `$0`. Give the `.notes` element below it the text `The outstanding balance on our startup loan.`.

# --hints--

The first `span` element should have the text `Loans`.

```js
const row = document.querySelectorAll('.section > .row')?.[4];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Loans');
```

The second `span` element should have the text `$500`.

```js
const row = document.querySelectorAll('.section > .row')?.[4];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$500');
```

The third `span` element should have the text `$250`.

```js
const row = document.querySelectorAll('.section > .row')?.[4];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$250');
```

The fourth `span` element should have the text `$0`.

```js
const row = document.querySelectorAll('.section > .row')?.[4];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$0');
```

Your fourth `.notes` element should have the text `The outstanding balance on our startup loan.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[3];
assert(notes?.textContent === 'The outstanding balance on our startup loan.');
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
        <p class="row">
          <span class="name">Savings</span>
          <span>$500</span>
          <span>$650</span>
          <span class="current">$728</span>
        </p>
        <span class="notes">Funds set aside for emergencies.</span>
        <p class="row total">
          <span class="name">Total</span>
          <span>$579</span>
          <span>$736</span>
          <span class="current">$809</span>
        </p>
      </div>
      <h2>Liabilities</h2>
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
