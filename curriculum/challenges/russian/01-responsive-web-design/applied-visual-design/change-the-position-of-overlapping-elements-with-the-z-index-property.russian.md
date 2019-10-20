---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: https://scrimba.com/c/cM94aHk
forumTopicId: 301046
localeTitle: Изменение позиции перекрывающихся элементов с помощью свойства z-index
---

## Description
<section id='description'>
Когда элементы расположены для перекрытия, элемент, следующий позже в разметке HTML, по умолчанию будет отображаться поверх других элементов. Однако свойство <code>z-index</code> может указывать порядок расположения элементов друг над другом. Он должен быть целым числом (то есть целым числом, а не десятичным), а более высокие значения для свойства <code>z-index</code> элемента перемещают его выше в стеке, чем те, у которых более низкие значения.
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>z-index</code> к элементу с именем класса <code>first</code> (красный прямоугольник) и установите для него значение 2, чтобы он покрывал другой элемент (синий прямоугольник).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with class <code>first</code> should have a <code>z-index</code> value of 2.
    testString: assert($('.first').css('z-index') == '2');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```

</section>
