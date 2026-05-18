---
id: 68f1f371fefd448b4f70b898
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

In a previous lesson, you learned about different attributes available to the `video` element. The `width` attribute determines the width of the video in pixels.

Add the `width` attribute to the `video` element with a value of `640`.

# --hints--

Your `video` element should have the attribute `width` with the value `640`.

```js
const video = document.querySelector('video');
assert.strictEqual(video?.getAttribute('width'), '640');
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
  <video>
--fcc-editable-region--
  </video>
</body>
</html>
```
