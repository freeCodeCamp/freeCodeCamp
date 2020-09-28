---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cbpW2tE
forumTopicId: 301112
localeTitle: Используйте свойство flex Shorthand
---

## Description
<section id='description'>
Существует возможность быстрого выбора нескольких свойств гибкости сразу. Свойства <code>flex-grow</code> , <code>flex-shrink</code> и <code>flex-basis</code> можно объединить, используя свойство <code>flex</code> . Например, <code>flex: 1 0 10px;</code> установит элемент для <code>flex-grow: 1;</code> , <code>flex-shrink: 0;</code> , и <code>flex-basis: 10px;</code> , Настройки свойств по умолчанию - <code>flex: 0 1 auto;</code> ,
</section>

## Instructions
<section id='instructions'>
Добавьте свойство CSS <code>flex</code> и к <code>#box-1</code> и <code>#box-2</code> . Дайте <code>#box-1</code> значения, поэтому его <code>flex-grow</code> равен 2, его <code>flex-shrink</code> равен 2, а его <code>flex-basis</code> - 150 пикселей. Дайте <code>#box-2</code> значения, поэтому его <code>flex-grow</code> равен 1, его <code>flex-shrink</code> равен 1, а его <code>flex-basis</code> - 150 пикселей. Эти значения приведут к тому, что <code>#box-1</code> будет расти, чтобы заполнить дополнительное пространство с удвоенной скоростью <code>#box-2</code> когда контейнер больше 300 пикселей, и с удвоенной скоростью <code>#box-2</code> когда контейнер меньше 300 пикселей. 300px - это комбинированный размер значений <code>flex-basis</code> двух полей.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.
    testString: assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px');
  - text: The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.
    testString: assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px');
  - text: Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.
    testString: assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);

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

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
