---
id: 5900f4b91000cf542c50ffcc
title: 问题333：特殊分区
challengeType: 5
videoUrl: ''
dashedName: problem-333-special-partitions
---

# --description--

可以以这样的方式划分所有正整数：分区的每个项可以表示为2ix3j，其中i，j≥0。

我们只考虑那些没有任何术语可以划分任何其他术语的分区。例如，17 = 2 + 6 + 9 =（21x30 + 21x31 + 20x32）的分区将无效，因为2可以除以6.分区17 = 16 + 1 =（24x30 + 20x30）也不会因为1可以除16. 17的唯一有效分区是8 + 9 =（23x30 + 20x32）。

许多整数具有多个有效分区，第一个是具有以下两个分区的11。 11 = 2 + 9 =（21x30 + 20x32）11 = 8 + 3 =（23x30 + 20x31）

让我们将P（n）定义为n的有效分区数。例如，P（11）= 2。

让我们只考虑具有单个有效分区的素数整数q，例如P（17）。

素数q &lt;100的总和使得P（q）= 1等于233。

找到质数q &lt;1000000的总和，使得P（q）= 1。

# --hints--

`euler333()`应返回3053105。

```js
assert.strictEqual(euler333(), 3053105);
```

# --seed--

## --seed-contents--

```js
function euler333() {

  return true;
}

euler333();
```

# --solutions--

```js
// solution required
```
