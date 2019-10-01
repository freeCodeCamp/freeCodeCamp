---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cZmWeA4
forumTopicId: 301109
localeTitle: Используйте свойство flex-direction для создания столбца
---

## Description
<section id='description'>
В предыдущих задачах свойство <code>flex-direction</code> использовалось для создание рядов. С помощью этого свойства также можно создавать столбцы, размещая дочерние элементы "гибкого" контейнера вертикально один под другим.
</section>

## Instructions
<section id='instructions'>
Добавьте CSS свойство <code>flex-direction</code> к элементу <code>#box-container</code> и задайте ему значение column.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.
    testString: assert($('#box-container').css('flex-direction') == 'column');

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

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: column;
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

</section>
