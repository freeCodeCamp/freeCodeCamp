---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: https://scrimba.com/c/c7amZfW
forumTopicId: 301051
localeTitle: Создание движения с использованием анимации CSS
---

## Description
<section id='description'>
Когда элементы имеют заданную <code>position</code> , например <code>fixed</code> или <code>relative</code> , свойства смещения CSS <code>right</code> , <code>left</code> , <code>top</code> и <code>bottom</code> могут использоваться в правилах анимации для создания движения. Как показано в приведенном ниже примере, вы можете нажать элемент вниз, а затем вверх, установив <code>top</code> свойство <code>50%</code> ключевого кадра на <code>50%</code> пикселей, но установив его на 0px для первого ( <code>0%</code> ) и последнего ( <code>100%</code> ) ключевого кадра. <blockquote> @keyframes rainbow { <br> 0% { <br> background-color: blue; <br> top: 0px; <br> } <br> 50% { <br> фон-цвет: зеленый; <br> top: 50px; <br> } <br> 100% { <br> background-color: желтый; <br> top: 0px; <br> } <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте горизонтальное движение в анимацию <code>div</code> . Используя свойство <code>left</code> offset, добавьте правило <code>@keyframes</code> так что радуга начинается с 0 пикселей на <code>0%</code> , перемещается до 25 пикселей с <code>50%</code> и заканчивается на -25 пикселей при <code>100%</code> . Не заменяйте <code>top</code> свойство в редакторе - анимация должна иметь как вертикальное, так и горизонтальное движение.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>@keyframes</code> rule for <code>0%</code> should use the <code>left</code> offset of 0px.
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?top:\s*?0(px)?;\s*?left:\s*?0(px)?;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for <code>50%</code> should use the <code>left</code> offset of 25px.
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?top:\s*?50px;\s*?left:\s*?25px;\s*?}/gi));
  - text: The <code>@keyframes</code> rule for <code>100%</code> should use the <code>left</code> offset of -25px.
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?top:\s*?0(px)?;\s*?left:\s*?-25px;\s*?}/gi));

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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
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
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```

</section>
