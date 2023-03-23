---
id: 587d7fab367417b2b2512bd8
title: 給 Circle 元素添加屬性
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. 但是 D3 需要更多關於位置和 `circle` 大小的信息來正確地顯示它們。

在 SVG 中 `circle` 有三個主要的屬性。 `cx` 和 `cy` 屬性是座標。 They tell D3 where to position the *center* of the shape on the SVG. 半徑（ `r` 屬性）給出 `circle` 的大小。

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

所有的屬性都可以用回調函數來動態設值。 記住，所有串聯在 `data(dataset)` 後面的方法會爲 `dataset` 中的每個對象都運行一次。 回調函數中的 `d` 參數指在 `dataset` 中的當前對象，對每個點來說都是一個數組。 你可以使用方括號的方式，如 `d[0]`，來訪問數組中的值。

# --instructions--

爲 `circle` 元素添加 `cx`、`cy`、`r` 屬性。 `cx` 的值應該是 `dataset` 中每個對象的數組的第一個數， `cy` 的值應該根據數組中的第二個值，但是要確保正向顯示圖表而不是倒轉。 所有 circle 的 `r` 值應爲 `5`。

# --hints--

你應該有 10 個 `circle` 元素。

```js
assert($('circle').length == 10);
```

第一個 `circle` 元素的 `cx` 值應爲 `34`，`cy` 值應爲 `422`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

第二個 `circle` 元素的 `cx` 值應爲 `109`，`cy` 值應爲 `220`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

第三個 `circle` 元素的 `cx` 值應爲 `310`，`cy` 值應爲 `380`， `r` 值應爲 `5`。

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

第四個 `circle` 元素的 `cx` 值應爲 `79`，`cy` 值應爲 `89`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

第五個 `circle` 元素的 `cx` 值應爲 `420`，`cy` 值應爲 `280`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

第六個 `circle` 元素的 `cx` 值應爲 `233`，`cy` 值應爲 `355`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

第七個 `circle` 元素的 `cx` 值應爲 `333`，`cy` 值應爲 `404`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

第八個 `circle` 元素的 `cx` 值應爲 `222`，`cy` 值應爲 `167`， `r` 值應爲 `5`。

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

第九個 `circle` 元素的 `cx` 值應爲 `78`，`cy` 值應爲 `180`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

第十個 `circle` 元素的 `cx` 值應爲 `21`，`cy` 值應爲 `377`，`r` 值應爲 `5`。

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
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
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
