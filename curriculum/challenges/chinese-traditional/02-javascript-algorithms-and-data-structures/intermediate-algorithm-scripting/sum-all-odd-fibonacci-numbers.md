---
id: a5229172f011153519423690
title: 求斐波那契數列中的奇數之和
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

在這道題目中，我們需要寫一個函數，參數爲一個正整數 `num`，返回值爲斐波那契數列中，小於或等於 `num` 的奇數之和。

斐波那契數列的前兩個數字是 0 和 1。 後面的每個數字由之前兩數相加得出。 斐波那契數列的前七個數字分別爲：0、1、1、2、3、5、8。

比如，`sumFibs(10)` 應該返回 `10`。 因爲斐波那契數列中，比 `10` 小的數字只有 1、1、3、5。

# --hints--

`sumFibs(1)` 應返回一個數字。

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` 應返回 1785。

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` 應返回 4613732。

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` 應返回 5。

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` 應返回 60696。

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` 應返回 135721。

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
