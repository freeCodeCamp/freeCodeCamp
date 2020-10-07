---
id: 587d781c367417b2b2512abf
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7aKqu4'
forumTopicId: 301055
title: 降低元素的 opactiy
---

## Description
<section id='description'>
CSS 里的 <code>opacity</code> 属性用来设置元素的透明度。
<blockquote>值 1 代表完全不透明。<br>值 0.5 代表半透明。<br>值 0 代表完全透明。</blockquote>
透明度会应用到元素内的所有内容，不论是图片，还是文本，或是背景色。
</section>

## Instructions
<section id='instructions'>
使用 <code>links</code> class 选择所有的超链接并设置其 <code>opacity</code> 值为 0.7。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该使用 <code>links</code> class 选择所有的超链接并设置其 <code>opacity</code> 值为 0.7。'
    testString: assert(/\.links\s*{([\s\S]*?;)*\s*opacity\s*:\s*0*\.70*\s*(;[\s\S]*?|\s*)}/.test($('style').text()));

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
              