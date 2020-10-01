---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
---

## Description
<section id='description'>
So we've proven that id declarations override class declarations, regardless of where they are declared in your <code>style</code> element CSS.
There are other ways that you can override CSS. Do you remember inline styles?
</section>

## Instructions
<section id='instructions'>
Use an inline style to try to make our <code>h1</code> element white. Remember, in line styles look like this:
<code>&#60;h1 style="color: green;"&#62;</code>
Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the class <code>pink-text</code>.
    testString: assert($("h1").hasClass("pink-text"));
  - text: Your <code>h1</code> element should have the class <code>blue-text</code>.
    testString: assert($("h1").hasClass("blue-text"));
  - text: Your <code>h1</code> element should have the id of <code>orange-text</code>.
    testString: assert($("h1").attr("id") === "orange-text");
  - text: Your <code>h1</code> element should have an inline style.
    testString: assert(document.querySelector('h1[style]'));
  - text: Your <code>h1</code> element should be white.
    testString: assert($("h1").css("color") === "rgb(255, 255, 255)");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

</section>
