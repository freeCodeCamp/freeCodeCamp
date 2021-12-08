---
id: 6193ed97ae313e4331c9078a
title: Step 24
challengeType: 0
dashedName: step-24
---

# --description--

Give the `span` elements within your second `.row total` element the following text, in order: `Total`, `$750`, `$600`, and `$475`.

# --hints--

The first `span` element should have the text `Total`.

```js
const row = document.querySelectorAll('.section > .row')?.[7];
assert(row?.querySelectorAll('span')?.[0]?.textContent === 'Total');
```

The second `span` element should have the text `$750`.

```js
const row = document.querySelectorAll('.section > .row')?.[7];
assert(row?.querySelectorAll('span')?.[1]?.textContent === '$750');
```

The third `span` element should have the text `$600`.

```js
const row = document.querySelectorAll('.section > .row')?.[7];
assert(row?.querySelectorAll('span')?.[2]?.textContent === '$600');
```

The fourth `span` element should have the text `$475`.

```js
const row = document.querySelectorAll('.section > .row')?.[7];
assert(row?.querySelectorAll('span')?.[3]?.textContent === '$475');
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
        <p class="row">
          <span class="name">Credit</span>
          <span>$50</span>
          <span>$50</span>
          <span class="current">$75</span>
        </p>
        <span class="notes">The running balance on our line of credit.</span>
--fcc-editable-region--
        <p class="row total">
          <span class="name"></span>
          <span></span>
          <span></span>
          <span class="current"></span>
        </p>
--fcc-editable-region--
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
