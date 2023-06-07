---
id: 5900f37a1000cf542c50fe8d
title: '問題 14：最長考拉茲序列'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

對正整數集定義如下迭代序列：

<div style='padding-left: 4em;'><var>n</var> → <var>n</var> / 2（<var>n</var> 爲偶數）</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1（<var>n</var> 爲奇數）</div>

從 13 開始使用上述規則，我們可以得到如下序列：

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

可以看出，該序列（從 13 開始到 1 結束）共包含 10 項。 雖然考拉茲猜想尚未得到證明，但是該猜想認爲以任意數字開始，序列均到 1 結束。

求出在小於 `limit` 的數中，哪個可以產生最長的考拉茲序列？

**Note:** Once the chain starts the terms are allowed to go above `limit`.

# --hints--

`longestCollatzSequence(14)` 應該返回一個數字。

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` 應該返回 9。

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` 應該返回 3711。

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` 應該返回 35655。

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` 應該返回 52527。

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` 應該返回 77031。

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` 應該返回 837799。

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
