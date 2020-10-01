---
id: 587d781b367417b2b2512abb
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
title: 使用 hr 标签创建水平线
---

## Description
<section id='description'>
术语：Horizontal Rule => hr => 水平线。
你可以用 <code>hr</code> 标签来创建一条宽度撑满父元素的水平线。它一般用来表示文档主题的改变，在视觉上将文档分隔成几个部分。
</section>

## Instructions
<section id='instructions'>
在包含卡片标题的 <code>h4</code> 下面添加一个 <code>hr</code> 标签。
<strong>注意</strong><br>在 HTML 里，<code>hr</code> 是自关闭标签，所以不需要一个单独的关闭标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该添加一个 <code>hr</code> 标签。'
    testString: assert($('hr').length == 1);
  - text: '<code>hr</code> 标签应该在标题和段落之间。'
    testString: assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));

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
              