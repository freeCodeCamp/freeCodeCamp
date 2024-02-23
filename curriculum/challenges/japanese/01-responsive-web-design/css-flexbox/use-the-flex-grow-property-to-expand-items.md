---
id: 587d78ae367417b2b2512afc
title: flex-grow プロパティを使用してアイテムを拡大する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

`flex-shrink` の反対は `flex-grow` プロパティです。 `flex-shrink` はコンテナーが縮小するときのアイテムのサイズを制御することを思い出してください。 `flex-grow` プロパティは、親コンテナーが拡大されるときのアイテムのサイズを制御します。

前回のチャレンジと似たような例として、もしあるアイテムが `flex-grow` の値として `1` を持ち、他のアイテムが `flex-grow` の値として `3` を持つ場合、`3` の値を持つアイテムがもう一方に比べて三倍拡大します。

# --instructions--

CSS プロパティ `flex-grow` を `#box-1` と `#box-2` の両方に追加してください。 `#box-1` に `1` の値、`#box-2` に `2` の値を設定してください。

# --hints--

`#box-1` 要素の `flex-grow` プロパティを `1` に設定してください。

```js
assert($('#box-1').css('flex-grow') == '1');
```

`#box-2` 要素の `flex-grow` プロパティを `2` に設定してください。

```js
assert($('#box-2').css('flex-grow') == '2');
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

  }

  #box-2 {
    background-color: orangered;
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
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
