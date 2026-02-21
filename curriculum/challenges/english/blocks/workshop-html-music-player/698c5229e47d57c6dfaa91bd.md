---
id: 698c5229e47d57c6dfaa91bd
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

The `controls` attribute provides playback controls including pause/resume playback, seeking, and volume control for the `audio` element. 

The `controls` attribute is a boolean attribute and does not need a value.

Add the `controls` attribute to the `audio` element.

Now you should see the `audio` element displayed on the page.

# --hints--

Your `audio` element should have the `controls` attribute.

```js
const audio = document.querySelector('audio');
assert.isTrue(audio?.hasAttribute('controls'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Working with the HTML Audio Element</title>
</head>
<body>
  <h1>freeCodeCamp Tunes</h1>

  <h2>Can't Stay Down</h2>
  <p>Artist: Quincy Larson</p>
  
--fcc-editable-region--
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3" loop></audio>
--fcc-editable-region--

</body>
</html>
```
