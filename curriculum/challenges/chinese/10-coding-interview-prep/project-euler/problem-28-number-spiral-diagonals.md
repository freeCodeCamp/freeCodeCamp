---
id: 5900f3881000cf542c50fe9b
title: 问题28：对角螺旋数
challengeType: 5
videoUrl: ''
dashedName: problem-28-number-spiral-diagonals
---

# --description--

从数字1开始，沿顺时针方向向右移动，形成5 x 5螺旋，如下所示：

21 22 23 24 25

20 7 8 9 10

19 6 1 2 11

18 5 4 3 12

17 16 15 14 13

可以验证对角线上的数字之和为101。

以相同方式形成的n×n螺旋中的对角线上的数字的总和是多少？

# --hints--

`spiralDiagonals(101)`应该返回692101。

```js
assert(spiralDiagonals(101) == 692101);
```

`spiralDiagonals(101)`应该返回18591725。

```js
assert(spiralDiagonals(303) == 18591725);
```

`spiralDiagonals(101)`应该返回85986601。

```js
assert(spiralDiagonals(505) == 85986601);
```

`spiralDiagonals(101)`应该返回669171001。

```js
assert(spiralDiagonals(1001) == 669171001);
```

# --seed--

## --seed-contents--

```js
function spiralDiagonals(n) {

  return n;
}

spiralDiagonals(1001);
```

# --solutions--

```js
const spiralDiagonals = (n) => {
  const Sn2 = (n) => {
    return n*(n+1)*(2*n+1)/6;
  };
  const Sn = (n) => {
    return n*(n+1)/2;
  };
  let sum = (Sn2(n-1) + Sn(n-1) + n-1) + (Math.floor(n/2) + Sn2(n));
  return sum;
};
```
