---
id: 698c5710136539797f296098
title: Step 8
challengeType: 0
dashedName: step-8
---

# --description--

Below the `p` element, add an `audio` element, give it an `src` attribute with a value of `https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3`, and the `loop` and `controls` attributes.

# --hints--

You should have a second `audio` element.

```js
assert.exists(document.querySelector('audio:nth-of-type(2)'));
```

The new `audio` element should be below the `p` element.

```js
assert.exists(document.querySelector('p:nth-of-type(2) + audio:nth-of-type(2)'));
```

Your `audio` element should have a `src` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(2)');
assert.isTrue(audio?.hasAttribute('src'));
```

Your `audio` element should have a `src` attribute with the value `https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3`.

```js
const audio = document.querySelector('audio:nth-of-type(2)');
assert.strictEqual(audio?.getAttribute('src'),
"https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3");
```

Your `audio` element should have the `loop` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(2)');
assert.isTrue(audio?.hasAttribute('loop'));
```

Your `audio` element should have the `controls` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(2)');
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
  
  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3" loop controls></audio>
  
  <h2>Cruising for a Musing</h2>
  <p>Artist: Quincy Larson</p>
  
--fcc-editable-region--
  
--fcc-editable-region--

</body>
</html>
```
