---
id: 68c343692285523aef0fc6bf
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

The `scope` attribute is used to specify whether a header cell is a header for a row, column, or group of rows or columns. Here is an example:

```html
<th scope="col">Example Header</th>
```

This helps screen readers understand the relationship between header and data cells.

For all `th` elements, add a `scope` attribute with a value of `col`.

# --hints--

Each `th` element should have a `scope` attribute with the value `"col"`.

```js
const tableHeaders = document.querySelectorAll("th");
tableHeaders.forEach(header => {
  assert.equal(header?.getAttribute("scope"), "col");
});
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tech Conference 2025 Schedule</title>
</head>
<body>
  <h1>Tech Conference 2025 Schedule</h1>

  <table>
    <caption>Schedule by Track and Time</caption>

    <thead>
      <tr>
      --fcc-editable-region--
        <th>Time</th>
        <th>Track A</th>
        <th>Track B</th>
        <th>Track C</th>
      --fcc-editable-region--
      </tr>
    </thead>
  </table>
</body>
</html>
```
