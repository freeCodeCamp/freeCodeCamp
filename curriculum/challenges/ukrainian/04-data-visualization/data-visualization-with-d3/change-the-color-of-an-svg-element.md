---
id: 587d7fa9367417b2b2512bd1
title: Зміна кольору елемента SVG
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

Стовпці знаходяться в правильному положенні, але всі вони однакового чорного кольору. SVG має спосіб, як змінити колір стовпця.

В SVG форма `rect` забарвлена атрибутом `fill`. Він підтримує шістнадцяткові коди, назви кольорів та значення rgb, а також більш складні параметри, такі як градієнти та прозорість.

# --instructions--

Додайте метод `attr()` щоб встановити `fill` усім стовпцям темно-синій колір.

# --hints--

Стовпці мають всі `fill` в темно-синій колір.

```js
assert($('rect').css('fill') == 'rgb(0, 0, 128)');
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
       // Add your code below this line



       // Add your code above this line
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>
```
