---
id: 587d7fa9367417b2b2512bce
title: 动态设置每个 Bar 的坐标
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

上个挑战在 `svg` 元素中为 `dataset` 的每一个数据点创建并且添加了一个矩形，其中一个矩形表示一组， 但是它们相互重叠。

矩形的位置是由 `x` 和 `y` 属性决定的。 它们告诉 D3 在 `svg` 区域的哪个位置开始绘制图形。 上个挑战将它们都设置为 0，因此所有条形都在左上角。

对于条形图，所有条形应该处于相同的垂直线上，也就是说所有条形的 `y` 值相同（为 0）， 但是 `x` 值需要随着增添新的条形而变化。 注意 `x` 值越大，图形就越靠近右边。 所以当遍历 `dataset` 中的数组元素时，`x` 的值应该递增。

D3 的 `attr()` 方法可接收一个回调函数来动态设置属性。 这个回调函数有两个参数，一个是数据点本身（通常是 `d`），另一个是该数据点在数组中的下标， 这个参数是可选的。 下面是其格式：

```js
selection.attr("property", (d, i) => {

})
```

值得注意的是，你不需要写 `for` 循环或者用 `forEach()` 迭代数据集中的对象。 `data()` 方法会解析数据集，任何链接在 `data()` 后面的方法都会为数据集中的每个对象运行一次。

# --instructions--

改变 `x` 属性的回调函数，让它返回下标乘以 30 的值。

**注意：**每组的宽为 25，所以每次 `x` 增加 30，可在每组之间留出一些空隙。 在这个例子中任何比 25 大的数也同样适用。

# --hints--

第一个 `rect` 的 `x` 值应该为 `0`。

```js
assert($('rect').eq(0).attr('x') == '0');
```

第二个 `rect` 的 `x` 值应该为 `30`。

```js
assert($('rect').eq(1).attr('x') == '30');
```

第三个 `rect` 的 `x` 值应该为 `60`。

```js
assert($('rect').eq(2).attr('x') == '60');
```

第四个 `rect` 的 `x` 值应该为 `90`。

```js
assert($('rect').eq(3).attr('x') == '90');
```

第五个 `rect` 的 `x` 值应该为 `120`。

```js
assert($('rect').eq(4).attr('x') == '120');
```

第六个 `rect` 的 `x` 值应该为 `150`。

```js
assert($('rect').eq(5).attr('x') == '150');
```

第七个 `rect` 的 `x` 值应该为 `180`。

```js
assert($('rect').eq(6).attr('x') == '180');
```

第八个 `rect` 的 `x` 值应该为 `210`。

```js
assert($('rect').eq(7).attr('x') == '210');
```

第九个 `rect` 的 `x` 值应该为 `240`。

```js
assert($('rect').eq(8).attr('x') == '240');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
