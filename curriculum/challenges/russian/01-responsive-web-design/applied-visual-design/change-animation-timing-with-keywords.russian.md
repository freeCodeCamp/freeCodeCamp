---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: ''
localeTitle: Изменение времени анимации с помощью ключевых слов
---

## Description
<section id="description"> В анимации CSS свойство <code>animation-timing-function</code> определяет, как быстро изменяется анимированный элемент во время анимации. Если анимация - это автомобиль, перемещающийся из точки A в точку B в заданное время (продолжительность <code>animation-duration</code> ), <code>animation-timing-function</code> говорит о том, как автомобиль ускоряется и замедляется в ходе движения. Для популярных опций есть несколько предопределенных ключевых слов. Например, значение по умолчанию - это <code>ease</code> , которая начинается медленно, ускоряется в середине, а затем в конце замедляется. Другие варианты включают <code>ease-out</code> , которое быстро начинается, а затем замедляется, <code>ease-in</code> , что медленно начинается, а затем ускоряется в конце или <code>linear</code> , что накладывает постоянную скорость анимации. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("#ball1").css("animation-timing-function") == "linear", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.");'
  - text: ''
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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

```js
// solution required
```
</section>
