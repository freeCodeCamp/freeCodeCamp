---
id: 5cfa3679138e7d9595b9d9d4
title: 再帰を使用してループを置き換える
challengeType: 1
videoUrl: >-
  https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
forumTopicId: 301175
dashedName: replace-loops-using-recursion
---

# --description--

関数が自分自身を呼び出せるという概念のことを再帰といいます。 再帰を理解するために、次の作業について考えてみましょう。配列の最初の `n` 個の要素を掛け合わせて、それらの要素の積を生成するとします。 これは次のように `for` ループを使用して記述できます。

```js
  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
```

しかし、ここで `multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]` であることに注目してください。 つまり、`multiply` を自分自身で書き換えることが可能で、ループを使用する必要はありません。

```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```

`multiply` の再帰バージョンを詳しく説明すると次のようになります。 <dfn>基準ケース</dfn>は `n <= 0` であり、1 を返します。 `n` の値がこれより大きい場合、関数は `n - 1` を引数に取って自分自身を呼び出します。 この関数呼び出しは同じ方法で評価され、`n <= 0` となるまで、`multiply` を呼び出し続けます。 n &lt;= 0 になった時点で、すべての関数が処理を返し、最初の `multiply` が答えを返します。

**注:** 再帰関数では、関数の呼び出しをせずに制御を返す条件となる基準ケースを設定しておく必要があります (たとえば、この例では `n <= 0`)。これがないと再帰を無限に繰り返してしまいます。

# --instructions--

再帰関数の `sum(arr, n)` を記述してください。この関数は配列 `arr` の最初の `n` 個の要素の合計を返します。

# --hints--

`sum([1], 0)` は 0 と等しくなる必要があります。

```js
assert.equal(sum([1], 0), 0);
```

`sum([2, 3, 4], 1)` は 2 と等しくなる必要があります。

```js
assert.equal(sum([2, 3, 4], 1), 2);
```

`sum([2, 3, 4, 5], 3)` は 9 と等しくなる必要があります。

```js
assert.equal(sum([2, 3, 4, 5], 3), 9);
```

このコードには、どのような種類のループ (`for`、`while`、または `forEach`、`map`、`filter`、`reduce` のような高階関数) も使用しないでください。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

この課題の解決には、再帰を使用してください。

```js
assert(
  sum.toString().match(/sum\(.*\)/g).length > 1
);
```

# --seed--

## --seed-contents--

```js
function sum(arr, n) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
```
