---
id: 587d781a367417b2b2512ab9
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJRBtp'
forumTopicId: 301078
title: 使用 em 标签强调文本
---

## Description
<section id='description'>
术语：emphasis => em => 强调。
你可以使用 <code>em</code> 标签来强调文本。由于浏览器会自动给元素应用 <code>font-style: italic;</code>，所以文本会显示为斜体。
</section>

## Instructions
<section id='instructions'>
在 <code>p</code> 标签里面嵌套 <code>em</code> 标签来强调文本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该添加一个 <code>em</code> 标签。'
    testString: assert($('em').length == 1);
  - text: '<code>em</code> 标签应该嵌套在 <code>p</code> 标签里面。'
    testString: assert($('p').children().length == 1 && $('em').children().length == 2);

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
      <p>Google 由在<strong>斯坦福大学</strong>攻读<u>理工博士</u>的拉里·佩奇和谢尔盖·布林共同创建。</p>
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
              