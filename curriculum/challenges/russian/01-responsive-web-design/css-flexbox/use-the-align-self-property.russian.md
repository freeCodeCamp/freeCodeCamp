---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: ''
localeTitle: Использовать свойство align-self
---

## Description
<section id="description"> Конечным свойством для элементов flex является <code>align-self</code> . Это свойство позволяет настраивать выравнивание каждого элемента отдельно, вместо того, чтобы устанавливать их все одновременно. Это полезно, так как другие общие методы настройки с использованием свойств CSS <code>float</code> , <code>clear</code> и <code>vertical-align</code> не работают на гибких элементах. <code>align-self</code> принимает те же значения, что и <code>align-items</code> и отменяет любое значение, заданное свойством <code>align-items</code> . </section>

## Instructions
<section id="instructions"> Добавьте свойство CSS <code>align-self</code> в <code>#box-1</code> и <code>#box-2</code> . Дайте <code>#box-1</code> значение центра и дайте <code>#box-2</code> значение flex-end. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-1</code> должен иметь свойство <code>align-self</code> равное значению центра.'
    testString: 'assert($("#box-1").css("align-self") == "center", "The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of center.");'
  - text: 'Элемент <code>#box-2</code> должен иметь свойство <code>align-self</code> равное значению flex-end.'
    testString: 'assert($("#box-2").css("align-self") == "flex-end", "The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of flex-end.");'

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

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
