---
id: 587d7fa9367417b2b2512bcf
title: 各バーの高さを動的に変更する
challengeType: 6
forumTopicId: 301486
dashedName: dynamically-change-the-height-of-each-bar
---

# --description--

`x` の値を動的に設定したときと同様の方法で、各バーの高さを配列内のデータポイントの値に設定できます。

```js
selection.attr("property", (d, i) => {

})
```

ここでは `d` がデータポイント値、`i` が配列内のデータポイントのインデックスになります。

# --instructions--

データ値の 3 倍が返るように、`height` 属性のコールバック関数を変更してください。

**注:** 既に学んだように、すべてのデータポイントに同じ定数を乗算すると (ズームインのように) データが拡大されます。 それにより、この例にあるバーの値の違いが分かりやすくなります。

# --hints--

最初の `rect` は `height` を `36` にする必要があります。

```js
assert($('rect').eq(0).attr('height') == '36');
```

2 番目の `rect` は `height` を `93` にする必要があります。

```js
assert($('rect').eq(1).attr('height') == '93');
```

3 番目の `rect` は `height` を `66` にする必要があります。

```js
assert($('rect').eq(2).attr('height') == '66');
```

4 番目の `rect` は `height` を `51` にする必要があります。

```js
assert($('rect').eq(3).attr('height') == '51');
```

5 番目の `rect` は `height` を `75` にする必要があります。

```js
assert($('rect').eq(4).attr('height') == '75');
```

6 番目の `rect` は `height` を `54` にする必要があります。

```js
assert($('rect').eq(5).attr('height') == '54');
```

7 番目の `rect` は `height` を `87` にする必要があります。

```js
assert($('rect').eq(6).attr('height') == '87');
```

8 番目の `rect` は `height` を `42` にする必要があります。

```js
assert($('rect').eq(7).attr('height') == '42');
```

9 番目の `rect` は `height` を `27` にする必要があります。

```js
assert($('rect').eq(8).attr('height') == '27');
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>
```
