---
id: 587d78ac367417b2b2512af4
title: flex-direction プロパティを使用して列を作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

直近の 2 つのチャレンジでは、`flex-direction` プロパティに `row` を設定しました。 このプロパティは、フレックスコンテナーの子要素を垂直に積み重ねた列 (column) を作成することもできます。

# --instructions--

CSS プロパティ `flex-direction` を `#box-container` 要素に追加し、`column` 値を設定してください。

# --hints--

`#box-container` 要素の `flex-direction` プロパティを `column` に設定する必要があります。

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    flex-direction: column;
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
