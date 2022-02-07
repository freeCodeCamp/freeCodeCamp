---
id: 61fd75ea7f663457612dba02
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Within each of your new `th` elements, nest a `span` element with the `class` set to `sr-only yer`. Give them the following text (in order): `2019`, `2020`, and `2021`.

Give your third `th` element the `class` attribute set to `current`.

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
--fcc-editable-region--
            <thead>
              <tr>
                <td></td>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
--fcc-editable-region--
            <tbody>
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
