---
id: 68c346d03709343bff132707
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

For the next few steps, you will build out the body of the table.

Start by adding a `tbody` element below the `thead` element. Then inside the `tbody`, add a `tr` element.

# --hints--

You should have a `tbody` element below the `thead` element.

```js
assert.exists(document.querySelector("tbody"));
```

You should have a `tr` element inside the `tbody` element.

```js
assert.exists(document.querySelector("tbody tr"));
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
    
    --fcc-editable-region--
    
    --fcc-editable-region--
  </table>
</body>
</html>
```
