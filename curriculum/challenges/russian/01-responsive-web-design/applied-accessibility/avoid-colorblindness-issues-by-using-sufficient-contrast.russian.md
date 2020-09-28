---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: https://scrimba.com/c/cmzMEUw
forumTopicId: 301012
localeTitle: Избегайте недостаточной контрастности текста и фона, чтобы пользователю было легче их воспринимать
---

## Description
<section id='description'>
Цвет - большая часть визуального дизайна, но его использование представляет две проблемы доступности. Во-первых, цвет сам по себе не должен использоваться как единственный способ передачи важной информации, потому что пользователи программ чтения с экрана его не увидят. Во-вторых, цвета переднего и заднего фона требуют достаточного контраста, чтобы пользователи, имеющие проблемы с различением цветов, могли отличать их. Предыдущие задачи курса охватывали наличие текстовых альтернатив для решения первой проблемы. Последняя задача заключалась в инструментах проверки контраста, чтобы помочь во втором случае. Контрастность, рекомендованная WCAG, равная 4,5: 1, применяется для использования цвета, а также для комбинаций по шкале серого. Пользователи, страдающие дальтонизмом, не могут отличить некоторые цвета от других - обычно по оттенку, но иногда и по яркости. Вы можете вспомнить, что коэффициент контрастности рассчитывается с использованием значений относительной яркости (или яркости) цветов переднего плана и фона. На практике соотношение 4,5: 1 может быть достигнуто путем затемнения более темного цвета и осветления светлого с помощью анализатора цветного контраста. Более темными цветами на цветовом круге считаются синий, фиолетовый, пурпурный и красный, тогда как более светлыми цветами - оранжевый, желтый, зеленый и сине-зеленый.
</section>

## Instructions
<section id='instructions'>
Camper Cat экспериментирует с использованием цвета для текста своего блога и фона, но его текущая комбинация зеленоватого <code>background-color</code> с <code>color</code> текстом в темно-коричневом <code>color</code> имеет коэффициент контрастности 2,5: 1. Вы можете легко регулировать яркость цветов, так как он объявил их, используя <code>hsl()</code> CSS <code>hsl()</code> (которое означает оттенок, насыщенность, яркость), изменив третий аргумент. Увеличьте значение яркости <code>background-color</code> с 35% до 55% и уменьшите значение яркости <code>color</code> с 20% до 15%. Это улучшает контрастность до 5.9: 1.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.
    testString: assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
  - text: Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.
    testString: assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

</section>
