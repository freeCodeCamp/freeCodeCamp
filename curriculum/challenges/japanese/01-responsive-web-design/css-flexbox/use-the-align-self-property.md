---
id: 587d78af367417b2b2512b00
title: align-self プロパティを使用する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

フレックスアイテム最後のプロパティは `align-self` です。 このプロパティでは全アイテムを一括で設定する代わりに、各アイテムの配置を個別に調整できます。 フレックスアイテムには、CSS プロパティ `float`、`clear`、`vertical-align` を使う一般的な位置調整テクニックが機能しないので、このプロパティが便利です。

`align-self` は `align-items` と同じ値を受け取り、`align-items` プロパティで設定された値を上書きします。

# --instructions--

CSS プロパティ `align-self` を `#box-1` と `#box-2` の両方に追加してください。 `#box-1` に `center` の値、`#box-2` に `flex-end` の値を設定してください。

# --hints--

`#box-1` 要素の `align-self` プロパティを `center` に設定してください。

```js
assert($('#box-1').css('align-self') == 'center');
```

`#box-2` 要素の `align-self` プロパティを `flex-end` に設定してください。

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
