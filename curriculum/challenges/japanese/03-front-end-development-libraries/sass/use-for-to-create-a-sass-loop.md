---
id: 587d7dbe367417b2b2512bb9
title: '@for を使用して Sass のループを作成する'
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

`@for` ディレクティブは、ループ内でスタイルを追加します。JavaScript の `for` ループと非常によく似ています。

`@for` は "start through end" と "start to end" の 2 つの記法で使用します。 両者の主な違いは、"start **to** end" ではカウントの一部として最後の数値が*含まれない*のに対し、"start **through** end" ではカウントの一部として最後の数値が*含まれる*ことです。

start **through** end の例を次に示します。

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

`#{$i}` の部分は、変数 (`i`) とテキストを組み合わせて文字列を作るための構文です。 Sass ファイルが CSS に変換されると次のようになります。

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

これはグリッドレイアウトを作成するのにとても便利な方法です。 これで、12 個の列幅のオプションを CSS クラスとして利用できます。

# --instructions--

1 **to** 6 で変化する変数 `$j` を受け取る `@for` ディレクティブを記述してください。

`.text-1` から `.text-5` までの 5 つのクラスを作成し、各クラスの `font-size` を 15px のインデックス倍に設定してください。

# --hints--

コードで `@for` ディレクティブを使用します。

```js
assert(code.match(/@for /g));
```

`.text-1` クラスの `font-size` を 15px に設定します。

```js
assert($('.text-1').css('font-size') == '15px');
```

`.text-2` クラスの `font-size` を 30px に設定します。

```js
assert($('.text-2').css('font-size') == '30px');
```

`.text-3` クラスの `font-size` を 45px に設定します。

```js
assert($('.text-3').css('font-size') == '45px');
```

`.text-4` クラスの `font-size` を 60px に設定します。

```js
assert($('.text-4').css('font-size') == '60px');
```

`.text-5` クラスの `font-size` を 75px に設定します。

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
