---
id: 595608ff8bcd7a50bd490181
title: ヘイルストーンシーケンス (コラッツ数列)
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

The Hailstone sequence of numbers can be generated from a starting positive integer, `n` by:

- If `n` is `1` then the sequence ends
- `n` が`even` (偶数) の場合、シーケンスの 次の `n` は `= n/2`
- `n` が `odd` (奇数) の場合、シーケンスの次の `n` は `= (3 * n) + 1`

コラッツの予想 (証明されていない) では、初期値が何であれ、ヘイルストーンシーケンスは常に終了するとされています。

ヘイルストーンシーケンスは、ヘイルストーン数としても知られています (値が通常は雲の中の雹 (ヘイルストーン) のように何度も上下するためです)。あるいはコラッツ数列とも呼ばれます。

# --instructions--

1. Create a routine to generate the hailstone sequence for a number
2. この関数は、最長のヘイルストーンシーケンスを取る `limit` 未満の数とそのシーケンスの長さを持つ配列を返す必要があります。 (ただし、実際のシーケンスは表示しないでください！)

# --hints--

`hailstoneSequence` は関数とします。

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` は配列を返す必要があります。

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` は `[27, 112]` を返す必要があります。

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` は `[35655, 324]` を返す必要があります。

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` は `[77031, 351]` を返す必要があります。

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
