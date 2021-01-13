---
id: 594810f028c0303b75339ad6
title: 勾选村号码表示
challengeType: 5
videoUrl: ''
dashedName: zeckendorf-number-representation
---

# --description--

<p>正如数字可以用位置表示法表示为十（十进制）或二（二进制）的幂的倍数之和;所有正整数都可以表示为Fibonacci系列的不同成员的一次或零次的总和。 </p><p>回想一下，第一六个不同斐波那契数是： <code>1, 2, 3, 5, 8, 13</code> 。十进制数11可以用位置表示法写成<code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code>或<code>010100</code> ，其中列表示乘以序列的特定成员。前导零被丢弃，因此十进制11变为<code>10100</code> 。 </p><p> 10100不是从斐波那契数字中得到11的唯一方法，但是<code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code>或010011也代表十进制11。对于真正的Zeckendorf数字还有一个额外的限制，即“不能使用两个连续的Fibonacci数”，这导致了前一个独特的解决方案。 </p><p>任务：编写一个函数，按顺序生成并返回前N个Zeckendorf数的数组。 </p>

# --hints--

zeckendorf必须是功能

```js
assert.equal(typeof zeckendorf, 'function');
```

你的`zeckendorf`函数应该返回正确的答案

```js
assert.deepEqual(answer, solution20);
```

# --seed--

## --after-user-code--

```js
const range = (m, n) => (
  Array.from({
    length: Math.floor(n - m) + 1
  }, (_, i) => m + i)
);

const solution20 = [
  '1', '10', '100', '101', '1000', '1001', '1010', '10000', '10001',
  '10010', '10100', '10101', '100000', '100001', '100010', '100100', '100101',
  '101000', '101001', '101010'
];

const answer = range(1, 20).map(zeckendorf);
```

## --seed-contents--

```js
function zeckendorf(n) {

}
```

# --solutions--

```js
// zeckendorf :: Int -> String
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return (n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join('');
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
