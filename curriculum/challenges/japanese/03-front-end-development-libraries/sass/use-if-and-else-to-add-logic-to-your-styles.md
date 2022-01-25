---
id: 587d7dbe367417b2b2512bb8
title: '@if と @else を使用してスタイルにロジックを追加する'
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

Sass の `@if` ディレクティブは特定の case をテストするのに便利です。JavaScript の `if` ステートメントとまったく同じように動作します。

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

JavaScript と同様に、`@else if` と `@else` でテストする条件を増やします。

```scss
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```

# --instructions--

パラメーター `$val` を受け取る `border-stroke` というミックスインを作成してください。 ミックスインでは `@if`、`@else if`、`@else` を使用して次の条件をチェックしてください。

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

`$val` が `light` でも `medium` でも `heavy` でもない場合は、境界線を `none` に設定してください。

# --hints--

`$val` というパラメーターを持つ `border-stroke` というミックスインをコードで宣言します。

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

ミックスインで `@if` ステートメントを使用して、`$val` が `light` かどうかをチェックし、`border` を `1px solid black` に設定します。

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ミックスインで `@else if` ステートメントを使用して、`$val` が `medium` かどうかをチェックし、`border` を `3px solid black` に設定します。

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ミックスインで `@else if` ステートメントを使用して、`$val` が `heavy` かどうかをチェックし、`border` を `6px solid black` に設定します。

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

ミックスインで `@else` ステートメントを使用して、`border` を `none` に設定します。

```js
assert(code.match(/@else\s*?{\s*?border\s*?:\s*?none\s*?;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```
