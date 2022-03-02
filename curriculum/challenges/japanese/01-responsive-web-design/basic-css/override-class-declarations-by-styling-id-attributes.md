---
id: bad87fee1348bd8aedf06756
title: クラス宣言を ID 属性のスタイルでオーバーライドする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

私たちは、ブラウザが CSS を上から下へ宣言の順に読み込むことを証明しました。 つまり、競合が発生した場合、ブラウザは後に来た CSS 宣言を使用します。 `h1` 要素のクラス属性で `blue-text` を `pink-text` の前に置いたとしても、使われた順番ではなく宣言の順番が見られることに注目してください。

これで終わりではありません。 CSS をオーバーライドする方法は他にもあります。 id 属性を覚えていますか？

`h1` 要素に id を追加してその id を使ってスタイルを変更することで、`pink-text` と `blue-text` のクラスをオーバーライドして `h1` 要素をオレンジにしてみましょう。

# --instructions--

`h1` 要素に `orange-text` という `id` 属性を追加してください。 id スタイルは以下のようになります:

```html
<h1 id="orange-text">
```

`h1` 要素の `blue-text` と `pink-text` のクラスはそのままにしてください。

`style` 要素内に id `orange-text` 用の CSS 宣言を作成します。 こちらの例と似たような書き方になるでしょう:

```css
#brown-text {
  color: brown;
}
```

**注:** この CSS の宣言は `pink-text` クラスの上下どちらにあっても差し支えありません。 `id` 属性は常に優先されるためです。

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

`h1` 要素は 1 つだけ必要です。

```js
assert($('h1').length === 1);
```

`orange-text` の id には CSS 宣言が必要です。

```js
assert(code.match(/#orange-text\s*{/gi));
```

`h1` には `style` 属性を設定してはいけません。

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` 要素がオレンジで表示されている必要があります。

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
