---
id: 67fccc2463253b213a000142
title: Build a Multimedia Player
challengeType: 25
dashedName: lab-multimedia-player
demoType: onClick
---

# --description--

In the prior lessons, you were introduced to working with `audio` and `video` elements. In this lab, you will build out a multimedia player that will display an `audio` track and `video` with a transcript.

For the `audio` element, you will need to include a `source` element which is used to specify the media being used. 

Here is an example:

```html
<audio controls aria-label="descriptive label goes here">
  <source src="url-to-audio-goes-here" type="audio/mpeg">
</audio>
```

The `source` element can also be used in the `video` element like this:

```html
<video controls width="600" aria-label="descriptive label goes here">
  <source src="link-to-mp4-goes-here" type="video/mp4">
  <!-- Remaining code goes here -->  
</video>
```

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have an `h1` element for the main title of the page.
2. You should have three `section` elements.
3. Inside the first `section` element, you should have an `h2` element for the title of song playing.
4. Below the `h2` element, you should have an `audio` element with `controls` attribute and an `aria-label` attribute.
5. Inside the `audio` element, you should have a `source` element with a `src` attribute pointing to an audio file and a `type` attribute. You are free to use this audio URL if you like: `https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3`
6. Inside the second `section` element, you should have an `h2` element for the title of the video playing.
7. Below the `h2` element, you should have a `video` element with `controls`, `width` attributes and an `aria-label` attribute.
8. Inside the `video` element, you should have a `source` element with a `src` attribute pointing to a video file and a `type` attribute. You are free to use this video URL if you like: `https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4`
9. Below the `source` element, you should have a `track` element with a `src` attribute pointing to a subtitles file and a `kind` attribute, a `srclang` attribute and a `label` attribute. You are free to use this subtitles URL if you like: `https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.vtt`
10. Inside the third `section` element, you should have an `h2` element for the title of the section eg. "Transcript".
11. Below the `h2` element, you should have a `p` element with the transcript of the video.

# --hints--

You should have an `h1` element.

```js
assert.isNotNull(document.querySelector("h1"));
```

Your `h1` should have some text representing the main title of the page.  

```js  
assert.isNotEmpty(document.querySelector("h1")?.textContent?.trim());  
```  

You should have three `section` elements.

```js
const sectionElements = document.querySelectorAll("section");
assert.lengthOf(sectionElements, 3);
```

The first `section` should contain an `h2` element.

```js
const sectionElements = document.querySelectorAll("section");
const firstSection = sectionElements[0];
assert.isNotNull(firstSection?.querySelector("h2"));
```

Your `h2` should have some text representing the title of the song playing.

```js
const firstSection = document.querySelectorAll("section")[0];
assert.isNotEmpty(firstSection?.querySelector("h2")?.textContent?.trim());
```

The first `section` should contain an `audio` element.  

```js
const firstSection = document.querySelectorAll("section")[0];
const audio = firstSection?.querySelector("audio");
assert.isNotNull(audio);
```

Your `audio` element should have a `controls` attribute.  

```js  
const firstSection = document.querySelectorAll("section")[0];  
const audio = firstSection?.querySelector("audio");  
assert.isTrue(audio?.hasAttribute("controls"));
```

Your `audio` element should have an `aria-label` attribute with text describing the audio.

```js
const firstSection = document.querySelectorAll("section")[0];  
const audio = firstSection?.querySelector("audio");  
assert.isTrue(audio?.hasAttribute("aria-label"));  

const ariaLabel = audio?.getAttribute("aria-label");  
assert.isString(ariaLabel);  
assert.isNotEmpty(ariaLabel.trim());
```

Your `audio` element should have a `source` element.

```js
const firstSection = document.querySelectorAll("section")[0];
const audio = firstSection?.querySelector("audio");
const source = audio?.querySelector("source");
assert.isNotNull(source);
```

Your `source` element should have a `src` attribute pointing to an audio file.

```js
const firstSection = document.querySelectorAll("section")[0];
const audio = firstSection?.querySelector("audio");
const source = audio?.querySelector("source");
assert.isTrue(source?.hasAttribute("src"));
assert.isTrue(source?.getAttribute("src")?.trim().length > 0);
```

Your `source` element should have a `type` attribute with a value specifying the type of the audio.

```js
const firstSection = document.querySelectorAll("section")[0];
const audio = firstSection?.querySelector("audio");
const source = audio?.querySelector("source");

assert.isTrue(source?.hasAttribute("type"));
assert.isTrue(source?.getAttribute("type")?.trim().length > 0);
```

The second `section` should contain an `h2` element.

```js
const sectionElements = document.querySelectorAll("section");
const h2 = sectionElements[1]?.querySelector("h2");
assert.isNotNull(h2);
```

Your `h2` should have some text representing the title of the video playing.

```js
assert.isNotEmpty(document.querySelector("h2")?.textContent?.trim());
```

The second `section` should contain a `video` element.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
assert.isNotNull(video);
```

Your `video` element should have a `controls` attribute.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
assert.isTrue(video?.hasAttribute("controls"));
```

Your `video` element should have a `width` attribute with a value specifying the width of the video.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
assert.isTrue(video?.hasAttribute("width"));

const width = video?.getAttribute("width");
assert.isTrue(width.trim().length > 0);
```

The `video` element should have a `source` element.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const source = video?.querySelector("source");
assert.isNotNull(source);
```

The `source` element should have a `src` attribute pointing to a video file.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const source = video?.querySelector("source");
assert.isTrue(source?.hasAttribute("src"));
assert.isTrue(source.getAttribute("src").trim().length > 0);
```

The `source` element should have a `type` attribute with a value specifying the type of video.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const source = video?.querySelector("source");
assert.isTrue(source?.hasAttribute("type"));
assert.isTrue(source.getAttribute("type").trim().length > 0);
```

Your `video` element should have a `track` element.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const track = video?.querySelector("track");
assert.isNotNull(track);
```

Your `track` element should have a `src` attribute pointing to a subtitles file.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const track = video?.querySelector("track");
assert.isTrue(track?.hasAttribute("src"));
assert.isTrue(track?.getAttribute("src")?.trim().length > 0);
```

Your `track` element should have a `kind` attribute with text describing the kind of file.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const track = video?.querySelector("track");
assert.isTrue(track?.hasAttribute("kind"));
assert.isTrue(track?.getAttribute("kind")?.trim().length > 0);
```

Your `track` element should have a `srclang` attribute with text describing the language of the subtitles.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const track = video?.querySelector("track");
assert.isTrue(track?.hasAttribute("srclang"));
assert.isTrue(track?.getAttribute("srclang")?.trim().length > 0);
```

Your `track` element should have a `label` attribute with text describing the language of the subtitles.

```js
const secondSection = document.querySelectorAll("section")[1];
const video = secondSection?.querySelector("video");
const track = video?.querySelector("track");
assert.isTrue(track?.hasAttribute("label"));
assert.isTrue(track?.getAttribute("label")?.trim().length > 0);
```

The third `section` should contain an `h2` element.

```js
const sectionElements = document.querySelectorAll("section");
const thirdSection = sectionElements[2];
assert.isNotNull(thirdSection.querySelector("h2"));
```

Your `h2` should have some text representing the title of the section.

```js
assert.isNotEmpty(document.querySelector("h2")?.textContent?.trim());
```

The third `section` should contain a `p` element for the transcript.

```js
const thirdSection = document.querySelectorAll("section")[2];
const transcript = thirdSection?.querySelector("p");
assert.isNotNull(transcript);
assert.isAbove(transcript.textContent.trim().length, 0);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multimedia Player</title>
</head>

<body>

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
  <title>Multimedia Player</title>
</head>
<body>
  <h1>Multimedia Player</h1>
  <section>
    <h2>Now Playing: Sailing Away</h2>
    <audio controls aria-label="Audio Player for Sailing Away">
        <source src="https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3" type="audio/mpeg">
    </audio>
  </section>

  <section>
    <h2>What is a map method and how does it work?</h2>
    <video controls width="600" aria-label="What is a map method and how does it work?">
      <source src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4" type="video/mp4">
      
      <track 
      src="what-is-a-map-method.vtt" 
      kind="captions" 
      srclang="en" 
      label="English" 
      default>

    </video>
  </section>

  <section>
    <h2>Transcript</h2>
    <p>What is a map method and how does it work? The map method is a powerful and widely used function in JavaScript that operates on arrays. It's designed to create a new array by applying a given function to each element of the original array. This method does not modify the original array, but instead returns the new array containing the results of the function applied to each element. 
    </p>
  </section>

</body>
</html> 
```
