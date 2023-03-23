---
id: 587d7fad367417b2b2512bdf
title: 添加座標軸到視圖中
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

另一種改進散點圖的方法是添加 x 軸和 y 軸。

D3 有兩種方法來渲染 y 軸和 x 軸，分別是 `axisLeft()` 和 `axisBottom()`。 下面是一個基於上個挑戰中的 `xScale` 創建 x 軸的例子：

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. 爲此，你可以使用一個 SVG 組件， `g` 元素， `g` 是英文中組（group）的縮寫。 不同於 `rect`、`circle`、`text`，在渲染時，軸只是一條直線。 因爲它是一個簡單的圖形，所以可以用 `g` 。 The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG 支持多種 `transforms`，但是定位軸需要使用 `translate` 屬性。 當它應用在 `g` 元素上時，它根據給出的總量移動整組。 下面是一個例子：

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. 然後 x 軸作爲參數被傳遞給 `call()` 方法。 y 軸的定位也是這樣，只是 `translate` 參數的形式是 `(x, 0)`。 因爲 `translate` 是 `attr()` 方法中的一個字符串，你可以在參數中使用字符串的連接將變量值包括進去。

# --instructions--

現在散點圖有 x 軸了。 用 `axisLeft()` 方法創建 y 軸並賦值給 `yAxis` 變量， 然後通過 `g` 元素渲染 y 軸。 使用 `transform` 屬性將 y 軸向右平移（平移的單位等於 paading 的值），向下平移 `0` 個單位。 記得對 y 軸調用 `call()` 方法。

# --hints--

你應該使用 `axisLeft()` 方法，並傳入 `yScale` 作爲參數。

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

y 軸 `g` 元素應有一個 `transform` 屬性，將 y 軸平移 `(60, 0)`。

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

你應該調用(call) `yAxis` 。

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
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
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
