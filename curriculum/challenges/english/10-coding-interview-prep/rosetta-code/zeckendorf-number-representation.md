---
id: 594810f028c0303b75339ad6
title: Zeckendorf number representation
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary); all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci series. Recall that the first six distinct Fibonacci numbers are: `1, 2, 3, 5, 8, 13`.

The decimal number eleven can be written as `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` or `010100` in positional notation where the columns represent multiplication by a particular member of the sequence. Leading zeroes are dropped so that 11 decimal becomes `10100`. 10100 is not the only way to make 11 from the Fibonacci numbers however `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` or 010011 would also represent decimal 11. For a true Zeckendorf number there is the added restriction that *no two consecutive Fibonacci numbers can be used* which leads to the former unique solution.

# --instructions--

Write a function that generates and returns the Zeckendorf number representation of `n`.

# --hints--

`zeckendorf` should be a function.

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` should return `0`.

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` should return `1`.

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` should return `10`.

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` should return `100`.

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` should return `101`.

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` should return `1000`.

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` should return `1001`.

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` should return `1010`.

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` should return `10000`.

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` should return `10001`.

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` should return `10010`.

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` should return `10100`.

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` should return `10101`.

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` should return `100000`.

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` should return `100001`.

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` should return `100010`.

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` should return `100100`.

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` should return `100101`.

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` should return `101000`.

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` should return `101001`.

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` should return `101010`.

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
