---
id: 587d781b367417b2b2512abc
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
title: 调整文本的背景色
---

## Description
<section id='description'>
为了让页面更美观，除了设置整个页面的背景色以及文字颜色外，你还可以单独设置文字的背景色，即在文字的父元素上添加 <code>background-color</code> 属性。在本挑战里我们将使用 <code>rgba()</code> 颜色，而不是之前学到的 <code>hex</code> 编码或者 <code>rgb()</code> 颜色。
<blockquote>rgba 代表：<br>&nbsp;&nbsp;r = red 红色<br>&nbsp;&nbsp;g = green 绿色<br>&nbsp;&nbsp;b = blue 蓝色<br>&nbsp;&nbsp;a = alpha 透明度</blockquote>
RGB 值可以在 0 到 255 之间。alpha 值可以在 0 到 1 之间，其中 0 代表完全透明，1 代表完全不透明。<code>rgba()</code> 非常棒，因为你可以设置颜色的透明度，这意味着你可以做出一些很漂亮的半透明效果。
在本挑战里你将会用到这个代码 <code>background-color: rgba(45, 45, 45, 0.1)</code>。它表示背景是黑灰色，因为设置了透明度为 0.1，所以几乎是透明的。
</section>

## Instructions
<section id='instructions'>
为了让文字更醒目，设置 <code>h4</code> 元素的 <code>background-color</code> 属性值为上面指定的 <code>rgba()</code>。
同时移除 <code>h4</code> 的 <code>height</code> 属性，并添加 <code>padding</code> 属性，值为 10px。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该给 <code>h4</code> 元素添加一个 <code>background-color</code> 属性并且赋值 <code>rgba(45, 45, 45, 0.1)</code>。'
    testString: assert(code.match(/(background-color|background):\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\);/gi));
  - text: '你应该给 <code>h4</code> 元素添加一个 <code>padding</code> 属性并且赋值 <code>10px</code>。'
    testString: assert($('h4').css('padding-top') == '10px' && $('h4').css('padding-right') == '10px' && $('h4').css('padding-bottom') == '10px' && $('h4').css('padding-left') == '10px');
  - text: '<code>h4</code> 元素的 <code>height</code> 属性应该被移除。'
    testString: assert(!($('h4').css('height') == '25px'));

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
              