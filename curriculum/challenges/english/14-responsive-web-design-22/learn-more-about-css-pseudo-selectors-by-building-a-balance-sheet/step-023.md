---
id: 6193ece0b46e03423cd66e78
title: Step 23
challengeType: 0
dashedName: step-23
---

# --description--

For your seventh `.row` element, give the `span` elements the following text, in order: `Credit`, `$50`, `$50`, and `$75`. Give the `.notes` element below it the text `The running balance on our line of credit.`.

# --hints--

The first `span` element should have the text `Credit`.

```js
const row = document.querySelectorAll('.section > .row')?.[6];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Credit');
```

The second `span` element should have the text `$50`.

```js
const row = document.querySelectorAll('.section > .row')?.[6];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$50');
```

The third `span` element should have the text `$50`.

```js
const row = document.querySelectorAll('.section > .row')?.[6];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$50');
```

The fourth `span` element should have the text `$75`.

```js
const row = document.querySelectorAll('.section > .row')?.[6];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$75');
```

Your fifth `.notes` element should have the text `The running balance on our line of credit.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[5];
assert(notes?.textContent === 'The running balance on our line of credit.');
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
        <p class="row">
          <span class="name">Loans</span>
          <span>$500</span>
          <span>$250</span>
          <span class="current">$0</span>
        </p>
        <span class="notes">The outstanding balance on our startup loan.</span>
        <p class="row">
          <span class="name">Expenses</span>
          <span>$200</span>
          <span>$300</span>
          <span class="current">$400</span>
        </p>
        <span class="notes">Annual anticipated expenses, such as payroll.</span>
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
