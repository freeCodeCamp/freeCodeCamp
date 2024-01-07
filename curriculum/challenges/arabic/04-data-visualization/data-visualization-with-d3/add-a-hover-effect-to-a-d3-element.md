---
id: 587d7faa367417b2b2512bd4
title: أضف تأثير عندما يحوم الماوس فوق عنصر (Hover Effect) D3
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

من الممكن إضافة التأثيرات (effects) التي توضح العمود (bar) عندما يحوم الماوس فوقه (hovers). حتى الآن، طبقت تصميم (style) المستطيلات بواسطة طرق مدمجة (built-in methods) في D3 و SVG، ولكن يمكنك استعمال CSS أيضا.

يمكنك تعيين فئة (class) من CSS إلى عناصر SVG مع طريقة (method) تسمى `attr()`. ثم تحتوي فئة الزائفة (pseudo-class) المسمى `:hover` على قواعد التصميم (style) الجديدة لأي تأثيرات عند تحرك المستخدم فوق عنصر (hover).

# --instructions--

استخدم طريقة (method) تسمى `attr()` لإضافة فئة (class) بقيمة `bar` إلى جميع العناصر `rect`. هذا يغير لون `fill` من العمود (bar) للبني عند تحركك فوقه.

# --hints--

يجب أن تحتوي عناصرك `rect` على فئة (class) بقيمة `bar`.

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
