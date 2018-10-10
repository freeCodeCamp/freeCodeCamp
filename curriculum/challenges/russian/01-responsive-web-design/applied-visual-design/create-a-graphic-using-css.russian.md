---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: ''
localeTitle: Создать графику с помощью CSS
---

## Description
<section id="description"> Управляя различными селекторами и свойствами, вы можете создавать интересные фигуры. Один из самых простых способов - полумесяц. Для этой задачи вам нужно работать с свойством <code>box-shadow</code> которое задает тень элемента, а также свойство <code>border-radius</code> которое контролирует округлость углов элемента. Вы создадите круглый прозрачный объект с хрустящей тень, слегка смещенной в сторону - тень на самом деле будет формой луны, которую вы видите. Чтобы создать круглый объект, свойство <code>border-radius</code> должно быть установлено равным 50%. Вы можете вспомнить более раннюю задачу о том, что свойство <code>box-shadow</code> принимает значения для <code>offset-x</code> , <code>offset-y</code> , <code>blur-radius</code> , <code>spread-radius</code> и значение цвета в этом порядке. Значения <code>blur-radius</code> <code>spread-radius</code> необязательны. </section>

## Instructions
<section id="instructions"> Манипулируйте квадратный элемент в редакторе, чтобы создать форму луны. Сначала измените <code>background-color</code> на прозрачный, затем установите для свойства <code>border-radius</code> значение 50%, чтобы сделать круглую форму. Наконец, измените свойство <code>box-shadow</code> чтобы установить <code>offset-x</code> в 25px, <code>offset-y</code> до 10px, <code>blur-radius</code> до 0, <code>spread-radius</code> до 0 и цвет в синий. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Значение свойства <code>background-color</code> должно быть установлено на <code>transparent</code> .
    testString: 'assert(code.match(/background-color:\s*?transparent;/gi), "The value of the <code>background-color</code> property should be set to <code>transparent</code>.");'
  - text: Значение свойства <code>border-radius</code> должно быть установлено на <code>50%</code> .
    testString: 'assert(code.match(/border-radius:\s*?50%;/gi), "The value of the <code>border-radius</code> property should be set to <code>50%</code>.");'
  - text: 'Значение свойства <code>box-shadow</code> должно быть установлено равным 25px для <code>offset-x</code> , 10px для <code>offset-y</code> , 0 для <code>blur-radius</code> , 0 для <code>spread-radius</code> и, наконец, синего цвета.'
    testString: 'assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi), "The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;

  background-color: blue;
  border-radius: 0px;
  box-shadow: 25px 10px 10px 10px green;
}

</style>
<div class="center"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
