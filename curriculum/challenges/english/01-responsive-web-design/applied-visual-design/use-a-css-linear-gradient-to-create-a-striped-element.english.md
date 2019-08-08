---
id: 587d78a5367417b2b2512ad7
title: Use a CSS Linear Gradient to Create a Striped Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
---

## Description
<section id='description'>
The <code>repeating-linear-gradient()</code> function is very similar to <code>linear-gradient()</code> with the major difference that it repeats the specified gradient pattern. <code>repeating-linear-gradient()</code> accepts a variety of values, but for simplicity, you'll work with an angle value and color stop values in this challenge.
The angle value is the direction of the gradient. Color stops are like width values that mark where a transition takes place, and are given with a percentage or a number of pixels.
In the example demonstrated in the code editor, the gradient starts with the color <code>yellow</code> at 0 pixels which blends into the second color <code>blue</code> at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color <code>green</code>, which itself blends into the fourth color value <code>red</code> as that is 80 pixels away from the beginning of the gradient.
For this example, it helps to think about the color stops as pairs where every two colors blend together.
<code>0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px</code>
If every two color stop values are the same color, the blending isn't noticeable because it's between the same color, followed by a hard transition to the next color, so you end up with stripes.
</section>

## Instructions
<section id='instructions'>
Make stripes by changing the <code>repeating-linear-gradient()</code> to use a gradient angle of <code>45deg</code>, then set the first two color stops to <code>yellow</code>, and finally the second two color stops to <code>black</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The angle of the <code>repeating-linear-gradient()</code> should be 45deg.
    testString: assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
  - text: The angle of the <code>repeating-linear-gradient()</code> should no longer be 90deg
    testString: assert(!code.match(/90deg/gi));
  - text: The color stop at 0 pixels should be <code>yellow</code>.
    testString: assert(code.match(/yellow\s+?0(px)?/gi));
  - text: One color stop at 40 pixels should be <code>yellow</code>.
    testString: assert(code.match(/yellow\s+?40px/gi));
  - text: The second color stop at 40 pixels should be <code>black</code>.
    testString: assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
  - text: The last color stop at 80 pixels should be <code>black</code>.
    testString: assert(code.match(/black\s+?80px/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

</section>
