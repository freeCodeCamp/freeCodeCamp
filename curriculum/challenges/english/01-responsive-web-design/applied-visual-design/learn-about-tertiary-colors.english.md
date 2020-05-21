---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c3bRDAb'
forumTopicId: 301057
---

## Description
<section id='description'>
Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.
Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, within the RGB color model, red (primary) and yellow (secondary) make orange (tertiary). This adds six more colors to a simple color wheel for a total of twelve.
There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors.
Here are three colors created using the split-complement scheme:
<table class="table table-striped"><thead><tr><th>Color</th><th>Hex Code</th></tr><thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>raspberry</td><td>#FF007F</td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
Change the <code>background-color</code> property of the <code>orange</code>, <code>cyan</code>, and <code>raspberry</code> classes to their respective colors. Make sure to use the hex codes and not the color names.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.
    testString: assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
  - text: The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.
    testString: assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
  - text: All <code>background-color</code> values for the color classes should be hex codes and not color names.
    testString: assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));

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

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
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

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

</section>
