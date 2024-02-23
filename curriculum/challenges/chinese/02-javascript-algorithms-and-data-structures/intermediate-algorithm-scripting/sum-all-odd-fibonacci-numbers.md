---
id: a5229172f011153519423690
title: 求斐波那契数列中的奇数之和
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

在这道题目中，我们需要写一个函数，参数为一个正整数 `num`，返回值为斐波那契数列中，小于或等于 `num` 的奇数之和。

斐波那契数列的前两个数字是 0 和 1。 后面的每个数字由之前两数相加得出。 斐波那契数列的前七个数字分别为：0、1、1、2、3、5、8。

比如，`sumFibs(10)` 应该返回 `10`。 因为斐波那契数列中，比 `10` 小的数字只有 1、1、3、5。

# --hints--

`sumFibs(1)` 应返回一个数字。

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` 应返回 1785。

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` 应返回 4613732。

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` 应返回 5。

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` 应返回 60696。

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` 应返回 135721。

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
