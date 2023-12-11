---
id: 587d7dbe367417b2b2512bb9
title: Використайте @for, щоб створити цикл Sass
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

Директива `@for` додає стилі до циклу, схоже до циклу `for` в JavaScript.

`@for` використовують двома способами: «від початку до кінця» або «від початку до самого кінця». Основна відмінність полягає в тому, що «від початку **до** кінця» *виключає* кінцеве число з підрахунку, а «від початку **до самого** кінця» *включає* кінцеве число в підрахунок.

Ось приклад від початку **до** кінця:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

Частина `#{$i}` — це синтаксис, який поєднує змінну (`i`) з текстом, щоб створити рядок. Коли файл Sass конвертовано в CSS, це виглядає приблизно так:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

Це ефективний спосіб створення макету сітки. Тепер у вас є дванадцять варіантів ширини стовпців, доступних як класи CSS.

# --instructions--

Напишіть директиву `@for`, яка приймає змінну `$j` від 1 **до** 6.

Вона має створити 5 класів (від `.text-1` до `.text-5`), кожен з яких має `font-size` зі значенням 15px, помноженим на індекс.

# --hints--

Ваш код має використати директиву `@for`.

```js
assert(code.match(/@for /g));
```

Клас `.text-1` повинен мати `font-size` зі значенням 15px.

```js
assert($('.text-1').css('font-size') == '15px');
```

Клас `.text-2` повинен мати `font-size` зі значенням 30px.

```js
assert($('.text-2').css('font-size') == '30px');
```

Клас `.text-3` повинен мати `font-size` зі значенням 45px.

```js
assert($('.text-3').css('font-size') == '45px');
```

Клас `.text-4` повинен мати `font-size` зі значенням 60px.

```js
assert($('.text-4').css('font-size') == '60px');
```

Клас `.text-5` повинен мати `font-size` зі значенням 75px.

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

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
