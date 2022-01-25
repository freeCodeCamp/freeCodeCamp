---
id: 587d7dbf367417b2b2512bba
title: '@each を使用してリスト内の各アイテムをマップする'
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

前回のチャレンジでは、 `@for` ディレクティブで開始値と終了値を使用して特定の回数を繰り返し処理する方法を紹介しました。 Sass には、リストやマップの各アイテムをループ処理する `@each` ディレクティブもあります。 それぞれの繰り返しで、リストまたはマップの現在の値が変数に割り当てられます。

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

マップの構文は少し異なります。 例:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

マップのキーを参照するために `$key` 変数が必要です。 変数がない場合、コンパイル後の CSS には `color1`、 `color2`... が含まれます。 上記のコード例はどちらも次の CSS に変換されます。

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

リスト `blue, black, red` をひととおり処理して各変数に `.color-bg` クラス (`color` の部分はアイテムごとに変化します) を割り当てる `@each` ディレクティブを記述してください。 各クラスの `background-color` にそれぞれの色を設定してください。

# --hints--

コードで `@each` ディレクティブを使用します。

```js
assert(code.match(/@each /g));
```

`.blue-bg` クラスの `background-color` を青に設定します。

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

`.black-bg` クラスの `background-color` を黒に設定します。

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

`.red-bg` クラスの `background-color` を赤に設定します。

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
