---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/c2p78cg
forumTopicId: 301111
localeTitle: Используйте свойство flex-grow для расширения элементов
---

## Description
<section id='description'>
Противоположность <code>flex-shrink</code> - свойство <code>flex-grow</code> . Напомним, что <code>flex-shrink</code> контролирует размер предметов при сжатии контейнера. Свойство <code>flex-grow</code> управляет размером элементов, когда родительский контейнер расширяется. Используя аналогичный пример из последней задачи, если один элемент имеет значение <code>flex-grow</code> 1, а другое имеет значение <code>flex-grow</code> 3, то значение со значением 3 будет расти в три раза больше, чем другое.
</section>

## Instructions
<section id='instructions'>
Добавьте свойство CSS <code>flex-grow</code> в <code>#box-1</code> и <code>#box-2</code> . Дайте <code>#box-1</code> значение 1 и <code>#box-2</code> значение 2.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of 1.
    testString: assert($('#box-1').css('flex-grow') == '1');
  - text: The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of 2.
    testString: assert($('#box-2').css('flex-grow') == '2');

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
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
