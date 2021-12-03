---
id: 6193de63d0fcab1f0b4112a0
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Give the first `span` element the text `2019`, the second the text `2020`, and the third the text `2021`. Also give the third `span` a `class` set to `current`.

# --hints--

Your first `span` element should have the text `2019`.

```js
assert(document.querySelectorAll('#header > .row > span')?.[0]?.textContent === '2019');
```

Your second `span` element should have the text `2020`.

```js
assert(document.querySelectorAll('#header > .row > span')?.[1]?.textContent === '2020');
```

Your third `span` element should have the text `2021`.

```js
assert(document.querySelectorAll('#header > .row > span')?.[2]?.textContent === '2021');
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
--fcc-editable-region--
        <h1>Balance Sheet</h1>
        <h2>AcmeWidgetCorp</h2>
        <p class="row">
          <span></span>
          <span></span>
          <span></span>
        </p>
--fcc-editable-region--
      </div>
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
