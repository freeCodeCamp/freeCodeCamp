---
id: 5900f4341000cf542c50ff46
title: '問題 199: 反復的に円を埋める'
challengeType: 1
forumTopicId: 301837
dashedName: problem-199-iterative-circle-packing
---

# --description--

半径が等しい 3 つの円が大きな円の中に置かれ、いずれの対の円も互いに接しており、内側の円は重なっていません。 円で埋められていない隙間が 4 つあります。互いに接する円を置く作業を繰り返すことで、その隙間を埋めていきます。

<img class="img-responsive center-block" alt="重ならないように置かれた円の図" src="https://cdn-media-1.freecodecamp.org/project-euler/199-circles-in-circles.gif" style="background-color: white; padding: 10px;" />

それぞれの隙間に、そこに収まる最大の円を置きます。これを繰り返すたびに隙間の数が増えていきます。 3 回繰り返すと上図のように 108 個の隙間ができ、円で埋められていない面積の割合を小数第 8 位に四捨五入すると 0.06790342 となります 。

これを `n` 回繰り返したとき、円で埋められていない面積の割合を求めなさい。 回答は、四捨五入して小数第 8 位まで求め、x.xxxxxxxx の形式にすること。

# --hints--

`iterativeCirclePacking(10)` は数値を返す必要があります。

```js
assert(typeof iterativeCirclePacking(10) === 'number');
```

`iterativeCirclePacking(10)` は `0.00396087` を返す必要があります。

```js
assert.strictEqual(iterativeCirclePacking(10), 0.00396087);
```

`iterativeCirclePacking(3)` は `0.06790342` を返す必要があります。

```js
assert.strictEqual(iterativeCirclePacking(3), 0.06790342);
```

# --seed--

## --seed-contents--

```js
function iterativeCirclePacking(n) {

  return true;
}

iterativeCirclePacking(10);
```

# --solutions--

```js
function iterativeCirclePacking(n) {
  let k1 = 1;
  let k0 = k1 * (3 - 2 * Math.sqrt(3));
  let a0 = 1 / (k0 * k0);
  let a1 = 3 / (k1 * k1);
  a1 += 3 * getArea(k0, k1, k1, n);
  a1 += getArea(k1, k1, k1, n);
  let final = ((a0 - a1) / a0).toFixed(8);

  return parseFloat(final);
  function getArea(k1, k2, k3, depth) {
      if (depth == 0) return 0.0;
      let k4 = k1 + k2 + k3 + 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
      let a = 1 / (k4 * k4);
      a += getArea(k1, k2, k4, depth - 1);
      a += getArea(k2, k3, k4, depth - 1);
      a += getArea(k3, k1, k4, depth - 1);
      return a;
  }
}
```
