---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
videoUrl: ''
localeTitle: 使用SVG显示形状
---

## Description
<section id="description">最后一个挑战创建了一个具有给定宽度和高度的<code>svg</code>元素，这是可见的，因为它在<code>style</code>标记中应用了<code>background-color</code> 。代码为给定的宽度和高度创建了空间。下一步是创建一个放入<code>svg</code>区域的形状。 SVG中有许多支持的形状，例如矩形和圆形。它们用于显示数据。例如，矩形（ <code>&lt;rect&gt;</code> ）SVG形状可以在条形图中创建条形。将形状放入<code>svg</code>区域时，可以指定<code>x</code>和<code>y</code>坐标的位置。 （0,0）的原点位于左上角。 <code>x</code>正值将形状推向右侧， <code>y</code>正值将形状从原点向下推。要将形状放置在距离上次挑战的500（宽度）x 100（高度） <code>svg</code>的中间， <code>x</code>坐标将为250， <code>y</code>坐标将为50. SVG <code>rect</code>具有四个属性。它位于<code>svg</code>区域的位置有<code>x</code>和<code>y</code>坐标。它还有一个<code>height</code>和<code>width</code>来指定大小。 </section>

## Instructions
<section id="instructions">使用<code>append()</code>为<code>svg</code>添加一个<code>rect</code>形状，并为其赋予<code>width</code>属性25和<code>height</code>属性100.此外，将每个设置的<code>rect</code> <code>x</code>和<code>y</code>属性设置为0。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的文档应该有1个<code>rect</code>元素。
    testString: assert($('rect').length == 1);
  - text: <code>rect</code>元素的<code>width</code>属性应设置为25。
    testString: assert($('rect').attr('width') == '25');
  - text: <code>rect</code>元素的<code>height</code>属性应设置为100。
    testString: assert($('rect').attr('height') == '100');
  - text: <code>rect</code>元素的<code>x</code>属性应设置为0。
    testString: assert($('rect').attr('x') == '0');
  - text: <code>rect</code>元素的<code>y</code>属性应设置为0。
    testString: assert($('rect').attr('y') == '0');

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
                  .attr("height", h)
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

/section>
