---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
---

## Description
<section id='description'>
Instead of adjusting your overall background or the color of the text to make the foreground easily readable, you can add a <code>background-color</code> to the element holding the text you want to emphasize. This challenge uses <code>rgba()</code> instead of <code>hex</code> codes or normal <code>rgb()</code>.
<blockquote>rgba stands for:<br>&nbsp;&nbsp;r = red<br>&nbsp;&nbsp;g = green<br>&nbsp;&nbsp;b = blue<br>&nbsp;&nbsp;a = alpha/level of opacity</blockquote>
The RGB values can range from 0 to 255. The alpha value can range from 1, which is fully opaque or a solid color, to 0, which is fully transparent or clear. <code>rgba()</code> is great to use in this case, as it allows you to adjust the opacity. This means you don't have to completely block out the background.
You'll use <code>background-color: rgba(45, 45, 45, 0.1)</code> for this challenge. It produces a dark gray color that is nearly transparent given the low opacity value of 0.1.
</section>

## Instructions
<section id='instructions'>
To make the text stand out more, adjust the <code>background-color</code> of the <code>h4</code> element to the given <code>rgba()</code> value.
Also for the <code>h4</code>, remove the <code>height</code> property and add <code>padding</code> of 10px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.
    testString: assert(/(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(code.replace(/\s/g, '')));
  - text: Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.
    testString: assert($('h4').css('padding-top') == '10px' && $('h4').css('padding-right') == '10px' && $('h4').css('padding-bottom') == '10px' && $('h4').css('padding-left') == '10px');
  - text: The <code>height</code> property on the <code>h4</code> element should be removed.
    testString: assert(!($('h4').css('height') == '25px'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
