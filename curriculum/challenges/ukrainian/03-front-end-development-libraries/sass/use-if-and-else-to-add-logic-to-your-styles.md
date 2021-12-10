---
id: 587d7dbe367417b2b2512bb8
title: Використовуйте @if і @else, щоб додати логіку у свої стилі
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

Директива `@if` у Sass корисна для тестування конкретного випадку. Вона працює, так само як оператор `if` у JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

Як і в JavaScript, `@else if` і `@else` перевіряють наявність додаткових умов:

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

Створіть міксин з ім'ям `border-stroke`, який приймає параметр `$val`. Міксин повинен перевіряти наступні умови за допомогою `@if`, `@else if` і `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

Якщо `$val` не є `light`, `medium` або `heavy`, для елемента border повинно бути встановлено значення `none`.

# --hints--

Ваш код повинен задати міксин `border-stroke` з параметром `$val`.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

Ваш міксин повинен містити команду з `@if`, щоб перевірити `$val` на значення `light` і встановити для `border` значення `1px solid black`.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Ваш міксин повинен містити команду з `@else if`, щоб перевірити `$val` на значення `medium` і встановити для `border` значення `3px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Ваш міксин повинен містити команду з `@else if`, щоб перевірити `$val` на значення `heavy` і встановити для `border` значення `6px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Ваш міксин повинен містити оператор `@else`, щоб встановити для `border` значення `none`.

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
