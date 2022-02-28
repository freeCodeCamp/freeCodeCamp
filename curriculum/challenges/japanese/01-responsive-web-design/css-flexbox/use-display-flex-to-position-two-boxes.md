---
id: 587d78ab367417b2b2512af0
title: 'display: flex を使って 2 つのボックスを配置する'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

このセクションでは、2 種類のチャレンジを行き来しながら、 CSS を使って要素を柔軟に配置する方法を説明します。 まず、あるチャレンジで理論を説明し、次にシンプルなツイートのコンポーネントを扱う実践的なチャレンジで、flexbox の概念を実際に使ってみます。

要素に CSS プロパティ `display: flex;` を追加すると、他のフレックスプロパティを利用してレスポンシブなページを作成できるようになります。

# --instructions--

CSS プロパティ `display` を `#box-container` に追加し、値を `flex` に設定してください。

# --hints--

`#box-container` は `display` プロパティを `flex` に設定しなければなりません。

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
