---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: https://scrimba.com/c/c9bDrs8
forumTopicId: 301058
localeTitle: Узнайте, как работают кривые Безье
---

## Description
<section id='description'>
Последняя задача <code>animation-timing-function</code> свойство <code>animation-timing-function</code> и несколько ключевых слов, которые изменяют скорость анимации в течение ее продолжительности. CSS предлагает опцию, отличную от ключевых слов, которая обеспечивает еще более точный контроль над тем, как анимация разыгрывается, используя кривые Безье. В анимациях CSS кривые Безье используются с функцией <code>cubic-bezier</code> . Форма кривой показывает, как анимация разыгрывается. Кривая живет в системе координат 1 на 1. Ось X этой системы координат - это продолжительность анимации (считайте ее временной шкалой), а ось Y - это изменение анимации. Функция <code>cubic-bezier</code> состоит из четырех основных точек, которые расположены на этой сетке 1 на 1: <code>p0</code> , <code>p1</code> , <code>p2</code> и <code>p3</code> . <code>p0</code> и <code>p3</code> для вас - это начальная и конечная точки, которые всегда расположены соответственно в начале (0, 0) и (1, 1). Вы устанавливаете значения x и y для двух других точек, а место размещения в сетке определяет форму кривой для анимации. Это делается в CSS, объявляя значения x и y опорных точек <code>p1</code> и <code>p2</code> в форме: <code>(x1, y1, x2, y2)</code> . Вытянув все это вместе, вот пример кривой Безье в CSS-коде: <code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code> В приведенном выше примере значения x и y эквивалентны для каждой точки (x1 = 0,25 = y1 и x2 = 0,75 = y2), которая, если вы помните из класса геометрии, приводит к строке, которая простирается от начала координат до точки (1 , 1). Эта анимация представляет собой линейное изменение элемента в течение длины анимации и совпадает с использованием <code>linear</code> ключевого слова. Другими словами, он изменяется с постоянной скоростью.
</section>

## Instructions
<section id='instructions'>
Для элемента с идентификатором <code>ball1</code> измените значение свойства <code>animation-timing-function</code> от <code>linear</code> до его эквивалентного значения функции <code>cubic-bezier</code> . Используйте значения точек, приведенные в примере выше.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.
    testString: assert($('#ball1').css('animation-timing-function') == 'cubic-bezier(0.25, 0.25, 0.75, 0.75)');
  - text: The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.
    testString: assert($('#ball2').css('animation-timing-function') == 'ease-out');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
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

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
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
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

</section>
