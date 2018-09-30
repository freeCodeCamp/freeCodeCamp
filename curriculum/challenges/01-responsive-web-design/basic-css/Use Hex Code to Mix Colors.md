---
id: bad87fee1348bd9aedf08721
title: Use Hex Code to Mix Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
---

## Description
<section id='description'>
To review, hex codes use 6 hexadecimal digits to represent colors, two each for red (R), green (G), and blue (B) components.
From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!
For example, orange is pure red, mixed with some green, and no blue. In hex code, this translates to being <code>#FFA500</code>.
The digit <code>0</code> is the lowest number in hex code, and represents a complete absence of color.
The digit <code>F</code> is the highest number in hex code, and represents the maximum possible brightness.
</section>

## Instructions
<section id='instructions'>
Replace the color words in our <code>style</code> element with their correct hex codes.
<table class='table table-striped'><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></table>
</section>

## Tests
<section id='tests'>

```yml
- text: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.
  testString: 'assert($(".red-text").css("color") === "rgb(255, 0, 0)", "Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.");'
- text: Use the <code>hex code</code> for the color red instead of the word <code>red</code>.
  testString: 'assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color red instead of the word <code>red</code>.");'
- text: Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.
  testString: 'assert($(".green-text").css("color") === "rgb(0, 255, 0)", "Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.");'
- text: Use the <code>hex code</code> for the color green instead of the word <code>green</code>.
  testString: 'assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color green instead of the word <code>green</code>.");'
- text: Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.
  testString: 'assert($(".dodger-blue-text").css("color") === "rgb(30, 144, 255)", "Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.");'
- text: Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.
  testString: 'assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#1E90FF\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.");'
- text: Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.
  testString: 'assert($(".orange-text").css("color") === "rgb(255, 165, 0)", "Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.");'
- text: Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.
  testString: 'assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), "Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
