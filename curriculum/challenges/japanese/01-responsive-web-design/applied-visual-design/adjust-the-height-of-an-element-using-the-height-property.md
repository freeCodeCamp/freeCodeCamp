---
id: 587d7791367417b2b2512ab5
title: height プロパティで要素の高さを調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDaDTN'
forumTopicId: 301034
dashedName: adjust-the-height-of-an-element-using-the-height-property
---

# --description--

`width` プロパティと同様に、CSSでは `height` プロパティを使用して要素の高さを指定できます。 下記は画像の高さを 20px に変更する例です:

```css
img {
  height: 20px;
}
```

# --instructions--

`height` プロパティを `h4` タグに追加し、25px に設定してください。

**注:** このチャレンジのテストをパスするには、ブラウザのズーム設定を 100% にする必要がある場合があります。

# --hints--

`h4` の `height` プロパティを 25 ピクセルに変更する必要があります。

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
