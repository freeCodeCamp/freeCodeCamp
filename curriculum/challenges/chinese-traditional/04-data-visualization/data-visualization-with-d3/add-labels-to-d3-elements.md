---
id: 587d7faa367417b2b2512bd2
title: 給 D3 元素添加標籤
challengeType: 6
forumTopicId: 301476
dashedName: add-labels-to-d3-elements
---

# --description--

D3 允許你使用 SVG 的 `text` 元素給圖形元素，如條形圖，添加標籤。

Like the `rect` element, a `text` element needs to have `x` and `y` attributes, to place it on the SVG. 它也需要能夠獲取數據來顯示數據值。

D3 給了你很高的權限給圖形添加標籤。

# --instructions--

編輯器中的代碼已經將數據綁定到每個新的 `text` 元素。 首先，在 `svg` 中添加 `text` 節點。 然後，添加 `x` 和 `y` 座標屬性， 它們的計算方法應該和 `rect` 中計算方法相同，除了 `text` 的 `y` 值應該使標籤比條形圖的高 3 個單位。 最後，用 D3 的 `text()` 方法將標籤設置爲和數據點相等的值。

**注意：** 對於標籤比條形圖高的情況，應決定 `text` 的 `y` 值應比條形圖的 `y` 值大還是小 3 個單位。

# --hints--

第一個 `text` 元素應有一個值爲 `12` 的標籤，且 `y` 值爲 `61`。

```js
assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
```

第二個 `text` 元素應有一個值爲 `31` 的標籤，且 `y` 值爲 `4`。

```js
assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
```

第三個 `text` 元素應有一個值爲 `22` 的標籤，且 `y` 值爲 `31`。

```js
assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
```

第四個 `text` 元素應有一個值爲 `17` 的標籤，且 `y` 值爲 `46`。

```js
assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
```

第五個 `text` 元素應有一個值爲 `25` 的標籤，且 `y` 值爲 `22`。

```js
assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
```

第六個 `text` 元素應有一個值爲 `18` 的標籤，且 `y` 值爲 `43`。

```js
assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
```

第七個 `text` 元素應有一個值爲 `29` 的標籤，且 `y` 值爲 `10`。

```js
assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
```

第八個 `text` 元素應有一個值爲 `14` 的標籤，其 `y` 值爲 `55`。

```js
assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
```

第九個 `text` 元素應有一個值爲 `9` 的標籤，且 `y` 值爲 `70`。

```js
assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>
```
