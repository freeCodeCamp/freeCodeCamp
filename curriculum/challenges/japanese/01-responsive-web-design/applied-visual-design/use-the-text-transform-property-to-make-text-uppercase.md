---
id: 587d781c367417b2b2512ac0
title: text-transform プロパティでテキストを大文字にする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZQSP'
forumTopicId: 301081
dashedName: use-the-text-transform-property-to-make-text-uppercase
---

# --description--

CSS の `text-transform` プロパティはテキストの外観を変更するために使用されます。 実際の HTML 要素のテキストを変更することなく、ウェブページ上のテキストが一貫した形で表示されるようにするための便利な方法です。

以下の表は、異なる `text-transform` の値がどのように "Transform me" の例文を変化させるかを示しています。

<table class='table table-striped'><thead><tr><th>値</th><th>結果</th></tr></thead><tbody><tr><td><code>lowercase</code></td><td>"transform me"</td></tr><tr><td><code>uppercase</code></td><td>"TRANSFORM ME"</td></tr><tr><td><code>capitalize</code></td><td>"Transform Me"</td></tr><tr><td><code>initial</code></td><td>デフォルト値が使用される</td></tr><tr><td><code>inherit</code></td><td>親要素の <code>text-transform</code> の値が使用される</td></tr><tr><td><code>none</code></td><td><strong>デフォルト:</strong> 元のテキストを使用する</td></tr></tbody></table>

# --instructions--

`h4` のテキストを、`text-transform` プロパティを使用して大文字に変換してください。

# --hints--

`h4` のテキストは `uppercase` でなければなりません。

```js
assert($('h4').css('text-transform') === 'uppercase');
```

h4 の元のテキストは変更しないようにしてください。

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
