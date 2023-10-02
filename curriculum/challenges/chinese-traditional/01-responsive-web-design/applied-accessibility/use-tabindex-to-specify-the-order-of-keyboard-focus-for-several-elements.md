---
id: 587d7790367417b2b2512ab1
title: 使用 tabindex 指定多個元素的鍵盤焦點順序
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` 屬性還可以指定元素的 tab 鍵焦點順序， 將它的值設置爲大於等於 1 的整數，就可以實現這個功能。

給元素設置 `tabindex="1"`，鍵盤將首先把焦點放在這個元素上。 然後它按照指定的 `tabindex` 值（2、3 等等）順序循環，再移動到默認值和 `tabindex="0"` 項目。

需要注意的是，使用這種方式設置 tab 鍵焦點順序會覆蓋默認順序，其中默認順序爲標籤在文檔流中出現的順序。 這可能會讓那些希望從頁面頂部開始導航的用戶感到困惑。 使用 tabindex 在某些情況下是必要的，但在使用時要充分考慮到頁面的可訪問性。

舉個例子：

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

Camper Cat 在他的勵志名言頁面中有一個搜索區域，他打算使用 CSS 把這個區域定位在頁面的右上角。 Camper Cat 希望他的搜索（search）`input` 與提交（submit）`input` 表單控件是 tab 鍵焦點順序的前兩項。 請給 `search` `input` 添加 `tabindex` 屬性，將屬性值設置爲 `1`；給 `submit` `input` 添加一個 `tabindex` 屬性，將屬性值設置爲 `2`。

另一件需要注意的事情是，單擊元素時，某些瀏覽器可能會將你置於 tab 鍵焦點順序的中間位置。 頁面上已添加一個元素，以確保你始終從 tab 鍵焦點順序的開頭開始。

# --hints--

應給 `search` `input` 標籤添加一個 `tabindex` 屬性。

```js
assert($('#search').attr('tabindex'));
```

應給 `submit` `input` 標籤添加一個 `tabindex` 屬性。

```js
assert($('#submit').attr('tabindex'));
```

`search` `input` 標籤的 `tabindex` 屬性值應爲 1。

```js
assert($('#search').attr('tabindex') == '1');
```

`submit` `input` 標籤的 `tabindex` 屬性值應爲 2。

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
