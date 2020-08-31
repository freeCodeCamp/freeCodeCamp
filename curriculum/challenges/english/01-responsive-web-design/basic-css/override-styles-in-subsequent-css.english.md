---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
---

## Description
<section id='description'>
Our "pink-text" class overrode our <code>body</code> element's CSS declaration!
We just proved that our classes will override the <code>body</code> element's CSS. So the next logical question is, what can we do to override our <code>pink-text</code> class?
</section>

## Instructions
<section id='instructions'>
Create an additional CSS class called <code>blue-text</code> that gives an element the color blue. Make sure it's below your <code>pink-text</code> class declaration.
Apply the <code>blue-text</code> class to your <code>h1</code> element in addition to your <code>pink-text</code> class, and let's see which one wins.
Applying multiple class attributes to a HTML element is done with a space between them like this:
<code>class="class1 class2"</code>
<strong>Note:</strong> It doesn't matter which order the classes are listed in the HTML element.
However, the order of the <code>class</code> declarations in the <code>&#60;style&#62;</code> section is what is important. The second declaration will always take precedence over the first. Because <code>.blue-text</code> is declared second, it overrides the attributes of <code>.pink-text</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the class <code>pink-text</code>.
    testString: assert($("h1").hasClass("pink-text"));
  - text: Your <code>h1</code> element should have the class <code>blue-text</code>.
    testString: assert($("h1").hasClass("blue-text"));
  - text: Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.
    testString: assert($(".pink-text").hasClass("blue-text"));
  - text: Your <code>h1</code> element should be blue.
    testString: assert($("h1").css("color") === "rgb(0, 0, 255)");

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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
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
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

</section>
