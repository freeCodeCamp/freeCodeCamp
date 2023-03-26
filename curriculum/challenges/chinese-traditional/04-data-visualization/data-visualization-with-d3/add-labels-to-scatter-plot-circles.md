---
id: 587d7fab367417b2b2512bd9
title: 向散點圖的 Circles 添加標籤
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

你可以爲散點圖中的點添加文本來創建標籤。

目標是顯示 `dataset` 中每個對象的第一個（`x`）和第二個（`y`）字段中通過逗號分隔的值。

The `text` nodes need `x` and `y` attributes to position it on the SVG. 在這個挑戰中，`y` 值（決定高度）可以用和 `circle` 的 `cy` 屬性相同的值， `x` 值可以比 `circle` 的 `cx` 值稍微大一些，這樣標籤纔可見， 並且被放置在散點的右邊。

# --instructions--

使用 `text` 元素標記散點圖上的每個點。 標籤的文本應該是用逗號和空格分隔的兩個值。 例如，第一個點的標籤是 `34, 78`。 設置 `x` 屬性，使其比 `circle` 上的 `cx` 屬性的值多 `5` 個單位。 設置 `y` 屬性的方式與 `circle` 上的 `cy` 值相同。

# --hints--

應該有 10 個 `text` 元素。

```js
assert($('text').length == 10);
```

第一個標籤的文本應爲 `34, 78`， `x` 值應爲 `39`，`y` 應爲 `422`。

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

第二個標籤的文本應爲 `109, 280`，`x` 值應爲`114`，`y` 值應爲 `220`。

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

第三個標籤的文本應爲 `310, 120`，`x` 值應爲 `315`，`y` 值應爲 `380`。

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

第四個標籤的文本應爲 `79, 411`，`x` 值應爲 `84`，`y` 值應爲 `89`。

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

第五個標籤的文本應爲 `420, 220`，`x` 值應爲 `425`，`y` 值應爲 `280`。

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

第六個標籤的文本應爲 `233, 145`，`x` 值應爲 `238`，`y` 值應爲 `355`。

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

第七個標籤的文本應爲 `333, 96`，`x` 值應爲 `338`，`y` 值應爲 `404`。

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

第八個標籤的文本應爲 `222, 333`，`x` 值應爲 `227`，`y` 值應爲 `167`。

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

第九個標籤的文本應爲 `78, 320`，`x` 值應爲 `83`，`y` 值應爲 `180`。

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

第十個標籤的文本應爲 `21, 123`，`x` 值應爲 `26`，`y` 值應爲 `377`。

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
