---
id: 587d7dbd367417b2b2512bb6
title: Створюйте багаторазові СSS з Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

В розширенні Sass <dfn>Міксини (Mixins)</dfn> - це група CSS декларацій яка може бути повторно використана в межах всієї таблиці стилів.

Новіші налаштування CSS потребують трохи часу, перш ніж вони будуть повністю прийняті та готові до використання у всіх браузерах. Оскільки функції додаються до браузерів, правила CSS, що їх використовують, можуть потребувати вендорних (vendor) префіксів. Розглянемо `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Потрібно вписати чимало тексту, щоб перезаписати це правило для всіх елементів, які мають в собі `box-shadow`, чи щоб змінити кожне значення для перевірки різних ефектів. Міксини - це як функції для CSS. Ось приклад як написати один з них:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Визначення починається з `@mixin`, за яким слідує ім'я користувача. Параметри (`$x`,`$y`,`$blur`, та `$c` в прикладі наведеному вище) не є обов'язковими. Тепер, коли нам необхідне правило `box-shadow`, то лише один рядок, що викликає mixin, замінює необхідність введення всіх вендорних префіксів. Міксин викликається директивою `@include`:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

Напишіть міксин для `border-radius` і надайте йому параметр `$radius`. В ньому повинні бути використані всі вендорні префікси з прикладу. Після цього використайте міксин `border-radius` для того щоб надати елементу `#awesome` заокруглений радіус зі значенням `15px`.

# --hints--

Ваш код повинен вказати на міксин `border-radius` з параметром `$radius`.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

Ваш код повинен включати в себе вендорний префікс `-webkit-border-radius`, який використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

Ваш код повинен включати в себе вендорний префікс `-moz-border-radius`, який використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

Ваш код повинен включати в себе вендорний префікс `-ms-border-radius`, який використовує параметр `$radius`.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

Ваш код повинен включати в себе загальне правило `border-radius`, яке використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

Ваш код повинен викликати `border-radius mixin` використовуючи директиву `@include`, задаючи значення `15px`.

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
