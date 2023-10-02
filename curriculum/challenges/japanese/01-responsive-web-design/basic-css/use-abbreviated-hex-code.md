---
id: bad87fee1348bd9aedf08719
title: 16 進数コードの短縮形を使用する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

1600 万色以上と言われて圧倒される人も多いでしょう。 また、16 進数のコードを覚えるのは大変です。 幸い、それを短縮できます。

例えば、赤色の 16 進数コード `#FF0000` は `#F00` と短縮できます。 この短縮形は、1 桁ずつ赤、緑、青を表します。

これは、表現可能な色の数を約 4,000 色に減少させます。 しかし、ブラウザは `#FF0000` と `#F00` をまったく同じ色として解釈します。

# --instructions--

短縮形の 16 進数コードを使用して、正しい要素に色を付けてみましょう。

<table class='table table-striped'><tbody><tr><th>色</th><th>短縮 16 進数コード</th></tr><tr><td>シアン</td><td><code>#0FF</code></td></tr><tr><td>緑</td><td><code>#0F0</code></td></tr><tr><td>赤</td><td><code>#F00</code></td></tr><tr><td>フューシャ</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

テキストが `I am red!` の `h1` 要素の `color` は赤にしてください。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

赤を指定するために、16 進数コード `#FF0000` の代わりに短縮形の 16 進数コードを使用してください。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

テキストが `I am green!` の `h1` 要素の `color` は緑にしてください。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

緑を指定するために、16 進数コード `#00FF00` の代わりに短縮形の 16 進数コードを使用してください。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

テキストが `I am cyan!` の `h1` 要素の `color` はシアンにしてください。

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

シアンを指定するために、16 進数コード `#00FFFF` の代わりに短縮形の 16 進数コードを使用してください。

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

テキストが `I am fuchsia!` の `h1` 要素の `color` はフューシャにしてください。

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

フューシャを指定するために、16 進数コード `#FF00FF` の代わりに短縮形の 16 進数コードを使用してください。

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
