---
id: 5900f3d01000cf542c50fee3
title: '問題 100：排列概率'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

If a box contains twenty-one colored discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

下一個這樣的安排，恰好有 50% 的機會隨機拿走兩個藍色圓盤，是一個包含八十五個藍色圓盤和三十五個紅色圓盤的盒子。

通過找到總共包含超過 `limit` 個光盤的第一個排列，確定盒子將包含的藍色光盤的數量。

# --hints--

`arrangedProbability(20)` 應該返回一個數字。

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` 應該返回 `15`。

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` 應該返回 `85`。

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` 應該返回 `97513`。

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` 應該返回 `3822685023`。

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` 應該返回 `756872327473`。

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
