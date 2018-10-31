---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: ''
localeTitle: 'Использовать дисплей: сгибать до положения двух ящиков'
---

## Description
<section id="description"> В этом разделе используются чередующиеся стили вызовов, чтобы показать, как использовать CSS для гибкого позиционирования элементов. Во-первых, задача будет объяснять теорию, тогда практическая задача, использующая простой компонент твита, будет применять концепцию flexbox. Размещение <code>display: flex;</code> свойств CSS <code>display: flex;</code> на элементе позволяет использовать другие свойства flex для создания отзывчивой страницы. </section>

## Instructions
<section id="instructions"> Добавьте <code>display</code> свойства CSS в <code>#box-container</code> и установите его значение в flex. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code> должен иметь свойство <code>display</code> заданное значением flex.'
    testString: 'assert($("#box-container").css("display") == "flex", "<code>#box-container</code> should have the <code>display</code> property set to a value of flex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
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
