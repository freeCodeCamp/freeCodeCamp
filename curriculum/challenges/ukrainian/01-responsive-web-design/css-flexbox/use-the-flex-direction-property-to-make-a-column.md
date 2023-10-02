---
id: 587d78ac367417b2b2512af4
title: Використання властивості flex-direction для створення стовпця
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

В останніх двох завданнях використовувалася властивість `flex-direction`, встановлена як `row`. Також ця властивість може створювати стовпець, вертикально розташовуючи дочірні елементи flex контейнера.

# --instructions--

Додайте властивість CSS `flex-direction` до елемента `#box-container` та надайте йому значення `column`.

# --hints--

Елемент `#box-container` повинен мати властивість `flex-direction` зі значенням `column`.

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    flex-direction: column;
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
