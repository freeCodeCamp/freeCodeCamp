---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
videoUrl: ''
localeTitle: 使用D3创建线性比例
---

## Description
<section id="description">条形图和散点图图表都将数据直接绘制到SVG画布上。但是，如果条形或其中一个数据点的高度大于SVG高度或宽度值，则它将超出SVG区域。在D3中，有一些比例可以帮助绘制数据。 <code>Scales</code>是告诉程序如何将一组原始数据点映射到SVG画布的像素上的函数。例如，假设您有一个100x500大小的SVG画布，并且您想绘制许多国家的国内生产总值（GDP）。这组数字将在数十亿或万亿美元的范围内。您提供D3一种比例来告诉它如何将大的GDP值放入100x500大小的区域。您不太可能按原样绘制原始数据。在绘制之前，您可以设置整个数据集的比例，以便<code>x</code>和<code>y</code>值适合您的画布宽度和高度。 D3有几种比例类型。对于线性标度（通常与定量数据一起使用），有D3方法<code>scaleLinear()</code> ： <code>const scale = d3.scaleLinear()</code>默认情况下，标度使用标识关系。输入的值与输出的值相同。单独的挑战包括如何改变这一点。 </section>

## Instructions
<section id="instructions">更改<code>scale</code>变量以创建线性比例。然后将<code>output</code>变量设置为使用输入参数50调用的比例。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code>的文本应为50。
    testString: assert($('h2').text() == '50');
  - text: 您的代码应使用<code>scaleLinear()</code>方法。
    testString: assert(code.match(/\.scaleLinear/g));
  - text: <code>output</code>变量应该使用参数50调用<code>scale</code> 。
    testString: assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

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
