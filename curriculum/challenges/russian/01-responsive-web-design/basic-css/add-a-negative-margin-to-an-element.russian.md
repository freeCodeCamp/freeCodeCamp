---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/add-a-negative-margin-to-an-element'
videoUrl: ''
localeTitle: Добавить к элементу свойство margin с отрицательным значением
---


## Описание
<section id="description"> Свойство элемента <code>margin</code> контролирует объем пространства (отступы) между границей элемента, т.е. <code>border</code> и окружающими элементами. Если вы установите элементу отрицательное значение <code>margin</code>, то размер элемента увеличится. </section>

## Инструкции
<section id="instructions"> Попытайтесь установить отрицательное значение <code>margin</code>, так же как установлено подобное значению для красного квадрата. Измените <code>margin</code> синего квадрата на <code>-15px</code>, чтобы он заполнил всю горизонтальную ширину желтой рамки вокруг него. </section>


## Тесты
<section id='tests'>

```yml
tests:

  - text: Ваш класс <code>blue-box</code> должен установить для элемента <code>margin</code> отступ в размере <code>-15px</code>.

    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

```

</section>

## Испытание
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Решение
<section id='solution'>

```js
// впишите ваш код решения
```
</section>
