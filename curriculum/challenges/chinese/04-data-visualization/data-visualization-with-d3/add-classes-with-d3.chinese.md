---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 0

videoUrl: ''
localeTitle: Add Classes with D3
---

## Description
<section id='description'>
即使对小型 app 来说在 HTML 元素中大量使用内联样式表也十分难以管理。更方便的是给元素添加遵守 CSS 规则的类。D3 中的<code>attr()</code>方法可以给元素添加任何 HTML 属性，包括类名称。
<code>attr()</code>方法和<code>style()</code>的使用方法一样。它以逗号分隔的键值对为参数使用回调函数。这里是一个给选中元素添加类名为 "container" 的例子：
<code>selection.attr("class", "container");</code>
</section>

## Instructions
<section id='instructions'>
在编辑器中添加<code>attr()</code>方法，给<code>div</code>元素添加类名<code>bar</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>div</code>元素应该有一个<code>bar</code>类。
    testString: assert($('div').attr('class') == "bar", '你的<code>div</code>元素应该有一个<code>bar</code>类。');
  - text: 你应该使用<code>attr()</code>方法。
    testString: assert(code.match(/\.attr/g), '你应该使用<code>attr()</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .bar {,    width: 25px;,    height: 100px;,    display: inline-block;,    background-color: blue;,  },</style>,<body>,  <script>,    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];,    ,    d3.select("body").selectAll("div"),      .data(dataset),      .enter(),      .append("div"),      // 在下面添加你的代码,      ,      ,      ,      // 在上面添加你的代码,  </script>,</body>
```





</div>





</section>

              