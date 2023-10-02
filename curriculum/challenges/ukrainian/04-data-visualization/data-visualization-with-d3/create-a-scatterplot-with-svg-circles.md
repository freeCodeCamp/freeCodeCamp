---
id: 587d7fab367417b2b2512bd7
title: Створіть точкову діаграму за допомогою кругів SVG
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

Точкова діаграма — ще один вид візуалізації. Вона зазвичай використовує круги, щоб позначити точки даних, які мають по два значення. Ці значення прив’язують до осей `x` та `y`; їх використовують, щоб розмістити круг у візуалізації.

SVG має тег `circle` для створення круга. Він працює схоже до елементів `rect`, які ви використовували для стовпчикової діаграми.

# --instructions--

Використайте методи `data()`, `enter()` та `append()`, щоб прив’язати `dataset` до нових елементів `circle`, які додані до SVG.

**Примітка:** круги будуть невидимими, оскільки ми не встановили їхні атрибути. Ми зробимо це у наступному завданні.

# --hints--

Код має містити 10 елементів `circle`.

```js
assert($('circle').length == 10);
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       // Add your code below this line



       // Add your code above this line

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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")

  </script>
</body>
```
