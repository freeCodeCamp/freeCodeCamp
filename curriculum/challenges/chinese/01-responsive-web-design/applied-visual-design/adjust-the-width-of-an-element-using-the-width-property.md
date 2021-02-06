---
id: 587d7791367417b2b2512ab4
title: 使用 width 属性调整元素的宽度
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVLPtN'
forumTopicId: 301039
dashedName: adjust-the-width-of-an-element-using-the-width-property
---

# --description--

你可以使用 CSS 里的 `width` 属性来指定元素的宽度。 属性值可以是相对单位（比如 `em`），绝对单位（比如 `px`），或者包含块（父元素）宽度的百分比。 下面这段代码可以把图片的宽度设置为 220px：

```css
img {
  width: 220px;
}
```

# --instructions--

为卡片元素添加 `width` 属性，并将它的宽度设置为 245px。 使用 `fullCard` class 来选择卡片元素。

# --hints--

应使用 `fullCard` class 选择器将卡片的 `width` 属性值设置为 `245px`。

```js
const fullCard = code.match(/\.fullCard\s*{[\s\S]+?[^}]}/g);
assert(
  fullCard &&
    /width\s*:\s*245px\s*(;|})/gi.test(fullCard[0]) &&
    $('.fullCard').css('maxWidth') === 'none'
);
```

# --seed--

## --seed-contents--

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
