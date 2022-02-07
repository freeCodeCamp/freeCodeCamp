---
id: 61fd78621573aa5e8b512f5e
title: Step 15
challengeType: 0
dashedName: step-15
---

# --description--

In your third `tr` element, add a `th` element with the text `Savings Funds set aside for emergencies`. Wrap that text, except for `Savings `, in a `span` element with the `class` attribute set to `description`.

Following that, add three `td` elements with the following text (in order): `$500`, `$650`, `$728`. Give the third `td` element a `class` attribute set to `current`.

# --hints--

Test 1

```js

```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>freeCodeCamp Balance Sheet</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
  </head>
  <body>
    <main>
      <section>
        <h1>
          <span class="flex">
            <span>freeCodeCamp</span>
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
--fcc-editable-region--
              <tr class="data">
              </tr>
--fcc-editable-region--
              <tr class="total">
              </tr>
            </tbody>
          </table>
          <table>
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
