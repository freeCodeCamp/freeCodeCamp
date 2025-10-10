---
id: 68c34a35c91b053dbae2a8c6
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

Another value for the `scope` attribute is `row`, which indicates that a header cell is a header for its entire row.

Inside of your `th` element, add a `scope` attribute with a value of `row`.

# --hints--

Your `th` element should have a `scope` attribute with a value of `row`.

```js
assert.equal(document.querySelector("tbody tr th")?.getAttribute("scope"), "row");
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
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        --fcc-editable-region--
        <th>9:00 AM</th>
        --fcc-editable-region--
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
    </tbody>
    
  </table>
</body>
</html>
```
