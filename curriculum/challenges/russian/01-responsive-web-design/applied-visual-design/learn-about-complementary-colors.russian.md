---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: https://scrimba.com/c/c2MD3Tr
forumTopicId: 301056
localeTitle: Узнайте о дополнительных цветах
---

## Description
<section id='description'>
Теория цвета и его влияние на дизайн являются глубокой темой, и только основные вопросы рассматриваются в следующих задачах. На веб-сайте цвет может привлекать внимание к контенту, вызывать эмоции или создавать визуальную гармонию. Использование различных комбинаций цветов может действительно изменить внешний вид веб-сайта, и многие мысли могут пойти на подбор цветовой палитры, которая работает с вашим контентом. Цветовое колесо - полезный инструмент для визуализации того, как соотносятся цвета друг с другом - это круг, где похожие оттенки соседствуют, а разные оттенки находятся дальше друг от друга. Когда два цвета противоположны друг другу на колесе, их называют дополнительными цветами. У них есть характеристика, что если они объединены, они «отменяют» друг друга и создают серый цвет. Однако при размещении бок о бок эти цвета выглядят более яркими и создают сильный визуальный контраст. Некоторые примеры дополнительных цветов с шестнадцатеричными кодами: <blockquote> красный (# FF0000) и голубой (# 00FFFF) <br> зеленый (# 00FF00) и пурпурный (# FF00FF) <br> синий (# 0000FF) и желтый (# FFFF00) </blockquote> Это отличается от устаревшей цветовой модели RYB, которую многие из нас преподавали в школе, которая имеет разные первичные и дополнительные цвета. Современная теория цвета использует аддитивную модель RGB (например, на экране компьютера) и субтрактивную модель CMY (K) (например, в печати). Читайте <a href="https://en.wikipedia.org/wiki/Color_model" target="_blank">здесь</a> для получения дополнительной информации об этом сложном предмете. В Интернете доступно множество инструментов для выбора цветов, которые могут найти дополнение к цвету. <strong>Заметка</strong> <br> Для всех цветовых задач: использование цвета может стать мощным способом добавить визуальный интерес к странице. Тем не менее, только цвет не должен использоваться как единственный способ передачи важной информации, поскольку пользователи с нарушениями зрения могут не понимать этот контент. Эта проблема будет рассмотрена более подробно в задачах прикладной доступности.
</section>

## Instructions
<section id='instructions'>
Измените свойство <code>background-color</code> <code>blue</code> и <code>yellow</code> классов на соответствующие цвета. Обратите внимание, как цвета выглядят по-разному рядом друг с другом, чем они сравниваются с белым фоном.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.
    testString: assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
  - text: The <code>div</code> element with class <code>yellow</code> should have a <code>background-color</code> of yellow.
    testString: assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');

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
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>

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
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

</section>
