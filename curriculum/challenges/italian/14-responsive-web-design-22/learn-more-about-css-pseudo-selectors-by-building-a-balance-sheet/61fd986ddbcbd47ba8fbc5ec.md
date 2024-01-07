---
id: 61fd986ddbcbd47ba8fbc5ec
title: Step 23
challengeType: 0
dashedName: step-23
---

# --description--

All'interno del terzo `tr`, aggiungi un elemento `th` con il testo `Credit The outstanding balance on our credit card.`. Racchiudi il testo, eccetto `Credit`, all'interno di un elemento `span` con l'attributo `class` impostato su `description`.

Al di sotto, aggiungi tre elementi `td` e dai loro il seguente testo, in ordine: `$50`, `$50` e `$75`. Dai al terzo elemento `td` un attributo `class` con il valore `current`.

# --hints--

Il terzo `tr` dovrebbe avere un elemento `th`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelector('th'));
```

L'elemento `th` dovrebbe avere il testo `Credit The outstanding balance on our credit card.`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelector('th')?.innerText === 'Credit The outstanding balance on our credit card.');
```

Dovresti racchiudere il testo `The outstanding balance on our credit card.` in un elemento `span`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelector('th > span')?.textContent === 'The outstanding balance on our credit card.');
```

L'elemento `span` dovrebbe avere l'attributo `class` con il valore `description`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelector('th > span')?.classList?.contains('description'));
```

Dovresti avere tre elementi `td`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelectorAll('td').length === 3);
```

Il primo elemento `td` dovrebbe avere il testo `$50`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelectorAll('td')?.[0]?.textContent === '$50');
```

Il secondo elemento `td` dovrebbe avere il testo `$50`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelectorAll('td')?.[1]?.textContent === '$50');
```

Il terzo elemento `td` dovrebbe avere il testo `$75`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelectorAll('td')?.[2]?.textContent === '$75');
```

Il terzo elemento `td` dovrebbe avere l'attributo `class` con il valore `current`.

```js
assert(document.querySelectorAll('table')?.[1]?.querySelector('tbody')?.querySelectorAll('tr')?.[2]?.querySelectorAll('td')?.[2]?.classList?.contains('current'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Balance Sheet</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <main>
      <section>
        <h1>
          <span class="flex">
            <span>AcmeWidgetCorp</span>
            <span>Balance Sheet</span>
          </span>
        </h1>
        <div id="years" aria-hidden="true">
          <span class="year">2019</span>
          <span class="year">2020</span>
          <span class="year">2021</span>
        </div>
        <div class="table-wrap">
          <table>
            <caption>Assets</caption>
            <thead>
              <tr>
                <td></td>
                <th><span class="sr-only year">2019</span></th>
                <th><span class="sr-only year">2020</span></th>
                <th class="current"><span class="sr-only year">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="data">
                <th>Cash <span class="description">This is the cash we currently have on hand.</span></th>
                <td>$25</td>
                <td>$30</td>
                <td class="current">$28</td>
              </tr>
              <tr class="data">
                <th>Checking <span class="description">Our primary transactional account.</span></th>
                <td>$54</td>
                <td>$56</td>
                <td class="current">$53</td>
              </tr>
              <tr class="data">
                <th>Savings <span class="description">Funds set aside for emergencies.</span></th>
                <td>$500</td>
                <td>$650</td>
                <td class="current">$728</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Assets</span></th>
                <td>$579</td>
                <td>$736</td>
                <td class="current">$809</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Liabilities</caption>
            <thead>
              <tr>
              <td></td>
              <th><span class="sr-only">2019</span></th>
              <th><span class="sr-only">2020</span></th>
              <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
--fcc-editable-region--
              <tr class="data">
                <th>Loans <span class="description">The outstanding balance on our startup loan.</span></th>
                <td>$500</td>
                <td>$250</td>
                <td class="current">$0</td>
              </tr>
              <tr class="data">
                <th>Expenses <span class="description">Annual anticipated expenses, such as payroll.</span></th>
                <td>$200</td>
                <td>$300</td>
                <td class="current">$400</td>
              </tr>
              <tr class="data">
              </tr>
              <tr class="total">
              </tr>
--fcc-editable-region--
            </tbody>
          </table>
          <table>
          </table>
        </div>
      </section>
    </main>
  </body>
</html>
```

```css

```
