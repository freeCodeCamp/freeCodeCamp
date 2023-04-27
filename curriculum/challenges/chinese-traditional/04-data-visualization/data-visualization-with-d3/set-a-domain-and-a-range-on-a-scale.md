---
id: 587d7fac367417b2b2512bdb
title: 設置比例尺的定義域和值域
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

默認情況下，比例尺使用一對一關係（identity relationship）， 即輸入值直接映射爲輸出值。 但是比例尺可以更靈活更有趣。

假設有一個數據集值的範圍爲 50 到 480， 這是比例尺的輸入信息，也被稱爲<dfn>定義域</dfn>。

你想沿着 SVG 上的 `x` 軸映射這些點，在 10 單位和 500 單位之間。 這是輸出信息，也被稱爲<dfn>值域</dfn>。

`domain()` 和 `range()` 方法設置比例尺的值， 它們都接受一個至少有兩個元素的數組作爲參數。 下面是一個例子：

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

按順序，將在控制檯中顯示以下值：`10`、`500`、`323.37` 和 `807.67`。

注意，比例尺使用了定義域和值域之間的線性關係來找出給定數字的輸出值。 定義域中的最小值（50）映射爲值域中的最小值（10）。

# --instructions--

創建一個比例尺，將它的定義域設置爲 `[250, 500]`，值域設置爲 `[10, 150]`。

**注意：**你可以將 `domain()` 和 `range()` 方法串聯在 `scale` 變量後。

# --hints--

應使用 `domain()` 方法。

```js
assert(code.match(/\.domain/g));
```

`scale` 的 `domain()` 應爲 `[250, 500]`。

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

應使用 `range()` 方法。

```js
assert(code.match(/\.range/g));
```

`scale` 的 `range()` 應爲 `[10, 150]`。

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

`h2` 的文本應爲 `-102`。

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
