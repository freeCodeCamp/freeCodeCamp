---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
---

## Description
<section id='description'>
Now let's start fresh and talk about CSS inheritance.
Every HTML page has a <code>body</code> element.
</section>

## Instructions
<section id='instructions'>
We can prove that the <code>body</code> element exists here by giving it a <code>background-color</code> of black.
We can do this by adding the following to our <code>style</code> element:

```css
body {
  background-color: black;
}
```

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>body</code> element should have the <code>background-color</code> of black.
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: Your CSS rule should be properly formatted with both opening and closing curly brackets.
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));
  - text: Your CSS rule should end with a semi-colon.
    testString: assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

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
}
</style>
```

</section>
