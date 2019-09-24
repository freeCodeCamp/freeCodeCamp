---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
videoUrl: https://scrimba.com/p/pVaDAv/c43gnHm
forumTopicId: 301102
localeTitle: Выравните элементы используя свойство justify-content
---

## Description
<section id='description'>
Иногда flex элементы в контейнере flex не заполняют все пространство в контейнере. Обычно хочется сказать CSS, как выровнять и раздвинуть элементы flex определенным образом. К счастью, свойство <code>justify-content</code> имеет несколько вариантов для этого. Но сначала, перед тем, как рассмотреть эти варианты, необходимо понять важную терминологию. <a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg" target="_blank">Вот полезное изображение, показывающее строку, иллюстрирующую приведенные ниже концепции.</a> Напомним, что установка flex контейнера в качестве строки помещает flex элементы  бок о бок слева направо. Flex контейнер, установленный в качестве столбца, размещает flex элементы вертикально сверху вниз. Направление расположения flex элементов называется <strong>главной осью</strong> . Для строки это горизонтальная линия, проходящая через каждый элемент. А для столбца главная ось - вертикальная линия через элементы. Существует несколько вариантов того, как перемещать flex элементы вдоль линии,  являющейся главной осью. Одним из наиболее часто используемых является <code>justify-content: center;</code> , который выравнивает все flex элементы по центру внутри flex контейнера. Другие варианты включают: <ul><li> <code>flex-start</code> : располагает элементы к началу flex контейнера. Для строки это подталкивает элементы к левой стороне контейнера. Для столбца это подталкивает элементы к верхней стороне контейнера. </li><li> <code>flex-end</code> : располагает элементы к концу flex контейнера. Для строки это подталкивает элементы к правой части контейнера. Для столбца это подталкивает элементы к нижней части контейнера. </li><li> <code>space-between</code> : выравнивает элементы по центру главной оси, распеределяя оставшееся пространство между элементами. Первый и последний элементы располагаются вплотную к краям flex контейнера. Например, в строке первый элемент находится у левой стороны контейнера, последний элемент находится у правой стороны контейнера, а остальные элементы между ними расположены равномерно. </li><li> <code>space-around</code> : аналогично <code>space-between</code>, но первый и последний элементы не привязаны к краям контейнера, пространство распределяется вокруг всех элементов </li></ul>
</section>

## Instructions
<section id='instructions'>
Пример помогает показать это свойство в действии. Добавьте свойство <code>justify-content</code> CSS в элемент <code>#box-container</code> и присвойте ему значение center. <strong>Бонус</strong> <br> Попробуйте другие параметры для свойства <code>justify-content</code> в редакторе кода, чтобы увидеть их различия. Но обратите внимание, что значение center является единственным, которое пройдет эту задачу.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of center.
    testString: assert($('#box-container').css('justify-content') == 'center');

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
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
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
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
