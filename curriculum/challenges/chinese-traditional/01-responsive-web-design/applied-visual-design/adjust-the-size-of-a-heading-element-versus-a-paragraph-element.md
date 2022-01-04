---
id: 587d781b367417b2b2512abd
title: 調整標題元素與段落元素的大小
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bRPTz'
forumTopicId: 301037
dashedName: adjust-the-size-of-a-heading-element-versus-a-paragraph-element
---

# --description--

標題元素（`h1` 到 `h6`）的字體大小通常應大於段落標籤的字體大小。 這使用戶更容易直觀地瞭解頁面上所有內容的佈局和重要性級別。 你可以使用 `font-size` 屬性來調整元素中文本的大小。

# --instructions--

要使標題明顯大於段落，請將 `h4` 元素的 `font-size` 更改爲 27 像素。

# --hints--

你的代碼應該將 `font-size` 屬性添加到設置爲 27 像素的 `h4` 元素。

```js
assert($('h4').css('font-size') == '27px');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;

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

