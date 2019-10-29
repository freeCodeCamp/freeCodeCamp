---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
forumTopicId: 301483
localeTitle: Создайте линейную шкалу с D3
---

## Description
<section id='description'>
Графики штрихов и диаграмм рассеяния отображают данные непосредственно на холст SVG. Однако, если высота бара или одной из точек данных больше, чем значения высоты или ширины SVG, она выходит за пределы области SVG. В D3 существуют шкалы, которые помогают отображать данные. <code>Scales</code> - это функции, которые сообщают программе, как сопоставить набор необработанных точек данных на пикселях холста SVG. Например, скажем, у вас есть холст SVG размером 100 × 500 и вы хотите построить валовой внутренний продукт (ВВП) для ряда стран. Набор чисел будет в диапазоне миллиардов или триллионов долларов. Вы предоставляете D3 тип шкалы, чтобы рассказать о том, как разместить большие значения ВВП в этой области размером 100x500. Маловероятно, что вы будете строить необработанные данные как есть. Перед построением графика вы установите масштаб для всего набора данных, чтобы значения <code>x</code> и <code>y</code> соответствовали ширине и высоте холста. D3 имеет несколько типов шкалы. Для линейного масштаба (обычно используется с количественными данными) существует метод D3 <code>scaleLinear()</code> : <code>const scale = d3.scaleLinear()</code> По умолчанию масштаб использует отношение идентичности. Значение входа совпадает с значением выхода. Отдельная проблема охватывает то, как это изменить.
</section>

## Instructions
<section id='instructions'>
Измените <code>scale</code> переменную, чтобы создать линейную шкалу. Затем установите <code>output</code> переменную в шкалу с аргументом ввода 50.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text in the <code>h2</code> should be 50.
    testString: assert($('h2').text() == '50');
  - text: Your code should use the <code>scaleLinear()</code> method.
    testString: assert(code.match(/\.scaleLinear/g));
  - text: The <code>output</code> variable should call <code>scale</code> with an argument of 50.
    testString: assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
