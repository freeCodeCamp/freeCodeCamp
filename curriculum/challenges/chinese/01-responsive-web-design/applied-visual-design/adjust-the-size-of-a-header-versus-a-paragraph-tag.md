---
id: 587d781b367417b2b2512abd
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bRPTz'
forumTopicId: 301037
title: 调整标题与段落的大小
---

## Description
<section id='description'>
标题（<code>h1</code> 到 <code>h6</code>）的文字应该比段落的文字大，这样可以让用户更直观的看到页面的布局，同时能区别出不同元素的重要程度，更方便用户捕捉关键的信息。你可以使用 <code>font-size</code> 属性来设置元素内文字的大小。
</section>

## Instructions
<section id='instructions'>
把 <code>h4</code> 标签的 <code>font-size</code >改成 27 像素，让标题更醒目。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该给 <code>h4</code> 元素添加一个 <code>font-size</code> 属性并且赋值 <code>27px</code>。'
    testString: assert($('h4').css('font-size') == '27px');

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
              