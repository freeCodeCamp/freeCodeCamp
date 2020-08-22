---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
videoUrl: ''
localeTitle: 根据数据更改样式
---

## Description
<section id="description"> D3是关于数据的可视化和呈现。您可能希望根据数据更改元素的样式。您可以在<code>style()</code>方法中使用回调函数来更改不同元素的样式。例如，如果值小于20，您可能希望将数据点着色为蓝色，否则为红色。您可以在<code>style()</code>方法中使用回调函数并包含条件逻辑。回调函数使用<code>d</code>参数表示数据点： <blockquote> selection.style（“color”，（d）=&gt; { <br> / *根据条件返回颜色的逻辑* / <br> }）; </blockquote> <code>style()</code>方法不仅限于设置<code>color</code> - 它也可以与其他CSS属性一起使用。 </section>

## Instructions
<section id="instructions">将<code>style()</code>方法添加到编辑器中的代码，以有条件地设置<code>h2</code>元素的<code>color</code> 。写回调函数，如果数据值小于20，则返回“red”，否则返回“green”。 <strong>注意</strong> <br>您可以使用if-else逻辑或三元运算符。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一<code>h2</code>应该有一个<code>color</code>的红色。
    testString: assert($('h2').eq(0).css('color') == "rgb(255, 0, 0)");
  - text: 第二<code>h2</code>应该有一个<code>color</code>的绿色。
    testString: assert($('h2').eq(1).css('color') == "rgb(0, 128, 0)");
  - text: 第三<code>h2</code>应该有一个<code>color</code>的绿色。
    testString: assert($('h2').eq(2).css('color') == "rgb(0, 128, 0)");
  - text: 第四<code>h2</code>应该有一个<code>color</code>的红色。
    testString: assert($('h2').eq(3).css('color') == "rgb(255, 0, 0)");
  - text: 第五<code>h2</code>应该有一个<code>color</code>的绿色。
    testString: assert($('h2').eq(4).css('color') == "rgb(0, 128, 0)");
  - text: 第六<code>h2</code>应该有一个<code>color</code>的红色。
    testString: assert($('h2').eq(5).css('color') == "rgb(255, 0, 0)");
  - text: 第七<code>h2</code>应该有一个<code>color</code>的绿色。
    testString: assert($('h2').eq(6).css('color') == "rgb(0, 128, 0)");
  - text: 第八<code>h2</code>应该有一个<code>color</code>的红色。
    testString: assert($('h2').eq(7).css('color') == "rgb(255, 0, 0)");
  - text: 第九<code>h2</code>应该有一个<code>color</code>的红色。
    testString: assert($('h2').eq(8).css('color') == "rgb(255, 0, 0)");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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
