---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
forumTopicId: 301495
localeTitle: Использование динамических весов
---

## Description
<section id='description'>
Методы D3 <code>min()</code> и <code>max()</code> полезны, чтобы помочь установить масштаб. Учитывая сложный набор данных, одним из приоритетов является установка масштаба, чтобы визуализация соответствовала ширине и высоте контейнера SVG. Вы хотите, чтобы все данные отображались внутри холста SVG, чтобы они были видны на веб-странице. В приведенном ниже примере задана шкала по оси X для данных графика разброса. Метод <code>domain()</code> передает информацию в шкалу о значениях необработанных данных для графика. Метод <code>range()</code> дает ему информацию о фактическом пространстве на веб-странице для визуализации. В этом примере домен переходит от 0 к максимуму в наборе. Он использует метод <code>max()</code> с функцией обратного вызова, основанной на значениях x в массивах. Диапазон использует ширину холста SVG ( <code>w</code> ), но также включает в себя некоторые дополнения. Это помещает пространство между точками графика рассеяния и краем холста SVG. <blockquote> const dataset = [ <br> [34, 78], <br> [109, 280], <br> [310, 120], <br> [79, 411], <br> [420, 220], <br> [233, 145], <br> [333, 96], <br> [222, 333], <br> [78, 320], <br> [21, 123] <br> ]; <br> const w = 500; <br> const h = 500; <br><br> // Заполнение между границей холста SVG и графиком <br> const padding = 30; <br> const xScale = d3.scaleLinear () <br> .domain ([0, d3.max (набор данных, (d) =&gt; d [0])]) <br> .range ([padding, w - padding]); </blockquote> Сначала заполнение может сбивать с толку. Отобразите ось x как горизонтальную линию от 0 до 500 (значение ширины для холста SVG). Включение дополнения в метод <code>range()</code> заставляет график начинаться с 30 по этой линии (вместо 0) и заканчиваться на 470 (вместо 500).
</section>

## Instructions
<section id='instructions'>
Используйте переменную <code>yScale</code> для создания линейной шкалы оси y. Домен должен начинаться с нуля и перейти к максимальному значению y в наборе. Диапазон должен использовать высоту SVG ( <code>h</code> ) и включать прокладку. <strong>Заметка</strong> <br> Не забудьте сохранить сюжет правой стороны. Когда вы устанавливаете диапазон для координат y, более высокое значение (высота минус заполнение) является первым аргументом, а нижним значением является второй аргумент.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text in the <code>h2</code> should be 30.
    testString: assert(output == 30 && $('h2').text() == '30');
  - text: The <code>domain()</code> of yScale should be equivalent to <code>[0, 411]</code>.
    testString: assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
  - text: The <code>range()</code> of yScale should be equivalent to <code>[470, 30]</code>.
    testString: assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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
