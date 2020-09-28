---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cBEkbfJ
forumTopicId: 301110
localeTitle: Используйте свойство flex-direction для создания строки
---

## Description
<section id='description'>
Добавление <code>display: flex</code> к элементу превращает его в гибкий контейнер. Это позволяет разместить любые дочерние элементы этого элемента в строки или в столбцы. Чтобы сделать это, нужно добавить свойство <code>flex-direction</code> к родительскому элементу и устанавить ему значение row (строка) или column (столбец). Значение row выравнивает дочерние элементы по горизонтали, а значение column выравнивает дочерние элементы по вертикали. Другие варианты значений свойства <code>flex-direction</code> - row-reverse (обращённая строка) и column-reverse (обращённый столбец). <strong>Примечание</strong> <br> Значением по умолчанию для свойства <code>flex-direction</code> является row.
</section>

## Instructions
<section id='instructions'>
Добавьте CSS свойство <code>flex-direction</code> элементу <code>#box-container</code> и присвойте ему значение row-reverse.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.
    testString: assert($('#box-container').css('flex-direction') == 'row-reverse');

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
    flex-direction: row-reverse;
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
