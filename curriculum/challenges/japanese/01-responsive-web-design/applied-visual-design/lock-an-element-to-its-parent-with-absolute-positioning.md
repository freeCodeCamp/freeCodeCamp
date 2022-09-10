---
id: 587d781e367417b2b2512acb
title: 絶対位置指定で要素を親要素に固定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

CSS の `position` プロパティの次のオプションは `absolute` です。これは、要素を親コンテナーからの相対的な位置に固定します。 `relative` の配置と異なり、このオプションは要素をドキュメントの通常フローから削除するため、周りの項目はその要素を無視します。 CSS オフセットプロパティ (top または bottom および left または right) は位置を調整するために使われます。

絶対位置指定の注意点の一つは、最も近い *position 指定がされている* 祖先要素に対して固定されることです。 親となる項目に position ルールを追加する (一般的に `position: relative;` が使われます) ことをもし忘れると、ブラウザは一連の要素を辿って探し続け、最終的には `body` タグがデフォルトとして使われます。

# --instructions--

`#searchbar` 要素の `position` を `absolute` と宣言して、親の `section` の右上に固定してください。 `top` と `right` にそれぞれ 50 ピクセルのオフセットを設定してください。

# --hints--

`#searchbar` 要素の `position` を `absolute` に設定してください。

```js
assert($('#searchbar').css('position') == 'absolute');
```

50 ピクセルの `top` CSS オフセットを `#searchbar` 要素に使用する必要があります。

```js
assert($('#searchbar').css('top') == '50px');
```

50 ピクセルの `right` CSS オフセットを `#searchbar` 要素に使用する必要があります。

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
