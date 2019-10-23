---
id: 587d781b367417b2b2512abd
title: Adjust the Size of a Header Versus a Paragraph Tag
challengeType: 0
videoUrl: ''
localeTitle: 调整标题的大小与段落标记
---

## Description
<section id="description">标题标记（ <code>h1</code>到<code>h6</code> ）的字体大小通常应大于段落标记的字体大小。这使用户更容易在视觉上理解页面上所有内容的布局和重要性级别。您可以使用<code>font-size</code>属性调整元素中文本的大小。 </section>

## Instructions
<section id="instructions">若要使标题明显大于段落，请将<code>h4</code>标记的<code>font-size</code>更改为27像素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该将<code>font-size</code>属性添加到设置为27像素的<code>h4</code>元素。
    testString: 'assert($("h4").css("font-size") == "27px", "Your code should add a <code>font-size</code> property to the <code>h4</code> element set to 27 pixels.");'

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

```js
// solution required
```
</section>
