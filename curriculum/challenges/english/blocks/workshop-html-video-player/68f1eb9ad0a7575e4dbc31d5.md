---
id: 68f1eb9ad0a7575e4dbc31d5
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Next, create a `video` element below the `h1`. Over the next few steps, you will add the necessary attributes to make the video player functional. 

# --hints--

You should have a `video` element.

```js
assert.exists(document.querySelector('video'));
```

The new `video` element should be below the `h1`.

```js
assert.exists(document.querySelector('h1 + video'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Working with the HTML Video Element</title>
</head>
<body>
  <h1>Working with the HTML Video Element</h1>
--fcc-editable-region--
  
--fcc-editable-region--
</body>
</html>
```
