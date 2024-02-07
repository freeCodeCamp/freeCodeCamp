---
id: 594810f028c0303b75339ad6
title: 泽肯多夫数表示
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary); all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci series. Recall that the first six distinct Fibonacci numbers are: `1, 2, 3, 5, 8, 13`.

十进制数十一可以写成 `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` 或 `010100` 的位置符号其中列表示与序列中特定成员的乘法。 前导零被丢弃，因此十进制11变为 `10100`。 10100 不是从斐波那契数中得到 11 的唯一方法，但是 `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` 或 010011 也代表十进制11. 对于真正的 Zeckendorf 数，还有一个附加限制，即*不能使用两个连续的斐波那契数*，这导致了上述的唯一解。

# --instructions--

编写一个函数，生成并返回 `n` 的 Zeckendorf 数表示。

# --hints--

`zeckendorf` 应该是一个函数。

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` 应该返回 `0`。

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` 应该返回 `1`。

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` 应该返回 `10`。

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` 应该返回 `100`。

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` 应该返回 `101`。

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` 应该返回 `1000`。

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` 应该返回 `1001`。

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` 应该返回 `1010`。

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` 应该返回 `10000`。

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` 应该返回 `10001`。

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` 应该返回 `10010`。

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` 应该返回 `10100`。

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` 应该返回 `10101`。

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` 应该返回 `100000`。

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` 应该返回 `100001`。

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` 应该返回 `100010`。

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` 应该返回 `100100`。

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` 应该返回 `100101`。

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` 应该返回 `101000`。

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` 应该返回 `101001`。

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` 应该返回 `101010`。

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
