---
id: 698c513508507ec8bb820227
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

To specify the media resource for the audio, you will need to add the `src` attribute to the `audio` element.

Add the `src` attribute with the value `https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3`.

# --hints--

Your `audio` element should have a `src` attribute.

```js
const audio = document.querySelector('audio');
assert.isTrue(audio?.hasAttribute('src'));
```

Your `audio` element should have a `src` attribute with the value `https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3`.

```js
const audio = document.querySelector('audio');
assert.strictEqual(audio?.getAttribute('src'),
"https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3");
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
  <audio></audio>
--fcc-editable-region--

</body>
</html>
```
