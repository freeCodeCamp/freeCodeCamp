---
id: 6194135942d5e08174b8bab1
title: Step 51
challengeType: 0
dashedName: step-51
---

# --description--

Finally, the `elem1 + elem2` selector will target each `elem2` element that comes immediately after an `elem1` element. The notes in the balance sheet stand out too much - create a `p + span` selector to target them, and set the `font-size` property to `0.8em`.

# --hints--

You should have a new `p + span` selector.

```js
assert(new __helpers.CSSHelp(document).getStyle('p + span'));
```

Your `p + span` selector should have a `font-size` property set to `0.8em`.

```js
assert(new __helpers.CSSHelp(document).getStyle('p + span')?.fontSize === '0.8em');
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
        <p class="row total" tabindex="1">
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
        <p class="row total" tabindex="1">
          <span class="name">Total</span>
          <span>$750</span>
          <span>$600</span>
          <span class="current">$475</span>
        </p>
      </div>
      <h2>Net Worth</h2>
      <div class="section">
        <p class="row total" tabindex="1">
          <span class="name">Total</span>
          <span>-$171</span>
          <span>$136</span>
          <span class="current">$334</span>
        </p>
      </div>
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css
body {
  text-align: center;
  font-family: Tahoma;
  color: #0a0a23;
}

#sheet {
  text-align: left;
  max-width: 500px;
  margin: auto;
  padding: 10px;
  border: 2px solid #d0d0d5;
}

#header h2 {
  font-size: 1.3em;
  background: transparent;
}

.row:nth-of-type(odd) {
  background-color: #dfdfe2;
}

.row:nth-of-type(even) {
  background-color: #d0d0d5;
}

.row:last-child {
  background-color: transparent;
  margin-bottom: 30px;
}

p[class~="total"] {
  border-bottom: 4px double #0a0a23;
  font-weight: bold;
}

.row {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #0a0a23;
  padding: 4px;
}

span:not(.name) {
  margin-left: 10px;
  min-width: 15%;
  text-align: right;
}

span[class="current"] {
  font-style: italic;
}

.name {
  width: 100%;
  text-align: left;
}

.row[tabindex]:hover {
  background-color: #99c9ff;
}

.row[tabindex]:focus {
  background-color: #198eee;
  color: white;
}

div > h2 {
  background-color: #99c9ff;
  font-size: 1.3em;
  padding: 0 4px;
}

div ~ h2 {
  font-weight: normal;
}

--fcc-editable-region--

--fcc-editable-region--
```
