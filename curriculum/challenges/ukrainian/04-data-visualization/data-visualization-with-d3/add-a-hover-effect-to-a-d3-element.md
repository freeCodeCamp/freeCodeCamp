---
id: 587d7faa367417b2b2512bd4
title: Додавання до елементу D3 ефекту при наведенні курсором
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

Однією з можливостей є додавання до елемента ефектів, які його виділятимуть, коли користувач наводить на нього курсор. Поки що стилізація прямокутників застосовується з вбудованими D3 та SVG методами, але ви можете також використовувати і CSS.

Спочатку ви встановлюєте CSS клас на елементах SVG за допомогою методу `attr()`. Потім псевдоклас `:hover` для вашого нового класу зберігає правила стилю для будь-яких ефектів, які виникаються при наведенні курсором.

# --instructions--

Використайте метод `attr()`, щоб додати клас `bar` до всіх елементів `rect`. Це змінює колір елементу `fill` на коричневий, коли ви наводите на нього курсор.

# --hints--

Ваші елементи `rect` повинні мати клас `bar`.

```js
assert($('rect').attr('class').trim().split(/\s+/g).includes('bar'));
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line
       .attr('class', 'bar')
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
  </script>
</body>
```
