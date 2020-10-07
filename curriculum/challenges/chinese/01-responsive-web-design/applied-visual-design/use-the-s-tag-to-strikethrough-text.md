---
id: 587d781b367417b2b2512aba
challengeType: 0
videoUrl: ''
forumTopicId: 301079
title: 使用 s 标签给文本添加删除线
---

## Description
<section id='description'>
术语：Strikethrough => s => 删除线。
你可以用 <code>s</code> 标签来给文字添加删除线，<s>我是明晃晃的删除线</s>，它代表着这段文字不再有效。添加了 <code>s</code> 标签后，浏览器会自动给元素应用 <code>text-decoration: line-through;</code>。
</section>

## Instructions
<section id='instructions'>
在 <code>h4</code> 标签里的 “Google” 外添加 <code>s</code> 标签，然后在 <code>s</code> 标签外面添加单词 Alphabet，Alphabet 不要有删除线格式。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该添加一个 <code>s</code> 标签。'
    testString: assert($('s').length == 1);
  - text: ' <code>s</code> 标签应该在 <code>h4</code> 标签内的 Google 文字外面，它不应该包含单词 Alphabet。'
    testString: assert($('h4 > s').text().match(/Google/gi) && !$('h4 > s').text().match(/Alphabet/gi));
  - text: '<code>h4</code> 标签内应该有单词 Alphabet，Alphabet 应该没有删除线样式。'
    testString: assert($('h4').html().match(/Alphabet/gi));

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
      <p><em>Google 由在<strong>斯坦福大学</strong>攻读<u>理工博士</u>的拉里·佩奇和谢尔盖·布林共同创建。</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              