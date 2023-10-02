---
id: 587d7dbf367417b2b2512bbb
title: '@while を使用して条件が満たされるまでスタイルを適用する'
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

`@while` ディレクティブは JavaScript の `while` ループと同様の機能を持つオプションで、 条件が満たされるまで CSS ルールを作成します。

`@for` のチャレンジではシンプルなグリッドシステムを作成する例を紹介しました。 この例は `@while` でも作成できます。

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

まず、変数 `$x` を定義して 1 に設定します。 次に、`@while` ディレクティブを使用して、`$x` が 13 未満である*間 (while) *、グリッドシステムを作成します。 `width` の CSS ルールを設定した後、無限ループを回避するために `$x` を 1 増やします。

# --instructions--

`@while` を使用して、`font-size` が異なる一連のクラスを作成してください。

`text-1` から `text-5` までの 5 つの異なるクラスを作成してください。 次に、`15px` に現在のインデックスを掛けた値を `font-size` に設定してください。 必ず無限ループを避けてください。

# --hints--

コードで `@while` ディレクティブを使用します。

```js
assert(code.match(/@while /g));
```

コードでインデックス変数を使用します。インデックス変数は 1 から始めます。

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

コードでカウンター変数を 1 増やします。

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

`.text-1` クラスの `font-size` を `15px` に設定します。

```js
assert($('.text-1').css('font-size') == '15px');
```

`.text-2` クラスの `font-size` を `30px` に設定します。

```js
assert($('.text-2').css('font-size') == '30px');
```

`.text-3` クラスの `font-size` を `45px` に設定します。

```js
assert($('.text-3').css('font-size') == '45px');
```

`.text-4` クラスの `font-size` を `60px` に設定します。

```js
assert($('.text-4').css('font-size') == '60px');
```

`.text-5` クラスの `font-size` を `75px` に設定します。

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
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
