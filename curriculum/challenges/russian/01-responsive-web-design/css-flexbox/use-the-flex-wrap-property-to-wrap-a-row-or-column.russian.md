---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/cQv9ZtG
forumTopicId: 301114
localeTitle: Используйте свойство flex-wrap для обертывания строки или столбца
---

## Description
<section id='description'>
CSS flexbox имеет функцию разделения гибкого элемента на несколько строк (или столбцов). По умолчанию контейнер flex будет соответствовать всем гибким элементам вместе. Например, строка будет находиться в одной строке. Однако, используя свойство <code>flex-wrap</code> , он сообщает CSS об обертке элементов. Это означает, что дополнительные элементы перемещаются в новую строку или столбец. Точка прерывания, в которой происходит обертка, зависит от размера элементов и размера контейнера. CSS также имеет опции для направления переноса: <ul><li> <code>nowrap</code> : это значение по умолчанию и не переносит элементы. </li><li> <code>wrap</code> : обертывает элементы слева направо, если они находятся в строке или сверху вниз, если они находятся в столбце. </li><li> <code>wrap-reverse</code> : обертывает элементы снизу вверх, если они находятся в строке или справа налево, если они находятся в столбце. </li></ul>
</section>

## Instructions
<section id='instructions'>
В текущем макете слишком много ящиков для одной строки. Добавьте свойство <code>flex-wrap</code> в элемент <code>#box-container</code> и придайте ему значение wrap.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of wrap.
    testString: assert($('#box-container').css('flex-wrap') == 'wrap');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

</section>
