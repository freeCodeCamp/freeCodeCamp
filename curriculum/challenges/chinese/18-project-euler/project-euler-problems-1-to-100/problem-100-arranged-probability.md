---
id: 5900f3d01000cf542c50fee3
title: '问题 100：排列概率'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

If a box contains twenty-one colored discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

下一个这样的安排，恰好有 50% 的机会随机拿走两个蓝色圆盘，是一个包含八十五个蓝色圆盘和三十五个红色圆盘的盒子。

通过找到总共包含超过 `limit` 个光盘的第一个排列，确定盒子将包含的蓝色光盘的数量。

# --hints--

`arrangedProbability(20)` 应该返回一个数字。

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` 应该返回 `15`。

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` 应该返回 `85`。

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` 应该返回 `97513`。

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` 应该返回 `3822685023`。

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` 应该返回 `756872327473`。

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
