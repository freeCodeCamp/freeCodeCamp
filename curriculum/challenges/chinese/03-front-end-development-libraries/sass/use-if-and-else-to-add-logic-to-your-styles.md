---
id: 587d7dbe367417b2b2512bb8
title: 使用 @if 和 @else 为样式添加逻辑
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

Sass 中的 `@if` 指令对于测试特定情况非常有用——它的工作方式与 JavaScript 中的 `if` 语句类似。

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

And just like in JavaScript, the `@else if` and `@else` directives test for more conditions:

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

创建一个名为 `border-stroke` 的 mixin，它接受一个参数 `$val`。 The mixin should check for the following conditions using `@if`, `@else if`, and `@else` directives:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

If the `$val` parameter value is not `light`, `medium`, or `heavy`, then the `border` property should be set to `none`.

# --hints--

应该声明一个名为 `border-stroke` 的 mixin，它有一个名为 `$val` 的参数。

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

mixin 应该有一个 `@if` 语句来检查 `$val` 是否等于 `light`，并将 `border` 设置为 `1px solid black`。

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

mixin 应该有一个 `@else if` 语句来检查 `$val` 是否等于 `medium`，并设置 `border` 为 `3px solid black`。

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

mixin 应该有一个 `@else if` 语句来检查 `$val` 是否等于 `heavy`，并设置 `border` 为 `6px solid black`。

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

mixin 应该有一个 `@else` 语句来将 `border` 设置为 `none`。

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
