---
id: 587d781b367417b2b2512abc
title: 調整文本的背景色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

爲了讓頁面更美觀，除了設置整個頁面的背景色以及文字顏色外，你還可以單獨設置文字的背景色，即在文字的父元素上添加 `background-color` 屬性。 在本挑戰裏我們將使用 `rgba()` 顏色，而不是之前學到的 `hex` 編碼或者 `rgb()` 顏色。

<blockquote>rgba 代表：<br>  r = red 紅色<br>  g = green 綠色<br>  b = blue 藍色<br>  a = alpha 透明度</blockquote>

RGB 值可以取在 0 到 255 之間。 alpha 值可取在 0 到 1 之間，其中 0 代表完全透明，1 代表完全不透明。 `rgba()` 在需要設置顏色透明度時十分有用， 這意味着你可以做出一些很漂亮的半透明效果。

在本挑戰裏你將會用到這個代碼 `background-color: rgba(45, 45, 45, 0.1)`。 它表示背景是黑灰色，因爲設置了透明度爲 0.1，所以幾乎是透明的。

# --instructions--

爲了讓文字更醒目，設置 `h4` 元素的 `background-color` 屬性值爲上面指定的 `rgba()`。

同時移除 `h4` 的 `height` 屬性，並添加 `padding` 屬性，值爲 10px。

# --hints--

你應該給 `h4` 元素添加一個 `background-color` 屬性並且賦值 `rgba(45, 45, 45, 0.1)`。

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

`h4` 元素的 `padding` 屬性值應爲 10px。

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

`h4` 元素不應有 `height` 屬性。

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
