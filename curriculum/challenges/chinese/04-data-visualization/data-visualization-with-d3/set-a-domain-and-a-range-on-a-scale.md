---
id: 587d7fac367417b2b2512bdb
title: 设置比例尺的定义域和值域
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

默认情况下，比例尺使用一对一关系（identity relationship）， 即输入值直接映射为输出值。 但是比例尺可以更灵活更有趣。

假设有一个数据集值的范围为 50 到 480， 这是比例尺的输入信息，也被称为<dfn>定义域</dfn>。

你想沿着 SVG 上的 `x` 轴映射这些点，在 10 单位和 500 单位之间。 这是输出信息，也被称为<dfn>值域</dfn>。

`domain()` 和 `range()` 方法设置比例尺的值， 它们都接受一个至少有两个元素的数组作为参数。 下面是一个例子：

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

按顺序，将在控制台中显示以下值：`10`、`500`、`323.37` 和 `807.67`。

注意，比例尺使用了定义域和值域之间的线性关系来找出给定数字的输出值。 定义域中的最小值（50）映射为值域中的最小值（10）。

# --instructions--

创建一个比例尺，将它的定义域设置为 `[250, 500]`，值域设置为 `[10, 150]`。

**注意：**你可以将 `domain()` 和 `range()` 方法串联在 `scale` 变量后。

# --hints--

应使用 `domain()` 方法。

```js
assert(code.match(/\.domain/g));
```

`scale` 的 `domain()` 应为 `[250, 500]`。

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

应使用 `range()` 方法。

```js
assert(code.match(/\.range/g));
```

`scale` 的 `range()` 应为 `[10, 150]`。

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

`h2` 的文本应为 `-102`。

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<body>
  <script>
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
