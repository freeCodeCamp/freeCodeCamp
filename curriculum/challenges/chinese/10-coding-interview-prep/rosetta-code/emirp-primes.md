---
id: 599d0ba974141b0f508b37d5
title: Emirp奖金
challengeType: 5
videoUrl: ''
---

# --description--

<p>一个emirp（向后拼写的主要拼写）是素数，当它们被反转时（在它们的十进制表示中）是一个不同的素数。 </p><p>编写应能功能：显示前<b>n</b> eprimes numbers.Show在range.Show的eprimes数字eprimes的在range.Show <b><sup>第</sup> n <sup>个</sup></b> eprimes数目。 </p><p>该函数应该有两个参数。第一个将接收<b>n</b>或作为数组的范围。第二个将接收一个布尔值，它指定函数是否将eprimes作为数组或单个数字（范围中的素数或第<b>n <sup>个</sup></b>素数）返回。根据参数，函数应返回数组或数字。 </p>

# --hints--

`emirps`是一个功能。

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)`应该返回`[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

```js
assert.deepEqual(emirps(20, true), [
  13,
  17,
  31,
  37,
  71,
  73,
  79,
  97,
  107,
  113,
  149,
  157,
  167,
  179,
  199,
  311,
  337,
  347,
  359,
  389
]);
```

`emirps(10000)`应该返回`948349`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)`应该返回`[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

```js
assert.deepEqual(emirps([7700, 8000], true), [
  7717,
  7757,
  7817,
  7841,
  7867,
  7879,
  7901,
  7927,
  7949,
  7951,
  7963
]);
```

`emirps([7700,8000],true)`应该返回`11`

```js
assert.deepEqual(emirps([7700, 8000], false), 11);
```

# --solutions--

