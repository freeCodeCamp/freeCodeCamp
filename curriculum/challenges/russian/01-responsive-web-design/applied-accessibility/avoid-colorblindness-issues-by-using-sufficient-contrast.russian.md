---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: 'Избегайте недостаточной контрастности текста и фона, чтобы пользователю было легче их воспринимать'
---


## Description (Описание)
<section id="description"> Цветовые сочетания - очень важная часть визуального дизайна, но с ними связано две проблемы. Во-первых, цвет, сам по себе, не должен использоваться как единственный способ передачи важной информации, потому что пользователи аудиоинтерфейсов (читалок) для экранного текста не смогут его увидеть. Во-вторых, цвета текста и фона должны быть взаимно контрастны, чтобы пользователи, у которых есть  проблемы со зрением, могли бы спокойно различать текст. Предыдущие задания предлагали использовать описания изображений (текстовую альтернативу) для решения первой проблемы. Еще одно задание предлагало использовать инструменты проверки контраста, чтобы помочь справиться со второй проблемой. Уровень контрастности, рекомендованный WCAG, равен 4,5 : 1. Он применяется как для проверки контрастности сочетания разных цветов, так и для сочетания оттенков серого. Пользователи с цветовой слепотой не могут различить некоторые цвета и путают их с соседними - обычно это касается цвета вообще (человек не различает красный и зеленый). Но иногда люди так же путают соседние цвета с низкой неконтрастностью, например близкие оттенки синего и зеленого. Коэффициент контрастности рассчитывается с использованием значений относительной яркости  цветов переднего плана (например, текста) и фона. На практике рекомендованное соотношение 4,5: 1 может быть достигнуто путем затемнения более темного цвета и высветления более светлого с помощью анализатора цветового контраста. Например, в качестве более темных цветов можно рассмотреть темно-синий,  фиолетовый, темно-бордовый, темно-красный. В качестве легких и светлых цветов - желтый, оранжевый, зеленый и сине-зеленые оттенки. </section>


## Instructions (Задание)
<section id="instructions"> Camper Cat выбирает цвета для текста своего блога и фона. Сейчас ему нравится сочетание зеленоватого фона <code>background-color</code> с <code>color</code> текстом в темно-коричневом оттенке  <code>color</code>. Однако это сочетание имеет недостаточный коэффициент контрастности - всего 2,5 : 1. Camper Cat обозначил выбранные цвета, используя <code>hsl()</code> CSS <code>hsl()</code> (которое означает оттенок, насыщенность, освещенность). Вы можете легко отрегулировать яркость цвета всего лишь изменив третий аргумент. Увеличьте значение светочувствительности <code>background-color</code> с 35% до 55% и уменьшите значение <code>color</code> яркости от 20% до 15%. Это улучшит контрастность до 5.9: 1. </section>

## Tests (Тесты)
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

## Solution (Решение)
<section id='solution'>

```js
// здесь должно быть ваше решение
```
</section>
