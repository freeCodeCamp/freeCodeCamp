---
id: 587d7dbe367417b2b2512bb8
title: استخدم @if و @else لإضافة المنطق إلى التصميم الخاصة بك
challengeType: 0
forumTopicId: 301463
dashedName: use-if-and-else-to-add-logic-to-your-styles
---

# --description--

التوجيه `@if` في Sass مفيد لاختبار حالة محددة - إنه يعمل تماما مثل `if` تعبير في JavaScript.

```scss
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```

ومثلها تماما في JavaScript، يختبرا `@else if` و `@else` المزيد من الشروط:

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

إنشاء mixin يسمى `border-stroke` التي تأخذ وسيط `$val`. يجب على mixin التحقق من الشروط التالية باستخدام `@if`، و `@else if`، و `@else`:

```scss
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```

إذا كان `$val` ليس `light`، أو `medium`، أو `heavy`، ينبغي تعيين border إلى `none`.

# --hints--

يجب أن يعلن الكود الخاص بك mixin اسمه `border-stroke` يحتوي على وسيط اسمه `$val`.

```js
assert(code.match(/@mixin\s+?border-stroke\s*?\(\s*?\$val\s*?\)\s*?{/gi));
```

يجب أن يكون لديك تعبير mixin من `@if` يتحقق مما إذا كان `$val` هو `light`، ولتحديد `border` بقيمة `1px solid black`.

```js
assert(
  code.match(
    /@if\s+?\$val\s*?===?\s*?light\s*?{\s*?border\s*?:\s*?1px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

يجب أن يكون لديك تعبير mixin من `@else if` يتحقق مما إذا كان `$val` هو `medium`، ولتحديد `border` بقيمة `3px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?medium\s*?{\s*?border\s*?:\s*?3px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

يجب أن يكون لديك تعبير mixin من `@else if` يتحقق مما إذا كان `$val` هو `heavy`، ولتحديد `border` بقيمة `6px solid black`.

```js
assert(
  code.match(
    /@else\s+?if\s+?\$val\s*?===?\s*?heavy\s*?{\s*?border\s*?:\s*?6px\s+?solid\s+?black\s*?;\s*?}/gi
  )
);
```

يجب أن يكون لديك تعبير mixin من `@else` لتحديد `border` إلى `none`.

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
