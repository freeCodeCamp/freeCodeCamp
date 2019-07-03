---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 0

videoUrl: ''
localeTitle: Update the Height of an Element Dynamically
---

## Description
<section id='description'>
之前的挑战包括如何从数组中显示数据和如何添加 CSS 类。将这些课程的内容结合起来只需两步你就能创建出一个简单的条形图：
1) 为每一个数组中的数据点都创建一个<code>div</code>
2) 为每个<code>div</code>动态分配高度值，在<code>style()</code>方法中使用回调函数将高度值设置为数据大小
回想使用回调函数设置样式的格式：
<code>selection.style("cssProperty", (d) => d)</code>
</section>

## Instructions
<section id='instructions'>
在编辑器中添加<code>style()</code>方法给每个元素设置<code>height</code>属性。使用回调函数返回数据点的值加上字符串 "px"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>div</code>的<code>height</code>应该为 12 个像素。
    testString: assert($('div').eq(0).css('height') == '12px', '第一个<code>div</code>的<code>height</code>应该为 12 个像素。');
  - text: 第二个<code>div</code>的<code>height</code>应该为 31 个像素。
    testString: assert($('div').eq(1).css('height') == '31px', '第二个<code>div</code>的<code>height</code>应该为 31 个像素。');
  - text: 第三个<code>div</code>的<code>height</code>应该为 22 个像素。
    testString: assert($('div').eq(2).css('height') == '22px', '第三个<code>div</code>的<code>height</code>应该为 22 个像素。');
  - text: 第四个<code>div</code>的<code>height</code>应该为 17 个像素。
    testString: assert($('div').eq(3).css('height') == '17px', '第四个<code>div</code>的<code>height</code>应该为 17 个像素。');
  - text: 第五个<code>div</code>的<code>height</code>应该为 25 个像素。
    testString: assert($('div').eq(4).css('height') == '25px', '第五个<code>div</code>的<code>height</code>应该为 25 个像素。');
  - text: 第六个<code>div</code>的<code>height</code>应该为 18 个像素。
    testString: assert($('div').eq(5).css('height') == '18px', '第六个<code>div</code>的<code>height</code>应该为 18 个像素。');
  - text: 第七个<code>div</code>的<code>height</code>应该为 29 个像素。
    testString: assert($('div').eq(6).css('height') == '29px', '第七个<code>div</code>的<code>height</code>应该为 29 个像素。');
  - text: 第八个<code>div</code>的<code>height</code>应该为 14 个像素。
    testString: assert($('div').eq(7).css('height') == '14px', '第八个<code>div</code>的<code>height</code>应该为 14 个像素。');
  - text: 第九个<code>div</code>的<code>height</code>应该为 9 个像素。
    testString: assert($('div').eq(8).css('height') == '9px', '第九个<code>div</code>的<code>height</code>应该为 9 个像素。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .bar {,    width: 25px;,    height: 100px;,    display: inline-block;,    background-color: blue;,  },</style>,<body>,  <script>,    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];,    ,    d3.select("body").selectAll("div"),      .data(dataset),      .enter(),      .append("div"),      .attr("class", "bar"),      // 在下面添加你的代码,      ,      ,      ,      // 在上面添加你的代码,  </script>,</body>
```





</div>





</section>

              