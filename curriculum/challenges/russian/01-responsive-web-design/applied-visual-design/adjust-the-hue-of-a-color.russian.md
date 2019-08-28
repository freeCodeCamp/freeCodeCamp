---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: https://scrimba.com/c/cPp38TZ
forumTopicId: 301036
localeTitle: Отрегулируйте оттенок цвета
---

## Description
<section id='description'>
Цвета имеют несколько характеристик, включая оттенок, насыщенность и легкость. CSS3 представила <code>hsl()</code> как альтернативный способ выбрать цвет, указав непосредственно эти характеристики. <b>Хюэ</b> - это то, что люди обычно считают «цветным». Если вы изображаете спектр цветов, начиная с красного слева, перемещаясь по зеленому посередине, а синий справа, оттенок - это то, где цвет соответствует этой линии. В <code>hsl()</code> оттенок использует концепцию цветового круга вместо спектра, где угол цвета на круге задается как значение от 0 до 360. <b>Насыщенность</b> - это количество серого цвета. Полностью насыщенный цвет не имеет серого цвета, а минимально насыщенный цвет почти полностью серый. Это задается в процентах, при этом 100% полностью насыщенный. <b>Легкость</b> - это количество белого или черного цвета. Процент задается от 0% (черный) до 100% (белый), где 50% - это нормальный цвет. Вот несколько примеров использования <code>hsl()</code> с полностью насыщенными, нормальными цветами легкости: <table class="table table-striped"><thead><tr><th> цвет </th><th> HSL </th></tr></thead><tbody><tr><td> красный </td><td> hsl (0, 100%, 50%) </td></tr><tr><td> желтый </td><td> hsl (60, 100%, 50%) </td></tr><tr><td> зеленый </td><td> hsl (120, 100%, 50%) </td></tr><tr><td> циан </td><td> hsl (180, 100%, 50%) </td></tr><tr><td> синий </td><td> hsl (240, 100%, 50%) </td></tr><tr><td> фуксин </td><td> hsl (300, 100%, 50%) </td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
Измените <code>background-color</code> каждого элемента <code>div</code> на основе имен классов ( <code>green</code>, <code>cyan</code> или <code>blue</code> ) с помощью <code>hsl()</code>. Все три должны иметь полную насыщенность и нормальную легкость.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>hsl()</code> property to declare the color green.
    testString: assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi));
  - text: Your code should use the <code>hsl()</code> property to declare the color cyan.
    testString: assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi));
  - text: Your code should use the <code>hsl()</code> property to declare the color blue.
    testString: assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi));
  - text: The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.
    testString: assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
  - text: The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.
    testString: assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

</section>
