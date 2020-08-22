---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
---

## Description
<section id='description'>
Now we've proven that every HTML page has a <code>body</code> element, and that its <code>body</code> element can also be styled with CSS.
Remember, you can style your <code>body</code> element just like any other HTML element, and all your other elements will inherit your <code>body</code> element's styles.
</section>

## Instructions
<section id='instructions'>
First, create a <code>h1</code> element with the text <code>Hello World</code>
Then, let's give all elements on your page the color of <code>green</code> by adding <code>color: green;</code> to your <code>body</code> element's style declaration.
Finally, give your <code>body</code> element the font-family of <code>monospace</code> by adding <code>font-family: monospace;</code> to your <code>body</code> element's style declaration.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should create an <code>h1</code> element.
    testString: assert(($("h1").length > 0));
  - text: Your <code>h1</code> element should have the text <code>Hello World</code>.
    testString: assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)));
  - text: Your <code>h1</code> element should have a closing tag.
    testString: assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length);
  - text: Your <code>body</code> element should have the <code>color</code> property of <code>green</code>.
    testString: assert(($("body").css("color") === "rgb(0, 128, 0)"));
  - text: Your <code>body</code> element should have the <code>font-family</code> property of <code>monospace</code>.
    testString: assert(($("body").css("font-family").match(/monospace/i)));
  - text: Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.
    testString: assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)));
  - text: Your <code>h1</code> element should inherit the color green from your <code>body</code> element.
    testString: assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }

</style>
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

</style>
<h1>Hello World!</h1>
```

</section>
