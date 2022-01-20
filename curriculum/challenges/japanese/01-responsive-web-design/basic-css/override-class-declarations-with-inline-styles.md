---
id: bad87fee1348bd9aedf06756
title: インラインスタイルでクラス宣言をオーバーライドする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

id 宣言は `style` 要素の CSS で宣言されている場所に関係なく、クラス宣言をオーバーライドすることを証明しました。

CSS をオーバーライドする方法は他にもあります。 インラインスタイルを覚えていますか？

# --instructions--

インラインスタイルを使用して、`h1` 要素を白くしてみましょう。 インラインスタイルは以下のような書き方です:

```html
<h1 style="color: green;">
```

`h1` 要素の `blue-text` と `pink-text` のクラスはそのままにしてください。

# --hints--

`h1` 要素にはクラス `pink-text` が必要です。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 要素にはクラス `blue-text` が必要です。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 要素には id `orange-text` が必要です。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 要素にインラインスタイルが必要です。

```js
assert(document.querySelector('h1[style]'));
```

`h1` 要素が白で表示されている必要があります。

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
