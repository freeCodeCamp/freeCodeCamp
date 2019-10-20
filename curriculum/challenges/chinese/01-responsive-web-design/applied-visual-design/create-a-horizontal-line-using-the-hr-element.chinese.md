---
id: 587d781b367417b2b2512abb
title: Create a Horizontal Line Using the hr Element
challengeType: 0
videoUrl: ''
localeTitle: 使用hr元素创建水平线
---

## Description
<section id="description">您可以使用<code>hr</code>标记在其包含元素的宽度上添加水平线。这可用于定义主题更改或直观地分隔内容组。 </section>

## Instructions
<section id="instructions">在<code>h4</code>下面添加一个<code>hr</code>标签，其中包含卡片标题。 <strong>注意</strong> <br>在HTML中， <code>hr</code>是一个自动关闭标记，因此不需要单独的结束标记。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在标记中添加<code>hr</code>标记。
    testString: 'assert($("hr").length == 1, "Your code should add an <code>hr</code> tag to the markup.");'
  - text: <code>hr</code>标签应位于标题和段落之间。
    testString: 'assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi), "The <code>hr</code> tag should come between the title and the paragraph.");'

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
      <h4><s>Google</s>Alphabet</h4>

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
