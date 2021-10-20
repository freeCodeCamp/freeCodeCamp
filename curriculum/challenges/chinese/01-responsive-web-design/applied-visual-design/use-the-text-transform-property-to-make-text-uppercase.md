---
id: 587d781c367417b2b2512ac0
title: 使用 text-transform 属性给文本添加大写效果
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

CSS 里的 `text-transform` 属性可以改变英文字母的大小写。 使用这个属性时，我们无需改变 HTML 元素中的文本也可以统一页面里英文的显示。

下面的表格展示了 `text-transform` 的不同值对文字 “Transform me” 的影响：

<table class='table table-striped'><thead><tr><th>值</th><th>结果</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transform me"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORM ME"</td></tr><tr><td><code>capitalize</code></td><td>"Transform Me"</td></tr><tr><td><code>initial</code></td><td>使用默认值</td></tr><tr><td><code>inherit</code></td><td>使用父元素的 <code>text-transform</code> 值。</td></tr><tr><td><code>none</code></td><td><strong>Default:</strong>不改变文字。</td></tr></tbody></table>

# --instructions--

请使用 `text-transform` 属性把 `h4` 内容文本中的所有字母变成大写。

# --hints--

`h4` 内容文本中的所有字母均应为 `uppercase` 大写 。

```js
assert($('h4').css('text-transform') === 'uppercase');
```

`h4` 内的原文不应改变。

```js
assert($('h4').text() !== $('h4').text().toUpperCase());
```

# --seed--

## --seed-contents--

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
    opacity: 0.7;
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
    text-transform: uppercase;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
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
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
