---
id: 587d78a8367417b2b2512ae6
title: Анімація елементів зі змінною швидкістю
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

У попередньому завданні ви змінили швидкість анімації для двох елементів зі схожою анімацією, змінивши їхні правила `@keyframes`. Ви можете досягти тієї ж мети, маніпулюючи `animation-duration` кількох елементів.

В анімації, що виконується в редакторі коду, представлено три зірки на небі, які безперервно миготять з однаковою швидкістю. Щоб вони мерехтіли не синхронно, ви можете встановити властивість `animation-duration` для різних значень у кожному елементі.

# --instructions--

Встановіть `animation-duration` елементів класу `star-1`, `star-2`, і `star-3` на 1, 0.9 та 1.1 секунди відповідно.

# --hints--

Так `animation-duration` властивість для зірки класу `star-1` має становити 1 секунду.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

Тоді як `animation-duration` властивість для зірки класу `star-2` має становити 0.9 секунди.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

А `animation-duration` властивість для зірки класу `star-3` має складати 1.1 секунди.

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```
