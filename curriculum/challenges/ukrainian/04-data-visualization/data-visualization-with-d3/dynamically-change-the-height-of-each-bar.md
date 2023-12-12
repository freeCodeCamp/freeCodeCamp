---
id: 587d7fa9367417b2b2512bcf
title: Змініть висоту кожного стовпчика динамічно
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

Висоту кожного стовпчика можна встановити на значення точки даних в масиві, схоже до динамічного встановлення значення `x`.

```js
selection.attr("property", (d, i) => {

})
```

Тут `d` буде значенням точки даних, а `i` буде індексом точки даних у масиві.

# --instructions--

Змініть функцію зворотного виклику для атрибута `height`, щоб вона повернула значення даних, помножене на 3.

**Примітка:** пам’ятайте, що при множенні всіх даних змінюється масштабування даних (ніби збільшення). Це допомагає побачити різницю між значеннями стовпчиків у прикладі.

# --hints--

Перший `rect` повинен мати `height` зі значенням `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

Другий `rect` повинен мати `height` зі значенням `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

Третій `rect` повинен мати `height` зі значенням `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

Четвертий `rect` повинен мати `height` зі значенням `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

П’ятий `rect` повинен мати `height` зі значенням `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

Шостий `rect` повинен мати `height` зі значенням `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

Сьомий `rect` повинен мати `height` зі значенням `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

Восьмий `rect` повинен мати `height` зі значенням `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

Дев’ятий `rect` повинен мати `height` зі значенням `27`.

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
  </script>
</body>
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
