---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: 'Избегайте проблем со слепотой, тщательно определяя цвета, которые передают информацию'
---

## Description

<section id="description"> Существуют различные формы слепоты. Они могут варьироваться от пониженной чувствительности к определенной длины волны света до невозможности видеть цвет вообще. Наиболее распространенной формой является снижение чувствительности к обнаружению зеленого цвета. Например, если два похожих зеленых цвета являются цветом переднего плана и фона вашего контента, пользователь цветной слепоты может не распознать их. Близкие цвета можно рассматривать как соседей на цветовом колесе, и эти комбинации следует избегать при передаче важной информации. <strong>Заметка</strong> <br> Некоторые онлайн-инструменты для выбора цвета включают визуальное моделирование того, как появляются цвета для разных типов слепоты. Это отличные ресурсы в дополнение к онлайн-калькуляторам проверки контраста. </section>

## Instructions
<section id="instructions"> Camper Cat тестирует различные стили для важной кнопки, но желтый ( <code>#FFFF33</code> ) <code>background-color</code> и зеленый ( <code>#33FF33</code> ) текст <code>color</code> соседствующие оттенки на цветовом колесе и практически неразличимы для некоторых пользователей с дальтонизмом. (Их аналогичная легкость также не позволяет проверить коэффициент контрастности). Измените <code>color</code> текста на синий ( <code>#003366</code> ), чтобы решить обе проблемы. </section>


## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен изменить <code>color</code> текста для <code>button</code> на синем.
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
