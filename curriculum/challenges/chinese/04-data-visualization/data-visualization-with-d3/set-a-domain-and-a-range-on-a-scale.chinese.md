---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 0

videoUrl: ''
localeTitle: Set a Domain and a Range on a Scale
---

## Description
<section id='description'>
默认情况下，比例尺使用同一关系(identity relationship)，即输入值直接映射为输出值。但是比例尺可以更灵活更有趣。
假设有一个数据集范围为 50 到 480，这是缩放的输入信息，也被称为域(domain)。
你想沿着 10 个单位到 500 个单位的<code>x</code>轴映射这些点到 SVG 画布上。这是输出信息，也被称为范围(range)。
<code>domain()</code>和<code>range()</code>方法设置缩放的值，它们都以至少有两个元素的数组为参数。下面是一个例子：
<blockquote>// 设置域<br>// 域覆盖了一组输入值<br>scale.domain([50, 480]);<br>// 设置范围<br>// 范围覆盖了一组输出值<br>scale.range([10, 500]);<br>scale(50) // 返回 10<br>scale(480) // 返回 500<br>scale(325) // 返回 323.37<br>scale(750) // 返回 807.67<br>d3.scaleLinear()</blockquote>
注意，比例尺使用了域和范围之间的线性关系来找出给定数字的输出值。域中的最小值(50)映射为范围中的最小值(10)。
</section>

## Instructions
<section id='instructions'>
创建一个比例尺，将它的域设置为<code>[250, 500]</code>，范围设置为<code>[10, 150]</code>。
<strong>提示</strong><br>你可以将<code>domain()</code>和<code>range()</code>方法串联在<code>scale</code>变量后。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用<code>domain()</code>方法。
    testString: assert(code.match(/\.domain/g), '你应该使用<code>domain()</code>方法。');
  - text: 比例尺的<code>domain()</code>应该设置为<code>[250, 500]</code>。
    testString: assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), '比例尺的<code>domain()</code>应该设置为<code>[250, 500]</code>。');
  - text: 你应该使用<code>range()</code>方法。
    testString: assert(code.match(/\.range/g), '你应该使用<code>range()</code>方法。');
  - text: 比例尺的<code>range()</code>应该设置为<code>[10, 150]</code>。
    testString: assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), '比例尺的<code>range()</code>应该设置为<code>[10, 150]</code>。');
  - text: <code>h2</code>的文本应该为 -102。
    testString: assert($('h2').text() == '-102', '<code>h2</code>的文本应该为 -102。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<body>,  <script>,    // 在下面添加你的代码,    const scale = d3.scaleLinear();,    ,    ,    ,    // 在上面添加你的代码,    const output = scale(50);,    d3.select("body"),      .append("h2"),      .text(output);,  </script>,</body>
```





</div>





</section>

              