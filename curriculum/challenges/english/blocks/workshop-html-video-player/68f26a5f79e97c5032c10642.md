---
id: 68f26a5f79e97c5032c10642
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

You have used a video file with an `mp4` file extension, and you need to tell the browser that so it knows how to read the file.

You will use the `type` attribute to specify the `video/mp4` MIME type.

MIME (Multipurpose Internet Mail Extensions) is a standard to describe documents in other forms besides ASCII text, for example, audio, video, and images.

MP4, formally known as MPEG-4 Part 14, is a digital multimedia container format. It is widely used for storing video and audio, but it can also include other data types like subtitles and still images. MP4 files are designed for streaming over the Internet and are compatible with many devices and platforms.

Now, add the `type` attribute and the value `video/mp4`.

# --hints--

Your `source` element should have a `type` attribute.

```js
const source = document.querySelector('source');
assert.isTrue(source?.hasAttribute('type'));
```

Your `source` element should have a `type` attribute with the value `video/mp4`.

```js
const source = document.querySelector('source');
assert.strictEqual(source?.getAttribute('type'), 'video/mp4');
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
--fcc-editable-region--
      
--fcc-editable-region--
    >
  </video>
</body>
</html>
```
