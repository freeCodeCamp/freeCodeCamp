---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: ''
localeTitle: 使用text-align属性创建视觉平衡
---

## Description
<section id="description">本课程的这一部分侧重于应用视觉设计。第一组挑战建立在给定的卡布局上，以显示许多核心原则。文本通常是Web内容的很大一部分。 CSS有几个选项可以将它与<code>text-align</code>属性<code>text-align</code> 。 <code>text-align: justify;</code>导致除最后一行之外的所有文本行都与行框的左右边缘相交。 <code>text-align: center;</code>文本<code>text-align: right;</code>右对齐文本和<code>text-align: left;</code> （默认值）左对齐文本。 </section>

## Instructions
<section id="instructions">将<code>h4</code>标签的文本（称为“Google”）与中心对齐。然后证明段落标记是合理的，其中包含有关Google如何成立的信息。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>h4</code>标记上的text-align属性将其设置为居中。
    testString: 'assert($("h4").css("text-align") == "center", "Your code should use the text-align property on the <code>h4</code> tag to set it to center.");'
  - text: 您的代码应使用<code>p</code>标记上的text-align属性将其设置为对齐。
    testString: 'assert($("p").css("text-align") == "justify", "Your code should use the text-align property on the <code>p</code> tag to set it to justify.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

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
