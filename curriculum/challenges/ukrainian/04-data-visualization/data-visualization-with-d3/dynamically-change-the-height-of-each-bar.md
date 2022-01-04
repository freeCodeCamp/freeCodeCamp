---
id: 587d7fa9367417b2b2512bcf
title: Динамічна зміна висоти кожного стовпчика
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

Висота кожного стовпчика може бути заданою відповідно до величини значення точки у масиві, подібно до динамічного значення `x`.

```js
selection.attr("property", (d, i) => {

})
```

Тут `d` буде значенням точки даних, а `i` буде індексом точки даних у масиві.

# --instructions--

Змініть функцію зворотного виклику для атрибуту `height` щоб повернути значення даних помножене на 3.

**Note:** Пам'ятайте, що множення усіх значень даних на однакову сталу збільшує масштаб даних (ніби наближення). Це допомагає побачити різницю між значеннями стовпців в даному прикладі.

# --hints--

Перший `rect` повинен мати `height` `36`.

```js
assert($('rect').eq(0).attr('height') == '36');
```

Другий `rect` повинен мати `height` `93`.

```js
assert($('rect').eq(1).attr('height') == '93');
```

Третій `rect` повинен мати `height` `66`.

```js
assert($('rect').eq(2).attr('height') == '66');
```

Четвертий `rect` повинен мати `height` `51`.

```js
assert($('rect').eq(3).attr('height') == '51');
```

П'ятий `rect` повинен мати`height` `75`.

```js
assert($('rect').eq(4).attr('height') == '75');
```

Шостий `rect` повинен мати `height` `54`.

```js
assert($('rect').eq(5).attr('height') == '54');
```

Сьомий `rect` повинен мати `height` `87`.

```js
assert($('rect').eq(6).attr('height') == '87');
```

Восьмий `rect` повинен мати `height` `42`.

```js
assert($('rect').eq(7).attr('height') == '42');
```

Дев'ятий `rect` повинен мати `height` `27`.

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
