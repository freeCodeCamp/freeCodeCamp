---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0

videoUrl: ''
localeTitle: Adjust the Height of an Element Using the height Property
---

## Description
<section id='description'>
和<code>width</code>属性类似，你可以使用 CSS 里面的<code>height</code>属性来指定元素的高度。下面这个例子把图片的高度设置为 20px：
<blockquote>img {<br>&nbsp;&nbsp;height: 20px;<br>}</blockquote>
</section>

## Instructions
<section id='instructions'>
给<code>h4</code>标签添加<code>height</code>属性并设置值为 25px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该设置<code>h4</code>的<code>height</code>属性，使其值为<code>25px</code>。
    testString: assert($('h4').css('height') == '25px', '你应该设置<code>h4</code>的<code>height</code>属性，使其值为<code>25px</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  h4 {,    text-align: center;,    ,  },  p {,    text-align: justify;,  },  .links {,    margin-right: 20px;,    text-align: left;,  },  .fullCard {,    width: 245px;,    border: 1px solid #ccc;,    border-radius: 5px;,    margin: 10px 5px;,    padding: 4px;,  },  .cardContent {,    padding: 10px;,  },</style>,<div class="fullCard">,  <div class="cardContent">,    <div class="cardText">,      <h4>Google</h4>,      <p>Google 由在斯坦福大学攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>,    </div>,    <div class="cardLinks">,      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a>,      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">谢尔盖·布林</a>,    </div>,  </div>,</div>
```





</div>





</section>

              