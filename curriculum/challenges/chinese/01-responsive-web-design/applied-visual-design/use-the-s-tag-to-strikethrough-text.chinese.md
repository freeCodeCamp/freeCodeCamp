---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
challengeType: 0
videoUrl: ''
localeTitle: 使用s标记删除线文本
---

## Description
<section id="description">要删除文本，即水平线跨越字符时，可以使用<code>s</code>标记。它表明一段文字不再有效。使用<code>s</code>标签，浏览器应用<code>text-decoration: line-through;</code>的CSS <code>text-decoration: line-through;</code>对元素。 </section>

## Instructions
<section id="instructions">将<code>s</code>标签包裹在<code>h4</code>标签内的“Google”周围，然后在其旁边添加单词Alphabet，它不应具有删除线格式。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
