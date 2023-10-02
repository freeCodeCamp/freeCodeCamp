---
id: 587d78ae367417b2b2512aff
title: Використовуйте властивість порядку для перестановки елементів
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

Властивість `order` використовують для визначення CSS порядку розташування flex-елементів у flex-контейнері. За замовчуванням елементи будуть з'являтись у тому ж порядку, який вказаний у вихідному HTML-коді. Властивість сприймає цифри як значення; можна також використовувати від'ємні числа.

# --instructions--

Додайте властивість CSS `order` до `#box-1` та `#box-2`. Задайте `#box-1` значення `2`, а `#box-2` - значення `1`.

# --hints--

Елемент `#box-1` повинен мати властивість `order` зі значенням `2`.

```js
assert($('#box-1').css('order') == '2');
```

Елемент `#box-2` повинен мати властивість `order` зі значенням `1`.

```js
assert($('#box-2').css('order') == '1');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
