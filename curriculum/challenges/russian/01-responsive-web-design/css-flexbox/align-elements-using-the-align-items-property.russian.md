---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: ''
localeTitle: Выравнивание элементов Использование элементов выравнивания Свойство
---

## Description
<section id="description"> Свойство <code>align-items</code> похоже на <code>justify-content</code> . Напомним, что свойство <code>justify-content</code> выровняло элементы flex вдоль главной оси. Для строк основная ось - горизонтальная линия, а для столбцов - вертикальная. Контейнеры Flex также имеют <strong>поперечную ось,</strong> которая противоположна основной оси. Для рядов поперечная ось вертикальна, а для столбцов поперечная ось горизонтальна. CSS предлагает свойство <code>align-items</code> для выравнивания элементов гибкости вдоль поперечной оси. Для строки он указывает CSS, как перемещать элементы во всей строке вверх или вниз в контейнере. И для столбца, как нажать все элементы слева или справа в контейнере. Различные значения, доступные для <code>align-items</code> включают: <ul><li> <code>flex-start</code> : выравнивает элементы до начала контейнера flex. Для строк это выравнивает элементы в верхней части контейнера. Для столбцов это выравнивает элементы слева от контейнера. </li><li> <code>flex-end</code> : выравнивает элементы до конца гибкого контейнера. Для строк это выравнивает элементы в нижней части контейнера. Для столбцов это выравнивает элементы справа от контейнера. </li><li> <code>center</code> : выравнивание предметов по центру. Для строк это вертикально выравнивает элементы (равное пространство выше и ниже элементов). Для столбцов это горизонтально выравнивает их (равное пространство слева и справа от элементов). </li><li> <code>stretch</code> : растяните элементы, чтобы заполнить контейнер для гибких контейнеров. Например, элементы строк растягиваются, чтобы заполнить гибкий контейнер сверху вниз. </li><li> <code>baseline</code> : выровнять элементы по исходным линиям. Исходный текст - это текстовая концепция, думайте об этом как о линии, на которой сидят буквы. </li></ul></section>

## Instructions
<section id="instructions"> Пример помогает показать это свойство в действии. Добавьте <code>align-items</code> свойств CSS в элемент <code>#box-container</code> и присвойте ему значение центра. <strong>бонус</strong> <br> Попробуйте другие параметры свойства <code>align-items</code> в редакторе кода, чтобы увидеть их различия. Но обратите внимание, что значение центра является единственным, которое пройдет эту задачу. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-container</code> должен иметь свойство <code>align-items</code> заданное значением центра.'
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
