---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: 'Избегайте проблем с цветовой слепотой, тщательно выбирая цвета, которые передают информацию'
---

## Description
<section id="description"> Существуют различные формы цветовой слепоты. Они могут варьироваться от пониженной чувствительности к определенной длине волны света до невозможности видеть цвет вообще. Наиболее распространенной формой является снижение чувствительности к обнаружению зеленого цвета. Например, если два похожих зеленых цвета являются цветом переднего плана и фона вашего контента, пользователь с цветовой слепотой может не распознать их. Близкие цвета можно рассматривать как соседей на цветовом колесе, и такие комбинации следует избегать при передаче важной информации. <strong>Заметка</strong> <br> Некоторые онлайн-инструменты для выбора цвета включают визуальное моделирование того, как выглядят цвета для разных типов цветовой слепоты. Это отличные ресурсы в дополнение к онлайн-калькуляторам проверки контраста. </section>

## Instructions
<section id="instructions"> Camper Cat тестируют различные стили для важной кнопки, но желтый ( <code>#FFFF33</code> ) <code>background-color</code> и зеленый ( <code>#33FF33</code> ) текст <code>color</code> являются соседними оттенками на цветовом колесе и практически неразличимы для некоторых пользователей с цветовой слепотой. (Поскольку они оба светлые, то и проверку на контрастность они также не проходят). Измените <code>color</code> текста на синий ( <code>#003366</code> ), чтобы решить обе проблемы. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен изменить <code>color</code> текста для <code>button</code> на синий.
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
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
