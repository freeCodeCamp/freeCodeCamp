---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: ''
localeTitle: Используйте свойство flex-basis для установки начального размера элемента
---

## Description
<section id="description"> Свойство <code>flex-basis</code> указывает начальный размер элемента до того, как CSS выполнит корректировки с <code>flex-shrink</code> или <code>flex-grow</code> . Единицы, используемые свойством <code>flex-basis</code> такие же, как и другие свойства размера ( <code>px</code> , <code>em</code> , <code>%</code> и т. Д.). Значение <code>auto</code> определяет размеры элементов на основе содержимого. </section>

## Instructions
<section id="instructions"> Установите начальный размер ящиков с использованием <code>flex-basis</code> . Добавьте свойство CSS <code>flex-basis</code> как в <code>#box-1</code> и в <code>#box-2</code> . Дайте <code>#box-1</code> значение <code>10em</code> и <code>#box-2</code> значение <code>20em</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-1</code> должен иметь свойство <code>flex-basis</code> .'
    testString: 'assert($("#box-1").css("flex-basis") != "auto", "The <code>#box-1</code> element should have a <code>flex-basis</code> property.");'
  - text: '<code>#box-1</code> элемент должен иметь <code>flex-basis</code> значение <code>10em</code> .'
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.");'
  - text: 'Элемент <code>#box-2</code> должен иметь свойство <code>flex-basis</code> .'
    testString: 'assert($("#box-2").css("flex-basis") != "auto", "The <code>#box-2</code> element should have the <code>flex-basis</code> property.");'
  - text: '<code>#box-2</code> элемент должен иметь <code>flex-basis</code> значение <code>20em</code> .'
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.");'

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

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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
