---
id: 587d7dbd367417b2b2512bb6
title: ミックスインを使用して再利用可能な CSS を作成する
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

Sass の<dfn>ミックスイン</dfn>は、スタイルシート全体で再利用できる CSS 宣言のグループです。

新しい CSS 機能ほど、完全に採用されてすべてのブラウザーで使用できるようになるまでに時間がかかります。 機能がブラウザーに追加されるまでの間、それらの機能を使用している CSS ルールではベンダープレフィックスが必要になる場合があります。 たとえば `box-shadow` を考えてみましょう。

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

`box-shadow` のあるすべての要素でこのルールを書き直したり、それぞれの値を変えてさまざまな効果をテストしたりするには、たくさんの入力が必要になります。 ミックスインは CSS 版の関数のようなもので、 次のように記述します。

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

定義は `@mixin` で始まり、その後にカスタム名を付けます。 パラメーター (前の例では `$x`、`$y`、`$blur`、`$c`) は任意です。 これで、`box-shadow` ルールが必要になったときはいつでも、ミックスインを呼び出す 1 行だけで済み、すべてのベンダープレフィックスを入力する必要がなくなります。 ミックスインは `@include` ディレクティブを使用して呼び出します。

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

`border-radius` のミックスインを記述して、`$radius` パラメーターを設定してください。 前述の例にあるすべてのベンダープレフィックスを使用してください。 そして、`border-radius` ミックスインを使用して、`#awesome` 要素に `15px` の境界線半径を設定してください。

# --hints--

`$radius` というパラメーターを持つ `border-radius` というミックスインをコードで宣言します。

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

`$radius` パラメーターを使用する `-webkit-border-radius` ベンダープレフィックスをコードに含めます。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

`$radius` パラメーターを使用する `-moz-border-radius` ベンダープレフィックスをコードに含めます。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

`$radius` パラメーターを使用する `-ms-border-radius` ベンダープレフィックスをコードに含めます。

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

`$radius` パラメーターを使用する汎用の `border-radius` ルールをコードに含めます。

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

`@include` キーワードを使用して `border-radius mixin` を呼び出し、`15px` に設定します。

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
