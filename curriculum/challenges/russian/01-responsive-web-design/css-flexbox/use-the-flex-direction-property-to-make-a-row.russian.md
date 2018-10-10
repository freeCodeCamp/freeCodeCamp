---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: ''
localeTitle: Используйте свойство flex-direction для создания строки
---

## Description
<section id="description"> Добавление <code>display: flex</code> к элементу превращает его в гибкий контейнер. Это позволяет выровнять любые дочерние элементы этого элемента в строки или столбцы. Вы делаете это, добавляя свойство <code>flex-direction</code> к родительскому элементу и устанавливая его в строку или столбец. Создание строки выравнивает дочерние элементы по горизонтали, а создание столбца выравнивает дочерние элементы по вертикали. Другие варианты для <code>flex-direction</code> - обратное и обратное. <strong>Заметка</strong> <br> Значением по умолчанию для свойства <code>flex-direction</code> является строка. </section>

## Instructions
<section id="instructions"> Добавьте свойство <code>flex-direction</code> свойства CSS в элемент <code>#box-container</code> и присвойте ему значение reverse-reverse. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-container</code> должен иметь свойство <code>flex-direction</code> заданное для обратного преобразования строки.'
    testString: 'assert($("#box-container").css("flex-direction") == "row-reverse", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
