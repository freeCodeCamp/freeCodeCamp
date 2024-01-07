---
id: 587d7dbf367417b2b2512bbb
title: Застосуйте стиль до виконання умови за допомогою @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

Директива `@while` — це опція з функціональністю, схожою до циклу `while` в JavaScript. Вона створює правила СSS, допоки не виконано умову.

Завдання з `@for` показало, як створити звичайну сіткову систему. Для цього також можна використати `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

Спершу визначте змінну `$x` та встановіть значення 1. Потім використайте директиву `@while`, щоб створити сіткову систему, *допоки* `$x` менше за 13. Після встановлення правила CSS для `width`, `$x` збільшується на 1, щоб уникнути нескінченного циклу.

# --instructions--

Використайте `@while`, щоб створити серію класів з різними `font-sizes`.

Тут має бути 5 різних класів від `text-1` до `text-5`. Потім встановіть `font-size` на `15px`, помноженим на поточний номер індексу. Переконайтеся, що уникаєте нескінченного циклу!

# --hints--

Ваш код має використати директиву `@while`.

```js
assert(code.match(/@while /g));
```

Ваш код має використати індексовану змінну, яка починається з індексу 1.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

Ваш код має збільшити змінну лічильника.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

Клас `.text-1` повинен мати `font-size` зі значенням `15px`.

```js
assert($('.text-1').css('font-size') == '15px');
```

Клас `.text-2` повинен мати `font-size` зі значенням `30px`.

```js
assert($('.text-2').css('font-size') == '30px');
```

Клас `.text-3` повинен мати `font-size` зі значенням `45px`.

```js
assert($('.text-3').css('font-size') == '45px');
```

Клас `.text-4` повинен мати `font-size` зі значенням `60px`.

```js
assert($('.text-4').css('font-size') == '60px');
```

Клас `.text-5` повинен мати `font-size` зі значенням `75px`.

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
