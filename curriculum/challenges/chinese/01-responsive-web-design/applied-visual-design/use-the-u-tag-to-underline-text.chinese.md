---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: ''
localeTitle: 使用u标签为文本加下划线
---

## Description
<section id="description">要为文本加下划线，您可以使用<code>u</code>标记。这通常用于表示一段文字很重要，或者需要记住的东西。使用<code>u</code>标签，浏览器应用<code>text-decoration: underline;</code>的CSS <code>text-decoration: underline;</code>对元素。 </section>

## Instructions
<section id="instructions">仅在“Ph.D. students”文本周围包裹<code>u</code>标签。 <strong>注意</strong> <br>当它可能与链接混淆时尽量避免使用<code>u</code>标签。 Anchor标签也有默认的带下划线的格式。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在标记中添加<code>u</code>标记。
    testString: 'assert($("u").length === 1, "Your code should add a <code>u</code> tag to the markup.");'
  - text: <code>u</code>标签应该包含文本“Ph.D. students”。
    testString: 'assert($("u").text() === "Ph.D. students", "The <code>u</code> tag should wrap around the text "Ph.D. students".");'

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
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
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
