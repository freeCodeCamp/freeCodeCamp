---
id: 5900f3d01000cf542c50fee3
title: '問題 100: 調整された確率'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

箱の中に、15 枚の青い円盤と 6 枚の赤い円盤、計 21 枚の色付き円盤が入っています。2 枚の円盤を無作為に取り出したときにそれが青い円盤 2 枚である確率は、次のように求めることができます。

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

無作為に取り出した 2 枚が青い円盤である確率がちょうど 50% になるように調整した場合、枚数が次に多いのは、85 枚の青い円盤と 35 枚の赤い円盤が入った箱です。

合計枚数が `limit` より多くなる最初の調整方法を見つけ、その箱に入っている青い円盤の枚数を求めなさい。

# --hints--

`arrangedProbability(20)` は数値を返す必要があります。

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` は `15` を返す必要があります。

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` は `85` を返す必要があります。

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` は `97513` を返す必要があります。

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` は `3822685023` を返す必要があります。

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` は `756872327473` を返す必要があります。

```js
assert.strictEqual(arrangedProbability(1000000000000), 756872327473);
```

# --seed--

## --seed-contents--

```js
function arrangedProbability(limit) {

  return true;
}

arrangedProbability(20);
```

# --solutions--

```js
function arrangedProbability(limit) {
  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/
  let blue = 15;
  let discs = 21;

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2;
    const nextDiscs = 4 * blue + 3 * discs - 3;

    blue = nextBlue;
    discs = nextDiscs;
  }
  return blue;
}
```
