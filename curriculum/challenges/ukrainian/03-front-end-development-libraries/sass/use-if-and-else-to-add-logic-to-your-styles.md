---
id: 587d7dbe367417b2b2512bb8
title: Використайте @if та @else, щоб додати логіку до стилів
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

Директива `@if` у Sass корисна для тестування конкретного випадку. Вона працює так само, як й інструкція `if` у JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

Як і в JavaScript, директиви `@else if` та `@else` перевіряють наявність додаткових умов:

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

Створіть міксин під назвою `border-stroke`, який приймає параметр `$val`. Міксин має перевірити умови за допомогою директив `@if`, `@else if` та `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

Якщо значення параметра `$val` не `light`, `medium` чи `heavy`, то значенням властивості `border` має бути `none`.

# --hints--

Код має оголосити міксин під назвою `border-stroke`, який має параметр `$val`.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

Міксин повинен мати інструкцію `@if`, щоб перевірити, чи значенням `$val` є `light`, та встановити `border` на `1px solid black`.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Міксин повинен мати інструкцію `@else if`, щоб перевірити, чи значенням `$val` є `medium`, та встановити `border` на `3px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Міксин повинен мати інструкцію `@else if`, щоб перевірити, чи значенням `$val` є `heavy`, та встановити `border` на `6px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

Міксин повинен мати інструкцію `@else`, щоб встановити `border` на `none`.

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
