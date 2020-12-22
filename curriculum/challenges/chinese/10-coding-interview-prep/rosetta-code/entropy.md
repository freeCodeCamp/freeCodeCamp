---
id: 599d15309e88c813a40baf58
title: 熵
challengeType: 5
videoUrl: ''
---

# --description--

任务：

计算给定输入字符串的香农熵H.

给定谨慎的随机变量$ X $，它是$ N $“符号”（总字符）的字符串，由$ n $个不同的字符组成（对于二进制，n = 2），位/符号中X的香农熵是：

$ H*2（X）= - \\ sum* {i = 1} ^ n \\ frac {count_i} {N} \\ log_2 \\ left（\\ frac {count_i} {N} \\ right）$

其中$ count_i $是字符$ n_i $的计数。

# --hints--

`entropy`是一种功能。

```js
assert(typeof entropy === 'function');
```

`entropy("0")`应该返回`0`

```js
assert.equal(entropy('0'), 0);
```

`entropy("01")`应该返回`1`

```js
assert.equal(entropy('01'), 1);
```

`entropy("0123")`应该返回`2`

```js
assert.equal(entropy('0123'), 2);
```

`entropy("01234567")`应该返回`3`

```js
assert.equal(entropy('01234567'), 3);
```

`entropy("0123456789abcdef")`应返回`4`

```js
assert.equal(entropy('0123456789abcdef'), 4);
```

`entropy("1223334444")`应返回`1.8464393446710154`

```js
assert.equal(entropy('1223334444'), 1.8464393446710154);
```

# --solutions--

