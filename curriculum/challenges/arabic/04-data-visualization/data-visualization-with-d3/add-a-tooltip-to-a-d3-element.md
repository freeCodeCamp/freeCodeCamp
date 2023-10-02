---
id: 587d7faa367417b2b2512bd6
title: إضافة أداة لتلميح (Tooltip) إلى عنصر D3
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

يظهر أداة لتلميح (tooltip) المزيد من معلومات العنصر في صفحة عندما ينتقل المستخدم فوق (hovers) هذا العنصر. There are several ways to add a tooltip to a visualization. This challenge uses the SVG `title` element.

يرافق `title` الطريقة (method) المسمى `text()` لإضافة البيانات بشكل ديناميكي إلى الأعمدة (bars).

# --instructions--

أربط عنصر `title` تحت كل node المسمى `rect`. ثم فعّيل الطريقة (method) المسمى `text()` مع وظيفة تعيد تفعيل (callback function) بحيث يعرض النص قيمة البيانات.

# --hints--

يجب أن يحتوي كودك على 9 عناصر `title`.

```js
assert($('title').length == 9);
```

يجب أن يحتوي أول عنصر `title` على تلميح بنص `12`.

```js
assert($('title').eq(0).text() == '12');
```

يجب أن يحتوي ثاني عنصر `title` على تلميح بنص `31`.

```js
assert($('title').eq(1).text() == '31');
```

يجب أن يحتوي ثالث عنصر `title` على تلميح بنص `22`.

```js
assert($('title').eq(2).text() == '22');
```

يجب أن يحتوي رابع عنصر `title` على تلميح بنص `17`.

```js
assert($('title').eq(3).text() == '17');
```

يجب أن يحتوي خامس عنصر `title` على تلميح بنص `25`.

```js
assert($('title').eq(4).text() == '25');
```

يجب أن يحتوي سادس عنصر `title` على تلميح بنص `18`.

```js
assert($('title').eq(5).text() == '18');
```

يجب أن يحتوي سابع عنصر `title` على تلميح بنص `29`.

```js
assert($('title').eq(6).text() == '29');
```

يجب أن يحتوي ثامن عنصر `title` على تلميح بنص `14`.

```js
assert($('title').eq(7).text() == '14');
```

يجب أن يحتوي تاسع عنصر `title` على تلميح بنص `9`.

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
