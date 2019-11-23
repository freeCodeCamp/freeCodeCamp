---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
---

## Description
<section id='description'>
HTML5's <code>audio</code> element gives semantic meaning when it wraps sound or audio stream content in your markup. Audio content also needs a text alternative to be accessible to people who are deaf or hard of hearing. This can be done with nearby text on the page or a link to a transcript.
The <code>audio</code> tag supports the <code>controls</code> attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.
Here's an example:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

<strong>Note:</strong> Multimedia content usually has both visual and auditory components. It needs synchronized captions and a transcript so users with visual and/or auditory impairments can access it. Generally, a web developer is not responsible for creating the captions or transcript, but needs to know to include them.
</section>

## Instructions
<section id='instructions'>
Time to take a break from Camper Cat and meet fellow camper Zersiax (@zersiax), a champion of accessibility and a screen reader user. To hear a clip of his screen reader in action, add an <code>audio</code> element after the <code>p</code>. Include the <code>controls</code> attribute. Then place a <code>source</code> tag inside the <code>audio</code> tags with the <code>src</code> attribute set to "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" and <code>type</code> attribute set to "audio/mpeg".
<strong>Note:</strong> The audio clip may sound fast and be difficult to understand, but that is a normal speed for screen reader users.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>audio</code> tag.
    testString: assert($('audio').length === 1);
  - text: Your <code>audio</code> element should have a closing tag.
    testString: assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g));
  - text: The <code>audio</code> tag should have the <code>controls</code> attribute.
    testString: assert($('audio').attr('controls'));
  - text: Your code should have one <code>source</code> tag.
    testString: assert($('source').length === 1);
  - text: Your <code>source</code> tag should be inside the <code>audio</code> tags.
    testString: assert($('audio').children('source').length === 1);
  - text: The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.
    testString: assert($('source').attr('src') === 'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3');
  - text: Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.
    testString: assert($('source').attr('type') === 'audio/mpeg');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
