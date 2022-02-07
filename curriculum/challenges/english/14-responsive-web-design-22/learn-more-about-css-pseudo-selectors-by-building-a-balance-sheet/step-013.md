---
id: 61fd778081276b59d59abad6
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

In your first `tr`, add a `th` element with the text `Cash This is the cash we currently have on hand.`. Wrap all of that text except `Cash ` in a `span` element with the `class` set to `description`.

Following that, add three `td` elements with the following text (in order): `$25`, `$30`, `$28`. Give the third `td` element a `class` attribute set to `current`.

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
--fcc-editable-region--
              <tr class="data">
              </tr>
--fcc-editable-region--
              <tr class="data">
              </tr>
              <tr class="data">
              </tr>
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
