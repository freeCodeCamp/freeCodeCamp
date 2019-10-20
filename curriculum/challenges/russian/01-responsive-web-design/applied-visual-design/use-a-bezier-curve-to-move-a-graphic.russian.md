---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: https://scrimba.com/c/c6bnRCK
forumTopicId: 301071
localeTitle: Используйте кривую Безье для перемещения графика
---

## Description
<section id='description'>
В предыдущем задании обсуждалось ключевое слово <code>ease-out</code> которое описывает изменение анимации, которое ускоряется сначала, а затем замедляется в конце анимации. Справа показана разница между ключевым словом <code>ease-out</code> (для синего элемента) и <code>linear</code> ключевым словом (для красного элемента). Подобные анимационные прогрессии к <code>ease-out</code> ключевому слову могут быть достигнуты с помощью пользовательской кубической функции кривой Безье. В общем случае изменение опорных точек <code>p1</code> и <code>p2</code> приводит к созданию различных кривых Безье, которые контролируют ход анимации во времени. Вот пример кривой Безье с использованием значений, имитирующих стиль непринужденности: <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> Помните, что все функции <code>cubic-bezier</code> начинаются с <code>p0</code> at (0, 0) и заканчиваются <code>p3</code> в (1, 1). В этом примере кривая движется быстрее по оси Y (начинается с 0, переходит в <code>p1</code> y значение 0, затем переходит в значение <code>p2</code> y 1), чем она перемещается по оси X (0 для начала, затем 0 для <code>p1</code> , до 0,58 для <code>p2</code> ). В результате изменение анимированного элемента происходит быстрее, чем время анимации для этого сегмента. К концу кривой соотношение между изменением значений x и y меняется на противоположное - значение y перемещается от 1 до 1 (без изменений), а значения x перемещаются от 0,58 до 1, что делает изменения анимации медленнее по сравнению с продолжительность анимации.
</section>

## Instructions
<section id='instructions'>
Чтобы увидеть эффект этой кривой Безье в действии, измените <code>animation-timing-function</code> элемента с id <code>red</code> на функцию <code>cubic-bezier</code> с значениями x1, y1, x2, y2, установленными соответственно 0, 0, 0.58, 1 Это заставит оба элемента продвигаться по анимации аналогичным образом.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .
    testString: assert($('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)');
  - text: The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.
    testString: assert($('#red').css('animation-timing-function') !== 'linear');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.
    testString: assert($('#blue').css('animation-timing-function') == 'ease-out');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

</section>
