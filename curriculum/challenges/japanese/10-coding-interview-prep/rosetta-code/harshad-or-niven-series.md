---
id: 595668ca4cfe1af2fb9818d4
title: ハーシャッド数 (ニーベン数)
challengeType: 1
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

ハーシャッド数またはニーベン数とは、自身の各桁の和で割り切れる1以上の正の整数です。

例えば、 `42` は、 `42` が `(4 + 2)` で割り切れるため、ハーシャッド数です。

この級数が昇順の数値として定義されていると仮定します。

# --instructions--

ハーシャッド数列の連続した要素を生成する関数を作成してください。

この関数を使用して、`n`より大きなハーシャッド数で始まる、ハーシャッド数列要素を10個持つ配列を返します。

# --hints--

`isHarshadOrNiven` は関数とします。

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` は`[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`を返す必要があります。

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` は`[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`を返す必要があります。

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` は`[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`を返す必要があります。

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
