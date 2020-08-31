---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
videoUrl: ''
localeTitle: 在D3中使用动态数据
---

## Description
<section id="description">最后两个挑战涵盖了使用<code>data()</code>和<code>enter()</code>方法使用D3动态显示数据的基础知识。这些方法采用数据集，并与<code>append()</code>方法一起为数据集中的每个条目创建一个新的DOM元素。在上一个挑战中，您为<code>dataset</code>数组中的每个项创建了一个新的<code>h2</code>元素，但它们都包含相同的文本“New Title”。这是因为您没有使用绑定到每个<code>h2</code>元素的数据。 D3 <code>text()</code>方法可以将字符串或回调函数作为参数： <code>selection.text((d) =&gt; d)</code>在上面的示例中，参数<code>d</code>指的是数据集中绑定选择的单个条目至。使用当前示例作为上下文，第一个<code>h2</code>元素绑定到12，第二个<code>h2</code>元素绑定到31，第三个<code>h2</code>元素绑定到22，依此类推。 </section>

## Instructions
<section id="instructions">更改<code>text()</code>方法，以便每个<code>h2</code>元素显示<code>dataset</code>数组中具有单个空格和“USD”的相应值。例如，第一个标题应为“12美元”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>h2</code>应该有“12美元”的文字。
    testString: assert($('h2').eq(0).text() == "12 USD");
  - text: 第二个<code>h2</code>应该有“31美元”的文字。
    testString: assert($('h2').eq(1).text() == "31 USD");
  - text: 第三个<code>h2</code>应该有“22美元”的文字。
    testString: assert($('h2').eq(2).text() == "22 USD");
  - text: 第四个<code>h2</code>应该有“17美元”的文字。
    testString: assert($('h2').eq(3).text() == "17 USD");
  - text: 第五个<code>h2</code>应该有“25美元”的文字。
    testString: assert($('h2').eq(4).text() == "25 USD");
  - text: 第六个<code>h2</code>应该有“18美元”的文字。
    testString: assert($('h2').eq(5).text() == "18 USD");
  - text: 第七个<code>h2</code>应该有“29美元”的文字。
    testString: assert($('h2').eq(6).text() == "29 USD");
  - text: 第八个<code>h2</code>应该有“14美元”的文字。
    testString: assert($('h2').eq(7).text() == "14 USD");
  - text: 第九个<code>h2</code>应该有“9美元”的文字。
    testString: assert($('h2').eq(8).text() == "9 USD");

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
      // Add your code below this line

      .text("New Title");

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
