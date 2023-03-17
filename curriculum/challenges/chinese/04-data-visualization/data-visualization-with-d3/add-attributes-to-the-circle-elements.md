---
id: 587d7fab367417b2b2512bd8
title: 给 Circle 元素添加属性
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. 但是 D3 需要更多关于位置和 `circle` 大小的信息来正确地显示它们。

在 SVG 中 `circle` 有三个主要的属性。 `cx` 和 `cy` 属性是坐标。 They tell D3 where to position the *center* of the shape on the SVG. 半径（ `r` 属性）给出 `circle` 的大小。

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

所有的属性都可以用回调函数来动态设值。 记住，所有串联在 `data(dataset)` 后面的方法会为 `dataset` 中的每个对象都运行一次。 回调函数中的 `d` 参数指在 `dataset` 中的当前对象，对每个点来说都是一个数组。 你可以使用方括号的方式，如 `d[0]`，来访问数组中的值。

# --instructions--

为 `circle` 元素添加 `cx`、`cy`、`r` 属性。 `cx` 的值应该是 `dataset` 中每个对象的数组的第一个数， `cy` 的值应该根据数组中的第二个值，但是要确保正向显示图表而不是倒转。 所有 circle 的 `r` 值应为 `5`。

# --hints--

你应该有 10 个 `circle` 元素。

```js
assert($('circle').length == 10);
```

第一个 `circle` 元素的 `cx` 值应为 `34`，`cy` 值应为 `422`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

第二个 `circle` 元素的 `cx` 值应为 `109`，`cy` 值应为 `220`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

第三个 `circle` 元素的 `cx` 值应为 `310`，`cy` 值应为 `380`， `r` 值应为 `5`。

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

第四个 `circle` 元素的 `cx` 值应为 `79`，`cy` 值应为 `89`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

第五个 `circle` 元素的 `cx` 值应为 `420`，`cy` 值应为 `280`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

第六个 `circle` 元素的 `cx` 值应为 `233`，`cy` 值应为 `355`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

第七个 `circle` 元素的 `cx` 值应为 `333`，`cy` 值应为 `404`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

第八个 `circle` 元素的 `cx` 值应为 `222`，`cy` 值应为 `167`， `r` 值应为 `5`。

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

第九个 `circle` 元素的 `cx` 值应为 `78`，`cy` 值应为 `180`，`r` 值应为 `5`。

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

第十个 `circle` 元素的 `cx` 值应为 `21`，`cy` 值应为 `377`，`r` 值应为 `5`。

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
