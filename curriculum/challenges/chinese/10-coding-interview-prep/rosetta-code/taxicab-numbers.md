---
id: 594ecc0d9a8cf816e3340187
title: 出租车号码
challengeType: 5
videoUrl: ''
dashedName: taxicab-numbers
---

# --description--

[出租车编号](<https://en.wikipedia.org/wiki/Hardy–Ramanujan number> "wp：Hardy-Ramanujan号码") （此处使用的定义）是一个正整数，可以用多种方式表示为两个正立方体的总和。第一个出租车编号是1729，即：1 <sup>3</sup> + 12 <sup>3</sup>和9 <sup>3</sup> + 10 <sup>3</sup> 。出租车号码也被称为：\*出租车号码\*出租车号码\*出租车号码\* Hardy-Ramanujan号码任务：编写一个返回最低N个出租车号码的函数。对于每个出租车编号，显示数字以及它的构成立方体。另请参阅：在线整数序列百科全书上的\[`http://oeis.org/A001235` A001235出租车编号]。 MathWorld上的[Hardy-Ramanujan数字](http://mathworld.wolfram.com/Hardy-RamanujanNumber.html) 。 MathWorld上的[出租车编号](http://mathworld.wolfram.com/TaxicabNumber.html) 。维基百科上的[出租车号码](https://en.wikipedia.org/wiki/Taxicab_number) 。

# --hints--

`taxicabNumbers`是一个功能。

```js
assert(typeof taxicabNumbers === 'function');
```

`taxicabNumbers`应该返回一个数组。

```js
assert(typeof taxicabNumbers(2) === 'object');
```

`taxicabNumbers`应返回一组数字。

```js
assert(typeof taxicabNumbers(100)[0] === 'number');
```

`taxicabNumbers(4)`必须返回[1729,4104,13832,20683]。

```js
assert.deepEqual(taxicabNumbers(4), res4);
```

taxicabNumbers（25）应该返回[1729,4104,13832,20683,32832,39312,40033,46683,64232,65728,110656,110808,134379,149389,165464,171288,195841,216027,216125,262656,314696,320264 ，327763,373464,402597]

```js
assert.deepEqual(taxicabNumbers(25), res25);
```

taxicabNumbers（39）由20  -  29得到的数字应为[314496,320264,327763,373464,402597,439101,443889,513000,513856]。

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
