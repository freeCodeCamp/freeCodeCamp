---
id: 587d7fac367417b2b2512bdc
title: >-
  d3.max 関数および d3.min 関数を使用してデータセット内の最小値と最大値を見つける
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

D3 のメソッド `domain()` と `range()` は、データを基にそれぞれスケールのドメイン情報とレンジ情報を設定します。 同じことをより簡単に行う方法がいくつかあります。

ドメインを設定する場合に、データセット内の最小値と最大値を使いたいことがよくあります。 手作業でこれらの値を見つけようとすると、特にデータセットが大きい場合はミスが起こりがちです。

D3 には、この情報を返すための 2 つのメソッド、`min()` と `max()` があります。 次に例を示します。

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

データセットの中で配列がネストされている場合があります。散布図の例にあった `[x, y]` 座標ペアはその一例です。 その場合、最大値と最小値の計算方法を D3 に指示する必要があります。 幸いなことに、`min()` と `max()` の両メソッドはコールバック関数を取ります。 この例では、コールバック関数の引数 `d` は現在のネストされた配列に対するものです。 このコールバック関数は、最大値または最小値の計算対象となる、ネストされた配列 (`x` または `y` の値) から要素を返す必要があります。 複数の配列中の 1 つの配列における最大値と最小値を見つけるには、例えば次の方法を使用します。

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` の値は `1` です。

# --instructions--

`positionData` 配列に x、y、z 座標の部分配列が含まれています。 D3 メソッドを使用してこの配列から z 座標の最大値 (3 番目の値) を求め、`output` 変数に保存してください。

# --hints--

`h2` 内のテキストを `8` にする必要があります。

```js
assert(output == 8 && $('h2').text() == '8');
```

`max()` メソッドを使用する必要があります。

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
