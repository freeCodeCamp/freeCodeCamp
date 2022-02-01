---
id: 594ecc0d9a8cf816e3340187
title: タクシー数
challengeType: 5
forumTopicId: 302337
dashedName: taxicab-numbers
---

# --description--

[タクシー数](https://en.wikipedia.org/wiki/Hardy–Ramanujan number "wp: Hardy–Ramanujan number") (ここで使用されている定義) は、2 通り以上の 2 つの正の立方数の和として表すことのできる正の整数です。

最初のタクシー数は `1729`で、次のようになります:

1<sup>3</sup> + 12<sup>3</sup> および

9<sup>3</sup> + 10<sup>3</sup>.

タクシー数には、次のような呼び方もあります:

<ul>
  <li>タクシー数</li>
  <li>タクシーキャブ数</li>
  <li>タクシー・キャブ数</li>
  <li>ハーディ＝ラマヌジャン数</li>
</ul>

# --instructions--

最小の `n` 個のタクシー数を返す関数を記述してください。 それぞれのタクシー数について、数値とその構成立方数を示します。

**こちらもご参照ください:**

<ul>
  <li>オンライン整数列大辞典の <a href='https://oeis.org/A001235' target='_blank'>A001235 タクシー数</a></li>
  <li>Wikipedia の<a href='https://en.wikipedia.org/wiki/Taxicab_number' target='_blank'>タクシー数</a></li>
</ul>

# --hints--

`taxicabNumbers` は関数とします。

```js
assert(typeof taxicabNumbers === 'function');
```

`taxicabNumbers` は配列を返す必要があります。

```js
assert(typeof taxicabNumbers(2) === 'object');
```

`taxicabNumbers` は数値の配列を返す必要があります。

```js
assert(typeof taxicabNumbers(100)[0] === 'number');
```

`taxicabNumbers(4)` は [1729, 4104, 13832, 20683] を返す必要があります。

```js
assert.deepEqual(taxicabNumbers(4), res4);
```

`taxicabNumbers(25)` は [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597] を返す必要があります。

```js
assert.deepEqual(taxicabNumbers(25), res25);
```

`taxicabNumbers(39)` の 20 ～ 29 番目の数値は [314496,320264,327763,373464,402597,439101,443889,513000,513856] となる必要があります。

```js
assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29);
```

# --seed--

## --after-user-code--

```js
const res4 = [1729, 4104, 13832, 20683];
const res25 = [
  1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656,
  110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763,
  373464, 402597
];

const res39From20To29 = [314496, 320264, 327763, 373464, 402597, 439101, 443889, 513000, 513856];
```

## --seed-contents--

```js
function taxicabNumbers(n) {

  return true;
}
```

# --solutions--

```js
function taxicabNumbers(nNumbers) {
  const cubeN = [];
  const s3s = {};

  const e = 100;
  for (let n = 1; n < e; n += 1) {
    cubeN[n] = n * n * n;
  }

  for (let a = 1; a < e - 1; a += 1) {
    const a3 = cubeN[a];
    for (let b = a; b < e; b += 1) {
      const b3 = cubeN[b];
      const s3 = a3 + b3;

      let abs = s3s[s3];
      if (!abs) {
        s3s[s3] = abs = [];
      }
      abs.push([a, b]);
    }
  }

  let i = 0;
  const res = [];
  Object.keys(s3s).forEach(s3 => {
    const abs = s3s[s3];
    if (abs.length >= 2) { // No two cube pairs found
      i += 1;
      if (i <= nNumbers) {
        res.push(s3);
      }
    }
  });
  return res.map(item => parseInt(item, 10));
}
```
