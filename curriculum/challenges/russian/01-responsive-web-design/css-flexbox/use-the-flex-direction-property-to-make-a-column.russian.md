---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: ''
localeTitle: Используйте свойство flex-direction для создания столбца
---

## Description
<section id="description"> Последние две проблемы использовали свойство <code>flex-direction</code> заданное для строки. Это свойство также может создавать столбец путем вертикальной укладки дочерних элементов гибкого контейнера. </section>

## Instructions
<section id="instructions"> Добавьте свойство <code>flex-direction</code> свойства CSS в элемент <code>#box-container</code> и дайте ему значение столбца. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>#box-container</code> должен иметь свойство <code>flex-direction</code> заданное в столбце.'
    testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

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
