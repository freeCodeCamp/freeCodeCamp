---
id: 6193ea793e49253eee1452d1
title: Step 22
challengeType: 0
dashedName: step-22
---

# --description--

Give the `span` elements within your sixth `.row` element the following text, in order: `Expenses`, `$200`, `$300`, and `$400`. Then give the following `.notes` element the text `Annual anticipated expenses, such as payroll.`.

# --hints--

The first `span` element should have the text `Expenses`.

```js
const row = document.querySelectorAll('.section > .row')?.[5];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Expenses');
```

The second `span` element should have the text `$200`.

```js
const row = document.querySelectorAll('.section > .row')?.[5];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$200');
```

The third `span` element should have the text `$300`.

```js
const row = document.querySelectorAll('.section > .row')?.[5];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$300');
```

The fourth `span` element should have the text `$400`.

```js
const row = document.querySelectorAll('.section > .row')?.[5];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$400');
```

Your fifth `.notes` element should have the text `Annual anticipated expenses, such as payroll.`.

```js
const notes = document.querySelectorAll('.section > .notes')?.[4];
assert(notes?.textContent === 'Annual anticipated expenses, such as payroll.');
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
