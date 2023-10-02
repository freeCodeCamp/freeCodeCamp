---
id: 587d781e367417b2b2512aca
title: 相対位置指定要素を CSS オフセットで移動させる
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

`top` または `bottom`, および `left` または `right` の CSS オフセットは、あるアイテムが通常フローで配置される位置から相対的にオフセットする距離をブラウザに伝えます。 要素を指定された場所から離れるようにオフセットしているので、要素は指定された側から離れるように (事実上、反対方向に) 動きます。 ひとつ前のチャレンジで、`top` オフセットを使うと `h2` は下方向に動くことを確認しました。 同様に、`left` のオフセットを使うとアイテムは右に移動します。

# --instructions--

CSS オフセットを使用して、`h2` を 15 ピクセル右方向に、10 ピクセル上方向に移動してください。

# --hints--

`h2` を相対的に 10px 上に配置する CSS オフセットを使用する必要があります。 言い換えれば、通常配置される場所の `bottom` から 10px 離れたところに移動させてください。

```js
assert($('h2').css('bottom') == '10px');
```

`h2` を相対的に 15px 右に配置する CSS オフセットを使用する必要があります。 言い換えれば、通常配置される場所の `left` から 15px 離れたところに移動させてください。

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
