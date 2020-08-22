---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
videoUrl: ''
localeTitle: 向元素添加内联样式
---

## Description
<section id="description"> D3允许您使用<code>style()</code>方法在动态元素上添加内联CSS样式。 <code>style()</code>方法将逗号分隔的键值对作为参数。这是一个将选择的文本颜色设置为蓝色的示例： <code>selection.style(&quot;color&quot;,&quot;blue&quot;);</code> </section>

## Instructions
<section id="instructions">将<code>style()</code>方法添加到编辑器中的代码中，使所有显示的文本都具有<code>verdana</code>的<code>font-family</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>h2</code>元素应该有verdana的<code>font-family</code> 。
    testString: assert($('h2').css('font-family') == 'verdana');
  - text: 您的代码应使用<code>style()</code>方法。
    testString: assert(code.match(/\.style/g));

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
