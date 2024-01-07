---
id: 587d78ae367417b2b2512afd
title: flex-basis プロパティを使用してアイテムの初期サイズを設定する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

`flex-basis` プロパティは、CSS が `flex-shrink` または `flex-grow` で調整する前のアイテムの初期サイズを指定します。

`flex-basis` プロパティが使用する単位は他のサイズ指定プロパティと同じです (`px`、`em`、`%` など)。 `auto` 値は要素の中身に基づいてアイテムのサイズを設定します。

# --instructions--

`flex-basis` を使用してボックスの初期サイズを設定します。 CSS プロパティ `flex-basis` を `#box-1` と `#box-2` の両方に追加してください。 `#box-1` に `10em` の値、`#box-2` に `20em` の値を設定してください。

# --hints--

`#box-1` 要素は `flex-basis` プロパティを持つ必要があります。

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

`#box-1` 要素の `flex-basis` プロパティを `10em` に設定してください。

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

`#box-2` 要素は `flex-basis` プロパティを持つ必要があります。

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

`#box-2` 要素の `flex-basis` プロパティを `20em` に設定してください。

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
