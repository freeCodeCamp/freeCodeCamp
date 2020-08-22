---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
videoUrl: ''
localeTitle: 使用D3添加类
---

## Description
<section id="description">即使对于较小的应用程序，在HTML元素上使用大量内联样式也很难管理。使用CSS规则将类添加到元素和样式一次更容易。 D3具有<code>attr()</code>方法，可以向元素添加任何HTML属性，包括类名。 <code>attr()</code>方法的工作方式与<code>style()</code>工作方式相同。它采用逗号分隔值，并可以使用回调函数。这是一个向选择中添加“容器”类的示例： <code>selection.attr(&quot;class&quot;, &quot;container&quot;);</code> </section>

## Instructions
<section id="instructions">将<code>attr()</code>方法添加到编辑器中的代码中，并在<code>div</code>元素上添加一个<code>bar</code>类。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>div</code>元素应该有一类<code>bar</code> 。
    testString: assert($('div').attr('class') == "bar");
  - text: 您的代码应使用<code>attr()</code>方法。
    testString: assert(code.match(/\.attr/g));

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
