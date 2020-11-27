---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
---

## Description

<section id='description'>

Another way you can represent colors in CSS is by using `RGB` values.

The RGB value for black looks like this:

`rgb(0, 0, 0)`

The RGB value for white looks like this:

`rgb(255, 255, 255)`

Instead of using six hexadecimal digits like you do with hex code, with `RGB` you specify the brightness of each color with a number between 0 and 255.

If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So `RGB`, which starts counting from zero, has the exact same number of possible values as hex code.

Here's an example of how you'd change the body background to orange using its RGB code.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

</section>

## Instructions

<section id='instructions'>

Let's replace the hex code in our `body` element's background color with the RGB value for black: `rgb(0, 0, 0)`

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: Your <code>body</code> element should have a black background.
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: You should use <code>rgb</code> to give your <code>body</code> element a color of black.
    testString: assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
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
    background-color: rgb(0, 0, 0);
  }
</style>
```

</section>
