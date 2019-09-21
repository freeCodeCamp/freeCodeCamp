---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: https://scrimba.com/c/cKb3nCq
forumTopicId: 301017
localeTitle: Улучшить читаемость с помощью текста с высоким контрастом
---

## Description
<section id='description'>
Низкий контраст между цветами текста и фона может затруднить чтение текста. Достаточный контраст улучшает читаемость вашего текста, но что именно означает «достаточный»? Рекомендации по доступности веб-содержимого (WCAG) рекомендуют коэффициент контрастности не ниже 4,5:1 для обычного текста. Отношение рассчитывается путем сравнения относительных значений яркости двух цветов. Оно колеблется от 1:1 для того же цвета или без контраста до 21:1 для белого против черного, самого сильного контраста. В Интернете доступно множество инструментов для проверки контраста, которые вычисляют это соотношение.
</section>

## Instructions
<section id='instructions'>
Camper Cat выбрал светло-серый текст на белом фоне для его недавнего сообщения в блоге, такая пара имеет коэффициент контрастности 1,5:1, что затрудняет чтение текста. Измените <code>color</code> текста с текущего серого ( <code>#D3D3D3</code> ) на более темный серый ( <code>#636363</code> ), чтобы улучшить коэффициент контрастности до 6:1.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the text <code>color</code> for the <code>body</code> to the darker gray.
    testString: assert($('body').css('color') == 'rgb(99, 99, 99)');
  - text: Your code should not change the <code>background-color</code> for the <code>body</code>.
    testString: assert($('body').css('background-color') == 'rgb(255, 255, 255)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
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
    color: #636363;
    background-color: #FFF;
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
