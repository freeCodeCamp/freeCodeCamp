---
id: 587d7790367417b2b2512ab1
title: tabindex を使用して複数の要素のキーボードフォーカスの順序を指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` 属性は要素をタブ移動する順序も指定することができます。 これは、属性の値が 1 以上の正の数に設定されている場合に行われます。

`tabindex="1"` を設定すると、最初にその要素へキーボードがフォーカスします。 次に、指定された `tabindex` 値 (2、3、など) のシーケンスを循環してから、デフォルトと `tabindex="0"` の項目に移動します。

タブの順序がこのように設定されている場合、(HTML ソースを使用した) デフォルトの順序を上書きすることに注意することが重要です。 これは、ページの上部からナビゲーションが開始すると思っているユーザーを混乱させる可能性があります。 この手法は特定の状況によっては必要になる場合があるかもしれませんが、アクセシビリティの観点からは、これを採用する前に注意してください。

例:

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat の Inspirational Quotes のページには検索フィールドがあり、CSS で右上隅に配置させる予定です。 彼は、検索 (search) の `input` と送信 (submit) の `input` のフォームコントロールを、タブで移動する順の最初の 2 つのアイテムにしたいと考えています。 `tabindex` 属性に `1` をセットしたものを `search` `input` に追加し、`tabindex` 属性に `2` をセットしたものを `submit` `input` に追加してください。

もう一つ注意すべきことは、ブラウザーによっては、要素がクリックされるとタブ移動が順序の途中から始まるようになるかもしれないことです。 このページには、常にタブの順序の先頭から始まるようにするための要素が追加してあります。

# --hints--

コードは `search` `input` タグに `tabindex` 属性を追加する必要があります。

```js
assert($('#search').attr('tabindex'));
```

コードは `submit` `input` タグに `tabindex` 属性を追加する必要があります。

```js
assert($('#submit').attr('tabindex'));
```

コードは `search` `input` タグの `tabindex` 属性として 1 を設定する必要があります。

```js
assert($('#search').attr('tabindex') == '1');
```

コードは `submit` `input` タグの`tabindex`属性として 2 を設定する必要があります。

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
