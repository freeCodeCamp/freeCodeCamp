---
id: 587d781c367417b2b2512abf
title: Decrease the Opacity of an Element
challengeType: 0
videoUrl: ''
localeTitle: 降低元素的不透明度
---

## Description
<section id="description"> CSS中的<code>opacity</code>属性用于调整不透明度，或相反，用于调整项目的透明度。 <blockquote>值1是不透明的，根本不透明。 <br>值0.5是半透明的。 <br>值0完全透明。 </blockquote>给定的值将应用于整个元素，无论是具有一定透明度的图像，还是文本块的前景色和背景色。 </section>

## Instructions
<section id="instructions">使用<code>links</code>类将锚标记的<code>opacity</code>设置为0.7以选择它们。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应通过选择<code>links</code>类将锚点标记上的<code>opacity</code>属性设置为0.7。
    testString: 'assert.approximately(parseFloat($(".links").css("opacity")), 0.7, 0.1, "Your code should set the <code>opacity</code> property to 0.7 on the anchor tags by selecting the class of <code>links</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;

  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
<div class="fullCard" id="thumbnail">
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

```js
// solution required
```
</section>
