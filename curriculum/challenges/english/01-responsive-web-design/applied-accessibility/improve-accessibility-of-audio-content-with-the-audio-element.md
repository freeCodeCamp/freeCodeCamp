---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

HTML5's `audio` element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.

The `audio` tag supports the `controls` attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.

Here's an example:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Note:** Multimedia content usually has both visual and auditory components. It needs synchronized captions and a transcript so users with visual and/or auditory impairments can access it. Generally, a web developer is not responsible for creating the captions or transcript, but needs to know to include them.

# --instructions--

Time to take a break from Camper Cat and meet fellow camper Zersiax (@zersiax), a champion of accessibility and a screen reader user. To hear a clip of his screen reader in action, add an `audio` element after the `p`. Include the `controls` attribute. Then place a `source` tag inside the `audio` tags with the `src` attribute set to `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` and `type` attribute set to `"audio/mpeg"`.

**Note:** The audio clip may sound fast and be difficult to understand, but that is a normal speed for screen reader users.

# --hints--

Your code should have one `audio` tag.

```js
assert($('audio').length === 1);
```

Your `audio` element should have a closing tag.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

The `audio` tag should have the `controls` attribute.

```js
assert($('audio').attr('controls'));
```

Your code should have one `source` tag.

```js
assert($('source').length === 1);
```

Your `source` tag should be inside the `audio` tags.

```js
assert($('audio').children('source').length === 1);
```

The value for the `src` attribute on the `source` tag should match the link in the instructions exactly.

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

Your code should include a `type` attribute on the `source` tag with a value of audio/mpeg.

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
