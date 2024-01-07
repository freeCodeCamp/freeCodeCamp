---
id: 587d781e367417b2b2512acc
title: 固定位置指定で要素をブラウザウィンドウに固定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

CSS が提供する次のレイアウトスキームは `fixed` ポジションです。これは絶対位置指定の一種で、要素をブラウザウィンドウに対して相対的に固定します。 絶対位置指定と同様に、固定位置指定も CSS オフセットプロパティとともに使用され、要素をドキュメントの通常フローから削除します。 他のアイテムは固定位置指定された要素がどこに配置されているか知ることができないため、何か他の方法でレイアウトを調整することが必要になる場合があります。

`fixed` と `absolute` ポジションの重要な違いは、ユーザーがスクロールしたときに、固定位置指定された要素は移動しないことです。

# --instructions--

コード内のナビゲーションバーに `navbar` という id が付けられています。 その `position` を `fixed` に変更し、オフセットを `top` から 0 ピクセル、`left` から 0 ピクセルに設定してください。 コードを追加したら、プレビューウィンドウをスクロールしてナビゲーションが同じ位置にとどまることを確認してください。

# --hints--

`#navbar` 要素の `position` を `fixed` に設定してください。

```js
assert($('#navbar').css('position') == 'fixed');
```

0 ピクセルの `top` CSS オフセットを `#navbar` 要素に使用する必要があります。

```js
assert($('#navbar').css('top') == '0px');
```

0 ピクセルの `left` CSS オフセットを `#navbar` 要素に使用する必要があります。

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
