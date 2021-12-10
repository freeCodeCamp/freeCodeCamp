---
id: 587d7dbe367417b2b2512bb9
title: Використовуйте @for, щоб створити цикл Sass
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

Директива `@for` додає стилі в цикл подібно циклу `for` у JavaScript.

`@for` використовується двома способами: «від початку до кінця» або «від початку до самого кінця». Основна відмінність полягає в тому, що «від початку **to** до кінця» *виключає* кінцеве число з підрахунку, а «від початку **до самого** кінця» *включає* кінцеве число в підрахунок.

Ось початок **до** кінцевого прикладу:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

Частина `#{$i}` – це синтаксис, який поєднує змінну (`i`) з текстом для створення рядка. Коли файл Sass конвертовано в CSS, це виглядає приблизно так:

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

Ця функція повинна створити 5 класів з іменами від `.text-1` до `.text-5`, де для кожного `font-size` встановлено значення 15 пікселів, помножене на індекс.

# --hints--

Ваш код має застосовувати директиву `@for`.

```js
assert(code.match(/@for /g));
```

Ваш клас `.text-1` повинен мати `font-size` 15 пікселів.

```js
assert($('.text-1').css('font-size') == '15px');
```

Ваш клас `.text-2` повинен мати `font-size` 30 пікселів.

```js
assert($('.text-2').css('font-size') == '30px');
```

Ваш клас `.text-3` повинен мати `font-size` 45 пікселів.

```js
assert($('.text-3').css('font-size') == '45px');
```

Ваш клас `.text-4` повинен мати `font-size` 60 пікселів.

```js
assert($('.text-4').css('font-size') == '60px');
```

Ваш клас `.text-5` повинен мати `font-size` 75 пікселів.

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
