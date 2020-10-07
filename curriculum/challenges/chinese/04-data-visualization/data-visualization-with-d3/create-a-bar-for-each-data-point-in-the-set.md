---
id: 587d7fa8367417b2b2512bcd
challengeType: 6
forumTopicId: 301482
title: 为集合中的每个数据点创建一个 Bar
---

## Description
<section id='description'>
上个挑战仅仅在 <code>svg</code> 中添加了一个矩形来表示一组。接下来你将结合到目前为止所学的关于 <code>data()</code>、<code>enter()</code>、SVG 图形的知识，为 <code>dataset</code> 中的每一个数据点创建并且添加一个矩形。
之前的挑战展示了如何为 <code>dataset</code> 中的每个对象创建并添加一个 <code>div</code>：

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

<code>rect</code> 元素和 <code>div</code> 有一些不同，<code>rect</code> 必须添加在 <code>svg</code> 元素内，而不能直接添加在 <code>body</code> 内。同时，你需要告诉 D3 将 <code>rect</code> 放在 <code>svg</code> 区域的哪个位置。组的放置会在下一个挑战中讲到。
</section>

## Instructions
<section id='instructions'>
用 <code>data()</code>、<code>enter()</code>、<code>append()</code> 方法为 <code>dataset</code> 中的每一个对象创建并添加一个 <code>rect</code> 。每一组都将直接显示在上一组的上面，将上一组覆盖，这将会在下一个挑战中得到修改。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的文档应该有 9 个 <code>rect</code> 元素。
    testString: assert($('rect').length == 9);
  - text: 你应该使用 <code>data()</code> 方法。
    testString: assert(code.match(/\.data/g));
  - text: 你应该使用 <code>enter()</code> 方法。
    testString: assert(code.match(/\.enter/g));
  - text: 你应该使用 <code>append()</code> 方法。
    testString: assert(code.match(/\.append/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
       // 在下面添加你的代码



       // 在上面添加你的代码
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

```

</section>
