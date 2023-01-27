---
id: 594ecc0d9a8cf816e3340187
title: タクシー数
challengeType: 1
forumTopicId: 302337
dashedName: taxicab-numbers
---

# --description--

A taxicab number (the definition that is being used here) is a positive integer that can be expressed as the sum of two positive cubes in more than one way.

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

# --hints--

`taxicabNumbers` should be a function.

```js
assert(typeof taxicabNumbers === 'function');
```

`taxicabNumbers` should return an array.

```js
assert(typeof taxicabNumbers(2) === 'object');
```

`taxicabNumbers` should return an array of numbers.

```js
assert(typeof taxicabNumbers(100)[0] === 'number');
```

`taxicabNumbers(4)` should return [1729, 4104, 13832, 20683].

```js
assert.deepEqual(taxicabNumbers(4), res4);
```

`taxicabNumbers(25)` should return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]

```js
assert.deepEqual(taxicabNumbers(25), res25);
```

`taxicabNumbers(39)` resulting numbers from 20 - 29 should be [314496,320264,327763,373464,402597,439101,443889,513000,513856].

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
