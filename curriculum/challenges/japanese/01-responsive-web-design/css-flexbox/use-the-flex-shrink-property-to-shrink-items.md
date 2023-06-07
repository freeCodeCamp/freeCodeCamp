---
id: 587d78ad367417b2b2512afb
title: flex-shrink プロパティを使用してアイテムを縮小する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

これまでは、チャレンジ内のすべてのプロパティはフレックスコンテナー (フレックスアイテムの親) に適用されていました。 一方で、フレックスアイテムにもいくつかの便利なプロパティがあります。

1 つ目は `flex-shrink` プロパティです。 これを使用すると、フレックスコンテナーが小さすぎるとき、アイテムを縮小させることができます。 親コンテナーの幅がその中のすべてのフレックスアイテムを足し合わせた幅より小さい場合に、アイテムが縮小されます。

`flex-shrink` プロパティは数値を値として取ります。 数値が大きいほど、コンテナー内の他のアイテムに比べてより縮小します。 例えば、もしあるアイテムが `flex-shrink` の値として `1` を持ち、他のアイテムが `flex-shrink` の値として `3` を持つ場合、`3` の値を持つアイテムがもう一方に比べて三倍縮小します。

# --instructions--

CSS プロパティ `flex-shrink` を `#box-1` と `#box-2` の両方に追加してください。 `#box-1` に `1` の値、`#box-2` に `2` の値を設定してください。

# --hints--

`#box-1` 要素の `flex-shrink` プロパティを `1` に設定してください。

```js
assert($('#box-1').css('flex-shrink') == '1');
```

`#box-2` 要素の `flex-shrink` プロパティを `2` に設定してください。

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
