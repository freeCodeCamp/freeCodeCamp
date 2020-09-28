---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
videoUrl: https://scrimba.com/c/c3bRDAb
forumTopicId: 301057
localeTitle: Узнайте о третичных цветах
---

## Description
<section id='description'>
Компьютерные мониторы и экраны устройств создают разные цвета, комбинируя количество красного, зеленого и синего света. Это известно как цветовая модель RGB-аддитивности в современной теории цвета. Красный (R), зеленый (G) и синий (B) называются основными цветами. Смешивание двух основных цветов создает вторичные цвета cyan (G + B), пурпурный (R + B) и желтый (R + G). Вы видели эти цвета в задаче «Дополнительные цвета». Эти вторичные цвета являются дополнением к основному цвету, не используемому при их создании, и противоположны этому основному цвету на цветовом круге. Например, пурпурный цвет выполнен красным и синим цветом и является дополнением к зеленому. Третичные цвета являются результатом объединения основного цвета с одним из его вторичных соседних цветов. Например, красный (первичный) и желтый (вторичный) оранжевый. Это добавляет еще шесть цветов к простому цветному колесу в общей сложности двенадцать. Существуют различные способы выбора разных цветов, которые приводят к гармоничному сочетанию в дизайне. Один пример, который может использовать третичные цвета, называется схемой разделения цветов. Эта схема начинается с базового цвета, а затем соединяет ее с двумя цветами, которые смежны с его дополнением. Три цвета обеспечивают сильный визуальный контраст в дизайне, но более тонкие, чем использование двух дополнительных цветов. Вот три цвета, созданные с использованием схемы сплит-дополнений: <table class="table table-striped"><thead><tr><th> цвет </th><th> Шестнадцатеричный код </th></tr></thead><thead></thead><tbody><tr><td> оранжевый </td><td> # FF7D00 </td></tr><tr><td> циан </td><td> # 00FFFF </td></tr><tr><td> малина </td><td> # FF007D </td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
Измените свойство <code>background-color</code> классов <code>orange</code> , <code>cyan</code> и <code>raspberry</code> цветов на соответствующие цвета. Обязательно используйте шестнадцатеричные коды как оранжевые, а малины не являются признанными в браузере именами цветов.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>div</code> element with class <code>orange</code> should have a <code>background-color</code> of orange.
    testString: assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
  - text: The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: The <code>div</code> element with class <code>raspberry</code> should have a <code>background-color</code> of raspberry.
    testString: assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
  - text: All <code>background-color</code> values for the color classes should be hex codes and not color names.
    testString: assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));

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

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>

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

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

</section>
