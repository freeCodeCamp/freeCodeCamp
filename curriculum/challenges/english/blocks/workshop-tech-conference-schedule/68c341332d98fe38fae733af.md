---
id: 68c341332d98fe38fae733af
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Now it is time to start building out the table. 

Start by adding a `table` element below your `h1` element. Inside of the `table` element, add a `caption` element with the text `Schedule by Track and Time`.

# --hints--

You should have a `table` element.

```js
assert.exists(document.querySelector("table"));
```

Your `table` element should have a `caption` element.

```js
assert.exists(document.querySelector("table caption"));
```

Your `caption` element should have the text `Schedule by Track and Time`.

```js
assert.equal(document.querySelector("table caption")?.textContent.trim(), "Schedule by Track and Time");
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

--fcc-editable-region--
    
--fcc-editable-region--
</body>
</html>
```
