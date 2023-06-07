---
id: 5900f37a1000cf542c50fe8d
title: '问题 14：最长考拉兹序列'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

对正整数集定义如下迭代序列：

<div style='padding-left: 4em;'><var>n</var> → <var>n</var> / 2（<var>n</var> 为偶数）</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1（<var>n</var> 为奇数）</div>

从 13 开始使用上述规则，我们可以得到如下序列：

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

可以看出，该序列（从 13 开始到 1 结束）共包含 10 项。 虽然考拉兹猜想尚未得到证明，但是该猜想认为以任意数字开始，序列均到 1 结束。

求出在小于 `limit` 的数中，哪个可以产生最长的考拉兹序列？

**Note:** Once the chain starts the terms are allowed to go above `limit`.

# --hints--

`longestCollatzSequence(14)` 应该返回一个数字。

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` 应该返回 9。

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` 应该返回 3711。

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` 应该返回 35655。

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` 应该返回 52527。

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` 应该返回 77031。

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` 应该返回 837799。

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
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
