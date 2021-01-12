---
id: 5900f37a1000cf542c50fe8d
title: 问题14：最长的Collat​​z序列
challengeType: 5
videoUrl: ''
dashedName: problem-14-longest-collatz-sequence
---

# --description--

为正整数集定义以下迭代序列：

`n` → `n` / 2（ `n`是偶数）

`n` →3 `n` + 1（ `n`为奇数）

使用上面的规则并从13开始，我们生成以下序列：

13→40→20→10→5→16→8→4→2→1

可以看出，该序列（从13开始并在1结束）包含10个项。虽然尚未证实（Collat​​z问题），但是认为所有起始数字都在1处结束。在给定`limit`下，哪个起始数产生最长链？注意：一旦链条启动，条款允许超过一百万。

# --hints--

`longestCollatzSequence(14)`应该返回9。

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)`应返回3711。

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)`应返回35655。

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)`应返回52527。

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(1000000)`应返回837799。

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
