---
id: 587d7faa367417b2b2512bd6
title: 給 D3 元素添加工具提示
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

當用戶在一個對象上懸停時，提示框可以顯示關於這個對象更多的信息。 有幾種方法可以爲可視化添加一個工具提示。 此挑戰使用 SVG `title` 元素。

`title` 和 `text()` 方法一起給每組動態添加數據。

# --instructions--

在每個 `rect` 節點下附加 `title` 元素。 然後用回調函數調用 `text()` 方法使它的文本顯示數據值。

# --hints--

你應該有 9 個 `title` 元素。

```js
assert($('title').length == 9);
```

第一個 `title` 元素的提示框文本應爲 `12`。

```js
assert($('title').eq(0).text() == '12');
```

第二個 `title` 元素的提示框文本應爲 `31`。

```js
assert($('title').eq(1).text() == '31');
```

第三個 `title` 元素的提示框文本應爲 `22`。

```js
assert($('title').eq(2).text() == '22');
```

第四個 `title` 元素的提示框文本應爲 `17`。

```js
assert($('title').eq(3).text() == '17');
```

第五個 `title` 元素的提示框文本應爲 `25`。

```js
assert($('title').eq(4).text() == '25');
```

第六個 `title` 元素的提示框文本應爲 `18`。

```js
assert($('title').eq(5).text() == '18');
```

第七個 `title` 元素的提示框文本應爲 `29`。

```js
assert($('title').eq(6).text() == '29');
```

第八個 `title` 元素的提示框文本應爲 `14`。

```js
assert($('title').eq(7).text() == '14');
```

第九個 `title` 元素的提示框文本應爲 `9`。

```js
assert($('title').eq(8).text() == '9');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)


    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```
