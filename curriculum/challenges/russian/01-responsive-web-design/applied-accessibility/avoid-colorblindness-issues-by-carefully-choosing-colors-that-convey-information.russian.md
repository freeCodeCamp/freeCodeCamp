---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: 'Будьте внимательны к пользователям, которые не могут различать некоторые цвета - аккуратно выбирайте цвет текста и фона для передачи значимой информации'
---

## Description (Описание)
<section id="description"> Существуют различные формы слепоты: от пониженной чувствительности к отдельным цветам до полного отсутствия цветного зрения. Наиболее распространенной формой является снижение способности различать зеленый цвет. Например, если вы выберете два близких зеленых оттенка для текста и для фона вашей страницы, некоторые пользователи не смогут ничего различить и прочитать. Чтобы узнать, какие цвета и оттенки являются потенциально проблемными, воспользуйтесь цветовым кругом - эти цвета будут располагаться по соседству. Их следует избегать при передаче важной информации. Некоторые онлайн-инструменты для выбора цвета дают возможность увидеть сочетание цветов глазами пользователей с различными типами слепоты. Это отличные ресурсы в дополнение к онлайн-калькуляторам проверки контраста, воспользуйтесь ими. </section>

# Instructions (Задание)
<section id="instructions"> Camper Cat пробует различные стили для важной кнопки, но желтый ( <code>#FFFF33</code> ) <code>background-color</code> и зеленый ( <code>#33FF33</code> ) текст <code>color</code> находятся рядом на цветовом круге и практически неразличимы для некоторых пользователей-дальтоников. (По этой же причине сложно проверить их коэффициент контрастности - он слишком низкий). Измените цвет <code>color</code> текста на синий ( <code>#003366</code> ), чтобы решить обе проблемы одновременно. </section>

## Tests (Тесты)
<section id='tests'>

```yml
tests:
  - text: Ваш код должен изменить цвет <code>color</code> текста для <code>button</code> на синий.
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

## Solution (Решение)
<section id='solution'>

```js
// здесь должно быть ваше решение
```
</section>
