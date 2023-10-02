---
id: bad87fee1348bd8aedf06756
title: Заміна об'яв класів за стилем атрибутів ID
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

Ми щойно довели, що браузери читають CSS зверху вниз в порядку їх об'яв. Це означає, що, у випадку конфлікту, браузер використає ту об'яву CSS, що вказана останньою. Зверніть увагу, що навіть якби ми поставили `blue-text` перед `pink-text` у класах елемента `h1`, він все одно б орієнтувався на порядок об'яв, а не на порядок їх використання!

Але ми ще не закінчили. Є й інші способи замінити CSS. Пригадуєте атрибути id?

Давайте замінимо класи `pink-text` та `blue-text` і зробимо елемент `h1` оранжевим, надавши елементу the `h1` id, і згодом стилізуємо цей id.

# --instructions--

Задайте елементу `h1` атрибут `id` `orange-text`. Пам'ятайте, що стилі id виглядають так:

```html
<h1 id="orange-text">
```

Залишіть класи `blue-text` та `pink-text` на елементі `h1`.

Створіть об'яву CSS для id `orange-text` в елементі `style`. Ось приклад того, як це виглядає:

```css
#brown-text {
  color: brown;
}
```

**Примітка:** Не важливо чи ви об'явите цей CSS вище або нижче класу `pink-text`, оскільки атрибут `id` завжди матиме пріоритет.

# --hints--

Елемент `h1` повинен мати клас `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Елемент `h1` повинен мати клас `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Елемент `h1` повинен мати id `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

Має бути лише один елемент `h1`.

```js
assert($('h1').length === 1);
```

Id `orange-text` повинен мати об'яву CSS.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Елемент `h1` не повинен мати жодних атрибутів `style`.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Елемент `h1` повинен бути оранжевим.

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
