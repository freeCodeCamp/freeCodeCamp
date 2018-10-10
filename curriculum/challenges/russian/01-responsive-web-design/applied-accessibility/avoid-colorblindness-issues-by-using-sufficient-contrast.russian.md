---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: 'Избегайте проблем со слепотой, используя достаточный контраст'
---

## Description
<section id="description"> Цвет - большая часть визуального дизайна, но его использование представляет две проблемы доступности. Во-первых, цвет сам по себе не должен использоваться как единственный способ передачи важной информации, потому что пользователи экранного чтения не видят этого. Во-вторых, цвета переднего и заднего фона требуют достаточного контраста, чтобы пользователи цветного следа могли различать их. Предыдущие проблемы охватывали наличие текстовых альтернатив для решения первой проблемы. Последняя задача заключалась в инструментах проверки контраста, чтобы помочь во втором. Контрастность, рекомендованная WCAG, равная 4,5: 1, применяется для использования цвета, а также для комбинаций по шкале серого. Пользователи Colorblind не могут отличить некоторые цвета от других - обычно в оттенке, но иногда и в легкости. Вы можете вспомнить, что коэффициент контрастности рассчитывается с использованием значений относительной яркости (или яркости) цветов переднего плана и фона. На практике соотношение 4,5: 1 может быть достигнуто путем затемнения более темного цвета и облегчения более легкого с помощью анализатора цветного контраста. Более темные цвета на цветном колесе считаются блюзом, фиалки, пурпуры и красные, тогда как более светлые цвета - апельсины, желтые, зеленые и сине-зеленые. </section>

## Instructions
<section id="instructions"> Camper Cat экспериментирует с использованием цвета для текста своего блога и фона, но его текущая комбинация зеленоватого <code>background-color</code> с <code>color</code> текстом в темно-коричневом <code>color</code> имеет коэффициент контрастности 2,5: 1. Вы можете легко регулировать яркость цветов, так как он объявил их, используя <code>hsl()</code> CSS <code>hsl()</code> (которое означает оттенок, насыщенность, легкость), изменив третий аргумент. Увеличьте значение светочувствительности <code>background-color</code> с 35% до 55% и уменьшите значение <code>color</code> яркости от 20% до 15%. Это улучшает контрастность до 5.9: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен только изменить значение яркости для свойства <code>color</code> текста на значение 15%.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: Ваш код должен только изменить значение яркости для свойства <code>background-color</code> на значение 55%.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

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

```js
// solution required
```
</section>
