---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>h1</code> <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: يجب أن يحتوي <code>&lt;style&gt;</code> على فئة CSS <code>pink-text</code> يغير <code>color</code> .
    testString: 'assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g), "Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.");'
  - text: ''
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

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
