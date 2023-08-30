---
id: 587d7fac367417b2b2512bdd
title: Використайте динамічні шкали
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

Методи `min()` та `max()` від D3 допомагають встановити шкалу.

Одним з пріоритетів у складному наборі даних є встановлення шкали так, щоб візуалізація відповідала ширині та висоті контейнера SVG. Всі дані мають бути розміщеними всередині SVG, щоб вони були видимими на вебсторінці.

У наведеному нижче прикладі встановлюється шкала осі х для даних точкової діаграми. Метод `domain()` передає інформацію до шкали про значення вихідних даних для діаграми. Метод `range()` надає інформацію про актуальний простір на вебсторінці для візуалізації.

У цьому прикладі домен переходить від 0 до максимального значення в наборі. Він використовує метод `max()` з функцією зворотного виклику на основі значень x у масивах. Діапазон використовує ширину SVG (`w`), але він також містить деякі відступи. Це додає простір між точками діаграми та краєм SVG.

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

Спершу відступ може спантеличити. Уявіть вісь x як горизонтальну лінію від 0 до 500 (значення ширини для SVG). Включно з відступами, метод `range()` змушує діаграму починатися з 30 уздовж цієї лінії (замість 0), і закінчуватися на 470 (замість 500).

# --instructions--

Використайте змінну `yScale`, щоб створити лінійну шкалу осі y. Домен має починатися з нуля і досягти максимального значення `y` в наборі. Діапазон має використати висоту SVG (`h`) та містити відступи.

**Примітка:** не забудьте розмістити графік лицьовим боком наверх. Коли ви встановлюєте діапазон для координат у, то більше значення (висота мінус відступ) є першим аргументом, а менше значення — другим.

# --hints--

Текстом елемента `h2` має бути `30`.

```js
assert(output == 30 && $('h2').text() == '30');
```

Значенням `domain()` змінної yScale має бути `[0, 411]`.

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

Значенням `range()` змінної yScale має бути `[470, 30]`.

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
