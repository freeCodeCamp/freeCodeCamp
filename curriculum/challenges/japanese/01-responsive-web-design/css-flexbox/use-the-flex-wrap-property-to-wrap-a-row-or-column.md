---
id: 587d78ad367417b2b2512afa
title: flex-wrap プロパティを使用して行または列を折り返す
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS の flexbox には、フレックスコンテナーを複数の行 (または列) に分割する機能があります。 デフォルトでは、フレックスコンテナーはすべてのフレックスアイテムが1つに収まるように格納します。 例えば、行はすべて1行になります。

しかし、`flex-wrap` プロパティを使用することでアイテムを折り返すように CSS に指示できます。 これにより、はみ出したアイテムは新しい行または列に移動します。 折り返す際のブレークポイントは、アイテムのサイズとコンテナーのサイズによって決まります。

CSS には折り返す方向のオプションもあります:

<ul><li><code>nowrap</code>: これはデフォルトの設定であり、アイテムを折り返しません。</li><li><code>wrap</code>: 行である場合は上から下へ、列である場合は左から右へ複数のラインにアイテムを折り返します。</li><li><code>wrap-reverse</code>: 行である場合は下から上へ、列である場合は右から左へ複数のラインにアイテムを折り返します。</li></ul>

# --instructions--

現在のレイアウトでは1行に対してボックスが多すぎます。 CSS プロパティ `flex-wrap` を `#box-container` 要素に追加し、 `wrap` 値を設定してください。

# --hints--

`#box-container` 要素の `flex-wrap` プロパティを `wrap` に設定してください。

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
