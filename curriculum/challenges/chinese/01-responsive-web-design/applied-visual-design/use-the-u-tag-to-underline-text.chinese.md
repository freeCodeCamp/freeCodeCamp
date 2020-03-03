---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6aQCL'
forumTopicId: 301082
localeTitle: 使用 u 标签给文本添加下划线
---

## Description
<section id='description'>
术语：Underline => u => 下划线。
你可以使用 <code>u</code> 标签来给文字添加下划线。添加了 <code>u</code> 标签后，浏览器会自动给元素应用 <code>text-decoration: underline;</code>。
</section>

## Instructions
<section id='instructions'>
给 “理工博士” 添加 <code>u</code> 标签，不要给整个 class 为 <code>cardText</code> 的父 <code>div</code> 添加。
<strong>注意：</strong>锚点默认给文本添加下划线，如果 <code>u</code> 标签的下划线和页面的锚点混淆，请避免使用它。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有一个 <code>u</code> 标签。
    testString: assert($('u').length === 1);
  - text: <code>u</code> 标签应该包围 “理工博士”。
    testString: assert($('u').text() === '理工博士');

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
      <p>Google 由在<strong>斯坦福大学</strong>攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>
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
              