---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/c8W9mHM'
---

## Description
<section id='description'>
Did you know there are other ways to represent colors in CSS? One of these ways is called hexadecimal code, or <code>hex code</code> for short.
We usually use <code>decimals</code>, or base 10 numbers, which use the symbols 0 to 9 for each digit. <code>Hexadecimals</code> (or <code>hex</code>) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0-9 represent the values zero to nine. Then A,B,C,D,E,F represent the values ten to fifteen. Altogether, 0 to F can represent a digit in <code>hexadecimal</code>, giving us 16 total possible values. You can find more information about <a target='_blank' href='https://en.wikipedia.org/wiki/Hexadecimal'>hexadecimal numbers here</a>.
In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) components. For example, <code>#000000</code> is black and is also the lowest possible value. You can find more information about the <a target='_blank' href='https://en.wikipedia.org/wiki/RGB_color_model'>RGB color system here</a>.
<blockquote>body {<br>&nbsp;&nbsp;color: #000000;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
Replace the word <code>black</code> in our <code>body</code> element's background-color with its <code>hex code</code> representation, <code>#000000</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>body</code> element the background-color of black.
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", ''Give your <code>body</code> element the background-color of black.'');'
  - text: Use the <code>hex code</code> for the color black instead of the word <code>black</code>.
    testString: 'assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi), ''Use the <code>hex code</code> for the color black instead of the word <code>black</code>.'');'

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

```js
// solution required
```
</section>
