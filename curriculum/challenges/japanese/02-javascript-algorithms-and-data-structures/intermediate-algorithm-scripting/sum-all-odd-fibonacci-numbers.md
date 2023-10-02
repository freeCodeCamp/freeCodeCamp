---
id: a5229172f011153519423690
title: すべての奇数のフィボナッチ数を合計する
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

正の整数 `num` が与えられたときに、`num` 以下の奇数のフィボナッチ数の和を返してください。

フィボナッチ数列の最初の 2 つの数字は 0 と 1 です。 数列内の他の数はすべて、前の 2 つの数の和になっています。 フィボナッチ数列の最初の 7 つの数字は、0、1、1、2、3、5、8 です。

たとえば、`sumFibs(10)` は、`10` 以下のすべての奇数のフィボナッチ数が 1、1、3、5 なので、`10` を返す必要があります。

# --hints--

`sumFibs(1)` は数値を返す必要があります。

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` は 1785 を返す必要があります。

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` は 4613732 を返す必要があります。

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` は 5 を返す必要があります。

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` は 60696 を返す必要があります。

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` は 135721 を返す必要があります。

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
