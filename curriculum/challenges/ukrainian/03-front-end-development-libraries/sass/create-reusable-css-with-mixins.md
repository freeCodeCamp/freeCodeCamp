---
id: 587d7dbd367417b2b2512bb6
title: Створіть багаторазовий CSS за допомогою міксинів
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

<dfn>Міксин</dfn> у Sass — це група оголошень CSS, які можна повторно використовувати у таблиці стилів.

Новіші функції CSS потребують трохи часу, перш ніж вони будуть повністю прийнятними та готовими до використання у всіх браузерах. Як тільки функції додано до браузерів, то правилам CSS, які використовують їх, можливо, знадобляться вендорні префікси. Розглянемо `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

Потрібно написати багато тексту, щоб переписати правило для всіх елементів, які мають `box-shadow`, чи щоб змінити кожне значення для перевірки різних ефектів. Міксини — це як функції для CSS. Ось приклад як написати один з них:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

Визначення починається з `@mixin`, після якого пишуть назву. Параметри (`$x`, `$y`, `$blur` та `$c` у прикладі вище) необов’язкові. Тепер, якщо нам знадобиться правило `box-shadow`, то лише один рядок, який викличе міксин, замінює необхідність написання усіх вендорних префіксів. Міксин викликається директивою `@include`:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

Напишіть міксин для `border-radius` і надайте йому параметр `$radius`. Він має використати усі вендорні префікси з прикладу. Після цього використайте міксин `border-radius`, щоб надати елементу `#awesome` заокруглений радіус зі значенням `15px`.

# --hints--

Код має оголосити міксин під назвою `border-radius`, який має параметр `$radius`.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

Код має містити вендорний префікс `-webkit-border-radius`, який використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

Код має містити вендорний префікс `-moz-border-radius`, який використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

Код має містити вендорний префікс `-ms-border-radius`, який використовує параметр `$radius`.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

Код має містити загальне правило `border-radius`, яке використовує параметр `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

Код має викликати `border-radius mixin` за допомогою ключового слова `@include`, встановивши його на `15px`.

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
