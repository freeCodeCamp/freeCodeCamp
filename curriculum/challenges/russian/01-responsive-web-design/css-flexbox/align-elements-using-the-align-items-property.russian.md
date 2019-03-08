---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: Выравнивание элементов используя свойство align-items
---

## Description
<section id="description"> Свойство <code>align-items</code> похоже на <code>justify-content</code> . Напомним, что свойство <code>justify-content</code> выровняло элементы flex вдоль главной оси. Для рядов главная ось - горизонтальная линия, а для столбцов - вертикальная. Контейнеры Flex также имеют <strong>поперечную ось,</strong> являющуюся противоположностью основной оси. Для рядов поперечная ось вертикальна, а для столбцов поперечная ось горизонтальна. CSS предлагает свойство <code>align-items</code> для выравнивания элементов flex вдоль поперечной оси. Для строки он указывает CSS, как подвинуть элементы во всей строке вверх или вниз внутри контейнера. А для столбца, как подвинуть все элементы влево или вправо внутри контейнера. Различные значения, доступные для <code>align-items</code> включают: <ul><li> <code>flex-start</code> : двигает элементы к началу контейнера flex. Для строк это передвигает элементы в верхнюю часть контейнера. Для столбцов это передвигает элементы в левую часть контейнера. </li><li> <code>flex-end</code> : двигает элементы к концу контейнера flex. Для строк это передвигает элементы в нижнюю часть контейнера. Для столбцов это передвигает элементы в правую часть контейнера. </li><li> <code>center</code> : выравнивание элементов по центру. Для строк это вертикально выравнивает элементы (равное пространство выше и ниже элементов). Для столбцов это горизонтально выравнивает их (равное пространство слева и справа от элементов). </li><li> <code>stretch</code> : растягивает элементы, чтобы заполнить flex контейнер. Например, элементы строк растягиваются, чтобы заполнить flex контейнер сверху вниз. </li><li> <code>baseline</code> : выровнять элементы по их базовым линиям. Базовая линия - это текстовая концепция, думайте об этом как о линии, на которой сидят буквы. </li></ul></section>

## Instructions
<section id="instructions"> Пример помогает показать это свойство в действии. Добавьте свойство CSS <code>align-items</code> в элемент <code>#box-container</code> и присвойте ему значение center. <strong>Бонус</strong> <br> Попробуйте другие значения свойства <code>align-items</code> в редакторе кода, чтобы увидеть их различия. Но обратите внимание, что значение center является единственным, которое пройдет эту задачу. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-container</code> должен иметь свойство <code>align-items</code> заданное значением center.'
    testString: 'assert($("#box-container").css("align-items") == "center", "The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of center.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
