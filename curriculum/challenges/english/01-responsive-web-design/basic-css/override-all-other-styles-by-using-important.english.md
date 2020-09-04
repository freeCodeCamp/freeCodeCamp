---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
---

## Description
<section id='description'>
Yay! We just proved that inline styles will override all the CSS declarations in your <code>style</code> element.
But wait. There's one last way to override CSS. This is the most powerful method of all. But before we do it, let's talk about why you would ever want to override CSS.
In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use <code>!important</code>
Let's go all the way back to our <code>pink-text</code> class declaration. Remember that our <code>pink-text</code> class was overridden by subsequent class declarations, id declarations, and inline styles.
</section>

## Instructions
<section id='instructions'>
Let's add the keyword <code>!important</code> to your pink-text element's color declaration to make 100% sure that your <code>h1</code> element will be pink.
An example of how to do this is:
<code>color: red !important;</code>
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
  - text: Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.
    testString: assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
  - text: Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.
    testString: assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g));
  - text: Your <code>h1</code> element should be pink.
    testString: assert($("h1").css("color") === "rgb(255, 192, 203)");

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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

</section>
