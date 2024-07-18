---
id: 587d7dbd367417b2b2512bb6
title: ミックスインを使用して再利用可能な CSS を作成する
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

Sass の<dfn>ミックスイン</dfn>は、スタイルシート全体で再利用できる CSS 宣言のグループです。 定義は `@mixin` というアットルールで始め、その後にカスタム名を付けます。 ミックスインを適用するには `@include` というアットルールを使います。

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  @include reset-list;
}
```

上記は次のようにコンパイルされます:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

ミックスインは引数を取ることもでき、これにより動作をカスタマイズすることができます。 下記の引数は、ミックスインを使用する際必須となります。

```scss
@mixin prose($font-size, $spacing) {
  font-size: $font-size;
  margin: 0;
  margin-block-end: $spacing;
}

p {
  @include prose(1.25rem, 1rem);
}

h2 {
  @include prose(2.4rem, 1.5rem);
}
```

仮引数にデフォルト値を指定することで、引数を省略可能にできます。

```scss
@mixin text-color($color: black) {
  color: $color;
}

p {
  @include text-color(); /* color: black */
}

nav a {
  @include text-color(orange);
}
```

# --instructions--

`shape` という名前のミックスインを記述し、`$w`、`$h`、`$bg-color` という 3 つの仮引数を指定してください。

ミックスイン `shape` を使用して、`#square` の要素の幅と高さを `50px`、背景色を `red` にしてください。 `#rect-a` の要素は、幅 `100px`、高さ `50px`、背景色を `blue` にしてください。 そして `#rect-b` の要素は、幅 `50px`、高さ `100px`、背景色を `orange` にしてください。

# --hints--

`shape` という名前で、`$w`、`$h`、`$bg-color` という 3 つの仮引数を持つミックスインを定義してください。

```js
assert.match(code, /@mixin\s+shape\s*\(\s*\$w,\s*\$h,\s*\$bg-color\s*\)\s*{/gi);
```

ミックスインには、仮引数 `$w` を使用する `width` プロパティが含まれている必要があります。

```js
assert.match(__helpers.removeWhiteSpace(code), /width:\$w;/gi);
```

ミックスインには、仮引数 `$h` を使用する `height` プロパティが含まれている必要があります。

```js
assert.match(__helpers.removeWhiteSpace(code), /height:\$h;/gi);
```

ミックスインには、仮引数 `$bg-color` を使用する `background-color` プロパティが含まれている必要があります。

```js
assert.match(__helpers.removeWhiteSpace(code), /background-color:\$bg\-color;/gi);
```

`@include` キーワードを使用して、`#square` セレクター内のスタイルを `shape` ミックスインの呼び出しに置き換えてください。 幅と高さは `50px`、背景色は `red` に設定してください。

```js
assert.match(code, /#square\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*50px\s*,\s*red\s*\)\s*;\s*}/gi);
```

`@include` キーワードを使用して、`#rect-a` セレクター内のスタイルを `shape` ミックスインの呼び出しに置き換えてください。 幅 `100px`、高さ `50px`、背景色を `blue` にしてください。

```js
assert.match(code, /#rect-a\s*{\s*@include\s+shape\s*\(\s*100px\s*,\s*50px\s*,\s*blue\s*\)\s*;\s*}/gi);
```

`@include` キーワードを使用して、`#rect-b` セレクター内のスタイルを `shape` ミックスインの呼び出しに置き換えてください。 幅 `50px`、高さ `100px`、背景色を `orange` にしてください。

```js
assert.match(code, /#rect-b\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*100px\s*,\s*orange\s*\)\s*;\s*}/gi);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
#square {
  width: 50px;
  height: 50px;
  background-color: red;
}

#rect-a {
  width: 100px;
  height: 50px;
  background-color: blue;
}

#rect-b {
  width: 50px;
  height: 100px;
  background-color: orange;
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```

# --solutions--

```html
<style type='text/scss'>
@mixin shape($w, $h, $bg-color) {
  width: $w;
  height: $h;
  background-color: $bg-color;
}

#square {
  @include shape(50px, 50px, red);
}

#rect-a {
  @include shape(100px, 50px, blue);
}

#rect-b {
  @include shape(50px, 100px, orange);
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```
