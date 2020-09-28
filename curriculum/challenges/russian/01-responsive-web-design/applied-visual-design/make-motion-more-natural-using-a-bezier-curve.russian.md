---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: https://scrimba.com/c/c7akWUv
forumTopicId: 301063
localeTitle: Сделать движение более естественным, используя кривую Безье
---

## Description
<section id='description'>
Этот вызов оживляет элемент для репликации движения шарика, который жонглирует. Предыдущие проблемы охватывали <code>linear</code> и <code>ease-out</code> кубические кривые Безье, однако они не отображали точное движение жонглирования. Для этого вам нужно настроить кривую Безье. Функция <code>animation-timing-function</code> автоматически зацикливается на каждом ключевом кадре, когда <code>animation-iteration-count</code> установлен на бесконечный. Поскольку в середине продолжительности анимации задано правило ключевого кадра (на <code>50%</code> ), это приводит к двум идентичным прогрессиям анимации при движении мяча вверх и вниз. Следующая кубическая кривая Безье моделирует движение жонглирования: <code>cubic-bezier(0.3, 0.4, 0.5, 1.6);</code> Обратите внимание, что значение y2 больше 1. Хотя кубическая кривая Безье отображается в системе координат 1 на 1, и она может принимать только значения х от 0 до 1, значение y может быть установлено на числа, большие, чем единицы. Это приводит к прыгающему движению, которое идеально подходит для имитации шара жонглирования.
</section>

## Instructions
<section id='instructions'>
Измените значение функции <code>animation-timing-function</code> элемента с идентификатором <code>green</code> на функцию <code>cubic-bezier</code> с значениями x1, y1, x2, y2, установленными соответственно 0,311, 0,441, 0,444, 1,649.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>green</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values as specified.
    testString: assert($('#green').css('animation-timing-function') == 'cubic-bezier(0.311, 0.441, 0.444, 1.649)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
