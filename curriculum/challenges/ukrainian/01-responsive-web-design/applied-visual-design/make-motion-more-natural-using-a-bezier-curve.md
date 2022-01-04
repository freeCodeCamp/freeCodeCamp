---
id: 587d78a9367417b2b2512aea
title: Зробити рух більш природнім за допомогою кривої Безьє
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

Це завдання заохочує елемент для повтору руху кульки, якою жонглюють. Пріоритетні завдання охоплювали кубічні криві Безьє `linear` і `ease-out`, однак жодна із них не зображує точно сам рух жонглювання. Для цього вам потрібно налаштувати криву Безьє.

`animation-timing-function` автоматично з'являється на кожному ключовому кадрі, коли `animation-iteration-count` встановлений до безкінечності. Так як існує правило ключового кадру, встановлене всередині тривалості анімації (на `50%`), це призводить до виникнення двох однакових анімацій руху м'яча вгору і вниз.

Наступна кубічна крива Безьє відтворює рух жонглювання:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Зазначте собі, що значення y2 більше, ніж 1. Хоча кубічна крива Безьє розміщена в точці 1 на 1 в системі координат, і це лише приймає значення х від 0 до 1, значення може бути встановлене у цифрах, які дорівнюють більше 1. Це приведе до того, що рух стрибка, який є ідеальним для відтворення жонглювання м'яча.

# --instructions--

Змініть значення `animation-timing-function` елемента з ідентифікацією `green` до функції `cubic-bezier` зі заченнями х1, y1, x2, y2, які вказані відповідно до 0.311, 0.441, 0.444, 1.649.

# --hints--

Значення властивості `animation-timing-function` для елемента з ідентифікацією `green` повинне бути функцією `cubic-bezier` з вказаними значеннями x1, y1, x2, y2.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
