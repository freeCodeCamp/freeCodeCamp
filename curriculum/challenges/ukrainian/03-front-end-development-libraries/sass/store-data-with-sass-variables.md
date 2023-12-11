---
id: 587d7dbd367417b2b2512bb4
title: Збережіть дані за допомогою змінних Sass
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

Sass відрізняється від CSS тим, що використовує змінні. Їх оголошують та налаштовують для зберігання даних, схоже до JavaScript.

Змінні у JavaScript визначають за допомогою ключових слів `let` та `const`. Змінні у Sass починаються з `$`, після якого пишуть ім’я змінної.

Ось декілька прикладів:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

Та використання змінних:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

Змінні корисні, наприклад, якщо потрібно зробити певну кількість елементів одного кольору. Якщо цей колір буде змінений, доведеться змінити лише значення змінної.

# --instructions--

Створіть змінну `$text-color` і встановіть для неї значення `red`. Потім змініть значення властивості `color` елементів `.blog-post` та `h2` на змінну `$text-color`.

# --hints--

Ваш код повинен мати змінну Sass, оголошену для `$text-color` зі значенням `red`.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

Ваш код має використати змінну `$text-color`, щоб змінити `color` елементів `.blog-post` та `h2`.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

Елемент `.blog-post` повинен мати `color` зі значенням red.

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

Елементи `h2` повинні мати `color` зі значенням red.

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
