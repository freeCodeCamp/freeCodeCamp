---
id: 594810f028c0303b75339ad6
title: ゼッケンドルフの定理
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

数字を 10 (10 進数) または 2 (2 進数) の累乗の倍数の和として位取り記数法で表現できるように、すべての正の整数は、フィボナッチ数列のそれぞれ異なる要素の 1 倍または 0 倍の和として表現できます。 最初の 6 つの個々のフィボナッチ数は以下のとおりでした: `1, 2, 3, 5, 8, 13`.

10 進数の 11 は、各列がフィボナッチ数列の特定の要素による乗算を表す位取り記数法で `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` または `010100` のように記述することもできます。 先頭のゼロを落として、10 進数の 11 が `10100`になるようにします。 フィボナッチ数から 11 を作る方法は 10100 だけではありませんが、 `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` または 010011もまた、10 進数の 11 を表しています。 真のゼッケンドルフ表現については、*2 つの連続するフィボナッチ数を使用できない*という追加の制限があり、それが前の一意の解ということにつながります。

# --instructions--

`n` の ゼッケンドルフ表現を生成して返す関数を記述してください。

# --hints--

`zeckendorf` は関数とします。

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` は `0` を返す必要があります。

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` は `1` を返す必要があります。

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` は `10` を返す必要があります。

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` は `100` を返す必要があります。

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` は `101` を返す必要があります。

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` は `1000` を返す必要があります。

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` は `1001` を返す必要があります。

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` は `1010` を返す必要があります。

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` は `10000` を返す必要があります。

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` は `10001` を返す必要があります。

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` は `10010` を返す必要があります。

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` は `10100` を返す必要があります。

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` は `10101` を返す必要があります。

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` は `100000` を返す必要があります。

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` は `100001` を返す必要があります。

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` は `100010` を返す必要があります。

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` は `100100` を返す必要があります。

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` は `100101` を返す必要があります。

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` は `101000` を返す必要があります。

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` は `101001` を返す必要があります。

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` は `101010` を返す必要があります。

```js
assert.equal(zeckendorf(20), 101010);
```

# --seed--

## --seed-contents--

```js
function zeckendorf(n) {

}
```

# --solutions--

```js
// zeckendorf :: Int -> Int
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return parseInt((n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join(''));
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();
```
