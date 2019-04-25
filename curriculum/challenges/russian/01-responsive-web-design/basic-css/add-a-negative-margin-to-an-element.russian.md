---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: ''
localeTitle: Добавить отрицательные поля к элементу
---

## Описание
<section id="description">Значение <code>margin</code> (поле) элемента контролирует объем пространства между значением <code>border</code> (границей) элемента и окружающими элементами. Если вы установите значение <code>margin</code> отрицательным, то размер элемента увеличится. </section>

## Инструкции
<section id="instructions"> Попытайтесь установить значение <code>margin</code> отрицательным, как у красного окна. Установите <code>margin</code> синего окна равным <code>-15px</code>, чтобы он заполнил всю горизонтальную ширину желтой рамки вокруг него. </section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: Ваш класс <code>blue-box</code> должен иметь значение <code>margin</code> равное <code>-15px</code>.
    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

```

</section>

## Исходной код
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
