---
id: 587d78ab367417b2b2512af2
title: Використовуйте параметр flex-direction, щоб створити рядок
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

Додавання `display: flex` до елементу перетворює його в flex-контейнер. Це робить можливим вирівнювання будь-яких дочірніх елементів у рядки або стовпці. Це можна зробити, додавши властивість `flex-direction` до батьківського елемента та встановивши його для рядка чи стовпця. Створення рядка вирівнює дочірні елементи горизонтально, а створення стовпця вирівнює їх вертикально.

Іншими параметрами для `flex-direction` є `row-reverse` та`column-reverse`.

**Note:** Значення за замовчуванням для `flex-direction` властивість `row`.

# --instructions--

Додайте властивість CSS `flex-direction` в елемент `#box-container` та надайте йому значення `row-reverse`.

# --hints--

Елемент `#box-container` повинен мати властивість `flex-direction` встановлену для `row-reverse`.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
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
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
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
