---
id: 587d7dbf367417b2b2512bba
title: Use @each to Map Over Items in a List
challengeType: 0
forumTopicId: 301461
localeTitle: Использовать @each для сопоставления элементов в списке
---

## Description
<section id='description'>
Последняя задача показала, как директива <code>@for</code> использует начальное и конечное значение для циклического цикла определенное количество раз. Sass также предлагает директиву <code>@each</code> которая <code>@each</code> каждый элемент в списке или карте. На каждой итерации переменная присваивается текущему значению из списка или карты. <blockquote> @each $ color в синем, красном, зеленом { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Карта имеет несколько иной синтаксис. Вот пример: <blockquote> $ colors: (color1: blue, color2: red, color3: green); <br><br> @each $ key, $ color в $ colors { <br> . # {$ color} -text {color: $ color;} <br> } </blockquote> Обратите внимание, что <code>$key</code> переменная <code>$key</code> необходима для ссылки на ключи на карте. В противном случае, скомпилированный CSS будет иметь <code>color1</code> , <code>color2</code> ... в нем. Оба приведенных выше примера кода преобразуются в следующий CSS: <blockquote> .blue-text { <br> цвет синий; <br> } <br><br> .red-text { <br> красный цвет; <br> } <br><br> .green-text { <br> цвет: зеленый; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Напишите директиву <code>@each</code> которая проходит через список: <code>blue, black, red</code> и назначает каждую переменную классу <code>.color-bg</code> , где часть «цвет» изменяется для каждого элемента. Каждый класс должен установить <code>background-color</code> соответствующего цвета.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>@each</code> directive.
    testString: assert(code.match(/@each /g));
  - text: Your <code>.blue-bg</code> class should have a <code>background-color</code> of blue.
    testString: assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
  - text: Your <code>.black-bg</code> class should have a <code>background-color</code> of black.
    testString: assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
  - text: Your <code>.red-bg</code> class should have a <code>background-color</code> of red.
    testString: assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style type='text/sass'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</section><section id='solution'>

```html
<style type='text/sass'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

</section>
