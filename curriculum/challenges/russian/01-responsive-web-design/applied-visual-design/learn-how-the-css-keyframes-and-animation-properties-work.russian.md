---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: https://scrimba.com/c/cakprhv
forumTopicId: 301059
localeTitle: Узнайте, как работают CSS-файлы и анимация CSS
---

## Description
<section id='description'>
Чтобы анимировать элемент, вам нужно знать свойства анимации и правило <code>@keyframes</code> . Свойства анимации определяют, как должна себя вести анимация, и правило <code>@keyframes</code> контролирует, что происходит во время этой анимации. Всего имеется восемь свойств анимации. Эта задача будет держать ее простой и охватывать две самые важные из них: <code>animation-name</code> задает имя анимации, которое позже используется <code>@keyframes</code> чтобы сообщить CSS, какие правила идут с анимацией. <code>animation-duration</code> задает <code>animation-duration</code> анимации. <code>@keyframes</code> - это то, как точно указать, что происходит в анимации в течение продолжительности. Это делается путем предоставления свойств CSS для определенных «кадров» во время анимации с процентами от 0% до 100%. Если вы сравниваете это с фильмом, свойства CSS для 0% - это то, как элемент отображается в начальной сцене. Свойства CSS на 100% - это то, как элемент появляется в конце, прямо перед броском кредитов. Затем CSS применяет магию для перехода элемента за заданную продолжительность, чтобы вывести сцену. Вот пример, иллюстрирующий использование <code>@keyframes</code> и свойств анимации: <blockquote> #anim { <br> анимация-имя: красочный; <br> продолжительность анимации: 3 с; <br> } <br> @keyframes colorful { <br> 0% { <br> background-color: blue; <br> } <br> 100% { <br> background-color: желтый; <br> } <br> } </blockquote> Для элемента с <code>anim</code> идентификатором, фрагмент кода выше , задает <code>animation-name</code> , чтобы <code>colorful</code> и устанавливает <code>animation-duration</code> до 3 секунд. Затем правило <code>@keyframes</code> ссылается на свойства анимации с именем <code>colorful</code> . Он устанавливает цвет в синий цвет в начале анимации (0%), который к концу анимации перейдет в желтый цвет (100%). Вы не ограничены только начальными переходами, вы можете установить свойства для элемента для любого процента от 0% до 100%.
</section>

## Instructions
<section id='instructions'>
Создайте анимацию для элемента с id <code>rect</code> , установив <code>animation-name</code> на радугу и <code>animation-duration</code> до 4 секунд. Затем объявите правило <code>@keyframes</code> и установите <code>background-color</code> в начале анимации ( <code>0%</code> ) на синий, середина анимации ( <code>50%</code> ) на зеленый, а конец анимации ( <code>100%</code> ) на желтый.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.
    testString: assert($('#rect').css('animation-name') == 'rainbow');
  - text: The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.
    testString: assert($('#rect').css('animation-duration') == '4s');
  - text: The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.
    testString: assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```

</section>
