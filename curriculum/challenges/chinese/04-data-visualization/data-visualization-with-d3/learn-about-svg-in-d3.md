---
id: 587d7fa8367417b2b2512bcb
challengeType: 6
forumTopicId: 301489
title: 了解 D3 中的 SVG
---

## Description
<section id='description'>
SVG 是 <code>Scalable Vector Graphics</code> 的缩写。
"scalable" 的意思是如果放大或缩小一个对象，它不会像素化。不管是在小的移动手机屏幕上还是在大的电视显示器上它都会随着显示系统缩放。
SVG 用于制作常见的几何图形。由于 D3 将数据映射成可视化表达，它用 SVG 来创建可视化的图形。网页上的 SVG 图形必须在 HTML 的 <code>svg</code> 标签中。
当使用相对单位（例如 <code>vh</code>、<code>vw</code> 或者百分比）时，CSS 是可伸缩的。但是在实现数据可视化的时候 SVG 更加的灵活。
</section>

## Instructions
<section id='instructions'>
用 <code>append()</code> 给 <code>body</code> 加一个 <code>svg</code> 节点。分别使用 <code>attr()</code> 给这个 <code>svg</code> 一个 <code>width</code> 属性和一个 <code>height</code> 属性，并分别将它们设置为给定的常量 <code>w</code> 和给定的常量 <code>h</code>。你可以在输出中看见它，因为在 <code>style</code> 标签中它的 <code>background-color</code> 设置为 pink。
<strong>提示</strong><br> <code>width</code> 和 <code>height</code> 属性没有单位，它们是来定义缩放的。但无论怎么缩放，这个 <code>svg</code> 元素的宽高比永远是 5:1 。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的文档应该有 1 个 <code>svg</code> 元素。
    testString: assert($('svg').length == 1);
  - text:  <code>svg</code> 元素的 <code>width</code> 属性应该为 500。
    testString: assert($('svg').attr('width') == '500'||$('svg').css('width') == '500px');
  - text:  <code>svg</code> 元素的 <code>height</code> 属性应该为 100。
    testString: assert($('svg').attr('height') == '100'||$('svg').css('height') == '100px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // 在下面添加你的代码



                  // 在上面添加你的代码
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  svg {
    background-color: pink;
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
                  .attr("height", h)
  </script>
</body>

```

</section>
