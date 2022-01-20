---
id: 587d7fa8367417b2b2512bc9
title: 要素の高さを動的に更新する
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

これまでのチャレンジでは、配列からのデータを表示する方法と、CSS クラスを追加する方法を学びました。 それらで学んだことを組み合わせて、単純な棒グラフを作成できます。 それは次の 2 段階で行います。

1) 配列内の各データポイントに対して `div` を作成する

2) `style()` メソッド内で、高さをデータ値と等しくするコールバック関数を使用して、各 `div` に動的な高さを設定する

コールバック関数でスタイルを設定するための、次のフォーマットを思い出してください。

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

`style()` メソッドをエディタ内のコードに追加して、各要素の `height` プロパティを設定してください。 コールバック関数を使用して、データポイントの値に文字列 `px` を加えた値を返してください。

# --hints--

最初の `div` は `height` を `12` ピクセルにする必要があります。

```js
assert($('div').eq(0)[0].style.height === '12px');
```

2 番目の `div` は `height` を `31` ピクセルにする必要があります。

```js
assert($('div').eq(1)[0].style.height === '31px');
```

3 番目の `div` は `height` を `22` ピクセルにする必要があります。

```js
assert($('div').eq(2)[0].style.height === '22px');
```

4 番目の `div` は `height` を `17` ピクセルにする必要があります。

```js
assert($('div').eq(3)[0].style.height === '17px');
```

5 番目の `div` は `height` を `25` ピクセルにする必要があります。

```js
assert($('div').eq(4)[0].style.height === '25px');
```

6 番目の `div` は `height` を `18` ピクセルにする必要があります。

```js
assert($('div').eq(5)[0].style.height === '18px');
```

7 番目の `div` は `height` を `29` ピクセルにする必要があります。

```js
assert($('div').eq(6)[0].style.height === '29px');
```

8 番目の `div` は `height` を `14` ピクセルにする必要があります。

```js
assert($('div').eq(7)[0].style.height === '14px');
```

9 番目の `div` は `height` を `9` ピクセルにする必要があります。

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
```
