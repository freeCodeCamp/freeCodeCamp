---
id: 587d7fac367417b2b2512bdd
title: 使用動態比例
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

D3 的 `min()` 和 `max()` 方法在設置比例尺時十分有用。

對於一個複雜的數據集，首要是設置比例尺，這樣可視化才能適合 SVG 容器的寬和高。 You want all the data plotted inside the SVG so it's visible on the web page.

下面這個例子爲散點圖設置了 x 軸的比例尺。 `domain()` 方法給比例尺傳遞關於散點圖原數據值的信息， `range()` 方法給出在頁面上進行可視化的實際空間信息。

在這個例子中，domain 是從 0 到數據集中的最大值， 它使用 `max()` 方法和基於數組中 x 值的回調函數。 The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];
const w = 500;
const h = 500;

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

在一開始可能很難理解 padding。 Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). 在 `range()` 方法中包含 padding 使散點圖沿着這條直線從 30 （而不是 0）開始，在 470 （而不是 500）結束。

# --instructions--

使用 `yScale` 變量創建一個線性的 y 軸比例尺。 domain 應該從 0 開始到數據集中 `y` 的最大值， range 應該使用 SVG 的高（`h`），幷包含 padding。

**注意：**記得保持繪圖在右上角。 當你爲 y 座標設置 range 時，大的值（height 減去 padding）是第一個參數，小的值是第二個參數。

# --hints--

`h2` 的文本應爲 `30`。

```js
assert(output == 30 && $('h2').text() == '30');
```

yScale 的 `domain()` 應該等於 `[0, 411]`。

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

yScale 的 `range()` 應該等於 `[470, 30]`。

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
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
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
