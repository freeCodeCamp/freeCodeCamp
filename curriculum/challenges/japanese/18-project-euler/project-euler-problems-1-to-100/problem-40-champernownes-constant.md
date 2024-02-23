---
id: 5900f3941000cf542c50fea7
title: '問題 40: チャンパーノウン定数'
challengeType: 1
forumTopicId: 302066
dashedName: problem-40-champernownes-constant
---

# --description--

正の整数を連結することで得られる、次のような無理数の小数を考えます。

0.12345678910**1**112131415161718192021...

小数第 12<sup></sup> 位が 1 であることが分かります。

*d<sub>n</sub>* が小数第 *n* 位を表すとき、次の式の値を求めなさい。

d<sub>1</sub> × d<sub>10</sub> × d<sub>100</sub> × d<sub>1000</sub> × d<sub>10000</sub> × d<sub>100000</sub> × d<sub>1000000</sub>

# --hints--

`champernownesConstant(100)` は数値を返す必要があります。

```js
assert(typeof champernownesConstant(100) === 'number');
```

`champernownesConstant(100)` は 5 を返す必要があります。

```js
assert.strictEqual(champernownesConstant(100), 5);
```

`champernownesConstant(1000)` は 15 を返す必要があります。

```js
assert.strictEqual(champernownesConstant(1000), 15);
```

`champernownesConstant(1000000)` は 210 を返す必要があります。

```js
assert.strictEqual(champernownesConstant(1000000), 210);
```

# --seed--

## --seed-contents--

```js
function champernownesConstant(n) {

  return true;
}

champernownesConstant(100);
```

# --solutions--

```js
function champernownesConstant(n) {
  let fractionalPart = '';
  for (let i = 0; fractionalPart.length <= n; i++) {
    fractionalPart += i.toString();
  }

  let product = 1;
  for (let i = 0; i < n.toString().length; i++) {
    const index = 10 ** i;
    product *= parseInt(fractionalPart[index], 10);
  }

  return product;
}
```
