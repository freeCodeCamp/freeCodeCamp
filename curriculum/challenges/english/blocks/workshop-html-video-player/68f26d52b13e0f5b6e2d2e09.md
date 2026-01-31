---
id: 68f26d52b13e0f5b6e2d2e09
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Another common MIME type is the `video/webm` MIME type.

WebM is an open-source audiovisual media file format developed by Google, primarily designed for web-based media content. It supports video codecs like VP8, VP9, and AV1, and audio codecs such as Vorbis and Opus, making it a popular choice for HTML5 video and audio elements.

Below your first `source` element, add another `source` element and give it a `src` attribute with the value `https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm` and a `type` attribute with the value `video/webm`.

# --hints--

You should have a second `source` element.

```js
assert.exists(document.querySelector('video > source:nth-of-type(2)'));
```

Your second `source` element should have a `src` attribute.

```js
const source = document.querySelector('source:nth-of-type(2)');
assert.isTrue(source?.hasAttribute('src'));
```

Your second `source` element should have a `src` attribute with a value of `https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm`.

```js
const source = document.querySelector('source:nth-of-type(2)');
assert.strictEqual(source?.getAttribute('src'), 'https://cdn.freecodecamp.org/curriculum/labs/mapmethod.webm');
```

Your second `source` element should have a `type` attribute.

```js
const source = document.querySelector('source:nth-of-type(2)');
assert.isTrue(source?.hasAttribute('type'));
```

Your second `source` element should have a `type` attribute with a value of `video/webm`.

```js
const source = document.querySelector('source:nth-of-type(2)');
assert.strictEqual(source?.getAttribute('type'), 'video/webm');
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
  <video
    width="640"
    loop
    controls
    muted
    poster="https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg"
  >
    <source
      src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4"
      type="video/mp4"
    >
--fcc-editable-region--
    
--fcc-editable-region--
  </video>
</body>
</html>
```
