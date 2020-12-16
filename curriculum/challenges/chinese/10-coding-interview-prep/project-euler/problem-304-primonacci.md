---
id: 5900f49d1000cf542c50ffaf
title: 问题304：Primonacci
challengeType: 5
videoUrl: ''
---

# --description--

对于任何正整数n，函数next_prime（n）返回最小质数p，使得p> n。

序列a（n）定义为： 对于n> 1，a（1）= next_prime（1014）和a（n）= next_prime（a（n-1））。

斐波那契数列f（n）定义为： 对于n> 1，f（0）= 0，f（1）= 1和f（n）= f（n-1）+ f（n-2）。

序列b（n）定义为f（a（n））。

求出∑b（n）为1≤n≤100000。 给出答案mod 1234567891011。

# --hints--

`euler304()`应该返回283988410192。

```js
assert.strictEqual(euler304(), 283988410192);
```

# --solutions--

