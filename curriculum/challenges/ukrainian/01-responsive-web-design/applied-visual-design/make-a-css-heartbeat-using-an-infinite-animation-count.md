---
id: 587d78a8367417b2b2512ae4
title: Створення анімації серцебиття за допомогою властивості Infinite Animation Count
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

Ось ще один приклад безперервної анімації з властивістю `animation-iteration-count`, що використовує серце, яке ви створили в попередньому завданні.

Анімація серцебиття тривалістю в одну секунду складається з двох анімованих частин. Елементи `heart` (у тому числі частини `:before` та `:after`) анімуються, щоб змінити розмір за допомогою властивості `transform`, а фон `div` анімується, щоб змінити його колір за допомогою властивості `background`.

# --instructions--

Щоб серце почало битися, додайте властивість `animation-iteration-count` для класу `back` і класу `heart` та задайте значення `infinite`. Селектори `heart:before` та `heart:after` не потребують жодних властивостей анімації.

# --hints--

Властивість `animation-iteration-count` для класу `heart` повинна мати значення `infinite`.

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

Властивість `animation-iteration-count` для класу `back` повинна мати значення `infinite`.

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```
