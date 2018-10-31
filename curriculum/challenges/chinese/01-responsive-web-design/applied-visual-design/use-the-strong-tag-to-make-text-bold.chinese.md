---
id: 587d781a367417b2b2512ab7
title: Use the strong Tag to Make Text Bold
challengeType: 0
videoUrl: ''
localeTitle: 使用强标记使文字粗体
---

## Description
<section id="description">要使文本变为粗体，可以使用<code>strong</code>标记。这通常用于引起对文本的注意，并象征着它很重要。使用<code>strong</code>标记，浏览器应用CSS的<code>font-weight: bold;</code>对元素。 </section>

## Instructions
<section id="instructions">在<code>p</code>标签内围绕“斯坦福大学”包裹一个<code>strong</code>的标签。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该在标记中添加一个<code>strong</code>标记。
    testString: 'assert($("strong").length == 1, "Your code should add one <code>strong</code> tag to the markup.");'
  - text: <code>strong</code>标记应该在<code>p</code>标记内。
    testString: 'assert($("p").children("strong").length == 1, "The <code>strong</code> tag should be inside the <code>p</code> tag.");'
  - text: <code>strong</code>标签应该包含“斯坦福大学”这个词。
    testString: 'assert($("strong").text().match(/^Stanford University$/gi), "The <code>strong</code> tag should wrap around the words "Stanford University".");'

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
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
