---
id: 587d7fac367417b2b2512bdc
title: >-
  使用 d3.max 和 d3.min 函數在數據集中查找最小值和最大值
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

D3 的 `domain()` 和 `range()` 方法根據數據設置比例尺的信息。 下面有幾種更簡單的方法。

通常當你設置域的時候，你會想用數據集中的最小值和最大值。 試圖手動的找到這些值，尤其是在很大的數據集中，可能會出錯。

D3 有兩個方法——`min()` 和 `max()` 來返回這些值。 下面是一個例子：

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

像在散點圖的例子中的 `[x, y]` 座標對一樣，數據集有可能嵌套數組。 在這種情況下，你需要告訴 D3 怎麼計算最大值和最小值。 幸運的是，`min()` 和 `max()` 都可以使用回調函數。 在下面這個例子中，回調函數的參數 `d` 是當前的內部數組。 回調函數需要從內數組中返回你想比較大小的元素（`x` 值或 `y` 值）。 下面是一個如何找到二維數組的最大值和最小值的例子：

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` 的值應爲 `1`。

# --instructions--

`positionData` 數組的子數組元素爲 x、y 和 z 座標。 使用 D3 方法從數組中查找 z 座標（第三個值）的最大值，並將其保存在 `output` 變量中。

# --hints--

`h2` 文本應爲 `8`。

```js
assert(output == 8 && $('h2').text() == '8');
```

應使用 `max()` 方法。

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
