---
id: 68c34329d430583a6cd5f7f1
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Inside of your `tr` element, add four `th` elements. The first `th` element should have the text of `Time`, the second should have the text of `Track A`, the third should have the text of `Track B`, and the fourth should have the text of `Track C`.

# --hints--

Your `tr` element should have four `th` elements.

```js
assert.lengthOf(document.querySelectorAll("tr > th"), 4);
```

Your first `th` element should have the text of `Time`.

```js
assert.strictEqual(document.querySelector("tr > th:nth-of-type(1)")?.textContent.trim(), "Time");
```

Your second `th` element should have the text of `Track A`.

```js
assert.strictEqual(document.querySelector("tr > th:nth-of-type(2)")?.textContent.trim(), "Track A");
```

Your third `th` element should have the text of `Track B`.

```js
assert.strictEqual(document.querySelector("tr > th:nth-of-type(3)")?.textContent.trim(), "Track B");
```

Your fourth `th` element should have the text of `Track C`.

```js
assert.strictEqual(document.querySelector("tr > th:nth-of-type(4)")?.textContent.trim(), "Track C");
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
    <thead>
      <tr>
        
      </tr>
    </thead>
--fcc-editable-region--
  </table>
</body>
</html>
```
