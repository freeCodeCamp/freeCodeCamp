---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cd3PBfr
forumTopicId: 301113
localeTitle: Используйте свойство flex-shrink для сокращения предметов
---

## Description
<section id='description'>
До сих пор все свойства в задачах применимы к контейнеру flex (родительский элемент гибких элементов). Однако для гибких элементов существует несколько полезных свойств. Первый - свойство <code>flex-shrink</code> . Когда он используется, он позволяет сжимать элемент, если контейнер гибкого контейнера слишком мал. Элементы сокращаются, когда ширина родительского контейнера меньше, чем объединенная ширина всех элементов гибкости внутри него. Свойство <code>flex-shrink</code> принимает числа как значения. Чем больше число, тем больше он будет уменьшаться по сравнению с другими элементами в контейнере. Например, если один элемент имеет значение <code>flex-shrink</code> 1, а другое имеет значение <code>flex-shrink</code> 3, то значение со значением 3 будет уменьшаться в три раза больше, чем другое.
</section>

## Instructions
<section id='instructions'>
Добавьте свойство CSS <code>flex-shrink</code> в <code>#box-1</code> и <code>#box-2</code> . Дайте <code>#box-1</code> значение 1 и <code>#box-2</code> значение 2.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.
    testString: assert($('#box-1').css('flex-shrink') == '1');
  - text: The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.
    testString: assert($('#box-2').css('flex-shrink') == '2');

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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
