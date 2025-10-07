---
id: 68c3420cb0176439a95af1b8
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

The next step is to add the table head. 

Start by adding a `thead` element below the `caption` element. Inside the `thead`, add a `tr` element. 

# --hints--

You should have a `thead` element.

```js
assert.exists(document.querySelector("table thead"));
```

You should have a `tr` element inside the `thead`.

```js
assert.exists(document.querySelector("table thead tr"));
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

    --fcc-editable-region--
        
    --fcc-editable-region--
  </table>
</body>
</html>
```
