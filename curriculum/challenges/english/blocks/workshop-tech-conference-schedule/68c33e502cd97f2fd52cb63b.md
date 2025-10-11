---
id: 68c33e502cd97f2fd52cb63b
title: Step 1
challengeType: 0
dashedName: step-1
demoType: onLoad
---

# --description--

In this workshop, you will learn how to make accessible table elements by building out a schedule for a tech conference.

Start by adding an `h1` element with the text `Tech Conference 2025 Schedule`.

# --hints--

You should have an `h1` element.

```js
const h1 = document.querySelector("h1");
assert.exists(h1);
```

Your `h1` element should have the text `Tech Conference 2025 Schedule`.

```js
const h1 = document.querySelector("h1");
assert.strictEqual(h1?.textContent.trim(), "Tech Conference 2025 Schedule");
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
    --fcc-editable-region--
    
    --fcc-editable-region--
</body>
</html>
```
