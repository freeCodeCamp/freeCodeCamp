---
id: 68f1f6f97af9749a42260a43
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

The `controls` attribute provides playback controls including playback, rewind, and volume control for the `video` element. 

The `controls` attribute is a boolean attribute and does not need a value.

Add the `controls` attribute to the `video` element.

Now you should see the `video` element displayed on the page.

# --hints--

Your `video` element should have the `controls` attribute.

```js
const video = document.querySelector('video');
assert.isTrue(video?.hasAttribute('controls'));
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
  <video width="640" loop>
--fcc-editable-region--
  </video>
</body>
</html>
```
