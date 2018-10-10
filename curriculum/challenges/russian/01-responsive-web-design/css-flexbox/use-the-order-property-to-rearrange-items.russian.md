---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: ''
localeTitle: Используйте свойство Order для переупорядочения элементов
---

## Description
<section id="description"> Свойство <code>order</code> используется для указания CSS порядка отображения элементов гибкости в контейнере flex. По умолчанию элементы будут отображаться в том же порядке, что и исходный HTML-код. Свойство принимает числа как значения, а отрицательные числа могут использоваться. </section>

## Instructions
<section id="instructions"> Добавьте <code>order</code> свойств CSS в <code>#box-1</code> и <code>#box-2</code> . Дайте <code>#box-1</code> значение 2 и дайте <code>#box-2</code> значение 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-1</code> должен иметь свойство <code>order</code> равное 2.'
    testString: 'assert($("#box-1").css("order") == "2", "The <code>#box-1</code> element should have the <code>order</code> property set to a value of 2.");'
  - text: 'Элемент <code>#box-2</code> должен иметь свойство <code>order</code> равное 1.'
    testString: 'assert($("#box-2").css("order") == "1", "The <code>#box-2</code> element should have the <code>order</code> property set to a value of 1.");'

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
