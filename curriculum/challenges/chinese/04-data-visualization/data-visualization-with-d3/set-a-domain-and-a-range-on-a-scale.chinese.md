---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
videoUrl: ''
localeTitle: 在比例上设置域和范围
---

## Description
<section id="description">默认情况下，缩放使用标识关系 - 输入值映射到输出值。但是尺度可以更加灵活和有趣。假设数据集的值范围为50到480.这是比例的输入信息，也称为域。您希望在SVG画布上沿<code>x</code>轴映射这些点，介于10个单位和500个单位之间。这是输出信息，也称为范围。 <code>domain()</code>和<code>range()</code>方法为比例设置这些值。两种方法都将至少两个元素的数组作为参数。这是一个例子： <blockquote> //设置域名<br> //域包含输入值集<br> scale.domain（[50,480]）; <br> //设定范围<br> //范围涵盖输出值集<br> scale.range（[10,500]）; <br> scale（50）//返回10 <br> scale（480）//返回500 <br> scale（325）//返回323.37 <br> scale（750）//返回807.67 <br> d3.scaleLinear（） </blockquote>请注意，比例使用域和范围值之间的线性关系来确定给定数字的输出应该是什么。域（50）中的最小值映射到范围中的最小值（10）。 </section>

## Instructions
<section id="instructions">创建比例并将其域设置为<code>[250, 500]</code> ，范围为<code>[10, 150]</code> 。 <strong>注意</strong> <br>您可以将<code>domain()</code>和<code>range()</code>方法链接到<code>scale</code>变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>domain()</code>方法。
    testString: assert(code.match(/\.domain/g));
  - text: '比例的<code>domain()</code>应设置为<code>[250, 500]</code> 。'
    testString: assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
  - text: 您的代码应使用<code>range()</code>方法。
    testString: assert(code.match(/\.range/g));
  - text: '刻度的<code>range()</code>应设置为<code>[10, 150]</code> 。'
    testString: assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
  - text: <code>h2</code>的文本应为-102。
    testString: assert($('h2').text() == '-102');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
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
