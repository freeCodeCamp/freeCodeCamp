---
id: 587d781a367417b2b2512ab7
challengeType: 0
videoUrl: 'https://scrimba.com/c/ceJNBSb'
forumTopicId: 1
title: 使用 strong 标签加粗文本
---

## Description
<section id='description'>
术语：Strong => s => 加粗。
你可以使用 <code>strong</code> 标签来加粗文字。添加了 <code>strong</code> 标签后，浏览器会自动给元素应用 <code>font-weight:bold;</code>。
</section>

## Instructions
<section id='instructions'>
在 <code>p</code> 标签里的 “斯坦福大学” 外面添加 <code>strong</code> 标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该有一个 <code>strong</code> 标签。'
    testString: assert($('strong').length == 1);
  - text: '<code>strong</code> 标签应该在 <code>p</code> 标签里。'
    testString: assert($('p').children('strong').length == 1);
  - text: '<code>strong</code> 标签应该包围 “斯坦福大学”。'
    testString: assert($('strong').text().match(/^Stanford University$/gi));

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
      <p>Google 由在斯坦福大学攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>
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

```js
// solution required
```

</section>
              