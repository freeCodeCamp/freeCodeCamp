---
id: 594810f028c0303b75339ad6
title: 澤肯多夫數表示
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary); all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci series. Recall that the first six distinct Fibonacci numbers are: `1, 2, 3, 5, 8, 13`.

十進制數十一可以寫成 `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` 或 `010100` 的位置符號其中列表示與序列中特定成員的乘法。 前導零被丟棄，因此十進制11變爲 `10100`。 10100 不是從斐波那契數中得到 11 的唯一方法，但是 `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` 或 010011 也代表十進制11. 對於真正的 Zeckendorf 數，還有一個附加限制，即*不能使用兩個連續的斐波那契數*，這導致了上述的唯一解。

# --instructions--

編寫一個函數，生成並返回 `n` 的 Zeckendorf 數表示。

# --hints--

`zeckendorf` 應該是一個函數。

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` 應該返回 `0`。

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` 應該返回 `1`。

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` 應該返回 `10`。

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` 應該返回 `100`。

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` 應該返回 `101`。

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` 應該返回 `1000`。

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` 應該返回 `1001`。

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` 應該返回 `1010`。

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` 應該返回 `10000`。

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` 應該返回 `10001`。

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` 應該返回 `10010`。

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` 應該返回 `10100`。

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` 應該返回 `10101`。

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` 應該返回 `100000`。

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` 應該返回 `100001`。

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` 應該返回 `100010`。

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` 應該返回 `100100`。

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` 應該返回 `100101`。

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` 應該返回 `101000`。

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` 應該返回 `101001`。

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` 應該返回 `101010`。

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
