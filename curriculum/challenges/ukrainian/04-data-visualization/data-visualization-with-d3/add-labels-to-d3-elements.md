---
id: 587d7faa367417b2b2512bd2
title: Додайте позначки D3 елементів
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

D3 дозволяє позначати елемент графіку, наприклад, діаграму, за допомогою елемента SVG `text` element.

Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG. Крім того, необхідно отримати доступ до даних для відображення цих значень.

D3 дає вам високий рівень контролю над тим, як ви позначаєте свої діаграми.

# --instructions--

Код у редакторі вже пов’язує дані з кожним новим елементом `text`. Спочатку додайте вузли `text` до `svg`. Далі додайте атрибути для координат `x` та `y`. Їх слід обчислювати так само, як і значення `rect`, за винятком того, що значення `y` для `text` повинно зробити позначку на 3 одиниці вище, ніж діаграма. Нарешті, використовуйте метод D3 `text()`, щоб встановити позначку рівною значенню точки даних.

**Note:** Щоб позначка розташовувалася вище за смугу, вирішіть, чи має значення `y` для `text` бути на 3 позиції більше або на 3 менше від значення `y`на діаграмі.

# --hints--

Перший елемент `text` повинен мати позначку `12` та `y` значення `61`.

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

Другий елемент `text` повинен мати позначку `31` та `y` значення`4`.

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

Третій елемент `text` повинен мати позначку `22` та `y` значення `31`.

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

Четвертий елемент `text` повинен мати позначку`17` та `y` значення `46`.

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

П'ятий елемент `text` повинен мати позначку `25` та `y` значення`22`.

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

Шостий елемент `text` повинен мати позначку `18` та `y` значення `43`.

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

Сьомий елемент `text` повинен мати позначку `29` та `y`значення `10`.

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

Восьмий елемент `text` повинен мати позначку `14` та `y` значення`55`.

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

Дев’ятий елемент `text` повинен мати позначку `9` та `y`значення `70`.

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
