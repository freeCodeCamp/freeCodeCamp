---
id: 587d7fac367417b2b2512bde
title: 事前定義スケールを使用して要素を配置する
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

スケールの設定ができたので、散布図を再びマッピングしましょう。 The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. スケールにより、データが常に画面のプロット領域内に収められます。

スケーリング関数を使用して、SVG 図形の座標属性値を設定します。 これには `rect` 要素か `text` 要素の `x` 属性と `y` 属性、または、`circles` 要素の `cx` 属性と `cy` 属性が含まれます。 次に例を示します。

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. ツールチップやラベルの `text()` メソッド内などで、実際のデータ値を表示するときにスケールを適用する必要はありません。

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. `circles` については、スケールを適用して `cx` 属性と `cy` 属性を設定します。 また、これらに `5` 単位の半径を指定します。

`text` 要素については、スケールを適用して `x` 属性と `y` 属性を設定します。 ラベルはドットの右側にオフセットされている必要があります。 これを行うには、`x` のデータ値に `10` 単位を追加してからデータ値を `xScale` に渡します。

# --hints--

10 個の `circle` 要素が必要です。

```js
assert($('circle').length == 10);
```

最初の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `91`、`cy` 値がおよそ `368` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

2 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `159` 、 `cy` 値がおよそ `181` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

3 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `340`、 `cy` 値がおよそ `329` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

4 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `131`、 `cy` 値がおよそ `60` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

5 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `440`、 `cy` 値がおよそ `237` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

6 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `271`、 `cy` 値がおよそ `306` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

7 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `361`、 `cy` 値がおよそ `351` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

8 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `261`、 `cy` 値がおよそ `132` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

9 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `131`、 `cy` 値がおよそ `144` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

10 番目の `circle` 要素は、スケールを適用した後の `cx` 値がおよそ `79` 、 `cy` 値がおよそ `326` である必要があります。 `r` 値は `5` である必要があります。

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

10 個の `text` 要素が必要です。

```js
assert($('text').length == 10);
```

最初のラベルは、スケールを適用した後の `x` 値がおよそ `100`、`y` 値がおよそ `368` である必要があります。

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

2 番目のラベルは、スケールを適用した後の `x` 値がおよそ `168`、`y` 値がおよそ `181` である必要があります。

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

3 番目のラベルは、スケールを適用した後の `x` 値がおよそ `350`、`y` 値がおよそ `329` である必要があります。

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

4 番目のラベルは、スケールを適用した後の `x` 値がおよそ `141`、`y` 値がおよそ `60` である必要があります。

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

5 番目のラベルは、スケールを適用した後の `x` 値がおよそ `449`、`y` 値がおよそ `237` である必要があります。

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

6 番目のラベルは、スケールを適用した後の `x` 値がおよそ `280`、`y` 値がおよそ `306` である必要があります。

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

7 番目のラベルは、スケールを適用した後の `x` 値がおよそ `370`、`y` 値がおよそ `351` である必要があります。

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

8 番目のラベルは、スケールを適用した後の `x` 値がおよそ `270`、`y` 値がおよそ `132` である必要があります。

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

9 番目のラベルは、スケールを適用した後の `x` 値がおよそ `140`、`y` 値がおよそ `144` である必要があります。

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

10 番目のラベルは、スケールを適用した後の `x` 値がおよそ `88`、`y` 値がおよそ `326` である必要があります。

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       // Add your code below this line



       // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
