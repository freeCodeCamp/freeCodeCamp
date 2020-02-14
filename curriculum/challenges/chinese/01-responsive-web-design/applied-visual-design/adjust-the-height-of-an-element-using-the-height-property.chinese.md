---
id: 587d7791367417b2b2512ab5
title: Adjust the Height of an Element Using the height Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDaDTN'
forumTopicId: 301034
localeTitle: 使用 height 属性调整元素的宽度
---

## Description
<section id='description'>
和 <code>width</code> 属性类似，你可以使用 CSS 里面的 <code>height</code> 属性来指定元素的高度。下面这个例子把图片的高度设置为 20px：

```css
img {
  height: 20px;
}
```

</section>

## Instructions
<section id='instructions'>
给 <code>h4</code> 标签添加 <code>height</code> 属性并设置值为 25px。
<strong>注意：</strong> 可能需要将浏览器的缩放比调整为 100% 才能通过这一挑战。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该设置 <code>h4</code> 的 <code>height</code> 属性，使其值为 <code>25px</code>。'
    testString: assert(Math.round(document.querySelector('h4').getBoundingClientRect().height) === 25 && /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g ,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
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
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google 由在斯坦福大学攻读理工博士的拉里·佩奇和谢尔盖·布林共同创建。</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">拉里·佩奇</a>
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
              