---
id: 587d781c367417b2b2512ac0
title: Use the text-transform Property to Make Text Uppercase
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
localeTitle: 使用 text-transform 属性给文本添加大写效果
---

## Description
<section id='description'>
CSS 里面的 <code>text-transform</code> 属性来改变英文中字母的大小写。它通常用来统一页面里英文的显示，且无需直接改变 HTML 元素中的文本。
下面的表格展示了<code>text-transform</code> 的不同值对文字 “Transform me” 的影响。
<table class="table table-striped"><thead><th>Value<th>Result<tbody><tr><td><code>lowercase</code><td>"transform me"<tr><td><code>uppercase</code><td>"TRANSFORM ME"<tr><td><code>capitalize</code><td>"Transform Me"<tr><td><code>initial</code><td>使用默认值<tr><td><code>inherit</code><td>使用父元素的 <code>text-transform</code> 值。<tr><td><code>none</code><td><strong>Default:</strong>不改变文字。</td></table>
</section>

## Instructions
<section id='instructions'>
使用 <code>text-transform</code> 属性把 <code>h4</code> 内的英文的所有字母变成大写。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h4</code> 内的英文的所有字母应该为大写。'
    testString: assert($('h4').css('text-transform') === 'uppercase');
  - text: '<code>h4</code> 内的原文不能被改变。'
    testString: assert(($('h4').text() !== $('h4').text().toUpperCase()));

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
    font-size: 27px;
    
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
<div class="fullCard" id="thumbnail">
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
              