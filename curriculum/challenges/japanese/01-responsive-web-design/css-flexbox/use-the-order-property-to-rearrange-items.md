---
id: 587d78ae367417b2b2512aff
title: order プロパティを使用してアイテムを並び替える
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

`order` プロパティは、フレックスアイテムをどのような順序でフレックスコンテナー内に表示するかを CSS に指示するために使用されます。 デフォルトでは、アイテムは HTML ソースコードの記述順と同じ順序で表示されます。 プロパティは数値を値として取ることができ、負の数値も使用できます。

# --instructions--

CSS プロパティ `order` を `#box-1` と `#box-2` の両方に追加してください。 `#box-1` に `2` の値、`#box-2` に `1` の値を設定してください。

# --hints--

`#box-1` 要素の `order` プロパティを `2` に設定してください。

```js
assert($('#box-1').css('order') == '2');
```

`#box-2` 要素の `order` プロパティを `1` に設定してください。

```js
assert($('#box-2').css('order') == '1');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
