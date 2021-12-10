---
id: 587d7dbf367417b2b2512bbb
title: Застосування стилю до виконання умови з @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

Директива `@while` - це опція з схожою функціональністю як в циклу `while` в Javascript. Це створює правила СSS до моменту виконання умови.

Завдання `@for` продемонструвало як створити просту сіткову систему. Це також може працювати з `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Спершу визначте змінну `$x` та встановіть значення 1. Далі, використовуйте директиву `@while` для створення сіткової системи *за умови *`$x` - менше 13. Після встановлення правила CSS для `width`, `$x` збільшується на 1, щоб уникнути нескінченного циклу.

# --instructions--

Використовуйте `@while` для створення серії класів з різними `font-sizes`.

Тут повинні бути 5 різних класів від `text-1` до `text-5`. Далі встановіть `font-size` для `15px`, помножений на поточний номер індексу. Переконайтеся, що ви уникаєте безкінечного циклу!

# --hints--

Ваш код повинен використовувати `@while` директиву.

```js
assert(code.match(/@while /g));
```

Ваш код повинен використовувати індексну змінну, яка починається з індексу 1.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

Ваш код повинен збільшити змінну лічильника.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

Ваш клас `.text-1` повинен мати `font-size`-`15px`.

```js
assert($('.text-1').css('font-size') == '15px');
```

Ваш клас `.text-2` повинен мати `font-size`-`30px`.

```js
assert($('.text-2').css('font-size') == '30px');
```

Ваш клас `.text-3` повинен мати `font-size`-`45px`.

```js
assert($('.text-3').css('font-size') == '45px');
```

Ваш клас `.text-4` повинен мати `font-size`-`60px`.

```js
assert($('.text-4').css('font-size') == '60px');
```

Ваш клас `.text-5` повинен мати `font-size`-`75px`.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
