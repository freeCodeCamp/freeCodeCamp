---
id: 587d7fac367417b2b2512bdd
title: Використання динамічних масштабів
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

D3 `min()` і `max()` методи допомагають встановити масштаб.

Враховуючи складний набір даних, одним із пріоритетів є встановлення масштабу так, щоб візуалізація відповідала ширині та висоті контейнера SVG. You want all the data plotted inside the SVG so it's visible on the web page.

У наведеному нижче прикладі встановлюється шкала осі х для відомостей діаграм розсіювання. Метод `domain()` передає до шкали інформацію про значення вихідних даних для діаграми. Метод `range()` надає йому інформацію про актуальний простір на веб-сторінці для візуалізації.

На приклад, домен переходить від нуля до максимального значення в множині. Він використовує метод `max()` з функцією зворотного виклику на основі значень x у масивах. The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

Спершу відступ може спантеличити. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). Включаючи відступи, метод `range()` змушує графік починатися з 30 уздовж цієї лінії (замість 0) і закінчуватися на 470 (замість 500).

# --instructions--

Використовуйте змінну `yScale`, щоб створити лінійну шкалу осі y. Домен повинен починатися з нуля і досягати максимального значення множини `y`. Діапазон повинен використовувати висоту SVG (`h`) і містити відступи.

**Примітка:** Пам'ятайте розміщувати точки графіка з правильної сторони. Коли ви встановлюєте діапазон для координат у, то вище значення (висота мінус відступ) є першим аргументом, а нижче значення – другим.

# --hints--

Текст у заголовку `h2` повинен дорівнювати `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

`domain()` в yScale має бути еквівалентним `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

`range()` в yScale має бути еквівалентним `[470, 30]`.

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
```

# --seed--

## --seed-contents--

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

    // Padding between the SVG boundary and the plot
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

# --solutions--

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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
