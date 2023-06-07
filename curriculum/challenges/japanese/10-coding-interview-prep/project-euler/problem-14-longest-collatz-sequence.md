---
id: 5900f37a1000cf542c50fe8d
title: '問題 14: 最長のコラッツ数列'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

正の整数の集合について、次の反復数列が定義されています。

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> は偶数)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> は奇数)</div>

13 から始めて上のルールに従うと、次の数列になります。

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

この数列 (13 から始まり、1 で終わる) に 10 個の項が含まれていることが分かります。 まだ証明されていませんが (コラッツ問題)、どの数から始めても 1 で終わると考えられています。

与えられた `limit` より小さい数のうち、どの数から始めると連鎖が最も長くなりますか。

**注:** 連鎖が始まった後であれば項が `limit` を超えても構いません。

# --hints--

`longestCollatzSequence(14)` は数値を返す必要があります。

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` は 9 を返す必要があります。

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` は 3711 を返す必要があります。

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` は 35655 を返す必要があります。

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` は 52527 を返す必要があります。

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` は 77031 を返す必要があります。

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` は 837799 を返す必要があります。

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
