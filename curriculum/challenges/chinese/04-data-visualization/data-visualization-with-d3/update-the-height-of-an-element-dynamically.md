---
id: 587d7fa8367417b2b2512bc9
challengeType: 6
forumTopicId: 301493
title: 动态更新元素的高度
---

## Description
<section id='description'>
之前的挑战包括如何从数组中显示数据和如何添加 CSS 类。将这些课程的内容结合起来只需两步你就能创建出一个简单的条形图：
1) 为每一个数组中的数据点都创建一个 <code>div</code>
2) 为每个 <code>div</code> 动态分配高度值，在 <code>style()</code> 方法中使用回调函数将高度值设置为数据大小
回想使用回调函数设置样式的格式：
<code>selection.style("cssProperty", (d) => d)</code> 
</section>

## Instructions
<section id='instructions'>
在编辑器中添加 <code>style()</code> 方法给每个元素设置 <code>height</code> 属性。使用回调函数返回数据点的值加上字符串 "px"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>div</code> 的 <code>height</code> 应该为 12 个像素。
    testString: assert($('div').eq(0)[0].style.height === '12px');
  - text: 第二个 <code>div</code> 的 <code>height</code> 应该为 31 个像素。
    testString: assert($('div').eq(1)[0].style.height === '31px');
  - text: 第三个 <code>div</code> 的 <code>height</code> 应该为 22 个像素。
    testString: assert($('div').eq(2)[0].style.height === '22px');
  - text: 第四个 <code>div</code> 的 <code>height</code> 应该为 17 个像素。
    testString: assert($('div').eq(3)[0].style.height === '17px');
  - text: 第五个 <code>div</code> 的 <code>height</code> 应该为 25 个像素。
    testString: assert($('div').eq(4)[0].style.height === '25px');
  - text: 第六个 <code>div</code> 的 <code>height</code> 应该为 18 个像素。
    testString: assert($('div').eq(5)[0].style.height === '18px');
  - text: 第七个 <code>div</code> 的 <code>height</code> 应该为 29 个像素。
    testString: assert($('div').eq(6)[0].style.height === '29px');
  - text: 第八个 <code>div</code> 的 <code>height</code> 应该为 14 个像素。
    testString: assert($('div').eq(7)[0].style.height === '14px');
  - text: 第九个 <code>div</code> 的 <code>height</code> 应该为 9 个像素。
    testString: assert($('div').eq(8)[0].style.height === '9px');

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
      .style('height', d => `${d}px`)
  </script>
</body>
```

</section>
