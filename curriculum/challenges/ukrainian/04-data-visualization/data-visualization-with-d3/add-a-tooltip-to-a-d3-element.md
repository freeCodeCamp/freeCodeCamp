---
id: 587d7faa367417b2b2512bd6
title: Додавання до елементу D3 спливаючої підказки
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

Спливаюча підказка відображає розширену інформацію про елемент на сторінці при наведенні на неї курсору миші. There are several ways to add a tooltip to a visualization. This challenge uses the SVG `title` element.

`title` працює у парі з методом `text()`, щоб динамічно додавати дані до стовпців.

# --instructions--

Додайте елемент `title` під кожен вузол `rect`. Потім застосуйте метод `text()` з функцією зворотнього зв'язку, щоб текст відображав значення даних.

# --hints--

У Вашому коді має бути 9 елементів `title`.

```js
assert($('title').length == 9);
```

Перший елемент `title` має містити текст підказки `12`.

```js
assert($('title').eq(0).text() == '12');
```

Другий елемент `title` має містити текст підказки `31`.

```js
assert($('title').eq(1).text() == '31');
```

Третій елемент `title` має містити текст підказки `22`.

```js
assert($('title').eq(2).text() == '22');
```

Четвертий елемент `title` має містити текст підказки `17`.

```js
assert($('title').eq(3).text() == '17');
```

П'ятий елемент `title` має містити текст підказки `25`.

```js
assert($('title').eq(4).text() == '25');
```

Шостий елемент `title` має містити текст підказки `18`.

```js
assert($('title').eq(5).text() == '18');
```

Сьомий елемент `title` має містити текст підказки `29`.

```js
assert($('title').eq(6).text() == '29');
```

Восьмий елемент `title` має містити текст підказки `14`.

```js
assert($('title').eq(7).text() == '14');
```

Дев'ятий елемент `title` має містити текст підказки `9`.

```js
assert($('title').eq(8).text() == '9');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)


    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```
