---
id: 595608ff8bcd7a50bd490181
title: 冰雹序列
challengeType: 5
videoUrl: ''
dashedName: hailstone-sequence
---

# --description--

<p> Hailstone数字序列可以从起始正整数n生成： </p>如果n为1，则序列结束。如果n是偶数，那么序列的下一个n <code>= n/2</code>如果n是奇数，那么序列的下一个n <code>= (3 \* n) + 1</code>  <p> （未经证实的） <a href='https://en.wikipedia.org/wiki/Collatz conjecture' title='wp：Collat​​z猜想'>Collat​​z猜想</a>是任何起始编号的冰雹序列总是终止。 </p><p>冰雹序列也称为冰雹数（因为这些值通常受到多个下降和上升，如云中的冰雹），或者作为Collat​​z序列。 </p>任务：创建例程以生成数字的hailstone序列。使用例程表明，对于27号的冰雹序列具有开始与112个元件<code>27, 82, 41, 124</code> ，结束时用<code>8, 4, 2, 1</code>与显示具有最长冰雹序列的数目少于100,000一起序列的长度。 （但不要显示实际的序列！）参见： <a href='http://xkcd.com/710' title='链接：http：//xkcd.com/710'>xkcd</a> （幽默）。

# --hints--

`hailstoneSequence`是一个函数。

```js
assert(typeof hailstoneSequence === 'function');
```

`[[27,82,41,124,8,4,2,1], [351, 77031]]` `hailstoneSequence()`应返回`[[27,82,41,124,8,4,2,1], [351, 77031]]`

```js
assert.deepEqual(hailstoneSequence(), res);
```

# --seed--

## --after-user-code--

```js
const res = [[27, 82, 41, 124, 8, 4, 2, 1], [351, 77031]];
```

## --seed-contents--

```js
function hailstoneSequence() {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence () {
  const res = [];

  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  const h = hailstone(27);
  const hLen = h.length;
  res.push([...h.slice(0, 4), ...h.slice(hLen - 4, hLen)]);

  let n = 0;
  let max = 0;
  for (let i = 100000; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }
  res.push([max, n]);

  return res;
}
```
