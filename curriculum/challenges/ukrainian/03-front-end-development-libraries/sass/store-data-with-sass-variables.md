---
id: 587d7dbd367417b2b2512bb4
title: Зберігання даних за допомогою змінних Sass
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Одна особливість Sass, відмінна від CSS, – це використання змінних. Вони оголошуються і встановлюються для зберігання даних, як в JavaScript.

У JavaScript змінні визначаються за допомогою ключових слів `let` і `const`. У Sass змінні починаються з `$`, за яким слідує ім'я змінної.

Ось кілька прикладів:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

Для використання змінних:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

Один із прикладів використання змінних – це коли кілька елементів повинні бути одного кольору. Якщо цей колір змінений, єдине місце для редагування коду – це значення змінної.

# --instructions--

Створіть змінну `$text-color` і встановіть для неї значення `red`. Потім змініть значення властивості `color` для `.blog-post` і `h2` для змінної `$text-color`.

# --hints--

У вашому коді повинна бути оголошена змінна Sass для `$text-color` із значенням `red`.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

Ваш код повинен використовувати змінну `$text-color` для зміни `color` для елементів `.blog-post` і `h2`.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

Елемент `.blog-post` повинен мати червоний колір `color`.

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

Елементи `h2` повинні мати червоний колір `color`.

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
