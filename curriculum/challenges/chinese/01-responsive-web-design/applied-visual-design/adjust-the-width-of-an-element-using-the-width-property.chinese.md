---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: ''
localeTitle: 使用width属性调整元素的宽度
---

## Description
<section id="description">您可以使用CSS中的<code>width</code>属性指定元素的<code>width</code> 。值可以以相对长度单位（例如em），绝对长度单位（例如px）或其包含的父元素的百分比给出。这是一个将图像宽度更改为220px的示例： <blockquote> img { <br>宽度：220px; <br> } </blockquote></section>

## Instructions
<section id="instructions">将<code>width</code>属性添加到整个卡并将其设置为绝对值245px。使用<code>fullCard</code>类选择元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>fullCard</code>类选择器将卡的<code>width</code>属性更改为245像素。
    testString: 'assert(code.match(/.fullCard\s*{[\s\S][^}]*\n*^\s*width\s*:\s*245px\s*;/gm), "Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {

    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
