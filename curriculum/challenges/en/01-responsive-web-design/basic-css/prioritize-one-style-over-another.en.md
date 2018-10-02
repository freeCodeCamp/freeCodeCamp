---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
---

## Description
<section id='description'>
Sometimes your HTML elements will receive multiple styles that conflict with one another.
For example, your <code>h1</code> element can't be both green and pink at the same time.
Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class <em>override</em> the <code>body</code> element's <code>color: green;</code> CSS property?
</section>

## Instructions
<section id='instructions'>
Create a CSS class called <code>pink-text</code> that gives an element the color pink.
Give your <code>h1</code> element the class of <code>pink-text</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>h1</code> element should have the class <code>pink-text</code>.
  testString: 'assert($("h1").hasClass("pink-text"), ''Your <code>h1</code> element should have the class <code>pink-text</code>.'');'
- text: 'Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.'
  testString: 'assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g), ''Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.'');'
- text: Your <code>h1</code> element should be pink.
  testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", ''Your <code>h1</code> element should be pink.'');'

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
</style>
<h1>Hello World!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
