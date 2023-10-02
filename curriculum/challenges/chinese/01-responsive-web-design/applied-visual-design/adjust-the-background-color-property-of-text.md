---
id: 587d781b367417b2b2512abc
title: 调整文本的背景色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

为了让页面更美观，除了设置整个页面的背景色以及文字颜色外，你还可以单独设置文字的背景色，即在文字的父元素上添加 `background-color` 属性。 在本挑战里我们将使用 `rgba()` 颜色，而不是之前学到的 `hex` 编码或者 `rgb()` 颜色。

<blockquote>rgba 代表：<br>  r = red 红色<br>  g = green 绿色<br>  b = blue 蓝色<br>  a = alpha 透明度</blockquote>

RGB 值可以取在 0 到 255 之间。 alpha 值可取在 0 到 1 之间，其中 0 代表完全透明，1 代表完全不透明。 `rgba()` 在需要设置颜色透明度时十分有用， 这意味着你可以做出一些很漂亮的半透明效果。

在本挑战里你将会用到这个代码 `background-color: rgba(45, 45, 45, 0.1)`。 它表示背景是黑灰色，因为设置了透明度为 0.1，所以几乎是透明的。

# --instructions--

为了让文字更醒目，设置 `h4` 元素的 `background-color` 属性值为上面指定的 `rgba()`。

同时移除 `h4` 的 `height` 属性，并添加 `padding` 属性，值为 10px。

# --hints--

你应该给 `h4` 元素添加一个 `background-color` 属性并且赋值 `rgba(45, 45, 45, 0.1)`。

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

`h4` 元素的 `padding` 属性值应为 10px。

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

`h4` 元素不应有 `height` 属性。

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
