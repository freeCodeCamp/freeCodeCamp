---
id: bad87fee1348bd9aedf08721
title: 16 進数コードを使用して色を調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

復習になりますが、16 進数カラーコードは 6 桁の 16 進数の数字を使用し、2 桁ごとに赤 (R)、緑 (G)、青 (B) の成分を表して色を表現します。

この 3 つの純粋色 (赤、緑、青) から、それぞれの量を変更して 1,600 万色以上の色を作成することができます！

例えば、オレンジは純粋な赤にいくらかの緑を混ぜて作ることができ、青は使いません。 16 進数コードでこれを表すと、`#FFA500` となります。

`0` は 16 進数で最も低い数値であり、色が全く無いことを表します。

`F` は 16 進数では最も高い数値であり、可能な限り最大の明るさを表します。

# --instructions--

`style` 要素の中のカラーキーワードを正しい 16 進数カラーコードで置き換えてください。

<table class='table table-striped'><tbody><tr><th>色</th><th>16 進数カラーコード</th></tr><tr><td>ドジャーブルー</td><td><code>#1E90FF</code></td></tr><tr><td>緑</td><td><code>#00FF00</code></td></tr><tr><td>オレンジ</td><td><code>#FFA500</code></td></tr><tr><td>赤</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

テキストが `I am red!` の `h1` 要素の `color` は赤にしてください。

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

`red` という単語の代わりに、赤を表す `hex code` (16 進数コード) を使用してください。

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

テキストが `I am green!` の `h1` 要素の `color` は緑にしてください。

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

`green` という単語の代わりに、緑を表す `hex code` (16 進数コード) を使用してください。

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

テキストが `I am dodger blue!` の `h1` 要素の `color` はドジャーブルーにしてください。

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

`dodgerblue` という単語の代わりに、ドジャーブルーを表す `hex code` (16 進数コード) を使用してください。

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

テキストが `I am orange!` の `h1` 要素の `color` はオレンジにしてください。

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

`orange` という単語の代わりに、オレンジを表す `hex code` (16 進数コード) を使用してください。

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
