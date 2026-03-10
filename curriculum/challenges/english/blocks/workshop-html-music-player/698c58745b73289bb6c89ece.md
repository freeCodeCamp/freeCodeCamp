---
id: 698c58745b73289bb6c89ece
title: Step 9
challengeType: 0
dashedName: step-9
---

# --description--

The last song is titled `Scratching the Surface`, the artist is Quincy Larson, and the file to use is `https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3`.

Add the last song to complete the music player following the same pattern you used for the first two songs.

# --hints--

You should have a third `h2` element.

```js
assert.exists(document.querySelector('h2:nth-of-type(3)'));
```

Your third `h2` element should contain the text `Scratching the Surface`.

```js
const h2 = document.querySelector('h2:nth-of-type(3)');
assert.strictEqual(h2?.textContent.trim(), 'Scratching the Surface');
```

You should have a `p` element.

```js
assert.exists(document.querySelector('p:nth-of-type(3)'));
```

Your `p` element should contain the text `Artist: Quincy Larson`.

```js
const p = document.querySelector('p:nth-of-type(3)');
assert.strictEqual(p?.textContent.trim(), 'Artist: Quincy Larson');
```

You should have a third `audio` element.

```js
assert.exists(document.querySelector('audio:nth-of-type(3)'));
```

The new `audio` element should be below the `p` element.

```js
assert.exists(document.querySelector('p:nth-of-type(3) + audio:nth-of-type(3)'));
```

Your `audio` element should have a `src` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(3)');
assert.isTrue(audio?.hasAttribute('src'));
```

Your `audio` element should have a `src` attribute with the value `https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3`.

```js
const audio = document.querySelector('audio:nth-of-type(3)');
assert.strictEqual(audio?.getAttribute('src'),
"https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3");
```

Your `audio` element should have the `loop` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(3)');
assert.isTrue(audio?.hasAttribute('loop'));
```

Your `audio` element should have the `controls` attribute.

```js
const audio = document.querySelector('audio:nth-of-type(3)');
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

  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" loop controls></audio>

--fcc-editable-region--
  
--fcc-editable-region--

</body>
</html>
```

# --solutions--

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

  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3" loop controls></audio>

  <h2>Scratching the Surface</h2>
  <p>Artist: Quincy Larson</p>

  <audio src="https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3" loop controls></audio>
  
</body>
</html>
```
