---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 6
videoUrl: ''
localeTitle: 动态更新元素的高度
---

## Description
<section id="description">之前的挑战包括如何显示数组中的数据以及如何添加CSS类。您可以结合这些课程来创建简单的条形图。这有两个步骤：1）为数组中的每个数据点创建一个<code>div</code> 2）使用<code>style()</code>方法中的回调函数给每个<code>div</code>一个动态高度，该函数将高度设置为等于数据值。回想一下格式为使用回调函数设置样式： <code>selection.style(&quot;cssProperty&quot;, (d) =&gt; d)</code> </section>

## Instructions
<section id="instructions">将<code>style()</code>方法添加到编辑器中的代码中，以设置每个元素的<code>height</code>属性。使用回调函数返回数据点的值，并添加字符串“px”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
