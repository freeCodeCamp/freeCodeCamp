---
id: 587d7fac367417b2b2512bdc
title: Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
videoUrl: ''
localeTitle: 使用d3.max和d3.min函数查找数据集中的最小值和最大值
---

## Description
<section id="description"> D3方法<code>domain()</code>和<code>range()</code>根据数据为您的比例设置该信息。有几种方法可以使这更容易。通常在设置域时，您需要使用数据集中的最小值和最大值。尝试手动查找这些值，尤其是在大型数据集中，可能会导致错误。 D3有两种方法<code>min()</code>和<code>max()</code>来返回这些信息。这是一个例子： <blockquote> const exampleData = [34,234,73,90,6,52]; <br> d3.min（exampleData）//返回6 <br> d3.max（exampleData）//返回234 </blockquote>数据集可能具有嵌套数组，例如散点图示例中的[x，y]坐标对。在这种情况下，您需要告诉D3如何计算最大值和最小值。幸运的是， <code>min()</code>和<code>max()</code>方法都采用了回调函数。在此示例中，回调函数的参数<code>d</code>用于当前内部数组。回调需要从内部数组（x或y值）返回要计算最大值或最小值的元素。这是一个如何使用数组数组查找最小值和最大值的示例： <blockquote> const locationData = [[1,7]，[6,3]，[8,3]]; <br> //返回第一个元素中的最小数字<br> const minX = d3.min（locationData，（d）=&gt; d [0]）; <br> // minX比较1,6和8并设置为1 </blockquote></section>

## Instructions
<section id="instructions"> <code>positionData</code>变量包含一个三维（3D）数组。使用D3方法从数组中查找z坐标（第三个值）的最大值，并将其保存在<code>output</code>变量中。 <strong>注意</strong> <br>有趣的事实 -  D3可以绘制3D阵列。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code>的文本应为8。
    testString: assert(output == 8 && $('h2').text() == '8');
  - text: 您的代码应使用<code>max()</code>方法。
    testString: assert(code.match(/\.max/g), 'Your code should use the <code>max()</code> method.')

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
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

/section>
