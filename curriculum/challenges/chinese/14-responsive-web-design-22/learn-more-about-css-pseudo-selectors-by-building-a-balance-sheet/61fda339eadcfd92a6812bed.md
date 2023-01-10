---
id: 61fda339eadcfd92a6812bed
title: 步骤 30
challengeType: 0
dashedName: step-30
---

# --description--

在深入了解样式之前，你应该使用 `sr-only` 类。 你可以使用 CSS 使具有此类的元素在可视页面中完全隐藏，但仍由屏幕阅读器朗读。

你将要编写的 CSS 是一组通用属性，用于确保元素在视觉上完全隐藏。

`span[class~="sr-only"]` 选择器将选择任何 `span` 元素，其 `class` *包括* `sr-only`。 创建该选择器，并将其 `border` 属性设置为 `0`。

# --hints--

应该有一个 `span[class~="sr-only"]` 选择器。

```js
assert(new __helpers.CSSHelp(document).getStyle('span[class~="sr-only"]'));
```

`span[class~="sr-only"]` 选择器应该有一个 `border` 属性设置为 `0`。

```js
assert(new __helpers.CSSHelp(document).getStyle('span[class~="sr-only"]')?.getPropertyValue('border-width') === '0px');
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
                <th>Credit <span class="description">The outstanding balance on our credit card.</span></th>
                <td>$50</td>
                <td>$50</td>
                <td class="current">$75</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Liabilities</span></th>
                <td>$750</td>
                <td>$600</td>
                <td class="current">$475</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Net Worth</caption>
            <thead>
              <tr>
              <td></td>
              <th><span class="sr-only">2019</span></th>
              <th><span class="sr-only">2020</span></th>
              <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="total">
                <th>Total <span class="sr-only">Net Worth</span></th>
                <td>$-171</td>
                <td>$136</td>
                <td class="current">$334</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </body>
</html>
```

```css
--fcc-editable-region--

--fcc-editable-region--

html {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #0a0a23;
}
```
