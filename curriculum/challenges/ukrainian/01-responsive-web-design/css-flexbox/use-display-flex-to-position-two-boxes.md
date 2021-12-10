---
id: 587d78ab367417b2b2512af0
title: 'Використання display: flex для розміщення двох боксів'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

Цей розділ застосовує альтернативні стилі виконання завдання, щоб показати, як використовувати CSS для розміщення елементів гнучким способом. Спочатку в завданні пояснюється теорія, а потім у практичному завданні за допомогою простого компонента твіту застосовується концепція flexbox.

Розміщення властивості CSS `display: flex;` в елементі дозволяє використовувати інші flex властивості для створення адаптивної сторінки.

# --instructions--

Додайте властивість CSS `display` до `#box-container` та встановіть значення `flex`.

# --hints--

`#box-container` повинен мати налаштовану властивість `display` до значення `flex`.

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
