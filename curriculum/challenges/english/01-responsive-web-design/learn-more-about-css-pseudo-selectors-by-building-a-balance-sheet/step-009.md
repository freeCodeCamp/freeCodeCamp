---
id: 6193dfd113955a238da1cc05
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

Copy the `.row` and `.notes` elements and paste two more sets, so that your `.section` has three of each.

# --hints--

You should have three `.row` elements.

```js
assert(document.querySelectorAll('.row').length === 4);
```

You should have three `.notes` elements.

```js
assert(document.querySelectorAll('.notes').length === 3);
```

Your `.row` elements should all be within your `.section` element.

```js
assert(document.querySelectorAll('.section > .row').length === 3);
```

Your `.notes` elements should all be within your `.section` element.

```js
assert(document.querySelectorAll('.section > .notes').length === 3);
```

Your `.row` and `.notes` elements should be in the correct order.

```js
const children = document.querySelector('.section')?.children;
assert(children?.length === 6);
assert(children?.[0]?.classList?.contains('row'));
assert(children?.[1]?.classList?.contains('notes'));
assert(children?.[2]?.classList?.contains('row'));
assert(children?.[3]?.classList?.contains('notes'));
assert(children?.[4]?.classList?.contains('row'));
assert(children?.[5]?.classList?.contains('notes'));
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
--fcc-editable-region--
      <div class="section">
        <p class="row"></p>
        <span class="notes"></span>
      </div>
--fcc-editable-region--
    </div>
    <footer>Last Updated: December 2021</footer>
  </body>
</html>
```

```css

```
