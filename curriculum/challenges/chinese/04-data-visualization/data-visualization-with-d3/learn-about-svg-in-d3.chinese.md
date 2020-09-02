---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
videoUrl: ''
localeTitle: 在D3中了解SVG
---

## Description
<section id="description"> SVG代表<code>Scalable Vector Graphics</code> 。这里的“可缩放”意味着，如果放大或缩小对象，它就不会出现像素化。它可以与显示系统一起扩展，无论是在小型移动屏幕还是大型电视监视器上。 SVG用于制作常见的几何形状。由于D3将数据映射到可视化表示，因此它使用SVG为可视化创建形状。网页的SVG形状必须位于HTML <code>svg</code>标记内。当样式使用相对单位（例如<code>vh</code> ， <code>vw</code>或百分比）时，CSS可以是可伸缩的，但使用SVG可以更灵活地构建数据可视化。 </section>

## Instructions
<section id="instructions">使用<code>append()</code> <code>svg</code>节点添加到<code>body</code> 。给它一个<code>width</code>属性设置为所提供的<code>w</code>常数和<code>height</code>设置为所提供的属性<code>h</code>使用恒定<code>attr()</code>为每个方法。您将在输出中看到它，因为在<code>style</code>标记中应用了粉红色的<code>background-color</code> 。 <strong>注意</strong> <br>宽度和高度属性没有单位。这是缩放的构建块 - 无论缩放级别如何，元素的宽高比始终为5：1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的文档应该有1个<code>svg</code>元素。
    testString: assert($('svg').length == 1);
  - text: <code>svg</code>元素的<code>width</code>属性应设置为500。
    testString: assert($('svg').attr('width') == '500'||$('svg').css('width') == '500px');
  - text: <code>svg</code>元素的<code>height</code>属性应设置为100。
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
