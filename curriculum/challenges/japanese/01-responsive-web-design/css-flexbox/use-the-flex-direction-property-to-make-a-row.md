---
id: 587d78ab367417b2b2512af2
title: flex-direction プロパティを使用して行を作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

要素に `display: flex` を追加すると、その要素はフレックスコンテナーになります。 これにより、その要素の子要素を行または列として配置することができます。 これを行うためには、`flex-direction` プロパティを親アイテムに追加し、row (行) またはcolumn (列) を設定します。 row (行) を作成すると子要素が水平方向に整列され、column (列) を作成すると子要素が垂直方向に整列されます。

`flex-direction` のその他のオプションとして、`row-reverse` と `column-reverse` があります。

**注:** `flex-direction` プロパティのデフォルト値は `row` です。

# --instructions--

CSS プロパティ `flex-direction` を `#box-container` 要素に追加し、`row-reverse` 値を設定してください。

# --hints--

`#box-container` 要素の `flex-direction` プロパティを `row-reverse` に設定する必要があります 。

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
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
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
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
