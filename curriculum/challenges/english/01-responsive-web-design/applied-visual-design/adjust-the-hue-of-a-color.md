---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
---

## Description
<section id='description'>
Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the <code>hsl()</code> property as an alternative way to pick a color by directly stating these characteristics.
<b>Hue</b> is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In <code>hsl()</code>, hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.
<b>Saturation</b> is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.
<b>Lightness</b> is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.
Here are a few examples of using <code>hsl()</code> with fully-saturated, normal lightness colors:
<table class="table table-striped"><thead><tr><th>Color</th><th>HSL</th></tr></thead><tbody><tr><td>red</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>yellow</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>green</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blue</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
Change the <code>background-color</code> of each <code>div</code> element based on the class names (<code>green</code>, <code>cyan</code>, or <code>blue</code>) using <code>hsl()</code>. All three should have full saturation and normal lightness.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>hsl()</code> property to declare the color green.
    testString: assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi));
  - text: Your code should use the <code>hsl()</code> property to declare the color cyan.
    testString: assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi));
  - text: Your code should use the <code>hsl()</code> property to declare the color blue.
    testString: assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi));
  - text: The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.
    testString: assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
  - text: The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.
    testString: assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color: 	hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

</section>
