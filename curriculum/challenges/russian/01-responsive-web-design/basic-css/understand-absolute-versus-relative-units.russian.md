---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: https://scrimba.com/c/cN66JSL
forumTopicId: 301089
localeTitle: Понимание разницы между абсолютными и относительными единицами
---

## Description
<section id='description'>
В нескольких последних задачах вы задавали внутренние или внешние отступы элементов в пикселях ( <code>px</code> ). Пиксели - это тип единицы длины, что говорит браузеру о том, как размер или пространство элемента. В дополнение к <code>px</code> , CSS имеет несколько различных единиц измерения длины, которые вы можете использовать. Два основных типа единиц длины являются абсолютными и относительными. Абсолютные единицы привязываются к физическим единицам длины. Так , например, <code>in</code> и <code>mm</code> см дюймов и миллиметров, соответственно. Единицы абсолютной длины приближаются к фактическому измерению на экране, но есть некоторые различия в зависимости от разрешения экрана. Относительные единицы, такие как <code>em</code> или <code>rem</code> , относятся к другому значению длины. Например, <code>em</code> основывается на размере шрифта элемента. Если вы используете его для установки самого свойства <code>font-size</code> , оно относится к <code>font-size</code> родительского <code>font-size</code> . <strong>Заметка</strong> <br> Существует несколько относительных параметров единицы, которые привязаны к размеру окна просмотра. Они описаны в разделе «Ревизионные принципы веб-дизайна».
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>padding</code> к элементу с классом <code>red-box</code> и установите его значение в <code>1.5em</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>red-box</code> class should have a <code>padding</code> property.
    testString: assert($('.red-box').css('padding-top') != '0px' && $('.red-box').css('padding-right') != '0px' && $('.red-box').css('padding-bottom') != '0px' && $('.red-box').css('padding-left') != '0px');
  - text: Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.
    testString: assert(code.match(/\.red-box\s*?{(\s|.)*?padding:\s*?1\.5em/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

</section>
