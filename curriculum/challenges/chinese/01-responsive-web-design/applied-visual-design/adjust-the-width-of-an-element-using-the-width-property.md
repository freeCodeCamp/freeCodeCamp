---
id: 587d7791367417b2b2512ab4
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
title: 使用 width 属性调整元素的宽度
---

## Description
<section id='description'>
你可以使用 CSS 里面的 <code>width</code> 属性来指定元素的宽度。属性值可以是相对单位（比如 em），绝对单位（比如 px），或者包含块（父元素）宽度的百分比。下面这个例子把图片的宽度设置为 220px：

```css
img {
  width: 220px;
}
```

</section>

## Instructions
<section id='instructions'>
给卡片添加 <code>width</code> 属性，设置它的宽度为 245px。使用 <code>fullCard</code> class 来选择元素。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该使用 <code>fullCard</code> class 选择器将卡片的 <code>width</code> 宽度属性更改为 <code>245px</code>。'
    testString: const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g); assert(fullCard && /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) && $('.fullCard').css('maxWidth') === 'none');

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
              