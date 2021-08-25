---
id: 587d7791367417b2b2512ab5
title: 使用 height 属性调整元素的宽度
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDaDTN'
forumTopicId: 301034
dashedName: adjust-the-height-of-an-element-using-the-height-property
---

# --description--

和 `width` 属性类似，你可以使用 CSS 里面的 `height` 属性来指定元素的高度。 下面这段代码可以把图片的高度设置为 20px：

```css
img {
  height: 20px;
}
```

# --instructions--

给 `h4` 标签添加 `height` 属性并将属性值设置为 25px。

**注意：** 可能需要将浏览器的缩放比调整为 100% 才能通过这一挑战。

# --hints--

`h4` 的 `height` 属性值应为 25px。

```js
assert(
  Math.round(document.querySelector('h4').getBoundingClientRect().height) ===
    25 &&
    /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g, ''))
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

# --solutions--

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
