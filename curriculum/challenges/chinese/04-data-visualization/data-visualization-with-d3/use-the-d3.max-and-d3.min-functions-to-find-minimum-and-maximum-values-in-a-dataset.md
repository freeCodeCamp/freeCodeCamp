---
id: 587d7fac367417b2b2512bdc
title: >-
  使用 d3.max 和 d3.min 函数在数据集中查找最小值和最大值
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

D3 的 `domain()` 和 `range()` 方法根据数据设置比例尺的信息。 下面有几种更简单的方法。

通常当你设置域的时候，你会想用数据集中的最小值和最大值。 试图手动的找到这些值，尤其是在很大的数据集中，可能会出错。

D3 有两个方法——`min()` 和 `max()` 来返回这些值。 下面是一个例子：

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

像在散点图的例子中的 `[x, y]` 坐标对一样，数据集有可能嵌套数组。 在这种情况下，你需要告诉 D3 怎么计算最大值和最小值。 幸运的是，`min()` 和 `max()` 都可以使用回调函数。 在下面这个例子中，回调函数的参数 `d` 是当前的内部数组。 回调函数需要从内数组中返回你想比较大小的元素（`x` 值或 `y` 值）。 下面是一个如何找到二维数组的最大值和最小值的例子：

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` 的值应为 `1`。

# --instructions--

`positionData` 数组的子数组元素为 x、y 和 z 坐标。 使用 D3 方法从数组中查找 z 坐标（第三个值）的最大值，并将其保存在 `output` 变量中。

# --hints--

`h2` 文本应为 `8`。

```js
assert(output == 8 && $('h2').text() == '8');
```

应使用 `max()` 方法。

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
